const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Man,Paper,Ground,end=0;

function preload(){
	man = loadImage("play.png");
    manHit = loadImage("play.gif");
    clap = loadSound("clap.mp3");
}

function setup() {
	createCanvas(900, 700);
    Man=createSprite(150,530,1,1);
    Man.scale=0.5;
    Man.addImage("man",man);
	engine = Engine.create();
	world = engine.world;
    ground = new ground(450,650,width,10);
    binPart1 = new binPart(700,620,15,50);
    binPart2 = new binPart(785,620,15,50);
    binPart3 = new binPart(742.5,640,85,15);
	paper = new ball(150,600,10);
    Paper=createSprite(paper.body.position.x,paper.body.position.y,15,15);
    Ground=createSprite(650,650,width,17);
    Paper.visible=false;
    Ground.visible=false;
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("blue");
  paper.display();
  ground.display();
  binPart3.display();
  binPart1.display();
  binPart2.display();
  Paper.x=paper.body.position.x;
  Paper.y=paper.body.position.y;
  fill("white");
  textSize(20);
  text("Press ⬆ multiple times to move the paper ball",120,50);
  text("into the basket before it touches the ground",120,70);
  if(Paper.x>700&&Paper.x<785&&Paper.y>600&&end==0){
    clap.play();
    end=1;
  }
  if(end==1){
    fill("white");
    textSize(100);
    text("You Won😎",200,320);   
  }
  drawSprites();
}

function keyPressed(){
  if(Paper.isTouching(Ground)){}
  else if(Paper.x>700&&Paper.x<785){}
  else if(keyCode==UP_ARROW){
     Man.addImage("man",manHit);
     Body.applyForce(paper.body,paper.body.position,{x:6,y:-5});
  }
}