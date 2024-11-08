<?php
    $mysqli = new mysqli("db", "user", "password", "appDB");
    if (isset($_POST["submit"])) {
        $delete = $mysqli->prepare("DELETE FROM users WHERE id = ?");
        $delete->bind_param("i", $_POST["id"]);
        if ($delete->execute()) {
            header('Location: index.php');
        }
        else {
            echo "<div>ERROR: " . $delete->error . "</div>";
        }
        $delete->close();
    }
?>