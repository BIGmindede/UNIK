package Bilet25;

import java.util.ArrayList;
import java.util.List;

public class StackOnList<T> {
    private List<T> list;

    public StackOnList() {
        this.list = new ArrayList<>();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    public int size() {
        return list.size();
    }

    public void push(T a) {
        list.add(a);
    }

    public T pop() {
        return list.remove(list.size() - 1);
    }

    public T peek() {
        return list.get(list.size() - 1);
    }

    public static void main(String[] args) {
        StackOnList<Integer> stack = new StackOnList<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        while (!stack.isEmpty()) {
            System.out.print(stack.pop() + ", ");
        }
    }
}
