/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdHelmet(side, army, job){
    var holds = [];
    switch(army){
        case '劍兵':
            holds = ['NO', '重盔'];
            break;
        case '槍兵':
            holds = ['NO', '重盔'];
            break;
        case '騎兵':
            holds = ['NO', '重盔'];
            break;
        case '飛兵':
            holds = ['NO', '皮盔'];
            break;
        case '弓兵':
            holds = ['NO', '皮盔'];
            break;
        case '刺客':
            holds = ['NO', '皮盔'];
            break;
        case '水兵':
            holds = ['NO', '皮盔'];
            break;
        case '法師':
            holds = ['NO', '法帽'];
            break;
        case '魔物':
            holds = ['NO', '法帽'];
            break;
        case '僧侶':
            holds = ['NO', '法帽'];
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

/* displayEquipment depends on char JOBS, select first helmet found */
function displayHelmet(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdHelmet(side, army, job);

    var helmetList = [];
    // get all usable helmetList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var helmetfilter = helmet.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<helmetfilter.length; j++){
            // get NAMES only
            helmetList.push(helmetfilter[j].NAME);
        }
    }
    // display helmet by NAMES
    for(var i=0; i<helmetList.length; i++){
        if(side == 'defense'){
            document.getElementById(helmetList[i]+'d').style = '';
            // select first item found when no helmet selected
            if(!combat.defHelSel){
                document.getElementById(helmetList[i]+'d').classList.add('selected');
                combat.defHelmet = helmet.find(x => x.NAME === helmetList[i]);
                document.getElementById('defHelmet').innerHTML = "頭盔:" + helmetList[i];
                combat.defHelSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(helmetList[i]).style = '';
            // select first item found when no helmet selected
            if(!combat.offHelSel){
                document.getElementById(helmetList[i]).classList.add('selected');
                combat.offHelmet = helmet.find(x => x.NAME === helmetList[i]);
                document.getElementById('offHelmet').innerHTML = "頭盔:" + helmetList[i];
                combat.offHelSel = true;
            }
        }
    }
    // select first item when helmet is selected
    if(side == 'defense') selectHelmet(side, helmetList[0]+'d');
    else if(side == 'offense') selectHelmet(side, helmetList[0]);
};
function hideHelmet(side){
    var helmetList = document.getElementsByClassName('helmet ' + side);
    for(var i=0; i<helmetList.length; i++){
        helmetList[i].style = 'display: none;';
    }
};
function selectHelmet(side, helmetName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        helmetName = helmetName.slice(0, -1);
        // de-select old helmet
        if(document.getElementById(combat.defHelmet.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defHelmet.NAME + 'd').classList.remove('selected')
        }
        // select new helmet
        document.getElementById(helmetName+'d').classList.add('selected');
        combat.defHelmet = helmet.find(x => x.NAME === helmetName);
        document.getElementById('defHelmet').innerHTML = "頭盔:" + helmetName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old helmet
        if(document.getElementById(combat.offHelmet.NAME).classList.contains('selected')){
            document.getElementById(combat.offHelmet.NAME).classList.remove('selected')
        }
        // select new helmet
        document.getElementById(helmetName).classList.add('selected');
        combat.offHelmet = helmet.find(x => x.NAME === helmetName);
        document.getElementById('offHelmet').innerHTML = "頭盔:" + helmetName;
    }
};


function loadHelmetDesc(side, equipment){
    for(let i=0; i<helmet.length; i++){
        if((side == 'defense' && equipment.slice(0,-1) == helmet[i].NAME) ||
            (side == 'offense' && equipment == helmet[i].NAME)){
            let table = document.getElementById(equipment+"TABLE");
            let baseHelmet = document.getElementById(equipment);
            let x = baseHelmet.getBoundingClientRect().top + 30;
            let y = baseHelmet.getBoundingClientRect().left + 30;
            document.getElementById(equipment+"NAME").innerHTML = helmet[i].NAME;
            document.getElementById(equipment+"DESC").innerHTML = helmet[i].DESC;
            table.style.top = x + 'px';
            table.style.left = y + 'px';
            break;
        }
    }
};

function getPREHelmetSkill(side){
    if(side == 'offense'){
        var helmet = combat.offHelmet;
        if(helmet.ATK != undefined) combat.offATKRATE += helmet.ATK;
        if(helmet.INT != undefined) combat.offINTRATE += helmet.INT;
        if(helmet.DEF != undefined) combat.offDEFRATE += helmet.DEF;
        if(helmet.MDEF != undefined) combat.offMDEFRATE += helmet.MDEF;
        if(helmet.DEX != undefined) combat.offDEXRATE += helmet.DEX;
        if(helmet.HEAL != undefined) combat.offHEAL += helmet.HEAL;
        if(helmet.HEALED != undefined) combat.offHEALED += helmet.HEALED;
    }
    else if(side == 'defefnse'){
        var helmet = combat.defHelmet;
        if(helmet.ATK != undefined) combat.defATKRATE += helmet.ATK;
        if(helmet.INT != undefined) combat.defINTRATE += helmet.INT;
        if(helmet.DEF != undefined) combat.defDEFRATE += helmet.DEF;
        if(helmet.MDEF != undefined) combat.defMDEFRATE += helmet.MDEF;
        if(helmet.DEX != undefined) combat.defDEXRATE += helmet.DEX;
        if(helmet.HEAL != undefined) combat.defHEAL += helmet.HEAL;
        if(helmet.HEALED != undefined) combat.defHEALED += helmet.HEALED;
    }
};

