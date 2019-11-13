class Dog extends Animal {
	constructor (name) {
		super(name);
		this._commands = [];
	};

	learnCommands (command) {
		this._commands.push(command);
		console.log(`${this._name} выучил команду ${command}`);
	};

	doCommand(command) {
		if (!this._commands.includes(command)) {
			console.log(`${this.name} не знает такую комманду`);
			return;
		};
		console.log(`${this.name} выполнила комманду ${command}`);
	};

};

