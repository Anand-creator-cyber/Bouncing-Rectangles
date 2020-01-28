var moving_rect;
var still_rect;





function setup() {
  createCanvas(1200,800);
  moving_rect = createSprite(900, 500, 80, 30);
  still_rect = createSprite(420, 500, 50, 80);

  moving_rect.shapeColor = "maroon";
  still_rect.shapeColor = "green";

  moving_rect.velocityX = -6;
  still_rect.velocityX = 6;
}

function draw() {
  background(255,255,255); 
  
  
  

  console.log(moving_rect.width / 2 + still_rect.width / 2);

  if(moving_rect.height / 2 + still_rect.height / 2 >= moving_rect.y - still_rect.y && moving_rect.height / 2 + still_rect.height / 2 >= still_rect.y - moving_rect.y){

  moving_rect.velocityY = moving_rect.velocityY * -1;
  still_rect.velocityY = still_rect.velocityY * -1;
  

   }

   if(moving_rect.width / 2 + still_rect.width / 2 >= moving_rect.x - still_rect.x && moving_rect.width / 2 + still_rect.width / 2 >= still_rect.x - moving_rect.x){

    moving_rect.velocityX= moving_rect.velocityX * -1;
    still_rect.velocityX = still_rect.velocityX * -1;
   }


 



  drawSprites();
}