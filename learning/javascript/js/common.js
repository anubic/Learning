/*;(function(){

}()); Самовызывающаяся функция */
/* Выражения - первичные(простые) или составные(сложные), первичные - не включают в себя другие выражения,
 составные - включают в себя несколько и более выражений.
 простые - включают в себя идентификаторы, литералы, ключенвые слова.
 Операнды бывают унарные(+ 35), бинарные(2 + 2), тринарные.
*/
var myVar = 20, myVarSecond = 2; // Обявление переменной, можно обявлять несколько через запятую и сразу задвать переменные через =.
var variable, _var, $var; // идентификаторы могут начинася с буквы, подчеркивания, долар. но без цифр
// Регистр важен, myvar myVar разные идентификаторы. некоторые слова нельзя использовать, они зарезервированы под функции.
// Используемые данные бывают простые(primitive) и объектные(object).
// Primitive
var myNumber = 25, // Число, Числовой литерал
		myString = "String", // Строка, Строкоый литерал
		myBool = true, // Логическое true or false, Логический литерал
		myNull = null, // Литерал null
		myUndef = undefined; // идентификатор.

console.log(typeof myNumber); // Унарный оператор typeof указывает тип переменной, но сам он возвращает строку пример typeof tipeof = строка.
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull); // Извесная ошибка, выдает object
console.log(typeof myUndef);

// ObjectType
var obj = {name: "anub"}, // Обект
		array = [1, 2, 3], // Масив
		regex = /w+/g, // Регулярное выражение
		func = function(){}; // Функции

console.log("");
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regex);
console.log(typeof func);

// в js тип переменной определяется интепретатором, в зависимости от значения. Переменные не имею типа (untyped)
// Типы меняются на изменяемые(mutable) и изменяемые(immutable), простые не изменяемые обэкт можно поменять

obj.name = "passive"; // изменили свойство има на другое
array[1] = 32; // оратились к индексу и поменяли его.

console.log(array);

// Строки не меняются
console.log(myString.toUpperCase()); // выводит новую строку
console.log(myString);

// оператор присваивания

var a, b, c, d;
a = b = c = d = 5; ///присваивание идет справа на лево.


// ЧИСЛОВОЙ ТИП ДАННЫХ
console.log("");
// числа записаные в коде, числовые литералы, минус ведет себя как опертор
// Целочисленые литрал
console.log(5);
console.log(0);
console.log(3000);
console.log(0xfffcc); // 16 ричное чило
console.log(0xbbbcccc); // 16 ричное чило

//числа с плавающей точкоq или експоненциальные
console.log(12.45);
console.log(.45);
console.log(1.45e3);

// преобразование вещественых чисел

var N = new Number(4000), // создали обэект, с помощью обертки. обертку приянто писать с большой буквы
		n = 5000; // числовое значение
console.log(typeof N);

console.log(N.toFixed(2)); // преобразование  в числа с плавающей точкой, в скобках, параметр количество числе после точки
console.log(n.toFixed(2)); // для не обектов создается обертка на лету и после обсчета удаляется
console.log(2 .toFixed(2));

// арифметические операторы
// -- Оператор инкремента, уменьшает значение переменной на 1
// ++ Оператор дикремента, увеличевает значение переменной на 1

var i = 10;
console.log(++i); // префиксный енкриментб снччало увеличиваетп переменную и возвращает значение
console.log(i);
console.log(i++); // постфиксныйб наоборот
console.log(i); // т.к. прошлая инструкция сначало берет знчени и увеличевает на 1 то тут віведет уже 12

// бинарніе операторы *, /, % - остаток от деления

console.log(10 % 3);

// Присваивание с операцией
var n = 100;
n = n + 20;
console.log(n);
n += 20; // сокращеная форма прошлого присваивания
console.log(n);
n = n * 2;
console.log(n);
n *= 2;
console.log(n);

// Операторы отношения возвращяют логические true или false

console.log(10 === 10); // равенство
console.log(10 !== 10); // Не равенство

console.log(10 == "10"); // == - сравнение на равенство с приведением типов.

// объект Math.

