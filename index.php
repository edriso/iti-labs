<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Lab 2</title>
</head>

<body>
    <h3>#1: Search for how to make \n work in browser.</h3>
    <div>
        <p>
            <?php
                echo nl2br("Hello, this is line1\rAnd this is line2, bye!");
            ?>
        </p>
    </div>

    <h3>#2: Search for 3 built-in function of a string.</h3>
    <div>
        <p>My chosen word is "Wordpress!"</p>
        <p>str_shuffle: <?php echo str_shuffle('Wordpress!');?></p>
        <p>str_repeat: <?php echo str_repeat('Wordpress!', 3);?></p>
        <p>strtoupper: <?php echo strtoupper('Wordpress');?></p>
        <p>substr: <?php echo substr('Wordpress', 0, 4);?></p>
    </div>

    <h3>#3: Write a PHP script to get the sum and avg of an indexed array</h3>
    <div>
        <?php
        $numbers = [];
        $numbers[1] = 45;
        $numbers[0] = 12;
        $numbers[3] = 25;
        $numbers[2] = 10;
        $sum=0;
        $avg=1;
        var_dump($numbers);
        
        foreach($numbers as $num) {
            $sum += $num;
            echo "<br />$num";
        }
        $avg = $sum / count($numbers);
        echo " <br /><br />Sum is $sum<br/>";
        echo "Avg is $avg <br /><br />";
        
        echo "Sorting highest to lowest<br />";
        rsort($numbers);
        var_dump($numbers);
    ?>
    </div>


    <h3>#4: Write a PHP script to sort the following associative array</h3>
    <div>
        <?php
    $subOrders = array("Sara"=>31,"John"=>41,"Walaa"=>39,"Ramy"=>40);
    echo "ascending order sort by value <br />";
    asort($subOrders);
    var_dump($subOrders);

    echo "<br /><br />ascending order sort by Key <br />";
    ksort($subOrders);
    var_dump($subOrders);

    echo "<br /><br />descending order sorting by Value <br />";
    arsort($subOrders);
    var_dump($subOrders);

    echo "<br /><br />descending order sorting by Key <br />";
    krsort($subOrders);
    var_dump($subOrders);
    ?>
    </div>

    <h3>#5: Display the following array in an HTML table</h3>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php
        $students = [
            ['name' => 'Alaa', 'email' => 'alaa@test.com', 'status' => 'PHP'],
            ['name' => 'Shamy', 'email' => 'shamy@test.com', 'status' => '.Net'],
            ['name' => 'Youssef', 'email' => 'youssef@test.com', 'status' => 'Testing'],
            ['name' => 'Waleid', 'email' => 'waleid@test.com', 'status' => 'PHP'],
            ['name' => 'Rahma', 'email' => 'rahma@test.com', 'status' => 'Front End'],
        ];
        foreach($students as $index=>$record) {
            $check = $students[$index]['status'] === 'PHP';
            echo $check ? "<tr style='color: red;'>" : "<tr>";
            foreach($record as $val) {
                echo "<td>$val</td>";
            }
            echo "</tr>";
        }
        ?>
        </tbody>
    </table>
</body>

</html>