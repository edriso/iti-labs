<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Company</title>
</head>

<body>
    <main class="container">
        <div class="pt-3 mt-5 mb-4">
            <h2 class="mb-3 pb-3 border-bottom">User Registration Form</h2>
            <p>Please fill this form and submit to add user record to the database.</p>
        </div>

        <form method="post">
            <div class="form-group row">
                <label for="inputName" class="col-sm-3 col-form-label">Name</label>
                <div class="col-sm-9">
                    <input type="text" name="name" class="form-control" id="inputName" placeholder="Name">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                    <input type="email" name="email" class="form-control" id="inputEmail" placeholder="Email">
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-label col-sm-3 pt-0">Gender</legend>
                    <div class="col-sm-9">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="F"
                                checked>
                            <label class="form-check-label" for="gridRadios1">
                                Female
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="M">
                            <label class="form-check-label" for="gridRadios2">
                                Male
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="form-group row">
                <div class="col-sm-3">Receive emails from us.</div>
                <div class="col-sm-9">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="send_emails" value="yes" id="gridCheck1">
                        <label class="form-check-label" for="gridCheck1">
                            I Agree
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row mt-4">
                <div class="col-sm-9 offset-sm-3">
                    <button type="submit" name="submit_user" class="btn btn-primary">Submit</button>
                    <button type="button" class="btn btn-outline">
                        <a href="./index.php" class="text-dark">Cancel</a>
                    </button>
                </div>
            </div>
        </form>
    </main>
</body>

</html>

<?php
    if(isset($_POST['submit_user'])) {
        $server = 'localhost';
        $username = 'root';
        $password = '';
        $db = 'php_lab4';
    
        $conn = mysqli_connect($server, $username, $password, $db);
        $name = mysqli_real_escape_string($conn, strip_tags($_POST['name']));
        $email = mysqli_real_escape_string($conn, strip_tags($_POST['email']));
        $gender = htmlspecialchars($_POST['gender']);
        $send_emails = isset($_POST['send_emails']) ? 'yes' : 'no';
    
        $ins_sql = "INSERT INTO users (name, email, gender, send_emails) VALUES ('$name', '$email', '$gender', '$send_emails')";
        $run = mysqli_query($conn, $ins_sql);

        mysqli_close($conn);

        header("Location: ./index.php");
    }
?>