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
//Знакомство с операторами Else
function testElse(val) {
  let result = "";
  // Only change code below this line
  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}
testElse(4);


// challenge 74
//Знакомство с операторами Else If
//Если у вас есть несколько условий, которые необходимо решить, вы можете связать ifоператоры вместе с else ifоператорами.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
else {
  return "Between 5 and 10";}
}
testElseIf(7);
//64%

// challenge 75
//Логический порядок в операторах If Else^
//Функция выполняется сверху вниз
//пример
//Вот первое:
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
//второй:
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
//foo(0)вернет строку Less than oneи bar(0)вернет строку Less than two.

//Функция выполняется сверху вниз, поэтому вам нужно быть осторожным с тем, какой оператор идет первым.
//задание 
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

// challenge 76
//Цепочка операторов If Else
//if/elseоператоры могут быть объединены в цепочку для сложной логики
function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
  return "Change Me";
  // Only change code above this line
}
testSize(7);


// challenge 77
//Гольф-код
//В игре в гольф у каждой лунки есть par, что означает среднее количество очков, 
//которое strokesигрок в гольф должен сделать, чтобы загнать мяч в лунку и завершить игру. 
//В зависимости от того, насколько выше или ниже parвы strokesнаходитесь, существует другое прозвище.
//Вашей функции будут переданы parи strokes аргументы. Верните правильную строку в соответствии с этой 
//таблицей, в которой штрихи перечислены в порядке приоритета; сверху (самый высокий) к низу (самый низкий):
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return "Hole-in-one!";
} else if (strokes <= par - 2) {
  return "Eagle";
} else if (strokes === par - 1) {
  return "Birdie";
} else if (strokes === par) {
  return "Par";
} else if (strokes === par + 1){
  return "Bogey";
} else if (strokes === par + 2) {
  return "Double Bogey";
} else if (strokes >= par + 3) {
  return "Go Home!";
}
  return "Change Me";
  // Only change code above this line
}
golfScore(5, 4);

// challenge 78
//Выбор из множества вариантов с операторами Switch 
/*Если вам нужно сопоставить одно значение со многими параметрами, вы можете использовать оператор switch . 
Оператор switchсравнивает значение с операторами case , которые определяют различные возможные значения. 
Любые действительные операторы JavaScript могут выполняться внутри блока case и будут выполняться с первого 
совпадающего caseзначения до тех пор, пока breakне встретится a.*/
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
    }
  // Only change code above this line
  return answer;
}
caseInSwitch(1);

//Или так:
function caseInSwitch(val) {
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
}
// Change this value to test
caseInSwitch(1);


// challenge 79
//Добавление параметра по умолчанию в операторы Switch
//В switchоператоре вы не сможете указать все возможные значения в качестве caseоператоров. 
//Вместо этого вы можете добавить defaultоператор, который будет выполняться, если соответствующие caseоператоры не будут найдены. 
//Думайте об этом как о последнем elseутверждении в if/elseцепочке.
//Заявление defaultдолжно быть последним случаем.

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 'a': // численное или текстовое значение
    answer = "apple";
    break;
    case 'b':
    answer = "bird";
    break;
    case 'c':
    answer = "cat";
    break;
     default:
    answer = "stuff";
    break;
    }
  // Only change code above this line
  return answer;
}
switchOfStuff(1);

// challenge 80
//Несколько идентичных опций в операторах switch
/*Если breakоператор опущен в switchоператоре case, следующие caseоператоры выполняются до тех пор, пока breakне встретится a. 
Если у вас есть несколько входов с одним и тем же выходом, вы можете представить их в switchтаком выражении*/
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2: //диапазон
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
sequentialSizes(1);

// challenge 81
//Замена цепочек If Else на Switch
//Если у вас есть много вариантов на выбор, switchнаписать оператор может быть проще, чем множество связанных операторов if/ else if.
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "bob":
  answer = "Marley";
  break;
  case 42:
  answer = "The Answer";
  break;
  case 1:
  answer = "There is no #1";
  break;
  case 99:
  answer = "Missed me by this much!";
  break;
  case 7:
  answer = "Ate Nine";
  break;
  default:
  answer = "";
}
  // Only change code above this line
  return answer;
}
chainToSwitch(7);

// challenge 82
//Возврат логических значений из функций
function isLess(a, b) {
    return a < b;
}
isLess(10, 15);
//вышеизложенное эквивалентно функции: 
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}
isLess(10, 15);

