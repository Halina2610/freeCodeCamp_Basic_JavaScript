 // challenge 100
/*Итерация с JavaScript для циклов
Вы можете запускать один и тот же код несколько раз, используя цикл.
Наиболее распространенный тип цикла JavaScript называется циклом, forпотому что он выполняется определенное количество раз.
Циклы for объявляются с тремя необязательными выражениями, разделенными точкой с запятой:
for (a; b; c), где aоператор инициализации, bоператор условия и cконечное выражение.
Оператор инициализации выполняется только один раз перед запуском цикла. 
Обычно он используется для определения и настройки вашей переменной цикла.
Оператор условия оценивается в начале каждой итерации цикла и будет продолжаться до тех пор, 
пока он оценивается как true. Когда условие находится falseв начале итерации, выполнение цикла прекращается. 
Это означает, что если условие начинается как ложное, ваш цикл никогда не будет выполняться.
Окончательное выражение выполняется в конце каждой итерации цикла перед следующей проверкой условия и обычно 
используется для увеличения или уменьшения счетчика цикла.
В следующем примере мы инициализируем i = 0и повторяем, пока наше условие i < 5истинно. Мы будем увеличивать
iна 1в каждой итерации цикла с i++нашим окончательным выражением.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArrayтеперь будет иметь значение [0, 1, 2, 3, 4].

Используйте forцикл, чтобы поместить значения от 1 до 5 в myArray.*/

// challenge 101
/*Перебор нечетных чисел с помощью цикла for
Циклы for не должны повторяться по одному. Изменив наш final-expression, мы можем считать четными числами.
Мы начнем с i = 0и зациклим, пока i < 10. Мы будем увеличивать iна 2 каждый цикл с помощью i += 2.
const ourArray = [];
for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArrayтеперь будет содержать [0, 2, 4, 6, 8]. Давайте изменим наш initialization, чтобы мы могли считать нечетными числами.
Вставьте нечетные числа от 1 до 9 в myArrayцикл for.*/
// Setup
const myArray = [];

// Only change code below this line
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray)

// challenge 102
/*Считаем в обратном порядке с помощью цикла for
Цикл for также может считать в обратном порядке, если мы можем определить правильные условия.

Чтобы уменьшить на два на каждой итерации, нам нужно изменить нашу инициализацию, условие и конечное выражение.

Мы начнем с i = 10и зациклим, пока i > 0. Мы будем уменьшать iна 2 каждый цикл с помощью i -= 2.

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
ourArrayтеперь будет содержать [10, 8, 6, 4, 2]. Давайте изменим нашу инициализацию и окончательное выражение, 
чтобы мы могли считать в обратном порядке двойками, чтобы создать массив убывающих нечетных чисел.

Вставьте нечетные числа от 9 до 1 в myArrayцикл for.*/
// Setup
const myArray = [];

