// СТРОКИ
let str = 'Строка с текстрм "в кавычках"';
console.log(str);
str = "Строка с текстрм \"в кавычках\""; //экранирование
console.log(str);

let upper = str.toUpperCase();
console.log(upper);

let lower = str.toLowerCase();
console.log(lower);

let str1 = "YBC";
let str2 = "FGTREW";
console.log(str1.localeCompare(str2));

let str3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita.";
console.log(str3.includes("sit amet"));



//ШАБЛОНЫ
let age = 34;
let name = "Tom";

console.log(`Имя пользователя: ${name}, возраст ${age} года`);
// чтобы не делать тупую склейку с плюсиками и пробелами



function converter (string, flag) {
	let convString = "";
	if (flag === 1) {
		convString = string.toLowerCase();
	} else if (flag === 2) {
		convString = string.toUpperCase();
	} else if (flag === 3) {
		convString = string[0].toUpperCase() + string.slice(1).toLowerCase();
	} else {
		convString = "Укажите флаг!!!";
	}
	return convString;
}
let someString = "BubBle GuM";
console.log(converter(someString));


function isSpam(str, ...word) {
	for (let i=0; i<word.length; i++) {
		if (str.includes(word[i])) {
			return "Есть такое";
		}
	}
	return "Всё хорошо"
}

let justString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facere, dolorum reiciendis nihil cupiditate aut, ipsa delectus porro eius laborum.";
console.log(isSpam(justString,"cat","amet","mobile"));



