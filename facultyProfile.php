<!DOCTYPE html>
<link rel = "signup" href = "index.html">

<html>
<head>
  <meta charset="UTF-8" />
  <title>Faculty User Profile</title>
  <link rel="stylesheet" href="profilestyle.css">
  <script src="java.js"></script>
</head>

<body> 
  <div class = "BeigeBox"> 
    <p id = "proftitle">FACULTY PROFILE</p>
    <!--<a href="studentMatch.html" target = "_blank"> 
      <button type = "button" id = "button">Match Now!</button>
    </a>-->
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
      $student=$_POST["facultyName"];
      printf("$student </br>");
    }
      ?>
    </h1> 
    <h3>
       <?php 
       if($_SERVER["REQUEST_METHOD"]=="POST"){
        $email=$_POST["facultyEmail"]; 
        printf("$email </br>");
       }
       ?>
    </h3>
    <h3> Available Slots : 
      <?php
      if($_SERVER["REQUEST_METHOD"]=="POST"){
        printf($_POST['availableSlots']); 
      }
      ?>
      </h3>
    <p>
      <?php
        if($_SERVER["REQUEST_METHOD"]=="POST"){
          printf($_POST['researchBlurb']);
        }
        ?>

       </p></div>
  
    </div>
  </div>
  </div>
</div>