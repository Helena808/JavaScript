// ФУНКЦИИ

// 1. Именованные функции - Declaration
function sum(num1, num2) {
	return num1 + num2;
}

// вызов функции
let a=3;
let b=5;
let res = sum(a, b);
console.log(res);

let m=12;
let n=8;
res = sum(m, n);
console.log(res);


function sum2(num1, num2) {
	num1+num2; 
	//бестолковая функция, не дающая результата
	// т.к. нет return!!!
	// НЕ НАДО ТАК!!!
	// console.log(num1+num2) - ТАК ТОЖЕ НЕ НАДО!!!
}
m=12;
n=8;
res = sum2(m, n);
console.log(res);



// Значение аргументов по умолчанию
function greeting(userName="guest") {
	//userName = userName || "guest"; - старый вариант умолчания
	console.log("Welcome, " + userName + "!");
};
let name = "Penny";
greeting(name);
greeting(); 
// Welcome, undefined! - это если не задано умолчание
// Welcome, guest! - это если задано умолчание

function minimal(num1, num2) {
	if (!num1 || !num2) {
		console.log("Данные не переданы!"); 
		return;
		//ПРОВЕРКА: если данные не введены, то функция прекратится
		// !num1 !num2 - дадут true, если там undefined
	};

	//if (typeof num1 !== number || typeof num2 !== number) {
		//console.log("Это не числа!");
		//return;
		//ПРОВЕРКА на тип данных
	//}

	if (num1>num2) {
		return num2;
	} else if (num1<num2) {
		return num1;
	} else {
		console.log("Числа равны");
		return num1;
	};
};
a=25;
b=20;
console.log(minimal(a,b));



// Функция, суммирующая элементы массива
function sumOfArray(array) {
	let sumArr = 0;
	for (let i=0; i<array.length; i++) {
		sumArr += array[i];
	}
	return sumArr;
};

let arr=[3,78,12,-90];
console.log(sumOfArray(arr));


// Функции, изменяющие строку или массив
function changeStr(string) {
	string += " продолжение строки"; // так не работает!!!!
};

function changeArr(arrow) {
	for (i=0; i<arrow.length; i++) {
		arrow[i] +=3;
	};
};


let boo = "Здесь должно быть";
let booboo = [1,2,3];
changeStr(boo);
changeArr(booboo);
console.log(boo); // строка не поменялась
console.log(booboo); // массив поменялся



//ПЕРЕДАЧА ПО ЗНАЧЕНИЮ (примитивные типы данных)
// => НЕ ПРИВЯЗАНЫ
let numVar1 = 3;
let numVar2 = numVar1;
console.log(numVar1,numVar2);

numVar1 = 4;
console.log(numVar1,numVar2); // numVar1 НЕ ИЗМЕНИЛСЯ!!!

// ПЕРЕДАЧА ПО ССЫЛКЕ (массивы, функции и т.п.)
// => ПРИВЯЗАНЫ
let arr1 = [1,2,3];
let arr2 = arr1;
console.log(arr1,arr2);

arr1[0] = 4;
console.log(arr1,arr2); // arr2 - ИЗМЕНИЛСЯ ТОЖЕ!!!

// => !!!ОБЪЕКТЫ И МАССИВЫ НЕЛЬЗЯ СРАВНИВАТЬ!!! === ==


//Функция, выдающая числа от num до 0

// Вариант1
function printNums(num) {
	let i=num;
	while (i>=0) {
		console.log(i);
		i--;
	};
};
printNums(3);

// Вариант2
function printNums2(num) {
	if (num>=0) {
		console.log(num);
		//рекурсивный вызов функции - заменяет цикл
		printNums2(num-1);
	};
};
printNums2(3);


// Переменное количество аргументов
function printInfo() {
	// Если (), но аргументы при вызрове функции закидываются,
	// то они сохраняюся в переменную arguments[]
	console.log(arguments);
	console.log(arguments[0]);
};
printInfo("Mike", 31, "+79999999999");

// Оператор spread ... (es6)
function printUserInfo(login, pwd, ...other) {
	console.log(login);
	console.log(pwd);
	console.log(other); // массив
};
printUserInfo("qwe","heuv","Penny",22, "Jun.11");


//!!!! Простая функция сцммирования складывает ЭЛЕМЕНТЫ МАССИВА
// благодаря использованию ... в аргументе!!!
function sum3(num1,num2,num3) {
	return num1+num2+num3;
};
arr = [1,2,3];
res = sum3(...arr); // спред разобрал массив на элементы


// АНОНИМНЫЕ ФУНКЦИИ (EXPESSION)
let substractionNums = function(num1, num2) {
	return num1-num2;
};

// СТРЕЛОЧНЫЕ ФУНКЦИИ (es6)
substractionNums = (num1,num2) => num1-num2;
substractionNums = (num1,num2) => {
	//инструкция 1
	//инструкция 2
	//инструкция 3
	// return что-то
};


arr [2,0,3];
let sqrt=function(num) {
	return num*num;
};

function recurse(func,arrow) {
	let localArrow = [];
	for (i=0; i<arrow.length; i++) {
		localArrow[i]=func(arrow[i]);
	}
	return localArrow;
}

console.log(recurse(sqrt,arr));

// РЕКУРСИЯ

// Замыкание
function multi(n) {
	let x = n;
	return function (m) {
		return x*m;
	}
}

let multiSix = multi(6); 
// в multiSix вернулась ФУНКЦИЯ, которая будет умножать на 6 
res = multiSix(5);
console.log(res);
res = multiSix(10);
console.log(res);


// САМОВЫЗЫВАЮЩАЯСЯ ФУНКЦИЯ
// сама запускается с самого начала, 
// используют, когда переменные var,
// чтобы они не заливались в глобальную видимость
(function () {
	console.log("Самовызывающаяся функция");
} () );


// МЕТОДЫ ДЛЯ РАБОТЫ С МАССИВАМИ
arr = [12,-56,0,-2,34,67,-7];

//forEach - позволяет изменять эл-ты массива
// ПЕРЕБОР МАССИВА (ВМЕСТО FOR)
arr.forEach(function(elem,index,array) {
	console.log("Элемент № "+ index + "= "+ elem);
	array[index] *=2; // каждый элемент умножили на 2
});

console.log(arr);

//filter - возвращает новый массив, состоящий из эл-тов,
// ктр-е прошли провенрку переданной функцией
arr = [12,-56,0,-2,34,67,-7];
let lessZero = (elem,index,array) => elem<0;
let newArr = arr.filter(lessZero);
console.log(newArr);

// map - возвращает новый массив, состоящий из элементов,
// преобразованных переданной функцией
arr = [12,-56,0,-2,34,67,-7];
let sqr = (elem, index, array) => elem * elem;
newArr = arr.map(sqr);
console.log(newArr);


// some - проверяет, удовлетворяет ли ХОТЬ КАКОЙ-ТО элемент
// условию. Возвращает булево
arr = [12,-56,0,-2,34,67,-7];
lessZero = (elem,index,array) => elem<0;
newArr = arr.some(lessZero); // true
console.log(newArr);


// every - проверяет, удовлетворяет ли КАЖДЫЙ элемент
// условию. Возвращает булево
arr = [12,-56,0,-2,34,67,-7];
lessZero = (elem,index,array) => elem<0;
newArr = arr.every(lessZero); // false
console.log(newArr);



