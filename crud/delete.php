<?php
  include('delete_action.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Delete Record!</title>
  <link rel="stylesheet" type="text/css" href="./style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
</head>
<body>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="row">
          <div class="col-md-12">
            <div class="page-header">
              <h2>Delete Record</h2>
            </div>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"
              method="POST" accept-charset="utf-8">
              <div class="alert alert-danger fade in">
                <input type="hidden" name="id" value="<?php echo trim($_GET["id"]);?>">
                <p>Are you sure you want to delete this record?</p>
              </div>

              <input class="btn btn-primary" type="submit" name="btn_submit" value="Yes">
              <a class="btn btn-default" href="index.php" title="">No</a>
            </form><!-- end -->
          </div><!-- end -->
        </div><!-- end -->
      </div><!-- end -->
    </div><!-- end -->
  </div><!-- end -->
</body>
</html>
