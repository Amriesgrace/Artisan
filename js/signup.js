
 var input = document.getElementsByClassName("form-control")[0];
 //console.log({input});
 var email = document.getElementsByClassName("form-control")[1];
 var phone = document.getElementsByClassName("form-control")[2];
 var pass = document.getElementsByClassName("form-control")[3];
 var password = document.getElementsByClassName("form-control")[4];
 
 function inputHandler(e) {
 	input.style.color = "black";
 	email.style.color = "black";
 	phone.style.color = "black";
 	pass.style.color = "black";
 	password.style.color = "black";
 }

input.addEventListener("click", inputHandler);