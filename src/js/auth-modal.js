const authRefs = {
 regestryBtn: document.querySelector('.header-navigation__registry'),
 sideNavRegBtn: document.querySelector('.js-sidenav-reg'),
 authModal: document.querySelector('[data-auth-modal]'),
 overlay: document.querySelector('.overlay'),
 closeModalBtn: document.querySelector('[data-auth-modal-close]'),
 authForm: document.querySelector('.auth-form'),
 emailInput: document.getElementById('Email'),
 emailError: document.querySelector('.email-error'),
 passwordInput: document.getElementById('Password'),
 passwordError: document.querySelector('.password-error'),
 signInBtn: document.querySelector('.signin'),
 signUpBtn: document.querySelector('.signup'),
};

// Відкрити і закрити модальне вікно!
authRefs.regestryBtn.addEventListener('click', openModal);
//  
authRefs.authModal.addEventListener('click', closeModal);
function openModal() {
    authRefs.authModal.classList.remove('is-hidden');
    document.addEventListener('keyup', closeModal);
};
function closeModal(e) {
     if (
    e.target == authRefs.closeModalBtn ||
    e.target == authRefs.overlay ||
    e.keyCode == 27
     ) {
         authRefs.authModal.classList.add('is-hidden');
         document.removeEventListener('keyup', closeModal);
     }
};

// Валідація емейла

authRefs.emailInput.addEventListener('input', checkEmail);
function validateEmail(value) {
    const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return validEmail.test(value);
}
function checkEmail(e) {
    if (validateEmail(e.target.value)) {
        authRefs.emailInput.style.borderColor = 'green';
        authRefs.emailError.textContent = '';
    } else authRefs.emailInput.style.borderColor = 'red';
}
// Валдація паролю
authRefs.passwordInput.addEventListener('input', checkPassword);
function validatePassword(value) {
    const validPassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return validPassw.test(value);
}
function checkPassword(e) {
    if (validatePassword(e.target.value)) {
        authRefs.passwordInput.style.borderColor = 'green';
        authRefs.passwordError.textContent = '';
     } else authRefs.passwordInput.style.borderColor = 'red';
}
// Відправлення форми
authRefs.authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateEmail(authRefs.emailInput.value)) { authRefs.emailError.textContent = ('Введіть коректний email!'); };
    if (!validatePassword(authRefs.passwordInput.value)) { authRefs.passwordError.textContent = ('Мінімум 6 символів: велика і мала літери, цифра!') };

})