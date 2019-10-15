//Method for showing today's date
function showDate() {
document.getElementById('date').innerHTML = new Date().toLocaleDateString();
}

//Method for showing div when button is clicked, using if statements to know which button that is clicked
function showMoreInfo(buttonID) {
  if (buttonID == 'info') {document.getElementById("moreInfoAbout").style.display = "block";}	
  if (buttonID == 'cv') {document.getElementById("moreInfoCV").style.display = "block";}
  if (buttonID == 'skills') {document.getElementById("moreInfoSkills").style.display = "block";}
  if (buttonID == 'misc') {document.getElementById("moreInfoMisc").style.display = "block";}			
 }

//Method for hiding div when button is clicked, using if statements to know which button that is clicked
function hideMoreInfo(buttonID) {
 if (buttonID == 'info') {document.getElementById("moreInfoAbout").style.display = "none";}	
 if (buttonID == 'cv') {document.getElementById("moreInfoCV").style.display = "none";}
 if (buttonID == 'skills') {document.getElementById("moreInfoSkills").style.display = "none";}
 if (buttonID == 'misc') {document.getElementById("moreInfoMisc").style.display = "none";}			
}

function alertMe() {
	alert(new Date().toLocaleDateString());
}
