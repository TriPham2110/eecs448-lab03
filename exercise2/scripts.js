/* 	Reference
	image0: https://www.hawaiimagazine.com/sites/default/files/field/image/ThinkstockPhotos-499204317_0.jpg
	image1: https://s29745.pcdn.co/wp-content/uploads/2019/01/Best-Malaysia-Beaches.jpg.optimal.jpg
	image2:	https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_336177866.jpg
	image3: https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1536267110/hidden-cove-paako-beach-maui-hawaii-HAWAIIBEACHES0918.jpg?itok=p8337j9Y
	image4: https://www.planetware.com/photos-large/USHI/hawaii-honolulu-beaches-oahu-kailua-beach.jpg
*/
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
