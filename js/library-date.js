let someDate = moment("2019-01-05");
let currentDate = moment();
let someDateTime = moment("2019-03-05 16:40");
console.log(someDate.format("YYYY MMMM DD"));
console.log(currentDate.format("YYYY MMM D"));
console.log(someDateTime.format("YY MM dddd"));

someDate.add(1, "day"); // увеличили на 1 день
someDate.add(-2, "hour"); // уменьшили на 2 часа и т.д.
console.log(someDate.format("LLLL"));
console.log(someDate.format("LL"));


// Parse from string
let strDate = "01/12/2019";
let parseDate = moment(strDate, "DD/MM/YYYY", true);

// Временные зоны
let moscow = currentDate.tz("Europe/Moscow"); //привязались к зоне
let london = moscow.clone().tz("Europe/London");
console.log(moscow.format("YYYY MMMM DD HH:mm"));
console.log(london.format("YYYY MMMM DD HH:mm"));


// самолет москва - нью-йорк
// время в полете 10 часов
// когда (дата и время) самолет
// прилетит в нью-йорк (по местному времени),
// если из Москвы он вылетает
// в 22:15 28 декабря 2019 года

let departure = moment.tz("2019-12-28 22:15", "Europe/Moscow");
console.log("Вылет " + departure.format("DD MMMM YYYY HH:mm") + " по МСК времени");
let arrivalMSK = departure.add(10, "hour");
console.log("Прибытие " + arrivalMSK.format("DD MMMM YYYY HH:mm") + " по МСК времени");
let arrivalNY = arrivalMSK.clone().tz("America/New_York");
console.log("Прибытие " + arrivalNY.format("DD MMMM YYYY HH:mm" + " по местному времени"));

