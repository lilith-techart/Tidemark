'use strict';
const slider = document.querySelector('#compare-range');
const comparison = document.querySelector('#comparison');
if (slider && comparison) {
  const update = () => comparison.style.setProperty('--split', `${slider.value}%`);
  slider.addEventListener('input', update);
  update();
}
