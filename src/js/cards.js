
import { API_OLX } from "./url.js";
import  templateCard  from '../templates/cardset.hbs';
// import { fetchCall } from './fetch/fetchCall.js';
import { fetchGetSpecificCategory } from './fetch/fetchGetSpecificCategory';

// we wont be used this one;
// fetchCall(API_OLX, 3).then(render => document.querySelector('.cards').innerHTML = templateCard(render.property))

// category property is rendered by default;)))
fetchGetSpecificCategory(API_OLX, 'property').then(render => document.querySelector('.cards').innerHTML = templateCard(render))


// here we are rendering one category we are choosing by click on category;))
setTimeout(() => {
  const chooseCategory = document.querySelector('.sideNavDesctop__box');

  chooseCategory.addEventListener('click', onCategoryClick)
  
  function onCategoryClick(e) {
    e.preventDefault();
    
    const category = e.target.textContent;
    fetchGetSpecificCategory(API_OLX, category.trim()).then(render => document.querySelector('.cards').innerHTML = templateCard(render))
  }
}, 1000);



// when we click on zoom, we will receive a modal with data about whole card:))
// but it is not still working correct:((;

setTimeout(() => {
  const openModal = document.querySelector('.cardset');
  
  openModal.addEventListener('click', onClick);

  function onClick(e) {
    e.preventDefault();

    const target = e.target;
    if (target.attributes[0].nodeName === 'data-open') {
      const opnover = document.querySelector('.overlay')
      opnover.classList.add('isActive')
      
    }
  }

}, 1000);
