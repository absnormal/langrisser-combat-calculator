var selectedChar = 'Rachel', selectedParty = 'Chosen';

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
    // select new char
    document.getElementById(charName).classList.add('selected');
    selectedChar = charName;
    // hide all skills and display skills in char
    hideSkill();
    displaySkill(charName);
};

function selectParty(partyName){
    // de-select old party
    if(document.getElementById(selectedParty).classList.contains('selected')){
        document.getElementById(selectedParty).classList.remove('selected');
    }
    // select new party & char
    document.getElementById(partyName).classList.add('selected');
    selectedParty = partyName;
    selectChar(document.getElementsByClassName(partyName)[0].id);
    // hide all chars and display all chars in party
    hideChar();
    displayChar(partyName);
};

