var alien,alienImg,bgImg,enemyImg,enemy,bullets,bulletImg;
var edges;
function preload(){
  bgImg=loadImage("bg.jpg")
  alienImg=loadImage("alien.png")
  enemyImg=loadImage("enemy1.png")
  bulletImg=loadImage("bullets.png");
}
function setup() {
  createCanvas(700,700);
  alien=createSprite(300, 600,30,30);
  alien.scale=0.8;
  alien.addImage("alienImg",alienImg);

  
  var rand=Math.round(random(1,700));
  console.log(rand);

}

function draw() {
  background(bgImg); 
    spawnEnemy();

    if(keyDown("LEFT_ARROW")){
      alien.velocityX=-4;
    }
    if(keyDown("RIGHT_ARROW")){
      alien.velocityX=4;
    }
  drawSprites();
}
function spawnEnemy(){
  if(World.frameCount%150===0){
    enemy=createSprite(300,10,20,20)
    enemy.scale=0.4;
    enemy.addImage("enemyImg",enemyImg);
    enemy.x=Math.round(random(100,500));
    enemy.velocityY=7;
  }
}