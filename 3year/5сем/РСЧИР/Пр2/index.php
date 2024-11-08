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
        <h1>Список Студентов</h1>
        <table>
            <tr><th>Id</th><th>Name</th><th>Surname</th></tr>
            <?php
                $mysqli = new mysqli("db", "user", "password", "appDB");
                $result = $mysqli->query("SELECT * FROM users");
                foreach ($result as $row){
                    echo "<tr><td>{$row['ID']}</td><td>{$row['name']}</td><td>{$row['surname']}</td></tr>";
                }
            ?>
        </table>
    </body>
</html>