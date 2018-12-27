

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

        if(e.key === 'c'){
            

            if(action !== 'drw-swrd' && action !== 'shte-swrd'){
                
                if(action === 'idle'){
                    contAnimation = 0;
                    action = 'drw-swrd';
                }


            }

        }

    }

}