// Only change code below this line
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// challenge 103
/*Перебор массива с помощью цикла for
Распространенной задачей в JavaScript является перебор содержимого массива. 
Один из способов сделать это — использовать forцикл. Этот код выведет каждый элемент массива arrна консоль:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Помните, что индексация массивов начинается с нуля, что означает, что последний индекс массива равен length - 1. 
Наше условие для этого цикла i < arr.length, которое останавливает цикл, когда iравно length. В этом случае последняя итерация, 
т.е. i === 4когда iстановится равно arr.length - 1и выводится 6на консоль. Затем iувеличивается до 5, и цикл завершается, потому i < arr.lengthчто false.

Объявите и инициализируйте переменную totalв 0. Используйте forцикл, чтобы добавить значение каждого элемента массива myArrв total.*?
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

// challenge 104
/*Вложение циклов
Если у вас есть многомерный массив, вы можете использовать ту же логику,
что и предыдущая путевая точка, для прохода как по массиву, так и по любым подмассивам. Вот пример:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
Это выводит каждый подэлемент по arrодному за раз. Обратите внимание, что во внутреннем цикле мы проверяем 
значение .lengthof arr[i], так как arr[i]оно само является массивом.
Измените функцию multiplyAllтак, чтобы она возвращала произведение всех чисел в подмассивах arr.*/

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) { //проверить значение
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j]; // возвращает произведение всех чисел в подмассивах arr
    }
  }
  // Only change code above this line
  return product;
  }
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// challenge 105
/*Итерация с помощью JavaScript Do...While Loops
Следующий тип цикла, который вы изучите, называется циклом do...while. 
Это называется do...whileциклом, потому что он сначала выполняет doодин проход кода внутри цикла,
несмотря ни на что, а затем продолжает выполнять цикл, который whileоценивается указанным условием true.

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
Приведенный выше пример ведет себя аналогично другим типам циклов, и результирующий массив будет выглядеть как [0, 1, 2, 3, 4].
Однако, что отличает его do...whileот других циклов, так это то, как он ведет себя, 
когда условие не выполняется при первой проверке. Давайте посмотрим на это в действии. 
Вот обычный whileцикл, который будет запускать код в цикле до тех пор, пока i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
В этом примере мы инициализируем значение ourArrayпустым массивом, а значение i— 5.
Когда мы выполняем whileцикл, условие оценивается как falseне iменьше 5, поэтому мы не 
ыполняем код внутри цикла. В результате ourArrayк нему не будет добавлено никаких значений, и 
он по-прежнему будет выглядеть так, как []если бы весь код в приведенном выше примере завершил работу. 
Теперь взгляните на do...whileцикл:

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
В этом случае мы инициализируем значение равным i5, как и в случае с циклом while. 
Когда мы добираемся до следующей строки, нет условия для оценки, поэтому 
мы переходим к коду внутри фигурных скобок и выполняем его. Мы добавим один элемент в 
массив, а затем увеличим его, iпрежде чем перейдем к проверке условия. Когда мы, наконец, 
оцениваем условие i < 5в последней строке, мы видим, что iтеперь оно равно 6, что не проходит
условную проверку, поэтому мы выходим из цикла и делаем это. В конце приведенного выше примера 
значение ourArrayравно [5]. По сути, do...whileцикл гарантирует, что код внутри цикла будет выполнен 
хотя бы один раз. Давайте попробуем заставить do...whileцикл работать, помещая значения в массив.
Измените whileцикл в коде на do...whileцикл, чтобы цикл подталкивал только число 10к myArray, и
iон будет равен тому, 11когда ваш код завершит работу.*/
// Setup
const myArray = [];
let i = 10;
// Only change code below this line
 do {
  myArray.push(i);
  i++;
} while (i < 10)

// challenge 106
 /*Замена циклов с помощью рекурсии
Рекурсия — это концепция, согласно которой функция может быть выражена через саму себя. 
Чтобы помочь понять это, начните с размышления о следующей задаче: умножьте первые nэлементы массива, 
 чтобы создать произведение этих элементов. Используя forцикл, вы можете сделать это:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
Однако обратите внимание на то multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Это означает, что 
вы можете переписать multiplyс точки зрения самого себя и вам никогда не понадобится использовать цикл.
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
Рекурсивная версия multiplyломается следующим образом. В базовом случае , где n <= 0, он возвращает 1. 
Для больших значений nон вызывает сам себя, но с n - 1. Этот вызов функции оценивается таким же образом, 
 вызывая multiplyснова до тех пор, пока n <= 0. В этот момент все функции могут вернуться, и оригинал multiplyвозвращает ответ.
Примечание. У рекурсивных функций должен быть базовый случай, когда они возвращаются без повторного вызова функции 
(в этом примере, когда n <= 0), иначе они никогда не смогут завершить выполнение.
/*
//Напишите рекурсивную функцию, sum(arr, n)которая возвращает сумму первых nэлементов массива arr.

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
     return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}

// challenge 
/*Поиск профиля
У нас есть массив объектов, представляющих разных людей в наших списках контактов.
Функция lookUpProfile, которая принимает nameи свойство ( prop) в качестве аргументов, была предварительно написана для вас.
Функция должна проверять, nameявляется ли контакт реальным firstNameи данное свойство ( prop) является свойством этого контакта.
Если оба верны, верните «значение» этого свойства.
Если nameне соответствует ни одному контакту, то вернуть строку No such contact.
Если propне соответствует ни одному допустимому свойству контакта, найденному совпадающим, nameверните строку No such property.
*/
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let x = 0; x < contacts.length; x++) { //при запуске цикла  проверяется значение имени
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) { //здесь если имя соответствует критериям идет возврат значения имени
        return contacts[x][prop];
      } else {                       // если нет значения имени, то идет возврат "No such property"
        return "No such property"; // цикл преходит на следующее значение
      }
    }
  }
  return "No such contact";      //при нессоответствии возвращается  "No such contact"
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
 
