var fixedRect, movingRect;
var g1, g2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  g1 = createSprite(40,40,10,10);
  g1.shapeColor = color(40,40,100);
  g2 = createSprite(1,1,1,1);
  g2.shapeColor = color(100,100,0);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor = color(255,0,0);
    fixedRect.shapeColor = color(255,0,0);
  }
  if(!isTouching(fixedRect,movingRect)){
    movingRect.shapeColor = color(255,255,0);
    fixedRect.shapeColor = color(255,100,0);
  }
  if(isTouching(g1,movingRect)){
    movingRect.shapeColor = color(255,0,0);
    g1.shapeColor = color(255,0,0);
  }
  if(!isTouching(g1,movingRect)){
    movingRect.shapeColor = color(255,255,0);
    g1.shapeColor = color(255,100,100);
  }
  drawSprites();
}



