var path            = 'https://jsonplaceholder.typicode.com/posts';
var navbar          = document.querySelector('.navbar');
var navbarContent   = document.querySelector('.navbar__menu');
var menuContent     = document.querySelector('.menu__content');
var dropdownButton  = document.querySelector('.dropdown__button');
var dropdownSubMenu = document.querySelector(".dropdown__list");
var wrapper         = document.getElementById('wrapper-content');
var isOpen          = false;
var itemPerPage     = 4;
var totalPages      = 0;
var flagScreen;
var setHeight;
var initialHeight = 0;
var autoHeight;
var articleImages   = [
    "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1567&q=80",
    "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1640&q=80",
    "https://images.unsplash.com/photo-1496551572277-76011ca2a6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
];

function resizeScreenDetect() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}
/**
 * It allows check initial screen width of devices
 */
function screenDevice() {
    var width = resizeScreenDetect();

    if (width >= 992){
        wrapper.style.height = '912px';
        autoHeight = 912;
        flagScreen = 912;
    } else {
        wrapper.style.height = '1822px';
        autoHeight = 1822;
        flagScreen = 1822;
    }
}

/**
 * resizeMenu allows check screen width of devices if width resized
 */
function resizeMenu() {

    var width = resizeScreenDetect();

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

    if (width >= 992) {
        wrapper.style.height = '912px';
        autoHeight = 912;
        flagScreen = 912;
    } else {
        wrapper.style.height = '1822px';
        autoHeight = 1822;
        flagScreen = 1822;
    }

    dropdownSubMenu.classList.remove("show__menu");
    dropdownSubMenu.classList.remove("show__menu--mobile");
}

function loadMoreData() {
    if (totalPages !== 0) {
        setInterval(setHeightContent, 1);

        initialHeight += flagScreen;
        autoHeight    += flagScreen;
        totalPages    -= 1;
    } else {
        alert('no stories found');
    }
}

function setHeightContent() {

    setHeight = wrapper.style.height;
    initialHeight = setHeight.replace("px", ""); 

    if (parseFloat(initialHeight) <= autoHeight){
        wrapper.style.height = (parseFloat(initialHeight) + 5) + 'px';
    }
}

function displayImage() {
    return articleImages[Math.floor(Math.random() * 7)];
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function onloadData() {
    fetch(path, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        totalPages = data.length / itemPerPage;
        data.forEach(function(post) {
            var article     = createNode('article');
            var image       = createNode('img');
            var title       = createNode('h2');
            var description = createNode('p');

            append(wrapper, article);
            article.setAttribute("class","wrapper__item");

            image.setAttribute("src", displayImage());
            image.setAttribute("alt", post.title);
            append(article, image);

            title.setAttribute("class","color--dark");
            if (post.title.length > 60) {
                title.innerHTML = post.title.substring(1,60) + "...";
            } else {
                title.innerHTML = post.title;
            }
            append(article, title);

            description.setAttribute("class","color--dark");
            if (post.body.length > 140) {
                description.innerHTML = post.body.substring(1,140) + "...";
            } else {
                description.innerHTML = post.body;
            }
            append(article, description);
        });
    })
    .catch(function(error) {
        console.log(error)
    });
}

function loadMainEvent() {
    var refOffset    = 0;
    var navbarheight = 66;
    var dialog       = document.getElementById('dialog');
    var closeDialog  = document.getElementById('close__button');
    var menuIcon     = document.querySelector('.toogle__menu');
    var loadMore        = document.getElementById('load-more');

    closeDialog.addEventListener('click', closeDialogMessage);
    menuIcon.addEventListener('click', toggleMenuIcon);
    dropdownButton.addEventListener('click', handleDropdown);
    loadMore.addEventListener('click', onloadData);
    window.addEventListener('scroll', stickyNavigationControl, false);

    onloadData(); 

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

    /**
     * toogleMenu for mobile devices
     */
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

    /**
     * dialog should be close
     */
    function closeDialogMessage() {
        dialog.style.display = "none";
    }

    /**
     * stickyNavigationControl allows set animation with scroll on devices
     */
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

/**
 * onLoad functions
 */
window.onload = function () {
    screenDevice();
    loadMainEvent();
}