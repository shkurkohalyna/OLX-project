import getRefs from './refs';
import { API_OLX } from './url';
import { fetchPatchCall } from './fetch/fetchPatchCall';
import { load } from "../js/localStorage";
import { fetchGetUserID } from './fetch/fetchGetUserID';
import { fetchGetUser } from './fetch/fetchGetUser';
import { fetchDeleteCallID } from './fetch/fetchDeleteCallID';



const userId = load('UserToken').user.id;
console.log('222222222', userId);
fetchGetUser(API_OLX).then(console.log)
 

const refs = getRefs();

refs.closeEditAdBtn.addEventListener('click', onToggleEditPopUp);
refs.backdropEditAd.addEventListener('click', onCloseBackdropClick);
refs.closeBtnCancel.addEventListener('click', onToggleEditPopUp);



refs.myAds.addEventListener('click', onTest);
function onTest(evt) {
  evt.preventDefault();
  if (evt.target.parentNode.classList.contains('my-ads-btn-edit') || evt.target.parentNode.classList.contains('edit-btn')) {
    // console.log('наконецто');
    openEditAdModal();
  }

  
}

// Открытие модалки

function openEditAdModal() {
  onToggleEditPopUp()
  document.addEventListener('keyup', onCloseEsc);
} 
  

function onToggleEditPopUp() {
  refs.backdropPopupEdit.classList.toggle('is-hidden');
  document.removeEventListener('keyup', onCloseEsc);
  //  modal.classList.toggle(`is-open`)
  // body.classList.toggle(`is-open-modal`)
}

//Закрытие по клику на бэкдроп и esc

function onCloseBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onToggleEditPopUp()
  }
}

function onCloseEsc(evt) {
  const ESC_KEY_CODE = "Escape";
  if (evt.code === ESC_KEY_CODE) {
    onToggleEditPopUp()
  }
}

// Отправка
refs.editAdForm.addEventListener('submit', onFetchPatchEditAd)

async function onFetchPatchEditAd(evt) {
  evt.preventDefault();
  const { currentTarget: form } = evt;
  const formData = new FormData(form);
  console.log(formData);

  // let options
  const data= {};
  formData.forEach((value, key) => {
    data[key] = value;
    // console.log(key, value)
  })
  console.log(data);
  
  try {
    const response = await fetchPatchCall(API_OLX, data, userId );
  //  console.log( response);
   console.log('Я изменил объявление');
    // form.reset();
    
  } catch (error) {
    console.log(error.message);
  }
 
 
}