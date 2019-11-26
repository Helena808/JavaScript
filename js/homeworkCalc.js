let nums = prompt("Введите выражение");

let sum = (a,b) => a+b;
let min = (a,b) => a-b;
let boo = (a,b) => a*b;
let del = (a,b) => a/b;


let promise = new Promise(function(resolve,reject) {
	let regexp = /[0-9]+\W{1}[0-9]+/;
	console.log(regexp.test(nums));
	if (nums.test(regexp)) {
		resolve(request.response);
	} else {
		reject(console.log('Ведите выражение вида "x+y" (вместо + могут быть -,* или /).';
	};
});

let successHandler = (okay) => {
	let operators = /\W/;
	let operator = nums.match(operators);
	let a = parseInt
	if (operator === "+") {

	}
}






let promise = new Promise(function (resolve, reject) {
		// ОБЕЩАНИЕ - какие-то действия функции
		if ("всё прошло успешно") {
			// обещание выполнено
			resolve("resolve - success");
		} else {
			// обещание не выполнено			
			reject("reject - error");
		};
	});


let successHandler = (okResult) => console.log(okResult);
let errorHandler = (notOkResult) => console.log(notOkResult);
promise.then(successHandler, errorHandler);




//AJAX запрос
let ajaxRequest = (url) => {
	return new Promise(function (resolve, reject) {
		// пошёл функционал промиса
		// здесь это аякс-запрос
		let request = new XMLHttpRequest();
		request.open("GET", url, true);
		request.onload = function () {
			if (request.status === 200) {
				resolve(request.response);
			} else {
				reject(Error("Ошибка " + status.text));
			};
		};
		request.send();
	});
};

successHandler = (okResult) => {
	let p = document.createElement("p");
	p.innerText = JSON.parse(okResult);
	document.body.append(p);
};
errorHandler = (errorResult) => {
	let p = document.createElement("p");
	p.innerText = "Данных нет";
	document.body.append(p);
	console.log(errorResult);
}
ajaxRequest("https://baconipsum.com/api/?type=meat-and-filler").then(successHandler,errorHandler);
