// スクロールアニメーション
const sections = document.querySelectorAll('section');
const hero = document.querySelector('.hero');

const options = {
    rootMargin: '0px 0px -200px',
    threshold: 0.5 // 画面の50%表示された時点でアニメーション開始
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// ヒーローセクションの背景画像のアニメーション
const heroImage = hero.querySelector('img');

hero.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const opacity = Math.max(0, 1 - scrollY / 500);
    heroImage.style.opacity = opacity;
});

// スムーススクロール
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth' // スムーススクロール
        });
    });
});
