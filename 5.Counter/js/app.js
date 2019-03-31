const counter = document.getElementById('counter');
const buttons = document.querySelectorAll('.counterBtn');
let counterNumber = 0;


buttons.forEach(btn => {
	btn.addEventListener('click',function(){

		if(this.classList.contains('prevBtn')){
			counterNumber--;
		}else if(this.classList.contains('nextBtn')){
			counterNumber++;
		}
		counter.textContent = counterNumber;
	});
});