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
