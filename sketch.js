const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var SlingShot;
var polygon_img;



function setup(){
    var canvas = createCanvas(1200, 400);

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    block1 = new Block (300,275,30,40);
    block2 = new Block (330,275,30,40);
    block3 = new Block (360,275,30,40);
    block4 = new Block (390,275,30,40);
    block5 = new Block (420,275,30,40);
    block6 = new Block (450,275,30,40);
    block7 = new Block (480,275,30,40);

    block8 = new Block (330,235,30,40);
    block9 = new Block (360,235,30,40);
    block10 = new Block (390,235,30,40);
    block11 = new Block (420,235,30,40);
    block12 = new Block (450,235,30,40);

    block13 = new Block (360,195,30,40);
    block14 = new Block (390,195,30,40);
    block15 = new Block (420,195,30,40);

    block16 = new Block (390,155,30,40);

    stand1 = new Ground (400, 285, 200, 10);
    stand2 = new Ground (390, 245, 200, 10);

}

function draw(){
    engine = Engine.create();
    world = engine.world;
    noStroke(); 
    textSize(35); 
    fill("white"); 
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks "+ score,width-300,50);
    Engine.update(engine);




}