let x,y,k,p;
const pixelWidth = 5;

function setup() {
    createCanvas(1200, 800);
    x = 0
    y = 0
    k=1000
    pX = [-1,1]
    pY = [-1,1]
    background(0);
}

function draw() {
   
    translate(width/2,height/2);
    
    randX = random(pX)
    randY = random(pY)
    stroke(255);
    strokeWeight(3);
    newX = x+randX*pixelWidth;
    newY = y+randY*pixelWidth;
    line(x,y,newX,newY)
    x = newX;
    y = newY;
    k--;
    if(k<0) noLoop();
}

