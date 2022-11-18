var robot, robotImg
var obstcaleGroup
var background_factory, backgroundImg
var ground
var obstacle1Img,obstacle2Img,obstacle
var obstacle2
var GameOver, GameOverImg
var Restart, ResartImg
var gameState= "PLAY"
function preload(){
robotImg=loadImage("Images/RobotImg.png")
backgroundImg=loadImage("Images/Background.png")
obstacle1Img=loadImage("Images/Obstacle1.png")
obstacle2Img=loadImage("Images/Obstacle2.png")
RestartImg=loadImage("Images/RestartImg.png")
GameOverImg=loadImage("Images/gameOverImg.jpg")
}
function setup(){
  createCanvas(1000,1000);
  robot=createSprite(200,900)
  robot.addImage("spider",robotImg)
  robot.scale=0.25
  
  ground=createSprite(500,950,1000,5)
  ground.visible=true

  obstacleGroup=new Group()

  background_factory=createSprite(500,600,1000,1000)
  background_factory.addImage("factory",backgroundImg)
  background_factory.scale=2.25
  background_factory.depth=robot.depth
  robot.depth=robot.depth+1
  
  gameOver=createSprite(500,300)
  gameOver.addImage("gameOverButton", GameOverImg)
  gameOver.scale=1.1
  restart=createSprite(500,900)
  restart.addImage("restartButton",RestartImg)
  restart.visible=false
  gameOver.visible=false
}
function draw() 
{
  background(30);
  
  robot.collide(ground)
  if(ground.x<0){
    ground.x=500
    

  }
  if(robot.isTouching(obstacleGroup)){
  restart.visible=true
  gameOver.visible=true
  GameState="END"
 }
drawSprites();
createObstacles();

if (gameState==="PLAY"){
  ground.velocityX=-1
  if(keyDown(UP_ARROW)){
    robot.velocityY=-20
  }
  robot.velocityY=robot.velocityY+1
}
if(gameState==="END"){
ground.velocityX=0
obstacleGroup.setVelocityXEach(0)
}
}

function createObstacles(){
  if(frameCount%200==0){
    obstacle=createSprite(950,900,50,50)
obstacle.scale=0.2
obstacle.velocityX=-7
obstacleGroup.add(obstacle)
var myRandom=Math.round(random(1,2))

switch(myRandom){
  case 1: obstacle.addImage("barrel",obstacle1Img)
    break;
  case 2: obstacle.addImage("fire",obstacle2Img)

  }
  
}

}
