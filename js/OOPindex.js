// Тут создаём объекты
let taksa = new Dog ("Такса");
taksa.health = 25;
taksa.attackScore = 20;

let dog = new Dog("Просто пёс");
dog.health = 13;
dog.attackScore = 22;

taksa.attack(dog);

let human = new Human ("Tom");
human.dog = taksa;
human.askCommand("сидеть");
human.trainDog("стоять");
human.askCommand("стоять");