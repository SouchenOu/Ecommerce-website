let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    LoginCart.classList.remove('active');
    navbar.classList.remove('active');
}

let ShoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    ShoppingCart.classList.toggle('active');
    LoginCart.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
let LoginCart = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    LoginCart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
}
let navbar = document.querySelector('.nav-bar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    LoginCart.classist.remove('active');
}
window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    ShoppingCart.classList.remove('active');
    LoginCart.classist.remove('active');
}