<html lang="en">
    <head>
        <title>Hello world page</title>
        <link rel="stylesheet" href="style.css" type="text/css"/>
    </head>
    <body>
        <ul>
            <li><a href="NewPerson.php">Create</a></li>
            <li><a href="index.php">Read</a></li>
            <li><a href="UpdPerson.php">Update</a></li>
            <li><a href="DelPerson.php">Delete</a></li>
        </ul>
        <hr>
        <h1>Добавить пользователя</h1>
        <table>
            <tr>
                <th>Name</th><th>Surname</th><th></th>
            </tr>
            <tr>
                <form action="add.php" method="post">
                    <th><input type="text" name="name" id="name"></th>
                    <th><input type="text" name="surname" id="surname"></th>
                    <th><input type="submit" id="submit" name="submit" value="Добавить"/></th>
                </form>
            </tr>
        </table>
    </body>
</html>