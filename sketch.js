const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;

var ground, Block1, Block2, Block3, Block4, Block5, Block7,Block8, Block9, Block10, Block11, Block12, Block13, Block14,Block15, Block16, Block17, Block18, Block19, Block20, Block21;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world
  ground1 = new Ground(170, 200, 320, 20);

  Block1 = new Box(200, 182, 20, 20);

  Block2 = new Box(220, 182, 20, 20);

  Block3 = new Box(240, 182, 20, 20);

  Block4 = new Box(260, 182, 20, 20);

  Block5 = new Box(280, 182, 20, 20);

  Block6 = new Box(300, 182, 20, 20);

  Block7 = new Box(320, 182, 20, 20);

  
  Block8 = new BoxPink(201, 2, 20, 20);

  Block9 = new BoxPink(220, 2, 20, 20);

  Block10 = new BoxPink(240, 2, 20, 20);

  Block11 = new BoxPink(260, 2, 20, 20);

  Block12 = new BoxPink(280, 2, 20, 20);

  Block13 = new BoxPink(300, 2, 20, 20);

  Block14 = new BoxPink(320, 2, 20, 20);

  //third level
  Block15  = new Box(202, 182, 20, 20);

  Block16  = new Box(220, 182, 20, 20);

  Block17 = new Box(240, 182, 20, 20);

  Block18 = new Box(260, 182, 20, 20);

  Block19 = new Box(280, 182, 20, 20);

  Block20 = new Box(300, 182, 20, 20);

  Block21 = new Box(320, 182, 20, 20);


}

function draw() {
  background(255,255,255);  
  Block1.display();

  Block2.display();

  Block3.display();

  Block4.display();

  Block5.display();

  Block6.display();

  Block7.display();

  Block8.display ();

  Block9.display ();

  Block10.display ();
z
  Block11.display ();

  Block12.display ();

  Block13.display ();

  Block14.display ();

  Block15.display ();

  Block16.display ();

  Block17.display();

  Block18.display();

  Block19.display();

  Block20.display();

  Block21.display();
  drawSprites();
}