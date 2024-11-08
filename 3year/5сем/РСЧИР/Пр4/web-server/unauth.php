<?php
    if (isset($_POST["submit"])) {
        if($_COOKIE["id"] == ""){
            echo "<div>Вы не были авторизованы!</div>";
        }
        else {
            setcookie("id", "");
            header('Location: orders.php');
        }
    }
?>