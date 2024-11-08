package com.company;

public class Main {
    public static void main(String[] args) {
	    Object obj = new Object();
        Runnable runnable1 = () -> {
            int i = 0;
            while (i < 10) {
                synchronized (obj) {
                    System.out.println("Ping");
                    obj.notify();
                    try {
                        obj.wait();
                        i++;
                    } catch(InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        };
        Runnable runnable2 = () -> {
            int i = 0;
            while (true) {
                synchronized (obj) {
                    System.out.println("Pong");
                    obj.notify();
                    try {
                        obj.wait();
                        i++;
                    } catch(InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        };

        new Thread(runnable1).start();
        new Thread(runnable2).start();
    }
}
