// ОШИБКИ
// Обработка ошибок
try {
	//потенциально опасный код
} catch (error) {
	// обработка ошибок
};

console.log("Выполнение скрипта");

// Оператор throw - генерирует ошибку

let car;
if (!car) {
//	throw new Error("Сообщение об ошибке");
};


class SomeException extends Error {
	constructor (message) {
		super(message);
	};

	// а дальше описываем свои функции обработки ошибок
};

// Проверка на тип аднныъ "строка"
function someFunction(data) {
	if (typeof data !== "string") {
		throw new SomeException("Это не строка");
	};
	console.log(data);
};

try {
	someFunction("lalalalala");
	someFunction(5638);
} catch (e) {
	console.log("обработка ошибки", e);
}