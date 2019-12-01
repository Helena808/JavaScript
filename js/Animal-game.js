class GameField {
	constructor(x, y, width, height) {
		this._canvas = document.getElementsByTagName("canvas")[0];
		this._width = width;
		this._height = height;
		this._x = x;
		this._y = y;
		this._context = this.context();

	}

		get canvas() {
			return this._canvas;
		};
		set canvas(value) {
			this._canvas = value;
		};
		get width() {
			return this._width;
		};
		set width(value) {
			this._width = value;
		};
		get height() {
			return this._height;
		};
		set height(value) {
			this._height = value;
		};
		get x() {
			return this._x;
		};
		set x(value) {
			this._x = value;
		};
		get y() {
			return this._y;
		};
		set y(value) {
			this._y = value;
		};
		get context() {
			return this._context;
		};
		set context(value) {
			this._context = value;
		};

	context() {
		let ctx = this._name.getContext("2d");
		ctx.fillStyle = "green";
		ctx.fillRect(this._x,0,900,600);
		return ctx;
	};

	event() {
		document.addEventListener("keydown", move.bind(document,tiger));
	}
	drawImg() {
		let img = new Image();
		img.src = "img/"+this.img;
		img.onload = () => { 
			ctx.drawImage(img, this.x, this.y, this.width, this.height);
		};
	};
}

class Animal {
	constructor() {
		this._name = name;
		this._width =  128;
		this._height =  128;

	};

	get name() {
		return this._name;
	};
	set name(value) {
		this._name = value;
	};
	get width() {
		return this._width;
	};
	set width(value) {
		this._width = value;
	};
	get height() {
		return this._height;
	};
	set height(value) {
		this._height = value;
	};

	drawImg() {
		let img = new Image();
		img.src = "img/"+this.img;
		img.onload = () => { //когда загрузится изображение,//будет вызвана функция (как addEventListener)
			ctx.drawImage(img, this.x, this.y, this.width, this.height);
		};
	};

	removeImage() {
	ctx.fillRect(this.x, this.y, this.width, this.height); 
	};
};



class Tiger extends Animal {
	constructor(name) {
		super(name);
		this._img =  "tiger.png";
		this._x = 22;
		this._y = 15;
	};

	get img() {
		return this._img;
	};
	set img(value) {
		this._img = value;
	};
	get x() {
		return this._x;
	};
	set x(value) {
		this._x = value;
	};
	
	move(obj, event) {
		if (event.code==="KeyW") {
			console.log("KeyW");
			removeImage(this); //закрасили старую
			this.y-=20; //задали шаг перемещения
			drawImg(this); //отрисовали новую с новыми коорд
		} else if (event.code==="KeyA") {
			removeImage(this);
			this.x-=10;
			drawImg(this);
		} else if (event.code==="KeyD") {
			removeImage(this);
			this.x+=10;
			drawImg(this);
		} else if (event.code==="KeyS") {
			removeImage(this);
			this.y+=10;
			drawImg(this);
		} else {
			console.log("никуда");
		};
	};
};





let tiger = new Animal ("Тигр");
tiger.drawImg();
console.log(tiger); //ok







