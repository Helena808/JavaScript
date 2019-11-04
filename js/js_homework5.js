let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};


// Задание 1
function priceFilter(object,from,to) {
    let filteredObject = {};
    for (let key1 in object) {
        for (let key2 in object[key1]) {
            if ((object[key1][key2] >= from) && (object[key1][key2] <= to)) {
               filteredObject[key1] = object[key1];
            };
        };
    };
    return filteredObject;
};

let result1 = priceFilter(goods,2000,3000);
console.log(result1);


// Задание 2
function addToCart(object, title, countToCart) {
    for (let key1 in object) {
        for (let key2 in object[key1]) {
            if (object[key1]["title"] === title) {
                if (object[key1]["count"] >= countToCart) {
                    object[key1]["count"] -= countToCart;
                    console.log("Товар добавлен");
                    return true;
                } else {
                    console.log("Недостаточно товара на складе");
                    return false;
                };
            };
        };
    };
    console.log("Такого товара не существует");
    return false;
};

let result2 = addToCart(goods,"Барабаны",20);
console.log(result2);


// Задание 3
let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];

function arrSort (a, b) {
    if (a.author > b.author) {
           return 1;
    } else if (a.author > b.author) {
        return 0;
    } else {
        return -1;
    }
};

books.sort(arrSort);
console.log(books);
