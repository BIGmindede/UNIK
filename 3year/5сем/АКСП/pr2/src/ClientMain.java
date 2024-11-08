import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;

public class ClientMain {
    public static final String NAME = "server.solver";

    public static void main(String[] args) throws RemoteException, NotBoundException {
        final var registry = LocateRegistry.getRegistry(9999);
        var solver = (QuadraticEquationSolver) registry.lookup(NAME);
        var answer1 = solver.solve(1, -4, 3);
        var answer2 = solver.solve(1, 2, 1);
        var answer3 = solver.solve(10, 1, 2);
        System.out.println(answer1 + " - D > 0");
        System.out.println(answer2 + "     - D = 0");
        System.out.println(answer3 + "         - D < 0 (корней нет)");
    }
}
