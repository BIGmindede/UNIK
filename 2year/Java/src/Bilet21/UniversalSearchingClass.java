package Bilet21;

public class UniversalSearchingClass {
    public static int search(Comparable[] a, Comparable toSearch) {
        for (int i = 0; i < a.length; i++) {
            if (toSearch.compareTo(a[i]) == 0) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        String[] arr = new String[5];
        arr[0] = "ca";
        arr[1] = "da";
        arr[2] = "ea";
        arr[3] = "aa";
        arr[4] = "ba";
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
        System.out.println(search(arr, "ea"));
        System.out.println(search(arr, "ba"));
        System.out.println(search(arr, "zz"));
    }
}
