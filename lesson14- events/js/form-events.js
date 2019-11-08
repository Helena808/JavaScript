// ТОЛЬКО ДЛЯ ФОРМ: доступ к форме через атрибут name
let form = document.forms.lesson;
console.log(form);

// Доступ к элементам формы по name
let loginInput = form.elements.login;
console.log(loginInput);

// Получение и установка значения (value)
console.log(loginInput.value);
//loginInput.value = "dfvhb";





// Получаем радиокнопки: name = "color"
let colorRadio = form.elements.color;
console.log(colorRadio);

for (let radio of colorRadio) { //для обоих радиокнопок
	radio.addEventListener("focus", changeColor);
	//при выборе радиокнопки элемент checkbox_fieldset покрасится
};

function changeColor () {
	form.elements.checkbox_fieldset.style.background = this.value;
	// Весь элемент с именем checkbox_fieldset окрасится в цвет,
	// заданный в value выбранной радиокнопки
};





let langArr = form.elements["lang[]"];
console.log(langArr);

for (let checkbox of langArr) {
	if (checkbox.checked) {
		console.log(checkbox.value);
	};
};



//Выпадающий список
let countries = form.elements.countries;

for (let elem of countries) {
	if (elem.selected) {
		console.log(elem.value);
	};
};



//СОБЫТИЕ SUBMIT (у формы целиком)
//по умолчанию отправляет форму, минуя JS
//если хотим сначала обработать это на JS,
//надо отменить дефолтное отправление формы

form.addEventListener("submit", takeForm);

function takeForm (event) {
	event.preventDefault(); // отмена дефолтного события
	console.log("Отправка формы");
	console.log(this.elements.login.value);
	//получили введённый логин, прежде чем форма отправится на сервер

	let formData = new FormData(this);
	console.log(formData);
	console.log(formData.getAll("lang[]")); //вернет значения атрибутов

};


//ФОКУС
loginInput = form.elements.login;
loginInput.addEventListener("focus", loginFocus);

function loginFocus () {
	console.log("Фокус на элементе");
	this.nextElementSibling.classList.add("error");
};

//РАСФОКУС
loginInput.addEventListener("blur", loginUnFocus);

function loginUnFocus () {
	console.log("Потеря фокуса на элеименте");
	if (this.value.length < 3) {
		this.nextElementSibling.classList.add("error");
	} else {
		this.nextElementSibling.classList.remove("error");
		this.nextElementSibling.classList.add("success");
	}
};
