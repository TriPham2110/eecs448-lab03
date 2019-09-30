clickButton = document.getElementById("clickButton");
paragraph = document.getElementById("paragraph");
redFont = document.getElementById("redFont");
greenFont = document.getElementById("greenFont");
blueFont = document.getElementById("blueFont");
redBackground = document.getElementById("redBackground");
greenBackground = document.getElementById("greenBackground");
blueBackground = document.getElementById("blueBackground");
widthValue = document.getElementById("widthValue");

function updateFormat(){	
	paragraph.style.color = "rgb(" + redFont.value + "," + greenFont.value + "," + blueFont.value + ")";
	paragraph.style.backgroundColor = "rgb(" + redBackground.value + "," + greenBackground.value + "," + blueBackground.value + ")";
	paragraph.style.width = widthValue.value;
	alert("You have chosen " + paragraph.style.color + " for font color, " + paragraph.style.backgroundColor + " for background color and " + paragraph.style.width + " for width value.");
}

