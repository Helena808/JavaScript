class Utils {
	static version = 1;

	static sum(a,b) { // статический
		//someVoid();
		return a+b;
	};

	someVoid() { // не статический
		Utils.sum(5,9);
		console.log("some void");
	};


};

let res = Utils.sum(3,8);
console.log(res);
console.log(Utils.version); // 1

let utils = new Utils();
utils.someVoid();
console.log(utils.version); // undefined