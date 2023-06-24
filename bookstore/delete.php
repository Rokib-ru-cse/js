<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  

<?php

$books_str = file_get_contents("books.json");
$books = json_decode($books_str, true);


for($i=0,$j=0;$i<count($books);$i++){
    if($_GET['id']!=$books[$i]["id"]){
      $new[$j] = $books[$i];
      $j++;
    }
  }

$books_str = json_encode($new, true);
$books = file_put_contents("books.json",$books_str);
header('Location:index.php');
?>
</body>
</html>
<?php


