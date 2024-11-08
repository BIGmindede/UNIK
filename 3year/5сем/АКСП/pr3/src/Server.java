import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.LinkedList;

class ServerCommon extends Thread {
    private final Socket socket;
    private final BufferedReader in;
    private final BufferedWriter out;

    public ServerCommon(Socket socket) throws IOException {
        this.socket = socket;
        in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        Server.story.printStory(out);
        start();
    }

    @Override
    public void run() {
        String message;
        try {

            message = in.readLine();
            try {
                out.write(message + "\n");
                out.flush();
            } catch (IOException ignored) {
            }
            try {
                while (true) {
                    message = in.readLine();
                    if (message.equals("stop")) {
                        this.downService();
                        break;
                    }
                    System.out.println("Echoing: " + message);
                    Server.story.addStoryEl(message);
                    for (ServerCommon vr : Server.serverList) {
                        vr.send(message);
                    }
                }
            } catch (NullPointerException ignored) {
            }
        } catch (IOException e) {
            this.downService();
        }
    }

    private void send(String msg) {
        try {
            out.write(msg + "\n");
            out.flush();
        } catch (IOException ignored) {
        }

    }

    private void downService() {
        try {
            if (!socket.isClosed()) {
                socket.close();
                in.close();
                out.close();
                for (ServerCommon vr : Server.serverList) {
                    if (vr.equals(this)) vr.interrupt();
                    Server.serverList.remove(this);
                }
            }
        } catch (IOException ignored) {
        }
    }
}


class Story {

    private final LinkedList<String> story = new LinkedList<>();

    public void addStoryEl(String el) {
        if (story.size() >= 10) {
            story.removeFirst();
            story.add(el);
        } else {
            story.add(el);
        }
    }

    public void printStory(BufferedWriter writer) {
        if (story.size() > 0) {
            try {
                writer.write("History messages" + "\n");
                for (String vr : story) {
                    writer.write(vr + "\n");
                }
                writer.write("/...." + "\n");
                writer.flush();
            } catch (IOException ignored) {
            }
        }
    }
}

public class Server {
    public static final int PORT = 8080;
    public static LinkedList<ServerCommon> serverList = new LinkedList<>();
    public static Story story;

    public static void main(String[] args) throws IOException {
        try (var server = new ServerSocket(PORT)) {
            story = new Story();
            System.out.println("Server Started");
            while (true) {
                var socket = server.accept();
                try {
                    serverList.add(new ServerCommon(socket));
                } catch (IOException e) {
                    socket.close();
                }
            }
        }
    }
}
