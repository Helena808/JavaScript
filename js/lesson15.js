// РИСОВАНИЕ

let canvas = document.getElementsByTagName("canvas")[0];
canvas.width = 900;
canvas.height = 600;

let ctx = canvas.getContext("2d"); // переменная с контекстом
ctx.fillStyle = "green";
ctx.fillRect(0,0,900,600); // полная заливка-отрисовали прямоугольник
//ctx.strokeRect(0,0,900,600); // отрисовка и заливка прямоуг контура

// Отрисовываем картинку

// 1. Общий класс ANIMAL
// 2. Дочерние классы на тигра и зайцев
// 3. Класс канвы с метьодами отрисовки сцены и прочим

let tiger = {
	img: "tiger.png",
	x: 22,
	y: 15,
	width: 128,
	height: 128,
};

// Функция для отрисовки изображения
function drawImg(obj) {
	let img = new Image(); //это как document.createElement("img")
	img.src = "img/"+obj.img;
	img.onload = () => { //когда загрузится изображение,//будет вызвана функция (как addEventListener)
		ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);

	};
};


//ПЕРЕМЕЩЕНИЕ КАРТИНКИ(=ОТРИСОВКА НОВОЙ С ДРУГИМИ КООРД.)
// w - перемещение вверх
// a - перемещение влево
// d - перемещение вправо
// s - перемещение вниз


function move(obj, event) {

	if (event.code==="KeyW") {
		removeImage(obj); //закрасили старую
		obj.y-=10; //задали шаг перемещения
		drawImg(obj); //отрисовали новую с новыми коорд
	} else if (event.code==="KeyA") {
		removeImage(obj);
		obj.x-=10;
		drawImg(obj);
	} else if (event.code==="KeyD") {
		removeImage(obj);
		obj.x+=10;
		drawImg(obj);
	} else if (event.code==="KeyS") {
		removeImage(obj);
		obj.y+=10;
		drawImg(obj);
	} else {
		console.log("никуда");
	};
};

//Функция удаления следовой картинки
function removeImage(obj) {
	ctx.fillRect(obj.x, obj.y, obj.width, obj.height); 
};


drawImg(tiger);
document.addEventListener("keydown", move.bind(document,tiger));