import java.util.*;

public class formatLearningGoal {
    public static void main(String[] args) {
        
        String text = 
        "- identify the richness and multiplicity of meaning in Shakespeare's plays. - learn to translate the words of particular scenes into performance. - identify Shakespeare's poetry and his use of imagery as a means of revealing character and theme. - derive motivation of pivotal characters by studying and discussing their spoken words and interaction with other characters. - read aloud, with fluidity and understanding, the language of Shakespeare. - critically analyze a variety of media, including film, video, live performance, electronic sources and music. - learn to distinguish nuances of meaning in the way a particular speech is delivered. - make connections between the social and political issues represented in Shakespeare's plays and those issues of press";
        
        text = text + " - ";

        while (true)
        {
            int x = text.indexOf(" - ");

            if (x == -1)
            {
                break;
            }
            else
            {
                System.out.println("<li>" + text.substring(2, x) + "</li>");
                text = text.substring(x+1);
            }
        }
        
    }
}