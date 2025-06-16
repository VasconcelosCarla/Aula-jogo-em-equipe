var bola, bolaAnimation;

function preload(){
    bolaAnimation = loadAnimation("../assets/sprite_0.png", "../assets/sprite_1.png");
}

function setup(){
    bola = createSprite(200, 200);

}

function draw() {
    drawSprites();
}