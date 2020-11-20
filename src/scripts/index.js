import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from "../DATA.json";

// Kode Menu Hamburger di mobile
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

// menampilkan data JSON daftar restaurant
let dataRestaurants ='';
data.restaurants.forEach((restaurant)=>{
    dataRestaurants += `  
    <div class="card"> 
            <img tabindex="0" class="post-item__thumbnail"  src="${restaurant.pictureId}" alt="${restaurant.name} $">
            <div class="post-item__content">                
                <h1 tabindex="0" class="post-item__title">${restaurant.name}</h1>
                <p tabindex="0" class="post-item__location">Location : ${restaurant.city}</p>
                <p tabindex="0" class="post-item__rating"><i class="fas fa-star"></i> Rating : ${restaurant.rating}</p>
                <p tabindex="0" class="post-item__description">${restaurant.description}</p>
            </div>   
    </div>     
                `;
});
document.querySelector('.container-card').innerHTML=dataRestaurants;

       