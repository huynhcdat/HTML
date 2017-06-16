/*
	Dat Huynh
	INT222B
	Professor Sunny Yue Shi
	assignment 3 javascript file
	a3.js


*/


function validateAll(){				/*checks all requried fields, if logic for all passes, then form submits, else it does not*/
	
	if(passwordvalid() && cpasswordvalid() && fnamevalid() && lnamevalid() && phonenumbervalid() && provincevalid()) {
		return true;
	}
	else{
		return false;
	}
		
}




function fnamevalid(){				/* logic for name, pop-out box if user ignores on screen notes*/
	
	var alpha = /[a-zA-Z]/g;
	var apost = /[']/g;
	var hyphen = /[-]/g;
	
	var fnameval = document.getElementById("fname");
	
	if (fnameval.value.trim().length == 0){
		alert("First name cannot be left blank");
		fnameval.focus();
	
		return false;
	}
	else if(!fnameval.value.match(alpha) && !fnameval.value.match(apost) && !fnameval.value.match(hyphen)){
		alert("First name can only contain alphabetic characters, an apostrohe, and a hyphen");
		fnameval.focus();
		
		return false;
	}
	else if(!fnameval.value.match(alpha)){
		alert("First name must have at least 1 alphabetic character (a-z) (A-Z)");
		fnameval.focus();
		
		return false;
	}
	else{
		return true;
	}
	
}

function validateName(){			/* name validation during typing in the field*/
	var alpha = /[a-zA-Z]/g;
	var apost = /[']/g;
	var hyphen = /[-]/g;
	
	var fnameval = document.getElementById("fname");
	
	if (fnameval.value.trim().length == 0){
		document.getElementById("namevalid").innerHTML="First name cannot be left blank"; /* message displayed under field*/
		fnameval.style.borderColor = "red";			/*if there's an error the border turns red*/
		fnameval.focus();
	
		return false;
	}
	else if(!fnameval.value.match(alpha) && !fnameval.value.match(apost) && !fnameval.value.match(hyphen)){
		document.getElementById("namevalid").innerHTML="First name can only contain alphabetic characters, an apostrohe, and a hyphen";
		fnameval.style.borderColor = "red";
		fnameval.focus();
		
		return false;
	}
	else if(!fnameval.value.match(alpha)){
		document.getElementById("namevalid").innerHTML="First name must have at least 1 alphabetic character (a-z) (A-Z)";
		fnameval.style.borderColor = "red";
		fnameval.focus();
		
		return false;
	}
	else{
		document.getElementById("namevalid").innerHTML="";
		fnameval.style.borderColor = "";
		return true;
	}
	
}



function lnamevalid(){			/* last name logic, same as first name*/
	
	var alpha = /[a-zA-Z]/g;
	var apost = /[']/g;
	var hyphen = /[-]/g;
	
	
	var lnameval = document.getElementById("lname");
	
	if (lnameval.value.trim().length == 0){
		alert("Last name cannot be left blank");
		lnameval.focus();
	
		return false;
	}
	else if (!lnameval.value.match(alpha) && !lnameval.value.match(apost) && !lnameval.value.match(hyphen)){
		alert("Last name can only contain alphabetic characters, an apostrohe, and a hyphen");
		lnameval.focus();
		
		return false;
	}
	else if(!lnameval.value.match(alpha)){
		alert("Last name must have at least 1 alphabetic character (a-z) (A-Z)");
		lnameval.focus();
		
		return false;
	}
	else{
		return true;
	}
	
	
}

function validateLName(){
	var alpha = /[a-zA-Z]/g;
	var apost = /[']/g;
	var hyphen = /[-]/g;
	
	
	var lnameval = document.getElementById("lname");
	
	if (lnameval.value.trim().length == 0){
		document.getElementById("namevalid").innerHTML="Last name cannot be left blank";
		lnameval.style.borderColor = "red";
		lnameval.focus();
	
		return false;
	}
	else if (!lnameval.value.match(alpha) && !lnameval.value.match(apost) && !lnameval.value.match(hyphen)){
		document.getElementById("namevalid").innerHTML="Last name can only contain alphabetic characters, an apostrohe, and a hyphen";
		lnameval.style.borderColor = "red";
		lnameval.focus();
		
		return false;
	}
	else if(!lnameval.value.match(alpha)){
		document.getElementById("namevalid").innerHTML="Last name must have at least 1 alphabetic character (a-z) (A-Z)";
		lnameval.style.borderColor = "red";
		lnameval.focus();
		
		return false;
	}
	else{
		document.getElementById("namevalid").innerHTML="";
		lnameval.style.borderColor = "";
		return true;
	}	
}



function passwordvalid(){
	var num = /[0-9]/g;
	var uppercase = /[A-Z]/g;
	var lowercase = /[a-z]/g;
	
	var passwordval = document.getElementById("password");
	
	if (passwordval.value.length < 8){			/* password check, length must be greater than 8*/
		alert("Password must be at least 8 characters long");
		passwordval.focus();
		
		return false;
	}
	else if(!uppercase.test(passwordval.value)){		/*checks if no uppercase letter, it performs the set logic*/
		alert("Password must contain an uppercase letter");
		passwordval.focus();
	
		return false;
	}
	else if(!lowercase.test(passwordval.value)){			/* checks for lowercase letter*/
		alert("Password must contain a lowercase letter");
		passwordval.focus();
		
		return false;
	}
	else if(!num.test(passwordval.value)){			/*checks for number*/
		alert("Password must contain at least one number");
		passwordval.focus();
		
		return false;
	}
	else{
		return true;
	}
	
}

function validatePassword(){
		var num = /[0-9]/g;
	var uppercase = /[A-Z]/g;
	var lowercase = /[a-z]/g;
	
	var passwordval = document.getElementById("password");
	
	if (passwordval.value.length < 8){
		document.getElementById("passwordvalid").innerHTML="Password must be at least 8 characters long";
		passwordval.style.borderColor = "red";
		passwordval.focus();
		
		return false;
	}
	else if(!uppercase.test(passwordval.value)){
		document.getElementById("passwordvalid").innerHTML="Password must contain an uppercase letter";
		passwordval.style.borderColor = "red";
		passwordval.focus();
	
		return false;
	}
	else if(!lowercase.test(passwordval.value)){
		document.getElementById("passwordvalid").innerHTML="Password must contain a lowercase letter";
		passwordval.style.borderColor = "red";
		passwordval.focus();
		
		return false;
	}
	else if(!num.test(passwordval.value)){
		document.getElementById("passwordvalid").innerHTML="Password must contain at least one number";
		passwordval.style.borderColor = "red";
		passwordval.focus();
		
		return false;
	}
	else{
		document.getElementById("passwordvalid").innerHTML="";
		passwordval.style.borderColor = "";
		return true;
	}
	
}



function cpasswordvalid() {			/* checks to see if password and the confirmation password box is the same*/
	
	if (document.getElementById("password").value != document.getElementById("cpassword").value){
		alert("Password must match");
		document.getElementById("cpassword").focus();
		
		return false;
	}
	else{
		return true;
	}
}

function validateCpassword(){
	if (document.getElementById("password").value != document.getElementById("cpassword").value){
		document.getElementById("cpasswordvalid").innerHTML="Password must match";
		document.getElementById("cpassword").style.borderColor = "red";
		document.getElementById("cpassword").focus();
		
		return false;
	}
	else{
		document.getElementById("cpasswordvalid").innerHTML="";
		document.getElementById("cpassword").style.borderColor = "";
		return true;
	}
}




function phonenumbervalid(){			/*phone number validation*/
	
	var phonenumber = /^\(?[0-9]{3}(\))[0-9]{3}-[0-9]{4}$/;		/* regular expression for phone number format (###)###-#### */
	
	var phonenumberval = document.getElementById("phonenumber");
	
	if(phonenumberval.value.trim().length == 0){	/* trims the value to make sure there is no space*/
		alert("Phone number cannot be left blank");
		phonenumberval.focus();
		
		return false;
	}
	else if(!phonenumber.test(phonenumberval.value)){			/* checks to see if input is in the set phonenumber format */
		alert("Please check phone number format: (999)999-9999");
		phonenumberval.focus();
	}
	else{
		if(phonenumberval.value.substr(1,3) == 000){	/* checks areacode number after ( and upto 3 numbers to make sure they arent all 0 */
			alert("The area code of phone number (999)999-9999 can't be all zeros");
			phonenumberval.focus();
			return false;
		}
		else if(phonenumberval.value.substr(5,3) == 000 && phonenumberval.value.substr(9,4) == 0000) {
			alert("Phone Number can't be all zeros");		/* checks to make sure the phone number portion is not all 0 */
			phonenumberval.focus();
			return false;
		}
		else{
			return true;
		}
	}
}

function validatePhone(){
	var phonenumber = /^\(?[0-9]{3}(\))[0-9]{3}-[0-9]{4}$/;
	
	var phonenumberval = document.getElementById("phonenumber");
	
	if(phonenumberval.value.trim().length == 0){
		document.getElementById("phonenumbervalid").innerHTML="Phone number cannot be left blank";
		phonenumberval.style.borderColor = "red";
		phonenumberval.focus();
		
		return false;
	}
	else if(!phonenumber.test(phonenumberval.value)){
		document.getElementById("phonenumbervalid").innerHTML="Please check phone number format: (999)999-9999";
		phonenumberval.style.borderColor = "red";
		phonenumberval.focus();
	}
	else{
		if(phonenumberval.value.substr(1,3) == 000){
			document.getElementById("phonenumbervalid").innerHTML="The area code of phone number (999)999-9999 can't be all zeros";
			phonenumberval.style.borderColor = "red";
			phonenumberval.focus();
			return false;
		}
		else if(phonenumberval.value.substr(5,3) == 000 && phonenumberval.value.substr(9,4) == 0000) {
			document.getElementById("phonenumbervalid").innerHTML="Phone Number can't be all zeros";
			phonenumberval.style.borderColor = "red";
			phonenumberval.focus();
			return false;
		}
		else{
			document.getElementById("phonenumbervalid").innerHTML="";
			phonenumberval.style.borderColor = "";
			return true;
		}
	}
	
}



function loadprovince(){			/* showing and hiding province when Canada is selected and unselected*/
	
	
	var country = document.getElementById("country");
	var country2 = country.options[country.selectedIndex].value;
	
	var hideProvince = document.getElementById("province");
	var showNothing = document.getElementById("emptyprovince");
		
	if(country2 != 'CA'){
		
		hideProvince.style.display = "none";
		showNothing.style.display = "block";
		
	}
	else{
		hideProvince.style.display = "block";
		showNothing.style.display = "none";
	}
}

function provincevalid(){		/* checks to make sure a province is selected*/
	
	var province = document.getElementById("province");
	
	if(province.value == '-Select-'){
		alert("You must select a province")
		province.focus();
		return false;
	}
	else{
		return true;
	}
	
}

function provincevalid(){
	var province = document.getElementById("province");
	
	if(province.value == '-Select-'){
		document.getElementById("provincevalid").innerHTML="You must select a province";
		province.style.borderColor = "red";
		province.focus();
		return false;
	}
	else{
		document.getElementById("provincevalid").innerHTML="";
		province.style.borderColor = "";
		return true;
	}
}
