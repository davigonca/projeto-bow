var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");

}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: //chamar o balãovermelho
    break;
    case 2://chamar o balãoazul
    break;
    case 3://chamar o balãoverde
    break;
    case 4://chamar o balãorosa
break;

  }
}
  
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var balãoazul = createSprite(0,Math.round(random(20,370),10,10));
  balãoazul.addImage(blue_balloonImage);
  balãoazul.velocityX = 3;
  balãoazul.lifetime = 150;
  balãoazul.scale = 0.1;
}
function greenBalloon() {
  var balaoverde = createSprite(0,Math.round(random(20,370),10,10));
  balaoverde.addImage(green_balloonImage);
  balaoverde.velocityX = -3;
  balaoverde.lifetime = 150;
  balaoverde.scale = 0.1;
}
function pinkBalloon() {
  var balaoRosa = createSprite(0,Math.round(random(20,370),10,10));
  balaoRosa.addImage(pink_balloonImage);
  balaoRosa.velocityX = -3;
  balaoRosa.lifetime = 150;
  balaoRosa.scale = 0.1;
}
