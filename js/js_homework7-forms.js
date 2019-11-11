// Задание 3

let form = document.forms.form1;
let checkbox = form.elements.chkbox;

checkbox.addEventListener("focus", displayText);

function displayText () {
    this.nextElementSibling.removeAttribute("disabled");
};


// Задание 4
// 4.i-ii
loginInput = form.elements.login;
loginInput.addEventListener("focus", focus);
loginInput.addEventListener("blur", unFocus);

passInput = form.elements.password;
passInput.addEventListener("focus", focus);
passInput.addEventListener("blur", unFocus);

function focus () {
    this.nextElementSibling.classList.add("achtung");
};

function unFocus () {
    if (this.name==="login") {
        if (this.value.length < 4) {
            this.nextElementSibling.classList.add("achtung");
        } else {
            this.nextElementSibling.classList.remove("achtung");
            this.nextElementSibling.classList.add("okay");
        };
    } else if (this.name==="password") {
        if (this.value.length < 6) {
            this.nextElementSibling.classList.add("achtung");
        } else {
            this.nextElementSibling.classList.remove("achtung");
            this.nextElementSibling.classList.add("okay");
        };
    } else {
        console.log("Что-то пошло не так...")
    };
};


// 4.iii
form.addEventListener("submit", takeForm);

function takeForm (event) {
    event.preventDefault();
    let elements = this.elements;
    for (let i=0; i<elements.length; i++) {
        if (elements[i].value !== undefined) {
            console.log(this.elements[i].value);
        };
    };
};

// 4.iv
form.addEventListener("reset", resetForm);

function resetForm(event) {
    event.preventDefault();
    let elements = this.elements;
    for (let i=0; i<elements.length; i++) {
        if ((this.elements[i].type !== "submit") && (this.elements[i].type !== "reset")) {
            this.elements[i].value = "";
        };
    };
    let spanes = document.getElementsByTagName("span");
    for (let i=0; i<spanes.length; i++) {
        spanes[i].classList.add("achtung");
    };
};