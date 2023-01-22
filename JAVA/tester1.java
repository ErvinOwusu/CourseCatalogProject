import java.util.*;

public class tester1 {
    public static void main(String[] args) {
        String[] course = new String[] {
                /*
                 * "642 - Photography 2/SCSU Digital Photography  ????  Grade Level: 9-12 Credit Value: 0.5 Prerequisite: Photography 1 The photography processes explored in Photography 1 will be extended in Photography 2. Students will be introduced to additional equipment, light sources, and techniques. Students will hone their skills and techniques and be able to make a connection between personal expression and the intentional use of photographic materials. Students will also use digital imagery and computer technology in this course. Students in this course have the opportunity to earn 3 credits from Southern Connecticut State"
                 * ,
                 * "638 - Advanced Placement Studio Art  Grade Level: 11-12 Credit Value: 1 Prerequisite: Advanced Art, Advanced Photography or Graphic Design 3 and teacher recommendation which includes a portfolio review with department chairperson. (Strongly recommended students take Photography 1 for all portfolios) The Advanced Placement in Studio Art program enables highly motivated students to perform at the college level while still in high school. This college-level course adheres to the suggested College Board Curriculum.  Students can choose one portfolio type per year to submit for grading. The AP Studio portfolio is a performance-based exam, rather than a written exam. Students are expected to pay for and submit their AP portfolio to the College Board in May for evaluation.  Students will have to keep a sketchbook and do assignments the summer before"
                 * ,
                 * "648 - Graphic Design 1 Grade Level: 9-12 Credit Value: 0.5 Prerequisite: None This elective course in visual communication teaches skills and concepts for the production of commercial art. Students will utilize art programs on the Macintosh platform to create their graphic design pieces. Elements to be studied include typography usage and design, logo and icon design, corporate identity and page layout. "
                 * ,
                 * "653 - Graphic Design 2 Grade Level: 9-12 Credit Value: 0.5 Prerequisite: Graphic Design 1 This elective course in visual communication teaches skills and concepts for the production of commercial art beyond those learned in Graphic Design 1. Elements to be studied include three dimensional design and industrial design. Students will utilize art programs on the Macintosh platform to create their graphic works. "
                 * ,
                 * "654 - Graphic Design 3 Grade Level: 11-12 Credit Value: 1 Prerequisite: Graphic Design 2 (strongly recommended Photography 1 and Drawing & Painting 1) This elective course is offered to students who show an in-depth interest in the field of graphic design. Graphic Design 3 will strengthen skills introduced in the previous two graphic design courses. Students will work primarily with clients in the school, district and surrounding communities. Class projects will also be assigned that bolster the skills they needs to serve their clients. Elements to be studied will be portfolio design, resume design, and artwork presentation for shows and everyday postings around the school."
                 */

                "518 - Musical Theater Workshop  -  Will not run 2022-2023 Grade Level: 9-12 Credit Value: 0.5 Prerequisite: None Musical Theater Workshop is a course designed for aspiring vocalists.  Students enrolled in this course will study and learn a variety of repertoire from the Broadway musical genre, including the storyline and context within which the music is used. Students will be challenged to learn solo/duet/ensemble song selections in developing an audition portfolio as well as a digital recording portfolio of their own performance. Attendance at all rehearsals and performances is required. Performance opportunities include, but are not limited to, scheduled concerts, Fine Arts department events, and community performances. This course can be taken as a 1⁄2 year course or taken repeatedly as a full year course (if student schedule allows)",
                "529 - Concert Choir  (SEM)   530 - Concert Choir  (YR)   Grade Level: 9-12 Credit Value: 1 or .5 Prerequisite: None Course may be taken multiple times for additional credit and advanced leveling Students who participate in this full year performance ensemble will be challenged to develop their vocal technique and performance practices. A wide variety of performance literature will enable students to create strong foundations in vocal music, identify basic forms and techniques of singing, and explore the range of their individual vocal capacities. Attendance at all rehearsals and performances is required. Performances include, but are not limited to, scheduled concerts and Fine Arts events",
                "540 - Music Theory Grade Level: 9-12 Credit Value: 0.5Prerequisite: Prior participation in any school and/or private instruction. Music Theory is a half-year, comprehensive course of study in music. This course will be an introduction to the basics of musical language. Students will explore fundamental and technical aspects of musical language, its historical foundations, and common practices. Students will be challenged to advance their individual music skills, express musical ideas, develop a command of the written/aural language, and create original compositions in different styles, using a variety of traditional instruments and music technology applications.",
                "547 -Applied Instrumental Study Grade Level: 9-12 Credit Value: 0.5 Prerequisite: None Applied Instrumental Study is a course that can be repeated for multiple semesters. Students will have the opportunity to develop and then master the skills necessary to perform a variety of classical and contemporary guitar and/or piano music. Students will learn the history, musical language, literature and common practices associated with the instruments' style. The school will provide a limited amount of instruments. (Students in need of a school guitar should speak to the instructor prior to enrolling in this class to ensure availability).",
                "525 - Jazz Improvisation (YR) 528 - Jazz Improvisation (SEM) Grade Level: 9-12 Credit Value: 0.5 Prerequisite: Band, Applied Instrumental studies or teacher recommendation Course may be taken multiple times for additional credit and advanced leveling. Students have the opportunity to further their musical experience as a member of a unique rock ensemble. Students will study contemporary/rock styles, structure, techniques, and song selections. This unique ensemble will feature instrumental performance and singers, as well as creativity and use of music technology software to assist in the development of original arrangement/compositions. Commitment to a more in-depth study of music is essential both during class time and at home practice. Attendance at all rehearsals and performances is required. Performance opportunities include, but are not limited to, scheduled concerts, Fine Arts department events, and community performances. ",
                "546 - ECE Music Appreciation Grade Level: 10-12 Credit Value: 0.5 (UConn 3 credits) Prerequisite: None As its name implies, this course is designed to develop an appreciation of the art of music, through the study of a variety of styles and examples of music covering musical trends of the last 500 years. Although most of the focus will be on  western historical music trends, the range of study includes from Bach, Mozart, and Beethoven, to Gershwin, Jackson, and Macklemore. Students will have daily opportunities to gain deeper understanding of the beauty and details within the music, and find common themes that connect music across cultures and across time periods of history.  Students who meet the standard/criteria established by the UConn Music  Department will receive 3 college credits through the ECE program.  Students must register online with UConn ECE in order to be eligible. ",
                "MUSI1011 - ECE Fundamentals and Ear Training 1  Grade Level:  10-12 Credit Value: 0.5 (UConn 3 Credits)   Prerequisite: Music Theory The goal of the ECE Fundamentals and Ear Training 1 course is to develop a student's ability to recognize, understand and describe basic materials and processes of music that are heard or presented in everyday music ensembles. The achievement of this goal may be best promoted by integrated approaches to the student's development of Music Literacy Ear training (aural skills) and rudimentary keyboard skills. ",
                "MUSI1012 - ECE Fundamentals and Ear Training 2 Grade Level: 10-12 Credit Value: 0.5 (UConn 3 Credits)Prerequisite: ECE Fundamentals and Ear Training 1 MUSIC 1011 The goal of the ECE Fundamentals and Ear Training 2 course is the further development of skills in music reading, sight, signing, and writing. The ultimate goal of the ECE Fundamentals and Ear Training course is to develop a student's ability to write, sign, and play major scales, all three forms of minor scales, pentatonic scale, whole-tone scale, Dorian, Phrygian, Lydian, and Mixolydian modes.",
                "MUSI1003 - ECE Popular Music and Diversity in American Society Grade Level: 10-12 Credit Value: 0.5 (UConn 3 Credits) Prerequisite: None The ECE Popular Music and Diversity in American Society course is an introduction to popular music and diversity in America: jazz, blues, Top 40 pop, rock, hip-hop, and other genres. Musicians and their music are studied in the context of Twentieth-century and contemporary American society, emphasizing issues of race, gender, class and resistance. ECE Music 1003 is designed to introduce students to the most significant genres of American popular music of the last one hundred years, and to the role of cultural diversity in their evolution. It Will emphasize pre-1940 African American genres, the music of rural and non-mainstream urban Caucasians, and post-1945 pop and rock music across the expanding American demographic spectrum, including new immigrant groups from the Caribbean basin and Central and South America. It seeks to make students more culturally discerning and active listeners by surveying the elements of music ( melody, rhythm, form, etc.) as used in popular styles, and their role in generating social meaning."
        };

        for (int a = 0; a < course.length; a++) {
            String val = course[a];

            System.out.println("<div id=\"" + val.substring(0, val.indexOf(" -")) + "\">");
            System.out.println("<div style=\"padding: 40px 40px;\">");
            System.out.println("<div class=\"flex-row\">");
            System.out.println("<div class=\"class-container\">"
                    + val.substring(val.indexOf("- ") + 1, val.indexOf("Grade")) + "</div>");
            System.out.println("<div class=\"color-container\">");
            System.out.println("<div class=\"green\"></div>");
            System.out.println("<div class=\"yellow\"></div>");
            System.out.println("<div class=\"blue\"></div>");
            System.out.println("<div class=\"red\"></div>");
            System.out.println("</div>");
            System.out.println("<div class=\"credit-container\"> <i> C "
                    + val.substring(val.indexOf("Credit Value: ") + 14, val.indexOf("Pre")) + "</i> </div>");
            System.out.println("</div>");
            System.out.println("<div class=\"description\">");
            System.out.println(val.substring(val.indexOf("Pre")));
            System.out.println("</div>");
            System.out.println("</div>");
            System.out.println("</div>");

            /*
             * System.out.println(val.substring(0 , val.indexOf("Grade")));
             * System.out.println(val.substring(val.indexOf("Grade"),
             * val.indexOf("Credit")));
             * System.out.println(val.substring(val.indexOf("Credit"), val.indexOf("Pre")));
             * System.out.println(val.substring(val.indexOf("Pre")));
             * 
             * System.out.println();
             */
        }
    }
}

