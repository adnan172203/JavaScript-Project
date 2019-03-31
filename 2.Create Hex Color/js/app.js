const button = document.querySelector('.btn');
const value  = document.getElementById('hex-value');

function changeColor(){
	const color = ['#FF5733','#DAF7A6','#FFC300','#C70039','#581845','#58D68D','#F9EBEA  '];

	const number = Math.floor(Math.random() * color.length);

	const colorCode = color[number];

	document.body.style.backgroundColor = colorCode;

	value.textContent = colorCode;
}

button.addEventListener('click',changeColor);