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

  // 実績データ
  const achievementsData = {
    sns: [
      { title: 'Twitterフォロワー最大数', detail: '0→13万人達成 (その他万垢多数達成)' },
      { title: 'YouTube登録者最大数', detail: '0→5万人達成' },
      { title: 'Instagramフォロワー最大数', detail: '20,000人達成' },
      { title: '1日のリスト獲得最大数', detail: '1,000人達成' }
    ],
    contents: [
      { title: '担当コンテンツ売上', detail: '3ヶ月で200%増加' },
      { title: '会社売上', detail: '半年で社内利益180%達成' }
    ],
    consulting: [
      { title: '業務効率化コンサルティング', detail: 'コンテンツ作成における業務の効率化、SNS運用,コンテンツ販売の半自動化を行いマーケティングコスト35%減。' },
      { title: 'マーケティングコンサルティング', detail: 'リード獲得数増加に伴い売上200%達成' }
    ]
  };

  // 実績項目の動的生成
  function createAchievementItems(category) {
    const container = $(`#${category}-achievements`);
    achievementsData[category].forEach((item, index) => {
      const achievementItem = $(`
        <div class="achievement-item" data-aos="fade-up" data-aos-delay="${index * 100}">
          <h3 class="achievement-title">${item.title}</h3>
          <div class="achievement-popup">
            <h4>${item.title}</h4>
            <p>${item.detail}</p>
          </div>
        </div>
      `);
      container.append(achievementItem);

      // ホバーでポップアップ表示
      achievementItem.hover(
        function() {
            $(this).find('.achievement-popup').addClass('show');
        }, 
        function() {
            $(this).find('.achievement-popup').removeClass('show');
        }
      );
    });
  }

  // 各カテゴリーの実績項目を生成
  createAchievementItems('sns');
  createAchievementItems('contents');
  createAchievementItems('consulting');
});
