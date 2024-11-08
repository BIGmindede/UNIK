package Bilet23;

public class Rectangle extends Shape {
    private final double height;
    private final double width;

    public Rectangle(ShapeType type, double x, double y, double height, double width) {
        super(type, x, y);
        this.height = height;
        this.width = width;
    }

    @Override
    double getArea() {
        return height * width;
    }

    @Override
    double getPerimeter() {
        return height + width;
    }
}
