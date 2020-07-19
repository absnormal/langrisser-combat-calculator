var selectedParty = '主角光環';
var selectedChar = '莉亞娜';
var selectedSkill = '冰凍', selectedSoldier = '巫女';
var selectedTerrain = '道路', selectedEnchant = '時鐘';

// skills depend on character
function displaySkill(charName){
    var skills = document.getElementsByClassName(charName);
    for(var i=0; i<skills.length; i++){
        if(skills[i].classList.contains('skill')){
            skills[i].style = '';
        }
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

// soldiers depend on character
function displaySoldier(charName){
    var soldiers = document.getElementsByClassName(charName);
    for(var i=0; i<soldiers.length; i++){
        if(soldiers[i].classList.contains('soldier')){
            soldiers[i].style = '';
        }
    }
};
function hideSoldier(){
    var soldiers = document.getElementsByClassName('soldier');
    for(var i=0; i<soldiers.length; i++){
        soldiers[i].style = 'display: none;';
    }
};
function selectSoldier(soldierName){
    // de-select old soldier
    if(document.getElementById(selectedSoldier).classList.contains('selected')){
        document.getElementById(selectedSoldier).classList.remove('selected');
    }
    // select new soldier
    document.getElementById(soldierName).classList.add('selected');
    selectedSoldier = soldierName;
};

// terrains are independent
function selectTerrain(terrainName){
    // de-select old terrain
    if(document.getElementById(selectedTerrain).classList.contains('selected')){
        document.getElementById(selectedTerrain).classList.remove('selected');
    }
    // select new terrain
    document.getElementById(terrainName).classList.add('selected');
    selectedTerrain = terrainName;
};

// enchants are independent
function selectEnchant(enchantName){
    // de-select old Enchant
    if(document.getElementById(selectedEnchant).classList.contains('selected')){
        document.getElementById(selectedEnchant).classList.remove('selected');
    }
    // select new enchant
    document.getElementById(enchantName).classList.add('selected');
    selectedEnchant = enchantName;
};

// characters depend on party
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
    // hide all soldiers and display soldiers in char
    hideSoldier();
    displaySoldier(charName);
    // select new char & first skill / soldier
    document.getElementById(charName).classList.add('selected');
    selectedChar = charName;
    selectSkill(document.getElementsByClassName(charName+' skill')[0].id);
    selectSoldier(document.getElementsByClassName(charName+' soldier')[0].id);
    selectTerrain(selectedTerrain);
    selectEnchant(selectedEnchant);
};

// parties are independent
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

