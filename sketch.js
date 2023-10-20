var ball, ball_options, ground, world, engine, left_side, right_side, score = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(windowWidth/2,windowHeight-10,windowWidth,20, 255);
	ball_options = {
		isStatic: false,
		restitution: 0.5,
		friction: 0,
		density:1.2
	}
	left_side = new Ground(windowWidth-250, windowHeight-80, 20, 120, "yellow");
	right_side = new Ground(windowWidth-100, windowHeight-80, 20, 120, "yellow");

	ball = Bodies.circle(100,10,15,ball_options);
  	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	if (ball.x > left_side.x && ball.x < right_side.x && ball.y === windowHeight-40){
		print("Point Scored!");
		score = score + 1;
		ball.x = 100;
		ball.y = 10;

	}
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground.display()
  left_side.display()
  right_side.display()

  push()
  stroke(0)
  fill("red")
  ellipse(ball.position.x,ball.position.y,20);
  pop()
  textSize(20);
  push()
  fill(255);
  text("Score: "+ score,30,50);
  pop()
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		console.log("Key pressed!");
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-15})
	}
	if(keyCode == RIGHT_ARROW)
	{
		console.log("Key pressed!");
		Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:0})
	}
}



