<?php
include_once "sqlConnect.php";

$sqlQuery = "SELECT `Count` FROM `table_data`";
$sqlResponse = $connect->query($sqlQuery);
$sumResult = 0;
while ($el = $sqlResponse->fetch_assoc()) {
    $sumResult += $el["Count"];
}

echo json_encode(["sum" => $sumResult]);

$sqlResponse->close();
$connect->close();