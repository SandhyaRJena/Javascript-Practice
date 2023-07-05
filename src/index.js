

function clockk(){
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let clockTime = document.querySelector("#clock");
	clockTime.textContent = hour + ":" + minutes + ":" + seconds;
}





