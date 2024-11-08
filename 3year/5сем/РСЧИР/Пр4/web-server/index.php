<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Auth</title>
    </head>
    <body>
        <ul>
            <li><a href="index.php">Auth/Unauth</a></li>
            <li><a href="orders.php">Orders</a></li>
            <li><a href="info.html">Info</a></li>
            <li><a href="contacts.html">Contacts</a></li>
        </ul>
        <hr>
        <h1>Auth page</h1>
        <h3>Вход</h3>
        <form action="register.php" method="post">
            <input type="email" id="email" name="email">
            <input type="password" id="password" name="password">
            <input type="submit" id="submit" name="submit" value="Войти">
        </form>
        <h3>Выход</h3>
        <form action="unauth.php" method="post">
            <input type="submit" id="submit" name="submit" value="Выйти">
        </form>
    </body>
</html>