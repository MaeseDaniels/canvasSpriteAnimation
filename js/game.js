var canvas;
var ctx ;
var background;

var action = 'jump';
var contAnimation = 0;

var interval = 125; //normal speed 125

var actionAnimation= {
    'idle' : idleAnimation,
    'idle-swrd': idleSwrdAnimation,
    'jump' : jumpAnimation,
    'drw-swrd' : swrdDrwAnimation,
    'shte-swrd' : swrdShteAnimation

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
}

function animation(){

    ctx.clearRect(0,0,800,600);


    ctx.drawImage(background, 0, 0, 800, 600);
    ctx.drawImage(actionAnimation[action][contAnimation],350,465, 100, 100);


    if(contAnimation >= actionAnimation[action].length-1){
        if(action === 'jump'){
            action = 'idle';
        } 
        if(action === 'drw-swrd'){
            action = 'idle-swrd';
        }
        contAnimation=0;
    }else{
        contAnimation++;
    }
    
    // window.requestAnimationFrame(animation);
}