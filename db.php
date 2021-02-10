<?php
$db = new mysqli("localhost","root","","daily_routines", "3306");
if ($db -> connect_errno) {
    echo "Failed to connect to MySQL: " . $db -> connect_error;
    exit();
}