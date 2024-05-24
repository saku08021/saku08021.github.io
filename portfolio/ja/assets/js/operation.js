<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio - 運用実績</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="assets/css/operation_style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/renderers/CSS2DRenderer.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.umd.js"></script>
</head>
<body>
  <header>
    <div class="container">
      <div class="header-content">
        <a href="index.html"><i class="fas fa-home fa-2x"></i></a> <span>運用実績</span>
      </div>
    </div>
  </header>

  <section id="scene-container" style="position: relative; width: 100%; height: 600px; overflow: hidden;"></section>

  <section class="skills" id="skills">
    <div class="container">
      <h2>スキルセット</h2>
      <div class="skill-grid">
        <div class="skill-item" data-aos="fade-up">
          <i class="fab fa-twitter fa-4x" style="color:#1DA1F2;"></i>
          <h3>SNSマーケティング</h3>
          <p>Twitter, Instagram, Youtubeなど<br>各プラットフォームの特性を活かした<br>戦略立案と運用</p>
        </div>
        <div class="skill-item" data-aos="fade-up" data-aos-delay="100">
          <i class="fas fa-chart-line fa-4x" style="color:#00FF00;"></i>
          <h3>Web解析</h3>
          <p>Google Analyticsなどを活用した<br>アクセス状況分析、課題発見、<br>改善提案</p>
        </div>
        <div class="skill-item" data-aos="fade-up" data-aos-delay="200">
          <i class="fas fa-search fa-4x" style="color:#FFA500;"></i>
          <h3>SEO</h3>
          <p>キーワード調査、コンテンツSEO、<br>テクニカルSEOなど、検索エンジンに<br>最適化されたサイト構築</p>
        </div>
        <div class="skill-item" data-aos="fade-up" data-aos-delay="300">
          <i class="fas fa-bullhorn fa-4x" style="color:#EA5455;"></i>
          <h3>広告運用</h3>
          <p>リスティング広告、ディスプレイ広告など<br>各種広告媒体の運用と効果測定</p>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="container">
      <h2><i class="fas fa-envelope fa-lg"></i> お問い合わせ</h2>
      <p>ご依頼やご相談は、お気軽にご連絡ください。</p>
      <form action="#" method="post">
        <div class="form-item">
          <input type="text" name="name" placeholder="お名前" required>
        </div>
        <div class="form-item">
          <input type="email" name="email" placeholder="メールアドレス" required>
        </div>
        <div class="form-item">
          <textarea name="message" placeholder="お問い合わせ内容" required></textarea>
        </div>
        <button type="submit" class="btn">送信</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>© 2024 山川 朔弥</p>
      <div class="social-links">
        <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
        <a href="#"><i class="fab fa-facebook fa-lg"></i></a>
      </div>
    </div>
  </footer>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  <script src="assets/js/operation.js"></script>
</body>
</html>
