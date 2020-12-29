const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polyImage;
var slingshot;
var ball;
var backgroundImg;
var score

//var polygon

function preload(){
  getBackgroundImg();
}

function setup() {
  var canvas= createCanvas(1200,1000);
  engine = Engine.create();
  world = engine.world;
  
  score=0


  //polygon=Bodies.circle(200,200,100);
  //this.polygon = Bodies.circle(200,200,100);
  //World.add(world,polygon);
  ball=new Polygon(200,300);
  slingshot=new Slingshot(ball.body,{x:200, y:300});

  
  //set=new Ground(100,800, 200, 10);
 // ground=new Ground(600,985,1200,30);

 
  block8=new Box(372,660,50,50)
  block9=new Box(427,660,50,50)
  block10=new Box(482,660,50,50)
  block11=new Box(537,660,50,50)
  
  block12=new Box(592,660,50,50)
  block13=new Box(647,660,50,50)
  block14=new Box(399,605,50,50)
  block15=new Box(454,605,50,50)
  block16=new Box(509,605,50,50)
  block17=new Box(564,605,50,50)
  block18=new Box(619,605,50,50)
  block19=new Box(426,550,50,50)
  block20=new Box(481,550,50,50)
  block21=new Box(536,550,50,50)
  block22=new Box(591,550,50,50)
  block23=new Box(453,512,50,50)
  block24=new Box(508,512,50,50)
  block25=new Box(563,512,50,50)
  block26=new Box(480,474,50,50)
  block27=new Box(535,474,50,50)
  block28=new Box(507,438,50,50)

  block29=new Box(780,460,50,50)
  block30=new Box(835,460,50,50)
  block31=new Box(890,460,50,50)
  block32=new Box(945,460,50,50)
  block33=new Box(1000,460,50,50)
  block34=new Box(807,405,50,50)
  block35=new Box(862,405,50,50)
  block36=new Box(917,405,50,50)
  block37=new Box(972,405,50,50)
  block38=new Box(834,350,50,50)
  block39=new Box(889,350,50,50)
  block40=new Box(944,350,50,50)
  block41=new Box(861,312,50,50)
  block42=new Box(916,312,50,50)

  block45= new Box(888,250,50,50)





  ground=new Ground(600,985,1200,30);

  stand1=new Ground(505,700,450,20);

  stand2=new Ground(900,500,350,20);

}

function draw() {

if(backgroundImg)
 background(backgroundImg);


  //noStroke();
  textSize(35);
  fill("white");
  text("Score :" + score, width-300,50)
  text("Press Space to try again.", 25,50)

  Engine.update(engine); 

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();


  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  //block43.display();
  //block44.display();
  block45.display();
  //set.display();

  //imageMode(CENTER);
  //image=(polyImage,polygon.position.x,polygon.position.y,40,40);
  //polygon.display();
  //ellipseMode(CENTER);
  //ellipse(polygon.position.x,polygon.position.y,20,20);
  
  ground.display();
  stand1.display();
  stand2.display();
  ball.display();
  slingshot.display();


  
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score();
  block33.score();
  block34.score();
  block35.score();
  block36.score();
  block37.score();
  block38.score();
  block39.score();
  block40.score();
  block41.score();
  block42.score();
  block45.score();

  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}); 
} 

function mouseReleased(){
  slingshot.fly(); 
}


function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "Day.jpg";
  }
 else{
     bg = "Night.jpg";
}

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

