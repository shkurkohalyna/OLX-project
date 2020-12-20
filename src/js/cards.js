
import { API_OLX } from "./url.js";
import  templateCard  from '../templates/cardset.hbs';
// import { fetchCall } from './fetch/fetchCall.js';
import { fetchGetSpecificCategory } from './fetch/fetchGetSpecificCategory';

// we wont be used this one;
// fetchCall(API_OLX, 3).then(render => document.querySelector('.cards').innerHTML = templateCard(render.property))

// category property is rendered by default;)))
fetchGetSpecificCategory(API_OLX, 'property').then(render => document.querySelector('.cards').innerHTML = templateCard(render))
fetchGetSpecificCategory(API_OLX, 'property').then(getArray)

// here we are rendering one category we are choosing by click on category;))
const chooseCategory = document.querySelector('.sidenav-desctop');
chooseCategory.addEventListener('click', onCategoryClick)

function onCategoryClick(e) {
  e.preventDefault();
  
  const category = e.target.textContent;
  
  fetchGetSpecificCategory(API_OLX, category.trim()).then(render => document.querySelector('.cards').innerHTML = templateCard(render))
  fetchGetSpecificCategory(API_OLX, category.trim()).then(getArray)
  setTimeout(() =>
  { document.querySelector('.cards__title').textContent = category;
}, 150);
}

let value;
function getArray(val) {
     value = val;
}
  

 
const modal = document.querySelector('[data-item-modal]');
const name = document.querySelector('[data-item-modal-title]');
const code = document.querySelector('[data-item-modal-code]');
const imgBig = document.querySelector('[data-item-modal-imagebig]');
const description = document.querySelector('[data-item-modal-description]');
const price = document.querySelector('[data-item-modal-price]');




// when we click on zoom, we will receive a modal with data about whole card:))
// but it is not still working correct:((;

  const openModal = document.querySelector('.cards')
  openModal.addEventListener('click', onClick);

  function onClick(e) {
    e.preventDefault();

    const target = e.target.dataset.id;

    for (const item of value) {
      if (item._id === target) {
        showModal(item)
      }
   }
  }

function showModal(item) {
  modal.classList.add('isActive');
  name.textContent = item.title;
  price.textContent = item.price + '.00 грн';
  description.textContent = item.description;
  imgBig.src = item.imageUrls[0];
  code.textContent = "Код товару | "+item._id;
}