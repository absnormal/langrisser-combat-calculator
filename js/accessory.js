/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdAccessory(side, army, job){
    var holds = [];
    switch(army){
        case '劍兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '槍兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '騎兵':
            holds = ['NO', '飾品', '妖步'];
            break;
        case '飛兵':
            holds = ['NO', '飾品', '妖步'];
            break;
        case '弓兵':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '刺客':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '水兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '法師':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '魔物':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '僧侶':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '龍':
            holds = ['NO', '飾品', '鞋子', '妖步'];
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

/* displayEquipment depends on char JOBS, select first accessory found */
function displayAccessory(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdAccessory(side, army, job);

    var accessoryList = [];
    // get all usable accessoryList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var accessoryfilter = accessory.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<accessoryfilter.length; j++){
            // get NAMES only
            accessoryList.push(accessoryfilter[j].NAME);
        }
    }
    // display accessory by NAMES
    for(var i=0; i<accessoryList.length; i++){
        if(side == 'defense'){
            document.getElementById(accessoryList[i]+'d').style = '';
            // select first item found when no accessory selected
            if(!combat.defAccSel){
                document.getElementById(accessoryList[i]+'d').classList.add('selected');
                combat.defAccessory = accessory.find(x => x.NAME === accessoryList[i]);
                document.getElementById('defAccessory').innerHTML = "飾品:" + accessoryList[i];
                combat.defAccSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(accessoryList[i]).style = '';
            // select first item found when no accessory selected
            if(!combat.offAccSel){
                document.getElementById(accessoryList[i]).classList.add('selected');
                combat.offAccessory = accessory.find(x => x.NAME === accessoryList[i]);
                document.getElementById('offAccessory').innerHTML = "飾品:" + accessoryList[i];
                combat.offAccSel = true;
            }
        }
    }
    // select first item when accessory is selected
    if(side == 'defense') selectAccessory(side, accessoryList[0]+'d');
    else if(side == 'offense') selectAccessory(side, accessoryList[0]);
};
function hideAccessory(side){
    var accessoryList = document.getElementsByClassName('accessory ' + side);
    for(var i=0; i<accessoryList.length; i++){
        accessoryList[i].style = 'display: none;';
    }
};
function selectAccessory(side, accessoryName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        accessoryName = accessoryName.slice(0, -1);
        // de-select old accessory
        if(document.getElementById(combat.defAccessory.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defAccessory.NAME + 'd').classList.remove('selected')
        }
        // select new accessory
        document.getElementById(accessoryName+'d').classList.add('selected');
        combat.defAccessory = accessory.find(x => x.NAME === accessoryName);
        document.getElementById('defAccessory').innerHTML = "盔甲:" + accessoryName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old accessory
        if(document.getElementById(combat.offAccessory.NAME).classList.contains('selected')){
            document.getElementById(combat.offAccessory.NAME).classList.remove('selected')
        }
        // select new accessory
        document.getElementById(accessoryName).classList.add('selected');
        combat.offAccessory = accessory.find(x => x.NAME === accessoryName);
        document.getElementById('offAccessory').innerHTML = "盔甲:" + accessoryName;
    }
};

function loadAccessoryDesc(side, equipment){
    for(let i=0; i<accessory.length; i++){
        if((side == 'defense' && equipment.slice(0,-1) == accessory[i].NAME) ||
            (side == 'offense' && equipment == accessory[i].NAME)){
            let table = document.getElementById(equipment+"TABLE");
            let baseAccessory = document.getElementById(equipment);
            let x = baseAccessory.getBoundingClientRect().top + 30;
            let y = baseAccessory.getBoundingClientRect().left + 30;
            document.getElementById(equipment+"NAME").innerHTML = accessory[i].NAME;
            document.getElementById(equipment+"DESC").innerHTML = accessory[i].DESC;
            table.style.top = x + 'px';
            table.style.left = y + 'px';
            break;
        }
    }
};

function getPREAccessorySkill(side){
    if(side == 'offense'){
        var accessory = combat.offAccessory;
        if(accessory.ATK != undefined) combat.offATKRATE += accessory.ATK;
        if(accessory.INT != undefined) combat.offINTRATE += accessory.INT;
        if(accessory.DEF != undefined) combat.offDEFRATE += accessory.DEF;
        if(accessory.MDEF != undefined) combat.offMDEFRATE += accessory.MDEF;
        if(accessory.DEX != undefined) combat.offDEXRATE += accessory.DEX;
        if(accessory.HEAL != undefined) combat.offHEAL += accessory.HEAL;
        if(accessory.HEALED != undefined) combat.offHEALED += accessory.HEALED;
    }
    else if(side == 'defefnse'){
        var accessory = combat.defAccessory;
        if(accessory.ATK != undefined) combat.defATKRATE += accessory.ATK;
        if(accessory.INT != undefined) combat.defINTRATE += accessory.INT;
        if(accessory.DEF != undefined) combat.defDEFRATE += accessory.DEF;
        if(accessory.MDEF != undefined) combat.defMDEFRATE += accessory.MDEF;
        if(accessory.DEX != undefined) combat.defDEXRATE += accessory.DEX;
        if(accessory.HEAL != undefined) combat.defHEAL += accessory.HEAL;
        if(accessory.HEALED != undefined) combat.defHEALED += accessory.HEALED;
    }
};

