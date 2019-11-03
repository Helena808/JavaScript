// СИМВОЛЫ - это отдельный тип данных
// символ - это уникальный идентификатор
// создать символ
let symId = Symbol();

// симовл с описанием
symId = Symbol("id"); // это два разных символа
let symId2 = Symbol("id"); // не смотря на то, что описани еодинаковое
console.log(symId);
// alert(symId.toString()); // alert работает только со строкой
// значит символ надо привести к строке
console.log(symId.description); // выдаст id
console.log(symId2.description); // выдаст id

// Глобальный реестр символов
let globalSym = Symbol.for("идентификатор"); //.for - закидывает в
let globalSym2 = Symbol.for("идентификатор"); //глобальную обл. вид-ти
// если символ с таким идентификатором уже существет
// в глобальной обл-ти, то вернёт символ оттуда, т.е. новый не создаст
console.log(Symbol.keyFor(globalSym)); //выдаст "идентификатор"





// ОБЪЕКТЫ как ассоциативные массивы
let obj = {}; // создали пустой объект
// 1. Литеральный способ создания
let article = {
	title: "JavaScript",
	text: "Описание что это",
	author: "Алёша",
	date: null, //если нужен пустой ключ, чтобы не было undefined
	//[id]: 2 //добавили ключ как 

}
console.log(article);

// Доступ к свойству
let titleOfArticle = article.title;
console.log(titleOfArticle);
authorOfArticle = article["author"];
console.log(authorOfArticle);

console.log(article.description); //undefined, т.к. такого ключа нет
console.log(article.date); // null, т.к. мы его туда положили



//Изменить занчение свойства
article.date = new Date().toDateString();
console.log(article.date);


// Добавиь новый ключ
let id = Symbol("article id"); 
//используем именно символ как уникальный идентификатор
article[id] = 1; // добавили ключ id со значением 1
console.log(article);
article.description = "Статья про сов";
console.log(article);

// Проверка на наличие свойств в объекта

// Вариант 1
if (article.img === undefined) { // такое условие не оч, т.к.
	console.log("Нет такого свойства");  // кто-то туда записал undefined
}

// Вариант 2 - ЭТОТ ЛУЧШЕ
if(!("img" in article)) { //проверка от противного
	console.log("Нет такого")
} else {
	console.log("Есть такое")
}

// Вариант 3 - возвращает true/false
console.log(article.hasOwnProperty("img"));



// Доступ к свойству через переменную
let propName = "title"; // ключ лежит в переменной
console.log(article[propName]); // только через []!!!!

let imgProp = "img";
article[imgProp] = "js.png";
//добавили лежащий в переменной ключ в объект и накинули ему значение
console.log(article);

// Перебор объекта
for (let propName in article) { 
//на каждой итерации в переменную propName в article 
//будет попадать ключ и по нему мы будем получать значение
	console.log(`значение propName = ${propName}`);
	console.log(`знание article[propName] = ${article[propName]}`);
}

console.log(Object.keys(article));
console.log(Object.getOwnPropertyNames(article));
console.log(Object.getOwnPropertySymbols(article));


/*Написать функцию getData, которая принимает на вход массив,
* имя свойства, значение свойства.
* Функция возвращает массив со статьями*/
/*Например:
getData(articles, "author", "Виталий"); // массив с 2 статьями
getData(articles, "title", "PHP");// массив с 1 статьей
* */
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];
function getData(arrow, key, value) {
	let newArrow = [];
	for (i=0; i<arrow.length; i++) {
		if (arrow[i][key] === value) {
			newArrow.push(arrow[i]);
		}
	}
	return newArrow;
}

let authorVit = getData(articles, "author", "Виталий");
console.log(authorVit);



// ФУНКЦИЯ В ОБЪЕКТЕ = МЕТОД ОБЪЕКТА

article = {
	title: "JavaScript",
	text: "Описание что это",
	author: "Алёша",
	printInfo: function() {
		console.log(`Статья: ${this.title}, автор: ${this.author}`)
	}
}

// Доступ к методу (функции) объекта
article.printInfo();

//Добавить/переопределить метод
article.printObj = function() {
	//console.log(article);
	console.log(this); // выведет то же самое
	//т.е. this - это ссылка на текущий объект

}
article.printObj();


// ЕЩЁ ПРО СИМВОЛЫ
let book = {
	[id]: 1,
	title: "Выразительный JavaScript",
	rating: 5,
};
console.log(book);

id = Symbol("someId");
book[id] = 34;
console.log(book); // не переопределился,а добавился!!!
console.log(book[id]); // выведет последнее

for (let a in book) {
	console.log(book[a]); 
}


//ДЕСТРУКТУРИЗАЦИЯ (РАЗБОР НА ЭЛЕМЕНТЫ)
let userInfo = {
	userId: 1,
	login: "qwe",
	name: "Гриша",
};
let {userId, login, name} = userInfo;
console.log(userId, login, name);
//разобрали объект на 3 отдельные переменные, 
//в которых лежит по одному значению

arr = [1, "qwe", "Гриня", 38];
let [first, second, ...other] = arr;
console.log(first, second, other);