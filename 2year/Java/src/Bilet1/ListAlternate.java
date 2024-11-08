package Bilet1;

import java.util.ArrayList;
import java.util.List;

public class ListAlternate {
    public static ArrayList<Integer> alternate(ArrayList<Integer> list1, ArrayList<Integer> list2) {
        var list3 = new ArrayList<Integer>();
        int size;
        for (int i = 0; i < Math.min(list1.size(), list2.size()); i++) {
            list3.add(list1.get(i));
            list3.add(list2.get(i));
        }
        ArrayList<Integer> minlist, maxlist;
        if (list1.size() > list2.size()) {
            minlist = list2;
            maxlist = list1;
        }else{
            minlist = list1;
            maxlist = list2;
        }
        for (int i = minlist.size(); i < maxlist.size(); i++) {
            list3.add(maxlist.get(i));
        }
        return list3;
    }

    public static void main(String[] args) {
        var list1 = new ArrayList<Integer>();
        list1.add(1);
        list1.add(3);
        list1.add(5);
        list1.add(7);
        list1.add(9);
        list1.add(10);
        var list2 = new ArrayList<Integer>();
        list2.add(2);
        list2.add(4);
        list2.add(6);
        list2.add(8);

        var list3 = alternate(list1, list2);
        System.out.println(list1);
        System.out.println(list2);
        System.out.println(list3);
    }
}
