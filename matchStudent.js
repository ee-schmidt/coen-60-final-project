// placeholder arrays for stored information
var names = ["Sophia Smith", "Charlie Johnson", "Laura Brown"];
var studentNames = ["ssmith@scu.edu", "cjohnson@scu.edu", "lbrown@scu.edu"];
var majors = ["Web Design & Engineering", "Civil Engineering", "Mechanical Engineering"];
var inter = ["Yes", "No", "Yes"];
var additional = ["Interested in building web apps.", "Interested in humanitarian work.", "N/A"];
var profiles = ["sophia.jpeg", "charlie.jpeg", "laura.jpeg"];

var savedNames = [];
var savedMajors = [];
var savedInter = [];
var savedAdditional = [];
var savedProfiles = [];

var pos = 0;

document.getElementById("firstlast").innerHTML = names[pos];
document.getElementById("image").innerHTML = "<img src='studentProfiles/" + profiles[pos] + "' alt='sampleimg' width='400'>";
document.getElementById("name").innerHTML = studentNames[pos];
document.getElementById("major").innerHTML = majors[pos];
document.getElementById("interdisciplinary").innerHTML = inter[pos];
document.getElementById("addInfo").innerHTML = additional[pos];

function newStudent() {
    if (pos < studentNames.length - 1) {
	document.getElementById("firstlast").innerHTML = names[pos+1];
	document.getElementById("image").innerHTML = "<img src='studentProfiles/" + profiles[pos+1] + "' alt='sampleimg' width='400'>";
	document.getElementById("name").innerHTML = studentNames[pos+1];
	document.getElementById("major").innerHTML = majors[pos+1];
	document.getElementById("interdisciplinary").innerHTML = inter[pos+1];
	document.getElementById("addInfo").innerHTML = additional[pos+1];
	pos++;
    } else {
	pos = 0;
	document.getElementById("firstlast").innerHTML = names[pos];
	document.getElementById("image").innerHTML = "<img src='studentProfiles/" + profiles[pos] + "' alt='sampleimg' width='400'>";
	document.getElementById("name").innerHTML = studentNames[pos];
	document.getElementById("major").innerHTML = majors[pos];
	document.getElementById("interdisciplinary").innerHTML = inter[pos];
	document.getElementById("addInfo").innerHTML = additional[pos];
    }
}

function saveStudent() {
    if (savedNames.includes(studentNames[pos])) {
	newStudent();
	return;
    }

    savedNames.push(studentNames[pos]);
    savedMajors.push(majors[pos]);
    savedInter.push(inter[pos]);
    savedAdditional.push(additional[pos]);
    savedProfiles.push(profiles[pos]);

    newStudent();
}

function showStudentMatches(){
	var studentMatches=document.getElementById('studentMatchDisp');
	studentMatches.innerHTML="<h3>Contact your Bronco Buddies by email:</h3>";
	for(var i=0;i<savedNames.length;i++){
		studentMatches.innerHTML+="<p>"+savedNames[i]+"</p>";
	}
}