(() => {
  const refs = {
    openModalBtn: document.querySelector(".create-an-ad"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
  }
})();

import addModalTempl from '../templates/add-card.hbs' ;

console.log(addModalTempl)


const mainSection =  document.querySelector('.modal-add-cardTempl');


function buildAddModalTempl(){
    mainSection.insertAdjacentHTML('afterbegin', addModalTempl())
}

buildAddModalTempl()