// challenge 83
//Вернуть ранний шаблон для функций
//Когда returnоператор достигнут, выполнение текущей функции останавливается, и управление возвращается в место вызова.
// Setup
function abTest(a, b) {
  // Измените функцию abTestтак, чтобы, если aили bменьше, 0функция немедленно завершалась со значением undefined.
if (a < 0 || b < 0) {
  return undefined;
} 
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

// challenge 84
//Подсчет карт
let count = 0;

function cc(card) {
  // Only change code below this line
  /*Вы напишете функцию подсчета карт. Он получит cardпараметр, который может быть числом или строкой,
  и увеличит или уменьшит глобальную countпеременную в соответствии со значением карты (см. таблицу). 
  Затем функция вернет строку с текущим счетчиком и строку Bet, если счетчик положительный или Holdнулевой 
  или отрицательный. Текущий счет и решение игрока ( Betили Hold) должны быть разделены одним пробелом.*/
 switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; //число равно сard +1
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;  //число равно сard -1
      break;
  }
  if (count > 0) { // Ксли число больше нуля 
    return count + " Bet"; //возврачает число +1
  } else {
    return count + " Hold";
  }
  return "Change Me";
  /* Проверьте значение каждой карты с помощью switchзаявления.
Количество переменных :
Увеличивается на 1, если это карта 2, 3, 4, 5 или 6.
Поскольку 7, 8 и 9 ничего не стоят, мы игнорируем эти карты в нашем switchутверждении.
Уменьшается на 1, если это карта 10, «J», «Q», «K» или «A».
Проверьте значение count и верните соответствующий ответ.*/
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

// Или следующее решение
let count = 0;
function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regex.test(card)) {
    count--;
  }
  if (count > 0) return count + " Bet";
  return count + " Hold";
  // Only change code above this line
}

// challenge 85
//Создание объектов JavaScript
/* Объекты аналогичны arrays, за исключением того, что вместо использования индексов для доступа и изменения 
их данных вы получаете доступ к данным в объектах через то, что называется properties.
Объекты полезны для структурированного хранения данных и могут представлять объекты реального мира.*/
const myDog = {
  // Only change code below this line
name: "Harry", // Объекты
legs: 4,
tails: 1,
friends: ["boy", "men", "ded"]

  // Only change code above this line
};
// challenge 86
//Доступ к свойствам объекта с помощью записи через точку
/*Существует два способа доступа к свойствам объекта: запись через точку ( .) и запись в квадратных скобках ( []), аналогичная массиву.
Точечная нотация — это то, что вы используете, когда заранее знаете имя свойства, к которому пытаетесь получить доступ.*/
// Setup
/*Считайте значения свойств testObjс помощью записи через точку. 
Установите переменную hatValueравной свойству объекта hatи установите переменную shirtValueравной свойству объекта shirt.*/
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// challenge 87
//Доступ к свойствам объекта с помощью нотации скобок
/*Второй способ доступа к свойствам объекта — запись в квадратных скобках ( []). 
Если в имени свойства объекта, к которому вы пытаетесь получить доступ, есть пробел, 
вам нужно будет использовать обозначение в квадратных скобках.
Однако вы по-прежнему можете использовать скобки для свойств объекта без пробелов.*/
/*Прочитайте значения свойств an entreeи the drinkиспользования testObj
скобочной нотации и присвойте их соответственно entreeValueи drinkValue.*/
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line
75%
  
// challenge 88
  //Доступ к свойствам объекта с помощью переменных
  /*Еще одно использование квадратных скобок для объектов — доступ к свойству, 
  которое хранится как значение переменной. Это может быть очень полезно для перебора
  свойств объекта или при доступе к таблице поиска.*/
  /*Установите playerNumberпеременную в 16. Затем используйте переменную, 
  чтобы найти имя игрока и присвоить его player.*/
  // Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line
  
// challenge 89
//Обновление свойств объекта
//После того, как вы создали объект JavaScript, вы можете обновить его свойства в любое время так же, как и любую другую переменную.
//Для обновления можно использовать либо точку, либо скобки.
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";// изменяет имя
// Only change code below this line

// challenge 90
//Добавление новых свойств к объекту JavaScript
/*Вы можете добавлять новые свойства к существующим объектам JavaScript так же, как вы их изменяете.
ourDog.bark = "bow-wow";
или

ourDog["bark"] = "bow-wow";
Теперь, когда мы оценим ourDog.bark, мы получим его лай bow-wow.*/
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = 'woof';//Добавьте barkсвойство myDogи задайте для него звук собаки, например "woof". 

// challenge 91
//Удалить свойства из объекта JavaScript
//свойствo  delete
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;

// challenge 92
//Использование объектов для поиска
/*Объекты можно рассматривать как хранилище ключей/значений, например словарь. 
Если у вас есть табличные данные, вы можете использовать объект для поиска значений, 
а не switchоператор или if/elseцепочку. Это наиболее полезно, когда вы знаете, что 
ваши входные данные ограничены определенным диапазоном.*/
//пример
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};
const articleAuthor = article["author"];
const articleLink = article["link"];

/*articleAuthorэто строка Kaashan Hussain, articleLinkэто строка
https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/
и valueLookupэто строка How to create objects in JavaScript.*/

//Преобразуйте оператор switch в объект с именем lookup. Используйте его, чтобы найти valи присвоить связанную строку переменной result.


// challenge 93
// challenge 94
// challenge 95
// challenge 96
// challenge 97
// challenge 98
// challenge 99
// challenge 100
// challenge 101
// challenge 102
// challenge 103
// challenge 104
// challenge 105





