var bullet,wall,thickness;
var speed,wieght;
var deformation;

function setup() {

  bullet = createSprite(50,200,50,50)
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  thickness = random(22,50);

  speed = random(223,321);
  wieght = random(30,52);

  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  

 

  bullet.velocityX = speed;

  if (wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
  

  damage = 0.5*wieght*speed*speed/thickness*thickness*thickness;

  if (damage>10)
  {
    bullet.shapeColor = "red";
  }
 else if (damage<10)
  {
    bullet.shapeColor = "green";
  }
  }
  drawSprites();
}