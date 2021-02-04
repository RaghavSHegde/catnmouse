
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tom1=loadAnimation("images/cat1.png");
    tom2=loadAnimation("images/cat2.png");
    tom3=loadAnimation("images/cat3.png");
    tom4=loadAnimation("images/cat4.png");
    j1=loadAnimation("images/mouse1.png");
    j2=loadAnimation("images/mouse2.png","images/mouse3.png");
  
    j4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(900,700);
tom.addAnimation("tom1",tom1);
tom.scale=0.1;
jerry=createSprite(200,600);
jerry.addAnimation("j1",j1);
jerry.scale=0.05;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x < (tom.width - jerry.width)/2)
{
    tom.velocityX=0;
    tom.addAnimation("tom3",tom3);

    tom.scale=0.1;
   tom.changeAnimation("tom3");
   tom.x=300;
    jerry.addAnimation("j3",j3);
    jerry.scale=0.05;
    jerry.changeAnimation("j3");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  { tom.velocityX = -5;
     tom.addAnimation("tomRunning", tom2);
      tom.changeAnimation("tomRunning");
       jerry.addAnimation("jerryTeasing", j2);
        jerry.frameDelay = 25; 
        jerry.changeAnimation("jerryTeasing");

}
}