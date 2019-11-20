class Validator {
    // приватные свойства (свойства недоступны все класса)
    // #prop_name = "Prop value";
    // свойства
    _rules = null;
    _messages = null;
    _successHandler = null;
    _errorHandler = null;
    constructor(form){
        this._form = form;
        this._form.addEventListener("submit",this.validate.bind(this));
    }

    get form(){
        return this._form;
    }
    set form(form){
        this._form = form;
    }
    get rules(){
        return this._rules;
    }
    set rules(value){
        this._rules = value;
    }
    get messages(){
        return this._messages;
    }
    set messages(value){
        this._messages = value;
    }
    get successHandler(){
        return this._successHandler;
    }
    set successHandler(func) {
        this._successHandler = func;
    }
    get errorHandler(){
        return this._errorHandler;
    }
    set errorHandler(func) {
        this._errorHandler = func;
    }


    init(settings){
        rules = settings.rules;
        messages = settings.messages;
        successHandler = settings.successHandler;
        errorHandler = settings.errorHandler;
    };


    // Вспомогательные функции для функции валидации (возвращает true/false)
    // Названия методов быть такими же как ключи в объекте с правилами!!!
    minLength(elemValue, ruleValue){
        return elemValue.length >= ruleValue;
    };
    maxLength(elemValue, ruleValue) {
        return elemValue.length <= ruleValue;
    };
    required(elemValue){
        return elemValue.length > 0;
    };
    reg_match(elemValue, ruleValue) {
        return ruleValue.test(elemValue);
    };


    // Основная функция валидации
    validate(event) {
        event.preventDefault();
        let elements = form.elements;
        for (let elem of elements) {
            elem.dataset.validate;
            if (elem.dataset.validate) { //т.е. сабмит уже не обрабатываем
                let rulesValues = rules[elem.dataset.validate];
                    // { minLength: 4,
                    // maxLength: 18 }
            
                for (let rule in rulesValues) {
                    if (!this[rule](elem.value, rulesValues[rule])) {
        // тут и нужны имена ключей равные именам вспомогательных функций!
                        // то же самое:


                        //errorHandler(form); - не так

                        // делаем массив для ошибок
                        // если юзер ошибся, добавляем ее туда
                        // если после всем проверов длина массива = 0
                        // success handle
                        // если нет
                        // errorhandler
                    };
                };
            };
        };
    successHandler(form);
    };


};




let form = document.forms.validate;

let validator = new Validator(form);

let rules = {
    login: {
       minLength: 4,
       maxLength: 18
    },
    password: {
       minLength: 8
    },
    name: {
        required: true
    },
    comment: {
        reg_match: /comment/
    }
};

// Динамические сообщения (добавлять спаны в хтмл)
let messages = {
    login: {
        minLength: "Минимум 4 символа"
    },
    name: {
        required: "Поле обязательно для заполнения"
    }
};

let successHandler = (form) => {
    console.log("Действие " +
        "в случае успешного заполнения формы");
};

let errorHandler = (form) => {
    console.log("Действие" +
        " в случае ошибок в заполнении формы");
};

validator.init({
    rules: rules,
    messages: messages,
    successHandler: successHandler,
    errorHandler: errorHandler
});