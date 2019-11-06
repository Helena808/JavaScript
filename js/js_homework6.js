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

let goods = [
        {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        {
            title: "Флейта",
            price: 900,
            count: 50
        },
        {
            title: "Арфа",
            price: 3400,
            count: 5
        }
];

let table = document.createElement("table");
table.setAttribute("border","1px solid black");
table.setAttribute("height","500px");
table.setAttribute("width","500px");

let caption = table.createCaption();
    caption.innerText = "goods";

let countOfKeys = 0;
for (let key in goods[0]) {
    countOfKeys++;
}

for (let i=0; i<=(goods.length+1); i++) {
    let row = table.insertRow(i);
    for (let ii=0; ii<=countOfKeys; ii++) {
        let cell = row.insertCell(ii);
    }
}





// ЯЧЕЙКИ
//let cell1 = row.insertCell(0);
//let cell2 = row.insertCell(1);

//cell1.innerText = "Cell 1";
//cell2.innerText = "Cell 2";


document.body.append(table);

//function generateTable (arrow) {
  //  let table = document.createElement("table");
    //for (let i=0; i<arrow.length; i++) {
      //  let caption = table.createCaption(arrow[i]);

//}



// примеры вызова функции:
//generateTable(articles); // генерация таблицы со статьями
//generateTable(goods); // генерация таблицы с товарами