// import "./styles/index.scss";
// import "./images/nemo.png";
// import "./images/rainbow_fish.png";
// import "./images/turtle.png";
// import "./images/seahorse.png";
// import "./images/jellyfish.png";
// import "./images/octopus.png";
// import "./images/glass_bottle.png";
// import "./images/straw.png";
// import "./images/solo_cup.png";
// import "./images/plastic_bag.png";
// import "./images/scuba.png";
// import "./images/backdrop.png";

// import canvasExample from "./scripts/canvas";
// import Square from "./scripts/square";
// ^how to import canvas class examples


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

const rainbow = {
  x: 650,
  y: Math.random() * 200,
  // y: Math.floor(Math.random() * 191) + 10,
  // ^supposed to be range between 8-200
  // ^look this up when google works tomorrow
  // y: 10,
  width: 60,
  height: 60,
  speed: 2.25
};

const nemo = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 60,
  speed: 2.5
};

const jellyfish = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 60,
  speed: 1.5
};

const octopus = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 80,
  speed: 3
};

const seahorse = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 60,
  speed: 2.75
};

const turtle = {
  x: 650,
  y: Math.random() * 200,
  width: 60,
  height: 60,
  speed: 2.25
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

const scubaSprite = new Image();
scubaSprite.src = "../src/images/scuba.png";

const rainbowSprite = new Image();
rainbowSprite.src = "../src/images/rainbow_fish.png";

const nemoSprite = new Image();
nemoSprite.src = "../src/images/nemo.png";

const jellyfishSprite = new Image();
jellyfishSprite.src = "../src/images/jellyfish.png";

const octopusSprite = new Image();
octopusSprite.src = "../src/images/octopus.png";

const seahorseSprite = new Image();
seahorseSprite.src = "../src/images/seahorse.png";

const turtleSprite = new Image();
turtleSprite.src = "../src/images/turtle.png";


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

  drawSprite(rainbowSprite, 0, 0, rainbow.width, rainbow.height, rainbow.x, rainbow.y, rainbow.width, rainbow.height);
  drawSprite(nemoSprite, 0, 0, nemo.width, nemo.height, nemo.x, nemo.y, nemo.width, nemo.height);
  drawSprite(jellyfishSprite, 0, 0, jellyfish.width, jellyfish.height, jellyfish.x, jellyfish.y, jellyfish.width, jellyfish.height);
  drawSprite(octopusSprite, 0, 0, octopus.width, octopus.height, octopus.x, octopus.y, octopus.width, octopus.height);
  drawSprite(seahorseSprite, 0, 0, seahorse.width, seahorse.height, seahorse.x, seahorse.y, seahorse.width, seahorse.height);
  drawSprite(turtleSprite, 0, 0, turtle.width, turtle.height, turtle.x, turtle.y, turtle.width, turtle.height);

  drawSprite(bottleSprite, 0, 0, bottle.width, bottle.height, bottle.x, bottle.y, bottle.width, bottle.height);
  drawSprite(bagSprite, 0, 0, bag.width, bag.height, bag.x, bag.y, bag.width, bag.height);
  drawSprite(cupSprite, 0, 0, cup.width, cup.height, cup.x, cup.y, cup.width, cup.height);
  drawSprite(strawSprite, 0, 0, straw.width, straw.height, straw.x, straw.y, straw.width, straw.height);


  drawSprite(scubaSprite, 0, 0, scuba.width, scuba.height, scuba.x, scuba.y, scuba.width, scuba.height);

  moveScuba();
  rainbowSwim();
  nemoSwim();
  jellyfishSwim();
  octopusSwim();
  seahorseSwim();
  turtleSwim();

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
  if (keys['ArrowDown'] && scuba.y < 156) {
    scuba.y += scuba.speed;
  }
  if (keys['ArrowLeft'] && scuba.x >= -167) {
    scuba.x -= scuba.speed + 2;
  }
  if (keys['ArrowRight'] && scuba.x <= 373) {
    scuba.x += scuba.speed;
  }
}

// ^above is for background and moving scuba left, right, up, down


function rainbowSwim() {
  rainbow.x -= rainbow.speed;
  if (rainbow.y < 100 && rainbow.y > 10) {
    rainbow.y -= 0.2;
  }
  if (rainbow.y >= 100 && rainbow.y < 300) {
    rainbow.y += 0.2;
  }
}

function nemoSwim() {
  nemo.x -= nemo.speed;
  if (nemo.y < 100 && nemo.y > 10) {
    nemo.y -= 0.25;
  }
  if (nemo.y >= 100 && nemo.y < 300) {
    nemo.y += 0.25;
  }
}

function jellyfishSwim() {
  jellyfish.x -= jellyfish.speed;
  if (jellyfish.y < 100 && jellyfish.y > 10) {
    jellyfish.y -= 0.15;
  }
  if (jellyfish.y >= 100 && jellyfish.y < 300) {
    jellyfish.y += 0.15;
  }
}

function octopusSwim() {
  octopus.x -= octopus.speed;
  if (octopus.y < 100 && octopus.y > 10) {
    octopus.y -= 0.25;
  }
  if (octopus.y >= 100 && octopus.y < 300) {
    octopus.y += 0.25;
  }
}

function seahorseSwim() {
  seahorse.x -= seahorse.speed;
  if (seahorse.y < 100 && seahorse.y > 10) {
    seahorse.y -= 0.2;
  }
  if (seahorse.y >= 100 && seahorse.y < 300) {
    seahorse.y += 0.2;
  }
}

function turtleSwim() {
  turtle.x -= turtle.speed;
  if (turtle.y < 100 && turtle.y > 10) {
    turtle.y -= 0.25;
  }
  if (turtle.y >= 100 && turtle.y < 300) {
    turtle.y += 0.25;
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
}

function bagFloat() {
  bag.x -= bag.speed;
  if (bag.y < 100 && bag.y > 10) {
    bag.y -= 0.15;
  }
  if (bag.y >= 100 && bag.y < 300) {
    bag.y += 0.15;
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
}

function strawFloat() {
  straw.x -= straw.speed;
  if (straw.y < 100 && straw.y > 10) {
    straw.y -= 0.15;
  }
  if (straw.y >= 100 && straw.y < 300) {
    straw.y += 0.15;
  }
}



// const images = {};
// images.rainbowFish = new Image();
// images.rainbowFish.src = "../src/images/rainbow_fish.png";

// const rainbowWidth = 32;
// const rainbowHeight = 32;


// can do something like if scuba.y or scuba.x (wherever the net is)
// intersects with the other sprite / either get a point or lose
// if intersect w trash count for that specific trash will go up
// keep running count of how many pieces of trash in the ocean
//  3000000000 straws
// have count 30000000 straws, 2999999998 left, collected 2