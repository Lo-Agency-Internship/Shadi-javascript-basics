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


// Logical operators
function logicalGateBuffer(a) {
    return a
}
console.log(logicalGateBuffer(true));


function logicalGateNot(a) {
    return !a
}

console.log(logicalGateNot(false));


function logicalGateAnd(a, b) {
    if (a === true && b === true) {
        return true
    }
    return false
}
console.log(logicalGateAnd(false, false));


function logicalGateOr(a, b) {
    if (a === true || b === true) {
        return true
    }
    return false
}
console.log(logicalGateOr(true, false));


function logicalGateNand(a, b) {
    if (a === true && b === true) {
        return false
    }
    return true
}
console.log(logicalGateNand(true, true));


function logicalGateNor(a, b) {
    if (a === false && b === false) {
        return true
    }
    return false
}
console.log(logicalGateNor(true, false));


function logicalGateXor(a, b) {
    if (a === b) {
        return false
    }
    return true
}
console.log(logicalGateXor(true, true));


function logicalGateXnor(a, b) {
    if (a === b) {
        return true
    }
    return false
}
console.log(logicalGateXnor(true, true));


// Loops: while and for
/*a factorial function iterative: which should solve the factorial of x in an iterative way*/
function FactorialIiterative(x) {
    let NumFactIteractive = 1
    if (x === 0 || x === 1) {
        return 1;
    }
    else if (x > 1) {
        for (let i = 1; i <= x; i++) {
            NumFactIteractive = NumFactIteractive * (i)
        }
        return NumFactIteractive;
    }
    else {
        return "Please enter positive number"
    }

}
console.log(FactorialIiterative(4));

/*a factorial function recursive: which should solve the factorial of x in a recursive way*/
function FactorialRecursive(y) {
    let NumFactRecursive = y
    if (y === 0 || y === 1) {
        return 1;
    }
    else if (y < 0) {
        return "Please enter positive number"
    }
    while (y > 1) {
        NumFactRecursive = NumFactRecursive * (y - 1)
        y--;

    }
    return NumFactRecursive;
}
console.log(FactorialRecursive(6));
