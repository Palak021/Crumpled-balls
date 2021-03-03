
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;	
var world;


function setup() {
	createCanvas(1000, 500);
	background("black")
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(800,450);
	paperObject = new Paper(200,100,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  

}

function keyPressed(){
	if(keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:200,y:-180})
	}
}