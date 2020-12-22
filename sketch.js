const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ground
var block1 , block2 , block3 , block3 , block4 , block5 , block6 , block7 , block8



function preload() {
  
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(300,400,50,50)
    block1 = new Box(330,235,30,40)
    block2 = new Box(360,235,30,40)
    block3 = new Box(390,235,30,40)
    block4 = new Box(420,235,30,40)
    block5 = new Box(450,235,30,40)
    block6 = new Box(360,195,30,40)
    block7 = new Box(390,195,30,40)
    block7 = new Box(420,195,30,40)
    



}

function draw(){
    background(0);
    
    ground.display() 
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
      
}
