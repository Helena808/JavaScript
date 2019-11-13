//1. Функция-конструктор кроликов (шаблон)
function Rabbit (name) {
	this._name = name;
	this._speed = 27;

	this.eat = function(food) {
		console.log(`${this._name} съел ${food}`); //задали действие (2 способ)
	}
}

//Задаём действия через метод объекта (старый способ)
Rabbit.prototype.jump = function() {
	console.log(`${this._name} прыгает`);
}

//2. Создаём объекты
let rabbit1 = new Rabbit("Mr. Slow");
rabbit1._speed = 13;
rabbit1.jump();
console.log(rabbit1);

let rabbit2 = new Rabbit("Roger");
rabbit2.eat("волка");
console.log(rabbit2);