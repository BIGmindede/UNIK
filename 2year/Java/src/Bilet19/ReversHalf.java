package Bilet19;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Stack;

public class ReversHalf {
    public static void reverseHalf(Queue<Integer> queue) {
        Stack<Integer> stack = new Stack<>();
        int size = queue.size();
        for (int i = 0; i < size; i++) {
            if (i % 2 == 1) {
                stack.push(queue.poll());
            } else {
                queue.offer(queue.poll());
            }
        }
        for (int i = 0; i < size; i++) {
            if (i % 2 == 0) {
                queue.offer(queue.poll());
            } else {
                queue.offer(stack.pop());
            }
        }
    }

    public static void main(String[] args) {
        Queue<Integer> queue = new ArrayDeque<>();
        queue.offer(0);
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);
        queue.offer(4);
        queue.offer(5);
        for (int i = 0; i < queue.size(); i++) {
            System.out.print(queue.toArray()[i] + ", ");
        }
        System.out.println();
        reverseHalf(queue);
        for (int i = 0; i < queue.size(); i++) {
            System.out.print(queue.toArray()[i] + ", ");
        }
    }
}
