var offenseParty = '主角光環';
var offenseChar = '莉亞娜';
var offenseSkill = '冰凍', offenseSoldier = '巫女';
var offenseTerrain = '道路', offenseEnchant = '時鐘';

var defenseParty = '主角光環d';
var defenseChar = '莉亞娜d';
var defenseSkill = '冰凍d', defenseSoldier = '巫女d';
var defenseTerrain = '道路d', defenseEnchant = '時鐘d';

// skills depend on character
function displaySkill(P_charName, side){
    document.getElementById('普攻(物)').style = '';
    document.getElementById('普攻(法)').style = '';
    let skills = document.getElementsByClassName(P_charName + ' ' + side);
    for(let i=0; i<skills.length; i++){
        if(skills[i].classList.contains('skill')){
            skills[i].style = '';
        }
    }
};
function hideSkill(side){
    let skills = document.getElementsByClassName('skill ' + side);
    for(let i=0; i<skills.length; i++){
        skills[i].style = 'display: none;';
    }
};
function selectSkill(skillName){
    // defense
    if(skillName.charAt(skillName.length - 1) == 'd'){
        // de-select old skill
        if(document.getElementById(defenseSkill).classList.contains('selected')){
            document.getElementById(defenseSkill).classList.remove('selected');
        }
        // select new skill
        document.getElementById(skillName).classList.add('selected');
        defenseSkill = skillName;
    }
    // offense
    else{
        // de-select old skill
        if(document.getElementById(offenseSkill).classList.contains('selected')){
            document.getElementById(offenseSkill).classList.remove('selected');
        }
        // select new skill
        document.getElementById(skillName).classList.add('selected');
        offenseSkill = skillName;
    }
};

// terrains are independent
function selectTerrain(terrainName){
    // defense
    if(terrainName.charAt(terrainName.length - 1) == 'd'){
        // de-select old terrain
        if(document.getElementById(defenseTerrain).classList.contains('selected')){
            document.getElementById(defenseTerrain).classList.remove('selected');
        }
        // select new terrain
        document.getElementById(terrainName).classList.add('selected');
        defenseTerrain = terrainName;
    }
    // offense
    else{
        // de-select old terrain
        if(document.getElementById(offenseTerrain).classList.contains('selected')){
            document.getElementById(offenseTerrain).classList.remove('selected');
        }
        // select new terrain
        document.getElementById(terrainName).classList.add('selected');
        offenseTerrain = terrainName;
    }
};

// enchants are independent
function selectEnchant(enchantName){
    // defense
    if(enchantName.charAt(enchantName.length - 1) == 'd'){
        // de-select old Enchant
        if(document.getElementById(defenseEnchant).classList.contains('selected')){
            document.getElementById(defenseEnchant).classList.remove('selected');
        }
        // select new enchant
        document.getElementById(enchantName).classList.add('selected');
        defenseEnchant = enchantName;
    }
    // offense
    else{
        // de-select old Enchant
        if(document.getElementById(offenseEnchant).classList.contains('selected')){
            document.getElementById(offenseEnchant).classList.remove('selected');
        }
        // select new enchant
        document.getElementById(enchantName).classList.add('selected');
        offenseEnchant = enchantName;
    }
};

// characters depend on party
function displayChar(P_partyName, side){
    let chars = document.getElementsByClassName(P_partyName + ' ' + side);
    for(let i=0; i<chars.length; i++){
        chars[i].style = '';
    }
};
function hideChar(side){
    let chars = document.getElementsByClassName('character ' + side);
    for(let i=0; i<chars.length; i++){
        chars[i].style = 'display: none;'
    }
};
function selectChar(charName){
    // defense
    if(charName.charAt(charName.length - 1) == 'd'){
        // de-select old char
        if(document.getElementById(defenseChar).classList.contains('selected')){
            document.getElementById(defenseChar).classList.remove('selected');
        }
        combat.defChar = char.find(x => x.NAME === charName.slice(0, -1));
        // hide all soldiers and display soldiers in char
        hideSoldier('defense');
        displaySoldier('defense');
        // hide and display equipments by JOB1
        displayArmy('defense');
        displaySoldArmy('defense');
        displayJob('defense');
        displayHeart('defense');
        hideCommand('defense');
        displayCommand('defense');
        hidePassive('defense');
        displayPassive('defense');
        hideBUFF('defense');
        displayBUFF('defense');
        hideDEBUFF('defense');
        displayDEBUFF('defense');
        hideWeapon('defense');
        displayWeapon('defense');
        hideArmor('defense');
        displayArmor('defense');
        hideHelmet('defense');
        displayHelmet('defense');
        hideAccessory('defense');
        displayAccessory('defense');
        // select new char & first soldier
        document.getElementById(charName).classList.add('selected');
        defenseChar = charName;
        selectTerrain(defenseTerrain);
        selectEnchant(defenseEnchant);
    }
    // offense
    else{
        // de-select old char
        if(document.getElementById(offenseChar).classList.contains('selected')){
            document.getElementById(offenseChar).classList.remove('selected');
        }
        // hide all skills and display skills in char
        hideSkill('offense');
        displaySkill(charName, 'offense');
        combat.offChar = char.find(x => x.NAME === charName);
        // hide all soldiers and display soldiers in char
        hideSoldier('offense');
        displaySoldier('offense');
        // hide and display equipments by JOB1
        displayArmy('offense');
        displaySoldArmy('offense');
        displayJob('offense');
        displayHeart('offense');
        hideCommand('offense');
        displayCommand('offense');
        hidePassive('offense');
        displayPassive('offense');
        hideBUFF('offense');
        displayBUFF('offense');
        hideDEBUFF('offense');
        displayDEBUFF('offense');
        hideWeapon('offense');
        displayWeapon('offense');
        hideArmor('offense');
        displayArmor('offense');
        hideHelmet('offense');
        displayHelmet('offense');
        hideAccessory('offense');
        displayAccessory('offense');
        // select new char & normal attack & first soldier
        document.getElementById(charName).classList.add('selected');
        offenseChar = charName;
        selectSkill(document.getElementById('普攻(物)').id);
        selectTerrain(offenseTerrain);
        selectEnchant(offenseEnchant);
    }
};

// parties are independent
function selectParty(partyName){
    // defense
    if(partyName.charAt(partyName.length - 1) == 'd'){
        // de-select old party
        if(document.getElementById(defenseParty).classList.contains('selected')){
            document.getElementById(defenseParty).classList.remove('selected');
        }
        // hide all chars and display all chars in party
        hideChar('defense');
        displayChar(partyName.slice(0, -1), 'defense');
        // select new party & first char
        document.getElementById(partyName).classList.add('selected');
        defenseParty = partyName;
        combat.defParty = partyName.slice(0, -1);
        selectChar(document.getElementsByClassName(partyName.slice(0, -1) + ' ' + 'defense')[0].id);
    }
    // offense
    else{
        // de-select old party
        if(document.getElementById(offenseParty).classList.contains('selected')){
            document.getElementById(offenseParty).classList.remove('selected');
        }
        // hide all chars and display all chars in party
        hideChar('offense');
        displayChar(partyName, 'offense');
        // select new party & first char
        document.getElementById(partyName).classList.add('selected');
        offenseParty = partyName;
        combat.offParty = partyName;
        selectChar(document.getElementsByClassName(partyName + ' ' + 'offense')[0].id);
    }
};

