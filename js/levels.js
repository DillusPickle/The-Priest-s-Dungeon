class Levels{
    constructor(){

        this.wallImg = loadImage('images/wall1.png');
        this.floorImg = loadImage('images/floor.png');
        this.spikeImg = loadImage('images/peaks_1.png');
        this.shopkeeperImg = loadImage('images/shopkeeper.png');
        this.itemstandImg = loadImage('images/stand.png');
        this.coinImg = loadImage('images/coin.png');
        this.skullAnim = loadAnimation('images/SkullEnemy_idle1.png','images/SkullEnemy_idle2.png');
        this.relicAnim = loadAnimation('images/grimoire1.png','images/grimoire2.png','images/grimoire3.png','images/grimoire4.png','images/grimoire3.png','images/grimoire2.png');
        this.ladderImg = loadImage('images/ladder.png');
        this.skullAnim2 = loadAnimation('images/SkullEnemy_idle1v2.png','images/SkullEnemy_idle2v2.png');

        this.dynamicSpike1;
        this.dynamicSpike2;
        this.dynamicSpike3;
        this.dynamicSpike4;

        this.relic;
        this.win = false;

        this.obstacles = new Group();
        this.coins = new Group();
        this.skulls = new Group();
        this.ladders = new Group();

    }

    make1(lvlnumber){
        var wall;
        var Floor;
        var spike;
        var shopkeeper;
        var itemstand;
        var coin;
        var skull1;
        var skull2;
        var skull3;
        var skull4;
        var ladder;
        if(lvlnumber === 1){
            player.sprite.x = 32;
            player.sprite.y = 32;
            wall = createSprite(287,24,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(287,556,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(-24,290,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -30;
            wall.rotation = 270;
            wall = createSprite(550,290,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -30;
            wall.rotation = 90;
            Floor = createSprite(384,328,1,1);
            Floor.addImage(this.floorImg);
            Floor.depth = -40;
            spike = createSprite(180,100,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(180,170,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(180,300,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(180,370,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(180,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(180,510,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(250,170,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(320,170,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(428,170,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(428,100,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(250,300,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(320,300,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(320,370,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(320,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(440,300,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(500,300,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(440,370,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(440,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(500,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            ladder = createSprite(500,500,1,1);
            ladder.addImage(this.ladderImg);
            ladder.depth = -40;
            ladder.setCollider('rectangle',0,-2,56,56);
            this.ladders.add(ladder);

            this.dynamicSpike1 = createSprite(250,440,1,1);
            this.dynamicSpike1.addImage(this.spikeImg);
            this.dynamicSpike1.scale = 0.8;
            this.dynamicSpike1.depth = -40;
            this.dynamicSpike1.setCollider('rectangle',0,-2,52,52);

            coin = createSprite(75,440,1,1);
            coin.addImage(this.coinImg);
            coin.depth = -40;
            coin.setCollider('rectangle',0,0,32,32);
            this.coins.add(coin);

            coin = createSprite(250,370,1,1);
            coin.addImage(this.coinImg);
            coin.depth = -40;
            coin.setCollider('rectangle',0,0,32,32);
            this.coins.add(coin);

            coin = createSprite(250,100,1,1);
            coin.addImage(this.coinImg);
            coin.depth = -40;
            coin.setCollider('rectangle',0,0,32,32);
            this.coins.add(coin);
            
        }
        if(lvlnumber === 2){
            player.sprite.x = 606;
            player.sprite.y = 32;
            wall = createSprite(287*3,24,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(287*3,556,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(550*2.045,290,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -30;
            wall.rotation = 90;
            Floor = createSprite(384*3,328,1,1);
            Floor.addImage(this.floorImg);
            Floor.depth = -40;
            shopkeeper = createSprite(860,110,1,1);
            shopkeeper.addImage(this.shopkeeperImg);
            shopkeeper.depth = -40;
            shopkeeper.setCollider('rectangle',-7,-5,150,110)
            allWalls.add(shopkeeper);
            itemstand = createSprite(850,220,1,1);
            itemstand.addImage(this.itemstandImg);
            itemstand.depth = -40;

            ladder = createSprite(1074,500,1,1);
            ladder.addImage(this.ladderImg);
            ladder.depth = -40;
            ladder.setCollider('rectangle',0,-2,56,56);
            this.ladders.add(ladder);
        }
        if(lvlnumber === 3){
            player.sprite.x = 1180;
            player.sprite.y = 32;
            wall = createSprite(287*5,24,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(287*5,556,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(550*3.087,290,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -30;
            wall.rotation = 90;
            Floor = createSprite(384*5,328,1,1);
            Floor.addImage(this.floorImg);
            Floor.depth = -40;

            skull1 = createSprite(1640,240,1,1);
            skull1.addAnimation("idle",this.skullAnim);
            skull1.depth = -40;
            skull1.velocityX = -3;
            skull1.mirrorX(-1);
            this.skulls.add(skull1);

            spike = createSprite(1300,100,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            this.dynamicSpike2 = createSprite(1300,180,1,1);
            this.dynamicSpike2.addImage(this.spikeImg);
            this.dynamicSpike2.scale = 0.8;
            this.dynamicSpike2.depth = -40;
            this.dynamicSpike2.setCollider('rectangle',0,-2,52,52);

            spike = createSprite(1300,255,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1300,330,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1300,405,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1240,405,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1180,405,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1370,405,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1440,405,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1440,330,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1440,255,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1580,100,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1580,170,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1640,300,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1640,370,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1640,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1520,510,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(1510,405,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            ladder = createSprite(1648,500,1,1);
            ladder.addImage(this.ladderImg);
            ladder.depth = -40;
            ladder.setCollider('rectangle',0,-2,56,56);
            this.ladders.add(ladder);

            this.dynamicSpike3 = createSprite(1640,170,1,1);
            this.dynamicSpike3.addImage(this.spikeImg);
            this.dynamicSpike3.scale = 0.8;
            this.dynamicSpike3.depth = -40;
            this.dynamicSpike3.setCollider('rectangle',0,-2,52,52);

            this.dynamicSpike4 = createSprite(1580,445,1,1);
            this.dynamicSpike4.addImage(this.spikeImg);
            this.dynamicSpike4.scale = 0.8;
            this.dynamicSpike4.depth = -40;
            this.dynamicSpike4.setCollider('rectangle',0,-2,52,52);

            coin = createSprite(1640,115,1,1);
            coin.addImage(this.coinImg);
            coin.depth = -40;
            coin.setCollider('rectangle',0,0,32,32);
            this.coins.add(coin);
            coin = createSprite(1640,85,1,1);
            coin.addImage(this.coinImg);
            coin.depth = -40;
            coin.setCollider('rectangle',0,0,32,32);
            this.coins.add(coin);

            coin = createSprite(1370,330,1,1);
            coin.addImage(this.coinImg);
            coin.depth = -40;
            coin.setCollider('rectangle',0,0,32,32);
            this.coins.add(coin);

            coin = createSprite(1200,480,1,1);
            coin.addImage(this.coinImg);
            coin.depth = -40;
            coin.setCollider('rectangle',0,0,32,32);
            this.coins.add(coin);


        }
        if(lvlnumber === 4){
            player.sprite.x = 1754;
            player.sprite.y = 32;
            wall = createSprite(287*7,24,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(287*7,556,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(550*4.131,290,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -30;
            wall.rotation = 90;
            Floor = createSprite(384*7,328,1,1);
            Floor.addImage(this.floorImg);
            Floor.depth = -40;
            shopkeeper = createSprite(2000,110,1,1);
            shopkeeper.addImage(this.shopkeeperImg);
            shopkeeper.depth = -40;
            shopkeeper.setCollider('rectangle',-7,-5,150,110)
            allWalls.add(shopkeeper);
            itemstand = createSprite(1990,220,1,1);
            itemstand.addImage(this.itemstandImg);
            itemstand.depth = -40;

            ladder = createSprite(2222,500,1,1);
            ladder.addImage(this.ladderImg);
            ladder.depth = -40;
            ladder.setCollider('rectangle',0,-2,56,56);
            this.ladders.add(ladder);
        }
        if(lvlnumber === 5){
            player.sprite.x = 2328;
            player.sprite.y = 32;
            wall = createSprite(287*9,24,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(287*9,556,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -20;
            wall = createSprite(550*5.173,290,1,1);
            wall.addImage(this.wallImg);
            allWalls.add(wall);
            wall.depth = -30;
            wall.rotation = 90;
            Floor = createSprite(384*9,328,1,1);
            Floor.addImage(this.floorImg);
            Floor.depth = -40;

            spike = createSprite(2600,100,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2680,100,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            spike = createSprite(2460,180,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2460,250,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2395,250,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2330,250,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2330,380,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2400,380,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2520,380,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2520,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2400,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2670,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2720,440,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2600,240,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2600,320,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2720,240,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);
            spike = createSprite(2780,240,1,1);
            spike.addImage(this.spikeImg);
            spike.depth = -40;
            spike.setCollider('rectangle',0,-2,56,56);
            this.obstacles.add(spike);

            skull2 = createSprite(2540,110,1,1);
            skull2.addAnimation("idle",this.skullAnim);
            skull2.depth = -40;
            skull2.velocityY = 4;
            skull2.mirrorX(-1);
            this.skulls.add(skull2);
            skull3 = createSprite(2540,300,1,1);
            skull3.addAnimation("idle",this.skullAnim);
            skull3.depth = -40;
            skull3.velocityX = -3;
            skull3.mirrorX(-1);
            this.skulls.add(skull3);
            skull4 = createSprite(2770,370,1,1);
            skull4.addAnimation("idle",this.skullAnim2);
            skull4.depth = -40;
            skull4.velocityX = -7;
            skull4.mirrorX(-1);
            this.skulls.add(skull4);

            this.dynamicSpike1 = createSprite(2460,440,1,1);
            this.dynamicSpike1.addImage(this.spikeImg);
            this.dynamicSpike1.scale = 0.8;
            this.dynamicSpike1.depth = -40;
            this.dynamicSpike1.setCollider('rectangle',0,-2,48,48);

            this.dynamicSpike2 = createSprite(2520,510,1,1);
            this.dynamicSpike2.addImage(this.spikeImg);
            this.dynamicSpike2.scale = 0.8;
            this.dynamicSpike2.depth = -40;
            this.dynamicSpike2.setCollider('rectangle',0,-2,48,48);

            this.dynamicSpike3 = createSprite(2660,260,1,1);
            this.dynamicSpike3.addImage(this.spikeImg);
            this.dynamicSpike3.scale = 0.8;
            this.dynamicSpike3.depth = -40;
            this.dynamicSpike3.setCollider('rectangle',0,-2,48,48);

            this.relic = createSprite(2330,440,1,1);
            this.relic.addAnimation("label",this.relicAnim);
            this.relic.scale = 2;
            this.relic.depth = 40;
        }
    }

    obstacleLogic(){
        if(player.sprite.isTouching(this.obstacles)&&player.invulnerability === 0&&player.hp>0){
            player.hp -= 1;
            player.invulnerability = 18;
            hurtSFX.play();
        }
        if(player.sprite.isTouching(this.dynamicSpike1)&&player.invulnerability === 0&&player.hp>0&&this.dynamicSpike1.visible === true){
            player.hp -= 1;
            player.invulnerability = 18;
            hurtSFX.play();
        }
        if(frameCount%20===0){
            this.dynamicSpike1.visible = true;
        }
        if(frameCount%40===0){
            this.dynamicSpike1.visible = false;
        }

        if(this.dynamicSpike2){
            if(player.sprite.isTouching(this.dynamicSpike2)&&player.invulnerability === 0&&player.hp>0&&this.dynamicSpike2.visible === true){
                player.hp -= 1;
                player.invulnerability = 18;
                hurtSFX.play();
            }
            if(frameCount%20===0){
                this.dynamicSpike2.visible = true;
            }
            if(frameCount%40===0){
                this.dynamicSpike2.visible = false;
            }
        }
        if(this.dynamicSpike3){
            if(player.sprite.isTouching(this.dynamicSpike3)&&player.invulnerability === 0&&player.hp>0&&this.dynamicSpike3.visible === true){
                player.hp -= 1;
                player.invulnerability = 18;
                hurtSFX.play();
            }
            if(frameCount%20===0){
                this.dynamicSpike3.visible = true;
            }
            if(frameCount%40===0){
                this.dynamicSpike3.visible = false;
            }
        }
        if(this.dynamicSpike4){
            if(player.sprite.isTouching(this.dynamicSpike4)&&player.invulnerability === 0&&player.hp>0&&this.dynamicSpike4.visible === true){
                player.hp -= 1;
                player.invulnerability = 18;
                hurtSFX.play();
            }
            if(frameCount%20===0){
                this.dynamicSpike4.visible = true;
            }
            if(frameCount%50===0){
                this.dynamicSpike4.visible = false;
            }
        }

        for (var i = 0; i < this.coins.length; i++){
            if(player.sprite.isTouching(this.coins[i])){
                player.coins += 1;
                coinSFX.play();
                this.coins[i].destroy();
            }
        }

        if(player.sprite.isTouching(this.ladders)){
            lvlnum+=1;
            camera.x += 574;
            player.sprite.x += 574;
            level.make1(lvlnum);
            if(lvlnum === 1||lvlnum === 3||lvlnum === 5){
            dungeonTheme.play();
            drippingAmbient.play();
            shopTheme.stop();
            }
            if(lvlnum === 2||lvlnum === 4){
            shopTheme.play();
            drippingAmbient.stop();
            dungeonTheme.stop();
            }
            if(lvlnum === 6){
            secretTheme.play();
            dungeonTheme.stop();
            }
        }

        if(lvlnum === 5){
            if(player.sprite.isTouching(this.relic)){
                player.canMove = false;
                this.win = true;
            }
        }
    }

    enemyLogic(){
        if(this.skulls[0]){
            if(this.skulls[0].x >= 1650){
                this.skulls[0].velocityX = -3;
                this.skulls[0].mirrorX(-1);
            }
            if(this.skulls[0].x <= 1500){
                this.skulls[0].velocityX = 3;
                this.skulls[0].mirrorX(1);
            }
    
            if(player.sprite.isTouching(this.skulls)&&player.invulnerability === 0&&player.hp>0){
                player.hp-=1;
                player.invulnerability = 24;
                hurtSFX.play();
            }
        }
        if(this.skulls[1]){
            if(this.skulls[1].y <= 100){
                this.skulls[1].velocityY = 4;
            }
            if(this.skulls[1].y >= 300){
                this.skulls[1].velocityY = -4;
            }
    
            if(player.sprite.isTouching(this.skulls)&&player.invulnerability === 0&&player.hp>0){
                player.hp-=1;
                player.invulnerability = 24;
                hurtSFX.play();
            }
        }
        if(this.skulls[2]){
            if(this.skulls[2].x >= 2550){
                this.skulls[2].velocityX = -3;
                this.skulls[2].mirrorX(-1);
            }
            if(this.skulls[2].x <= 2320){
                this.skulls[2].velocityX = 3;
                this.skulls[2].mirrorX(1);
            }
    
            if(player.sprite.isTouching(this.skulls)&&player.invulnerability === 0&&player.hp>0){
                player.hp-=1;
                player.invulnerability = 24;
                hurtSFX.play();
            }
        }
        if(this.skulls[3]){
            if(this.skulls[3].y <= 369){
                this.skulls[3].velocityX = -7;
                this.skulls[3].velocityY = 0;
            }
            if(this.skulls[3].x <= 2600){
                this.skulls[3].velocityX = 0;
                this.skulls[3].velocityY = 7;
                this.skulls[3].mirrorX(1);
            }
            if(this.skulls[3].y >= 500){
                this.skulls[3].velocityX = 7;
                this.skulls[3].velocityY = 0;
                this.skulls[3].mirrorX(1);
            }
            if(this.skulls[3].x >= 2780&&this.skulls[3].y >= 500){
                this.skulls[3].velocityX = 0;
                this.skulls[3].velocityY = -7;
                this.skulls[3].mirrorX(1);
            }
    
            if(player.sprite.isTouching(this.skulls)&&player.invulnerability === 0&&player.hp>0){
                player.hp-=1;
                player.invulnerability = 24;
                hurtSFX.play();
            }
        }
    }

}