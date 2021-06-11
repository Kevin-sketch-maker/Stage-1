const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Ground1
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    Ground1 = new Ground(300,300,800,10)
    box1 = new Box(200,200,100)

}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
Ground1.display();
box1.display();

}