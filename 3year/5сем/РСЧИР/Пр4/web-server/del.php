<?php
    if (isset($_POST["submit"])) {
        $mysqli = new mysqli("db", "user", "password", "appDB");
        $delete = $mysqli->prepare("DELETE FROM orders WHERE id = ?");
        $delete->bind_param("i", $_POST["id"]);
        if ($delete->execute()) {
            header('Location: orders.php');
        }
        else {
            echo "<div>ERROR: " . $delete->error . "</div>";
        }
        $delete->close();
    }
?>