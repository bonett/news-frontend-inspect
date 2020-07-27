const baseUrl      = 'http://eventregistry.org/api/v1/article/getArticles';

let initialItems = 0,
    onloadItems  = 4,
    isOpen       = false,
    refOffset    = 0,
    navbarheight = 66,
    navbar       = document.querySelector('.navbar');

/**
 * It allows create new element by ClassName
 */
const getElementByClassName = (el) => {
    return document.getElementsByClassName(el);
}

/**
 * It allows create new element by ID
 */
const getElementById = (el) => {
    return document.getElementById(el);
}

/**
 * It allows create new element
 */
const createNode = (el) => {
    return document.createElement(el);
}

/**
 * It allows add child to parent
 */
const append = (parent, el) => {
    return parent.appendChild(el);
}

/**
 * It allows get elements by reference
 */
const getElementsByQueryName = (el) => {
    return document.querySelector(el)
}

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

    const width           = resizeScreenDetect(),
          navbarContent   = getElementsByQueryName('.navbar__menu'),
          menuContent     = getElementsByQueryName('.menu__content'),
          dropdownSubMenu = getElementsByQueryName('.dropdown__list');

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

/**
 * It allows hidden skeleton loader after get all data
 */
const hiddenSkeleton = () => {

    const skeletonLoader  = document.querySelectorAll('.skeleton');

    for (var index = 0; index < skeletonLoader.length; index++) {
        skeletonLoader[index].style.display = "none";
    }
}

const handleDropdown = () => {

    const screen          = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          dropdownSubMenu = getElementsByQueryName('.dropdown__list')

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

    const navbarContent = getElementsByQueryName('.navbar__menu'),
          menuContent   = getElementsByQueryName('.menu__content');
          isOpen        = menuIcon.classList.toggle('active');

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

    const dialog = getElementById('dialog');
    
    dialog.style.display = "none";
}

/**
 * stickyNavigationControl allows set animation with scroll on devices
 */
const stickyNavigationControl = () => {

    const newOffset       = window.scrollY || window.pageYOffset,
          dropdownSubMenu = getElementsByQueryName('.dropdown__list');

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
          articles = list && list.results,
          wrapper  = getElementById('wrapper-content');

    if (onloadItems <= articles.length) {
        for (let index = initialItems; index < articles.length && index < onloadItems; index++) {
            const article     = createNode('article'),
                  picture     = createNode('picture'),
                  image       = createNode('img'),
                  description = createNode('div'),
                  title       = createNode('h2'),
                  paragraph   = createNode('p');
    
            append(wrapper, article);
            article.setAttribute("class", "wrapper__item");
    
            description.setAttribute("class", "caption background--white");
            
            append(article, picture);
            append(article, description);
    
            image.setAttribute("src", articles[index].image);
            image.setAttribute("alt", articles[index].title);
            append(picture, image);
    
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
    const loadMore       = getElementById('load-more'),
          closeDialog    = getElementById('close__button'),
          menuIcon       = getElementsByQueryName('.toogle__menu'),
          dropdownButton = getElementsByQueryName('.dropdown__button'),
          dialog         = getElementById('dialog');

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