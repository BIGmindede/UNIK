import java.rmi.AlreadyBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.server.UnicastRemoteObject;

public class ServerMain {
    public static final String NAME = "server.solver";

    public static void main(String[] args) throws RemoteException, InterruptedException, AlreadyBoundException {
        final var server = new QuadraticEquationSolverImpl();
        final var registry = LocateRegistry.createRegistry(9999);
        var stub = UnicastRemoteObject.exportObject(server, 0);
        registry.bind(NAME, stub);
        Thread.sleep(Integer.MAX_VALUE);
    }
}
