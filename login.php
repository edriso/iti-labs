<?php    
    if(isset($_POST['login_user'])) {
        $server = 'localhost';
        $username = 'root';
        $password = '';
        $db = 'php_lab5';
    
        $conn = mysqli_connect($server, $username, $password, $db);
        $user_name = mysqli_real_escape_string($conn, strip_tags($_POST['name']));
        $user_password = mysqli_real_escape_string($conn, strip_tags($_POST['password']));
    
        $get_sql = "SELECT * FROM users WHERE name = '$user_name' AND password = '$user_password'";
        $run = mysqli_query($conn, $get_sql);
        
        $rows = mysqli_fetch_assoc($run);
        
        if(isset($rows)) {
            session_start();
            
            $_SESSION["username"] = $user_name;
            
            header("Location: ./index.php");
        } else {
            echo "
                <div class='container mt-2'>
                    <div class='alert alert-danger' role='alert'>
                        Name or Password is incorrect!
                    </div>
                </div>
            ";
        }

        mysqli_close($conn);

    }
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Login</title>
</head>

<body>
    <main class="container">
        <div class="pt-3 mt-5 mb-4">
            <h2 class="mb-3 pb-3 border-bottom">User Login Form</h2>
        </div>

        <form method="post">
            <div class="form-group row">
                <label for="inputName" class="col-sm-3 col-form-label">Name</label>
                <div class="col-sm-9">
                    <input type="text" name="name" class="form-control" id="inputName" placeholder="Name">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                <div class="col-sm-9">
                    <input type="password" name="password" class="form-control" id="inputPassword"
                        placeholder="Password">
                </div>
            </div>
            <div class="form-group row mt-4">
                <div class="col-sm-9 offset-sm-3">
                    <button type="submit" name="login_user" class="btn btn-primary">Login</button>

                    <a href="./signup.php" class="text-dark">
                        <button type="button" class="btn btn-outline">
                            Signup
                        </button>
                    </a>
                </div>
            </div>
        </form>
    </main>
</body>

</html>