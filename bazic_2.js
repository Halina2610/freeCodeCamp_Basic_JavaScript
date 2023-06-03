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
// challenge 56
// challenge 57
// challenge 58
// challenge 59
// challenge 60