console.log(Math.sqrt(4)); // квадратный корень
console.log(Math.pow(4,5)); // Возмедение в степень

// бесконечность является числом

console.log(typeof Infinity);

// Строки 
// Выводятся в виде кавычек, двойные или одинарные. "", ''

console.log("Hello".length); // длина строки
console.log("\"Another\" \nvery long \n\t\tstring"); // \n - new line, \t - indent, \" экраинирование кавычек, \\ - обратный слеш

var string = "Hello";
console.log(string + " world"); // + в таком случае является обеденяющей строки.

var string = "Very long and the same diferents";
console.log(string.length); // длина строки
console.log(string.charAt(2)); // возвращает символ под указаным индексом, в данном случает  2 = r (индекс начинается с 0)
console.log(string.charAt(string.length - 1)); // Возвращает последний символ
console.log(string.substring(10)); // Получам подстроку, начиная с 10 символа
console.log(string.substring(10,21)); // Получам подстроку, начиная с 10 символа и заканчивая 21
console.log(string.slice(-10)); // слайс работает таак же как и сабстрин, только можно использовать - значения, Получам подстроку, послелние 10 симвобов
console.log(string.substr(10, 6)); // Получаем подстроку начиная с 10 символа и берем последующие 6 символов
// Строки не изменяются, все дает новую строку.
console.log(string.indexOf("same")); // поиск в строкеиндекса символов или слова.
console.log(string.lastIndexOf("same")); // поиск в строкеиндекса символов или слова, начиная с конца
console.log(string.replace("the","is not")); // Заменяет
console.log(string.split(" ")); // разделяет на масивы, в этом примере в качетсве разделителя идет пробел.
console.log(string.toUpperCase()); // приведение к высококому регистру
console.log(string.toLowerCase()); // приведение к малому регистру

console.log(string[5]); // рабоатет в ECMAscript 5, в нем троки могу интерпретироватся как масивы

//  Логический тип данных
// Принимают только 2 значненрия, истина или лож. true false
console.log(true);
console.log(false);

console.log(5 === 5);
console.log(5 === 6);
// любое значение может быть преобрзовано в логичкое, используется конструктор булевого типа 

console.log(Boolean(5));

// Истину будут принимать все кроме перечисленых False values 

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

// Везде где интерпретаторо ожидает увидеть логичское значение, все значения будут преобразованы в ник
// пример if 

var s = "Text";

if (s) {
	console.log("Its true");
}

// логические операторы
// && - и, возвращает истину есть только оба значения истина

console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && true);

// || или
// возвращает истину всегда, когда один из операндов истина

console.log(true || false);
console.log(false || false);

// ! - не 

console.log(!true);
console.log(!false);

//

// выражение && выражение - значение правого операнда вычесляется только если левый истина, обратном случае это не нобходимо

var a = 0,
		isTrue = true;

isTrue && (a = 5); // Если левый операнд истина то a = 5, если ложь то нулю

console.log(a);

// логическое или с оператором присваивания можно ипользовать след случае

var someString = "Non-empty string";
var newString = someString || "Default String"; // если левый операнд лож то подставляет правый операнд, в даном случае там истина возвращает первое значение
console.log(newString);

// null и undefined - обозначают означают отсутствие значение
// null - пустое значение
// undefined - полное отсутствие значения
// возвращает undefined в следующих случаях 
var temp;
var obj = {};
var a = [1,2,3,4];

function greet(name) {
	return "hello " + name;
}

function gretundef(name) {}

console.log(temp);
console.log(obj.property);
console.log(a[4]);
console.log(greet("anubic"));
console.log(greet());
console.log(gretundef());

console.log(null == undefined); // с приведением типов они равны
console.log(null === undefined); // они имеют разные типы, не равны


console.log("Преобразование типов");

// если логическая операция ожидает увидеть значение определенного типа то любое значение будет крнему приведено
// пример

console.log(5 + "5"); // результт  55
console.log(typeof(5 + "5")); // результат string
console.log("5" * "4"); // 20
console.log(typeof("5" * "4")); // number
console.log("5" * "hi"); // NaN
console.log("5" == 5); // true
console.log("0" == false); // true
console.log(Boolean(0)); // true

