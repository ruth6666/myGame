var runner
 var runImg
 var idle
 var ground
 var invGround
 var groundImg
 var goldImg
 var silverImg
var bronzeImg
var coinsGroup;

function preload(){
runImg = loadAnimation("images1/run1.png","images1/run3.png","images1/run4.png");
idle = loadImage("images1/idle.png")
groundImg = loadImage("images1/ground2.png")
goldImg = loadAnimation("images1/Gold_a","images1/Gold_b","images1/Gold_c")
silverImg = loadAnimation("images1/Silver_a","images1/Silver_b","images1/Silver_c")
bronzeImg = loadAnimation("images1/Bronze_a","images1/Bronze_b","images1/Bronze_c")
 }
 function setup(){
createCanvas(1200,800)
  runner = createSprite(150,580,100,100)
  runner.scale = 2.0;
  runner.addImage(idle);
  runner.addAnimation("running",runImg)
  ground = createSprite(600,685,1200,20)
  invGround = createSprite(600,710,1200,10)
  invGround.visible = false;
  ground.addImage(groundImg);
  coinsGroup = new Group();
 }
 function draw(){
   background("white")
   runner.collide(invGround);
   if(keyDown("space")){
    ground.velocityX = -6
    runner.changeAnimation("running",runImg)
   }
   if(ground.x<0){
ground.x = ground.width/2;
   }  
   Coins();
    drawSprites();
 }
 function Coins(){
    if(World.frameCount%60 === 0){
       var Gcoin = createSprite(800,400,10,10);
       Gcoin.velocityX = -5
       var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: Gcoin.addAnimation("gold",goldImg);
              break;
      case 2: Gcoin.addAnimation("silver",silverImg);
              break;
      case 3: Gcoin.addAnimation("bronze",bronzeImg);
              break;
      default: break;
    }
    coinsGroup.add(Gcoin);
    }
 }