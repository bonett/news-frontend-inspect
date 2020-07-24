var navbar          = document.querySelector('.navbar');
var navbarContent   = document.querySelector('.navbar__menu');
var menuContent     = document.querySelector('.menu__content');
var dropdownButton  = document.querySelector('.dropdown__button');
var dropdownSubMenu = document.querySelector(".dropdown__list");
var isOpen          = false;

function resizeMenu() {

    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    if (width >= 992 && isOpen) {
        navbarContent.classList.remove('mobile__menu');
        document.body.style.overflowY = "scroll";
        navbar.style.height           = "initial";
        navbarContent.style.height    = "0%";
        navbarContent.style.display   = "block";
        menuContent.classList.remove('mobile__content');
    }

    if (width <= 991 && isOpen) {
        navbarContent.classList.add('mobile__menu');
        document.body.style.overflowY = "none";
        navbarContent.style.height    = "100%";
        navbarContent.style.display   = "block";
        menuContent.classList.add('mobile__content');
    }

    if (width >= 992 && !isOpen) {
        navbarContent.classList.remove('mobile__menu');
        document.body.style.overflowY = "scroll";
        navbarContent.style.height    = "0%";
        navbarContent.style.display   = "block";
        menuContent.classList.remove('mobile__content');
    }

    if (width <= 991 && !isOpen) {
        navbarContent.classList.remove('mobile__menu');
        document.body.style.overflowY = "scroll";
        navbarContent.style.height    = "0%";
        navbarContent.style.display   = "none";
        menuContent.classList.add('mobile__content');
        dropdownSubMenu.classList.remove("show__menu");
    }

    dropdownSubMenu.classList.remove("show__menu");
    dropdownSubMenu.classList.remove("show__menu--mobile");
}

window.onload = function () {

    var refOffset    = 0;
    var navbarheight = 66;
    var dialog       = document.getElementById('dialog');
    var closeDialog  = document.getElementById('close__button');
    var menuIcon     = document.querySelector('.toogle__menu');

    closeDialog.addEventListener('click', closeDialogMessage);
    menuIcon.addEventListener('click', toggleMenuIcon);
    dropdownButton.addEventListener('click', handleDropdown);

    window.addEventListener('scroll', stickyNavigationControl, false);

    function handleDropdown() {

        var screen = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        if (screen <= 991) {
            dropdownSubMenu.classList.toggle("show__menu--mobile");
        } else {
            dropdownSubMenu.classList.toggle("show__menu");
        }
    }

    function toggleMenuIcon() {

        isOpen = menuIcon.classList.toggle('active');

        if (isOpen) {
            navbarContent.classList.add('mobile__menu');
            document.body.style.overflowY = "hidden";
            navbar.style.height           = "100%";
            navbarContent.style.display   = "block";
            navbarContent.style.height    = "100%";
            menuContent.classList.add('mobile__content');
        } else {
            navbarContent.classList.remove('mobile__menu');
            document.body.style.overflowY = "scroll";
            navbar.style.height           = "initial"
            navbarContent.style.height    = "0%";
            navbarContent.style.display   = "none";
        }
    }

    function closeDialogMessage() {
        dialog.style.display = "none";
    }

    function stickyNavigationControl() {

        var newOffset = window.scrollY || window.pageYOffset;

        if (newOffset > navbarheight) {
            if (newOffset > refOffset) {
                navbar.classList.remove('animateIn');
                navbar.classList.add('animateOut');
            } else {
                navbar.classList.remove('animateOut');
                navbar.classList.add('animateIn');
            }

            refOffset = newOffset;
            dropdownSubMenu.classList.remove("show__menu");
        }
    }
}