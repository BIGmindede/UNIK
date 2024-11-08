package Bilet23;

public class TestFactory {
    public static void main(String[] args) {
        ShapeFactory factory = new ShapeFactory();
        Shape circle = factory.createShape(ShapeType.CIRCLE, 5,5,10,0);
        Shape rectangle = factory.createShape(ShapeType.RECTANGLE, 1,1,2,5);
    }
}
