<!DOCTYPE html>
<html>

<head>
    <title>Yovel Elad</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>

<?php
    $guitarName = $_GET["guitar"];
    $color = $_GET["color"];
    echo "your ".$guitarName." guitar was added successfully!<br> <i class='fa fa-heart' style='color:".$color."'></i>";

?>
</body>

</html>