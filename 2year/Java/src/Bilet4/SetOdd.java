package Bilet4;

import java.util.HashSet;
import java.util.Set;

public class SetOdd {

    public static boolean hasOdd(Set<Integer> set){
        boolean hasOdd = false;
        for (Integer i : set) {
            if (i % 2 != 0) hasOdd = true;
        }
        return hasOdd;
    }

    public static void main(String[] args) {

        Set<Integer> set1 = new HashSet<>();
        set1.add(2);
        set1.add(4);
        set1.add(6);
        System.out.println(hasOdd(set1));

        Set<Integer> set2 = new HashSet<>();
        set2.add(2);
        set2.add(3);
        set2.add(4);
        System.out.println(hasOdd(set2));

        Set<Integer> set3 = new HashSet<>();
        System.out.println(hasOdd(set3));

    }


    /*public static boolean hasOdd(Set<Integer> set){
        for (var i : set){
            if (i%2==1){
             return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Set<Integer> set1 = new HashSet<>();
        set1.add(2);
        set1.add(4);
        set1.add(6);
        System.out.println(hasOdd(set1));
        Set<Integer> set2 = new HashSet<>();
        set2.add(2);
        set2.add(3);
        set2.add(4);
        System.out.println(hasOdd(set2));
    }*/
}
