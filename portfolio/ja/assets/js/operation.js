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
  const spotLight = new THREE.SpotLight(0xffffff, 1);
  spotLight.position.set(10, 20, 10);
  scene.add(spotLight);

  // 経歴データ
  const careerData = [
    { year: '2023', text: 'SaaS開発企業に取締役として参画' },
    { year: '2022', text: '個人事業主として戦略コンサルを行う' },
    { year: '2021', text: '株式会社Mにマーケティング責任者として参画' },
    { year: '2020', text: '中高生向けの個人塾経営を行う' }
  ];

  // フォントローダー
  const loader = new THREE.FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    // フォントの読み込みが完了してからオブジェクトを作成

    // 経歴キューブを作成
    const careerCubeGroup = new THREE.Group();
    const cubeSize = 3;
    const cubeSpacing = 5;

    careerData.forEach((data, index) => {
      const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00a8ff });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

      // テキストを作成
      const textGeometry = new THREE.TextGeometry(data.year, {
        font: font,
        size: 1,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: false
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-1.5, 0, 1.6); // キューブ前面に配置
      cube.add(textMesh);

      cube.position.y = index * (cubeSize + cubeSpacing) - (careerData.length * (cubeSize + cubeSpacing) / 2);
      careerCubeGroup.add(cube);
    });

    scene.add(careerCubeGroup);

    // 実績データ (PDFから抜粋)
    const achievementData = [
      { label: 'Twitterフォロワー', value: 130000, unit: '人達成' },
      { label: 'コンテンツ売上', value: 200, unit: '%増加' },
      { label: 'SaaSツール開発', value: 1, unit: 'リリース' }
    ];

    // 実績バーチャートを作成
    const achievementBarGroup = new THREE.Group();
    const barWidth = 2;
    const barDepth = 1;
    const barSpacing = 4;
    const maxBarHeight = 10;

    achievementData.forEach((data, index) => {
      const barHeight = (data.value / Math.max(...achievementData.map(d => d.value))) * maxBarHeight;
      const barGeometry = new THREE.BoxGeometry(barWidth, barHeight, barDepth);
      const barMaterial = new THREE.MeshLambertMaterial({ color: 0xff9900 });
      const bar = new THREE.Mesh(barGeometry, barMaterial);

      // ラベルテキストを作成
      const labelGeometry = new THREE.TextGeometry(data.label, {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: false
      });
      const labelMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial);
      labelMesh.position.set(-(barWidth + 2), 0, 0);
      bar.add(labelMesh);

      // 数値テキストを作成
      const valueGeometry = new THREE.TextGeometry(data.value + data.unit, {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: false
      });
      const valueMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const valueMesh = new THREE.Mesh(valueGeometry, valueMaterial);
      valueMesh.position.set(0, barHeight / 2 + 0.5, 0);
      bar.add(valueMesh);

      bar.position.x = index * (barWidth + barSpacing) - (achievementData.length * (barWidth + barSpacing) / 2);
      achievementBarGroup.add(bar);
    });

    achievementBarGroup.position.set(0, -10, 0); 
    scene.add(achievementBarGroup);

    // スキルデータ
    const skillData = [
      { name: 'SNSマーケティング', icon: 'fab fa-twitter', level: 9 },
      { name: 'Webデザイン', icon: 'fas fa-palette', level: 8 },
      { name: 'Web開発', icon: 'fas fa-code', level: 7 },
      { name: 'AI技術', icon: 'fas fa-robot', level: 6 }
    ];

    // スキルオブジェクトを作成
    const skillGroup = new THREE.Group();
    const iconSize = 3;
    const skillSpacing = 8;

    skillData.forEach((data, index) => {
      const iconGeometry = new THREE.PlaneGeometry(iconSize, iconSize);
      const iconMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: data.level / 10 
      });
      const icon = new THREE.Mesh(iconGeometry, iconMaterial);

      // Font Awesomeのアイコンを設定
      icon.name = data.name; 
      icon.userData.html = `<i class="${data.icon} fa-3x"></i>`; 

      icon.position.x = index * (iconSize + skillSpacing) - (skillData.length * (iconSize + skillSpacing) / 2); 
      skillGroup.add(icon);
    });

    skillGroup.position.set(0, 10, 0);
    scene.add(skillGroup);

    // カメラの初期位置
    camera.position.z = 25;

    // アニメーションループ
    function animate() {
      requestAnimationFrame(animate);

      // オブジェクトを回転させる
      careerCubeGroup.rotation.y += 0.01;
      achievementBarGroup.rotation.x += 0.01;

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
      const intersects = raycaster.intersectObjects(skillGroup.children);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        // ポップアップを表示
        const popup = $(`
          <div class="popup">
            ${clickedObject.userData.html}
            <h3>${clickedObject.name}</h3>
            <p>説明文が入ります。スキルレベルは${clickedObject.material.opacity * 10}です。</p>
          </div>
        `);
        $('body').append(popup);

        // ポップアップを閉じるボタン
        const closeButton = $('<button class="close-button">閉じる</button>');
        popup.append(closeButton);
        closeButton.on('click', function() {
          popup.remove();
        });
      }
    }
  });
});
