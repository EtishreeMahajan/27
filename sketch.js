
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var body;
var bob1,bob2,bob3,bob4,bob5,bobDiameter;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  roof = new Roof(400,200,500,20);
	//Create the Bodies Here.
    bob1 = new Bob(300,450,25);
   	bob2 = new Bob(350,450,25);
  	bob3 = new Bob(400,450,25);
  	bob4 = new Bob(450,450,25);
    bob5 = new Bob(500,450,25);
  
    bobDiameter = 25;

    var roofPosition = roof.body.position
    rope1 = new Rope(bob1.body,{x:roofPosition.x-bobDiameter*4,y:roofPosition.y});
    rope2 = new Rope(bob2.body,{x:roofPosition.x-bobDiameter*2,y:roofPosition.y});
    rope3 = new Rope(bob3.body,{x:roofPosition.x+bobDiameter*0,y:roofPosition.y});
    rope4 = new Rope(bob4.body,{x:roofPosition.x+bobDiameter*2,y:roofPosition.y});
    rope5 = new Rope(bob5.body,{x:roofPosition.x+bobDiameter*4,y:roofPosition.y});

 /*for(var i = 1; i <6; i++){
    ("bob"+ i) = new Bob(300+50*(i-1),450,25);
    ("rope"+i) = new Rope(("bob"+ i).body,{x:roofPosition.x-bobDiameter*4,y:roofPosition.y});

  }*/
  
}

//1st page - app description
//2nd page - concepts that you will use
//3rd page - in depth idea with wireframe & improvement scope
//4th page - strength, weakness, opportunity and threat (SWOT analysis)


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY })
}
