import {SOURCE_CHANNELS} from './constants';
import {NewsMenu} from './newsMenu';
import {NewsArticlesList} from './newsArticlesList';
import {UpdateSourceChannel} from './updateSourceChannel';
import {DisplayListOfUniqueKeys} from './displayListOfKeys';
import '../css/newsList.scss';

export function init() {

    // check work of custom-loader
    const jsonData = require('../list.json');
    DisplayListOfUniqueKeys(jsonData);

    //aside menu generation
    const newsWrapper = document.getElementById('menu-wrapper');
    const newsMenu = new NewsMenu(newsWrapper, SOURCE_CHANNELS);
    newsMenu.render();
    newsMenu.addNavBurgerListener();

// first content generation
    const newsListContainer = document.getElementById('news-list');
    const articlesList = new NewsArticlesList(newsListContainer);
    UpdateSourceChannel(SOURCE_CHANNELS[0], articlesList)
        .catch((error) => {
            console.log(JSON.stringify(error));
        });
//nav panel listener
    const menu = document.getElementById('menu');
    menu.addEventListener("click", (event) => {
        const channel = event.target.dataset.channel;
        if (channel) {
            UpdateSourceChannel(channel, articlesList).catch((error) => {
                console.log(JSON.stringify(error));
            });
        }
    });
}