// Явные преобразования (Explicit Conversions)
// Конструкторы типов

console.log(Number("55")); // преобразование в чило
console.log(typeof(Number("55")));
console.log(String(55)); // в строку
console.log(typeof(String(55)));
console.log(Boolean(55)); // булевый тип
console.log(typeof(Boolean(55)));

console.log(!!5); // преобразует в логический тип, !5 получит -5. !!5 в  5
console.log(345 + ""); // в строку
console.log(+"454"); // в число

var number = 22;
console.log(number.toString()); // число в строку
number = 5;
console.log(number.toString(2)); // перевод в сичтему исчесления, аргумент указывает  на основание, в данном случае в двоичную

console.log(false.toString()); // преобразование булевого в строку.

// преобразование строки в число

console.log(parseInt("45 px", 10)); // преобразует в число, символы игнорируются, тут  45. второй параметр система исчесления
console.log(parseFloat("46.45 em")); // тоже самоке, но преобразует и существенные числа

// преобразование Infinity и NaN - получаем соответствующую строку
// +"" - получаем 0
// при преобразовании в булевый всегда исттину кроме указаных выше, в булевых значениях
// преобразование будевы в число получаем 0 и 1 для false и true соответственно 
console.log(+true); // 1
console.log(+false); // 0

// преобразование простых значений в объект.
// если интерпретатор должен получить обект, а там другое значение то он его преобразует в обертку объекта
//не преобразуются только null и undefined, будет ошибка TypeError

// var n = null;
// console.log(n.value); // ошибка
// ВСЕГДА использовать === - сравнение без приведения к типам.

console.log("условные инструкции");

// if (выражение) инструкция
if (true) console.log("Its true");
if (false) console.log("Its true"); // если ложное - то не выполняется

// в скобках будет любое выражение, оно всегда преобразется в булевый тип (true false)

var n = 5;
if (n > 3) {
	n *= 3;
	console.log(n);
} else { // else выполняется если значение false
	console.log("n is nit less than 3");
}

var name = "anubic", homesity;

if (name === "jonh") {
	homesity = "Boston";
} else if (name = "anubic") {
	homecity = "kiev";
} else if (name === "bill") {
	homecity = "LA";
}

console.log(homecity);

// Для примера выше есть более удобная запись с использованием switch

// switch(выражение) {
// 	case выражение: инструкция;
// 	case выражение: инструкция;
// 	case выражение: инструкция;
// 	case выражение: инструкция;
// 	default: инструкции;
// } // парсер сравнивает выражение в скобках и если она true выполняет инструкцию, а так же все инструкции что идут ниже
// если не одно выражение не правдива используется инструкция default

var name = "James", homecity;
switch(name) {
	case "Jonh": homecity = "Boston"; break; // break инструкция выхода из цикла, благодаря ней все инструкции ниже выполнятся не будут.
	case "anubic": homecity = "Kiev"; break;
	case "James": homecity = "LA"; break;
	default: homecity = "NY";
}

console.log(homecity);

console.log("Условный оператор");

// выражение1 ? выражение2 : выражение3 // если выражение 1 истина то показывает выражение 2б лож то выражение 3

var x = 10;
var text = x > 10 ? "x больше десяти" : "x меньше либо равен 10";
console.log(text);

// в качестве условия может выступать и if 

var x = 10,
		text = x > 10 ? "x больше десяти" : x < 10 ? "x меньше десяти" : "x равен десяти";

console.log(text);

// запись выше можно записать с использованием if

if (x > 10) {
	text = "x больше десяти";
} else if (x < 10) {
	text = "x меньше десяти";
} else {
	text = "x равен десяти";
}
console.log(text);

// , - бинарный оператор. 
// выражение, выражение 
// выражения обчисляются слева на право
var test = (10,20); // в данном примерере necne будет присвоено значение 20
console.log(test); // 20

console.log("Цикли");

