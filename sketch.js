var thickness,wall;
var weight,speed,bullet;
function setup() {
  createCanvas(1600,400);
 bullet =  createSprite(50, 200, 50, 50);
  speed = random(55,90);
  thickness = random(223,321)
  weight = random(100,60);
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(0);  
  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall.shapeColor = "grey";
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if (damage<5){
      wall.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x+Lbullet.width;
  wallLeftEdge = Lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
}