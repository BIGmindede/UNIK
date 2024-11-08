import java.util.ArrayDeque;
import java.util.Queue;

public class MainTest {
    public static void main(String[] args) {
        Queue<Integer> queue = new ArrayDeque<>();
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);
        queue.offer(4);
        queue.offer(5);
        for (int i = 0; i<queue.size();i++){
            System.out.println(queue.toArray()[i]);
        }

    }
}
