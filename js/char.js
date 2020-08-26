function loadTalent(side, characterID){

    if(side == "offense") charNAME = characterID;
    else if(side == 'defense') charNAME = characterID.slice(0, -1);

    charOBJ = char.find(x => x.NAME === charNAME);
    talentOBJ = talent.find(x => x.NAME === charOBJ.TALENT);
    eChar = document.getElementById(characterID);
    eTalent = document.getElementById(characterID+"TALENT");
    eTalentname = document.getElementById(characterID+"TALENTNAME");
    eTalentdesc = document.getElementById(characterID+"DESC");

    // down shift 50px
    y = eChar.getBoundingClientRect().top + 50;
    // right shift 50px
    x = eChar.getBoundingClientRect().left + 50;

    eTalentname.innerHTML = talentOBJ.NAME;
    eTalentdesc.innerHTML = talentOBJ.DESC;
    eTalent.style.top = y + 'px';
    eTalent.style.left = x + 'px';
};

function getArmy(side){
    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(eJobNo == 1)      return eChar.ARMY1;
    else if(eJobNo == 2) return eChar.ARMY2;
    else if(eJobNo == 3) return eChar.ARMY3;
    else if(eJobNo == 4) return eChar.ARMY4;
    else if(eJobNo == 5) return eChar.ARMY5;
};

function displayArmy(side){
    if(side == 'defense'){
        document.getElementById('defcharARMY').innerHTML = '兵種:' + getArmy(side);
    }
    else if(side == 'offense'){
        document.getElementById('offcharARMY').innerHTML = '兵種:' + getArmy(side);
    }
};

function getSoldArmy(side){
    if(side == 'defense') return combat.defSoldier.ARMY;
    else if(side == 'offense') return combat.offSoldier.ARMY;
};

function displaySoldArmy(side){
    if(side == 'defense'){
        document.getElementById('defsoldARMY').innerHTML = '士兵兵種:' + getSoldArmy(side);
    }
    else if(side == 'offense'){
        document.getElementById('offsoldARMY').innerHTML = '士兵兵種:' + getSoldArmy(side);
    }
};

function getJob(side){
    var eJobNo, eChar;
    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(eJobNo == 1)      return eChar.JOB1;
    else if(eJobNo == 2) return eChar.JOB2;
    else if(eJobNo == 3) return eChar.JOB3;
    else if(eJobNo == 4) return eChar.JOB4;
    else if(eJobNo == 5) return eChar.JOB5;
};

function displayJob(side){
    if(side == 'defense'){
        document.getElementById('defcharJOB').innerHTML = '職業:' + getJob(side);
    }
    else if(side == 'offense'){
        document.getElementById('offcharJOB').innerHTML = '職業:' + getJob(side);
    }
};

function getMOVETYPE(side){
    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(eJobNo == 1)      return eChar.MOVETYPE1;
    else if(eJobNo == 2) return eChar.MOVETYPE2;
    else if(eJobNo == 3) return eChar.MOVETYPE3;
    else if(eJobNo == 4) return eChar.MOVETYPE4;
    else if(eJobNo == 5) return eChar.MOVETYPE5;
}

function displayMOVETYPE(side){
    if(side == 'defense'){
        document.getElementById('defMOVETYPE').innerHTML = '部隊移動:' + combat.defMOVETYPE;
    }
    else if(side == 'offense'){
        document.getElementById('offMOVETYPE').innerHTML = '部隊移動:' + combat.offMOVETYPE;
    }
};

function getDmgtype(side){
    var char, jobNo;
    if(side == 'offense'){
        char = combat.offChar;
        jobNo = combat.offJobNo;
    }
    else if(side == 'defense'){
        char = combat.defChar;
        jobNo = combat.defJobNo;
    }
    if(jobNo == 1) return char.DMGTYPE1;
    else if(jobNo == 2) return char.DMGTYPE2;
    else if(jobNo == 3) return char.DMGTYPE3;
    else if(jobNo == 4) return char.DMGTYPE4;
    else if(jobNo == 5) return char.DMGTYPE5;
};

function getHeart(side, LV){
    var eJobNo, eChar;
    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(LV == "LV4"){
        if(eJobNo == 1)      return eChar.JOB1DISCA;
        else if(eJobNo == 2) return eChar.JOB2DISCA;
        else if(eJobNo == 3) return eChar.JOB3DISCA;
        else if(eJobNo == 4) return eChar.JOB4DISCA;
        else if(eJobNo == 5) return eChar.JOB5DISCA;
    }
    else if(LV == "LV7"){
        if(eJobNo == 1)      return eChar.JOB1DISCB;
        else if(eJobNo == 2) return eChar.JOB2DISCB;
        else if(eJobNo == 3) return eChar.JOB3DISCB;
        else if(eJobNo == 4) return eChar.JOB4DISCB;
        else if(eJobNo == 5) return eChar.JOB5DISCB;
    }
};

