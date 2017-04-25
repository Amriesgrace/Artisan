/*var msg = document.getElementById("message");
console.log(msg);
var name = prompt("What is your name?");
var output ="Welcome "+name;
if(name == ""){
	output="Enter your name";
}
else{
	output ="welcome "+ name;
}
msg.textContent=output;
*/

/*
var msg = document.getElementById("message");
var num = prompt("enter a number?", 10);

for (var i = 2, output = 1; i <= num; i++) {
	output *=i;
}
msg.textContent = num + "! =" + output;
*/
/*
var msg = document.getElementById("message");
var num = prompt("enter a number?", 10);
console.log(typeof (num));
	if (typeof num != 'number') {
		output = "enter a value";
		}
		else
		{
		 for (var i = 2; output = 1; i++) {
			output *=i;
		}
		msg.textContent = output;
	}
		msg.textContent = num + "! =" + output;
*/
/*

var msg= document.getElementById("message");
var num = prompt("bank details");
do{
	num = "0" + num;
}
while(num.length < 8){

}
msg.textContent = num;
//msg.textContent = num;


/*
var numbs = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var items = numbs.length;
//console.log(items);
var total = 0;
for (var i = 0; i < items; i++) {
	total = total + numbs[i]
};
//console.log(total);
var mean =total / items;
alert(mean);
*/

//Switch statements is used when to test muliple cases

var msg= document.getElementById('message');
/*var name=prompt("what is your name");
var output = "";
switch (name) {
	case 1 "Jane": 
		output = "hello Jane";
		break;
	default:
		output = "Hi stranger";
}
output +=" " name + "!";  
msg.textContent = output;
*/
function showMessage(a,b,c){
    var x = a + ""+ b + "" + c;
   	console.log(x);
}
showMessage("hello");