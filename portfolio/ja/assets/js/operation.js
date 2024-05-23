$(window).on('load', function(){
  $(".loading").fadeOut(300);
});

// ページの読み込みを待つ
$(document).ready(function() {
  // シーン、カメラ、レンダラーを初期化
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.getElementById('scene-container').appendChild( renderer.domElement );

  // 環境光を追加
  const ambientLight = new THREE.AmbientLight( 0x404040 ); 
  scene.add( ambientLight );

  // スポットライトを追加
  const spotLight = new THREE.SpotLight( 0xffffff, 1 );
  spotLight.position.set( 10, 20, 10 );
  scene.add( spotLight );

  // 立方体を作成
  const geometry = new THREE.BoxGeometry( 5, 5, 5 );
  const material = new THREE.MeshLambertMaterial( { color: 0x00a8ff } ); // 鮮やかな青
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 20;

  // アニメーションループ
  const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();

  // ウィンドウリサイズ時の処理
  $(window).resize(function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  });
});
