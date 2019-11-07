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


function generateTable(arrow) {
    let table = document.createElement("table");
    table.setAttribute("border","1px solid black");
    table.setAttribute("height","500px");
    table.setAttribute("width","500px");

    let caption = table.createCaption();
        caption.innerText = "Заголовок таблицы";

    let keys = Object.keys(arrow[0]);

    for (let i=0; i<(arrow.length+1); i++) {
        //делаем строки
        let row = table.insertRow(i);
        //делаем ячейки
        for (let ii=0; ii<keys.length; ii++) { 
            let cell = row.insertCell(ii);
            //заполняем шапку
            if (i===0) {
                cell.innerText = keys[ii].toUpperCase();
            } else {
            //заполняем ячейки
                let keyToCell = keys[ii];
                cell.innerText = arrow[i-1][keyToCell];
            };
        };
        
    };

    

    document.body.append(table);
};

generateTable(articles);
generateTable(goods);

