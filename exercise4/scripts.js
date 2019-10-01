clickButton = document.getElementById("clickButton");
paragraph = document.getElementById("paragraph");
redBorder = document.getElementById("redBorder");
greenBorder = document.getElementById("greenBorder");
blueBorder = document.getElementById("blueBorder");
redBackground = document.getElementById("redBackground");
greenBackground = document.getElementById("greenBackground");
blueBackground = document.getElementById("blueBackground");
widthValue = document.getElementById("widthValue");

function updateFormat(){	
	paragraph.style.borderColor = "rgb(" + redBorder.value + "," + greenBorder.value + "," + blueBorder.value + ")";
	paragraph.style.backgroundColor = "rgb(" + redBackground.value + "," + greenBackground.value + "," + blueBackground.value + ")";
	paragraph.style.borderWidth = widthValue.value;
	alert("You have chosen " + paragraph.style.borderColor + " for border color, " + paragraph.style.backgroundColor + " for background color and " + paragraph.style.borderWidth + " for width value.");
}

