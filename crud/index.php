<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Dashboard!</title>
  <link rel="stylesheet" type="text/css" href="./style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
</head>
<body>
  <div class="wrapper">
    <div class="container-fuild">
      <div class="row">
        <div class="col-md-12">
          <div class="page-header clearfix">
            <h2 class="pull-left">Employees Details</h2>
            <a class="btn btn-success pull-right" href="create.php" title="">Add New Employee</a>
          </div>

          <?php
          //Include config file
          require_once "config.php";

          //select query execution
          $sql = "SELECT * FROM employees";
          if ($result = mysqli_query($link, $sql)):
            if (mysqli_num_rows($result) > 0):
          ?>
          <table class="table table-bordered table-striped">
            <caption>table title and/or explanatory text</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <?php while($row = mysqli_fetch_array($result)):?>
              <tr>
                <td><?php echo $row['id'] ?></td>
                <td><?php echo $row['name'] ?></td>
                <td><?php echo $row['address'] ?></td>
                <td><?php echo $row['salary'] ?></td>
                <td>
                  <a href="read.php?id=<?php echo $row['id'] ?>" title="View record"
                    data-toggle="tooltip">
                    <span class="glyphicon glyphicon-eye-open"></span>
                  </a>
                  <a href="update.php?id=<?php echo $row['id'] ?>" title="Update record"
                    data-toggle="tooltip">
                    <span class="glyphicon glyphicon-pencil"></span>
                  </a>
                  <a href="delete.php?id=<?php echo $row['id'] ?>" title="Delete record"
                    data-toggle="tooltip">
                    <span class="glyphicon glyphicon-trash"></span>
                  </a>
                </td>
              </tr>
            <?php endwhile; ?>
            </tbody>
          </table>
          <?php mysqli_free_result($result); ?>
          <?php
            else:
              echo "<p class='lead'><em>No records were found.</em></p>";
            endif;?>
          <?php
          else:
            echo "Error: " . mysqli_error($link);
          endif;
          mysqli_close($link);
          ?>
        </div><!-- end -->
      </div><!-- end -->
    </div><!-- end -->
  </div><!-- end -->
</body>
</html>
