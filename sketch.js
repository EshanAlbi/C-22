const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world;
var ground;
var ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic : true
  }
  var optionsBall = {
    restitution:0.8
  }
  
  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);
  ball = Bodies.circle(100,100,40,optionsBall);
  World.add(world,ball);

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);
}