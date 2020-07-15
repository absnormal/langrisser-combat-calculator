var selected = 'no';

function displaySkill(charName){
    var skills = document.getElementsByClassName(charName);
    for(var i=0; i<skills.length; i++){
        skills[i].style = '';
    }
};

function hideSkill(){
    var skills = document.getElementsByClassName('skill');
    for(var i=0; i<skills.length; i++){
        skills[i].style = 'display: none;';
    }
};

function selectChar(charName){
    if(document.getElementById(charName).classList.contains('selected')){
        document.getElementById(charName).classList.remove('selected');
        hideSkill();
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
        hideSkill();
        displaySkill(charName);
        selected = 'yes';
    }
};

