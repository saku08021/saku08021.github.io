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
      { title: 'Twitterアカウント運用', detail: '0→13万人達成 (その他万垢多数達成)' },
      { title: 'Instagramフォロワー', detail: '週間インプレッション3,000,000達成 / 1日最大獲得リスト数1,000人達成 / フォロワー数20,000人達成 / フォロワー数6,000人達成' },
      { title: 'YouTubeアカウント運用', detail: '0→5万人達成' },
      { title: '自社SNS(X)アカウント運用', detail: '50垢同時運用' }
    ],
    contents: [
      { title: '担当コンテンツ売上', detail: '3ヶ月で200%増加' },
      { title: '担当コンテンツ純利益', detail: '3ヶ月で200%達成 / 事業責任者として半年で社内利益180%達成' },
      { title: 'コンテンツ販売', detail: '業務効率化・半自動化によりマーケティングコスト35%減 / 売上200%達成' }
    ],
    consulting: [
      { title: 'コンサルティング業務', detail: '法人2社、個人事業主3名に業務フロー、マーケティングなどのコンサルティングを実施' },
      { title: 'マーケティングコンサルティング', detail: '業務フロー改善、各種アナリティクスの活用方法の教育 / コンテンツ作成の効率化、SNS運用・コンテンツ販売の半自動化を行い、マーケティングコスト35%削減 / リード獲得数増加に伴い売上200%達成' }
    ]
  };

  // 実績項目の動的生成
  function createAchievementItems(category) {
    const container = $(`#${category}-achievements`);
    achievementsData[category].forEach((item, index) => {
      const achievementItem = $(`
        <div class="achievement-item" data-aos="fade-up" data-aos-delay="${index * 100}">
          <h3 class="achievement-title">${item.title}</h3>
        </div>
      `);
      // ポップアップ要素を作成
      const popup = $(`
        <div class="achievement-popup">
          <h4>${item.title}</h4>
          <p>${item.detail}</p>
        </div>
      `);
      achievementItem.append(popup);
      container.append(achievementItem);

      // ホバーまたはクリックでポップアップ表示
      achievementItem.on('mouseenter click', function() {
        popup.fadeIn(200);
      }).on('mouseleave', function() {
        popup.fadeOut(200);
      });
    });
  }

  // 各カテゴリーの実績項目を生成
  createAchievementItems('sns');
  createAchievementItems('contents');
  createAchievementItems('consulting');
});
