// placeholder arrays for stored information
var names = ["Meg Rawson", "Erin Schmidt", "India Bell"];
var studentNames = ["mrawson@scu.edu", "eeschmidt@scu.edu", "ibell@scu.edu"];
var majors = ["Web Design & Engineering Major, Computer Science & Engineering Minor", "Web Design & Engineering Major", "Web Design & Engineering Major"];
var inter = ["Yes", "Yes", "Yes"];
var additional = ["Passionate about accessibility within the world of technology, specifically technology literacy and usability for the elderly.", "Interested in building web apps, UI/UX, and pursuing full stack.", "Interested in UI/UX design and building web applications. Passionate about promoting diversity, equity, and inclusion within my work."];
var profiles = ["meg.jpeg", "erin.jpeg", "india.jpeg"];

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
