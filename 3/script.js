const comet1 = document.querySelector('#c1');
const comet2 = document.querySelector('#c2');

let x1 = 400;
let y1 = -400;
let x2 = 2200;
let y2 = -400;

function move() {
  comet1.style.left = x1 + 'px';
  comet1.style.top = y1 + 'px';
  comet2.style.left = x2 + 'px';
  comet2.style.top = y2 + 'px';

  x1 -= 10;
  y1 += 10;
  x2 -= 10;
  y2 += 10;

  if(y1 > 1000) {
    x1 = 400;
    y1 = -400;
  }

  if(y2 > 1000) {
    x2 = 2400;
    y2 = -400;
  }

  requestAnimationFrame(move);
}

requestAnimationFrame(move);
