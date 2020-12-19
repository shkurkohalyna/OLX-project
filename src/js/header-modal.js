import { API_OLX } from './url';
import { fetchCategory } from './fetch/fetchCategory';
import MarkupSideNavDesctop from '../templates/header-sidenav-desctop.hbs';
import MarkupSidenavMobile from '../templates/header-sidenav-mobile.hbs';
import MarkupModalCreateAnAdCategory from '../templates/header-create-an-ad-category.hbs';
import MarkupFindSearch from '../templates/my-search-card.hbs';
import { fetchGetFind } from './fetch/fetchGetFind';
import getRefs from './refs';

const refs = getRefs();

const body = document.querySelector(`body`)
const openSideNav = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const clouseSideNav = document.querySelector(`[data-clouse-button]`)
const openCreateAnAd = document.querySelector(`[data-create-an-ad-btn-open]`)
const modalCreateAnAd = document.querySelector(`[data-create-ad]`)
const clouseModalCreateAnAd = document.querySelector(`[data-clouse-button-create-ad]`)
const sideNavDesctop = document.querySelector(`#sidenav-desctop`)
const changeCategoryForCreateAnAd = document.querySelector(`#categori-product-add-list`)
// const openModalRegistrartion = document.querySelector(`[data-modal-open-registration]`)
// const modalRegistration = document.querySelector(`[data-menu-registration]`)
// const clouseModalRegistration = document.querySelector(` [data-clouse-button-modal-registration]`)
const sidenavModalRegistrartion = document.querySelector(`[data-sidenav-open-registration]`)
const modalSerch = document.querySelector(`.js-modal-search`)
const fieldSerch = document.querySelector(`.search-field`)
const btnOpenModalSerch = document.querySelector(`.js-btn-open-modal-serch`)
const containerModalSerch = document.querySelector(`.modal-search__container`)
const btnClouseModalSerch = document.querySelector(`.js-btn-clouse-modal-serch`)
const btnSearchInput = document.querySelector(`.search__button`)
const btnOpenCreateAnAdMobile = document.querySelector(`.js-create-an-ad-modal-mobile`)
// data-sidenav-open-registration
// открытие - закрытие модалок Хедера
console.log();
function onOpenModalHeader(btn, modal) {
        btn.addEventListener(`click`, openModal)
        function openModal() {
                modal.classList.toggle(`is-open`)
                body.classList.toggle(`is-open-modal`)
        }
}
onOpenModalHeader(openSideNav, mobileMenuRef)
onOpenModalHeader(clouseSideNav, mobileMenuRef)
onOpenModalHeader(openCreateAnAd, modalCreateAnAd)
onOpenModalHeader(btnOpenCreateAnAdMobile, modalCreateAnAd)
onOpenModalHeader(clouseModalCreateAnAd, modalCreateAnAd)

// onOpenModalHeader(openModalRegistrartion, modalRegistration)
// onOpenModalHeader(clouseModalRegistration, modalRegistration)
// onOpenModalHeader(sidenavModalRegistrartion,modalRegistration)
/** модалка поиска */
onOpenModalHeader(btnOpenModalSerch, modalSerch) 
onOpenModalHeader(btnClouseModalSerch, modalSerch)
containerModalSerch.addEventListener('click', inGetFind)
function inGetFind(e) {
        e.preventDefault()
        if (e.currentTarget.elements.query.value === '') {return}
        const find = e.currentTarget.elements.query.value;
        history.pushState(null, null, `find?search=${find}`)
        console.log(find);
        fetchGetFind(API_OLX, find).then(response => {refs.mainRef.innerHTML = MarkupFindSearch(response)})
};

/************************************************* */

 // sidenav(Desctop) рендер категорий
fetchCategory(API_OLX).then(responce => appendSideNavDesctop(responce))
function appendSideNavDesctop(cat) {
        sideNavDesctop.innerHTML = MarkupSideNavDesctop(cat)
}
// sidenav(mobile-tablet) рендрер категорий
fetchCategory(API_OLX).then(responce => appendSideNavMobile(responce))
function appendSideNavMobile(cat) {
        mobileMenuRef.firstElementChild.insertAdjacentHTML(`beforeend`, MarkupSidenavMobile(cat)) 
}

//Создать обьявление рендер категорий
fetchCategory(API_OLX).then(responce => appendchangeCategoryForCreateAnAd(responce))
function appendchangeCategoryForCreateAnAd(cat) {
        changeCategoryForCreateAnAd.innerHTML = MarkupModalCreateAnAdCategory(cat)
}


