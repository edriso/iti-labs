<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    body {
        padding: 2rem 3rem;
    }

    .required::after {
        content: "*";
        color: red;
    }

    form>div {
        margin-bottom: 1rem;
    }

    label {
        min-width: 100px;
        display: inline-block;
    }

    .red {
        color: red;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    </style>
</head>

<body>
    <?php
    function validate($name) {
        if(isset($_POST[$name]) && empty($_POST[$name])) {
            echo "<span class='red'>$name is required</span>";
        } elseif (isset($_POST['submit']) && !isset($_POST[$name])) {
            echo "<span class='red'>$name is required</span>";
        }
    }
    ?>
    <h1>Application name: AAST_BIS class registration</h1>

    <form action="<?php $_PHP_SELF ?>" method="POST" enctype="multipart/form-data">
        <h3 class="red">* Required field</h3>
        <div>
            <label for="#">Image</label>
            <input type="file" name="img" />
        </div>
        <div class="required">
            <label for="#">Name</label>
            <input type="text" name="name" value="<?php if(isset($_POST['name'])){echo $_POST['name'];}?>" />
            <?php validate('name'); ?>
        </div>
        <div class="required">
            <label for="#">Email</label>
            <input type="email" name="email" value="<?php if(isset($_POST['email'])){echo $_POST['email'];}?>" />
            <?php validate('email'); ?>
        </div>
        <div>
            <label for="#">Group #</label>
            <input type="text" name="group" value="<?php if(isset($_POST['group'])){echo $_POST['group'];}?>" />
        </div>
        <div>
            <label for="#">Class Details</label>
            <textarea name="details" cols="30"
                rows="5"><?php if(isset($_POST['details'])){echo $_POST['details'];}?></textarea>
        </div>
        <div class="required">
            <label for="#">Gender</label>
            <input type="radio" name="gender" value="female" />Female
            <input type="radio" name="gender" value="male" />Male
            <?php validate('gender'); ?>
        </div>
        <div>
            <label for="#">Select Courses</label>
            <select name="courses[]" multiple>
                <option value="javaScript">javaScript</option>
                <option value="mongoDB">mongoDB</option>
                <option value="php">php</option>
                <option value="mySQL">mySQL</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="jQuery">jQuery</option>
            </select>
        </div>
        <div class="required">
            <label for="#">Agree</label>
            <input type="checkbox" name="agreement">
            <?php validate('agreement'); ?>
        </div>
        <button type="submit" name="submit">Submit</button>
    </form>

    <section>
        <?php
        if(isset($_FILES['img'])) {
            $file_name = $_FILES['img']['name'];
            $file_tmp =$_FILES['img']['tmp_name'];
            move_uploaded_file($file_tmp,"images/".$file_name);
            if(!empty($file_name)) {
                echo "<img src='./images/$file_name' />";
            }
        }

        if(isset($_POST['submit'])) {
            echo "<p>name: ".$_POST['name']."</p>";
            echo "<p>email: ".$_POST['email']."</p>";
            echo "<p>group: ".$_POST['group']."</p>";
            echo "<p>class details: ".$_POST['details']."</p>";
            if(isset($_POST['gender'])) {
                echo "<p>gender: ".$_POST['gender']."</p>";
            }
            if(isset($_POST['courses']) && is_array($_POST['courses'])) {
                echo "<p>your courses are: ";
                foreach($_POST['courses'] as $course) {
                    echo $course." ";
                }
                echo "</p>";
            }

        }
        ?>
    </section>
</body>

</html>