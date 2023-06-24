<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Book Store</title>
  </head>
  <body>
  <?php
        $books_str = file_get_contents("books.json");
        $books = json_decode($books_str, true);
        $new = false;
        for($i=0;$i<count($books);$i++){
          if($_GET['id']==$books[$i]["id"]){
            $new = $books[$i];
          }
        }
        ?>

      <div class="container mt-5">

   <form method="POST" action="add.php">
        <div class="form-group">
          <label for="title">Title</label>
          <input required name="title" type="text" class="form-control" id="title" placeholder="Enter Title" value="<?php echo $new["title"]?>">
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input required name="author" type="text" class="form-control" id="author" placeholder="Enter Author Name" value="<?php echo $new["author"]?>">
        </div>
        <div class="form-group">
          <label for="available">Available</label>
          <input required name="available" type="text" class="form-control" id="available" placeholder="yes or no" value="<?php echo $new["available"]?'yes': ($_GET['id']?'no':'') ?>">
        </div>
        <div class="form-group">
          <label for="pages">Pages</label>
          <input required name="pages" type="number" class="form-control" id="pages" placeholder="Enter Page Number" value="<?php echo $new["pages"]?>">
        </div>
        <div class="form-group">
          <label for="isbn">ISBN</label>
          <input required name="isbn" type="number" class="form-control" id="isbn" placeholder="Enter ISBN Number" value="<?php echo $new["isbn"]?>">
        </div>
          <input hidden name="id" type="number" class="form-control" id="id" value="<?php echo $_GET['id']?$_GET['id']:""?>">
        <div class="container text-center">
        <button type='submit' class='btn btn-outline-primary'><?php echo $_GET['id'] ? "Update":"Add Book"?></button>
        </div>
      </form>
</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>