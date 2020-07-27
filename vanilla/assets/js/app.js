const baseUrl      = 'http://eventregistry.org/api/v1/article/getArticles';

let initialItems = 0,
    onloadItems  = 4;



var refOffset       = 0;
var navbarheight    = 66;
var navbar          = document.querySelector('.navbar');
var navbarContent   = document.querySelector('.navbar__menu');
var menuContent     = document.querySelector('.menu__content');
var dropdownButton  = document.querySelector('.dropdown__button');
var dropdownSubMenu = document.querySelector('.dropdown__list');
var wrapper         = document.getElementById('wrapper-content');
var skeletonLoader  = document.querySelectorAll('.skeleton');
var dialog          = document.getElementById('dialog');
var closeDialog     = document.getElementById('close__button');
var menuIcon        = document.querySelector('.toogle__menu');
var isOpen          = false;
var itemPerPage     = 4;
var totalPages      = 0;
var flagScreen;
var setHeight;
var initialHeight = 0;
var autoHeight;


/**
 * It allows get screen of devices
 */
function resizeScreenDetect() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
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
        autoHeight           = 912;
        flagScreen           = 912;
    } else {
        wrapper.style.height = '1822px';
        autoHeight           = 1822;
        flagScreen           = 1822;
    }

    dropdownSubMenu.classList.remove("show__menu");
    dropdownSubMenu.classList.remove("show__menu--mobile");
}

/**
 * It allows calculate new height
 */
function setHeightContent() {

    setHeight     = wrapper.style.height;
    initialHeight = setHeight.replace("px", "");

    if (parseFloat(initialHeight) <= autoHeight) {
        wrapper.style.height = (parseFloat(initialHeight) + 5) + 'px';
    }
}

const getElementByClassName = (element) => {
    return document.getElementsByClassName(element);
}

const getElementById = (element) => {
    return document.getElementById(element);
}

/**
 * It allows create new element
 */
const createNode = (element) => {
    return document.createElement(element);
}

/**
 * It allows add child to parent
 */
const append = (parent, el) => {
    return parent.appendChild(el);
}

/**
 * It allows hidden skeleton loader after get all data
 */
const hiddenSkeleton = () => {
    for (var index = 0; index < skeletonLoader.length; index++) {
        skeletonLoader[index].style.display = "none";
    }
}

const handleDropdown = () => {

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
const toggleMenuIcon = () => {

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
const closeDialogMessage = () => {
    dialog.style.display = "none";
}

/**
 * stickyNavigationControl allows set animation with scroll on devices
 */
const stickyNavigationControl = () => {

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

const getUrlAPI = () => {
    return `${baseUrl}`;
}

const paramsHeader = () => {
    return {
        "query"   : "{\"$query\":{\"categoryUri\":\"dmoz/Health\"}}",
        "dataType": [
            "news"
        ],
        "resultType"    : "articles",
        "articlesSortBy": "date",
        "articlesCount" : 100,
        "articleBodyLen": -1,
        "apiKey"        : "65e9cbc8-be98-4b0e-a423-005257373b5f"
    }
}

const getArticlesFromAPI = async () => {

    const pathURl = getUrlAPI(),
          params  = paramsHeader();

    const response = await $.ajax({
        url        : pathURl,
        crossDomain: true,
        data       : params,
        method     : 'GET',
    })
        .done(function (res) {
            return res;
        })
        .fail(function (err) {
            console.error(err.statusText);
        });

    loadArticleByIndex(response);
}

const loadArticleByIndex = (data) => {

    const list     = data && data.articles,
          articles = list && list.results;

    if (onloadItems <= articles.length) {
        for (let index = initialItems; index < articles.length && index < onloadItems; index++) {
            const article     = createNode('article'),
                  media       = createNode('div'),
                  image       = createNode('img'),
                  description = createNode('div'),
                  title       = createNode('h2'),
                  paragraph   = createNode('p');
    
            append(wrapper, article);
            article.setAttribute("class", "wrapper__item");
    
            append(article, media);
            append(article, description);
    
            image.setAttribute("src", articles[index].image);
            image.setAttribute("alt", articles[index].title);
            append(media, image);
    
            title.setAttribute("class", "color--dark");
            if (articles[index].title.length > 60) {
                title.innerHTML = articles[index].title.substring(1, 60) + "...";
            } else {
                title.innerHTML = articles[index].title;
            }
            append(description, title);
    
            paragraph.setAttribute("class", "color--dark");
            if (articles[index].body.length > 140) {
                paragraph.innerHTML = articles[index].body.substring(1, 140) + "...";
            } else {
                paragraph.innerHTML = articles[index].body;
            }
            append(description, paragraph);
        }
    
        hiddenSkeleton();
    } else {
        disabledOnLoadMoreButton();
    }
}

const disabledOnLoadMoreButton = () => {

    const loadMore = getElementById('load-more');

    loadMore.style.pointerEvents = "none";
    loadMore.style.opacity       = "0.4";
}
/**
 * It allows load more data
 */
const loadMoreData = () => {
    initialItems += 4;
    onloadItems  += 4

    getArticlesFromAPI();
}

const setEvents = () => {
    const loadMore = getElementById('load-more');

    loadMore.addEventListener('click', loadMoreData);

    closeDialog.addEventListener('click', closeDialogMessage);
    menuIcon.addEventListener('click', toggleMenuIcon);
    dropdownButton.addEventListener('click', handleDropdown);
    window.addEventListener('scroll', stickyNavigationControl, false);
}

/**
 * onLoad functions
 */
const main = async () => {
    setEvents();
    getArticlesFromAPI();
}

window.onload = () => {
    main();
};