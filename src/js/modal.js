// (() => {
//   const refs = {
//     openModalBtn: document.querySelector(".create-an-ad"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", openModal);
//   refs.closeModalBtn.addEventListener("click", closeModal);

//   function openModal() {
//     refs.modal.classList.remove('is-hidden');
//   }

//   function closeModal() {
//     refs.modal.classList.add('is-hidden');
//   }
// })();

// import addModalTempl from '../templates/add-card.hbs' ;

// console.log(addModalTempl)


// const mainSection =  document.querySelector('.modal-add-cardTempl');


// function buildAddModalTempl(){
//     mainSection.insertAdjacentHTML('afterbegin', addModalTempl())
// }

// buildAddModalTempl()

// refs.openModalCreateBtn.addEventListener('click', () => {
//   toggleModal();
//   refs.modalContent.setAttribute('action', 'create');
//   refs.modalContent.children[1].textContent = 'МОДАЛОЧКА СОЗДАНИЯ ОБЪЯВЛЕНИЯ';
// });
// refs.openModalCreateMobileBtn.addEventListener('click', () => {
//   toggleModal();
//   refs.modalContent.setAttribute('action', 'create');
//   refs.modalContent.children[1].textContent = 'МОДАЛОЧКА СОЗДАНИЯ ОБЪЯВЛЕНИЯ';
// });
// refs.closeModalBtn.addEventListener('click', toggleModal);

// function toggleModal() {
//   if (refs.modalContent.hasAttribute('action')) {
//     refs.modalContent.removeAttribute('action');
//   }

//   document.body.classList.toggle('modal-open');
//   refs.modal.classList.toggle('is-hidden');
//   document.body.classList.toggle('no-scroll');
// }