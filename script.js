const $ = (elem) => document.querySelector(elem);
const $$ = (elem) => document.querySelectorAll(elem);

const totalBalls = 30;
const ballSize = 15;

let movement = Number($('#movement').value);
let duration = Number($('#duration').value);
let count = 0;
let inc;

const getBackground = (hue) => {
  return `radial-gradient(circle at 25% 70%, 
    hsl(${hue}, 100%, 60%) 5%, 
    hsl(${hue - 20}, 100%, 20%) 65%, 
    hsl(${hue}, 100%, 60%) 125%
  )`;
}

while (count++ < totalBalls) {
  inc = count * movement / 250;
  const ball = document.createElement('div');
  const background = getBackground(60 + count * 10);
  const options = {
    id: count,
    className: 'ball',
    style: `
      width: ${ballSize}px;
      height: ${ballSize * 1.25}px;
      animation-delay: ${inc}s;
      animation-duration: ${duration}s;
      background: ${background};
    `
  }
  Object.assign(ball, options);
  $('.container').appendChild(ball);
}
 
const updateAnimation = () => {
  $$('.ball').forEach((ball, index) => {
    inc = (index + 1) * movement / 250;
    ball.style.animationDelay = `${inc}s`;
    ball.style.animationDuration = `${duration}s`;
  });
}

$('#movement').addEventListener('input', e => {
  movement = Number(e.target.value);
  updateAnimation();
});

$('#duration').addEventListener('input', e => {
  duration = Number(e.target.value);
  updateAnimation();
});
