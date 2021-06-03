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
    // frameX: 0,
    // frameY: 0,
    // ^need these if/when adding sprite sheets
    speed: 3
    // speed is how many px it is moving
    // moving: false
};

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
  drawSprite(scubaSprite, 0, 0, scuba.width, scuba.height, scuba.x, scuba.y, scuba.width, scuba.height)
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

function moveScuba(){
  if (keys['ArrowUp'] && scuba.y > -28) {
    scuba.y -= scuba.speed;
  }
  if (keys['ArrowDown'] && scuba.y < 156) {
    scuba.y += scuba.speed;
  }
  if (keys['ArrowLeft'] && scuba.x >= 3) {
    scuba.x -= scuba.speed;
  }
  if (keys['ArrowRight'] && scuba.x <= 373) {
    scuba.x += scuba.speed;
  }
}


