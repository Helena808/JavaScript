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
}
let name = "Penny";
greeting(name);
greeting(); 
// Welcome, undefined! - это если не задано умолчание
// Welcome, guest! - это если задано умолчание

function minimal(num1, num2) {
	if (num1>num2) {
		return num2;
	} else if (num1<num2) {
		return num1;
	} else {
		return "Числа равны"
	}
}
a=25;
b=20;
console.log(minimal(a,b));
