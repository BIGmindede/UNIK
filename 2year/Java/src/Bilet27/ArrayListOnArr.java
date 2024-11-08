package Bilet27;

import java.util.ArrayList;
import java.util.List;

public class ArrayListOnArr<T> {
    private T[] data;
    private int size;

    public ArrayListOnArr() {
        this.data = (T[]) new Object[1];
        size = 0;
    }

    public void resize() {
        T[] temp = (T[]) new Object[data.length * 2];
        for (int i = 0; i < data.length; i++) {
            temp[i] = data[i];
        }
        data = temp;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }

    public void add(T a) {
        if (size == data.length) {
            resize();
        }
        data[size++] = a;
    }

    public boolean add(int i, T a) {
        if (i < size && i >= 0 && !isEmpty()) {
            data[i] = a;
            return true;
        } else if (i == 0 && size == 0) {
            data[0] = a;
            size++;
            return true;
        } else
            return false;
    }

    public T get(int i) {
        if (i < size && i >= 0 && !isEmpty())
            return data[i];
        else
            return null;
    }

    public static void main(String[] args) {
        ArrayListOnArr<Integer> array = new ArrayListOnArr<>();
        array.add(1);
        array.add(2);
        array.add(3);
        array.add(4);
        array.add(5);
        for (int i = 0; i < array.size(); i++) {
            System.out.print(array.get(i) + ", ");
        }
    }
}
