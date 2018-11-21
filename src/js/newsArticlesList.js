export class NewsArticlesList {
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
};