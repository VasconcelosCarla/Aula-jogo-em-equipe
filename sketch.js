var bola, bolaAnimation;

function preload(){
    bolaAnimation = loadAnimation("../assets/sprite_0.png", "../assets/sprite_1.png","../assets/sprite_2.png","../assets/sprite_3.png");
}

function setup(){
    createCanvas(1535,725);
    bola = createSprite(200, 200);
    bola.addAnimation("piscando",bolaAnimation);
    bola.scale = 3
}

function draw() {
    background("gray");
    drawSprites();
}