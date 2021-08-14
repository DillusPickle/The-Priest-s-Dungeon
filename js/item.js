class Item{
    constructor(x,y,type){
        this.x = x;
        this.y = y;
        this.type = type;
        this.sprite = createSprite(this.x,this.y,1,1);
        this.pricetag = createSprite(this.x+24,this.y+45,1,1);
    }
    decideType(){
        if(this.type === "50/50"){
            this.animation = loadAnimation('images/healthpot1.png','images/healthpot2.png','images/healthpot1.png','images/healthpot3.png');
            this.price = loadImage('images/pricetag$2.png');
            this.TrueType = 'hpPot'
        }
        else if(this.type = 'bomb'){
            this.animation = loadAnimation('images/bomb1.png','images/bomb2.png','images/bomb1.png','images/bomb3.png');
            this.price = loadImage('images/pricetag$7.png');
            this.TrueType = 'bomb';
        }

        this.sprite.addAnimation('label',this.animation);
        this.pricetag.addImage('label',this.price);
        this.pricetag.rotation = 39;
    }

    purchase(){
        if(player.sprite.isTouching(this.sprite)&&this.sprite.visible === true){
            if(this.TrueType === 'knife'&&player.coins >= 3){
                player.coins -= 3;
                player.helditem = 'knife';
                this.sprite.visible = false;
                //this.pricetag.visible = false;
            }
            if(this.TrueType === 'hpPot'&&player.coins >= 2){
                player.coins -= 2;
                player.helditem = 'hpPot';
                this.sprite.visible = false;
                //this.pricetag.visible = false;
            }
            if(this.TrueType === 'bomb'&&player.coins >= 7){
                player.coins -= 7;
                player.helditem = 'bomb';
                this.sprite.visible = false;
                //this.pricetag.visible = false;
            }
            coinSFX.play();
        }
    }
}