const msgForm = document.getElementById('message-form');
const msg = document.getElementById('message');
const content = document.querySelector('.message-content');
const feedback = document.querySelector('.feedback');


function realMsg(event){
	event.preventDefault();
	
		 let fullMsg = msg.value;
	
	content.textContent = fullMsg;
	
	
	if(fullMsg === ''){
		feedback.classList.add('show');
		setTimeout(function(){
			
			feedback.classList.remove('show');
		},1000);
	}

	msg.value = '';

}

msgForm.addEventListener('submit',realMsg);