// Задание 2
// let cities = prompt("Введите названия городов через пробел");
let cities = "Berlin Praha Tokyo London Amsterdam"; //допустим, это ввёл пользователь
let citiesArr = cities.split(" ");
console.log(citiesArr);
citiesArr.sort();
console.log(citiesArr);


// Задание 3
// let mainString = prompt("Введите какой-нибудь текст");
//let fragment = prompt("Что будем искать");
let string = "Олень - северное животное. В летнее время оленям в тайге жарко, а в горах даже в июле холодно. Олень как бы создан для северных просторов, жёсткого ветра, длинных морозных ночей.";
let fragment = "Олень";
let arrString = string.split(" ");

let count = 0;
for (let i=0; i<arrString.length; i++) {
	if (arrString[i] === fragment) {
		count++;
	}
}

console.log(arrString);
console.log(`${count} раза.`);


// Задание 4
function palindromeCheck (string) {
	let length = string.length;
		for (let i = 0; i < (length/2); i++) {
		if (string[i] == string[length-1]) {
			length--;
			continue;
		} else {
			console.log("Не палиндром");
			return false
			break
		}
	}
	console.log("Палиндром");
	return true;
}

palindromeCheck("babab");


// Задание 5
let string5 = 