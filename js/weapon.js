/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdWeapon(side, army, job){
    var holds = [];
    switch(army){
        case '劍兵':
            holds = ['NO', '劍', '匕首', '錘'];
            break;
        case '槍兵':
            holds = ['NO', '槍', '斧'];
            break;
        case '騎兵':
            holds = ['NO', '劍', '槍'];
            break;
        case '飛兵':
            holds = ['NO', '槍', '斧'];
            break;
        case '弓兵':
            holds = ['NO', '匕首', '弓'];
            break;
        case '刺客':
            holds = ['NO', '匕首', '弓'];
            break;
        case '水兵':
            holds = ['NO', '錘', '斧'];
            break;
        case '法師':
            holds = ['NO', '法杖'];
            break;
        case '魔物':
            holds = ['NO', '法杖'];
            break;
        case '僧侶':
            holds = ['NO', '法杖', '錘'];
            break;
        case '龍':
            holds = ['NO'];
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

/* displayEquipment depends on char JOBS, select first weapon found */
function displayWeapon(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdWeapon(side, army, job);

    var weaponList = [];
    // get all usable weaponList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var weaponfilter = weapon.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<weaponfilter.length; j++){
            // get NAMES only
            weaponList.push(weaponfilter[j].NAME);
        }
    }
    // display weapon by NAMES
    for(var i=0; i<weaponList.length; i++){
        if(side == 'defense'){
            document.getElementById(weaponList[i]+'d').style = '';
            // select first item found when no weapon selected
            if(!combat.defWeaSel){
                document.getElementById(weaponList[i]+'d').classList.add('selected');
                combat.defWeapon = weapon.find(x => x.NAME === weaponList[i]);
                document.getElementById('defWeapon').innerHTML = "武器:" + weaponList[i];
                combat.defWeaSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(weaponList[i]).style = '';
            // select first item found when no weapon selected
            if(!combat.offWeaSel){
                document.getElementById(weaponList[i]).classList.add('selected');
                combat.offWeapon = weapon.find(x => x.NAME === weaponList[i]);
                document.getElementById('offWeapon').innerHTML = "武器:" + weaponList[i];
                combat.offWeaSel = true;
            }
        }
    }
    // select first item when weapon is selected
    if(side == 'defense') selectWeapon(side, weaponList[0]+'d');
    else if(side == 'offense') selectWeapon(side, weaponList[0]);
};

function hideWeapon(side){
    var weaponList = document.getElementsByClassName('weapon ' + side);
    for(var i=0; i<weaponList.length; i++){
        weaponList[i].style = 'display: none;';
    }
};

function selectWeapon(side, weaponName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        weaponName = weaponName.slice(0, -1);
        // de-select old weapon
        if(document.getElementById(combat.defWeapon.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defWeapon.NAME + 'd').classList.remove('selected')
        }
        // select new weapon
        document.getElementById(weaponName+'d').classList.add('selected');
        combat.defWeapon = weapon.find(x => x.NAME === weaponName);
        document.getElementById('defWeapon').innerHTML = "武器:" + weaponName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old weapon
        if(document.getElementById(combat.offWeapon.NAME).classList.contains('selected')){
            document.getElementById(combat.offWeapon.NAME).classList.remove('selected')
        }
        // select new weapon
        document.getElementById(weaponName).classList.add('selected');
        combat.offWeapon = weapon.find(x => x.NAME === weaponName);
        document.getElementById('offWeapon').innerHTML = "武器:" + weaponName;
    }
};

function loadWeaponDesc(side, equipment){
    for(let i=0; i<weapon.length; i++){
        if((side == 'defense' && equipment.slice(0,-1) == weapon[i].NAME) ||
            (side == 'offense' && equipment == weapon[i].NAME)){
            let table = document.getElementById(equipment+"TABLE");
            let baseWeapon = document.getElementById(equipment);
            let x = baseWeapon.getBoundingClientRect().top + 30;
            let y = baseWeapon.getBoundingClientRect().left + 30;
            document.getElementById(equipment+"NAME").innerHTML = weapon[i].NAME;
            document.getElementById(equipment+"DESC").innerHTML = weapon[i].DESC;
            table.style.top = x + 'px';
            table.style.left = y + 'px';
            break;
        }
    }
};

function getPREWeaponSkill(side){
    if(side == 'offense'){
        var weapon = combat.offWeapon;
        if(weapon.ATK != undefined) combat.offATKRATE += weapon.ATK;
        if(weapon.INT != undefined) combat.offINTRATE += weapon.INT;
        if(weapon.DEF != undefined) combat.offDEFRATE += weapon.DEF;
        if(weapon.MDEF != undefined) combat.offMDEFRATE += weapon.MDEF;
        if(weapon.DEX != undefined) combat.offDEXRATE += weapon.DEX;
        if(weapon.HEAL != undefined) combat.offHEAL += weapon.HEAL;
        if(weapon.HEALED != undefined) combat.offHEALED += weapon.HEALED;
    }
    else if(side == 'defefnse'){
        var weapon = combat.defWeapon;
        if(weapon.ATK != undefined) combat.defATKRATE += weapon.ATK;
        if(weapon.INT != undefined) combat.defINTRATE += weapon.INT;
        if(weapon.DEF != undefined) combat.defDEFRATE += weapon.DEF;
        if(weapon.MDEF != undefined) combat.defMDEFRATE += weapon.MDEF;
        if(weapon.DEX != undefined) combat.defDEXRATE += weapon.DEX;
        if(weapon.HEAL != undefined) combat.defHEAL += weapon.HEAL;
        if(weapon.HEALED != undefined) combat.defHEALED += weapon.HEALED;
    }
};

