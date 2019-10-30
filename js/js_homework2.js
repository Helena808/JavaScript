// Задание 1
let arrow = [6,37,-2,8,1,3,7,21,5,-17,10,-12,32,16,-8,10,9,4];
let summ = 7;

for (let i=0; i<=arrow.length; i++) {
	for (let ii=0; ii<=arrow.length; ii++) {
		if (arrow[i] + arrow[ii] === summ) {
			console.log("Число "+ arrow[i] + " (элемент " + i +"), число " + arrow[ii]+ " (элемент " + ii +").");
			arrow[ii] = " ";
		}
	}
}

// Задание 2
for (let i=1; i<=100; i++) {
	if (i%5===0 && i%3===0) {
		console.log("ThreeFive");
	} else if (i%3===0) {
		console.log("Three");
	} else if (i%5===0) {
		console.log("Five") 
	} else {
		console.log(i)
	}
}

//Задание 3
let soap = 3;
let usagePerPlate = 0.5;
for (let plates = 11; plates>=0; plates--) {
	if (soap >= usagePerPlate) {
		soap -= usagePerPlate;
		console.log("Осталось " + soap + " мл моющего средства.");
	} else {
		console.log("Моющее средство закончилось. "+ plates + " тарелок придётся выкинуть с балкона.");
		break;
	}
	if (plates===1) {
		console.log("Это была последняя такрелка, ура.");
		break;
	}
}

// Задание 4
let arr1 = [7,3,24,86,21,43,9,5,12,4,87,3,121,10,21];
let arr2 = [65,3,7,12,32,14,1,98,32,22,6,7,12,10,41];
console.log(arr1);
console.log(arr2);

let avg1 = 0;
for (let i = 0; i<arr1.length; i++) {
	avg1 += arr1[i];
}
avg1 /= arr1.length; 
console.log(avg1); //первое среднее арифм.

let avg2 = 0;
for (let i = 0; i<arr2.length; i++) {
	avg2 += arr2[i];
}
avg2 /= arr2.length; 
console.log(avg2); // второе среднее арифм.

if (avg1 > avg2) {
	console.log("Среднее арифметическое первого массива больше.");
} else if (avg1 < avg2) {
	console.log("Среднее арифметическое второго массива больше.");
} else {
	console.log("У массивов одинаковое среднее арифметическое.");
}

// Задание 5.1
let length = prompt("Длина массива: ");
let arr = [];

for (let i=0; i<length; i++) {
	arr[i] = Math.floor(Math.random()*100);
} // генерируем массив из случайных элементов заданной длины
console.log (arr); //прямой порядок


let arrInverse = [];
for (i=0; i<arr.length; i++) {
	arrInverse.unshift(arr[i]);
}
console.log(arrInverse); // обратный порядок

//Задание 5.2
let square = [];
for (i=1; i<=20; i++) {
	square[i-1] = 2**i;
}
console.log(square);

// Задание 5.3
let string = "";
for (i=1; i<=10; i++) {
	string += "#";
	console.log(string);
}