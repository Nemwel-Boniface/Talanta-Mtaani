let menu = document.querySelector('#menu');
let mobilenav = document.querySelector('.mobileNav');


menu.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(mobilenav.style.display === 'none') {
    mobilenav.style.display = 'block';
    menu.src = 'images/close.png';
  }
  else {
    mobilenav.style.display = 'none';
    menu.src = 'images/menu.png';
  }
}