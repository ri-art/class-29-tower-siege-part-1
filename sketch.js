const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var grond;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,bock11,block12,block13,bk14,block15,block16,block17,block18,block19,block20,
block21;
var polygonImg


function preload (){
polygonImg = loadImage("polygon.png")
}
function setup(){
    createCanvas(1400,500);
    engine = Engine.create();
    world = engine.world;
    stand1 = new Stand(600,350,350,20)
    stand2 = new Stand(1100,270,350,20)
    grond = new Ground(700,490,1400,20);

     block1 = new Blocks(600,320,50,40)
     block2= new Blocks(600+50,320,50,40)
     block3 = new Blocks(600+100,320,50,40)
     block4 = new Blocks(600-50,320,50,40)
     block5 = new Blocks(600-100,320,50,40)
     block6 = new Blocks(600-25,280,50,40)
     block7 = new Blocks(600-75,280,50,40)
       block8 = new Blocks(600+25,280,50,40)
       block9= new Blocks(600+70,280,50,40)
       block10 = new Blocks(600,240,50,40)
       block11 = new Blocks(600+50,240,50,40)
       block12 = new Blocks(600-50,240,50,40)
       block13 = new Blocks(600-25,200,50,40)
       bk14 = new Blocks(600+25,200,50,40)
       block15 = new Blocks(600,200-39,50,40)
       block16 = new Blocks(1100,280-39,50,40)
       block17 = new Blocks(1100+50,280-39,50,40)
       block18 = new Blocks(1100-50,280-39,50,40)
       block19 = new Blocks(1075,201,50,40)
       block20 = new Blocks(1075+50,201,50,40)
       block21 = new Blocks(1100,100+62,50,40)
      
      Ridhi = Bodies.circle(200,200,40)
      World.add(world,Ridhi)
        slinj = new slingshot(this.Ridhi,{x:250,y:160})
      
}
function draw (){
    background("mistyrose");
    Engine.update(engine);
    fill ("chocolate")
    grond.display();
    stand1.display();
    stand2.display();
    fill("magenta")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("lightGreen")
    
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    fill("salmon")
    block10.display();
    block11.display();
    block12.display();
    fill("lightSkyBlue")
    block13.display();
    bk14.display();
    fill("yellow")
    block15.display();
    fill("pink")
    block16.display();
    block17.display();
    block18.display();
   fill("LightGreen")
      block19.display();
     block20.display();
     fill("magenta")
     block21.display();
    
    slinj.display();
  imageMode(CENTER)
   image(polygonImg,Ridhi.position.x,Ridhi.position.y,40,40)
   fill("Blue")
   textSize(30) ;
  text("Drag The polygon To Demolish The Demon's Tower",250,50)

    drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.Ridhi,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slinj.fly();
}
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(this.Ridhi,{x:100,y:200});
    slinj.attach(this.Ridhi);
  }
}