window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('down',window.scrollY> 0);
});

/**Menu */

const navToggle = document.querySelector('.show-menu');
const navMenu = document.querySelector('.navegation');

navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
});



/**Car Shop */
const menuContent = document.getElementById('menuContianer');
const shopCar = document.getElementById('shop-car');
const modalContainer = document.getElementById('modal-container');


let car = [];


products.forEach((product) =>{

  let contents = document.createElement('div'); 
  contents.className = 'card';

  contents.innerHTML =  `
  <img src="${product.img}"> 
  <h3> ${product.name}</h3>
  <p> ${`Price :`} ${product.price} $ </p>
  `;

  menuContent.append(contents);

  let buy = document.createElement('button');

  buy.innerText = 'Buy';
  buy.className = 'btn-menuContent';
  
  contents.append(buy);



  buy.addEventListener('click', () =>{

    const repeat = car.some((repeatProduct) =>  repeatProduct.id === product.id);
    
    if(repeat){
      car.map((prod) =>{
        if(prod.id === product.id){
          prod.amount ++;
        }
      })
    }else{
      car.push({
        id: product.id,
        img: product.img,
        name: product.name,
        price: product.price,
        amount: product.amount
  
      });
    }


  });
});



  const showCar = () => {

  const modalCar = document.createElement('div');
  modalCar.className = 'modal-car';
  modalCar.innerHTML = `
  <h2 class="modal-car-tittle">Shop</h2>
  `;
  modalContainer.style.display = 'block'
  modalContainer.innerHTML = "";

  modalContainer.append(modalCar);

   /**Modal Button */
  const modalButton = document.createElement('button');
  modalButton.innerText = 'X';
  modalButton.className = 'modal-button';

  modalButton.addEventListener('click', () => modalContainer.style.display = 'none' ) ;
  modalCar.append(modalButton); 


  /**Modal Container */

car.forEach((product) =>{
 
  let carContent = document.createElement('div');
  carContent.className = 'modal-content';
  carContent.innerHTML =`
  <img src="${product.img}" class='prueba'>
  <h3>${product.name}</h3>
  <p> ${product.price} $ </p>
  <p> Amount: ${product.amount} $ </p>

  `;

  modalContainer.append(carContent);

  let Delete = document.createElement('span');
  Delete.innerText = 'X';
  Delete.className = 'btn-delete';
  
  carContent.append(Delete);

  Delete.addEventListener('click', () => deleteProduct())
});
  
/**Modal Total */
const total = car.reduce((acc, the) => acc + the.price * the.amount, 0 );

const totalPay = document.createElement('div');
totalPay.className = 'total-paying';
totalPay.innerHTML = `
Total: ${total} $
`;
modalContainer.append(totalPay);
}

shopCar.addEventListener('click', () => showCar());
const deleteProduct = () =>{
  const foundId = car.find((element) => element.id);

  car = car.filter((carId) => carId !== foundId);


  showCar();
}


/**Testimonial */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      650:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
    },
  });