const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const c4 = document.querySelector('#c4');
const c5 = document.querySelector('#c5');
const shark = document.querySelector('#shark');

let pos1 = 1;
let pos2 = 25;
let pos3 = 55;
let pos4 = 75;
let pos5 = 90;
let posshark = 10;
let spdshark = .2;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const spd = [];
for(let i = 0; i < 5; i++) {
  spd[i] = random(.1, .3);
}

function move() {
  pos1 += spd[0];
  pos2 += spd[1];
  pos3 += spd[2];
  pos4 += spd[3];
  pos5 += spd[4];
  c1.style.left = pos1 + '%';
  c2.style.left = pos2 + '%';
  c3.style.left = pos3 + '%';
  c4.style.left = pos4 + '%';
  c5.style.left = pos5 + '%';

  posshark += spdshark;
  shark.style.left = posshark + '%';

  if(pos1 > 100) {
    pos1 = -11;
  }

  if(pos2 > 100) {
    pos2 = -11;
  }

  if(pos3 > 100) {
    pos3 = -11;
  }

  if(pos4 > 100) {
    pos4 = -11;
  }

  if(pos5 > 100) {
    pos5 = -11;
  }

  if(posshark > 90) {
    spdshark = -.2;
    shark.style.transform = 'scaleX(1)';
  }

  if(posshark < 0) {
    spdshark = .2;
    shark.style.transform = 'scaleX(-1)';
  }

  requestAnimationFrame(move);
}
requestAnimationFrame(move);
