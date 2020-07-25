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

// soldiers depend on character
function displaySoldier(P_charName, side){
    let soldiers = document.getElementsByClassName(P_charName + ' ' + side);
    for(let i=0; i<soldiers.length; i++){
        if(soldiers[i].classList.contains('soldier')){
            soldiers[i].style = '';
        }
    }
};
function hideSoldier(side){
    let soldiers = document.getElementsByClassName('soldier ' + side);
    for(let i=0; i<soldiers.length; i++){
        soldiers[i].style = 'display: none;';
    }
};
function selectSoldier(soldierName){
    // defense
    if(soldierName.charAt(soldierName.length - 1) == 'd'){
        // de-select old soldier
        if(document.getElementById(defenseSoldier).classList.contains('selected')){
            document.getElementById(defenseSoldier).classList.remove('selected');
        }
        // select new soldier
        document.getElementById(soldierName).classList.add('selected');
        defenseSoldier = soldierName;
    }
    // offense
    else{
        // de-select old soldier
        if(document.getElementById(offenseSoldier).classList.contains('selected')){
            document.getElementById(offenseSoldier).classList.remove('selected');
        }
        // select new soldier
        document.getElementById(soldierName).classList.add('selected');
        offenseSoldier = soldierName;
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
        // hide all soldiers and display soldiers in char
        hideSoldier('defense');
        displaySoldier(charName.slice(0, -1), 'defense');
        // hide and display equipments by JOB1
        combat.defChar = char.find(x => x.NAME === charName.slice(0, -1));
        displayArmy('defense');
        displayJob('defense');
        hideWeapon('defense');
        displayWeapon('defense');
        hideArmor('defense');
        displayArmor('defense');
        hideHelmet('defense');
        displayHelmet('defense');
        // select new char & first soldier
        document.getElementById(charName).classList.add('selected');
        defenseChar = charName;
        selectSoldier(document.getElementsByClassName(charName.slice(0, -1) + ' soldier defense')[0].id);
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
        // hide all soldiers and display soldiers in char
        hideSoldier('offense');
        displaySoldier(charName, 'offense');
        // hide and display equipments by JOB1
        combat.offChar = char.find(x => x.NAME === charName);
        displayArmy('offense');
        displayJob('offense');
        hideWeapon('offense');
        displayWeapon('offense');
        hideArmor('offense');
        displayArmor('offense');
        hideHelmet('offense');
        displayHelmet('offense');
        // select new char & normal attack & first soldier
        document.getElementById(charName).classList.add('selected');
        offenseChar = charName;
        selectSkill(document.getElementById('普攻(物)').id);
        selectSoldier(document.getElementsByClassName(charName+' soldier offense')[0].id);
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
        selectChar(document.getElementsByClassName(partyName + ' ' + 'offense')[0].id);
    }
};

