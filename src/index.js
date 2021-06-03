import Rainbow from './scripts/rainbow_fish';
import Nemo from './scripts/nemo';
import Octopus from './scripts/octopus';
import Jellyfish from './scripts/jellyfish';
import Seahorse from './scripts/seahorse';
import Turtle from './scripts/turtle';

import "./styles/index.scss";


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 352;

const keys = [];

const scuba = {
    x: 20,
    y: 40,
    width: 242,
    height: 192,
    speed: 3
};

const bottle = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 60,
  speed: 1.5
};

const bag = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 60,
  speed: 1.0
};

const cup = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 60,
  speed: 1.25
};

const straw = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 60,
  speed: 1.25
};


const rainbowFish = [];
rainbowFish.push(new Rainbow());
rainbowFish.push(new Rainbow());
rainbowFish.push(new Rainbow());

const nemos = [];
nemos.push(new Nemo());
nemos.push(new Nemo());
nemos.push(new Nemo());

const octopis = [];
octopis.push(new Octopus());

const jellyfishes = [];
jellyfishes.push(new Jellyfish());

const seahorses = [];
seahorses.push(new Seahorse());

const turtles = [];
turtles.push(new Turtle());

const scubaSprite = new Image();
scubaSprite.src = "../src/images/scuba.png";

const bottleSprite = new Image();
bottleSprite.src = "../src/images/glass_bottle.png";

const bagSprite = new Image();
bagSprite.src = "../src/images/plastic_bag.png";

const cupSprite = new Image();
cupSprite.src = "../src/images/solo_cup.png";

const strawSprite = new Image();
strawSprite.src = "../src/images/straw.png";


const background = new Image();
background.src = "../src/images/backdrop.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

let position = 0;
function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.abs(position) >= 3000) {
    position = 0;
  }
  ctx.drawImage(background, position, 0, 3650, canvas.height);

  drawSprite(bottleSprite, 0, 0, bottle.width, bottle.height, bottle.x, bottle.y, bottle.width, bottle.height);
  drawSprite(bagSprite, 0, 0, bag.width, bag.height, bag.x, bag.y, bag.width, bag.height);
  drawSprite(cupSprite, 0, 0, cup.width, cup.height, cup.x, cup.y, cup.width, cup.height);
  drawSprite(strawSprite, 0, 0, straw.width, straw.height, straw.x, straw.y, straw.width, straw.height);

  rainbowFish[0].draw();
  rainbowFish[0].swim();
  rainbowFish[1].draw();
  rainbowFish[1].swim();
  rainbowFish[2].draw();
  rainbowFish[2].swim();

  nemos[0].draw();
  nemos[0].swim();
  nemos[1].draw();
  nemos[1].swim();
  nemos[2].draw();
  nemos[2].swim();

  octopis[0].draw();
  octopis[0].swim();

  jellyfishes[0].draw();
  jellyfishes[0].swim();

  seahorses[0].draw();
  seahorses[0].swim();

  turtles[0].draw();
  turtles[0].swim();

  drawSprite(scubaSprite, 0, 0, scuba.width, scuba.height, scuba.x, scuba.y, scuba.width, scuba.height);

  moveScuba();

  bottleFloat();
  bagFloat();
  cupFloat();
  strawFloat();

  requestAnimationFrame(animate);
  position-=2;
}

animate();

window.addEventListener("keydown", function(e) {
  keys[e.key] = true;
});

window.addEventListener("keyup", function(e) {
  delete keys[e.key];
});

function moveScuba() {
  if (keys['ArrowUp'] && scuba.y > -28) {
    scuba.y -= scuba.speed;
  }
  if (keys['ArrowDown'] && scuba.y < 245) {
    scuba.y += scuba.speed;
  }
  if (keys['ArrowLeft'] && scuba.x >= -167) {
    scuba.x -= scuba.speed + 2;
  }
  if (keys['ArrowRight'] && scuba.x <= 373) {
    scuba.x += scuba.speed;
  }
}

function bottleFloat() {
  bottle.x -= bottle.speed;
  if (bottle.y < 100 && bottle.y > 10) {
    bottle.y -= 0.15;
  }
  if (bottle.y >= 100 && bottle.y < 300) {
    bottle.y += 0.15;
  }
  if (bottle.x <= -50) {
    bottle.x = 650;
  }
}

function bagFloat() {
  bag.x -= bag.speed;
  if (bag.y < 100 && bag.y > 10) {
    bag.y -= 0.15;
  }
  if (bag.y >= 100 && bag.y < 300) {
    bag.y += 0.15;
  }
  if (bag.x <= -50) {
    bag.x = 650;
  }
}

function cupFloat() {
  cup.x -= cup.speed;
  if (cup.y < 100 && cup.y > 10) {
    cup.y -= 0.15;
  }
  if (cup.y >= 100 && cup.y < 300) {
    cup.y += 0.15;
  }
  if (cup.x <= -50) {
    cup.x = 650;
  }
}

function strawFloat() {
  straw.x -= straw.speed;
  if (straw.y < 100 && straw.y > 10) {
    straw.y -= 0.15;
  }
  if (straw.y >= 100 && straw.y < 300) {
    straw.y += 0.15;
  }
  if (straw.x <= -50) {
    straw.x = 650;
  }
}



// can do something like if scuba.y or scuba.x (wherever the net is)
// intersects with the other sprite / either get a point or lose
// if intersect w trash count for that specific trash will go up
// keep running count of how many pieces of trash in the ocean
//  3000000000 straws
// have count 30000000 straws, 2999999998 left, collected 2