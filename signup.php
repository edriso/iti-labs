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
            <h2 class="mb-3 pb-3 border-bottom">User Registration Form</h2>
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
            <div class="form-group row">
                <label for="inputPassword2" class="col-sm-3 col-form-label">Confirm Password</label>
                <div class="col-sm-9">
                    <input type="password" name="password_confirm" class="form-control" id="inputPassword2"
                        placeholder="Password">
                </div>
            </div>
            <div class="form-group row mt-4">
                <div class="col-sm-9 offset-sm-3">
                    <button type="submit" name="signup_user" class="btn btn-primary">Signup</button>
                    <a href="./login.php" class="text-dark">
                        <button type="button" class="btn btn-outline">
                            Login
                        </button>
                    </a>
                </div>
            </div>
        </form>
    </main>
</body>

</html>

<?php
    if(isset($_POST['signup_user']) && $_POST['password'] === $_POST['password_confirm']) {
        $server = 'localhost';
        $username = 'root';
        $password = '';
        $db = 'php_lab5';
    
        $conn = mysqli_connect($server, $username, $password, $db);
        $user_name = mysqli_real_escape_string($conn, strip_tags($_POST['name']));
        $user_password = mysqli_real_escape_string($conn, strip_tags($_POST['password']));
    
        $ins_sql = "INSERT INTO users (name, password) VALUES ('$user_name', '$user_password')";
        $run = mysqli_query($conn, $ins_sql);

        mysqli_close($conn);

        header("Location: ./login.php");
    }
?>