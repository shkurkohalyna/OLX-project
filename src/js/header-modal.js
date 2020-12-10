import { API_OLX } from './url';
import fetchCategory from './fetchCategory';
import MarkupSideNavDesctop from '../templates/header-sidenav-desctop.hbs'
import MarkupSidenavMobile from '../templates/header-sidenav-mobile.hbs'
// открытие - закрытие модалок Хедера
const openSideNav = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const clouseSideNav = document.querySelector(`[data-clouse-button]`)
const openCreateAnAd = document.querySelector(`[data-create-an-ad-btn-open]`)
const modalCreateAnAd = document.querySelector(`[data-create-ad]`)
const clouseModalCreateAnAd = document.querySelector(`[data-clouse-button-create-ad]`)
const imageInput = document.querySelector(`.js-inputClick`)
const sideNavDesctop = document.querySelector([`#sidenav-desctop`])


function onOpenModalHeader(btn, modal) {
        btn.addEventListener(`click`, openModal)
        function openModal() {
                modal.classList.toggle(`is-open`)
        }
}
onOpenModalHeader(openSideNav, mobileMenuRef)
onOpenModalHeader(clouseSideNav, mobileMenuRef)
onOpenModalHeader(openCreateAnAd, modalCreateAnAd)
onOpenModalHeader(clouseModalCreateAnAd, modalCreateAnAd)


// превью картинок

 // sidenav(Desctop) отрисовка
fetchCategory(API_OLX).then(responce => appendSideNavDesctop(responce))
function appendSideNavDesctop(cat) {
        sideNavDesctop.innerHTML = MarkupSideNavDesctop(cat)
}
// sidenav(mobile-tablet) отрисовка
// fetchCategory(API_OLX).then(responce => appendSideNavMobile(responce))
// function appendSideNavMobile(cat) {
//         mobileMenuRef.innerHTML = MarkupSidenavMobile(cat)
// }