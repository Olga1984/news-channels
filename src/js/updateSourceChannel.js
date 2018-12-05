import {ErrorSingleton} from './errorSingleton';
import {NewsSource} from './factory';
export const UpdateSourceChannel = (channel, newsArticlesList) => {
    const newsSource = new NewsSource();
    const response =  newsSource.create(channel, 'GET');
    response.fetch()
            .then((data) => {
                    document.getElementsByClassName('heading')[0].innerHTML = `News: ${channel}`;
                    newsArticlesList.update(data);
                    newsArticlesList.render();
    }).catch(err => {
            const instance = new ErrorSingleton(err);
            instance.showError();
        });
    // async
    // const response = await fetch(`${BASE_URL}${channel}&sortBy=top${APIKEY}`);
    // const data = await response.json();
   // document.getElementsByClassName('heading')[0].innerHTML = `News: ${channel}`;
    //newsArticlesList.update(data);
   // newsArticlesList.render();
};