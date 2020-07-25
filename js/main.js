var combat = {
    offParty:undefined, offChar:undefined, offSkill:undefined, offSoldier:undefined,
    offTerrain:undefined, offEnchant:undefined,
    offWeapon:undefined, offArmor:undefined, offHelmet:undefined, offAccessory:undefined,
    offWeaSel:false, offArmSel:false, offHelSel:false, offAccSel:false,
    offJobNo:1,
    defParty:undefined, defChar:undefined, defSkill:undefined, defSoldier:undefined,
    defTerrain:undefined, defEnchant:undefined,
    defWeapon:undefined, defArmor:undefined, defHelmet:undefined, defAccessory:undefined,
    defWeaSel:false, defArmSel:false, defHelSel:false, defAccSel:false,
    defJobNo:1
};

function getArmy(side){
    if(side == 'defense'){
        if(combat.defJobNo == 1)
            return combat.defChar.ARMY1;
        else if(combat.defJobNo == 2)
            return combat.defChar.ARMY2;
        else if(combat.defJobNo == 3)
            return combat.defChar.ARMY3;
        else if(combat.defJobNo == 4)
            return combat.defChar.ARMY4;
        else if(combat.defJobNo == 5)
            return combat.defChar.ARMY5;
    }
    else if(side == 'offense'){
        if(combat.offJobNo == 1)
            return combat.offChar.ARMY1;
        else if(combat.offJobNo == 2)
            return combat.offChar.ARMY2;
        else if(combat.offJobNo == 3)
            return combat.offChar.ARMY3;
        else if(combat.offJobNo == 4)
            return combat.offChar.ARMY4;
        else if(combat.offJobNo == 5)
            return combat.offChar.ARMY5;
    }
};

function displayArmy(side){
    if(side == 'defense'){
        document.getElementById('defcharARMY').innerHTML = '兵種:' + getArmy(side);
    }
    else if(side == 'offense'){
        document.getElementById('offcharARMY').innerHTML = '兵種:' + getArmy(side);
    }
};

function getJob(side){
    if(side == 'defense'){
        if(combat.defJobNo == 1)
            return combat.defChar.JOB1;
        else if(combat.defJobNo == 2)
            return combat.defChar.JOB2;
        else if(combat.defJobNo == 3)
            return combat.defChar.JOB3;
        else if(combat.defJobNo == 4)
            return combat.defChar.ARMY4;
        else if(combat.defJobNo == 5)
            return combat.defChar.ARMY5;
    }
    else if(side == 'offense'){
        if(combat.offJobNo == 1)
            return combat.offChar.JOB1;
        else if(combat.offJobNo == 2)
            return combat.offChar.JOB2;
        else if(combat.offJobNo == 3)
            return combat.offChar.JOB3;
        else if(combat.offJobNo == 4)
            return combat.offChar.JOB4;
        else if(combat.offJobNo == 5)
            return combat.offChar.JOB5;
    }
};
function displayJob(side){
    if(side == 'defense'){
        document.getElementById('defcharJOB').innerHTML = '職業:' + getJob(side);
    }
    else if(side == 'offense'){
        document.getElementById('offcharJOB').innerHTML = '職業:' + getJob(side);
    }
};

// change JOB and change equipments depends on JOB
function changeJob(side){
    var jobNo;
    if(side == 'defense') jobNo = combat.defJobNo;
    else if(side == 'offense') jobNo = combat.offJobNo;
    jobNo += 1;
    if(side == 'defense'){
        if(jobNo > combat.defChar.JOBS) jobNo = 1;
        combat.defJobNo = jobNo;
    }
    else if(side == 'offense'){
        if(jobNo > combat.offChar.JOBS) jobNo = 1;
        combat.offJobNo = jobNo;
    }
    // display job when changed
    displayArmy(side);
    displayJob(side);
    hideWeapon(side);
    displayWeapon(side);
    hideArmor(side);
    displayArmor(side);
    hideHelmet(side);
    displayHelmet(side);
};

