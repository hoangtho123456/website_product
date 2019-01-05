<?php
//include config file
require_once "config.php";

//Define variables and initialize with empty values
$name = $address = $salary = "";
$name_err = $address_err = $salary_err = "";

//Processing form data when form is submitted
if(isset($_POST["id"]) && !empty($_POST["id"])) {
  //Get hidden input value
  $id = $_POST["id"];
  $input_name = trim($_POST["name"]);
  $input_address = trim($_POST["address"]);
  $input_salary = trim($_POST["salary"]);

  //Validate
  if (empty($input_name)) {
    $name_err = "Please enter a name.";
  } elseif (!filter_var($input_name, FILTER_VALIDATE_REGEXP,
    array("options"=>array("regexp"=>"/^[a-zA-Z\s]+$/")))) {
    $name_err = "Please enter avalid name.";
  } else {
    $name = $input_name;
  }

  //Validate address
  $input_address = trim($_POST["address"]);
  if(empty($input_address)) {
    $input_address = "Please enter an address!";
  } else {
    $address = $input_address;
  }

  //Validate salary
  $input_salary = trim($_POST["salary"]);
  if(empty($input_salary)) {
    $salary_err = "Please enter the salary amount!";
  } elseif(!ctype_digit($input_salary)) {
    $salary_err = "Please enter a positive integer value.";
  }
  else {
    $salary = $input_salary;
  }

  //Check input errors before inserting in db
  if (empty($name_err) && empty($address_err) && empty($salary_err)) {
    //Prepare an update statement
    $sql = "UPDATE employees SET name=?, address=?, salary=? WHERE id=?";

    if ($stmt = mysqli_prepare($link, $sql)) {
      mysqli_stmt_bind_param($stmt, 'sssi', $param_name, $param_address,
        $param_salary, $param_id);

      //Set parameters
      $param_name = $name;
      $param_address = $address;
      $param_salary = $salary;
      $param_id = $id;

      //Attempt to execute the prepares statement
      if (mysqli_stmt_execute($stmt)) {
        //Records updated successfully. Redirect to landing page
        header("location: index.php");
        exit();
      } else {
        echo "Something went wrong. Please try again later.";
      }
    }
    mysqli_stmt_close($stmt);
  }

  mysqli_close($link);
} else {
  if (isset($_GET["id"]) && !empty(trim($_GET["id"]))) {
    $id = trim($_GET["id"]);
    $param_id = $id;

    $sql = "SELECT * FROM employees WHERE id = ?";
    if ($stmt = mysqli_prepare($link, $sql)) {
      mysqli_stmt_bind_param($stmt, "i", $param_id);

      if(mysqli_stmt_execute($stmt)) {
        $result = mysqli_stmt_get_result($stmt);

        if (mysqli_num_rows($result) === 1) {
          $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

          $name = $row["name"];
          $address = $row["address"];
          $salary = $row["salary"];
        } else {
          header("location: error.php");
          exit();
        }

      } else {
        echo "Something went wrong. Please try again later.";
      }

      mysqli_stmt_close($stmt);
      mysqli_close($link);
    }
  }
  else {
    header("location: error.php");
    exit();
  }
}
?>
