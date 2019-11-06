console.log(document); // весь документ целиком
console.log(document.body); // body

let list = document.getElementById("list"); //с комментом!
console.log(list);
//перемещение по DOM-дереву
console.log(list.childNodes); //все дочерние
console.log(list.children); //только дочерние теги

// ПЕРЕБОР DOM КОЛЛЕКЦИИ
for (let elem of list.children) {
	console.log(elem);
}

console.log(list.firstChild); //вернёт детей УЗЛЫ (любые)
console.log(list.lastChild);
console.log(list.firstElementChild); // вернёт детей ТЕГИ узлы
console.log(list.lastElementChild);

console.log(list.previousSibling); // вернёт соседи УЗЛЫ
console.log(list.nextSibling);
console.log(list.previousElementSibling); // вернёт соседи ТЕГИ
console.log(list.nextElementSibling);

console.log(list.parentNode); // вернёт родитель УЗЕЛ
console.log(list.parentElement); // вернёт родитель ТЕГ

// ПОИСК ЭЛЕМЕНТОВ В DOM-ДЕРЕВЕ
// 1. По ID
console.log(document.getElementById("list"));
// 2. По значению атрибута name
let elementByName = document.getElementsByName("data");
console.log(elementByName);
//3. По имени тега
let elementByTag = document.getElementsByTagName("li");
console.log(elementByTag);
//4. По имени класса
let elementByClass = document.getElementsByClassName("some-class");
console.log(elementByClass);
// 5. По css-селектору
let elementByCSS = document.querySelector("ul>li"); //первый найденный
console.log(elementByCSS);
let elemsByCSS = document.querySelectorAll("input[type=text]"); //все такие
console.log(elemsByCSS);



// Создание элемента в html
let div = document.createElement("div");


//Работа с атрибутами
div.setAttribute("id","container");
console.log(div.hasAttribute("id")); //true
console.log(div.getAttribute("id")); // вернёт value (container)

// Атрибут style
div.style.cssText = `
	width = 500px;
	height = 1000px;
`;
div.style.background = "yellow";

// Получить все стили элемента
//let listStyles = getComputedStyle(list);
//console.log(listStyles);
//console.log(listStyles.background);
//console.log(listStyles.marginTop);


// Работа с классами
div.classList.add("class-name");
div.classList.remove("class-name");

// toggle - добавить\удалить
//div.clessList.toggle("class-name");
div.classList.contains("class-name");



// Добавление элементов
//elem.append(...elem)
//elem.prepend(...elem)
//elem.before(...elem)
//elem.after(...elem)
//elem.replaceWith(...elem) // замена
//elem.remove() // удаление
//elem.clone() // копирование

for (i=0; i<5; i++) {
	let p = document.createElement("p"); //создали 5 тегов p
	p.textContent = `Текстовый абзац ${i}`; // наполнили теги текстом
	p.classList.add("border"); // привязали рамочку из css
	div.append(p); // добавили p в div в html
}

document.body.prepend(div);


// Работа с таблицей
let allTables = document.getElementsByTagName("table");
let table = allTables[0];
table.setAttribute("border", 1);

// Заголовок
let caption = table.createCaption();
caption.innerText = ("Заголовок таблицы");

// РЯД
let row = table.insertRow(0);

// ЯЧЕЙКИ
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);

cell1.innerText = "Cell 1";
cell2.innerText = "Cell 2";
