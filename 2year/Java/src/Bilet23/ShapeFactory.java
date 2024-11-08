package Bilet23;

public class ShapeFactory {
    public Shape createShape(ShapeType type, double x, double y, double h, double w) {
        switch (type) {
            case RECTANGLE:
                return new Rectangle(type, x, y, h, w);
            case CIRCLE:
                return new Circle(type, x, y, h);
            default:
                throw new IllegalArgumentException("Unknown type: " + type);
        }
    }
}