// в js есть 4 вида циклов
// 1. for
// for (выражение; выражение; выражение;) инструкция
// for (инициализация; тест; инкремент) тело цикла
// первое выражение инициирует какуюто переменную, присваивает ее и т.д., второе тест, если выражение истина то тело цикла выполняется, если лож то нет. Третее выражение инкремент, обновляет значение счетчика.

//for (;;); // бесконечный цикл, запятые всегда нужны
var i; // в цикле лучше обявлять переменные в начале из-за области видимости
for (i = 0; i < 10; i++) {
	console.log(i);
} // выводит i 10 разб каждый раз увеличивая на 1. в конце выводт i = 9
// если показать i после циал то выводит 10. т.к. в самом цикле 10 < 10 лож и оно егоне выводит.

// если i не используется в теле цикла то процщше его уменьшать, это выполняется быстрей.

var i;
for (i = 10; i--;) {
	console.log(i);
}

// while (выражение) инструкция
// проверяется выражение на истиность, если верно, выполняет инструкция.

var i = 10;
while (i--) {
	console.log(i);
}

// do инструкция while (выражение)
// инструкция выполняется до выражения, в не зависимости от истиности выраажения, 1 раз оно выполнится.

var i = 0;

do console.log(i++); 
while (i < 2);

console.log("функции");

// функции это кусок код которое определяется 1 раз и может быть использовано много раз.
//синтаксис
// function идентификатор(аргументы) {
// 	инструкции
// 	return выражение
// }

// function greet(name) {
// 	return "hello " + name;
// } // инструкция объявление функции (function declaration statement)

// var greet = function(name) {
// 	return "hello " + name;
// };// выражение определения функции (function definition expression)

// вызов функции
// выражение(аргументы)
// в место вызова вернется расчитаное значение функции, если она ничего не возвращает  то будет undefined 
// при подстновке функции идентификатор ее обчисляет и сразу забывает.
// console.log(greet("anubic").toUpperCase()); // функция возвращяет строку, поэтому  к ней можно использовать команды для строки.

// в функции можно вызывать больше аргументов, неопределенные аргументы потом можно использовать
// если подставляют меньше используемых аргумен6тов, то вместо них будет подставлятся undefined 

// var greet = function(name) {
// 	console.l
// 	return "hello " + name;
// };
// мы можемм обращатся к аргументам через индекс или расчитать его длину (.length)

// console.log(greet("anubic", 33, 23, 26).toUpperCase());

// функцию можно вызывать в функцию в качестве аргументов для организации callback 
// пример

// var func = function(callback) {// 	var name = "anubic";
// 	callback(name);
// };

// func(function(n) {
// 	console.log("hello " + n);
// });
// функция может быть возвращаемим обращением

// var func = function() {
// 	return function() {
// 		console.log("hi");
// 	}
// };

// func()(); // выщов данной функции

// функция может быть вызвана сразу после определения, если мы используем определение.

var greeting = (function(name) {
	return "hello " + name;
}("anubic")); // переменной присваивается результт выполнения функции. В конце в скобках мы сразу вызываем функцию с указаным аргументо
// данная функция называется анонимной самовызывающейся функцие

console.log(greeting);

console.log("Область видимости");
// область видимости (scope), цепочки областей видимости (scope chain)
// область видимости переменнной это часть програбы где она определенна и доступна
// переменные по области видмости делятся на глобальные и локальные
// глобальные - переменные объявленне вне функций
// локальные обявленные внутри функции
// локальные с таким же ввидом имеют приоритет
// вложеные функции создают цепочки областей видимости

//забмыкания (closures)

// при выполнение функции используеттся та область видимости переменных которая существовала при обявлении данной функции.
// пример

var func = function(){
	var i = 10;
	return function(){
		return i;
	}
}; // если бы не было функции ссылающейся на i, в данном случает функция в ретурн, то к i нельзя было бы обратится
// поскольку после не было бы необходимости использовать эту переменную и она сразу удалялась
// var func = function(){
// 	var i = 10;
// 	}
// }; // к i нельзя обратится.

var anotherFunc = function(){
	var i = 20;
	console.log(func()()); // изза лексиеской зоны видимости, в консоль выводится пеервая переменная = 10
};