function displayPREATK(side){
    var job, ATK, equipEFF = 0, BUFFEFF = 0, moon = 0, PREATK, dmg;

    /* get ATK */
    if(combat.offSkill.TYPE == '魔法傷害'){
        dmg = '智力';
        if(side == 'offense'){
            ATK = document.getElementById('offINT').value;
            equipEFF += combat.offWeapon.INT;
            equipEFF += combat.offArmor.INT;
            equipEFF += combat.offHelmet.INT;
        }
        else if(side == 'defense'){
            ATK = document.getElementById('defINT').value;
            equipEFF += combat.defWeapon.INT;
            equipEFF += combat.defArmor.INT;
            equipEFF += combat.defHelmet.INT;
        }
    }
    else if(combat.offSkill.TYPE == '物理傷害'){
        dmg = '攻擊';
        if(side == 'offense'){
            ATK = document.getElementById('offATK').value;
            equipEFF += combat.offWeapon.ATK;
            equipEFF += combat.offArmor.ATK;
            equipEFF += combat.offHelmet.ATK;
        }
        else if(side == 'defense'){
            ATK = document.getElementById('defATK').value;
            equipEFF += combat.defWeapon.ATK
            equipEFF += combat.defArmor.ATK;
            equipEFF += combat.defHelmet.ATK;
        }
    }
    /* 滿月全屬性+10% */
    if(side == 'offense' && combat.offEnchant.NAME == '滿月') moon = 0.1;
    else if(side == 'defense' && combat.defEnchant.NAME == '滿月') moon = 0.1;

    /* calculate */
    PREATK = ATK * (1 + equipEFF + BUFFEFF + moon);
    PREATK = Math.round(PREATK);
    // display PREATK formula
    document.getElementById('PREATK').innerHTML = "戰前" + dmg + ":<br>" + PREATK + "=" + ATK + "×" + "[1+" + equipEFF.toFixed(2) + "+" + BUFFEFF + "+" + moon + "]";

    return PREATK;
};

function displayPREDEF(side){
    var job, DEF, equipEFF = 0, BUFFEFF = 0, moon = 0, PREDEF, dmg;

    /* get DEF */
    if(combat.offSkill.TYPE == '魔法傷害'){
        dmg = '魔防';
        if(side == 'offense'){
            DEF = document.getElementById('offMDEF').value;
            equipEFF += combat.offWeapon.MDEF;
            equipEFF += combat.offArmor.MDEF;
            equipEFF += combat.offHelmet.MDEF;
        }
        else if(side == 'defense'){
            DEF = document.getElementById('defMDEF').value;
            equipEFF += combat.defWeapon.MDEF;
            equipEFF += combat.defArmor.MDEF;
            equipEFF += combat.defHelmet.MDEF;
        }
    }
    else if(combat.offSkill.TYPE == '物理傷害'){
        dmg = '物防';
        if(side == 'offense'){
            DEF = document.getElementById('offDEF').value;
            equipEFF += combat.offWeapon.DEF;
            equipEFF += combat.offArmor.DEF;
            equipEFF += combat.offHelmet.DEF;
        }
        else if(side == 'defense'){
            DEF = document.getElementById('defDEF').value;
            equipEFF += combat.defWeapon.DEF;
            equipEFF += combat.defArmor.DEF;
            equipEFF += combat.defHelmet.DEF;
        }
    }
    /* 滿月全屬性+10% */
    if(side == 'offense' && combat.offEnchant.NAME == '滿月') moon = 0.1;
    else if(side == 'defense' && combat.defEnchant.NAME == '滿月') moon = 0.1;

    /* calculate */
    PREDEF = DEF * (1 + equipEFF + BUFFEFF + moon);
    PREDEF = Math.round(PREDEF);
    // display PREDEF formula
    document.getElementById('PREDEF').innerHTML = "戰前" + dmg + ":<br> " + PREDEF + " = " + DEF + "×" + "[1+" + equipEFF.toFixed(2) + "+" + BUFFEFF + "+" + moon + "]";

    return PREDEF;
};

function bigFormula(){
    /* get parameter & calculate */
    var PREATK = displayPREATK('offense');
    var offEquipEFF=0, wave=0;
    var PREDEF = displayPREDEF('defense');
    var defEquipEFF=0, defEnchantEFF=0;
    var counterRate = cal_counter(getArmy('offense'), getArmy('defense'));
    var skillCounterRate = cal_skillCounter(combat.offSkill.COUNTER, getArmy('defense'))
    var terrainRate = cal_terrain(combat.defTerrain);
    var dmgRate=0, skillRate, critRate=1.3, combatNEG=1;
    var onehit, HConehit;

    skillRate = combat.offSkill.RATE;
    /* enchant: 怒濤 */
    if(combat.offSkill.TYPE == '物理傷害' && combat.offEnchant.NAME == '怒濤') wave = 0.1;
    /* equipment skills */
    if(combat.offSkill.TYPE == '物理傷害'){
        offEquipEFF += combat.offWeapon.CATK;
        offEquipEFF += combat.offArmor.CATK;
        offEquipEFF += combat.offHelmet.CATK;
        defEquipEFF += combat.defWeapon.CDEF;
        defEquipEFF += combat.defArmor.CDEF;
        defEquipEFF += combat.defHelmet.CDEF;
    }
    else if(combat.offSkill.TYPE == '魔法傷害'){
        offEquipEFF += combat.offWeapon.CINT;
        offEquipEFF += combat.offArmor.CINT;
        offEquipEFF += combat.offHelmet.CINT;
        defEquipEFF += combat.defWeapon.CMDEF;
        defEquipEFF += combat.defArmor.CMDEF;
        defEquipEFF += combat.defHelmet.CMDEF;
    }

    /* calculate onehits */
    onehit = (PREATK*(1+offEquipEFF+wave)*(1+counterRate+skillCounterRate)-PREDEF*(1+defEquipEFF)*(1+terrainRate))/2*(1+dmgRate)*skillRate*combatNEG;
    onehit = Math.round(onehit);
    if(onehit <= 0) onehit = 1;
    HConehit = onehit*critRate;
    HConehit = Math.round(HConehit);

    /* display */
    // no crit
    document.getElementById('FORMULA').innerHTML = "一段傷害:<br>" + onehit + " = {[" + PREATK + "×(1+" + offEquipEFF.toFixed(2) + "+" + wave + ")×" + (1+counterRate+skillCounterRate) + "]-[" + PREDEF + "×(1+" + defEquipEFF.toFixed(2) + ")×" + (1+terrainRate) + "]}÷2×" + (1+dmgRate) + "×" + skillRate + "×" + combatNEG
    // hero crit
    document.getElementById('HCFORMULA').innerHTML = "一段傷害(英雄爆擊):<br>" + HConehit + " = {[" + PREATK + "×(1+" + offEquipEFF.toFixed(2) + "+" + wave + ")×" + (1+counterRate+skillCounterRate) + "]-[" + PREDEF + "×(1+" + defEquipEFF.toFixed(2) + ")×" + (1+terrainRate) + "]}÷2×" + (1+dmgRate) + "×" + skillRate + "×" + critRate + "×" + combatNEG
};

