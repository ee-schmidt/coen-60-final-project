<!DOCTYPE html>
<link rel = "signup" href = "index.html">
<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
  //$taken=["eeschmidt@scu.edu"];
  $student=$_POST["studentName"];
  //$faculty=$_POST["facultyEmail"];
  //$password1=$_POST["pwd1"];
  //$password2=$_POST["pwd2"];
}
/*if(in_array($studentEmail,$taken)){
  echo "The email '$email' is already registered.<br>";
}

if(strlen($password)<8){
  echo "Password must be at least 8 characters long. <br>";
  $length=strlen($password);
  echo "Your password is only '$length' characters long.<br>";
} 

if(!is_numeric($password)){
  echo "Password must include at least 1 digit.";
}

if(!in_array($email,$taken) && strlen($password)>=8 && is_numeric($password)){
  echo "Account and password criteria satisfied.";
}*/
?>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Student User Profile</title>
  <link rel="stylesheet" href="profilestyle.css">
  <script src="java.js"></script>
</head>

<body> 
  <div class = "BeigeBox"> 
    <p id = "proftitle">STUDENT PROFILE</p>
    <a href="studentMatch.html" target = "_blank"> 
      <button type = "button" id = "button">Match Now!</button>
    </a>
    <div class = "RedBox">
    
    <?php 
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES["profilePhoto"]) && $_FILES["profilePhoto"]["error"] === 0) {
        $imagePath = basename($_FILES["profilePhoto"]["name"]);
        $uploadFilePath = __DIR__ . '/' . $imagePath;

        // Move the uploaded file to the current directory
        if (move_uploaded_file($_FILES["profilePhoto"]["tmp_name"], $uploadFilePath)) {
            // Display the uploaded image
            //echo '<h2>Uploaded Profile Photo</h2>';
            echo '<img src="' . $imagePath . '" alt="Uploaded Profile Photo" width = 300 height = 300>';
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "Invalid file upload.";
    }
  } else {
    echo "Invalid request.";
  }
?>
    <div class = "userinfo">
    <div class = "red">
    <h1 id = "name">
      <?php 
    if($_SERVER["REQUEST_METHOD"]=="POST"){
      $student=$_POST["studentName"];
      printf("$student </br>");
    }
      ?>
    </h1> 
    <h3>
       <?php 
       if($_SERVER["REQUEST_METHOD"]=="POST"){
        $email=$_POST["studentEmail"]; 
        printf("$email </br>");
       }
       ?>
    </h3>
    <h3>
      <?php
      if($_SERVER["REQUEST_METHOD"]=="POST"){
          echo implode(' & ', $_POST['fmajor']);
       }
       ?>
      major(s), 
      <?php
      if($_SERVER["REQUEST_METHOD"]=="POST"){
        printf($_POST['interdis']); 
      }
      ?>
      </h3>
    <p>
      <?php
        if($_SERVER["REQUEST_METHOD"]=="POST"){
          printf($_POST['extra']);
        }
        ?>

       </p></div>
       <br>
       <br>
       <br>
    </div>
  </div>
  </div>
</div>