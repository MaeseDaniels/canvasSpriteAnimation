var canvas;
var ctx ;
var background;

var action = 'jump';
var contAnimation = 0;
var contAttacks = 0;
var contAttacksTimeOut = null;

var interval = 100; //normal speed 125

var actionAnimation= {
    'idle' : idleAnimation,
    'idle-swrd': idleSwrdAnimation,
    'jump' : jumpAnimation,
    'drw-swrd' : swrdDrwAnimation,
    'shte-swrd' : swrdShteAnimation,
    'crouch' : crouchAnimation,
    'basic-attack' : basicAttackAnimation[contAttacks]

}




window.onload = function(){
    canvas = document.getElementById("field");
    ctx = canvas.getContext("2d");
    background = new Image();
    background.src = './background/Background.png';
    fillAnimations();
    attachEvents();

    // window.requestAnimationFrame(animation);

    setInterval(function(){animation();}, interval);
    // animation();
}

function animation(){

    ctx.clearRect(0,0,800,600);
    ctx.drawImage(background, 0, 0, 800, 600);
    ctx.drawImage(actionAnimation[action][contAnimation],350,465, 100, 100);
    
    if(contAnimation >= actionAnimation[action].length-1){
        if(action === 'jump' ||action === 'shte-swrd'){
            action = 'idle';
        } 
        else if(action === 'drw-swrd'){
            action = 'idle-swrd';
        }
        else if(action === 'basic-attack'){
            
            action = 'idle-swrd';
            if(contAttacks === 2){
                contAttacks= 0;
            }
            else{
                contAttacks++;
            }
            
            actionAnimation['basic-attack'] = basicAttackAnimation[contAttacks];
            contAttacksTimeOut = setTimeout(function(){
                contAttacks = 0;
                actionAnimation['basic-attack'] = basicAttackAnimation[contAttacks];
            },1000);
        }

        
        contAnimation=0;
    }else{
        contAnimation++;
    }
    
    // window.requestAnimationFrame(animation);
}