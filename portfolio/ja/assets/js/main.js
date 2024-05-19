// AOSの初期化
AOS.init({
  duration: 1000, // アニメーションの時間（ミリ秒）
  easing: 'ease-in-out', // アニメーションの easing
});

// スムーススクロール
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ホバー時のアニメーション (実績、スキルセット、ポートフォリオ)
const blocks = document.querySelectorAll('.achievement-block, .skill-box, .portfolio-block');

blocks.forEach(block => {
  block.addEventListener('mouseover', () => {
    block.style.transform = 'translateY(-5px)';
    block.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
  });

  block.addEventListener('mouseout', () => {
    block.style.transform = 'translateY(0)';
    block.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  });
});
