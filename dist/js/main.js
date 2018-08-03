//Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const main = document.querySelector('main');
const navItems = document.querySelectorAll('.nav-item');
const myName = document.getElementById('my-name');

//Set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
myName.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        main.classList.add('more-opacity');
        navItems.forEach(item => item.classList.add('show'));
        //Set menu state now it's open
        showMenu = true;
    }
    else {
        
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show')
        main.classList.remove('more-opacity');
        navItems.forEach(item => item.classList.remove('show'));
        //You must re-set the menu state or it will stay as 'true' and won't toggle
        showMenu = false;

    }
}

var portrait = document.getElementById("changepic");
    portrait.onmouseenter = function(){
       this.src = "./img/tDigitalLogo2.jpg";
    }
    portrait.onmouseleave = function(){
        this.src = "./img/profilepic2.jpg";
     }