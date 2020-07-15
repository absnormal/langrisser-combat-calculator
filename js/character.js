var selected = 'no';

function selectChar(charName){
    if(document.getElementById(charName).classList.contains('selected')){
        document.getElementById(charName).classList.remove('selected');
        selected = 'no';
    }
    else{
        if(selected == 'yes'){
            var chars = document.getElementsByClassName('character');
            for(var i=0; i<chars.length; i++){
                if(chars[i].classList.contains('selected')){
                    chars[i].classList.remove('selected');
                }
            }
        }
        document.getElementById(charName).classList.add('selected');
        selected = 'yes';
    }
};
