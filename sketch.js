const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

 
    triangulo = new Poligono(200,200,3, 124);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(600,320,100,100);
  
    iron = new Iron(400,350);
    rubber=new Rubber(800,450,70);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    stone.display()
    iron.display()
    
    rubber.display();
   triangulo.display();
}