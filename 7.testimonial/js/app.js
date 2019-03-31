let customers = [];
let index = 0;

function Customer(name, img, text){
	this.name = name;
	this.img  = img;
	this.text = text;
}


function createCustomer(name, img, text){
	//full image
	let fullImg = `img/customer-${img}.jpg`;
	
	//create a new customer
	const customer = new Customer(name, fullImg, text); 

	//add to all customers
	customers.push(customer);
}


createCustomer('john', 0, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et rutrum velit. Mauris gravida tortor nec blandit rutrum.`);

createCustomer('Bob', 1, `Integer porta ultrices ligula, non dapibus dolor tempus nec. Mauris auctor, augue semper viverra semper, libero mi sodales tellus, non`);

createCustomer('Mike', 2, `Integer at ante semper, suscipit ligula blandit, pretium nulla. Etiam vel nisi magna. Sed cursus magna ac nisl dignissim, sit amet laoreet es`);

createCustomer('Cena', 3, `Phasellus sagittis, turpis dignissim bibendum mattis, urna dui mollis dolor, a hendrerit purus orci non libero. Sed tempor suscipit diam nec `);


document.querySelectorAll('.btn').forEach(btn => {
	
	btn.addEventListener('click',function(event){
		event.preventDefault();
		
		if(event.target.parentElement.classList.contains('prevBtn')){
			index--;
			
			if(index < 0){
				index = customers.length-1;
			}
			
			document.getElementById('customer-img').src = customers[index].img;
			document.getElementById('customer-name').textContent = customers[index].name;
			document.getElementById('customer-img').textContent = customers[index].text;


		}else if(event.target.parentElement.classList.contains('nextBtn')){
			index++;
			if(index === customers.length){
				index = 0;
			}
			document.getElementById('customer-img').src = customers[index].img;
			document.getElementById('customer-name').textContent = customers[index].name;
			document.getElementById('customer-img').textContent = customers[index].text;
		}
	});
});
