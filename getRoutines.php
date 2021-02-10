<?php
header('Content-type: application/json');
require_once "db.php";
$date = $_GET['date'];
$user_id = $_GET['user_id'];
$routines = [
    'day' => [],
    'night' => []
];
$result = $db->query("select * from routines where user_id = '$user_id'");
while ($routine = $result->fetch_object()) {
    $result2 = $db->query("select * from routine_day where routine_id='$routine->id' and date='$date'");
    $routine->done = ($result2->num_rows > 0) ? true : false;
    if ($routine->day == '1') {
        array_push($routines['day'], $routine);
    } else {
        array_push($routines['night'], $routine);
    }
}
echo json_encode($routines);