<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tomford";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT *FROM fragrances";

$result = $conn->query($sql);

// Prepare the response data
$response = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $response[] = $row;
    }
}

// Close the database connection
$conn->close();
// Set the response header as JSON
header('Content-Type: application/json');
// Send the JSON response
echo json_encode($response);
?>
