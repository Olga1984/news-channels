import {BASE_URL, APIKEY} from './constants';
import {NewsSource} from './factory';
export const UpdateSourceChannel = async (channel, newsArticlesList) => {
   // const newsSource = new NewsSource();
    //const response = await newsSource.create(channel);
    const response = await fetch(`${BASE_URL}${channel}&sortBy=top${APIKEY}`);
    const data = await response.json();
    document.getElementsByClassName('heading')[0].innerHTML = `News: ${channel}`;
    newsArticlesList.update(data);
    newsArticlesList.render();
};