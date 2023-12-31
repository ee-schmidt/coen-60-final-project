// placeholder arrays for stored information
var addnames = ["Elizabeth Miller", "James Allen", "Amanda Wilson"];
var names = ["emiller@scu.edu", "jallen@scu.edu", "awilson@scu.edu"];
var blurbs = ["Web Design & Engineering Professor", "Electrical Engineering Professor", "Computer Science Professor"];
var slots = ["2", "1", "4"];
var profiles = ["elizabeth.jpeg", "james.jpeg", "amanda.jpeg"];

var savedNames = [];
var savedMajors = [];
var savedInter = [];
var savedAdditional = [];
var savedProfiles = [];

var pos = 0;

document.getElementById("firstlast").innerHTML = addnames[pos];
document.getElementById("image").innerHTML = "<img src='advisorProfiles/" + profiles[pos] + "' alt='sampleimg' width='400'>";
document.getElementById("name").innerHTML = names[pos];
document.getElementById("major").innerHTML = blurbs[pos];
document.getElementById("interdisciplinary").innerHTML = slots[pos];

function newStudent() {
    if (pos < names.length - 1) {
	document.getElementById("firstlast").innerHTML = addnames[pos+1];
	document.getElementById("image").innerHTML = "<img src='advisorProfiles/" + profiles[pos+1] + "' alt='sampleimg' width='400'>";
	document.getElementById("name").innerHTML = names[pos+1];
	document.getElementById("major").innerHTML = blurbs[pos+1];
	document.getElementById("interdisciplinary").innerHTML = slots[pos+1];
	pos++;
    } else {
	pos = 0;
	document.getElementById("firstlast").innerHTML = addnames[pos];
	document.getElementById("image").innerHTML = "<img src='advisorProfiles/" + profiles[pos] + "' alt='sampleimg' width='400'>";
	document.getElementById("name").innerHTML = names[pos];
	document.getElementById("major").innerHTML = blurbs[pos];
	document.getElementById("interdisciplinary").innerHTML = slots[pos];
    }
}

function saveStudent() {
    if (savedNames.includes(names[pos])) {
	newStudent();
	return;
    }

    savedNames.push(names[pos]);
    savedMajors.push(blurbs[pos]);
    savedInter.push(slots[pos]);
    savedProfiles.push(profiles[pos]);

    newStudent();
}


function showAdvisorMatches(){
	document.getElementById('advisorMatchDisp').innerHTML="<h3>Contact your advisor matches by email:</h3>";

	for(var i=0;i<savedNames.length;i++){
		document.getElementById('advisorMatchDisp').innerHTML+="<p>"+savedNames[i]+"</p><br>";
	}
}
