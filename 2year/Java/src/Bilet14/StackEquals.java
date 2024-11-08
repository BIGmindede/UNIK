package Bilet14;

import java.util.Stack;

public class StackEquals {

    public static boolean equals(Stack<Integer> stack1, Stack<Integer> stack2){
        Stack<Integer> stack3 = new Stack<>();
        while (!stack1.isEmpty() && !stack2.isEmpty()){
            if (stack1.peek() != stack2.peek()){
                while (!stack3.isEmpty()){
                    stack1.push(stack3.peek());
                    stack2.push(stack3.pop());
                }
                return false;
            }
            else{
                stack1.pop();
                stack3.push(stack2.pop());
            }
        }
        if (stack1.isEmpty() && stack2.isEmpty()){
            while (!stack3.isEmpty()){
                stack1.push(stack3.peek());
                stack2.push(stack3.pop());
            }
            return true;
        }else{
            while (!stack3.isEmpty()){
                stack1.push(stack3.peek());
                stack2.push(stack3.pop());
            }
            return false;
        }
    }

    public static void main(String[] args) {
        var stack1 = new Stack<Integer>();
        stack1.push(1);
        stack1.push(2);
        stack1.push(3);
        stack1.push(4);
        stack1.push(5);
        var stack2 = new Stack<Integer>();
        stack2.push(1);
        stack2.push(2);
        stack2.push(3);
        stack2.push(4);
        stack2.push(5);
        System.out.println(stack1);
        System.out.println(stack2);
        System.out.println(equals(stack1,stack2));
        System.out.println(stack1);
        System.out.println(stack2);
    }
}
