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
                Pattern.compile("ES-CLIENT-PROJET-V\\d+-\\d+"),
                //OpenOffice style pattern .
                //Fichier Word sauvegarder en .odt avec Word : Conserve le nom de style word "Titre 2"
                //Fichier word ouvert avec OpenOffice et sauvegardé en .odt : 
                //            Remplacement des styles titres par Heading "Heading 2"
                //            Pour un style perso  "ASTEK - Titre 2"
                //Fichier odt creés dans OpenOffice : remplacement des styles titres par Heading "Heading 2"
                Pattern.compile("Head"),
                //Odt file to extract requirement from
                new File(testFile),
                //root element for the requirements tree
                rootRequirement);

        assertNotNull("Impossible de trouver l'exigence ES-CLIENT-PROJET-V1-2 dans le document " + testFile, rootRequirement.findById("ES-CLIENT-PROJET-V1-2"));
        System.out.println("REQUIREMENTS TREE : \n"+rootRequirement);
    }
}
