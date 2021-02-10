<?php
$db = new mysqli("localhost","root","","daily_routines", "3308");
if ($db -> connect_errno) {
    echo "Failed to connect to MySQL: " . $db -> connect_error;
    exit();
}