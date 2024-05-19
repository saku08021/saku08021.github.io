document.addEventListener('DOMContentLoaded', () => {
  // スキルバーのアニメーション
  const skillBars = document.querySelectorAll('.skill-bar');

  skillBars.forEach(bar => {
    const width = bar.dataset.width;

    bar.style.width = '0%';

    setTimeout(() => {
      bar.style.transition = 'width 1s ease-in-out';
      bar.style.width = width;
    }, 500);
  });
});
