<?php
    if (isset($_POST["submit"])) {
        $mysqli = new mysqli("db", "user", "password", "appDB");
        $user_id = $_COOKIE["id"];
        $product = $_POST["product"];
        $price = $_POST["price"];
        $insert = $mysqli->prepare("INSERT INTO orders (user_id, product, price) VALUES (?, ?, ?)");
        $insert->bind_param("sss",$user_id,$product,$price);
        if ($insert->execute()) {
            header('Location: orders.php');
        }
        else {
            echo "<div>ERROR: " . $insert->error . "</div>";
        }
        $insert->close();
    }
?>