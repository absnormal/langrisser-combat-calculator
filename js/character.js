var selectedParty = 'Chosen', selectedChar = 'Riana', selectedSkill = 'freeze-strike';

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

function selectSkill(skillName){
    // de-select old skill
    if(document.getElementById(selectedSkill).classList.contains('selected')){
        document.getElementById(selectedSkill).classList.remove('selected');
    }
    // select new skill
    document.getElementById(skillName).classList.add('selected');
    selectedSkill = skillName;
};

function displayChar(partyName){
    var chars = document.getElementsByClassName(partyName);
    for(var i=0; i<chars.length; i++){
        chars[i].style = '';
    }
};

function hideChar(){
    var chars = document.getElementsByClassName('character');
    for(var i=0; i<chars.length; i++){
        chars[i].style = 'display: none;'
    }
};

function selectChar(charName){
    // de-select old char
    if(document.getElementById(selectedChar).classList.contains('selected')){
        document.getElementById(selectedChar).classList.remove('selected');
    }
    // hide all skills and display skills in char
    hideSkill();
    displaySkill(charName);
    // select new char & first skill
    document.getElementById(charName).classList.add('selected');
    selectedChar = charName;
    selectSkill(document.getElementByClassName(charName)[0].id);
};

function selectParty(partyName){
    // de-select old party
    if(document.getElementById(selectedParty).classList.contains('selected')){
        document.getElementById(selectedParty).classList.remove('selected');
    }
    // hide all chars and display all chars in party
    hideChar();
    displayChar(partyName);
    // select new party & first char
    document.getElementById(partyName).classList.add('selected');
    selectedParty = partyName;
    selectChar(document.getElementsByClassName(partyName)[0].id);
};

