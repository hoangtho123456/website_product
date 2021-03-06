<?php
  include('view_action.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Create Record!</title>
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
              <h2>View Record</h2>
            </div>
              <div class="form-group">
                <label>Name</label>
                <p class="form-control-static"><?php echo $name; ?></p>
              </div>

              <div class="form-group">
                <label>Address</label>
                <p class="form-control-static"><?php echo $address; ?></p>
              </div>

              <div class="form-group">
                <label>Salary</label>
                <p class="form-control-static"><?php echo $salary; ?></p>
              </div><!-- end -->
              <a class="btn btn-primary" href="index.php" title="">Back</a>
          </div><!-- end -->
        </div><!-- end -->
      </div><!-- end -->
    </div><!-- end -->
  </div><!-- end -->
</body>
</html>
