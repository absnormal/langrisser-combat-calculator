var offParty, offChar, offSkill, offSoldier, offTerrain, offEnchant;
var offJobNo = 1, offbaseATK;

var defParty, defChar, defSkill, defSoldier, defTerrain, defEnchant;
var defJobNo = 1, defbaseATK;

function displayArmy(side, jobNo){
    if(side == 'defense'){
        if(defJobNo == 1)
            document.getElementById('defcharARMY').innerHTML = '職業:' + defChar.ARMY1;
        else if(defJobNo == 2)
            document.getElementById('defcharARMY').innerHTML = '職業:' + defChar.ARMY2;
        else if(defJobNo == 3)
            document.getElementById('defcharARMY').innerHTML = '職業:' + defChar.ARMY3;
        else if(defJobNo == 4)
            document.getElementById('defcharARMY').innerHTML = '職業:' + defChar.ARMY4;
        else if(defJobNo == 5)
            document.getElementById('defcharARMY').innerHTML = '職業:' + defChar.ARMY5;
    }
    else if(side == 'offense'){
        if(offJobNo == 1)
            document.getElementById('offcharARMY').innerHTML = '職業:' + offChar.ARMY1;
        else if(offJobNo == 2)
            document.getElementById('offcharARMY').innerHTML = '職業:' + offChar.ARMY2;
        else if(offJobNo == 3)
            document.getElementById('offcharARMY').innerHTML = '職業:' + offChar.ARMY3;
        else if(offJobNo == 4)
            document.getElementById('offcharARMY').innerHTML = '職業:' + offChar.ARMY4;
        else if(offJobNo == 5)
            document.getElementById('offcharARMY').innerHTML = '職業:' + offChar.ARMY5;
    }
};

function displayJob(side, jobNo){
    if(side == 'defense'){
        if(defJobNo == 1)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB1;
        else if(defJobNo == 2)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB2;
        else if(defJobNo == 3)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB3;
        else if(defJobNo == 4)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB4;
        else if(defJobNo == 5)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB5;
    }
    else if(side == 'offense'){
        if(offJobNo == 1)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB1;
        else if(offJobNo == 2)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB2;
        else if(offJobNo == 3)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB3;
        else if(offJobNo == 4)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB4;
        else if(offJobNo == 5)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB5;
    }
};

function changeJob(side){
    var jobNo;
    if(side == 'defense') jobNo = defJobNo;
    else if(side == 'offense') jobNo = offJobNo;
    jobNo += 1;
    if(side == 'defense'){
        if(jobNo > defChar.JOBS) jobNo = 1;
        defJobNo = jobNo;
    }
    else if(side == 'offense'){
        if(jobNo > offChar.JOBS) jobNo = 1;
        offJobNo = jobNo;
    }
};

function displayPREATK(side, char, skill, enchant){
    var job, ATK, equipEFF = 0, BUFFEFF = 0, enchantEFF = 0, PREATK, dmg;

    /* get ATK */
    if(skill.TYPE == '魔法傷害'){
        dmg = '智力';
        if(side == 'offense') ATK = document.getElementById('offINT').value;
        else if(side == 'defense')  ATK = document.getElementById('defINT').value;
    }
    else if(skill.TYPE == '物理傷害'){
        dmg = '攻擊';
        if(side == 'offense') ATK = document.getElementById('offATK').value;
        else if(side == 'defense')  ATK = document.getElementById('defATK').value;
    }
    /* 滿月全屬性+10% */
    if(enchant.NAME == '滿月') enchantEFF = 0.1;

    /* calculate */
    PREATK = ATK * (1 + equipEFF + BUFFEFF + enchantEFF);
    PREATK = Math.round(PREATK);
    // display job when calculate
    if(side == 'offense'){
        displayArmy(side, offJobNo);
        displayJob(side, offJobNo);
    }
    else if(side == 'defense'){
        displayArmy(side, defJobNo);
        displayJob(side, defJobNo);
    }
    // display PREATK formula
    document.getElementById('PREATK').innerHTML = "戰前" + dmg + ": " + PREATK + "=" + ATK + "×" + "[1+" + equipEFF + "+" + BUFFEFF + "+" + enchantEFF + "]";

    return PREATK;
};

function displayPREDEF(side, char, offSkill, enchant){
    var job, DEF, equipEFF = 0, BUFFEFF = 0, enchantEFF = 0, PREDEF, dmg;

    /* get DEF */
    if(offSkill.TYPE == '魔法傷害'){
        dmg = '魔防';
        if(side == 'offense') DEF = document.getElementById('offMDEF').value;
        else if(side == 'defense') DEF = document.getElementById('defMDEF').value;
    }
    else if(offSkill.TYPE == '物理傷害'){
        dmg = '物防';
        if(side == 'offense') DEF = document.getElementById('offDEF').value;
        else if(side == 'defense') DEF = document.getElementById('defDEF').value;
    }
    /* 滿月全屬性+10% */
    if(enchant.NAME == '滿月') enchantEFF = 0.1;

    /* calculate */
    PREDEF = DEF * (1 + equipEFF + BUFFEFF + enchantEFF);
    PREDEF = Math.round(PREDEF);
    // display job when calculate
    if(side == 'offense'){
        displayArmy(side, offJobNo);
        displayJob(side, offJobNo);
    }
    else if(side == 'defense'){
        displayArmy(side, defJobNo);
        displayJob(side, defJobNo);
    }
    // display PREDEF formula
    document.getElementById('PREDEF').innerHTML = "戰前" + dmg + ": " + PREDEF + " = " + DEF + "×" + "[1+" + equipEFF + "+" + BUFFEFF + "+" + enchantEFF + "]";

    return PREDEF;
};

