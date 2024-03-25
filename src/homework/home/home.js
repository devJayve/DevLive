document.addEventListener('DOMContentLoaded', function() {
    const recentNewsContainer = document.querySelector('.recent-news');
    const trendKeywordContainer = document.querySelector('.trend-keyword-content');

    for (let i = 0; i < 20; i++) {
        const newsItem = document.createElement('div');
        const trendCategoryItem = document.createElement('div');

        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <img class="news-thumbnail" src="../assets/dummy_news_thumbnail.png">
            <div class="news-item-content">
                <div class="news-item-content-title">기사 제목 ${i + 1}</div>
                <div class="news-item-content-desc">기사 내용 ${i + 1}</div>
            </div>
            <div class="news-item-meta">
                <div>2024.04.01</div>
                <div>아시아경제</div>
            </div>
        `;

        trendCategoryItem.className ='trend-keyword-item';
        trendCategoryItem.innerHTML = `
            <div>category ${i}</div>
        `;

        trendKeywordContainer.appendChild(trendCategoryItem);
        recentNewsContainer.appendChild(newsItem);
    }
});