class Cars {
	constructor(model, color) {
		this._model = model;
		this._color = color;
		this._toFix = null;
	};
	

	get model() {
		return this._model;
	};
	set model(value) {
		this._model = value;
	};
	get color() {
		return this._color;
	};
	set color(value) {
		this._color = value;
	};
	get toFix() {
		return this._toFix;
	};
	set toFix(value) {
		this._toFix = value;
	};

	
};