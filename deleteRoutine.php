<?php
header('Content-type: application/json');
require_once "db.php";
$id = $_GET['id'];
$response = [
    'status' => false,
];
$result = $db -> query("delete from routines where `id`='$id'");
if($result) {
    $db -> query("delete from routine_day where `routine_id`='$id'");
    $response['status'] = true;
}
echo json_encode($response);