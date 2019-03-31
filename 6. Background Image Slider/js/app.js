// immediate invoked function expression


  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
 
  const button = document.querySelectorAll('.btn');
  const imgContainer = document.querySelector('.img-container');
  let counter = 0;

  button.forEach(btn => {
    btn.addEventListener('click',function(event){
        
        if( event.target.classList.contains('btn-right') ){
          counter++;
          if(counter > pictures.length-1){
            counter = 0;
          }
          
          imgContainer.style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;

        }else if(event.target.classList.contains('btn-left')){
          counter--;
          if( counter < 0 ){
            counter = pictures.length-1;
          }

          imgContainer.style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
          
        }
    });
  });