// challenge 108
/*Создание случайных дробей с помощью JavaScript

Случайные числа полезны для создания случайного поведения.
В JavaScript есть Math.random()функция, которая генерирует случайное десятичное число между 0(включительно) и 1(исключительно).
Таким образом Math.random(), может вернуть a, 0но никогда не вернуть a 1.
Примечание. Как и при сохранении значений с помощью оператора присваивания ,
все вызовы функций будут разрешены до returnвыполнения, поэтому мы можем получить returnзначение функции Math.random().
Измените rando/
function randomFraction() {

  // Only change code below this line
let result = 0; //объявить переменную 
   while (result === 0) { // при условии, что result строго равно 0
    result = Math.random(); //идет возврат рандомного числа от 0 до 1, но не равного ни 0, ни 1
  }

  return result; // возврат результата
  console.log(randomFraction());
//результат при обновлении постоянно разный. к приверу выпало 0.6863592378251364

  // Only change code above this line
}

// challenge 109
/*Генерация случайных целых чисел с помощью JavaScript
Вы можете генерировать случайные десятичные числа с помощью Math.random(), 
но иногда вам нужно генерировать случайные целые числа. Следующий процесс даст вам случайное целое число меньше 20:
Используется Math.random()для генерации случайного десятичного числа.
Умножьте это случайное десятичное число на 20.
Используйте Math.floor()для округления этого числа до ближайшего целого числа.
Помните, что Math.random()никогда не может быть полностью возвращено 1, поэтому его невозможно получить, 20так как вы округляете с помощью Math.floor().
Этот процесс даст вам случайное целое число в диапазоне от 0до 19.
Собрав все вместе, вот как выглядит ваш код:
Math.floor(Math.random() * 20);
Вы вызываете Math.random(), умножая результат на 20, затем передаете значение, чтобы Math.floor()округлить значение до ближайшего целого числа.
Используйте этот метод для генерации и возврата случайного целого числа в диапазоне от 0до 9.*/
function randomWholeNum() {
  return Math.floor(Math.random() * 10); //возвращает ближайшее целое число в диопазоне от 1 до 9, однако, стоит учесть что 1 получиться не может. 
}

// challenge 110
/*Генерировать случайные целые числа в диапазоне
Вы можете сгенерировать случайное целое число в диапазоне от нуля до заданного числа. Вы также можете выбрать другое меньшее число для этого диапазона.
Вы назовете свой минимальный номер minи максимальный номер max.
Эта формула дает случайное целое число в диапазоне от min до max. Найдите минутку, чтобы прочитать его и попытаться понять, что делает этот код:
Math.floor(Math.random() * (max - min + 1)) + min
Создайте вызываемую функцию randomRange, 
которая принимает диапазон myMinи myMaxвозвращает случайное целое число, которое больше или равно myMinи меньше или равно myMax.*/

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; 
}
console.log(randomRange());
// результат NaN!!!!!!

// challenge 112
/*Используйте функцию parseInt
Функция parseInt()анализирует строку и возвращает целое число. Вот пример:

const a = parseInt("007");
Приведенная выше функция преобразует строку 007в целое число 7. Если первый символ в строке не может быть преобразован в число, возвращается NaN.

Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала входную строку strв целое число и возвращала ее.*/

function convertToInteger(str) {
  return parseInt(str); //функция возвращает целое число
}

convertToInteger("56"); //возвратилось число 56

// challenge 113
/*Используйте функцию parseInt с основанием
Функция parseInt()анализирует строку и возвращает целое число. Он принимает второй аргумент 
для системы счисления, который указывает основание числа в строке. Основание может быть целым числом от 2 до 36.

Вызов функции выглядит так:

parseInt(string, radix);
И вот пример:

const a = parseInt("11", 2);
Переменная системы счисления говорит, что 11она находится в двоичной системе или с основанием 2.
В этом примере строка преобразуется 11в целое число 3.

Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала двоичное число в целое и возвращала его.*/

