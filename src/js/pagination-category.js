import { API_OLX } from './url';
import getRefs from './refs';
import templateCard from '../templates/card.hbs';
import templateCardset from '../templates/cardset.hbs';
import templateCatSlider from '../templates/category-slider.hbs';
import templateCat from '../templates/category.hbs';
import { load, save, remove } from './localStorage';
import {fetchCategory} from './fetch/fetchCategory'; /** */
import { fetchGetSpecificCategory } from './fetch/fetchGetSpecificCategory';
import { fetchCall } from './fetch/fetchCall';

const refs = {
    mainPage: document.querySelector('.pages-item__first'),
    secondPage: document.querySelector('.pages-item__second'),
    thirdPage: document.querySelector('.pages-item__third'),
};

// refs.mainPage.addEventListener('click', );
// refs.secondPage.addEventListener('click', );
// refs.thirdPage.addEventListener('click', );

// fetchGetSpecificCategory(API_OLX, 'electronics').then(render => document.querySelector('.slider').innerHTML = templateCardset(render))
// fetchCall(API_OLX, 1).then(render => document.querySelector('.slider').innerHTML = templateCat(render))
fetchCall(API_OLX, 1).then(render => document.querySelector('.slider').innerHTML = templateCat(render))