
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball,ground;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(200,300,20);
	ground = new Ground(400,650,800,20);
	dustbin1 = new Dustbin(600,630,200,20);
	dustbin2 = new Dustbin(600-110,590,20,100);
	dustbin3 = new Dustbin(600+110,590,20,100);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 
 
  keyPressed();
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{
			x:85,
			y:-85
		});
		Matter.Body.applyForce(ball.body,ball.body.position,{
			x:0,
			y:71
		});

	}
}
