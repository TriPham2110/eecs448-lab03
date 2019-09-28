function checkValidation(password1,password2){
	password1 = document.getElementById("password1").value;
	password2 = document.getElementById("password2").value;
	
	if(password1 == password2 && password1.length >= 8 && password2.length >= 8){
		document.body.innerHTML = "Validated!";
		return true;
	}
	else if(password1.length < 8 || password2.length < 8){
		alert("Either both passwords or one of them has length less than 8");
		return false;
	}
	else if(password1 != password2){
		alert("Passwords don't match");
		return false;
	}
	else
		alert("Invalid input");
		return false;
}
