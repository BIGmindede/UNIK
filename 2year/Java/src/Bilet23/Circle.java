package Bilet23;

public class Circle extends Shape {
    private final double radius;


    public Circle(ShapeType type, double x, double y, double radius) {
        super(type, x, y);
        this.radius = radius;
    }


    @Override
    double getArea() {
        return (Math.PI * Math.sqrt(radius));
    }

    @Override
    double getPerimeter() {
        return (2 * Math.PI * radius);
    }
}
