import '../css/newsMenu.scss';
export class NewsMenu {
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