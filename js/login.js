var input = document.getElementsByClassName("form-control")[0];
var text = document.getElementsByClassName("form-control")[1];

function inputHandler(e){
	input.style.color = "black";
	text.style.color = "black";
}
input.addEventListener("click", inputHandler);