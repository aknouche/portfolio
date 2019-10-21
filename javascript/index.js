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

//Method that gets a random text from an array and sets it at an html paragraph
//function generateCitation() {
	let citations = ['Kunskapen börjar med att tiga, sedan med att lyssna, sedan med att  memorera, sedan med att handla och sedan med att sprida.',
	'Om en person söker kunskap för att handla utmed den, gläds han av sin kunskap. Om han gör det för andra syften, blir han bara alltmer arrogant.',
	'Det finns inget gott i ett liv om det inte levs av en som tiger och begriper eller talar och är lärd.',
	'Tystnaden skyddar tungan från förvrängt tal, falska ord och överflödigt prat. Därtill ger den respekt till den tyste.',
	'Människorna med det bästa förståndet är de som inte blir ilskna. Människorna med det bäst förberedda svaret är de som inte blir arga.',
	'Ilskan sår ånger. En person har lättare att korrigera det förstörda innan han blir arg än efter att han har blivit arg.',
	'Oförmågan gifte sig med förseningen och fick ångern som barn.',
	'Givmildhet är kärlek och berömvärt och snålhet är hat och klandervärt. Det finns inget gott i pengar utan givmildhet.',
	]

	let randomCitation =  citations[Math.floor(Math.random() * citations.length)];
	document.getElementById("citationParagraph").innerHTML = randomCitation;
//}
