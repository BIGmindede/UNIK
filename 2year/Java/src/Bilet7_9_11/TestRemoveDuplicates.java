package Bilet7_9_11;

public class TestRemoveDuplicates {
    public static void main(String[] args) {
        var list = new LinkedIntList();
        list.add(new ListNode(14));
        list.add(new ListNode(8));
        list.add(new ListNode(14));
        list.add(new ListNode(12));
        list.add(new ListNode(1));
        list.add(new ListNode(14));
        list.add(new ListNode(11));
        list.add(new ListNode(8));
        list.add(new ListNode(8));
        list.printList();
        list.removeDuplicates();
        list.printList();
    }
}
