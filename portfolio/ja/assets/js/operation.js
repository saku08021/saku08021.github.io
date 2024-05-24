$(document).ready(function() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('scene-container').appendChild(renderer.domElement);

  const labelRenderer = new THREE.CSS2DRenderer();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.position = 'absolute';
  labelRenderer.domElement.style.top = '0';
  document.getElementById('scene-container').appendChild(labelRenderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff, 1.5);
  spotLight.position.set(0, 10, 10);
  scene.add(spotLight);

  const achievementsData = [
    { type: 'sns', title: 'Twitterフォロワー最大数', value: '130,000人', icon: 'fab fa-twitter', color: 0x1DA1F2 },
    { type: 'sns', title: 'YouTube登録者最大数', value: '50,000人', icon: 'fab fa-youtube', color: 0xFF0000 },
    { type: 'sns', title: 'Instagramフォロワー最大数', value: '20,000人', icon: 'fab fa-instagram', color: 0xE1306C },
    { type: 'sns', title: '1日のリスト獲得最大数', value: '1,000人', icon: 'fas fa-list', color: 0x00FFFF },
    { type: 'contents', title: '担当コンテンツ売上', value: '3ヶ月で200%増加', icon: 'fas fa-chart-line', color: 0x00FF00 },
    { type: 'contents', title: '会社売上', value: '半年で社内利益180%達成', icon: 'fas fa-building', color: 0xFFFF00 },
    { type: 'consulting', title: '業務効率化コンサルティング', value: 'マーケティングコスト35%減', icon: 'fas fa-chart-pie', color: 0x800080 },
    { type: 'consulting', title: 'マーケティングコンサルティング', value: '売上200%達成', icon: 'fas fa-comments', color: 0xFFA500 }
  ];

  const achievementObjects = [];
  achievementsData.forEach((data, index) => {
    const planeGeometry = new THREE.PlaneGeometry(3, 3);
    const material = new THREE.MeshBasicMaterial({ 
      color: data.color, 
      transparent: true,
      opacity: 0.8
    });
    const plane = new THREE.Mesh(planeGeometry, material);

    const iconHTML = `<i class="${data.icon} fa-2x"></i>`;
    const element = document.createElement('div');
    element.innerHTML = iconHTML;
    element.className = 'label';
    const icon = new THREE.CSS2DObject(element);
    icon.position.set(0, 0, 0.1);
    plane.add(icon);

    plane.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );

    plane.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );

    plane.userData = data;

    achievementObjects.push(plane);
    scene.add(plane);
  });

  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);

    achievementObjects.forEach(object => {
      object.position.x += (Math.random() - 0.5) * 0.1;
      object.position.y += (Math.random() - 0.5) * 0.1;
      object.position.z += (Math.random() - 0.5) * 0.1;
    });

    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }

  animate();

  $(window).resize(function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
  });

  const mouse = new THREE.Vector2();

  window.addEventListener('mousemove', onMouseMove, false);

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  }

  const raycaster = new THREE.Raycaster();

  window.addEventListener('click', onClick, false);

  function onClick() {
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(achievementObjects);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;

      const popup = $(`
        <div class="popup">
          <h3>${clickedObject.userData.title}</h3>
          <p>${clickedObject.userData.value}</p>
          <button class="close-button">閉じる</button>
        </div>
      `);
      $('body').append(popup);
      popup.fadeIn(200);

      $('.close-button').on('click', function() {
        popup.fadeOut(200, function() {
          $(this).remove();
        });
      });
    }
  }
});
