const baseUrl = 'http://eventregistry.org/api/v1/article/getArticles';

let initialItems    = 0,
    onloadItems     = 4,
    isOpen          = false,
    refOffset       = 0,
    navbarheight    = 66,
    navbar          = document.querySelector('.navbar'),
    navbarContent   = document.querySelector('.navbar__menu'),
    menuContent     = document.querySelector('.menu__content');
    dropdownSubMenu = document.querySelector('.dropdown__list'),
    skeletonLoader  = document.querySelectorAll('.skeleton'),
    wrapper         = document.getElementById('wrapper-content'),
    loadMore        = document.getElementById('load-more'),
    menuIcon        = document.querySelector('.toogle__menu'),
    closeDialog     = document.getElementById('close__button'),
    dropdownButton  = document.querySelector('.dropdown__button'),
    showLoader      = document.getElementById("loader"),
    screen          = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


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
 * toogleMenu for mobile devices
 */
const toggleMenuIcon = () => {

    isOpen = menuIcon.classList.toggle('active');

    if (isOpen) {
        navbarContent.classList.add('mobile__menu');
        document.body.style.overflowY = "hidden";
        navbar.classList.add("full--size");
        navbarContent.style.height = "100%";
        menuContent.classList.add("mobile__content");
        dropdownSubMenu.classList.add("show__menu--mobile");
    } else {
        navbarContent.classList.remove('mobile__menu');
        dropdownSubMenu.classList.remove("show__menu--mobile");
        navbar.classList.remove("full--size");
        document.body.style.overflowY = "scroll";
        navbarContent.style.height    = "0%";
    }
}

/**
 * resizeMenu allows check screen width of devices if width resized
 */
const resizeMenu = () => {
    if (screen >= 992 || isOpen) {
        navbarContent.classList.remove('mobile__menu');
        document.body.style.overflowY = "scroll";
        navbar.classList.remove("full--size");
        navbarContent.style.height = "0%";
        dropdownSubMenu.classList.remove("show__menu--mobile");
        menuIcon.classList.remove("active");
    } else {
        navbarContent.classList.add('mobile__menu');
        dropdownSubMenu.classList.add("show__menu--mobile");
        navbar.style.display          = "none";
        document.body.style.overflowY = "none";
    }

    /* dropdownSubMenu.classList.remove("show__menu");
    dropdownSubMenu.classList.remove("show__menu--mobile"); */
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
    if (screen <= 991) {
        dropdownSubMenu.classList.toggle("show__menu--mobile");
    } else {
        dropdownSubMenu.classList.toggle("show__menu");
    }
}

/**
 * dialog should be close
 */
const closeDialogMessage = () => {
    
    let alert = document.getElementById('dialog');

    alert.style.display = "none";
}

/**
 * stickyNavigationControl allows set animation with scroll on devices
 */
const stickyNavigationControl = () => {

    let newOffset = window.scrollY || window.pageYOffset;

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
            let container   = createNode('div'),
                article     = createNode('article'),
                ancor       = createNode('a'),
                div         = createNode('div'),
                image       = createNode('img'),
                description = createNode('div'),
                title       = createNode('h2'),
                paragraph   = createNode('p');
    
            if (index % 2 === 0) {
                append(wrapper, container);
                container.setAttribute("class", "wrapper__container");
                const parent = document.querySelectorAll(".wrapper__container");
                append(parent[parent.length -1 ], article);

                article.setAttribute("class", "wrapper__item");

            } else {
                const parent = document.querySelectorAll(".wrapper__container");
                append(parent[parent.length -1 ], article);
                article.setAttribute("class", "wrapper__item");
            }

            ancor.setAttribute("href", articles[index].url);
            ancor.setAttribute("target", "_blank");
            append(article, ancor);

            append(ancor, div);

            div.setAttribute("class", "picture");
            append(ancor, description);
    
            image.setAttribute("src", articles[index].image);
            image.setAttribute("alt", articles[index].title);
            append(div, image);
    
            title.setAttribute("class", "color--dark");
            if (articles[index].title.length > 60) {
                title.innerHTML = articles[index].title.substring(1, 60) + "...";
            } else {
                title.innerHTML = articles[index].title;
            }

            description.setAttribute("class", "caption background--white");
            append(description, title);
    
            paragraph.setAttribute("class", "color--dark");
            if (articles[index].body.length > 200) {
                paragraph.innerHTML = articles[index].body.substring(1, 200) + "...";
            } else {
                paragraph.innerHTML = articles[index].body;
            }
            append(description, paragraph);
        }
    
        if (initialItems >= 4) showLoader.style.display = "none";

        hiddenSkeleton();
    } else {
        disabledOnLoadMoreButton();
    }
}

const disabledOnLoadMoreButton = () => {
    loadMore.style.pointerEvents = "none";
    loadMore.style.opacity       = "0.4";
}

/**
 * It allows load more data
 */
const loadMoreData = () => {
    initialItems += 4;
    onloadItems  += 4

    if (initialItems >= 4) showLoader.style.display = "block";

    getArticlesFromAPI();
}

/**
 * onLoad functions
 */
const main = async () => {
    getArticlesFromAPI();
}

window.onload = () => {

    loadMore.addEventListener('click', loadMoreData);
    closeDialog.addEventListener('click', closeDialogMessage);
    menuIcon.addEventListener('click', toggleMenuIcon);
    dropdownButton.addEventListener('click', handleDropdown);
    window.addEventListener('scroll', stickyNavigationControl, false);

    main();
};