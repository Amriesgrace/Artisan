/*
var msg= document.getElementById('message');
var name=prompt("what is your name");
var output = "";
switch (name) {
	case "Jane": 
		output = "hello Jane";
		break;
	case "Gina":
		output = "hello Gina";
		break;
	case "Felicia":
		output = "Bye Felicia";
		break;
	default:
		output = "Hi stranger";
}
output += " " +name + "!";  
msg.textContent = output;
*/
// FUNCTIONS MAKES CODE REUSUABLE

//var msg = document.getElementById("message");
/*function factorial(num){
	var output = 1;
	for (var i = 2; i <= num; i++) {
		output*=i;
	};
	return output;
}
function product(a, b){
	var results = a * b;
	return results;
}
console.log(product(5, 10));
*/
//console.log(factorial(6));

/*
var arr =[];
arr.push(10);
arr.push(20);
arr.length;
var len= arr.length;
len;
arr.unshift(5);
arr.push(30);
arr;
arr.unshift(40);
arr;
arr.sort;
arr.sort();
arr.sort(
	function(a, b)
	{
	return b - a;
});
msg.innerHTML += "<p> new array</p>" +arr +" ";
*/
var msg= document.getElementById("message");
var arr = ["grace", "daenarys", "bisola", "joe", "victor", "sullivan", "toy", "Queen"];
console.log(arr);
arr.sort();
/*arr.sort(
	function(a, b){
		return b - a;
	}); 
*/
msg.innerHTML += "<p>class list sort</p>" + arr +" "; 
