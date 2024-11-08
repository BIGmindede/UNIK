package Bilet23;

public abstract class Shape {
    private double x;
    private double y;
    private ShapeType type = null;

    public Shape(ShapeType type, double x, double y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }

    abstract double getArea();

    abstract double getPerimeter();
}
