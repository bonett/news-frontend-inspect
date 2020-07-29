const baseUrl = 'http://eventregistry.org/api/v1/article/getArticles';

let initialItems    = 0,
    onloadItems     = 4,
    isOpen          = false,
    refOffset       = 0,
    navbarheight    = 66,
    navbar          = document.querySelector('.navbar'),
    navbarContent   = document.querySelector('.navbar__menu'),
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
        navbar.classList.add("full--size");

        document.body.style.overflowY = "hidden";
        navbarContent.style.display   = "flex";
        navbarContent.style.height    = "100vh";
    } else {

        dropdownSubMenu.classList.remove("show__menu--mobile");
        navbar.classList.remove("full--size");

        navbarContent.style.display   = "none";
        document.body.style.overflowY = "scroll";
        navbarContent.style.height    = "0%";
    }
}

/**
 * resizeMenu allows check screen width of devices if width resized
 */
const resizeMenu = () => {

    screen = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screen >= 992 && isOpen) {
        
        dropdownSubMenu.classList.remove("show__menu--mobile");
        navbar.classList.remove("full--size");

        navbarContent.style.display   = "flex";
        document.body.style.overflowY = "scroll";
        navbarContent.style.height    = "0%";

    } else if (screen >= 992 && !isOpen) {

        navbar.classList.remove("full--size");
        navbarContent.style.display   = "flex";
        document.body.style.overflowY = "scroll";
        navbarContent.style.height    = "0%";

    } else if (screen < 992 && isOpen) {

        navbar.classList.add("full--size");
        navbarContent.style.display   = "flex";
        document.body.style.overflowY = "hidden";
        navbarContent.style.height    = "100vh";

    } else if (screen < 992 && !isOpen) {
        
        dropdownSubMenu.classList.remove("show__menu");
        dropdownSubMenu.classList.remove("show__menu--mobile");
        navbar.classList.remove("full--size");

        navbarContent.style.display   = "none";
        document.body.style.overflowY = "scroll";
        navbarContent.style.height    = "0%";

    }
}

/**
 * It allows hidden skeleton loader after get all data
 */
const hiddenSkeleton = () => {
    for (var index = 0; index < skeletonLoader.length; index++) {
        skeletonLoader[index].style.display = "none";
    }
}

/**
 * It allows show menu 
 */
const handleDropdown = () => {
    
    if (screen <= 991) {
        dropdownSubMenu.classList.toggle("show__menu--mobile");
    } 
    
    if (screen > 991) {
        dropdownSubMenu.classList.toggle("show__menu");            
    }

    addDisableDropdownMenu();
}


/**
 * It allows add listener on main when dropdown is open
 */
const addDisableDropdownMenu = () => {
    document.querySelector("main").addEventListener("click", removeDropdownMenu);
}


/**
 * It allows change menu on screen ( mobile or desktop)
 */
const removeDropdownMenu = () => {
    if (screen <= 991) {
        dropdownSubMenu.classList.remove("show__menu--mobile");
    }

    if (screen >= 992) {
        dropdownSubMenu.classList.remove("show__menu");        
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

/**
 * It allows get API
 */
const getUrlAPI = () => {
    return `${baseUrl}`;
}

/**
 * Settings from header
 */
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
        "apiKey"        : "e2208e9e-ae95-48ad-96db-03e7da0728f7"
    }
}


/**
 * It allows get all articles from API
 */
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


/**
 * It allows draw articles after response
 */
const loadArticleByIndex = (data) => {

    const list     = data && data.articles,
          articles = list && list.results;

    if (onloadItems <= articles.length) {
        for (let index = initialItems; index < articles.length && index < onloadItems; index++) {
            let container   = createNode('div'),
                article     = createNode('article'),
                anchor      = createNode('a'),
                div         = createNode('div'),
                image       = createNode('img'),
                description = createNode('div'),
                title       = createNode('h2'),
                paragraph   = createNode('p');

            if (index % 2 === 0) {
                append(wrapper, container);
                container.setAttribute("class", "wrapper__container");
                const parent = document.querySelectorAll(".wrapper__container");
                append(parent[parent.length - 1], article);

                article.setAttribute("class", "wrapper__item");

            } else {
                const parent = document.querySelectorAll(".wrapper__container");
                append(parent[parent.length - 1], article);
                article.setAttribute("class", "wrapper__item");
            }

            anchor.setAttribute("href", articles[index].url);
            anchor.setAttribute("target", "_blank");
            append(article, anchor);

            append(anchor, div);

            div.setAttribute("class", "picture");
            append(anchor, description);

            if(articles[index].image == null){
                image.setAttribute("src", "http://www.ceramicmarketing.com/wp-content/themes/ceramic/img/no-banner.jpg");
            } else {
                image.setAttribute("src", articles[index].image);
            }
            
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
        showLoader.style.display = "none";
        disabledOnLoadMoreButton();
    }
}

/**
 * It allows loadmore button
 */
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


/**
 * Init
 */
window.onload = () => {

    loadMore.addEventListener('click', loadMoreData);
    closeDialog.addEventListener('click', closeDialogMessage);
    menuIcon.addEventListener('click', toggleMenuIcon);
    dropdownButton.addEventListener('click', handleDropdown);
    window.addEventListener('scroll', stickyNavigationControl, false);

    main();
};