var idleAnimation = [];
var idleSwrdAnimation = [];
var jumpAnimation = [];
var swrdDrwAnimation = [];
var swrdShteAnimation = [];

function fillAnimations(){
    fillIdleAnimation();
    fillJumpAnimation();
    fillSwrdDrwAnimation();
    fillSwrdShteAnimation();
}


function fillIdleAnimation(){
    idleAnimation[0] =  new Image();
    idleAnimation[0].src = './animation/idle/adventurer-idle-00.png';

    idleAnimation[1] =  new Image();
    idleAnimation[1].src = './animation/idle/adventurer-idle-01.png';

    idleAnimation[2] =  new Image();
    idleAnimation[2].src = './animation/idle/adventurer-idle-02.png';

    idleAnimation[3] =  new Image();
    idleAnimation[3].src = './animation/idle/adventurer-idle-03.png';
    

    idleSwrdAnimation[0] =  new Image();
    idleSwrdAnimation[0].src = './animation/idle/idle2/adventurer-idle-2-00.png';

    idleSwrdAnimation[1] =  new Image();
    idleSwrdAnimation[1].src = './animation/idle/idle2/adventurer-idle-2-01.png';

    idleSwrdAnimation[2] =  new Image();
    idleSwrdAnimation[2].src = './animation/idle/idle2/adventurer-idle-2-02.png';

    idleSwrdAnimation[3] =  new Image();
    idleSwrdAnimation[3].src = './animation/idle/idle2/adventurer-idle-2-03.png';
   


}


function fillJumpAnimation(){
    
    jumpAnimation[0] =  new Image();
    jumpAnimation[0].src = './animation/jump/adventurer-jump-00.png';

    jumpAnimation[1] =  new Image();
    jumpAnimation[1].src = './animation/jump/adventurer-jump-01.png';
 
    jumpAnimation[2] =  new Image();
    jumpAnimation[2].src = './animation/jump/adventurer-jump-02.png';

    jumpAnimation[3] =  new Image();
    jumpAnimation[3].src = './animation/jump/adventurer-jump-03.png';

    jumpAnimation[4] =  new Image();
    jumpAnimation[4].src = './animation/jump/adventurer-fall-00.png';

    jumpAnimation[5] =  new Image();
    jumpAnimation[5].src = './animation/jump/adventurer-fall-01.png';

    jumpAnimation[6] =  new Image();
    jumpAnimation[6].src = './animation/idle/adventurer-idle-02.png';
    // jumpAnimation[7] =  new Image();
    // jumpAnimation[7].src = './animation/idle/adventurer-idle-03.png';
 
    jumpAnimation[7] =  new Image();
    jumpAnimation[7].src = './animation/jump/adventurer-crouch-00.png';

    jumpAnimation[8] =  new Image();
    jumpAnimation[8].src = './animation/jump/adventurer-crouch-01.png';

    // jumpAnimation[10] =  new Image();
    // jumpAnimation[10].src = './animation/jump/adventurer-crouch-02.png';

    // jumpAnimation[11] =  new Image();
    // jumpAnimation[11].src = './animation/jump/adventurer-crouch-03.png';
   
}

function fillSwrdDrwAnimation(){
    swrdDrwAnimation[0] =  new Image();
    swrdDrwAnimation[0].src = './animation/swrd/adventurer-swrd-drw-00.png';

    swrdDrwAnimation[1] =  new Image();
    swrdDrwAnimation[1].src = './animation/swrd/adventurer-swrd-drw-01.png';

    swrdDrwAnimation[2] =  new Image();
    swrdDrwAnimation[2].src = './animation/swrd/adventurer-swrd-drw-02.png';

    swrdDrwAnimation[3] =  new Image();
    swrdDrwAnimation[3].src = './animation/swrd/adventurer-swrd-drw-03.png';
    
   


}

function fillSwrdShteAnimation(){
    swrdShteAnimation[0] =  new Image();
    swrdShteAnimation[0].src = './animation/swrd/adventurer-swrd-shte-00.png';

    swrdShteAnimation[1] =  new Image();
    swrdShteAnimation[1].src = './animation/swrd/adventurer-swrd-shte-01.png';

    swrdShteAnimation[2] =  new Image();
    swrdShteAnimation[2].src = './animation/swrd/adventurer-swrd-shte-02.png';

    swrdShteAnimation[3] =  new Image();
    swrdShteAnimation[3].src = './animation/swrd/adventurer-swrd-shte-03.png';
    
   


}