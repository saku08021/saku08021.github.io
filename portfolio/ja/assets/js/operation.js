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

$(document).ready(function() {
  $(window).on('load', function(){
    $(".loading").fadeOut(300);
  });

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

  // スタート画面のボタン
  $('.start-button').on('click', function() {
    let target = $(this).data('target');
    $('.game-start').fadeOut(500, function() {
      $(target).fadeIn(500);
    });
  });

  // スキルツリー
  let skillPoints = 10;
  $('#points').text(skillPoints);

  $('.skill-node').on('click', function() {
    let skill = $(this).data('skill');
    let level = parseInt($(this).find('.level').text());
    let maxLevel = parseInt($(this).data('level'));

    if (level < maxLevel && skillPoints > 0) {
      level++;
      skillPoints--;
      $(this).find('.level').text(level);
      $(this).find('.progress').css('width', (level / maxLevel * 100) + '%');
      $('#points').text(skillPoints);
    }
  });

  // リセットボタン
  $('#reset-button').on('click', function() {
    skillPoints = 10;
    $('#points').text(skillPoints);
    $('.skill-node .level').text(1);
    $('.skill-node .progress').css('width', '10%');
  });

});
