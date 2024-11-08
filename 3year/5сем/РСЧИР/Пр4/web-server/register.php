<?php
    if (isset($_POST["submit"])) {
        $mysqli = new mysqli("db", "user", "password", "appDB");
        $email = $_POST["email"];
        $password = $_POST["password"];
        $check = $mysqli->query("SELECT * FROM users WHERE email = '$email' AND password = '$password'");
        $user_id = $check->fetch_all()[0][0];
        $check->close();
        if($user_id){
            setcookie("id", $user_id);
            header('Location: orders.php');
        }
        else {
            $insert = $mysqli->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
            $insert->bind_param("ss", $email,$password);
            if ($insert->execute()) {
                $insert->close();      
                $user = $mysqli->query("SELECT * FROM users WHERE email='$email' AND password='$password'");
                $user_id = $user->fetch_all()[0][0];
                $user->close();
                setcookie("id", $user_id);
                header('Location: orders.php');
            }
            else {
                $insert->close();      
                echo "<div>ERROR</div>";
            }
        }
    }
?>