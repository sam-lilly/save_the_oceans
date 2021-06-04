const octopusSprite = new Image();
octopusSprite.src = "../images/octopus.png";

const ctx = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 352;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


class Octopus {
    constructor() {
        this.width = 60;
        this.height = 80;
        this.x = 1050;
        this.y = Math.floor(Math.random() * 300);
        this.speed = Math.random() + 3;
        this.top = false;
        this.bottom = true;
        this.up = Math.floor(Math.random() * 10);
    }

    draw() {
        drawSprite(octopusSprite, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    swim() {
        this.x -= this.speed;
        if (this.x <= -2000) {
        this.x = 650;
        this.y = Math.random() * 280;
        this.up = Math.floor(Math.random() * 10);
        }
        if (this.up > 5) {
        this.top = false;
        this.bottom = true;
        }
        if (this.up <= 5) {
        this.top = true;
        this.bottom = false;
        }
        if (this.y >= 280) {
        this.top = false;
        this.bottom = true;
        }
        if (this.bottom) {
        this.y -= 0.25;
        }
        if (this.top && this.y < 280) {
            this.y += 0.25;
        }
    }
}

export default Octopus;