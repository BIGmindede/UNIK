package Bilet24;


public class TestNumberFactory {
    public static void main(String[] args) {
        NumberFactory factory = new NumberFactory();
        RationalNumber rational = factory.createNumber(NumberType.RATIONAL, 10, 0);
        RationalNumber complex = factory.createNumber(NumberType.COMPLEX, 10, 10);
        System.out.println(rational);
        System.out.println(complex);
    }
}
