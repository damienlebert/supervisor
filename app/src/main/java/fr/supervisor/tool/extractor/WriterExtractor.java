package fr.supervisor.tool.extractor;
import fr.supervisor.model.Requirement;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Pattern;


import org.odftoolkit.simple.TextDocument;
import org.odftoolkit.simple.common.navigation.TextNavigation;
import org.odftoolkit.simple.common.navigation.TextSelection;
import org.odftoolkit.odfdom.incubator.doc.text.OdfTextHeading;
import org.odftoolkit.odfdom.incubator.doc.text.OdfTextParagraph;

import org.w3c.dom.Node;


/**
 * User: sdaclin
 * Date: 20/07/13
 * Time: 14:58
 */
public class WriterExtractor{
    
 
    /**
     * Extracts requirements from a docx file. Maintain a tree-like structure of requirements whose root element is rootRequirement
     * Attempts to find the parent requirement as well
     *
     * @param requirementPattern requirement pattern
     * @param writerStylePattern   MS Word style pattern, requirements will only be searched in paragraphs using those styles
     * @param file               File in which requirements will be searched
     * @param rootRequirement    parent Requirement : it's the root of the tree-like structure
     * @return a List of requirements found in this file
     */
    public static List<Requirement> extractRequirements(Pattern requirementPattern, Pattern writerStylePattern, File file, Requirement rootRequirement) {

      List<Requirement> listRequirements = new ArrayList<Requirement>();

        try {
            
            if (requirementPattern == null)
                throw new IllegalArgumentException("Le pattern de requirement est obligatoire");
            if (! file.getName().endsWith(".odt"))
                throw new IllegalArgumentException("Impossible d'extraire des requirements dans un fichier qui n'est pas au format opt");
     
            TextDocument odf = TextDocument.loadDocument(file);
            TextNavigation nav = new TextNavigation(requirementPattern.pattern(), odf);
            TextSelection curSelection;
            Node curParentSelection;
            String curStyle;
            String fullRequirement;
            String requirementID;
            String requirementWithoutID;
            String fullParentParagraph;
            Boolean parentParam;   
            
            while (nav.hasNext()){
                  
                curSelection = (TextSelection) nav.nextSelection();

                curStyle = curSelection.getContainerElement().getAttribute("text:style-name");
                System.out.println(curStyle);
                if (curStyle == null || !writerStylePattern.matcher(curStyle).find()) {
                    continue;
                }
               
                fullRequirement = curSelection.getContainerElement().getTextContent();
                System.out.println("Full : " + fullRequirement);

                requirementID = curSelection.getText();

                System.out.println("ID : " + requirementID);

                requirementWithoutID = fullRequirement.replace(requirementID, "");

                //search for tags in requirementWithoutID
                Set<String> tags = TagExtractor.extractTags(requirementWithoutID);
                System.out.println("Tags : " + tags.toString());
                //comment without the requirement id and nor the tags
                String comment = requirementWithoutID.replaceAll("\\[.*\\]","").trim();
                
                System.out.println("Comment : " + comment);

                Requirement newRequirement = new Requirement(requirementID);
                newRequirement.setComment(comment);
                newRequirement.addAllTag(tags);
                curParentSelection = curSelection.getElement();
                
                //Retrieve data from next paragraph
                parentParam = false;
                while (!parentParam){
                    if (curParentSelection.getNextSibling()!= null){
                        if ( (curParentSelection.getNextSibling().getClass() == OdfTextParagraph.class) || (curParentSelection.getNextSibling().getClass() ==OdfTextHeading.class) ){
                            parentParam=true;
                            continue;
                        }
                    }
                    curParentSelection = curParentSelection.getParentNode();
                }                
                fullParentParagraph = curParentSelection.getNextSibling().getTextContent();
                System.out.println(fullParentParagraph);


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
                   
        /*
 
            Iterator<Paragraph> it = odf.getParagraphIterator();
            Paragraph curParagraph;
                    
            while (it.hasNext()){
                curParagraph = it.next();
                
                //System.out.println(curParagraph.getTextContent());
                //Check if it defines a title matching the wordStylePattern
                if (curParagraph.getStyleName() == null || !writerStylePattern.matcher(curParagraph.getStyleName()).find() || curParagraph.getTextContent() == null) {
                    continue;
                }
                System.out.println("Classe : " + curParagraph.getClass());
                fullRequirement = curParagraph.getTextContent();
                System.out.println("Full : " + fullRequirement);
                Matcher requirementMatcher = requirementPattern.matcher(fullRequirement);

                //if the full requirement contains and id that matches the pattern
                if (!requirementMatcher.find()) {
                    continue;
                }
                requirementID = requirementMatcher.group();
                System.out.println("ID : " + requirementID);
                requirementWithoutID = fullRequirement.replace(requirementID, "");

                //search for tags in requirementWithoutID
                Set<String> tags = TagExtractor.extractTags(requirementWithoutID);
                System.out.println("Tags : " + tags.toString());
                //comment without the requirement id and nor the tags
                String comment = requirementWithoutID.replaceAll("\\[.*\\]","").trim();
                
                System.out.println("Comment : " + comment);

                Requirement newRequirement = new Requirement(requirementID);
                newRequirement.setComment(comment);
                newRequirement.addAllTag(tags);

                //get the parent requirement id, if it exists(in the next paragraph)
                Paragraph nextParagraph = it.next();

                //Retrieve every run block that may contain the parent id
                fullParentParagraph = nextParagraph.getTextContent();

                //Check if a requirement id is in this paragraph by searching for every requiremnt already found
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
                //search for tags in fullParentParagraph
                tags = TagExtractor.extractTags(fullParentParagraph);
                newRequirement.addAllTag(tags);

                listRequirements.add(newRequirement);
            }
     
     */ 
     
        } catch (Exception ex) {
            Logger.getLogger(WordExtractor.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            return listRequirements;
        }
    }
}
