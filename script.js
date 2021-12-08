const $ = (elem) => document.querySelector(elem);
const $$ = (elem) => document.querySelectorAll(elem);

const totalBalls = 25;
const ballSize = 20;

let movement = Number($('#movement').value);
let duration = Number($('#duration').value);
let count = 0;
let inc;

while (count++ < totalBalls) {
  inc = count * movement / 5000;
  const ball = document.createElement('div');
  const options = {
    id: count,
    className: 'ball',
    style: `
      width: ${ballSize}px;
      height: ${ballSize * 1.25}px;
      animation-delay: ${inc}s;
      animation-duration: ${duration}s;
    `
  }
  Object.assign(ball, options);
  $('.container').appendChild(ball);
}

$('#movement').addEventListener('input', e => {
  movement = Number(e.target.value);
  $$('.ball').forEach((ball, index) => {
    inc = (index + 1) * movement / 5000;
    ball.style.animationDelay = `${inc}s`;
    ball.style.animationDuration = `${duration}s`;
  });
});

$('#duration').addEventListener('input', e => {
  duration = Number(e.target.value);
  $$('.ball').forEach((ball, index) => {
    inc = (index + 1) * movement / 5000;
    ball.style.animationDelay = `${inc}s`;
    ball.style.animationDuration = `${duration}s`;
  });
});
