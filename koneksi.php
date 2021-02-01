<?php
$servername = "sql307.epizy.com";
$username = "epiz_27779524";
$password = "oC2o9kiF1JyA";
$database = "epiz_27779524_tracking_ambulance";

//untuk tes lokal
// $servername = "localhost";
// $username = "rendi";
// $password = "";
// $database = "tracking_ambulance";

// Create connection
$koneksi = mysqli_connect($servername, $username, $password, $database);


//cek koneksi
// if (!$koneksi) {
//     echo "gagal";
// } else {
//     echo "berhasil";
// }
