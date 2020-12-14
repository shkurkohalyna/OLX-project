import getRefs from './refs';
import { API_OLX } from './url';
import { fetchLogout } from './fetch/fetchLogout';
import { changeElem } from './auth-modal';
import { isLogInRefs } from './auth-modal';
import {resetForm} from './auth-modal'
// import { locale } from 'core-js';

const refs = getRefs();

refs.openPopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.openPopupBtnLogoutTablet.addEventListener('click', onTogglePopUp);
refs.closePopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.cancelPopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.exitAccount.addEventListener('click', onExitAccount);

function onTogglePopUp() {
  refs.backdropPopupLogout.classList.toggle('is-hidden');
}

//Выход из аккаунта
async function onExitAccount() {
   try {
     const response = await fetchLogout(API_OLX);
    // console.log(response);
    console.log('Я вышел из акаунта');
    onTogglePopUp();
    changeElem(isLogInRefs);
    resetForm();
  } catch (error) {
    console.log(error.message);
  }
 
}

