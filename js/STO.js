class STO {
	constructor () {
		this._cars = [];
	};

	addCar(car, toFix) {
		car.toFix = toFix;
		this._cars.push(car);
	};

	wash(car) {
		car.toFix = null;
		console.log(`Помыли автомобиль ${cars}`);
	};

	tyres(car) {
		car.toFix = null;
		console.log(`Переобули автомобиль ${cars}`);
	};

	dye(car, color) {
		car.color = color;
		car.toFix = null;
		console.log(`Покрасили автомобиль ${car}`);
	};

	allService() {
		for (let i=0; i<this._cars.length; i++) {
			if (this._cars[i]["toFix"] === "wash") {
				this.wash(this._cars[i]);
			} else if (this._cars[i]["toFix"] === "dye") {
				this.dye(this._cars[i]);
			} else if (this._cars[i]["toFix"] === "tyres") {
				this.tyres(this._cars[i]);
			} else {
				console.log("Что-то пошло не так...")
			};
			this._cars.pop();
		};
	};
};