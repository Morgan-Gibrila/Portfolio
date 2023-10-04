let bubbles = []; // Array for bubble object
let colorPalette = []; // Array of color sets 
let maxBubbles = 5; // Maximum amount of bubbles
let mousePosition; // mouse possition
let accentColor = document.documentElement;


function setup(){
    // --- Assigning canvas to div ---
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("bubble_Background_container");
    
    // creating 2D array for color sets
    for ( let i = 0; i <5; i++){
        colorPalette[i] = [];
    }

    // --- Setting color pallets ---

    // - First pallet - 
    colorPalette[0][0] = color('#ee82ee'); 
    colorPalette[0][1] = color('#3cb371'); 
    colorPalette[0][2] = color('#ffa500'); 
    colorPalette[0][3] = color('#0000ff'); 
    colorPalette[0][4] = color('#ff0000');

    // - Second pallet - 
    colorPalette[1][0] = color('#21B3FC'); 
    colorPalette[1][1] = color('#1F74F2'); 
    colorPalette[1][2] = color('#29D8E6'); 
    colorPalette[1][3] = color('#21FCD0'); 
    colorPalette[1][4] = color('#1FF28B'); 

    // - Third pallet - 
    colorPalette[2][0] = color('#1be7ff'); 
    colorPalette[2][1] = color('#E2B1B1'); 
    colorPalette[2][2] = color('#6eeb83'); 
    colorPalette[2][3] = color('#e8aa14'); 
    colorPalette[2][4] = color('#B8336A');

    // - Forth pallet - 
    colorPalette[3][0] = color('#ffffff'); 
    colorPalette[3][1] = color('#ff5349'); 
    colorPalette[3][2] = color('#2a52be'); 
    colorPalette[3][3] = color('#6082b6'); 
    colorPalette[3][4] = color('#E1B7BF'); 

    // - Fifth pallet - 
    colorPalette[4][0] = color(''); 
    colorPalette[4][1] = color(''); 
    colorPalette[4][2] = color(''); 
    colorPalette[4][3] = color(''); 
    colorPalette[4][4] = color('');

    // - Selecting a random palette - 
    let selectedPalette = Math.round(random(3));
    console.log("color palette: " + selectedPalette);

    // - Set first color of color pallet as accent/hover color - 
    accentColor.style.setProperty('--cl-hover',colorPalette[selectedPalette][1]);

    // --- Instanciating bubbles & Setting each to one to a color from a pallet --- 
    for ( let i = 0; i < maxBubbles; i++){
        
        bubbles.push(new Bubble());
        bubbles[i].setColor(colorPalette[selectedPalette][i]);
    }

    // - Set the radius of the bubbles based on screen size - 
    setBubbleSize();
    
    noStroke();
    mousePosition = createVector(mouseX,mouseY);
}

function draw(){
    background(255);
    // --- Updating mouse possition vector --- 
    updateMousePos(mouseX,mouseY);

    // --- Checking the moving diraction of each bubble & updating it
    for ( let i = 0; i < bubbles.length; i++){
        bubbles[i].moveBubble();
        bubbles[i].updateBubble();
    }

    // --- Creating a mouse cursor --- 
    // fill(48,155,29);
    // fill(0,0,0);
    // ellipse(mousePosition.x, mousePosition.y, 200);
}

// --- Updating mouse possition vector function --- 
function updateMousePos(x, y){
    mousePosition.x = x;
    mousePosition.y = y;
}

// --- Updating canvas size on window resize ---
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setBubbleSize();
}

function setBubbleSize(){
    if( windowWidth < 600 ){
        for ( let i = 0; i < bubbles.length; i++){
            bubbles[i].bubbleRadius = 250;
        }
    } else{
        for ( let i = 0; i < bubbles.length; i++){
            bubbles[i].bubbleRadius = 500;
        }
    }
}

// --- The object class ---
class Bubble{
    constructor(){
        this.position = createVector(Math.random() * windowWidth, Math.random() * windowHeight);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(1.5);
        this.bubbleRadius = 500;
        this.color;
    }
     
    // - Checking if the bubbles should bouce off the canvcas walls -
    moveBubble(){
        
        if (this.position.x <= (this.bubbleRadius/2)){
            this.position.x = (this.bubbleRadius/2);
            this.velocity.x *= -1;
        } else if (this.position.x > windowWidth - (this.bubbleRadius/2) ){
            this.position.x = windowWidth - (this.bubbleRadius/2);
            this.velocity.x *= -1;
        }

        if (this.position.y <= (this.bubbleRadius/2) ){
            this.position.y = (this.bubbleRadius/2);
            this.velocity.y *= -1;
        } else if (this.position.y > windowHeight - (this.bubbleRadius/2) ){
            this.position.y = windowHeight - (this.bubbleRadius/2);
            this.velocity.y *= -1;
        }
    
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    // - Setting one given color from a color pallet to an instance of this class - 
    setColor(color){
        this.color = color;
    }

    // - Visually updating the Object -
    updateBubble(){
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.bubbleRadius);
    }
}

/* --- Nuke Zone ---

*/