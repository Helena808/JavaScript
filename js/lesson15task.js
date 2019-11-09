let form = document.forms.comments;


form.addEventListener("submit", saveComment);

function saveComment(event) {
	event.preventDefault();
	let div = document.getElementById("comments");
	let comment = form.elements.comment;
	let commentText = comment.value; //сохранили текст в переменную
	let newBlock = document.createElement("p");
	newBlock.innerText = commentText;

	let imgDiv = new Image ();
	imgDiv.src = "img/tiger.png";
	
	let dateContainer = document.createElement("p");
	
	div.append(imgDiv);
	div.append(newBlock);
	this.prepend(div);
}


