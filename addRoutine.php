<?php
header('Content-type: application/json');
require_once "db.php";
$routineName = $_POST['routineName'];
$day = $_POST['day'];
$user_id = $_GET['user_id'];
$day = $day ? '1' : '0';