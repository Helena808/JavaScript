// Задание 1
function recursing(num) {

}

// Задание 2
function range(begin,end,step=1) {
	let arrow = [];
	for (let i=0; i<=((end-begin)/step); i++) {
		arrow[i] = begin + (i*step);
	}
	return arrow;
}
console.log(range(1,10,2));
