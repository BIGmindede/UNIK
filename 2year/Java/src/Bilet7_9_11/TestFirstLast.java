package Bilet7_9_11;

public class TestFirstLast {
    public static void main(String[] args) {
        LinkedIntList list = new LinkedIntList();
        for (int i = 0; i < 5; i++) {
            list.add(new ListNode(i));
        }
        list.printList();
        list.firstLast();
        list.printList();
    }
}
