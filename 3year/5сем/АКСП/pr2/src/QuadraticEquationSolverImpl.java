import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;

public class QuadraticEquationSolverImpl implements QuadraticEquationSolver {
    @Override
    public List<Double> solve(double a, double b, double c) throws RemoteException {
        var answer = new ArrayList<Double>();
        var d = b * b - 4 * a * c;
        if (d > 0) {
            answer.add((-b + Math.sqrt(d)) / 2 * a);
            answer.add((-b - Math.sqrt(d)) / 2 * a);
            return answer;
        } else if (d == 0) {
            answer.add(-b / 2 * a);
            return answer;
        }
        return List.of();
    }
}
