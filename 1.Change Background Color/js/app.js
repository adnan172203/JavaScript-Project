
const button = document.getElementById('btn');

function changeColor(){
	const color = ['red','yellow','pink','green','grey','brown','purple','blue','black'];

	const change = Math.floor(Math.random() * color.length);
	
	const randomColor = color[change];

	document.body.style.backgroundColor = randomColor;
}

button.addEventListener('click',changeColor);