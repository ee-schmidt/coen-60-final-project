function validateStudentForm(){
  let emailValidate=document.forms["studentForm"]["studentEmail"].value;
  var flag=0;
  if(emailValidate.indexOf("@scu.edu")<0){
    alert("Please include a valid @scu.edu email.");
    flag=1;
    return false;
  }

  if(flag!=1){
    //window.open("studentProfile.php");
    return true;
  }
}

function validateFacultyForm(){
  let emailValidate=document.forms["facultyForm"]["facultyEmail"].value;
  var flag=0;
  if(emailValidate.indexOf("@scu.edu")<0){
    alert("Please include a valid @scu.edu email.");
    flag=1;
    return false;
  }

  if(flag!=1){
    //window.open("facultyProfile.php");
    return true;
  }
}