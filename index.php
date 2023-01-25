<?php
    session_start();
    
    if(!isset($_SESSION["username"]) || isset($_POST['logout_user'])) {
        // print_r($_SESSION);
        
        session_unset();
        session_destroy();
        
        setcookie("PHPSESSID", "", time() - 60, "/");

        header("Location: ./login.php");
    }
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Homepage</title>
</head>

<body>
    <main class="container mt-5">
        <div class="jumbotron jumbotron-fluid bg-success text-white">
            <div class="container">
                <h1 class="display-4">Welcome <?php echo $_SESSION["username"]; ?>!</h1>
                <p class="lead">Only logged in users can see this page ;)</p>
            </div>
        </div>

        <form method="post">
            <div class="form-group row mt-4">
                <div class="col-sm-3 offset-sm-9">
                    <button type="submit" name="logout_user" class="btn btn-dark btn-block">Logout</button>
                </div>
            </div>
        </form>
    </main>
</body>

</html>