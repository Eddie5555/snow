var snow1, snow1img, snow2, snow2img, snow3, snow3img, snow4, snow4img, snow5, snow5img


function setup() {
  createCanvas(800,400);
   snow3= createSprite(400, 200, 50, 50);
   snow5=createSprite(400,100,20,20);
   snow4img= createSprite(200,100,20,20);
}

function draw() {
  background(255,255,255);  
snow3.addImage(snow1);
snow3.scale= 0.5
snow5.addImage(snow4);
snow5.scale = 0.5
snow4img.addImage(snow5img);
snow4img.scale=0.3
  drawSprites();
}

function preload() {
snow1=loadImage("snow2.jpg","snow3.jpg");
snow4=loadImage("snow4.webp");
snow5img=loadImage("snow5.webp");


}