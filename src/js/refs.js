export default function getRefs (){
  return {
    openPopupBtnLogout: document.querySelector('[data-popup-open]'),
    openPopupBtnLogoutTablet: document.querySelector('.sidenav__menu-acount-logout'),
    closePopupBtnLogout: document.querySelector('[data-popup-close]'),
    cancelPopupBtnLogout: document.querySelector('[data-popup-cancel]'),
    backdropPopupLogout: document.querySelector('[data-popup]'),
    myAdsCardRender: document.querySelector('.my-ads-rend'), 
    exitAccount: document.querySelector('[data-exit]'), 
  }
}