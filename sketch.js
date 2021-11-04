var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var police, movingPolice;
var i;

function preload(){

  pathImg=loadImage ("path.png");
  copImg=loadAnimation ("Runner-1.png", "Runner-2.png");
  boyImg=loadAnimation ("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 path=createSprite(200,200);
path.addImage ("path", pathImg)
path.velocityY =2;
path.scale=1.2;


boy=createSprite(200,250)
boy.addAnimation ("moving_runner", boyImg);
boy.scale=0.50;
  
police=createSprite(200,350);
police.addAnimation ("moving_police", copImg);
police.scale=0.05

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x  = World.mouseX;
  police.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  police.collide(edges[3]);
  police.collide(leftBoundary);
  police.collide(rightBoundary);
  
 

  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
