//  import {SOURCE_CHANNELS, BASE_URL, APIKEY} from './constants';

const SOURCE_CHANNELS = ['cnn', 'bbc-news', 'daily-mail', 'business-insider', 'mtv-news', 'hacker-news', 'the-guardian-uk', 'google-news', 'usa-today'];
const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const APIKEY = '&apiKey=8b0ecc14a33147d4ad63d53efee42cb8';

class NewsMenu {
    constructor(newsWrapper, sources) {
        this.newsWrapper = newsWrapper;
        this.sources = sources;
    }
    addNavBurgerListener() {
        const navBurger = document.getElementById('navToggle');
        navBurger.addEventListener('click', this.toggleNavPanel, false);
    }
    toggleNavPanel() {
        const mainContent = document.getElementById('content-wrapper');
        navToggle.classList.toggle('active');
        overlay.classList.toggle('open');
        mainContent.classList.toggle('nav-space');
    }
    createMenuItem(channel) {
        return `<li class="list-Item" id="">
                    <a href="#" data-channel=${channel} class="news-list">${channel}</a>
                </li>`;
    }

    createMenuItems() {
        return this.sources.reduce((result, channel) => {
            return `${result}${this.createMenuItem(channel)}`;
        }, '');
    }
    createMenuBlock() {
        return `<div class="overlay" id="overlay">
                    <nav class="overlayMenu" id="">
                        <ul class="menu" id="menu">${this.createMenuItems()}</ul>
                    </nav>
                </div>
                <div class="navBurger" id="navToggle"></div>`;
    }
    render() {
        this.newsWrapper.innerHTML = this.createMenuBlock();
    }
}
class NewsArticlesList {
    constructor(newsListContainer, data = {}) {
        this.data = data;
        this.newsList = newsListContainer;
    }
    publicationDate(dateString) {
        const date = new Date(dateString);
        return date.toGMTString();
    }
    createArticleItem(articleData) {
        return `<li class="news-item">
                    <h3 class="title">
                        <a href=${articleData.url} class="news-link">${articleData.title}</a>
                    </h3>
                    <div class="article-item-content">
                        <figure class="news-image">
                            <img src=${articleData.urlToImage} class="image">
                        </figure>
                        <p class="description">${articleData.description}</p>
                        <span class="news-date">${this.publicationDate(articleData.publishedAt)}</span>
                    <div>
                </li>`;
    }
    createArticlesBlock() {
        return this.data.articles.reduce((result, article) => {
            return `${result}${this.createArticleItem(article)}`;
        }, '');
    }
    render() {
        this.newsList.innerHTML = this.createArticlesBlock();
    }
    update(data) {
        this.data = data;
    };
}

const updateSourceChannel = async (channel, newsArticlesList) => {
    const response = await fetch(`${BASE_URL}${channel}&sortBy=top${APIKEY}`);
    const data = await response.json();
    document.getElementsByClassName('heading')[0].innerHTML = `News: ${channel}`;
    newsArticlesList.update(data);
    newsArticlesList.render();
};

//aside menu generation
const newsWrapper = document.getElementById('menu-wrapper');
const newsMenu = new NewsMenu(newsWrapper, SOURCE_CHANNELS);
newsMenu.render();
newsMenu.addNavBurgerListener();

// first content generation
const newsListContainer = document.getElementById('news-list');
const articlesList = new NewsArticlesList(newsListContainer);
updateSourceChannel(SOURCE_CHANNELS[0], articlesList)
    .catch((error) => {
                console.log(JSON.stringify(error));
            });

//nav panel listener
const menu = document.getElementById('menu');
menu.addEventListener("click", (event) => {
    const channel = event.target.dataset.channel;
    if (channel) {
        updateSourceChannel(channel, articlesList);
    }
});