public class tester1 {
    public static void main(String[] args) {
        String[] course = new String[] {
                "642 - Photography 2/SCSU Digital Photography  ????  Grade Level: 9-12 Credit Value: 0.5 Prerequisite: Photography 1 The photography processes explored in Photography 1 will be extended in Photography 2. Students will be introduced to additional equipment, light sources, and techniques. Students will hone their skills and techniques and be able to make a connection between personal expression and the intentional use of photographic materials. Students will also use digital imagery and computer technology in this course. Students in this course have the opportunity to earn 3 credits from Southern Connecticut State",
                "638 - Advanced Placement Studio Art  Grade Level: 11-12 Credit Value: 1 Prerequisite: Advanced Art, Advanced Photography or Graphic Design 3 and teacher recommendation which includes a portfolio review with department chairperson. (Strongly recommended students take Photography 1 for all portfolios) The Advanced Placement in Studio Art program enables highly motivated students to perform at the college level while still in high school. This college-level course adheres to the suggested College Board Curriculum.  Students can choose one portfolio type per year to submit for grading. The AP Studio portfolio is a performance-based exam, rather than a written exam. Students are expected to pay for and submit their AP portfolio to the College Board in May for evaluation.  Students will have to keep a sketchbook and do assignments the summer before",
                "648 - Graphic Design 1 Grade Level: 9-12 Credit Value: 0.5 Prerequisite: None This elective course in visual communication teaches skills and concepts for the production of commercial art. Students will utilize art programs on the Macintosh platform to create their graphic design pieces. Elements to be studied include typography usage and design, logo and icon design, corporate identity and page layout. ",
                "653 - Graphic Design 2 Grade Level: 9-12 Credit Value: 0.5 Prerequisite: Graphic Design 1 This elective course in visual communication teaches skills and concepts for the production of commercial art beyond those learned in Graphic Design 1. Elements to be studied include three dimensional design and industrial design. Students will utilize art programs on the Macintosh platform to create their graphic works. ",
                "654 - Graphic Design 3 Grade Level: 11-12 Credit Value: 1 Prerequisite: Graphic Design 2 (strongly recommended Photography 1 and Drawing & Painting 1) This elective course is offered to students who show an in-depth interest in the field of graphic design. Graphic Design 3 will strengthen skills introduced in the previous two graphic design courses. Students will work primarily with clients in the school, district and surrounding communities. Class projects will also be assigned that bolster the skills they needs to serve their clients. Elements to be studied will be portfolio design, resume design, and artwork presentation for shows and everyday postings around the school."
        };

        for (int a = 0; a < course.length; a++) {
            String val = course[a];

            System.out.println("<div id=\"" + course[a].substring(0, course[a].indexOf(" -")) + "\">]");
            System.out.println();
            System.out.println();
            System.out.println();
            System.out.println();
            System.out.println();

            System.out.println(val.substring(0, val.indexOf("Grade")));
            System.out.println(val.substring(val.indexOf("Grade"), val.indexOf("Credit")));
            System.out.println(val.substring(val.indexOf("Credit"), val.indexOf("Pre")));
            System.out.println(val.substring(val.indexOf("Pre")));

            System.out.println();
        }
    }
}