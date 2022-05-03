// hello world
let message = prompt("Please enter your message");
alert(message);

// Variables
let age = prompt("Please enter your age: ");
let sex = prompt("Please enter your sex: ");
let name = prompt("please enter your name: ");
alert(name + " " + age + " " + sex);

let number1 = prompt("Please enter number one: ")
let number2 = prompt("Please enter number two: ")
alert("number one is: " + number1 + " " + "number two is: " + number2);

let swap = number1
number1 = number2
number2 = swap
alert("number one is: " + number1 + " " + "number two is: " + number2);

// Data types
let userfirstname = prompt("Please enter your first name: ")
let userlastname = prompt("Please enter your last name: ")
let userage = prompt("Please enter your age: ")
let usergender = prompt("Please enter your gender: ")
alert(`FirstName: ${userfirstname}, LastName: ${userlastname} , Age: ${userage} , Gender: ${usergender}`)

let Bonus = (`FirstName: ${userfirstname} , LastName: ${userlastname} , Age: ${userage} , Gender: ${usergender}`);
document.getElementById("bonus-section").innerHTML = Bonus