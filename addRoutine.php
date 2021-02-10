<?php
header('Content-type: application/json');
require_once "db.php";
$routineName = $_POST['routineName'];
$day = $_POST['day'];
$user_id = $_POST['user_id'];
$result = $db->query("insert into routines (`name`, `user_id`, `day`) values ('$routineName', '$user_id', '$day')");
if($result) {
    $id = $db->insert_id;
    $result2 = $db->query("select * from routines where `id`='$id'");
    $routine = $result2->fetch_object();
    echo json_encode($routine);
}