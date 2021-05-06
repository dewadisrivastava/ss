var heli,heliImg
var block1,block2,block3
var box,boxImg
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
var engine 
var world
var star
var star2

function preload(){
heliImg=loadAnimation("helicopter.png")
boxImg=loadAnimation("package.png")
}

function setup(){
	createCanvas(1000,500)

	  engine=Engine.create()
	  world=engine.world
	
	  heli=createSprite(100,100)
	  heli.addAnimation( "heli",heliImg)

     
     var options_r={
		 restitution:1
	 }
	  box=createSprite(100,150,options_r)
	  box.addAnimation("box",boxImg)
	  box.scale=0.25
	  World.add(world,box)
    box.display()
	  block1=createSprite(400,400,30,180)
	  block1.shapeColor="red"

	  block2=createSprite(480,500,180,30)
	  block2.shapeColor="red"

	  block3=createSprite(580,400,30,180)
	  block3.shapeColor="red"

	  star=createSprite(500,430,200,10)
	

	  star.visible=false
	  

}

function draw(){
	Engine.update(engine)
	background(0)
	drawSprites()
	box.x=heli.x
box.display()
	
	

	if(keyDown("RIGHT_ARROW")){
		heli.x=heli.x+20
	}

	if(keyDown("LEFT_ARROW")){
		heli.x=heli.x-10
	}


	if(keyDown("DOWN_ARROW")){
	box.velocityY=10
	
	
	}


if(box.isTouching(block2)){
	box.velocityY=-9
}


if(box.isTouching(star)&& box.velocityY===10){
	box.velocityY=8
}



if(box.isTouching(block2)){
	box.velocityY=-3
}

if(box.y===450 && box.velocityY===-3) {
box.velocityY=0
}
}
