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
            title: "Пианино", // 0
            price: 3000,
            count: 25
        },
        {
            title: "Гитара", // 1
            price: 1200,
            count: 40
        },
        {
            title: "Барабаны", // 2
            price: 2700,
            count: 12
        },
        {
            title: "Флейта", // 3
            price: 900,
            count: 50
        },
        {
            title: "Арфа", // 4
            price: 3400,
            count: 5
        }
];


function generateTable(array) {
    let table = document.createElement("table");
    table.setAttribute("border","1px solid black");
    table.setAttribute("height","500px");
    table.setAttribute("width","500px");
    //table.setAttribute("id","table");

    let caption = table.createCaption();
        caption.innerText = "Заголовок таблицы";

    let keys = Object.keys(array[0]); // [title, price, count]

    for (let i=0; i<(array.length+1); i++) {
        //делаем строки
        let row = table.insertRow(i);
        //делаем ячейки
        for (let ii=0; ii<keys.length; ii++) { 
            let cell = row.insertCell(ii);
            //заполняем шапку
            if (i===0) {
                cell.innerText = keys[ii].toUpperCase();
               

// НОВОЕ: ОБРАБОТКА СОБЫТИЯ
                cell.addEventListener("click", sortTable);
                //Сортировка массива
                function sortTable() {
                    array.sort(function(a,b) {
                        if (isNaN(a[keys[ii]])) { // не число (с А)
                            if (a[keys[ii]] > b[keys[ii]]) {
                               return 1;
                            } else if (a[keys[ii]] > b[keys[ii]]) {
                                return 0;
                            } else {
                                return -1;
                            };
                        } else { // число (по убыванию)
                             if (a[keys[ii]] > b[keys[ii]]) {
                               return -1;
                            } else if (a[keys[ii]] < b[keys[ii]]) {
                                return 1;
                            } else {
                                return 0;
                            };
                        };
                    });
                    
                    table.remove(); // удаляем неотсортированную таблицу
                    generateTable(array); // вставляем отсортированную таблицу
                };
//



            } else {
            //заполняем ячейки
                let keyToCell = keys[ii];
                cell.innerText = array[i-1][keyToCell];
            };
        };
        
    };

    

    document.body.append(table);
};




generateTable(articles);




generateTable(goods);