anotherFunc();

// с каждой функцией заявязано зона видимости переменной и вместе с этой цепочкой функция называется замыканием

var counter = (function(){
	var count = 0;
	return function(){
		return count++;
	}
})();// самовызывающаяся фнкуция с замыканием. при каждом поледующем вызовом в переменной будет добавлтся 1
// переменные объявленые в функции, в данном случае count мы можем получить или изменить ее только с помощью вложеных функций


console.log(counter()); // 0 
console.log(counter()); // 1
console.log(counter()); // 2

// замыкания, это функция объявленная внутри функции, благодаря которой локальные переменные внутри старшей функции не сбрасываются после завершения работы этой функции, а остаются при повторном вызове.
// Замыканиями они называются потому, что младшая функция их замыкает внутри старшей.


// обработка искключений
// throw выражение
// дданная инструкция прерывает обработку скрипта и заставляет искать ближайший инструктор исключения. т.е ветку cache инструкции trycache 

function calculate() {
	if (n > 10) throw new Error("n should be less than 10");
	return n + 10;
}; // пример добавленрия исключения

// calculate(20); //  выведет ошибку "n should be less than 10"

// обработка исключений
// try {
// 	инструкции // исключение
// } catch (идентификатор) { // ловим исключение, если оно есть то выполняем инструкции
// 	инструкции
// } finally {
// 	инструкции // выполняются вне зависимости от трай
// };

try {
	calculate(20);
} catch (e) {
	console.log("can't execute calculate: " + e.massage); // выводит ошику в консоль, скрипт продолжает работать
}

// Объекты
// Объектом называется еабор свойств которые представлют пары имя: значение

var person = {
	name: "anubic",
	age: 23,
	gender: "male",
	sayHi: function() {
		return "hello";
	} // свойством орбъекта может быть функция. тогда она называется методом.
} // обект литерал который описывет счеловека. 

// с помощью обращений можно изменять свойства обекта или добавлять новые.

person.age = 25; // изменили
person.userID = 222222; // добавили новые

delete person.age; // удаление свойства, удаляет ттолько основные, не наследованые свойства

// обращение к свойствам обекта
// объект.свойство

console.log(person.name); // обращение к объетку перон и его свойству name
console.log(person.gender);

// объект[свойство]

console.log(person["age"]);

console.log(person);

console.log(person.sayHi());

// создание объекта

// var object = new Object(); // 1й способ

var object = {x: 10, y: 20}; // 2й способ
console.log(object);

function checkProp() {
	if ("city" in person) {
		return "Свойство существует";
	} else {
		return "Свойство не существует";
	}
}; // проверить наличие свойства можно с помощью in, "свойство" in объект

console.log(checkProp());

// this обращается к текущему объекту с которым идет работа.
// если функцию указать свойством объекста, то такая функция называется метот объекта.
var greet = function(greeting) {
	return greeting + "! my name is " + this.name
}

var person = {
	name: "jon",
	greet: greet
};

var anotherPerson = {
	name: "Bob",
	greet: greet
}

console.log(person.greet("hello"));
console.log(anotherPerson.greet("hello"));

// при помощи методов call и apply  можно указать на какой объект указывает слово this
console.log(anotherPerson.greet.call(person, "privet")); // указывает this на person, через зяпятую можно указать аргументы которые принимает функция
// console.log(anotherPerson.greet.call(person, "privet"));
console.log(anotherPerson.greet.apply(person, ["privet"])); // тот же синтаксис, только аргументы принимаются масивом []

var bound = greet.bind(anotherPerson);  // метод bind связывает this  функцию с объектом, чтоб при вызове она указывала на объект с которым была связана
console.log(bound("hello there"));

// дескриптеры геттеры и сеттеры

// var person = {
// 	name: "Anubic",
	
// };

// Reg Exp

