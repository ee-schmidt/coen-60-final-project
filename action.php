<?php
if($_SERVER["REQUEST_METHOD"=="POST"]){
  $taken=[];
  $student=$_POST["studentEmail"];
  $faculty=$_POST["facultyEmail"];
  $password1=$_POST["pwd1"];
  $password2=$_POST["$pwd2"];
}
if(in_array($studentEmail,$taken)){
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
}
?>