class Animal {
// 1. Конструктор выполняется в момент создания объекта через new
	constructor(name) {
		this._name = name;
		this._health = 15;
		this._attackScore = 0;
	};

	// 2. Добавляем геттеры и сеттеры для защиты
	get name() {
		return this._name;
	};
	set name(value) {
		// if...  ...проверка value
		this._name = value;
	};


	get health() {
		return this._health;
	};
	set health(value) {
		// if...  ...проверка value
		this._health = value;
	};

	get attackScore() {
		return this._attackScore;
	};
	set attackScore(value) {
		// if...  ...проверка value
		this._attackScore = value;
	};

	// 3. Создаём методы Animal
	eat(food) {
		this._health += 1;
		console.log(`${this._name} ест ${food}`);
	};

	attack(otherAnimal) {
		if (!(otherAnimal instanceof Animal)) return;
		console.log(`${this._name} напал на ${otherAnimal._name}`);
		otherAnimal._health -= this._attackScore;
	};
};





