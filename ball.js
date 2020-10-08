class ball{
  constructor(x,y,radius){
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world,this.body);
  }
  display(){
    var p = this.body.position;
    rectMode(CENTER);
/*    fill("blue");
    ellipse(p.x,p.y,(this.radius)*2);*/
    push();
    translate(p.x,p.y);
    imageMode(CENTER);
    image(this.image,0,0,20,20);
    pop();
  }
}