

function attachEvents(){
    window.onkeydown = function(e){
        e = e || window.event;
        console.log(e.keyCode);
        if(e.keyCode === 32){

           if(action !== 'jump') {
               contAnimation = 0;
                action = 'jump';
            }
        }
        else if(e.keyCode === 17){
            if(action === "idle-swrd"){
                clearTimeout(contAttacksTimeOut);
                contAnimation = 0;
                action = 'basic-attack';
            }
        }
        else if (e.keyCode === 40){
            if(action !== 'crouch' && action !== 'shte-swrd'){
                contAnimation = 0;
                if(action === "idle-swrd"){
                    action = 'shte-swrd';

                }
                else{
                    action = 'crouch';
                }
                
                

            }
        }

        if(e.key === 'c'){
            

            if(action !== 'drw-swrd' && action !== 'shte-swrd'){
                
                if(action === 'idle'){
                    contAnimation = 0;
                    action = 'drw-swrd';
                }
                else if(action === 'idle-swrd'){
                    contAnimation = 0;
                    action = 'shte-swrd';
                }


            }

        }



    }


    window.onkeyup = function(e){

        e = e || window.event;

        if (e.keyCode === 40){
            contAnimation = 0;
            action = 'idle';

            
        }
    
    }

}