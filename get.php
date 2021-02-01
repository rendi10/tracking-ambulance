<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: *');
// header("Content-Security-Policy: default-src 'none'; img-src 'self'");

//koneksi ke database
include "koneksi.php";
// mysqli_set_charset($dbc, 'utf8');
$sql = "SELECT * FROM lokasi";
$result = $koneksi->query($sql);

//loop
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
