class Box extends BaseClass{
  constructor(x,y) {
    super(x,y,50,50);
    this.Visiblity = 255;
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity=this.Visiblity-5;

      pop();
    }
   }
 

   score(){
     if (this.Visiblity < 0 && this.Visiblity > -105){
       score++;
     }
   }
 

};

   
  



//class Box extends BaseClass{
  //constructor(x,y,width,height) {
    //var options = {
      //  isStatic: true
    //}

    //super(x,y,width,height,options);

  //}
  //display(){
    //console.log(this.body.speed);
    //if(this.body.speed > 3){
     //super.display();
    ///}
   // else{
      //World.remove(world, this.body);
    //  push();
  //    this.Visiblity=this.Visiblity-5;
//
//      pop();
//    }
//   }


//if(this.body.speed < 3){
  //super.display();
 //}
 //else{
   //World.remove(world, this.body);
   //push();
//   this.Visiblity=this.Visiblity-5;

//   pop();
 //}
//}


