var imgArray = ["images/image0.jpg","images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg"];

var count = 0;

function next(){
	if(count == imgArray.length - 1)
		count = 0;
	else
		count++;
	
	document.getElementById("image").src = imgArray[count];
	document.getElementById("image").width = 800;
	document.getElementById("image").height = 500;	
}

function previous(){
	if(count == 0)
		count = imgArray.length - 1;
	else
		count--;
	
	document.getElementById("image").src = imgArray[count];
	document.getElementById("image").width = 800;
	document.getElementById("image").height = 500;	
}
		
	