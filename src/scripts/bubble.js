const bubbleSprite = new Image();
bubbleSprite.src = "../images/air_bubble.png"

const ctx = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 352;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

class Bubble {
    constructor() {
        this.width = 32;
        this.height = 32;
        this.x = Math.random() * 3000;
        this.y = (Math.random() * 500) - 352;
        this.speed = Math.random() + 1;
        this.left = true;
    }

    draw() {
        drawSprite(bubbleSprite, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    float() {
        this.y -= this.speed;
        if (this.y <= -100) {
            this.y = 352;
            this.x = Math.random() * 3000;
        }
        if (this.x <= -10) {
            this.y = 352;
            this.x = Math.random() * 3000;
        }
        this.x -= 2;
    }

}

export default Bubble;