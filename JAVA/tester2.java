import java.util.*;

public class tester2 {

    public static void main(String[] args) {

        ArrayList<String> array = new ArrayList<String>();

        array.add("654");
        array.add("630");
        array.add("642");
        array.add("638");
        array.add("648");
        array.add("653");
        array.add("654");
        array.add("598");
        array.add("510");
        array.add("511");
        array.add("510");
        array.add("526");
        array.add("518");
        array.add("529");
        array.add("530");
        array.add("540");
        array.add("547");
        array.add("525");
        array.add("546");
        array.add("MUSI1011");
        array.add("MUSI1012");
        array.add("MUSI1003");

        for (int i = 0; i < array.size(); i++) {
            array.set(i, "var c" + array.get(i) + " = document.getElementById('" + array.get(i) + "');");
        }

        for (int i = 0; i < array.size(); i++) {
            System.out.println(array.get(i));
        }

        System.out.println();
        System.out.println();
        System.out.println();

        Scanner input = new Scanner(System.in);

        ArrayList<String> array2 = new ArrayList<String>();

                array2.add("c600");
                array2.add("c639");
                array2.add("c642");
                array2.add("c648");
                array2.add("c653");
                array2.add("c510");
                array2.add("c511");
                array2.add("c510");
                array2.add("c526");
                array2.add("c518");
                array2.add("c529");
                array2.add("c530");
                array2.add("c540");
                array2.add("c547");
                array2.add("c525");
                array2.add("c546");
                array2.add("cMUSI1011");
                array2.add("cMUSI1012");
                array2.add("cMUSI1003");

                for (int i = 0; i < array2.size(); i++)
                {
                    System.out.println(array2.get(i) + ".style.display = \"block\";");
                }
            } 
    }
