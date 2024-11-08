package Bilet16;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class CopyStack {
    public static Stack<Integer> copyStack(Stack<Integer> stack) {
        Queue<Integer> queue = new LinkedList<>();
        Stack<Integer> stack2 = new Stack<>();
        while (!stack.isEmpty()) {
            stack2.push(stack.pop());
        }
        while (!stack2.isEmpty()) {
            queue.offer(stack2.pop());
        }
        while (!queue.isEmpty()){
            stack.push(queue.peek());
            stack2.push(queue.poll());
        }
        return stack2;
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        System.out.println(stack);
        Stack<Integer> stack2 = copyStack(stack);
        System.out.println(stack2);
    }
}
