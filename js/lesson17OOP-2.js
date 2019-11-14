class Apple {
	constructor() {
		this._age = Math.floor(Math.random()*10);
		this._spoil = false;
		this._fall = false;
	};

	get age() {
		return this._age;
	};
	set age(value) {
		this._age = value;
	};
	get spoil() {
		return this._spoil;
	};
	set spoil(value) {
		this._spoil = value;
	};
	get fall() {
		return this._fall;
	};
	set fall(value) {
		this._fall = value;
	};


	fallFromTree () {
		this._fall = true;
	};
	spoiled() {
		this._spoil= true;
	};
};


class Tree {
	constructor(apples) {
		this._apples = [];
		this.generateApples();
	};

	get apples() {
		return this._apples;
	};


	generateApples() {
		let rdm = Math.floor(Math.random()*15+5);
		for (let i=0; i<rdm; i++) {
			this._apples.push(new Apple());
		};
	};

};


class Garden {
	constructor() {
		this._trees = [];
		this.generateTrees();
		this._days = 1;
	};
	get trees() {
		return this._trees;
	};
	set trees(value) {
		this._trees = value;
	};
	get days() {
		return this._days;
	};
	set days(value) {
		this._days = value;
	};

	generateTrees() {
		let rdm = Math.floor(Math.random()*8+5);
		for (let ii=0; ii<rdm; ii++) {
			this._trees.push(new Tree());
		};
	};

	getCountApples() {
		let counter = 0;
		for (let tree of this._trees) {
			for (let apple of tree.apples) {
				if (!apple.spoil) counter++;
			};
		};
		return counter;
	};

	passDay() {
		if (!(this._days % 30)) {
			for (let tree of this._trees) {
				tree.apples.push(new Apple());
			};
		};
		this._days ++;
		for (let tree of this._trees) {
			for (let apple of tree.apples) {
				if (apple.age === 30) apple.fallFromTree();
				if (apple.age === 31) apple.spoiled();
				apple.age ++;
			};
		};
	};



	addTree(newTrees) {
		this._trees += newTrees;
	};
};



let garden = new Garden();
console.log(garden.getCountApples());
for (let x=0; x<100; x++) {
	garden.passDay ();
};
console.log(garden.getCountApples());