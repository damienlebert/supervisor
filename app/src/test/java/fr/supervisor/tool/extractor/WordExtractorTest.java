package fr.supervisor.tool.extractor;

import fr.supervisor.model.Requirement;
import static org.junit.Assert.*;
import org.junit.Test;

import java.io.File;
import java.util.List;
import java.util.regex.Pattern;
import org.junit.Assert;

/**
 * User: sdaclin
 * Date: 20/07/13
 * Time: 15:04
 */
public class WordExtractorTest {
    @Test
    public void extractWord(){
        String testFile = "resources\\test\\refFiles\\conception.docx";
       //WordExtractor.extractSection(new File("C:\\\\siclop\\\\01 - Versions\\\\G4R9\\\\05 - Conception\\\\CDS-002157-03-Conception-SICLOP-G4R9C0-DFD.docx"));
        Requirement rootRequirement = new Requirement("root");
        WordExtractor.extractRequirements(
                //ES Pattern
                Pattern.compile("ES-CLIENT-PROJET-V\\d+-\\d+"),
                //Word style pattern
                Pattern.compile("Titre2"),
                //Docx file to extract requirement from
                new File(testFile),
                //root element for the requirements tree
                rootRequirement);

        assertNotNull("Impossible de trouver l'exigence ES-CLIENT-PROJET-V1-1 dans le document " + testFile, rootRequirement.findById("ES-CLIENT-PROJET-V1-1"));
        System.out.println("REQUIREMENTS TREE : \n"+rootRequirement);
    }
}
