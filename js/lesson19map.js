// map - коллекция для хранения данныъх в паре ключ-значение
// ключ - любой тип данных

let book1 = {
	title: "Война и мир",
	price: 3000,
};

let book2 = {
	title: "Выразительный JS",
	price: 2000,
};

let book3 = {
	title: "Азбука",
	price: 2100,
};

let books = new Map();
books.set(1, book1);
books.set(2, book2);
books.set(3, book3);

console.log(books);

console.log(books.size); //размер коллекции

console.log(books.has(2)); // проверка наличия ключа
console.log(books.has(7));

console.log(books.get(2)); // получить значение по ключу
console.log(books.get(7));

books.delete(2); // удаление элемента по ключу
console.log(books.size);

books.clear(); // очистить map
console.log(books.size);

books.set(1, book1);
books.set(2, book2);
books.set(3, book3);

books.forEach((value, key, map) => { //перебор мапа вариант 1
	console.log("Итерация...");
	console.log(key);
	console.log(value.title, value.price);
});

for (let book of books) { //перебор мапа вариант 2
	console.log("for...of");
	console.log(book);
};

let keys = books.keys(); //перебор ключей
console.log(keys);
for (let key of keys) {
	console.log(key);
};

let values = books.values(); //перебор значений
console.log(values);
for (let value of values) {
	console.log(value);
};

// Превращение объекта в мап
book2 = {
	title: "Выразительный JS",
	price: 2000,
};

let map = new Map(Object.entries(book2));
map.forEach((value,key,map) => {
	console.log("Итерация...");
	console.log(key);
	console.log(value);
});


// Превращение мапа в объект
let obj = Object.fromEntries([
	[1, book1],
	[2, book2]
]);

console.log(obj);

// Множество set
let bookSet = new Set();
bookSet.add(book1);
bookSet.add(book1);
bookSet.add(book2);
bookSet.add(book3);
bookSet.add(book2);
console.log(bookSet.size);

let numsSet = new Set();
numsSet.add(1);
numsSet.add(2);
numsSet.add(1);
numsSet.add(25);
console.log(numsSet.size);
console.log(numsSet);