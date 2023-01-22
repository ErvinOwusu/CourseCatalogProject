import java.util.*;

public class formatTitle {
    public static void main(String[] args) {

        ArrayList<String> array = new ArrayList<String>();

        array.add("133 - English American Literature & Composition 2 (Core)");
        array.add("132 - English American Literature & Composition 2 (CP)");
        array.add("134 - English American Literature & Composition 2 (H)");

        for (int i = 0; i < array.size(); i++) {
            System.out.println(array.get(i).substring(5) + " (" + array.get(i).substring(0, 3) + ")");
        }
    }
}