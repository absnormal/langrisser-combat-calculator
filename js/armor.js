/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdArmor(side, army, job){
    var holds = [];
    switch(army){
        case '劍兵':
            holds = ['NO', '重甲'];
            break;
        case '槍兵':
            holds = ['NO', '重甲'];
            break;
        case '騎兵':
            holds = ['NO', '重甲'];
            break;
        case '飛兵':
            holds = ['NO', '輕甲'];
            break;
        case '弓兵':
            holds = ['NO', '輕甲'];
            break;
        case '刺客':
            holds = ['NO', '輕甲'];
            break;
        case '水兵':
            holds = ['NO', '輕甲'];
            break;
        case '法師':
            holds = ['NO', '布甲'];
            break;
        case '魔物':
            holds = ['NO', '布甲'];
            break;
        case '僧侶':
            holds = ['NO', '布甲'];
            break;
        case '龍':
            holds = ['NO', '輕甲'];
            break;
    }
    /* add new cases to new heros */
    /*
    switch(job){
        case '':
            holds.push('');
            break;
    }
    */
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first armor found */
function displayArmor(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdArmor(side, army, job);

    var armorList = [];
    // get all usable armorList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var armorfilter = armor.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<armorfilter.length; j++){
            // get NAMES only
            armorList.push(armorfilter[j].NAME);
        }
    }
    // display armor by NAMES
    for(var i=0; i<armorList.length; i++){
        if(side == 'defense'){
            document.getElementById(armorList[i]+'d').style = '';
            // select first item found when no armor selected
            if(!combat.defArmSel){
                document.getElementById(armorList[i]+'d').classList.add('selected');
                combat.defArmor = armor.find(x => x.NAME === armorList[i]);
                document.getElementById('defArmor').innerHTML = "盔甲:" + armorList[i];
                combat.defArmSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(armorList[i]).style = '';
            // select first item found when no armor selected
            if(!combat.offArmSel){
                document.getElementById(armorList[i]).classList.add('selected');
                combat.offArmor = armor.find(x => x.NAME === armorList[i]);
                document.getElementById('offArmor').innerHTML = "盔甲:" + armorList[i];
                combat.offArmSel = true;
            }
        }
    }
    // select first item when armor is selected
    if(side == 'defense') selectArmor(side, armorList[0]+'d');
    else if(side == 'offense') selectArmor(side, armorList[0]);
};
function hideArmor(side){
    var armorList = document.getElementsByClassName('armor ' + side);
    for(var i=0; i<armorList.length; i++){
        armorList[i].style = 'display: none;';
    }
};
function selectArmor(side, armorName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        armorName = armorName.slice(0, -1);
        // de-select old armor
        if(document.getElementById(combat.defArmor.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defArmor.NAME + 'd').classList.remove('selected')
        }
        // select new armor
        document.getElementById(armorName+'d').classList.add('selected');
        combat.defArmor = armor.find(x => x.NAME === armorName);
        document.getElementById('defArmor').innerHTML = "盔甲:" + armorName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old armor
        if(document.getElementById(combat.offArmor.NAME).classList.contains('selected')){
            document.getElementById(combat.offArmor.NAME).classList.remove('selected')
        }
        // select new armor
        document.getElementById(armorName).classList.add('selected');
        combat.offArmor = armor.find(x => x.NAME === armorName);
        document.getElementById('offArmor').innerHTML = "盔甲:" + armorName;
    }
};

function loadArmorDesc(side, equipment){
    for(let i=0; i<armor.length; i++){
        if((side == 'defense' && equipment.slice(0,-1) == armor[i].NAME) ||
            (side == 'offense' && equipment == armor[i].NAME)){
            let table = document.getElementById(equipment+"TABLE");
            let baseArmor = document.getElementById(equipment);
            let x = baseArmor.getBoundingClientRect().top + 30;
            let y = baseArmor.getBoundingClientRect().left + 30;
            document.getElementById(equipment+"NAME").innerHTML = armor[i].NAME;
            document.getElementById(equipment+"DESC").innerHTML = armor[i].DESC;
            table.style.top = x + 'px';
            table.style.left = y + 'px';
            break;
        }
    }
};

function getPREArmorSkill(side){
    if(side == 'offense'){
        var armor = combat.offArmor;
        if(armor.ATK != undefined) combat.offATKRATE += armor.ATK;
        if(armor.INT != undefined) combat.offINTRATE += armor.INT;
        if(armor.DEF != undefined) combat.offDEFRATE += armor.DEF;
        if(armor.MDEF != undefined) combat.offMDEFRATE += armor.MDEF;
        if(armor.DEX != undefined) combat.offDEXRATE += armor.DEX;
        if(armor.HEAL != undefined) combat.offHEAL += armor.HEAL;
        if(armor.HEALED != undefined) combat.offHEALED += armor.HEALED;
    }
    else if(side == 'defefnse'){
        var armor = combat.defArmor;
        if(armor.ATK != undefined) combat.defATKRATE += armor.ATK;
        if(armor.INT != undefined) combat.defINTRATE += armor.INT;
        if(armor.DEF != undefined) combat.defDEFRATE += armor.DEF;
        if(armor.MDEF != undefined) combat.defMDEFRATE += armor.MDEF;
        if(armor.DEX != undefined) combat.defDEXRATE += armor.DEX;
        if(armor.HEAL != undefined) combat.defHEAL += armor.HEAL;
        if(armor.HEALED != undefined) combat.defHEALED += armor.HEALED;
    }
};