function convertToInteger(str) {
return parseInt(str, 2);
}

convertToInteger("10011");
console.log(convertToInteger("10011")) //получаем число 19

// challenge 114
/*Используйте условный (тернарный) оператор
Условный оператор , также называемый тернарным оператором , может использоваться как однострочное выражение if-else.
Синтаксис таков a ? b : c: где a— условие, b— код, выполняемый при возврате условия true, и c— код, выполняемый при возврате условия false.
Следующая функция использует if/elseоператор для проверки условия:
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
Это можно переписать с помощью условного оператора:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
Используйте условный оператор в checkEqualфункции,
чтобы проверить, равны ли два числа или нет. Функция должна возвращать либо строку Equal, либо строку Not Equal.*/
function checkEqual(a, b) {
 return a === b ? 'Equal' : 'Not Equal' //a cтрого равно b ? Да : нет
}
checkEqual(1, 2);

// challenge 115
/*Используйте несколько условных (тернарных) операторов
В предыдущей задаче вы использовали один условный оператор. Вы также можете связать их вместе, чтобы проверить несколько условий.

Следующая функция использует операторы if, else ifи elseдля проверки нескольких условий:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
Приведенную выше функцию можно переписать, используя несколько условных операторов:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
Рекомендуется форматировать несколько условных операторов таким образом, чтобы каждое условие находилось в отдельной строке, 
как показано выше. Использование нескольких условных операторов без надлежащего отступа может затруднить чтение кода. Например:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
В checkSignфункции используйте несколько условных операторов — в соответствии с рекомендуемым форматом, 
используемым в findGreaterOrEqual— чтобы проверить, является ли число положительным, отрицательным или нулем.
Функция должна вернуть positive, negativeили zero.*/

function checkSign(num) {
return (num > 0) ? "positive" 
: (num < 0) ? "negative" 
: "zero"; //если ни одно из вышеуказанных то 0
}
checkSign(10);

// challenge 116
/*Используйте рекурсию для создания обратного отсчета
В предыдущем задании вы узнали, как использовать рекурсию для замены forцикла. Теперь давайте рассмотрим более 
сложную функцию, которая возвращает массив последовательных целых чисел, начиная с 1числа, переданного в функцию.

Как упоминалось в предыдущем задании, будет базовый вариант . Базовый случай сообщает рекурсивной функции, когда 
ей больше не нужно вызывать себя. Это простой случай, когда возвращаемое значение уже известно. Также будет рекурсивный вызов , который выполняет исходную функцию с другими аргументами. Если функция написана правильно, в конечном итоге будет достигнут базовый случай.

Например, предположим, что вы хотите написать рекурсивную функцию, которая возвращает массив, содержащий числа 1до
n. Эта функция должна будет принимать аргумент , nпредставляющий конечное число. Затем ему нужно будет вызывать 
себя с постепенно меньшими значениями, nпока не будет достигнуто 1. Вы можете написать функцию следующим образом:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
Значение [1, 2, 3, 4, 5]будет отображаться в консоли.

Сначала это кажется нелогичным, поскольку значение n уменьшается , но значения в конечном массиве увеличиваются . Это 
происходит потому, что нажатие происходит последним, после возврата рекурсивного вызова. В точке, где nвталкивается в 
массив, countup(n - 1)уже было вычислено и возвращено [1, 2, ..., n - 1].

Мы определили функцию, вызываемую countdownс одним параметром ( n). Функция должна использовать рекурсию для возврата 
массива, содержащего целые числа, nна 1основе nпараметра. Если функция вызывается с числом меньше 1, функция должна 
вернуть пустой массив. Например, вызов этой функции n = 5должен вернуть массив [5, 4, 3, 2, 1]. 
Ваша функция должна использовать рекурсию, вызывая саму себя, и не должна использовать циклы любого вида.*/

// challenge 117

// challenge 118
// challenge 119
// challenge 120
