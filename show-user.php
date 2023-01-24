<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>User Details</title>
</head>

<body>
    <main class="container">
        <div class="pt-3 mt-5 mb-4">
            <h2 class="mb-3 pb-3 border-bottom">View Record</h2>
        </div>

        <?php
        $server = 'localhost';
        $username = 'root';
        $password = '';
        $db = 'php_lab4';

        $conn = mysqli_connect($server, $username, $password, $db);
        
        $sql = "SELECT * FROM users where user_id=$_GET[id]";
        $run = mysqli_query($conn, $sql);

        $rows = mysqli_fetch_assoc($run);

        // var_dump($rows);
        if(!isset($rows)) {
            echo "<div><h5 class='text-danger'>User not found!</h5></div>";
        } else {
            echo "
            <div>
                <h5>Name</h5>
                <p>$rows[name]</p>
            </div>
            <div>
                <h5>Email</h5>
                <p>$rows[email]</p>
            </div>
            <div>
                <h5>Gender</h5>
                <p>$rows[gender]</p>
            </div>
            <div>";

            if($rows['send_emails'] === 'yes') {
                echo "<p>You will recieve emails from us.</p>";
            } else {
                echo "<p>You won't recieve emails from us.</p>";
            }
            echo "</div>";
        }

        mysqli_close($conn);
        ?>

        <div class="mt-4">
            <button class="btn btn-primary">
                <a href="./index.php" class="text-white">Back</a>
            </button>
        </div>
    </main>

</body>

</html>