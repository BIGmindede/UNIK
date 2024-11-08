package Bilet18;

public class ArrayIntList {
    private int[] elementData;
    private int size;

    public ArrayIntList() {
        this.elementData = new int[0];
        this.size = 0;
    }

    public ArrayIntList(int size) {
        this.elementData = new int[size];
        this.size = 0;
    }

    public ArrayIntList(int[] a) {
        this.elementData = a;
        size=a.length;
    }

    public boolean add(int element) {
        if (size == elementData.length) {
            return false;
        }
        elementData[size] = element;
        size++;
        return true;
    }

    public int longestSortedSequence() {
        if (size == 0) {
            return 0;
        }
        int lss = 1;
        int maxlss = 0;
        for (int i = 1; i < size; i++) {
            if (elementData[i - 1] < elementData[i]) {
                lss++;
            } else {
                maxlss = Integer.max(lss, maxlss);
                lss = 1;
            }
        }
        maxlss = Integer.max(lss, maxlss);
        return maxlss;
    }

    public static void main(String[] args) {
        ArrayIntList list1 = new ArrayIntList(new int[]{1, 3, 5, 2, 9, 7, -3, 0, 42, 308, 17});
        System.out.println(list1.longestSortedSequence());
        ArrayIntList list2 = new ArrayIntList(new int[]{1, 3, 5, 2, 9, 7, -3, 0, 42, 308, 500});
        System.out.println(list2.longestSortedSequence());
        ArrayIntList list3 = new ArrayIntList(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11});
        System.out.println(list3.longestSortedSequence());
        ArrayIntList list4 = new ArrayIntList(new int[]{1, 2, 3, 4, 5, 0, 1, 0, 1, 0, 1});
        System.out.println(list4.longestSortedSequence());
        ArrayIntList list5 = new ArrayIntList(new int[]{11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1});
        System.out.println(list5.longestSortedSequence());
        ArrayIntList list6 = new ArrayIntList();
        System.out.println(list6.longestSortedSequence());
    }
}
