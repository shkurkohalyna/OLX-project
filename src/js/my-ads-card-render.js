import getRefs from './refs';
import { API_OLX } from './url';
import { fetchGetOwn } from './fetch/fetchGetOwn';
import { fetchCall } from './fetch/fetchCall';
import myAdsCardRenderTpl from '../templates/my-ads-card.hbs';
import noAdsTpl from '../templates/no-ads.hbs';



const refs = getRefs();

refs.showMyAds.addEventListener('click', onRenderMyAdsCard);
refs.showMyAdsTabMob.addEventListener('click', onRenderMyAdsCard);

async function onRenderMyAdsCard() {
  //Код тот что должен быть
  // try { 
  //   const response = await fetchGetOwn(API_OLX);
  //   console.log('Я респонс',response);
  //   // refs.myAdsCardRender.disabled = true;
  //   if (response.favourites.length === 0) {
  //     console.log('Нет объявлений');
  //     refs.myAds.innerHTML = noAdsTpl(response);
  //   } else {
  //     refs.myAds.innerHTML = myAdsCardRenderTpl(response);
  // }
  // } catch (error) {
  //   console.log(error.message);
  // }

//Код для примера
document.querySelector('.cards').innerHTML

  try { 
  const response = await fetchCall(API_OLX, 2);
  console.log('Я респонс', response);
    if (response.electronics.length === 0) {
      console.log('Нет объявлений');
    } else {
    refs.myAds.innerHTML = myAdsCardRenderTpl(response.electronics);
    }
  // refs.myAdsCardRender.disabled = true;
  } catch (error) {
    console.log(error.message);
  }

}