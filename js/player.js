class Player{
    constructor(x,y){

        this.sprite = createSprite(x,y,40,40);
        this.sprite.depth = 20;
        
        this.idleAnim = loadAnimation('images/player_idle1.png','images/player_idle2.png','images/player_idle3.png','images/player_idle4.png');
        this.healthIcon = loadImage('images/health.png');
        this.coinIcon = loadImage('images/coin.png');

        this.hp = 3;
        this.helditem = '';
        this.invulnerability = 0;
        this.coins = 0;
        this.canMove = true;

        this.hp1 = createSprite(this.sprite.x-20,this.sprite.y-35,1,1);
        this.hp1.addImage('icon',this.healthIcon);
        //this.hp1.scale = 3;
        this.hp2 = createSprite(this.sprite.x+2,this.sprite.y-35,1,1);
        this.hp2.addImage('icon',this.healthIcon);
        //this.hp2.scale = 3;
        this.hp3 = createSprite(this.sprite.x+24,this.sprite.y-35,1,1);
        this.hp3.addImage('icon',this.healthIcon);
        //this.hp3.scale = 3;

        this.coins1 = createSprite(this.sprite.x+10,this.sprite.y-(-40),1,1);
        this.coins1.addImage('icon',this.coinIcon);
        this.coins1.scale = 0.8;

        this.sprite.addAnimation('idle',this.idleAnim)

        this.sprite.setCollider('rectangle',0,4,16,8);

    }

    movement(){
        if(this.canMove===true){
            if(keyDown('w')||keyDown(UP_ARROW)){
                this.sprite.y -= 5;
            }
            else if(keyDown('a')||keyDown(LEFT_ARROW)){
                this.sprite.x -= 5;
                this.sprite.mirrorX(-1);
            }
            else if(keyDown('d')||keyDown(RIGHT_ARROW)){
                this.sprite.x += 5;
                this.sprite.mirrorX(1);
            }
            else if(keyDown('s')||keyDown(DOWN_ARROW)){
                this.sprite.y += 5;
            }
        }
    }

    use(){
        if(keyWentDown('E')){
            if(this.helditem === "hpPot"&&this.hp<3){
                this.hp++
                this.helditem = ''
            }
        }
    }

    updatePlayerUI(){
        this.hp1.x = this.sprite.x-20;
        this.hp2.x = this.sprite.x+2;
        this.hp3.x = this.sprite.x+24;

        this.hp1.y = this.sprite.y-35;
        this.hp2.y = this.sprite.y-35;
        this.hp3.y = this.sprite.y-35;

        this.coins1.x = this.sprite.x+10;
        this.coins1.y = this.sprite.y-(-40);

        if(this.hp === 3){
            this.hp3.visible = true;
            this.hp2.visible = true;
            this.hp1.visible = true;
        }

        if(this.hp === 2){
            this.hp3.visible = false;
            this.hp2.visible = true;
            this.hp1.visible = true;
        }

        if(this.hp === 1){
            this.hp3.visible = false;
            this.hp2.visible = false;
            this.hp1.visible = true;
        }

        if(this.hp === 0){
            this.hp3.visible = false;
            this.hp2.visible = false;
            this.hp1.visible = false;
        }

        if(this.hp < 0){
            this.hp = 0;
        }

        if(this.hp > 3){
            this.hp = 3;
        }
    }

    invulnerabilityLogic(){
        if(this.invulnerability>0){
            this.invulnerability -= 1;
        }
    }

}