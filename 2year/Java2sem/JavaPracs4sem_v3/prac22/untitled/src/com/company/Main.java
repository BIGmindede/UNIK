package com.company;

interface Strategy {
    int execute(int a, int b);
}
class ConcreteStrategyAdd implements Strategy {
    public int execute(int a, int b) {
        System.out.println("Вызов стратегии сложения");
        return a + b;
    }
}
class ConcreteStrategySubtract implements Strategy {
    public int execute(int a, int b) {
        System.out.println("Вызов стратегии вычитания");
        return a - b;
    }
}
class ConcreteStrategyMultiply implements Strategy {
    public int execute(int a, int b) {
        System.out.println("Вызов стратегии умножения");
        return a * b;
    }
}
class Context {
    private Strategy strategy;
    public Context() {
    }
    public void setStrategy(Strategy strategy) {
        this.strategy = strategy;
    }
    public int executeStrategy(int a, int b) {
        return strategy.execute(a, b);
    }
}

public class Main {
    public static void main(String[] args) {
        Context context = new Context();
        context.setStrategy(new ConcreteStrategyAdd());
        int resultA = context.executeStrategy(10,7);
        context.setStrategy(new ConcreteStrategySubtract());
        int resultB = context.executeStrategy(3,4);
        context.setStrategy(new ConcreteStrategyMultiply());
        int resultC = context.executeStrategy(3,4);
        System.out.println("Result A : " + resultA );
        System.out.println("Result B : " + resultB );
        System.out.println("Result C : " + resultC );
    }
}
