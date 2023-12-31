
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground, ground2, ground3;
var wedge;
var angle=60;
var poly;
var boxes=[], boxImg;

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(800,700,800,20,option);
  World.add(world,ground);

  ground2=Bodies.rectangle(200,400,300,20,option);
  World.add(world,ground2);

  ground3=Bodies.rectangle(1400,400,300,20,option);
  World.add(world,ground3);

  box1 = new Box(200,100,50,50);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(new Box(mouseX,mouseY,50,50,))
}


function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,800,20);
  rect(ground2.position.x,ground2.position.y,300,20);
  rect(ground3.position.x,ground3.position.y,300,20);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
}


