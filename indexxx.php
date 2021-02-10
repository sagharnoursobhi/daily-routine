<?php
require "db.php";
//$result = $db -> query("select * from users");
//$result = $result->fetch_object();
/*while($row = $result->fetch_array()) {
    echo "<pre>";
        print_r($row);
    echo "</pre>";
}*/
/*while($row = $result->fetch_object()) {
    echo "<pre>";
    print_r($row);
    echo "</pre>";
}*/
/*while($row = $result->fetch_assoc()) {
    echo "<pre>";
    print_r($row);
    echo "</pre>";
}*/
/*while($row = $result->fetch_row()) {
    echo "<pre>";
    print_r($row);
    echo "</pre>";
}*/
$fname = $_GET['first_name'];
$lname = $_GET['last_name'];
$email = $_GET['email'];
$result = $db->query("insert into users (`first_name`, `last_name`, `email`) values ('$fname', '$lname', '$email')");
var_dump($result);


