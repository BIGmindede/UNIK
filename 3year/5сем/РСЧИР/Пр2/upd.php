<?php
    $mysqli = new mysqli("db", "user", "password", "appDB");
    if (isset($_POST["submit"])) {
        $update = $mysqli->prepare("UPDATE users SET name = ?, surname = ? WHERE id = ?");
        $update->bind_param("ssi", $_POST["name"],$_POST["surname"],$_POST["id"]);
        if ($update->execute()) {
            header('Location: index.php');
        }
        else {
            echo "<div>ERROR: " . $update->error . "</div>";
        }
        $update->close();
    }
?>