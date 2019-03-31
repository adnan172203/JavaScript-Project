const button = document.querySelectorAll('.filter-btn');


function changeFilter(e){
	e.preventDefault();
	const value = this.dataset.filter;
	const items = document.querySelectorAll('.store-item');

	items.forEach(item => {
		if(value === 'all'){
			item.style.display = 'block';
		}else if (item.classList.contains(value)){
			item.style.display = 'block'
		}else{
			item.style.display = 'none'
		}
	});
}
button.forEach(btn => btn.addEventListener('click', changeFilter));




