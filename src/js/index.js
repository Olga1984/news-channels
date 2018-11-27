const button = document.getElementById("show-news-btn");
button.onclick = () => {
    import(/* webpackChunkName: "news" */ "./newsList").then(news => {
        news.init()
    });
    button.classList.add('hide');
};
