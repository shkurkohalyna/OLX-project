// открытие модалки SideNav
const openSideNAv = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
  
openSideNAv.addEventListener('click', onOpenHeaderMenu)

function onOpenHeaderMenu  (){

        mobileMenuRef.classList.toggle('is-open');
        
        
}
// открытие модалки Поиска

const clouseSideNAv = document.querySelector(`[data-clouse-button]`)

clouseSideNAv.addEventListener('click', onClouseSidenavBtn)
function onClouseSidenavBtn() {

         mobileMenuRef.classList.toggle('is-open');
        
}