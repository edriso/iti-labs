<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Company</title>
</head>

<body>
    <main class="container">
        <div class="pt-3 mt-5 mb-3 d-flex justify-content-between align-items-center">
            <h2>Users Details</h2>

            <button class="btn btn-success btn-sm">
                <a href="./new-user.php" class="text-white">Add New User</a>
            </button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Mail Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody>
                <?php
            $server = 'localhost';
            $username = 'root';
            $password = '';
            $db = 'php_lab4';

            $conn = mysqli_connect($server, $username, $password, $db);
            
            $sql_get_users = "SELECT * FROM users";
            $run = mysqli_query($conn, $sql_get_users);

            while( $rows = mysqli_fetch_assoc($run) ) {
                echo "
                    <tr>
                    <th scope='row'>$rows[user_id]</th>
                    <td>$rows[name]</td>
                    <td>$rows[email]</td>
                    <td>$rows[gender]</td>
                    <td>$rows[send_emails]</td>
                    <td>
                        <a href='./show-user.php?id=$rows[user_id]'>
                            <i class='fa-regular fa-eye'></i>
                        </a>
                        <a href='./edit-user.php?id=$rows[user_id]'>
                            <i class='fa-regular fa-pen-to-square'></i>
                        </a>
                        <a href='?id=$rows[user_id]&action=delete'>
                            <i class='fa-regular fa-trash-can'></i>
                        </a>
                    </td>
                </tr>
                ";
            }

            if(isset($_GET['action']) && $_GET['action'] === 'delete') {
                $sql_get_user = "SELECT * FROM users where user_id=$_GET[id]";
                $run_user = mysqli_query($conn, $sql_get_user);

                $rows_user = mysqli_fetch_assoc($run_user);

                if(isset($rows_user)) {
                    $sql_delete = "DELETE FROM users WHERE user_id=$_GET[id]";
                    $run_delete = mysqli_query($conn, $sql_delete);
                }
                
                mysqli_close($conn);
                echo "<script>location.href='./index.php'</script>";
                exit;
            }

            mysqli_close($conn);
            ?>
            </tbody>
        </table>
    </main>
</body>

</html>