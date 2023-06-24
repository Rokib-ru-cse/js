<?php

$books_str = file_get_contents("books.json");
$books = json_decode($books_str, true);

$title = $_POST["title"];
$author = $_POST["author"];
$available = $_POST["available"]=="yes"?true:false;
$pages = $_POST["pages"];
$isbn = $_POST["isbn"];

if($_POST['id']){
    for($i=0;$i<count($books);$i++){
        if($_POST['id']==$books[$i]["id"]){
            $books[$i]['title'] = $title;
            $books[$i]['author'] = $author;
            $books[$i]['available'] = $available;
            $books[$i]['pages'] = $pages;
            $books[$i]['isbn'] = $isbn;
        }
      }
}else{
    $new = [
        "id"=>$books[count($books)-1]['id']+1,
        "title"=>$title,
        "author"=>$author,
        "available"=>$available,
        "pages"=>$pages,
        "isbn"=>$isbn
    ];
    array_push($books,$new);
}


$books_str = json_encode($books, true);
$books = file_put_contents("books.json",$books_str);
header('Location:index.php');