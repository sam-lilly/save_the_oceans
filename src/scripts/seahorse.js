const seahorseSprite = new Image();
seahorseSprite.src = "../images/seahorse.png";

const ctx = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 352;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


class Seahorse {
    constructor() {
        this.width = 60;
        this.height = 60;
        // this.x = 650;
        this.x = (Math.random() * 100) + 650;
        this.y = Math.floor(Math.random() * 300);
        this.speed = Math.random() + 2.75;
        this.top = false;
        this.bottom = true;
        this.up = Math.floor(Math.random() * 10);
    }

    draw() {
        drawSprite(seahorseSprite, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    swim() {
        this.x -= this.speed;
        if (this.x <= -850) {
        this.x = 650;
        this.y = Math.random() * 300;
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
        if (this.y >= 300) {
        this.top = false;
        this.bottom = true;
        }
        if (this.bottom) {
        this.y -= 0.2;
        }
        if (this.top && this.y < 300) {
            this.y += 0.2;
        }
    }
}

export default Seahorse;