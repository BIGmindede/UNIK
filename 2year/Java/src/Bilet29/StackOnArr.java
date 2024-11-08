package Bilet29;

import java.util.ArrayList;
import java.util.List;

public class StackOnArr<T> {
    private T[] data;
    private int size;

    public StackOnArr() {
        data = (T[]) new Object[1];
        size = 0;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }

    public void resize() {
        T[] temp = (T[]) new Object[data.length * 2];
        for (int i = 0; i < data.length; i++) {
            temp[i] = data[i];
        }
        data = temp;
    }

    public void push(T a) {
        if (size == data.length) {
            resize();
        }
        data[size++] = a;
    }

    public T pop() {
        if (isEmpty())
            return null;
        return data[--size];
    }

    public T peek() {
        if (isEmpty())
            return null;
        return data[size - 1];
    }

    public static void main(String[] args) {
        StackOnArr<Integer> stack = new StackOnArr<>();
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
