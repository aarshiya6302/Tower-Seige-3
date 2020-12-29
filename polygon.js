class Polygon {
  constructor(x,y) {
    var options = {
        isStatic: false,
        density: 3,
        restitution:0,
        speed:1
    }
    this.r=20
    this.body = Bodies.circle(x,y,this.r,options);
  
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle=this.body.angle;

push ();
translate(pos.x,pos.y);
rotate (angle);
fill ("white");
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop ();
}
};