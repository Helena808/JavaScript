let car1 = new Cars ("Mazda","red");
car1.toFix = "dye";
console.log(car1);

let car2 = new Cars ("Honda","blue");
car2.toFix = "wash";
console.log(car2);

let car3 = new Cars ("Kia","violet");
car3.toFix = "tyres";
console.log(car3);

let service = new STO();

service.addCar(car1, car1.toFix);
service.addCar(car2, car2.toFix);
service.allService();