// Задание 1
let x = 35;
console.log( (x%2) === 0 ? "чётное":"нечётное");

// Задание 2
let m = 9.5;
let n = 17.14;
console.log( ((10-m)**2) < ((10-n)**2) ? m : n);
// возведение в квадрат - для отрицательной разности

// Задание 3
let length = 13;
let width = 4;
let height = 8;
let S = 2 * ((length*width) + (width*height) + (length*height));
console.log(S);
console.log(width > height ? "Ширина больше" : "Высота больше или равна ширине");
