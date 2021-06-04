import Rainbow from './scripts/rainbow_fish';
import Nemo from './scripts/nemo';
import Octopus from './scripts/octopus';
import Jellyfish from './scripts/jellyfish';
import Seahorse from './scripts/seahorse';
import Turtle from './scripts/turtle';
import Bottle from './scripts/glass_bottle';
import Bag from './scripts/plastic_bag';
import Cup from './scripts/solo_cup';
import Straw from './scripts/straw';
import Bubble from './scripts/bubble';

import "./styles/index.scss";


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 352;


const scuba = {
    x: 20,
    y: 40,
    width: 242,
    height: 192,
    speed: 3
};


const keys = [];
const allFish = [];

const rainbowFish = [];
rainbowFish.push(new Rainbow());
rainbowFish.push(new Rainbow());
rainbowFish.push(new Rainbow());
rainbowFish.forEach(fish => {
  allFish.push(fish);
})

const nemos = [];
nemos.push(new Nemo());
nemos.push(new Nemo());
nemos.push(new Nemo());
nemos.forEach(nemo => {
  allFish.push(nemo);
})

const octopis = [];
octopis.push(new Octopus());
allFish.push(octopis[0]);

const jellyfishes = [];
jellyfishes.push(new Jellyfish());
jellyfishes.push(new Jellyfish());
jellyfishes.forEach(jellyfish => {
  allFish.push(jellyfish);
})

const seahorses = [];
seahorses.push(new Seahorse());
allFish.push(seahorses[0]);

const turtles = [];
turtles.push(new Turtle());
allFish.push(turtles[0]);

const bottles = [];
bottles.push(new Bottle());
bottles.push(new Bottle());
bottles.push(new Bottle());
bottles.push(new Bottle());
bottles.push(new Bottle());

const bags = [];
bags.push(new Bag());
bags.push(new Bag());
bags.push(new Bag());
bags.push(new Bag());
bags.push(new Bag());

const cups = [];
cups.push(new Cup());
cups.push(new Cup());
cups.push(new Cup());
cups.push(new Cup());
cups.push(new Cup());

const straws = [];
straws.push(new Straw());
straws.push(new Straw());
straws.push(new Straw());
straws.push(new Straw());
straws.push(new Straw());

const bubbles = [];
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());

bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());
bubbles.push(new Bubble());


const scubaSprite = new Image();
scubaSprite.src = "../src/images/scuba.png";

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
  jellyfishes[1].draw();
  jellyfishes[1].swim();

  seahorses[0].draw();
  seahorses[0].swim();

  turtles[0].draw();
  turtles[0].swim();

  bottles[0].draw();
  bottles[0].float();
  bottles[1].draw();
  bottles[1].float();
  bottles[2].draw();
  bottles[2].float();
  bottles[3].draw();
  bottles[3].float();
  bottles[4].draw();
  bottles[4].float();

  bags[0].draw();
  bags[0].float();
  bags[1].draw();
  bags[1].float();
  bags[2].draw();
  bags[2].float();
  bags[3].draw();
  bags[3].float();
  bags[4].draw();
  bags[4].float();

  cups[0].draw();
  cups[0].float();
  cups[1].draw();
  cups[1].float();
  cups[2].draw();
  cups[2].float();
  cups[3].draw();
  cups[3].float();
  cups[4].draw();
  cups[4].float();

  straws[0].draw();
  straws[0].float();
  straws[1].draw();
  straws[1].float();
  straws[2].draw();
  straws[2].float();
  straws[3].draw();
  straws[3].float();
  straws[4].draw();
  straws[4].float();

  drawSprite(scubaSprite, 0, 0, scuba.width, scuba.height, scuba.x, scuba.y, scuba.width, scuba.height); 

  bubbles.forEach(bubble => {
    bubble.draw();
    bubble.float();
  })

  moveScuba();

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

let fishCount = 0;
let bottleCount = 0;
let bagCount = 0;
let cupCount = 0;
let strawCount = 0;


function moveScuba() {
  if (keys['ArrowUp'] && scuba.y > -60) {
    scuba.y -= scuba.speed;
  }
  if (keys['ArrowDown'] && scuba.y < 255) {
    scuba.y += scuba.speed;
  }
  if (keys['ArrowLeft'] && scuba.x >= -210) {
    scuba.x -= scuba.speed + 2;
  }
  if (keys['ArrowRight'] && scuba.x <= 373) {
    scuba.x += scuba.speed;
  }
  allFish.forEach(fish => {
      if ((((fish.x - (scuba.x + 242)) > -60) && ((fish.x - (scuba.x + 242)) < -10)) && (((fish.y - scuba.y) < 48) && ((fish.y - scuba.y) > 33))) {
        fish.x = (Math.random() * 400) + 650;
        fish.y = Math.floor(Math.random() * 300);
        fish.speed = Math.random() + 2.5;
        fishCount += 1;
        console.log(fishCount);
        // gameover();
    }
  });
  bottles.forEach(bottle => {
    if ((((bottle.x - (scuba.x + 242)) > -70) && ((bottle.x - (scuba.x + 242)) < -10)) && (((bottle.y - scuba.y) < 50) && ((bottle.y - scuba.y) > 30))) {
      bottle.x = (Math.random() * 400) + 650;
      bottle.y = Math.floor(Math.random() * 300);
      bottle.speed = Math.random() + 1.5;
      bottleCount += 1;
      console.log(bottleCount);
    }
  });
  bags.forEach(bag => {
    if ((((bag.x - (scuba.x + 242)) > -70) && ((bag.x - (scuba.x + 242)) < -10)) && (((bag.y - scuba.y) < 60) && ((bag.y - scuba.y) > 20))) {
      bag.x = (Math.random() * 400) + 650;
      bag.y = Math.floor(Math.random() * 300);
      bag.speed = Math.random() + 1.25;
      bagCount += 1;
      console.log(bagCount);
    }
  });
  cups.forEach(cup => {
    if ((((cup.x - (scuba.x + 242)) > -70) && ((cup.x - (scuba.x + 242)) < -10)) && (((cup.y - scuba.y) < 50) && ((cup.y - scuba.y) > 30))) {
      cup.x = (Math.random() * 400) + 650;
      cup.y = Math.floor(Math.random() * 300);
      cup.speed = Math.random() + 1.25;
      cupCount += 1;
      console.log(cupCount);
    }
  });
  straws.forEach(straw => {
    if ((((straw.x - (scuba.x + 242)) > -70) && ((straw.x - (scuba.x + 242)) < -10)) && (((straw.y - scuba.y) < 50) && ((straw.y - scuba.y) > 30))) {
      straw.x = (Math.random() * 400) + 650;
      straw.y = Math.floor(Math.random() * 300);
      straw.speed = Math.random() + 1.25;
      strawCount += 1;
      console.log(strawCount);
    }
  });

}

// function gameover() {

// }


// can do something like if scuba.y or scuba.x (wherever the net is)
// intersects with the other sprite / either get a point or lose
// if intersect w trash count for that specific trash will go up
// keep running count of how many pieces of trash in the ocean
//  3000000000 straws
// have count 30000000 straws, 2999999998 left, collected 2