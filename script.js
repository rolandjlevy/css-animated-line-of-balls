const totalBalls = 20;
let count = 0;
const duration = 2;

const $ = (elem) => document.querySelector(elem);

while (count++ < totalBalls) {
  const inc = count * 0.025;
  const ball = document.createElement('div');
  ball.className = 'ball';
  ball.style.animationDelay = `${inc}s`;
  ball.style.animationDuration = `${duration + inc}s`;
  $('.container').appendChild(ball);
}