// Регулярные выражения
// 2 способа создания
let regexp1 = new RegExp("reg expression");
let regexp2 = /reg/ig;

let string = "Reg ext in JS reg";
console.log(regexp2.test(string));

console.log(string.match(regexp2));

// В начале
regexp2 = /^reg/i;
console.log(regexp2.test(string));

// В конце
regexp2 = /reg$/i;
console.log(regexp2.test(string));

// Диапазон цифр
regexp2 = /[0-9]/;
console.log(regexp2.test(string));

// Диапазон букоф
regexp2 = /[a-z]/;
console.log(regexp2.test(string));
regexp2 = /[A-Z]/;
console.log(regexp2.test(string));

// Сложный диапазон
regexp2 = /[0-9a-zA-Z]/;
console.log(regexp2.test(string));

// Любое нечисло
regexp2 = /[^0-9]/;
console.log(regexp2.test(string));

regexp2 = /\S/; // кроме пробела
regexp2 = /\s/; // именно пробел

string = "car bar garage cat";
regexp2 = /[^c]ar/g;
console.log(string.match(regexp2));

string = "car bar garage cat";
regexp2 = /[g|r]a/ig;
console.log(string.match(regexp2));

string = "the sad car bar the garage fat";
regexp2 = /(f|s|c)at/;
regexp2 = /T/;

// Квантификаторы
string = "Reg exp in JavaScript reg";
regexp2 = /r.+g/ig; // жадный режим
console.log(string.match(regexp2));
regexp2 = /r.+?g/ig; // ленивый режим
console.log(string.match(regexp2));

string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia adipisci, quos explicabo minima, vitae distinctio aliquid. Nisi, aut impedit totam, molestiae quis praesentium ut modi cumque inventore est omnis similique, et eum nihil? Reiciendis asperiores commodi sunt culpa vero dolorem."
regexp2 = /^[A-Z].+?(\.|!|\?)$/;
console.log(string.match(regexp2));

regexp2 = /[0-9a-zA-Z]+?@{1}[a-zA-Z]+?\.[a-zA-Z]{2,3}/;
string = "hfhfk@mail.com";
console.log(regexp2.test(string));
console.log(string.match(regexp2));