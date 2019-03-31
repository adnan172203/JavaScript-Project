const button = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

button.forEach(btn => {
	btn.addEventListener('click',function(){
		let number = btn.getAttribute("data-num");
		screen.value += number;
	});
});


equal.addEventListener('click',function(){
	if(screen.value === ''){
		screen.value = "Please Enter A value";
	}else{
		screen.value = eval(screen.value);
	}
});


clear.addEventListener('click', ()=> {
	screen.value = '';
});

