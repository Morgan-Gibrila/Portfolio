let Bubbles = [];
let maxBubbles = 5;

function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("bubble_Background_container");
    noStroke();
    for ( let i = 0; i < maxBubbles; i++){
        Bubbles.push(new Bubble());
        Bubbles[i].inicialDirection();
    }
}

function draw(){
    background(255);

    for ( let i = 0; i < Bubbles.length; i++){
        Bubbles[i].moveBubble();
        Bubbles[i].updateBubble();
    }

    fill(48,155,29);
    ellipse(mouseX,mouseY,50);
}

class Bubble{
    constructor(){
        this.posX = Math.random() * windowWidth;
        this.posY = Math.random() * windowHeight;
        this.increasX;
        this.increasY;
        this.startDirectionX = Math.random() * 2;
        this.startDirectionY = Math.random() * 2;
        this.speed = 2; 
        this.bubbleSize = 200;
        this.red = Math.random() * 256;
        this.green = Math.random() * 256;
        this.blue = Math.random() * 256;
    }

    inicialDirection(){
        console.log(this.startDirectionX);
        if (this.startDirectionX >= 1 ){
            this.increasX = true;
        }else if ( this.startDirectionX < 1 ){
            this.increasX = false;
        }
        if (this.startDirectionY >= 1 ){
            this.increasY = true;
        }else if ( this.startDirectionY < 0 ){
            this.increasY = false;
        }
    }

    moveBubble( ){
        if (this.posX <= 0 ){
            this.increasX = true;
        } else if (this.posX > windowWidth){
            this.increasX = false;
        }
        if (this.posY <= 0 ){
            this.increasY = true;
        } else if (this.posY > windowHeight){
            this.increasY = false;
        }
    
        if (this.increasX){
            this.posX = this.posX + this.speed;
        } else {
            this.posX = this.posX - this.speed;
        }
        if (this.increasY){
            this.posY = this.posY + this.speed
        } else {
            this.posY = this.posY - this.speed;
        }
    }

    updateBubble(){
        fill(this.red, this.green, this.blue);
        ellipse(this.posX, this.posY,this.bubbleSize);
    }
}
