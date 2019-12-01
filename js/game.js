// РИСОВАНИЕ

let canvas = document.getElementsByTagName("canvas")[0];
canvas.width = 900;
canvas.height = 600;

let ctx = canvas.getContext("2d"); // переменная с контекстом
ctx.fillStyle = "green";
ctx.fillRect(0,0,900,600); 

let count = 0;

let div = document.getElementById("count");
div.style.cssText = `
	width: 150px;
	height: 40px;
	background: pink;
	color: #090974;
	text-align: center;
	align-items: center;
	padding-top: 15px;
`;
let p = document.createElement("p");
p.textContent = `Съедено кроликов: ${count}`;
p.style.cssText = `
	margin: 0;
`;

div.append(p);

let tiger = {
	img: "tiger.png",
	x: 22,
	y: 15,
	width: 124,
	height: 95,
};

let rabbit1 = {
	img: "rabbit3.png",
	x: 146 + (Math.floor(Math.random() * 664)),
	y: 110 + (Math.floor(Math.random() * 362)),
	width: 90,
	height: 128,
};

let rabbit2 = {
	img: "rabbit3.png",
	x: 146 + (Math.floor(Math.random() * 664)),
	y: 110 + (Math.floor(Math.random() * 362)),
	width: 90,
	height: 128,
};

let rabbit3 = {
	img: "rabbit3.png",
	x: 146 + (Math.floor(Math.random() * 664)),
	y: 110 + (Math.floor(Math.random() * 362)),
	width: 90,
	height: 128,
};


function drawImg(obj) {
	let img = new Image();
	img.src = "img/"+obj.img;
	img.onload = () => { 
		ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);

	};
};

function move(obj, event) {
	if (event.code==="KeyW") {
		removeImage(obj); //закрасили старую
		obj.y-=8; //задали шаг перемещения
		drawImg(obj); //отрисовали новую с новыми коорд
	} else if (event.code==="KeyA") {
		removeImage(obj);
		obj.x-=8;
		drawImg(obj);
	} else if (event.code==="KeyD") {
		removeImage(obj);
		obj.x+=8;
		drawImg(obj);
	} else if (event.code==="KeyS") {
		removeImage(obj);
		obj.y+=8;
		drawImg(obj);
	} else {
		console.log("никуда");
	};
	killing(rabbit1);
	killing(rabbit2);
	killing(rabbit3);
};

function removeImage(obj) {
	ctx.fillRect(obj.x, obj.y, obj.width, obj.height); 
};

function killing(obj) {
	if (obj.x>=(tiger.x-110) && obj.x<=(tiger.x+134) && obj.y>=(tiger.y-138) && obj.y<=(tiger.y+105)) {
		obj.img = "rabbitOo.png";
		drawImg(obj);
	};

	if (obj.x>=(tiger.x-90) && obj.x<=(tiger.x+124) && obj.y>=(tiger.y-128) && obj.y<=(tiger.y+95)) {
		removeImage(obj);
		obj.x=null;
		obj.y=null;
		obj.width=0;
		obj.height=0;
		count ++;
		div.textContent = `Съедено кроликов: ${count}`;
		console.log(count);

	}
};


drawImg(tiger);
drawImg(rabbit1);
drawImg(rabbit2);
drawImg(rabbit3);
document.addEventListener("keydown", move.bind(document,tiger));