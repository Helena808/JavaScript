// Локальное хранилище
// Обращение
let storage = localStorage;

console.log(storage);

// Добавление данных
storage.setItem("key","value");
storage.setItem("key",123);
storage.setItem("key 2","value 2");
console.log(storage);

// Получение значения по ключу
let sometthing = storage.getItem("key");
console.log(sometthing);

// Удаление по ключу
storage.removeItem("key 2");

// Очищение хранилища
storage.clear();

// Добавление объекта как значения
let data = {
	name: "Alex",
	age: 22,
};

storage.setItem("data",data);
let dataFromStorage = storage.getItem("data");
console.log(dataFromStorage);
console.log(storage); // object object =(((((
storage.removeItem("data");

// JSON
let jsonData = JSON.stringify(data);
storage.setItem("jsonData", jsonData);
console.log(storage); //теперь в значении лежит строка, ктрая была объектом

// Обратно
let fromStorage = storage.getItem("jsonData");
fromStorage = JSON.parse(fromStorage);
console.log(fromStorage.name); // Alex 

