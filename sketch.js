var player;

var edges;

var level, lvlnum = 1;

var deathScreen;
var restartButton;

var allWalls;

function preload() {
  soundFormats('mp3', 'wav');
  dungeonTheme = loadSound('sounds/DungeonTheme.mp3');
  secretTheme = loadSound('sounds/SecretTheme.mp3');
  shopTheme = loadSound('sounds/ShopTheme.mp3');
  drippingAmbient = loadSound('sounds/DrippingAmbient.mp3');
  hurtSFX = loadSound('sounds/hurt.wav');
  coinSFX = loadSound('sounds/coin.wav');
}

function setup() {
  createCanvas(574, 580);

  allWalls = createGroup();

  deathScreen = createSprite(1000,290,4000,700);
  deathScreen.color = 'black';
  deathScreen.visible = false;
  deathScreen.depth = 10;

  restartButton = createSprite(1000,290,100,20);
  restartButton.color = 'blue';
  restartButton.visible = false;
  restartButton.depth = 11;

  firstItem = new Item(850,210,'50/50');
  firstItem.decideType();
  secondItem = new Item(1990,210,'50/50');
  secondItem.decideType();

  player = new Player(32,32)

  level = new Levels();
  level.make1(lvlnum);

  if(lvlnum === 1||lvlnum === 3||lvlnum === 5){
    dungeonTheme.play();
    drippingAmbient.play();
    shopTheme.stop();
  }

}

function draw() {
  background(rgb(100, 100, 110));

  player.movement();

  player.updatePlayerUI();
  player.use();

  level.obstacleLogic();
  level.enemyLogic();
  player.invulnerabilityLogic();

  if(keyWentDown('b')){
    firstItem.purchase();
    secondItem.purchase();
  }

  if(player.hp === 0){
    window.location.reload();
  }


  player.sprite.collide(allWalls);

  drawSprites();
  textSize(20)
  stroke('black');
  strokeWeight(6);
  fill('yellow');
  if(player.coins<10){
    text(player.coins,player.sprite.x-15,player.sprite.y-(-47));
  }
  else{
    text(player.coins,player.sprite.x-25,player.sprite.y-(-47));
  }

  textSize(18);
  stroke('black');
  strokeWeight(2);
  fill('white');
  text("W,A,S,D to move",18,240);
  text("B to buy",820,180);
  text("E to use an health pot",760,350);
  text("Get to the ladder",310,500);
  text("to proceed",310,520);

  if(level.win === true){
    textSize(30)
    stroke('black');
    strokeWeight(15);
    fill('white');
    text("YOU GOT THE RELIC, YOU WIN", 2350, 280);
    text("reload the window to play again", 2365, 330);
    player.hp = 3;
    pause();
  }
}