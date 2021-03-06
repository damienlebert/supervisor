package fr.supervisor.tool.extractor;

import fr.supervisor.model.Requirement;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Pattern;
import org.odftoolkit.odfdom.dom.OdfContentDom;

import org.odftoolkit.simple.TextDocument;
import org.odftoolkit.simple.common.navigation.TextNavigation;
import org.odftoolkit.simple.common.navigation.TextSelection;
import org.odftoolkit.simple.text.Paragraph;
import org.odftoolkit.odfdom.dom.element.text.TextParagraphElementBase;
import org.odftoolkit.odfdom.incubator.doc.text.OdfTextHeading;
import org.odftoolkit.odfdom.incubator.doc.text.OdfTextParagraph;
import org.w3c.dom.Node;

/**
 * User: dlebert Date: 18/10/13 Time: 14:58
 */
public class WriterExtractor {

    /**
     * Extracts requirements from a odt file. Maintain a tree-like structure of
     * requirements whose root element is rootRequirement Attempts to find the
     * parent requirement as well
     *
     * @param requirementPattern requirement pattern
     * @param writerStylePattern Writer style pattern, requirements will only
     * be searched in paragraphs using those styles
     * @param file File in which requirements will be searched
     * @param rootRequirement parent Requirement : it's the root of the
     * tree-like structure
     * @return a List of requirements found in this file
     */
    public static List<Requirement> extractRequirements(Pattern requirementPattern, Pattern writerStylePattern, File file, Requirement rootRequirement) {

        List<Requirement> listRequirements = new ArrayList<Requirement>();

        try {

            if (requirementPattern == null) {
                throw new IllegalArgumentException("Le pattern de requirement est obligatoire");
            }
            if (!file.getName().endsWith(".odt")) {
                throw new IllegalArgumentException("Impossible d'extraire des requirements dans un fichier qui n'est pas au format opt");
            }

            TextDocument odf = TextDocument.loadDocument(file);
            TextNavigation nav = new TextNavigation(requirementPattern.pattern(), odf);
            TextSelection curSelection;
            Paragraph curParagraph;
            Node curParentSelection;
            String curStyle = null;
            String curParentStyle = null;
            String fullRequirement;
            String requirementID;
            String requirementWithoutID;
            String fullParentParagraph = "";
            Boolean parentParam;

            while (nav.hasNext()) {
                //Retriving Paragraph countaining the text selection
                curSelection = (TextSelection) nav.nextSelection();
                curParagraph = Paragraph.getInstanceof((TextParagraphElementBase) curSelection.getElement());

                // Retrieve Style and parent style. We need parent style because when you save a .docx into .odt format
                // style names will be in parent style names 

                if (curParagraph.getStyleHandler() != null) {
                    
                    if (curParagraph.getStyleHandler().getStyleElementForRead() != null) {
                        curStyle = curParagraph.getStyleHandler().getStyleElementForRead().getAttribute("style:display-name");
                        curParentStyle = curParagraph.getStyleHandler().getStyleElementForRead().getParentStyle().getAttribute("style:display-name");
                    }
                }
                if ((curStyle == null || !writerStylePattern.matcher(curStyle).find()) && (curParentStyle == null || !writerStylePattern.matcher(curParentStyle).find())) {
                    continue;
                }

                //System.out.println("Style : " + curStyle);
                //System.out.println("Parent Style : " + curParentStyle);

                fullRequirement = curSelection.getContainerElement().getTextContent();
                //System.out.println("Full : " + fullRequirement);

                requirementID = curSelection.getText();

                //System.out.println("ID : " + requirementID);

                requirementWithoutID = fullRequirement.replace(requirementID, "");

                //looking for tags in requirementWithoutID
                Set<String> tags = TagExtractor.extractTags(requirementWithoutID);
                //System.out.println("Tags : " + tags.toString());
                //comment without the requirement id and nor the tags
                String comment = requirementWithoutID.replaceAll("\\[.*\\]", "").trim();

                //System.out.println("Comment : " + comment);
            
                Requirement newRequirement = new Requirement(requirementID);
                newRequirement.setComment(comment);
                newRequirement.addAllTag(tags);
                curParentSelection = curSelection.getElement();

                //Retrieve data from next paragraph

                parentParam = false;
                while (!parentParam) {
                    //If no paragraph found
                    if (curParentSelection.getClass() == OdfContentDom.class){
                        parentParam = true;
                        continue;
                    }  
                    //If next element is a paragraph (or heading)
                    if (curParentSelection.getNextSibling() != null) {
                        if ((curParentSelection.getNextSibling().getClass() == OdfTextParagraph.class) || (curParentSelection.getNextSibling().getClass() == OdfTextHeading.class)) {
                            fullParentParagraph = curParentSelection.getNextSibling().getTextContent();
                            //System.out.println(fullParentParagraph);
                            parentParam = true;
                            continue;
                        }
                 
                    }
                    curParentSelection = curParentSelection.getParentNode();
                }
                
                //Check if a requirement id is in this paragraph by searching for every requirement already found
                boolean hasParent = false;
                for (Requirement requirement : rootRequirement.getAllChildren()) {

                    if (fullParentParagraph.contains(requirement.getId())) {
                        requirement.addChild(newRequirement);
                        hasParent = true;
                    }
                }
                if (!hasParent) {
                    rootRequirement.addChild(newRequirement);
                }

                // search for tags in fullParentParagraph;
                tags = TagExtractor.extractTags(fullParentParagraph);
                newRequirement.addAllTag(tags);

                listRequirements.add(newRequirement);
                // rootRequirement.addChild(newRequirement);
            }

        } catch (Exception ex) {
            Logger.getLogger(WordExtractor.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            return listRequirements;
        }
    }
}
