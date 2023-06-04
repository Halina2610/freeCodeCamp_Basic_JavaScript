// challenge 51
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction()

// challenge 52
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1,2);
functionWithArgs(7,9);

// challenge 53
function timesFive(num) {
  return num * 5;
}
timesFive(5);
timesFive(2);
timesFive(0);

// challenge 54
// Declare the myGlobal variable below this line
const myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// challenge 55
function myLocalScope() {
  // Only change code below this line
const myVar = "litl"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
// challenge 56
// Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();

// challenge 57
// Setup
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function  addFive() {
   sum = sum + 5;
}
// Only change code above this line
addThree();
addFive();

// challenge 58 - 50%
// Setup
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7);

// challenge 59
function nextInLine(arr, item) {
  // Only change code below this line
   arr.push(item); // Добавьте число в конец массива
  const removed = arr.shift(); //удалите первый элемент массива
  return removed;//вернуть элемент, который был удален
  return item;
  // Only change code above this line
}
// Setup
let testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// challenge 61
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line //Измените welcomeToBooleansфункцию, чтобы она возвращала true вместо false
  // Only change code above this line
}

// challenge 62 /*Создайте ifоператор внутри функции для возврата, Yes, that was trueесли параметр wasThatTrueесть true, и возврата No, that was falseв противном случае.*/
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
   return "Yes, that was true";
}
return "No, that was false";
  // Only change code above this line
}

// challenge 63
// challenge 64
// challenge 65
// challenge 66
// challenge 67
// challenge 68
// challenge 69
// challenge 70
