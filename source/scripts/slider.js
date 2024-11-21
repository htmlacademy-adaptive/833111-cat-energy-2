document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const range = document.querySelector('.slider__range-js');
  const tools = document.querySelector('.slider__tools');

  range.addEventListener('input', () => {
    const value = parseInt(range.value, 10);
    slider.style.setProperty('--value', `${value}%`);
    tools.classList.remove('slider__tools--left-edge', 'slider__tools--right-edge');
    if (value === 0) {
      tools.classList.add('slider__tools--left-edge');
    } else if (value === 100) {
      tools.classList.add('slider__tools--right-edge');
    }
  });
});
