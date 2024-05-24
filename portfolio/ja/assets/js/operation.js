$(document).ready(function() {
  // シーン、カメラ、レンダラーを初期化
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('scene-container').appendChild(renderer.domElement);

  // 環境光を追加
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  // スポットライトを追加
  const spotLight = new THREE.SpotLight(0xffffff, 1.5); // 光の強さを調整
  spotLight.position.set(0, 10, 10); // スポットライトの位置を調整
  scene.add(spotLight);

  // 実績データ
  const achievementsData = [
    { type: 'sns', title: 'Twitterフォロワー最大数', value: '130,000人', geometry: new THREE.SphereGeometry(2, 32, 32), color: 0x1DA1F2 }, // Twitterカラー
    { type: 'sns', title: 'YouTube登録者最大数', value: '50,000人', geometry: new THREE.TorusGeometry(2, 0.8, 16, 100), color: 0xFF0000 }, // YouTubeカラー
    { type: 'sns', title: 'Instagramフォロワー最大数', value: '20,000人', geometry: new THREE.DodecahedronGeometry(2), color: 0xE1306C }, // Instagramカラー
    { type: 'sns', title: '1日のリスト獲得最大数', value: '1,000人', geometry: new THREE.ConeGeometry(2, 3, 32), color: 0x00FFFF },
    { type: 'contents', title: '担当コンテンツ売上', value: '3ヶ月で200%増加', geometry: new THREE.BoxGeometry(3, 3, 3), color: 0x00FF00 }, // 緑
    { type: 'contents', title: '会社売上', value: '半年で社内利益180%達成', geometry: new THREE.OctahedronGeometry(2), color: 0xFFFF00 }, // 黄
    { type: 'consulting', title: '業務効率化コンサルティング', value: 'マーケティングコスト35%減', geometry: new THREE.CylinderGeometry(2, 2, 4, 32), color: 0x800080 }, // 紫
    { type: 'consulting', title: 'マーケティングコンサルティング', value: '売上200%達成', geometry: new THREE.IcosahedronGeometry(2), color: 0xFFA500 } // オレンジ
  ];

  // 実績オブジェクトを作成
  const achievementObjects = [];
  achievementsData.forEach((data, index) => {
    const material = new THREE.MeshLambertMaterial({ color: data.color });
    const object = new THREE.Mesh(data.geometry, material);

    // ランダムな位置に配置
    object.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );

    // オブジェクトに実績データを関連付ける
    object.userData = data;

    achievementObjects.push(object);
    scene.add(object);
  });

  // カメラの初期位置
  camera.position.z = 30;

  // アニメーションループ
  function animate() {
    requestAnimationFrame(animate);

    // オブジェクトをランダムに移動させる
    achievementObjects.forEach(object => {
      object.position.x += (Math.random() - 0.5) * 0.1;
      object.position.y += (Math.random() - 0.5) * 0.1;
      object.position.z += (Math.random() - 0.5) * 0.1;
      object.rotation.x += 0.01;
      object.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
  }

  animate();

  // ウィンドウリサイズ時の処理
  $(window).resize(function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  });

  // マウス座標
  const mouse = new THREE.Vector2();

  // マウス移動時のイベントリスナー
  window.addEventListener('mousemove', onMouseMove, false);

  function onMouseMove(event) {
    // マウス座標を正規化
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  }

  // レイキャスト
  const raycaster = new THREE.Raycaster();

  // クリックイベントリスナー
  window.addEventListener('click', onClick, false);

  function onClick() {
    // レイキャストを設定
    raycaster.setFromCamera(mouse, camera);

    // オブジェクトとの交差を判定
    const intersects = raycaster.intersectObjects(achievementObjects);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;

      // ポップアップを表示
      const popup = $(`
        <div class="popup">
          <h3>${clickedObject.userData.title}</h3>
          <p>${clickedObject.userData.value}</p>
          <button class="close-button">閉じる</button>
        </div>
      `);
      $('body').append(popup);
      popup.fadeIn(200);

      // ポップアップを閉じるボタン
      $('.close-button').on('click', function() {
        popup.fadeOut(200, function() {
          $(this).remove();
        });
      });
    }
  }
});
