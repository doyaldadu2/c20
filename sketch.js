function setup() {
  createCanvas(800,400);
object1=createSprite(400, 200, 50, 50);
object1.shapeColor="red"
object2=createSprite(200,180,50,50)
object2.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  object1.x=World.mouseX
  object1.y=World.mouseY; 
  
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2  ){
    object1.shapeColor="green"
    object2.shapeColor="green"
  }
  else{
    object1.shapeColor="red"
    object2.shapeColor="red"
  }
  drawSprites();
}