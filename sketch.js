const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine, world, backgroundIMG, drag, score;
let ground1, ground2, slingshot1;
let box1, box2, box3, box4, box5;
let pig1, pig2, bird1, smokeIMG;
let log1, log2, log3, log4, log5;

function preload() {
    getBackground();
    smokeIMG = loadImage("Images-Animations/smoke.png");
}

function setup(){
    score = 0;
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    drag = false;

    bird1 = new Bird(200, 50);

    ground1 = new Ground(600, height, 1200 ,20)
    ground2 = new Ground(200, height*3/4, 400, height/2);

    box1 = new Box(700, 355, 70, 70);
    box2 = new Box(920, 355, 70, 70);
    pig2 = new Pig(810, 365);
    log1 = new Log(810 ,320, 300, 0);

    box3 = new Box(700,265,70,70);
    box4 = new Box(920,265,70,70);
    pig1 = new Pig(810, 275);

    log2 =  new Log(810, 230, 300, 0);

    box5 = new Box(810,177,70,70);
    log3 = new Log(748,154,150, PI/4*3);
    log4 = new Log(848,154,150, PI/4);

    slingshot1 = new Slingshot(bird1, {'x' : 200, 'y' : 50});
}

function draw() {
    if (backgroundIMG != undefined) {
        background(backgroundIMG);
    }
    textSize(24);
    text("Score = " + score, 1000, 50);
    Engine.update(engine);
    slingshot1.display();
    displayEverything();
    if (drag && bird1.canDrag) {
        Body.setPosition(bird1.body, {x : mouseX, y : mouseY});
    }
}

function mouseDragged() {
    if (mouseX - bird1.body.position.x < 25 && mouseX - bird1.body.position.x > -25 && mouseY - bird1.body.position.y < 25 && mouseY - bird1.body.position.y > -25) {
        drag = true;
    }
}

function mouseReleased() {
    if (drag) {
        slingshot1.fly();
        drag = false
        bird1.canDrag = false;
    }
}

function reset() {
    slingshot1.flown = false;
    slingshot1.chain.bodyA = bird1.body;
    Body.setPosition(bird1.body, {'x' : 200, 'y' : 50});
    Body.setVelocity(bird1.body, {'x' : 0, 'y' : 0});
    Body.setAngularVelocity(bird1.body, 0);
    Body.setAngle(bird1.body, 0);
    bird1.body.speed = 0;
    bird1.body.angularSpeed = 0;
    bird1.trajectory = [];
    drag = false;
    bird1.canDrag = true;
    score = 0;
    for (loop1 = 0; loop1 < everything.length; loop1 += 1) {
        World.add(world, everything[loop1].body)
    }
}

async function getBackground() {
    let Time = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    let Response = await Time.json();
    if (Response.datetime.slice(11, 13) >= 7 && Response.datetime.slice(11, 13) <= 19) {
        backgroundIMG = loadImage("Images-Animations/background.png");
    } else {
        backgroundIMG = loadImage("Images-Animations/Night-Background.png");
    }
}