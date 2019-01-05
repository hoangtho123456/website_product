<?php
/*Database credentials. Assuming you are running MySQL
server with default setting.*/
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'demo_crud');

/* Attempt to connect to MySQL db */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if($link === false) {
  die("ERROR: Could not connect." . mysqli_connect_error());
}
