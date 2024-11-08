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
        <h1>Удалить пользователя</h1>
        <p>Id удаляемого студента:</p>
        <form action="del.php" method="post">
            <input type="number" id="id" name="id">
            <input type="submit" id="submit" name="submit" value="Удалить"/>
        </form>
    </body>
</html>