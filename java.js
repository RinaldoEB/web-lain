const menuToggle = document.querySelector('.humberger input');
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')

});