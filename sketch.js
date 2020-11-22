var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, b1, b2, b3;
var b1Sprite, b2Sprite, b3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 // Create Red Box For Dropping The Package
	 b1Sprite = createSprite(330, height - 90, 20, 100);
	 b1Sprite.shapeColor = rgb(255, 0, 0);
	 b1 = Bodies.rectangle(330, height - 90, 20, 100, {isStatic:true});
	 World.add(world, b1);

	 b2Sprite = createSprite(width/2, height - 50, 120, 20);
	 b2Sprite.shapeColor = rgb(255, 0, 0);
	 b2 = Bodies.rectangle(width/2, height - 50, 120, 20, {isStatic:true});
	 World.add(world, b2);

	 b3Sprite = createSprite(450, height - 90, 20, 100);
	 b3Sprite.shapeColor = rgb(255, 0, 0);
	 b3 = Bodies.rectangle(450, height - 90, 20, 100);
		World.add(world, b3);

	Engine.run(engine);
  
}


function draw() 
{
	rectMode(CENTER);
	background(0);
	
	packageSprite.x = packageBody.position.x; 
	packageSprite.y = packageBody.position.y;		

	drawSprites(); 
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW) 
  {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody, false);	
	packageBody.restitution = 0.3;
  }
}



