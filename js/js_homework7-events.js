function generateGameField(n) {
    // Делаем общее поле
    let gameField = document.createElement("div");
    gameField.style.width = (110*n) + "px";
    gameField.style.height = (110*n) + "px";
    gameField.style.padding = 0;


    // Поле со счётчиком
    let countField = document.createElement("div");
    let counter = 3;
    countField.style.width = (110*n) + "px";
    countField.textContent = `Осталось попыток: ${counter}`;


    // Cчётчик подарков
    let presentCounter = 0;


    // Массив со случайными номерами
    let randomIndexes = [];
    for (let i=0; i<(Math.floor((n*n)/7)); i++) {
        randomIndexes[i] = Math.floor(Math.random()*(n*n))
    };
    console.log(randomIndexes);

    // Наполняем поле коробками
    for (i=1; i<=(n*n); i++) {
        let box = document.createElement("p");
        box.classList.add("box");
        // Делаем случайные коробки с призами
        if (randomIndexes.includes(i)) {
            box.classList.add("priseBox");
        } else {
            box.classList.add("emptyBox")
        };


        // Функция при открытии коробки
        box.addEventListener("click", boxOpen);
        function boxOpen() {
            if (counter>0) {            
                if (this.classList.contains("priseBox")) {
                    box.classList.add("priseBoxOpen");
                    presentCounter++;
                } else {
                    box.classList.add("emptyBoxOpen"); 
                };

            counter--;
            countField.textContent = `Осталось попыток: ${counter}`;
            } else {
                alert(`Попытки исчерпаны! Вым достаётся ${presentCounter} призов`);
            };
        };

        gameField.append(box);
    };



    // Добавляем это всё в хтмл
    document.body.append(gameField);
    document.body.append(countField);
};

generateGameField(5);