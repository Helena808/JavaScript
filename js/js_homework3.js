// Задание 1
function sum(num) {
	return (num%10) + sum(Math.floor(num/10));
}
let boo = 123;
console.log(sum(boo));

// строки, массивы и циклы - низззяяя >_<



// Задание 2
function range(begin,end,step=1) {
	let arrow = [];
	for (let i=0; i<=((end-begin)/step); i++) {
		arrow[i] = begin + (i*step);
	}
	return arrow;
}
console.log(range(1,10,2));



// Задание 3
function dating(count) {
	let day = "";
	let modulo = count%10;
	if (count>=10 && count<20) {
		day = "дней";
	} else	if (count===1 || modulo===1) {
		day = "день";
	} else if ((count>=2 && count<5) || (modulo>=2 && modulo<5)) {
		day = "дня";
	} else {
		day = "дней";
	}
	return day;
}
let a=0;
console.log(a+" "+dating(a));
a=1;
console.log(a+" "+dating(a));
a=3;
console.log(a+" "+dating(a));
a=9;
console.log(a+" "+dating(a));
a=14;
console.log(a+" "+dating(a));
a=21;
console.log(a+" "+dating(a));
a=24;
console.log(a+" "+dating(a));
a=100;
console.log(a+" "+dating(a));
a=351;
console.log(a+" "+dating(a));
a=1004;
console.log(a+" "+dating(a));



// Задание 4
function randomArrow(arrLength) {
	let arrow = [];
	for (let i=0; i<arrLength; i++) {
		arrow[i] = Math.floor(Math.random()*100);
	}
	return arrow;
}

function sumArr(arrow) {
	let sum = 0;
	for (let i=0; i<arrow.length; i++) {
		sum += arrow[i]
	}
	return sum;
}

function findBiggest(arrow) {
	let biggest = arrow[0];
	for (i=0; i<arrow.length; i++) {
		if (arrow[i]>biggest) {
			biggest=arrow[i];
		}
	}
	return biggest;
}

let arr1 = randomArrow(5);
console.log(arr1);
let sum1 = sumArr(arr1);
console.log(sum1);

let arr2 = randomArrow(5);
console.log(arr2);
let sum2 = sumArr(arr2);
console.log(sum2);

let arr3 = randomArrow(5);
console.log(arr3);
let sum3 = sumArr(arr3);
console.log(sum3);

let arr4 = randomArrow(5);
console.log(arr4);
let sum4 = sumArr(arr4);
console.log(sum4);

let arr5 = randomArrow(5);
console.log(arr5);
let sum5 = sumArr(arr5);
console.log(sum5);

let arrOfSums = [sum1, sum2, sum3, sum4, sum5];
console.log("Суммы элементов массивов: "+arrOfSums);

let biggestSum = findBiggest(arrOfSums);
console.log("Наибольшая сумма: "+biggestSum);

