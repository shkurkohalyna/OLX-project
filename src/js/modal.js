
import  { API_OLX } from './url';

const formAdd = document.querySelector('#form-add');
const selectProduct = formAdd.querySelector('#categori-product-add');
const productPrice = formAdd.querySelector('#price-product-add');
const tel = formAdd.querySelector('#sellers-telephone-add');
const requiredFields = formAdd.querySelectorAll('.required');

const closeModalBtn = document.querySelector('[data-clouse-button-create-ad]'),
const backdropAdd = document.querySelector('.backdrop-add');

selectProduct.addEventListener('click', renderCategoriesList);

function fetchCategories() {
  return fetch(`${API_OLX}/call/categories`)
    .then(res => {
      return res.json();
    }).
    
    catch(error => console.log(error));
}
//випадаючий список
function renderCategoriesList() {
  let categoryMarkup = ``;
  fetchCategories().then((categories) => {
    for (let category of categories){
      categoryMarkup += `<option value="${category}" class="js-add-category">${category}</option> `;
    }
    addCategory.insertAdjacentHTML('beforeend', categoryMarkup);
    addCategory.removeEventListener('click', renderCategoriesList);
   })
    .catch(error => console.log(error));
}

// Валідація форми



// Коректні дані
const correctTel =  /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/;
const correctPrice = /\d+\.\d{2}\D{3}/;



formAdd.addEventListener('submit', validatedForm);

export default function validatedForm(event){
    event.preventDefault();
    removeValidation();
    correctFields();
    correctTelFunc();
    correctPriceFunc();
}

function errorCreate(text){
    const error = document.createElement('div');
    error.className = 'add-form-error';
    error.innerHTML = text;
    return error;
}

function removeValidation(){
    const errors= formAdd.querySelectorAll('.add-form-error');
    for (let i = 0; i < errors.length; i+=1) {
        errors[i].remove();
    }
}

function correctFields(){
    for (let i = 0; i < requiredFields.length; i+=1) {
        if(!requiredFields[i].value){
            console.log('Необхідно заповнити', requiredFields[i]);

            const error = errorCreate('Необхідно заповнити!')
           
            form[i].parentElement.insertBefore(error, requiredFields[i]);
        }  
    }
}

function correctTelFunc(){
    if(tel.value !== ""){
        if(!correctTel.test(tel.value)){
            console.log('невірно введений номер');
            const error = errorCreate('невірноно введений номер');
            tel.parentElement.insertBefore(error, tel);
        }
    }  
}

function correctPriceFunc(){
    if(productPrice.value !== ""){
        if(!correctPrice.test(productPrice.value)){
            const error = errorCreate('введіть ціну згідно формату 0.00грн')
            productPrice.parentElement.insertBefore(error, productPrice);
        }
    }
}


                   // Закриття модалки
//  через кнопку
closeModalBtn.addEventListener('click', modalClose);
 
//  по Esc
document.addEventListener('keydown', modalEscClose);

//  по оверлею
backdropAdd.addEventListener('click', onModalBackdropClick);


function modalClose() {
  refs.backdropAdd.classList.add('is-hidden');
}
function modalEscClose(evt) {
  if (evt.key === "Escape") {
    modalClose();
  }
}
function onModalBackdropClick(evt) {
  if (evt.target.attributes.class.nodeValue === "backdrop-add") {
    modalClose();
  }
  if (evt.target.attributes.class === undefined) {return}
}

