<?php
//Process delete operation after confirmation
if (isset($_POST["id"]) && !empty($_POST["id"])) {
  //Include config file
  require_once "config.php";

  //Prepare a delete statement
  $sql = "DELETE FROM employees WHERE id = ?";

  if($stmt=mysqli_prepare($link, $sql)) {
    $param_id = $_POST["id"];

    mysqli_stmt_bind_param($stmt, "i", $param_id);

    if(mysqli_stmt_execute($stmt)) {
      header("location: index.php");
      exit();
    } else {
      echo 'Something went wrong. Please try again later.';
    }

    mysqli_stmt_close($stmt);
    mysqli_close($link);
  } else {
    //check existence of ID parameter
    if (empty(trim($_GET("id")))) {
      header("location: error.php");
      exit();
    }
  }
}
?>
