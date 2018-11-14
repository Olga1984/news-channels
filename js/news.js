function createNodeWithClass(element, elClass, id='') {
    const createNode = document.createElement(element);
    createNode.classList.add(elClass);
    createNode.id = id;
    return createNode;
}
function append(parent, child) {
    return parent.appendChild(child);
}
function removeChildren(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}
function createNewsSelect(){
    const sources = ['cnn', 'bbc-news', 'daily-mail', 'business-insider', 'mtv-news', 'hacker-news', 'the-guardian-uk', 'google-news', 'usa-today'];
    const newsNaw = document.getElementById('news-naw');
    const newsSelectWrapper = createNodeWithClass('div','news-select-wrapper');
    const newsSelect = createNodeWithClass('select', 'news-select', 'news-select');

    sources.map(opt => {
        const selectOpion = createNodeWithClass('option', 'news-option');
        selectOpion.nodeValue = opt;
        selectOpion.innerText = opt;
        append(newsSelect, selectOpion);
    });
    append(newsSelectWrapper, newsSelect);
    append(newsNaw, newsSelectWrapper);
}
function addArticleItem(articleData) {
    const newsItem = createNodeWithClass('li', 'news-item'),
        title = createNodeWithClass('h3', 'title'),
        newsImage = createNodeWithClass('img', 'news-image'),
        description = createNodeWithClass('p', 'description'),
        newsLink = createNodeWithClass('a', 'news-link');


    title.innerHTML = articleData.title;
    newsImage.src = articleData.urlToImage;
    description.innerHTML = `${articleData.author} : ${articleData.description}.`;
    newsLink.href = articleData.url;
    newsLink.innerHTML = 'read more here';

    append(newsItem, title);
    append(newsItem, newsImage);
    append(description, newsLink);
    append(newsItem, description);
    append(newsList, newsItem);
}
function createArticlesBlock(data) {

    removeChildren(newsList);
    const articles = data.articles;
    return articles.map(function(article) {
        addArticleItem(article);
    })
}
function updateSource(cannel='cnn') {
    const APIKEY = '&apiKey=8a8cf26bfb1c4c49884895859ca9d63b';
    const url = `https://newsapi.org/v1/articles?source=${cannel}&sortBy=top${APIKEY}`;
    fetch(url)
        .then((response) => response.json())
        .then(function(data) {
            createArticlesBlock(data);
        })
        .catch(function(error) {
            console.log(JSON.stringify(error));
        });
}
function getSelectedValue() {
    const selectedValue = document.getElementById('news-select').value;
    updateSource(selectedValue);
}
createNewsSelect();
updateSource();
const newsList = document.getElementById('news-list');
const el= document.getElementById('news-select');
el.addEventListener('change', getSelectedValue, false);