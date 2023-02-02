import java.util.*;

public class formatLearningGoal {
    public static void main(String[] args) {
        
        String text = "read and respond thoughtfully to variety of texts and variety of literary forms. - respond in writing using Standard English proficiently to communicate ideas articulately and insightfully for a variety of  purposes and audiences. - speak Standard English proficiently to communicate ideas clearly and logically. - choose and apply strategies that enhance the fluent and proficient use of language arts. - listen and respond actively, critically, and responsibly. - demonstrate the ability to develop as a writer by using the writing process. - utilize a wide-range of text-based vocabulary. - demonstrate Proficiency- level essays in analytical work. - discuss literary merits of traditional and contemporary pieces of fiction, poetry, and drama. - effectively communicate ideas in written and oral presentations regarding the analysis, interpretation, and synthesis of literature. - develop, practice, and write analytical and critical responses for classical and contemporary pieces of fiction, poetry, and drama. - understand, explore, and respond to classical and contemporary literature as a participant in class discussions. - utilize technology to gather, evaluate, and synthesize information and to communicate understanding. - Apply appropriate conventions of grammar for formative and sum";
        
        int i = 0;
        while (i < text.length())
        {
            System.out.println(text.substring(i, text.indexOf(" - ")));
            i = text.indexOf(" - ");
        }
        
    }
}