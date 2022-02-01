let menu = document.querySelector('#menu');
let mobilenav = document.querySelector('.mobileNav');
let menulist = document.querySelectorAll('#nav li a')

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

menulist.forEach((list) => {
  list.addEventListener('click', hideMenu);
});

function hideMenu() {
  mobilenav.style.display = 'none';
  menu.src = 'images/menu.png';
}