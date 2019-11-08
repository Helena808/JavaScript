
// Открытие по клику
let titleElements = document.querySelectorAll(".article p:first-child");
for (let elem of titleElements) {
 	elem.addEventListener("click", openDescription);
};

function openDescription () {
	console.log("Элемент, на который повешен обработчит события", this);
	this.nextElementSibling.classList.toggle("open");	
};





// Определение и открытие по клику одного и блокировка остальных

let presentContainer = document.getElementById("present_container");
presentContainer.addEventListener("click", showPresent);
// клик навешан на весь контейнер с подарками


function showPresent(event) {
	console.log("Инфа о событии", event);
	let clickElem = event.target; 
	//конкретный элемент, на который нажали
	let present = clickElem.dataset.present;
	//определили название блока, на кот нажали по data атрибуту в html
	console.log("present", present);
	if (present) {
		let presents = getPresents();
		clickElem.innerText = presents[present];
		clickElem.classList.add("present"); //подтянется из CSS

		//Теперь удаляем обработчик событий,
		//чтобы подарок был выбран только 1
		this.removeEventListener("click", showPresent);
	}
}

function getPresents () {
 	return {
 		car: "Машина",
 		dog: "Собака",
 		book: "Книга",
 	};
};




// Фиксация половины хэдэра при скролле
window.addEventListener("scroll", fixedMenu); // вешаем на ОКНО
let fixedBlock = document.getElementById("fixed");
let fixedBlockOffset = fixedBlock.offsetTop; //получили отстут сверху относительно родтиеля
console.log(fixedBlockOffset);

function fixedMenu() {
	if (window.pageYOffset > fixedBlockOffset) {
		fixedBlock.classList.add("fixed");
	} else {
		fixedBlock.classList.remove("fixed");
	}
};