function displayHeart(side){
    if(side == 'defense'){
        document.getElementById('defHeart1').innerHTML = 'LV4大心:' + getHeart(side, "LV4");
        document.getElementById('defHeart2').innerHTML = 'LV7大心:' + getHeart(side, "LV7");
    }
    else if(side == 'offense'){
        document.getElementById('offHeart1').innerHTML = 'LV4大心:' + getHeart(side, "LV4");
        document.getElementById('offHeart2').innerHTML = 'LV7大心:' + getHeart(side, "LV7");
    }
};

// change JOB and change equipments depends on JOB
function changeJob(side){
    var eJobNo;
    if(side == 'defense'){
        eJobNo = combat.defJobNo + 1;
        if(eJobNo > combat.defChar.JOBS) eJobNo = 1;
        combat.defJobNo = eJobNo;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo + 1;
        if(eJobNo > combat.offChar.JOBS) eJobNo = 1;
        combat.offJobNo = eJobNo;
    }
    // display job when changed
    displayArmy(side);
    displaySoldArmy(side);
    displayJob(side);
    displayHeart(side);
    hideWeapon(side);
    displayWeapon(side);
    hideArmor(side);
    displayArmor(side);
    hideHelmet(side);
    displayHelmet(side);
    hideAccessory(side);
    displayAccessory(side);
};

function changeBASEKNOWN(side){
    if(side == 'defense') SIDE = 'def', KNOWN = combat.defBASEKNOWN;
    else if(side == 'offense') SIDE = 'off', KNOWN = combat.offBASEKNOWN;
    KNOWNTEXT = '已知進場前數字';
    UNKNOWNTEXT = '未知進場前數字';
    eKNOWNTEXT = document.getElementById(SIDE+'KNOWNTEXT');
    BASE = 'BASE', PRE = 'PRE', DATA = 'DATA', INPUT = 'input';
    NUM = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    width = 'width: 40px;', clear = 'display: none;';

    if(!KNOWN) switchDATAtoINPUT(side, 'BASE');
    else switchDATAtoINPUT(side, 'PRE');
    for(let i=0; i<NUM.length; i++){
        if(KNOWN){
            eKNOWN = document.getElementById(SIDE+BASE+NUM[i]+INPUT);
            eKNOWNDATA = document.getElementById(SIDE+BASE+NUM[i]+DATA);
            eUNKNOWN = document.getElementById(SIDE+PRE+NUM[i]+INPUT);
            eUNKNOWNDATA = document.getElementById(SIDE+PRE+NUM[i]+DATA);
        }
        else{
            eKNOWN = document.getElementById(SIDE+PRE+NUM[i]+INPUT);
            eKNOWNDATA = document.getElementById(SIDE+PRE+NUM[i]+DATA);
            eUNKNOWN = document.getElementById(SIDE+BASE+NUM[i]+INPUT);
            eUNKNOWNDATA = document.getElementById(SIDE+BASE+NUM[i]+DATA);
        }
        eKNOWN.style = "";
        eKNOWN.style = width + clear;
        eKNOWNDATA.innerHTML = eKNOWNDATA.innerHTML.split(':')[0]+":";
        eUNKNOWN.style = "";
        eUNKNOWN.style = width;
        eUNKNOWNDATA.innerHTML = eUNKNOWNDATA.innerHTML.split(':')[0]+":";
    }

    if(KNOWN) eKNOWNTEXT.innerHTML = UNKNOWNTEXT;
    else eKNOWNTEXT.innerHTML = KNOWNTEXT;

    if(side == 'defense') combat.defBASEKNOWN = !KNOWN;
    else if(side == 'offense') combat.offBASEKNOWN = !KNOWN;
};

function switchDATAtoINPUT(side, KNOWN){
    NUM = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    DATA = 'DATA', INPUT = 'input';

    if(side == 'offense') SIDE = 'off';
    else if(side == 'defense') SIDE = 'def';

    for(let i=0; i<NUM.length; i++){
        eDATA = document.getElementById(SIDE+KNOWN+NUM[i]+DATA);
        eINPUT = document.getElementById(SIDE+KNOWN+NUM[i]+INPUT);
        eINPUT.value = eDATA.innerHTML.split(':')[1];
    }
};

