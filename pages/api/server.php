<?php
$conn = mysqli_connect("localhost", "root", "", "fetch_api");

$studentId = $_POST['studentId'];
$name = $_POST['name'];
$email = $_POST['email'];
$room = $_POST['room'];

$sql = mysqli_query($conn, "INSERT INTO user (studentId, name, email, room) VALUES ('$studentId', '$name', '$email', '$room')");
