
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new Bob(width/2,height-300,60);
	Bob2 = new Bob(710,height-300,60);
	Bob3 = new Bob(650,height-300,60);
	Bob4 = new Bob(830,height-300,60);
	Bob5 = new Bob(890,height-300,60);
	
	roof = new Roof(width/2,height-550,330,40);

	rope1 = new Chain(Bob3.body,roof.body,-140,0);

  rope2 = new Chain(Bob2.body,roof.body,-120,0);
  
  //rope3 = new Chain(Bob1.body,roof.body,-100,0);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  console.log(rope1.offsetX);
  
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  roof.display();
  rope1.display();
  rope2.display();
  drawSprites();
  text (mouseX+" , "+mouseY,mouseX,mouseY);
}



