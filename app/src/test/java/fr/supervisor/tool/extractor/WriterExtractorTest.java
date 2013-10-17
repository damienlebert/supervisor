/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.supervisor.tool.extractor;

import fr.supervisor.model.Requirement;
import java.io.File;
import java.util.regex.Pattern;
import static org.junit.Assert.assertNotNull;
import org.junit.Test;


/**
 *
 * @author dlebert
 */
public class WriterExtractorTest {
    @Test
    public void extractWriter(){
        String testFile = "resources\\test\\refFiles\\conception.odt";
       //WordExtractor.extractSection(new File("C:\\\\siclop\\\\01 - Versions\\\\G4R9\\\\05 - Conception\\\\CDS-002157-03-Conception-SICLOP-G4R9C0-DFD.docx"));
        Requirement rootRequirement = new Requirement("root");
        WriterExtractor.extractRequirements(
                //ES Pattern
                //Pattern.compile("ES-CLIENT-PROJET-V\\d+-\\d+"), 
                Pattern.compile("E[SC]-FT-SICLOP-G4R9C2-0[\\d]+"),
                //OpenOffice style pattern
                Pattern.compile("P[\\d][\\d][\\d]*"),
                //Odt file to extract requirement from
                new File(testFile),
                //root element for the requirements tree
                rootRequirement);

        assertNotNull("Impossible de trouver l'exigence ES-CLIENT-PROJET-V1-1 dans le document " + testFile, rootRequirement.findById("ES-FT-SICLOP-G4R9C2-003"));
        System.out.println("REQUIREMENTS TREE : \n"+rootRequirement);
    }
}
