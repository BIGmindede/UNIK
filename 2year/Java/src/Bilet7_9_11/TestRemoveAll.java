package Bilet7_9_11;

public class TestRemoveAll {
    public static void main(String[] args) {
        LinkedIntList list1 = new LinkedIntList();
        list1.add(new ListNode(1));
        list1.add(new ListNode(3));
        list1.add(new ListNode(5));
        list1.add(new ListNode(7));
        LinkedIntList list2 = new LinkedIntList();
        list2.add(new ListNode(1));
        list2.add(new ListNode(2));
        list2.add(new ListNode(3));
        list2.add(new ListNode(4));
        list2.add(new ListNode(5));
        list1.printList();
        list2.printList();
        list1.removeAll(list2);
        list1.printList();
        list2.printList();
    }
}
