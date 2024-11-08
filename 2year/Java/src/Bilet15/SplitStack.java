package Bilet15;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class SplitStack {
    public static Stack<Integer> splitStack(Stack<Integer> stack) {
        Queue<Integer> queue = new LinkedList<Integer>();
        int size = stack.size();
        while (!stack.isEmpty()) {
            queue.offer(stack.pop());
        }
        for (int i = 0; i < size; i++) {
            if (queue.peek() < 0) {
                stack.push(queue.poll());
            } else {
                queue.offer(queue.poll());
            }
        }
        while (!queue.isEmpty())
            stack.push(queue.poll());
        return stack;
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(0);
        stack.push(1);
        stack.push(-1);
        stack.push(2);
        stack.push(-2);
        stack.push(3);
        stack.push(-3);
        System.out.println(stack);
        splitStack(stack);
        System.out.println(stack);
    }
}
