<!DOCTYPE html>
<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
  //$taken=[];
  $student=$_POST["studentName"];
  //$faculty=$_POST["facultyEmail"];
  //$password1=$_POST["pwd1"];
  //$password2=$_POST["pwd2"];
}
/*if(in_array($studentEmail,$taken)){
  echo "The account name '$email' is already taken.<br>";
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
    <a href="../match/matchHome"> 
      <button type = "button" id = "button">Match Now!</button>
    </a>
    <div class = "RedBox">
    
    <img src="squareIcon.png" alt="logo" width=300>
    
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
    <h3>major + restricted/interdisciplinary</h3>
    <p> more info here </p></div>
  <a href="../match/matchHome"> 
      <button type = "button">View Matches!</button>
    </a>
    </div>
  </div>
  </div>
</div>