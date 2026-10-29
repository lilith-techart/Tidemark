'use strict';
document.querySelectorAll('.compare').forEach(comparison => {
  const slider = comparison.querySelector('input[type="range"]');
  if (!slider) return;
  const update = () => comparison.style.setProperty('--split', `${slider.value}%`);
  slider.addEventListener('input', update);
  update();
});