window.addEventListener("click", function getSelected(){
    // offense
    var selected = document.getElementsByClassName('offense selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            combat.offParty = selected[i].id;
            //combat.offParty = party.find(x => x.NAME === combat.offParty);
        }
        else if(selected[i].classList.contains('character')){
            combat.offChar = selected[i].id;
            combat.offChar = char.find(x => x.NAME === combat.offChar);
        }
        else if(selected[i].classList.contains('skill')){
            combat.offSkill = selected[i].id;
            combat.offSkill = skill.find(x => x.NAME === combat.offSkill);
            displaySkillInfo('offense');
        }
        else if(selected[i].classList.contains('soldier')){
            combat.offSoldier = selected[i].id;
            //combat.offSoldier = soldier.find(x => x.NAME === combat.offSoldier);
        }
        else if(selected[i].classList.contains('terrain')){
            combat.offTerrain = selected[i].id;
            //combat.offTerrain = terrain.find(x => x.NAME === combat.offTerrain);
        }
        else if(selected[i].classList.contains('enchant')){
            combat.offEnchant = selected[i].id;
            combat.offEnchant = enchant.find(x => x.NAME === combat.offEnchant);
        }
    }
    document.getElementById('partydata').innerHTML = "陣營:" + combat.offParty;//.NAME;
    document.getElementById('chardata').innerHTML = "角色:" + combat.offChar.NAME;
    document.getElementById('skilldata').innerHTML = "技能:" + combat.offSkill.NAME;
    document.getElementById('soldierdata').innerHTML = "士兵:" + combat.offSoldier;//.NAME;
    document.getElementById('terraindata').innerHTML = "地形:" + combat.offTerrain;//.NAME;
    document.getElementById('enchantdata').innerHTML = "附魔:" + combat.offEnchant.NAME;

    // defense
    var selected = document.getElementsByClassName('defense selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            combat.defParty = selected[i].id.slice(0, -1);
            //combat.defParty = party.find(x => x.NAME === combat.defParty);
        }
        else if(selected[i].classList.contains('character')){
            combat.defChar = selected[i].id.slice(0, -1);
            combat.defChar = char.find(x => x.NAME === combat.defChar);
        }
        else if(selected[i].classList.contains('soldier')){
            combat.defSoldier = selected[i].id.slice(0, -1);
            //combat.defSoldier = soldier.find(x => x.NAME === combat.defSoldier);
        }
        else if(selected[i].classList.contains('terrain')){
            combat.defTerrain = selected[i].id.slice(0, -1);
            //combat.defTerrain = terrain.find(x => x.NAME === combat.defTerrain);
        }
        else if(selected[i].classList.contains('enchant')){
            combat.defEnchant = selected[i].id.slice(0, -1);
            combat.defEnchant = enchant.find(x => x.NAME === combat.defEnchant);
        }
    }
    document.getElementById('partydatad').innerHTML = "陣營:" + combat.defParty;//.NAME;
    document.getElementById('chardatad').innerHTML = "角色:" + combat.defChar.NAME;
    document.getElementById('soldierdatad').innerHTML = "士兵:" + combat.defSoldier;//.NAME;
    document.getElementById('terraindatad').innerHTML = "地形:" + combat.defTerrain;//.NAME;
    document.getElementById('enchantdatad').innerHTML = "附魔:" + combat.defEnchant.NAME;

    /* big formula */
    bigFormula();
});

