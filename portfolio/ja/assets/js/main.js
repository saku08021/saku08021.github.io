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

// 実績のカウントアップアニメーション
$(document).ready(function() {
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000, // アニメーション時間
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });

  // 経歴セクションのカルーセル
  $('.career-slider').slick({
    autoplay: true,       // 自動再生
    autoplaySpeed: 1000,  // 自動再生の速度
    arrows: false,        // 左右の矢印を非表示
    dots: true,          // ドットナビゲーションを表示
    infinite: true,      // 無限ループ
    speed: 300,          // スライドの速度を300msに変更 
    fade: true,          // フェードエフェクト
    cssEase: 'linear'    // イージング
  });
});

// 経歴表示のアニメーション (AOSライブラリを使用)
AOS.init({
  duration: 500, // アニメーション時間
  easing: 'ease-in-out',
  once: true, // 一度だけアニメーションを実行
});
