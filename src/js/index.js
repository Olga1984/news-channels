import {SOURCE_CHANNELS} from './constants';
import {NewsMenu} from './newsMenu';
import {NewsArticlesList} from './newsArticlesList';
import {updateSourceChannel} from './updateSourceChannel';

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
        updateSourceChannel(channel, articlesList).catch((error) => {
            console.log(JSON.stringify(error));
        });
    }
});
