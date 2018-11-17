//import {TAGS, SELECTORS, MONTH, WEEK_DAY, SOURCE_CHANNELS, BASE_URL, APIKEY} from './constants';
const TAGS = {
    DIV: 'div',
    UL: 'ul',
    LI: 'li',
    FIGURE: 'figure',
    P: 'p',
    SPAN: 'span',
    H1: 'h1',
    H3: 'h3',
    A: 'a',
    IMG: 'img',
    NAW: 'nav',
};
const SELECTORS = {
    MENU_WRAPPER: 'menu-wrapper',
    ACTIVE: 'active',
    OPEN: 'open',
    MENU: 'menu',
    OVERLAY_MENU: 'overlayMenu',
    NAVBURGER: 'navBurger',
    NAWTOGGLE: 'navToggle',
    NAW_SPACE: 'nav-space',
    LIST_ITEM: 'list-Item',
    NEWS_LINK: 'news-link',
    CONTANT: {
        CONTANT: 'content-wrapper',
        OVERLAY: 'overlay',
    },
    NEWS_LIST: 'news-list',
    HEADING: 'heading',
    NEWS_ITEM: 'news-item',
    TITLE: 'title',
    ARTICLE_ITEM_CONTENT: 'article-item-content',
    NEWS_IMAGE: 'news-image',
    IMAGE: 'image',
    DESCRIPTION: 'description',
    NEWS_DATE: 'news-date',
};
const SOURCE_CHANNELS = ['cnn', 'bbc-news', 'daily-mail', 'business-insider', 'mtv-news', 'hacker-news', 'the-guardian-uk', 'google-news', 'usa-today'];
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEK_DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const APIKEY = '&apiKey=8b0ecc14a33147d4ad63d53efee42cb8';

class NewsMenu {
    constructor(newsWrapper, sources) {
        this.newsWrapper = newsWrapper;
        this.sources = sources;
        // this.selectors = selectors;
    }
    createNodeWithAttributes(element, elClass, id = '') {
        const createNode = document.createElement(element);
        createNode.classList.add(elClass);
        createNode.id = id;
        return createNode;
    }
    append(parent, child) {
        return parent.appendChild(child);
    }
    toggleNavPanel() {
        const mainContent = document.getElementById(SELECTORS.CONTANT.CONTANT);
        navToggle.classList.toggle(SELECTORS.ACTIVE);
        overlay.classList.toggle(SELECTORS.OPEN);
        mainContent.classList.toggle(SELECTORS.NAW_SPACE);
    }
    render() {
        const newsNavigator = this.createNodeWithAttributes(TAGS.NAW, SELECTORS.OVERLAY_MENU);
        const newsList = this.createNodeWithAttributes(TAGS.UL, SELECTORS.MENU, SELECTORS.MENU);
        const newsPanel = this.createNodeWithAttributes(TAGS.DIV, SELECTORS.CONTANT.OVERLAY, SELECTORS.CONTANT.OVERLAY);
        const navBurger = this.createNodeWithAttributes(TAGS.DIV, SELECTORS.NAVBURGER, SELECTORS.NAWTOGGLE);
        navBurger.addEventListener('click', this.toggleNavPanel, false);
        this.sources.forEach(channel => {
            const menuItem = this.createNodeWithAttributes(TAGS.LI, SELECTORS.LIST_ITEM);
            menuItem.innerHTML = `<${TAGS.A} href="#" data-channel=${channel} class=${SELECTORS.NEWS_LIST}>${channel}</${TAGS.A}>`;
            this.append(newsList, menuItem);
        });
        this.append(newsNavigator, newsList);
        this.append(newsPanel, newsNavigator);
        this.append(this.newsWrapper, newsPanel);
        this.append(this.newsWrapper, navBurger);
    }
}
class NewsArticlesList {
    constructor(data, channel, newsList) {
        this.data = data;
        this.channel = channel;
        this.newsList = newsList;
    }
    createNodeWithClass(element, elClass) {
        const createNode = document.createElement(element);
        createNode.classList.add(elClass);
        return createNode;
    }
    append(parent, child) {
        return parent.appendChild(child);
    }
    removeChildren(elem) {
        while (elem.lastChild) {
            elem.removeChild(elem.lastChild);
        }
    }
    publicationDate(dateString) {
        const d = new Date(dateString);
        return `${WEEK_DAY[d.getDay()]} ${d.getDate()} ${MONTH[d.getMonth()]} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} GMT`;
    }

    createArticleItem(articleData) {
        const articlesItem = this.createNodeWithClass(TAGS.LI, SELECTORS.NEWS_ITEM);
        articlesItem.innerHTML = `<${TAGS.H3} class=${SELECTORS.TITLE}><${TAGS.A} href=${articleData.url} class=${SELECTORS.NEWS_LINK}>${articleData.title}</${TAGS.A}></${TAGS.H3}><${TAGS.DIV} class=${SELECTORS.ARTICLE_ITEM_CONTENT}><${TAGS.FIGURE} class=${SELECTORS.NEWS_IMAGE}><${TAGS.IMG} src=${articleData.urlToImage} class=${SELECTORS.IMAGE}></${TAGS.FIGURE}><${TAGS.P} class=${SELECTORS.DESCRIPTION}>${articleData.description}</${TAGS.P}><${TAGS.SPAN} class=${SELECTORS.NEWS_DATE}>${this.publicationDate(articleData.publishedAt)}</${TAGS.SPAN}></${TAGS.DIV}>`;
        this.append(this.newsList, articlesItem);
    }
    createArticlesBlock(data, channel, newsList) {
        this.removeChildren(newsList);
        const contentHeading = this.createNodeWithClass(TAGS.H1, SELECTORS.HEADING);
        contentHeading.innerText = `News: ${channel}`;
        this.append(newsList, contentHeading);
        return data.articles.forEach(article => {
            this.createArticleItem(article);
        })
    }
    render() {
        this.createArticlesBlock(this.data, this.channel, this.newsList);
    }
}

const updateSourceChannel = (channel, newsList) => {
    const url = `${BASE_URL}${channel}&sortBy=top${APIKEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            newsList = document.getElementById(SELECTORS.NEWS_LIST);
            const newsArticlesList = new NewsArticlesList(data, channel, newsList);
            newsArticlesList.render()
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
        });
};
// aside menu generation
const newsWrapper = document.getElementById(SELECTORS.MENU_WRAPPER);
const newsMenu = new NewsMenu(newsWrapper, SOURCE_CHANNELS);
newsMenu.render();

// first content generation
const newsListContainer = document.getElementById(SELECTORS.NEWS_LIST);
updateSourceChannel(SOURCE_CHANNELS[0], newsListContainer);

// nav panel listener
const menu = document.getElementById(SELECTORS.MENU);
menu.addEventListener("click", (event) => {
    const channel = event.target.dataset.channel;
    if (channel)
        updateSourceChannel(channel, newsListContainer);
});
