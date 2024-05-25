$(window).on('load', function() {
  $(".loading").fadeOut(300);
});

AOS.init();

document.addEventListener("DOMContentLoaded", function() {
  const countEl = document.getElementById('followers-count');
  let count = 0;
  const target = 250000;
  const increment = target / 100;

  function updateCount() {
    count += increment;
    if (count >= target) {
      countEl.textContent = target;
    } else {
      countEl.textContent = Math.ceil(count);
      requestAnimationFrame(updateCount);
    }
  }

  requestAnimationFrame(updateCount);
});

document.querySelectorAll('.skill-node, .quest').forEach(item => {
  item.addEventListener('click', () => {
    alert('Detail information displayed here');
  });
});
