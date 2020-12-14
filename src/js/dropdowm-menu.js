import { API_OLX } from './url';
import templateCard from '../templates/card.hbs';
import { fetchCall } from './fetch/fetchCall';
import { fetchGetFavorites } from './fetch/fetchGetFavorites';

//const showMyAd = document.querySelector("[data-dropdown-ad]");
const showMyFavourites = document.querySelector("[data-dropdown-favourites]");

showMyFavourites.addEventListener('click', showFavourites);

function showFavourites(){
    fetchGetFavorites(API_OLX).then(render => document.querySelector('.cards').innerHTML = templateCard( render.favourites))
}


