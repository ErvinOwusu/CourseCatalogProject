public class tester1
{
    public static void main(String[] args)
    {
        String[] course = new String[] {
            "642 - Photography 2/SCSU Digital Photography  ????  Grade Level: 9-12 Credit Value: 0.5 Prerequisite: Photography 1 The photography processes explored in Photography 1 will be extended in Photography 2. Students will be introduced to additional equipment, light sources, and techniques. Students will hone their skills and techniques and be able to make a connection between personal expression and the intentional use of photographic materials. Students will also use digital imagery and computer technology in this course. Students in this course have the opportunity to earn 3 credits from Southern Connecticut State", 
            "638 - Advanced Placement Studio Art  Grade Level: 11-12 Credit Value: 1 Prerequisite: Advanced Art, Advanced Photography or Graphic Design 3 and teacher recommendation which includes a portfolio review with department chairperson. (Strongly recommended students take Photography 1 for all portfolios) The Advanced Placement in Studio Art program enables highly motivated students to perform at the college level while still in high school. This college-level course adheres to the suggested College Board Curriculum.  Students can choose one portfolio type per year to submit for grading. The AP Studio portfolio is a performance-based exam, rather than a written exam. Students are expected to pay for and submit their AP portfolio to the College Board in May for evaluation.  Students will have to keep a sketchbook and do assignments the summer before",
            "648 - Graphic Design 1 Grade Level: 9-12 Credit Value: 0.5 Prerequisite: None This elective course in visual communication teaches skills and concepts for the production of commercial art. Students will utilize art programs on the Macintosh platform to create their graphic design pieces. Elements to be studied include typography usage and design, logo and icon design, corporate identity and page layout. ",
            "653 - Graphic Design 2 Grade Level: 9-12 Credit Value: 0.5 Prerequisite: Graphic Design 1 This elective course in visual communication teaches skills and concepts for the production of commercial art beyond those learned in Graphic Design 1. Elements to be studied include three dimensional design and industrial design. Students will utilize art programs on the Macintosh platform to create their graphic works. ",
            "654 - Graphic Design 3 Grade Level: 11-12 Credit Value: 1 Prerequisite: Graphic Design 2 (strongly recommended Photography 1 and Drawing & Painting 1) This elective course is offered to students who show an in-depth interest in the field of graphic design. Graphic Design 3 will strengthen skills introduced in the previous two graphic design courses. Students will work primarily with clients in the school, district and surrounding communities. Class projects will also be assigned that bolster the skills they needs to serve their clients. Elements to be studied will be portfolio design, resume design, and artwork presentation for shows and everyday postings around the school."
        };
        
        for (int a = 0; a < course.length; a++)
        {
            String val = course[a];
            
            System.out.println("<div id=\"" + course[a].substring(0, course[a].indexOf(" -")) + "\">]);
            System.out.println();
            System.out.println();
            System.out.println();
            System.out.println();
            System.out.println();
            
            System.out.println(val.substring(0  , val.indexOf("Grade")));
            System.out.println(val.substring(val.indexOf("Grade"), val.indexOf("Credit")));
            System.out.println(val.substring(val.indexOf("Credit"), val.indexOf("Pre")));
            System.out.println(val.substring(val.indexOf("Pre")));
            
            System.out.println();
        }
    }
}