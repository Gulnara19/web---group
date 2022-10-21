let loginBotton = document.querySelector('login-button');
let loginPopup = document.querySelector('login-popup');

loginBotton.addEventListener('click', show-popup);

function showPopup(evt) {evt.preventDefault();
loginPopup.classList.toggle('show-popup');
}