<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hello world page</title>
    </head>
    <body>
        <ul>
            <li><a href="index.php">Auth/Unauth</a></li>
            <li><a href="orders.php">Orders</a></li>
            <li><a href="info.html">Info</a></li>
            <li><a href="contacts.html">Contacts</a></li>
        </ul>
        <hr>
        <h3>Добавить заказ</h3>
        <form action="createOrder.php" method="post">
            <input type="text" id="product" name="product">
            <input type="text" id="price" name="price">
            <input type="submit" id="submit" name="submit" value="Добавить">
        </form>
        <h1>Список заказов</h1>
        <table>
            <tr><th>Id</th><th>product</th><th>price</th><th>delete</th></tr>
            <?php
                $mysqli = new mysqli("db", "user", "password", "appDB");
                $user_id = $_COOKIE["id"];
                $result = $mysqli->query("SELECT * FROM orders WHERE user_id='$user_id'");
                foreach ($result as $row){
                    echo "<tr><td>{$row['ID']}</td><td>{$row['product']}</td><td>{$row['price']}</td>";
                    echo "<th><form action='del.php' method='post'><input type='text' name='id' value='{$row['ID']}'' hidden><input type='submit' name='submit' value='-'></form></th></tr>";
                }
            ?>
        </table>
    </body>
</html>