// var = /hello/, // contain at leaste 1 this worrd
// 		=	/^hello/, // ^ at the start
// 		= /hello$/, // $ at the end
// 		= /hel+o/, // + once or more: hellllo, helo, helllllllo
// 		= /hel*o/, // zero or more times: heo, hellllo, helo, helllllllo
// 		= /hel?o/, // zero or one
// 		= /hello|goodby/, // either|or
// 		= /he..o/, // .any character
// 		= /\wello/, // \w alphanumeric or _
// 		= /\bhello/, // \b word boundary
// 		= /[crnld]ope/; // [...] ranhe of charts

var player = {
	name: "anubic",
	_age: "24",
	get age() {
		return this._age;
	},
	set age(value) {
		this._age = value < 0 ? 0 : value > 122 ? 122 : value;
	}
};

player.age = 40;
console.log(player.age);

console.log(Object.getOwnPropertyDescriptor(player, "name"));
console.log(Object.getOwnPropertyDescriptor(player, "age"));

Object.defineProperty(player, "gender", {
	value: "male",
	writeble: false, // свойство нельзя записатьь
	enumerable: false, // свойство нельзя посчитать
	configurable: false // свойство запрещает поменять атрибуты, также нельзя удалить свойство 
});

// console.log(player.gender);
// console.log("");
// for (property in player) {
// 	console.log(property);
// } // масив для вывода всех свойств объекта

// console.log(Object.keys(player)); // кены короткая запись для вывода всех свойств объекта

// console.log(player.propertyIsEnumerable("gender")); // свойство показывает можно ли подсвичтьта свойство у указаного объекта
//

var o = {};
Object.defineProperties(o, {
	x: {
		value: 40,
		writeble: false
	},
	y: {
		value: 40,
		writeble: false // дескриптор
	}
}); // определение обекта со свойствами.

// расширяемость объектов

// var obj = {};
// Object.preventExtensions(obj); // Запрещает добавлять к объекту свойства
// // Делает нерасширяемым только сам объект. прототипы могут получать свойство и объект их унаследует
// console.log(Object.isExtensible(obj)); // проверка можно ли добавлять свойства

// Object.seal(obj); // тоже что и сверху, только добавляет еще ко всем свойствам configurable: false
// // совйства нельзя удалить или добавитьб или поменять атрибуты свойств.
// Object.isSealed(obj); // проверка прошлого свойства

// Object.freeze(obj); // тоже что и сил. только еще делает доступными все свойства только для чтения
// Object.isSealed(obj); // проверка

// при приссвамвании переменной обекта, обекс всегда является ссылкой.

// Прототипирвоание

var Person = {
	initialize: function (name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		return this; // Возвращаем данный объект, для того чтобы ему присвоились значения
	}, // создали метод, которрый будет присваивать полученые значение объекту
	hello: function() {
		console.log("Hi, my name, is " + this.name);
	}
}; // Прототип объекта.

var person, anotherPerson, thirdPerson;

person = Object.create(Person).initialize("Anubic", 24, "male"); // Создание из прототипа.
anotherPerson = Object.create(Person).initialize("James", 34, "male");
thirdPerson = Object.create(Person).initialize("Katya", 20, "Female");

thirdPerson.hello();

console.log(Person.isPrototypeOf(person)); // являеся ли объект прототипом объекта

var WebDeveloper = Object.create(Person); // Делаем Person прототипом WebDevelopera


WebDeveloper.initialize = function(name, age, gender, skills) { // изменяем конструктор прототипа, присваивая ему новые свойства.
	Person.initialize.apply(this, arguments); // чтобы не вводить заново поля из первоночального прототипа, вызываем из конснтруктора класа веб двелопер, конструктор класа  Person
	// Используем метод apply, который передает этому конструктору указаные аргументы в виде строки
	this.skills = skills || [];
	return this;
}; // Создаем новый объект который должен вести себя так же как и прототип Person но иметь свои свойства и методы



WebDeveloper.develop = function(){
	console.log("Working...");
};

var developer = Object.create(WebDeveloper).initialize("Jack", 20, "male", ["css", "html", "js"]);

console.log(Object.keys(developer));
console.log(developer.skills);
developer.develop();
console.log(WebDeveloper.isPrototypeOf(developer));


// Конструкторы

