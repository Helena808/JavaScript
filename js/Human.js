class Human {
	constructor (name) {
		this._name = name;
		this._dog = null; // у человека может быть собака
	};

	set dog(dog) {
		this._dog = dog;
	};
	get dog() {
		return this._dog;
	};

	trainDog(command) { // человек обучает
		this._dog.learnCommands(command); // собака обучается
	};

	askCommand(command) { // человек просит
		this._dog.doCommand(command); // собака выполняет
	};

};