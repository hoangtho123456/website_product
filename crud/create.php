<?php
  include('create_action.php');
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
              <h2>Create Record</h2>
            </div>

            <p>Please fill this form and submit employee record to Database</p>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"
              method="POST" accept-charset="utf-8">
              <div class="form-group <?php echo (!empty($name_err)) ? 'has-error' : '';?>">
                <label>Name</label>
                <input class="form-control" type="text" name="name" value="<?php echo $name; ?>">
                <span class="help-block"><?php echo $name_err;?></span>
              </div>

              <div class="form-group <?php echo (!empty($address_err)) ? 'has-error' : '';?>">
                <label>Address</label>
                <textarea name="address" class="form-control" rows="4">
                  <?php echo $address; ?>
                </textarea>
                <span class="help-block"><?php echo $address_err;?></span>
              </div>

              <div class="form-group <?php echo (!empty($salary_err)) ? 'has-error' : '';?>">
                <label>Salary</label>
                <input class="form-control" type="text" name="salary" value="<?php echo $salary; ?>">
                <span class="help-block"><?php echo $salary_err;?></span>
              </div><!-- end -->

              <input class="btn btn-primary" type="submit" name="btn_submit" value="Submit">
              <a class="btn btn-default" href="index.php" title="">Cancel</a>
            </form><!-- end -->
          </div><!-- end -->
        </div><!-- end -->
      </div><!-- end -->
    </div><!-- end -->
  </div><!-- end -->
</body>
</html>
