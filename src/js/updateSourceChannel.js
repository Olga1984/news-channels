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
        import(/* webpackChunkName: "error" */ "./errorSingleton").then(({ErrorSingleton}) => {
            const instance = new ErrorSingleton();
            instance.showError(err);
        })
    });
};