function bigFormula(offParty, offChar, offSkill, offSoldier, offTerrain, offEnchant, defParty, defChar, defSoldier, defTerrain, defEnchant){
    /* get parameter */
    var PREATK = displayPREATK('offense', offChar, offSkill, offEnchant);
    var offArmy, offEquipEFF=0, offEnchantEFF=0;
    var PREDEF = displayPREDEF('defense', defChar, offSkill, defEnchant);
    var defArmy, defEquipEFF=0, defEnchantEFF=0;
    var counterRate=0, terrainRate=0, onehit, dmgRate=0, skillRate, critRate=1.3, combatNEG=1;

    /* calculate */
    counterRate = cal_counter(offArmy, defArmy);
    terrainRate = cal_terrain(defTerrain);
    skillRate = offSkill.RATE;
    if(offSkill.TYPE == '物理傷害' && offEnchant.NAME == '怒濤') offEnchantEFF = 0.1;
    onehit = (PREATK*(1+offEquipEFF+offEnchantEFF)*(1+counterRate)-PREDEF*(1+defEquipEFF)*(1+terrainRate))/2*(1+dmgRate)*skillRate*critRate*combatNEG;
    onehit = Math.round(onehit);

    /* display */
    document.getElementById('FORMULA').innerHTML = "一段傷害: " + onehit + " = {[" + PREATK + "×(1+" + offEquipEFF + "+" + offEnchantEFF + ")×" + (1+counterRate) + "]-[" + PREDEF + "×(1+" + defEquipEFF + ")×" + (1+terrainRate) + "]}÷2×" + (1+dmgRate) + "×" + skillRate + "×" + critRate + "×" + combatNEG
};

window.addEventListener("click", function getSelected(){
    // offense
    var selected = document.getElementsByClassName('offense selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            offParty = selected[i].id;
            //offParty = party.find(x => x.NAME === offParty);
        }
        else if(selected[i].classList.contains('character')){
            offChar = selected[i].id;
            offChar = char.find(x => x.NAME === offChar);
        }
        else if(selected[i].classList.contains('skill')){
            offSkill = selected[i].id;
            offSkill = skill.find(x => x.NAME === offSkill);
        }
        else if(selected[i].classList.contains('soldier')){
            offSoldier = selected[i].id;
            //offSoldier = soldier.find(x => x.NAME === offSoldier);
        }
        else if(selected[i].classList.contains('terrain')){
            offTerrain = selected[i].id;
            //offTerrain = terrain.find(x => x.NAME === offTerrain);
        }
        else if(selected[i].classList.contains('enchant')){
            offEnchant = selected[i].id;
            offEnchant = enchant.find(x => x.NAME === offEnchant);
        }
    }
    document.getElementById('partydata').innerHTML = "陣營:" + offParty;//.NAME;
    document.getElementById('chardata').innerHTML = "角色:" + offChar.NAME;
    document.getElementById('skilldata').innerHTML = "技能:" + offSkill.NAME;
    document.getElementById('soldierdata').innerHTML = "士兵:" + offSoldier;//.NAME;
    document.getElementById('terraindata').innerHTML = "地形:" + offTerrain;//.NAME;
    document.getElementById('enchantdata').innerHTML = "附魔:" + offEnchant.NAME;

    // defense
    var selected = document.getElementsByClassName('defense selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            defParty = selected[i].id.slice(0, -1);
            //defParty = party.find(x => x.NAME === defParty);
        }
        else if(selected[i].classList.contains('character')){
            defChar = selected[i].id.slice(0, -1);
            defChar = char.find(x => x.NAME === defChar);
        }
        else if(selected[i].classList.contains('soldier')){
            defSoldier = selected[i].id.slice(0, -1);
            //defSoldier = soldier.find(x => x.NAME === defSoldier);
        }
        else if(selected[i].classList.contains('terrain')){
            defTerrain = selected[i].id.slice(0, -1);
            //defTerrain = terrain.find(x => x.NAME === defTerrain);
        }
        else if(selected[i].classList.contains('enchant')){
            defEnchant = selected[i].id.slice(0, -1);
            defEnchant = enchant.find(x => x.NAME === defEnchant);
        }
    }
    document.getElementById('partydatad').innerHTML = "陣營:" + defParty;//.NAME;
    document.getElementById('chardatad').innerHTML = "角色:" + defChar.NAME;
    document.getElementById('soldierdatad').innerHTML = "士兵:" + defSoldier;//.NAME;
    document.getElementById('terraindatad').innerHTML = "地形:" + defTerrain;//.NAME;
    document.getElementById('enchantdatad').innerHTML = "附魔:" + defEnchant.NAME;

    /* big formula */
    bigFormula(offParty, offChar, offSkill, offSoldier, offTerrain, offEnchant, defParty, defChar, defSoldier, defTerrain, defEnchant);

});

