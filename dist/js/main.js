const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');

//To get all the nav items
const navItems = document.querySelectorAll('.nav-item');

//Intial State of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    menuBtn.classList.add('close'); //Adding the close class
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => {
      item.classList.add('show');
    });
    
    //Reset menu state
    showMenu = true;
  }else {
    menuBtn.classList.remove('close'); //Adding the close class
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => {
      item.classList.remove('show');
    });
    
    //Reset menu state
    showMenu = false;
  }
}