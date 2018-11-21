import {BASE_URL, APIKEY} from './constants';
export const updateSourceChannel = async (channel, newsArticlesList) => {
    const response = await fetch(`${BASE_URL}${channel}&sortBy=top${APIKEY}`);
    const data = await response.json();
    document.getElementsByClassName('heading')[0].innerHTML = `News: ${channel}`;
    newsArticlesList.update(data);
    newsArticlesList.render();
};