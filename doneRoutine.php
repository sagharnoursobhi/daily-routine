<?php
header('Content-type: application/json');
require_once "db.php";
$id = $_GET['id'];
$date = $_GET['date'];
$response = [
    'status' => false,
];
$result = $db -> query("select * from routine_day where `routine_id`='$id' and `date`='$date'");
if($result->num_rows > 0) {
    $result2 = $db -> query("delete from routine_day where `routine_id`='$id' and `date`='$date'");
    if($result2) {
        $response['status'] = true;
        $response['doneStatus'] = 'undone';
    }
} else {
    $result2 = $db -> query("insert into  routine_day (`routine_id`, `date`) values ('$id', '$date')");
    if($result2) {
        $response['status'] = true;
        $response['doneStatus'] = 'done';
    }
}
echo json_encode($response);