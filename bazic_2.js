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

// challenge 62 
/*Создайте ifоператор внутри функции для возврата, Yes, 
that was trueесли параметр wasThatTrueесть true, и 
возврата No, that was falseв противном случае.*/
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
   return "Yes, that was true";
}
return "No, that was false";
  // Only change code above this line
}

// challenge 63
// Setup
function testEqual(val) {
  if (val == 12) { /* Добавьте в указанную строку оператор равенства (==), 
  чтобы функция возвращала строку, Equalкогда valона эквивалентна 12. */
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// challenge 64
// Setup
function testStrict(val) {
  if (val === 7) { // Строгое равенство ( ===) является аналогом оператора равенства ( ==). Однако, в отличие 
    //от оператора равенства, который пытается 
    //преобразовать оба сравниваемых значения в общий тип, оператор строгого равенства не выполняет преобразование типа.
//Если сравниваемые значения имеют разные типы, они считаются неравными, и оператор строгого равенства вернет false. 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// challenge 65
// Setup
function compareEquality(a, b) {
  if (a === b) { // Функция compareEqualityв редакторе сравнивает два значения с 
    //помощью оператора равенства. Измените функцию, чтобы она возвращала строку 
    //Equalтолько тогда, когда значения строго равны.
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

// challenge 66
// Setup
function testNotEqual(val) {
  if (val != 99) { // Оператор неравенства ( !=) противоположен оператору равенства. Это означает не 
    //равно и возвращает falseто, что вернулось бы к равенству, trueи наоборот . Как и оператор 
    //равенства, оператор неравенства преобразует типы данных значений при сравнении. 
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// challenge 67
//Сравнение с оператором больше, чем
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

// challenge 68
//Сравнение с оператором больше или равно
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

// challenge 69
//Сравнение с оператором меньше, чем
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  if (val < 55) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

// challenge 70
//Cравнение с оператором меньше или равно
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val <=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

// challenge 71
//Сравнения с логическим оператором И
function testLogicalAnd(val) {
  // Only change code below this line
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  // Only change code above this line
  return "No";
}
testLogicalAnd(10);

// challenge 72
//Сравнения с логическим оператором Or
function testLogicalOr(val) {
  //Объедините два ifоператора в один оператор, который возвращает строку, Outsideесли valона не находится между 10и 20включительно.
  // В противном случае вернуть строку Inside.
  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}
testLogicalOr(15);

// challenge 73

// challenge 74

// challenge 75

// challenge 76

// challenge 77

// challenge 78

// challenge 79

// challenge 80


