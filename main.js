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

// Basic operators, maths
/* a function to generate a random integer*/
function rand(x1, x2) {
    return Math.floor(Math.random() * (x2 - x1)) + x1;
}
let randomNumber = rand(0, 100);
console.log(randomNumber);

/* a function to convert a binary number to a decimal number*/
function bin2dec(str) {
    return parseInt(str, 2);
}
bin2decNumber = "1010"
console.log(bin2dec(bin2decNumber));

// Comparisons
/*a function to compute the sum of the two given integers. If the two values are same, then returns triple their sum*/
function SumtwoNumber(x3, x4) {
    if (x3 === x4) {
        return (3 * (x3 + x4));
    }
    else {
        return (x3 + x4)
    }
}
console.log(SumtwoNumber(2, 2));

/*a function to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.*/
function AbsoluteDifference(x6) {
    const x5 = 19
    let x7 = Math.abs(x6 - x5);
    if (x6 > x5) {
        return (3 * x7)
    }
    else {
        return (x7);
    }
}
console.log(AbsoluteDifference(20));

/*a function to create a new string adding "Lo" in front of a given string. If the given string begins with "Lo" then return the original string*/
function CheckString(str) {
    if (str.startsWith("Lo")) {
        return str
    }
    else {
        return ("Lo".concat(str))
    }
}
console.log(CheckString("Agency"));

