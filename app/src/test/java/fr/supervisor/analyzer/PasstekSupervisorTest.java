/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.supervisor.analyzer;

import fr.supervisor.model.Project;
import fr.supervisor.model.configuration.ArtifactConfFile;
import fr.supervisor.model.configuration.ArtifactConfSVN;
import fr.supervisor.model.configuration.PhaseConf;
import fr.supervisor.model.configuration.ProjectConf;
import java.net.URL;
import java.nio.file.Paths;
import java.util.regex.Pattern;
import org.junit.Test;
import serializer.ProjectSerializer;

/**
 *
 * @author dlebert
 */
public class PasstekSupervisorTest {
    @Test
    public void testRun() throws Exception {
        ProjectConf projectConf = new ProjectConf.Builder()
                .path(Paths.get("C:\\Travail\\Supervisor\\Data\\Projet"))
                .svn(new URL("http://svn.tpas.astek.fr/projetX/trunk"))
                .version(Pattern.compile("v[\\d]*"))
                .ignore(Pattern.compile("archive|validé|envoyé|old"))
                .phase(new PhaseConf.Builder()
                        .name("Specifications")
                        .artifact(new ArtifactConfFile.Builder()
                                .directoryPattern(Pattern.compile(".*SpecsEtConception.*"))
                                .fileNamePattern(Pattern.compile("SPEC-[\\d]*.*.docx"))
                                .requirementPattern(Pattern.compile("EC-.*"))
                                .stylePattern(Pattern.compile(".*[Tt].*[\\d]*"))
                                .build())
                        .build())
                .phase(new PhaseConf.Builder()  //phase conception
                        .name("Conception")
                        .artifact(new ArtifactConfFile.Builder()
                                .directoryPattern(Pattern.compile(".*SpecsEtConception.*"))
                                .fileNamePattern(Pattern.compile("SPEC-[\\d]*.*.docx"))
                                .requirementPattern(Pattern.compile("EC-.*"))
                                .stylePattern(Pattern.compile(".*[Tt].*[\\d]*"))
                                .build())
                        .build())
                .phase(new PhaseConf.Builder()  //phase Dev
                        .name("Dev")
                        .artifact(new ArtifactConfSVN.Builder()
                                .url(new URL("http://svn.tpas.astek.fr/projetX/trunk"))
                                .user("dlebert")
                                .password("dlebert")
                                .requirementPattern(Pattern.compile("^EC-.*"))
                                .build())
                        .build())
                .build();


         //retrieve the former project object, if it exists
        Project project = ProjectSerializer.loadProject("C:\\Travail\\Supervisor\\Supervisor\\web\\src\\main\\webapp\\data\\data.json.js");
        //no project found
        if(project == null){
            project = new Project("Passtek",projectConf);
        }
        else{
            //project already exists -> set its configuration
            project.setConf(projectConf);
        }
        

        Supervisor supervisor = new Supervisor(project);
        supervisor.run();

        System.out.println(project.toString());

        //Save the project as a json file
        ProjectSerializer.saveProject("C:\\Travail\\Supervisor\\Supervisor\\web\\src\\main\\webapp\\data\\data.json.js", project);
    }
}
