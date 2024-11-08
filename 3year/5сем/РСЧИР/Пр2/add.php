<?php
    $mysqli = new mysqli("db", "user", "password", "appDB");
    if (isset($_POST["submit"])) {
        $insert = $mysqli->prepare("INSERT INTO users (name, surname) VALUES (?, ?)");
        $insert->bind_param("ss", $_POST["name"],$_POST["surname"]);
        if ($insert->execute()) {
            header('Location: index.php');
        }
        else {
            echo "<div>ERROR: " . $insert->error . "</div>";
        }
        $insert->close();
    }
?>