$(document).ready(function() {
  // ローディング画面をフェードアウト
  $(window).on('load', function(){
    $(".loading").fadeOut(300);
  });

  // AOSの初期化
  AOS.init();

  // カウントアップアニメーション
  function countUp(className) {
    let elements = document.querySelectorAll(className);

    elements.forEach(element => {
      let targetNumber = parseInt(element.textContent, 10);
      let currentNumber = 0;
      let duration = 3000; 
      let increment = targetNumber / (duration / 10); 

      let timer = setInterval(() => {
        currentNumber += increment;
        element.textContent = Math.ceil(currentNumber);

        if (currentNumber >= targetNumber) {
          clearInterval(timer);
          element.textContent = targetNumber;
        }
      }, 10);
    });
  }

  countUp('.count');

  // 経歴セクションのカルーセル
  $('.career-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000, // 自動再生の速度を3秒に変更
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,          // スライドの速度を800msに変更
    fade: true,
    cssEase: 'ease-out', // イージングを変更
    // レスポンシブ設定を追加
    responsive: [
      {
        breakpoint: 768, // 画面幅768px以下の場合
        settings: {
          dots: false, // ドットを非表示
          arrows: false,
          slidesToShow: 1, 
        }
      }
    ]
  });
});
