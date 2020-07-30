var combat = {
        /* offense character info */
    offParty:undefined, offChar:undefined, offSkill:undefined, offSoldier:undefined,
    offTalent:undefined, offTerrain:undefined, offEnchant:undefined,
    offWeapon:undefined, offArmor:undefined, offHelmet:undefined, offAccessory:undefined,
    // character currnet data
    offFULLHP:undefined, offHP:undefined, offATK:undefined, offINT:undefined,
    offDEF:undefined, offMDEF:undefined, offDEX:undefined, offHITS:undefined,
    offHEAL:undefined, offHEALED:undefined,
    // character arena plus
    offAATK:undefined,offAINT:undefined,offADEF:undefined,offAMDEF:undefined,offADEX:undefined,
    offACRITDMG:undefined, offAPCRITDMG:undefined,
    offACRITRATE:undefined, offAPCRITRATE:undefined,
    // equipment selected
    offWeaSel:false, offArmSel:false, offHelSel:false, offAccSel:false,
    // current JobNo
    offJobNo:1,

        /* combat accumulate rates */
    offATKRATE:undefined, offINTRATE:undefined, offDEFRATE:undefined,
    offMDEFRATE:undefined, offDEXRATE:undefined, offCRITDMG:undefined, offCRITRATE:undefined,
    defATKRATE:undefined, defINTRATE:undefined, defDEFRATE:undefined,
    defMDEFRATE:undefined, defDEXRATE:undefined, defCRITDMG:undefined, defCRITRATE:undefined,
    dmgRATE:undefined, skillRATE:undefined,
    counterRATE:undefined, terrainRATE:undefined,
    dmgType:undefined, range:undefined, run:undefined, combatNEG:undefined,

        /* defense character info */
    defParty:undefined, defChar:undefined, defSkill:undefined, defSoldier:undefined,
    defTalent:undefined, defTerrain:undefined, defEnchant:undefined,
    defWeapon:undefined, defArmor:undefined, defHelmet:undefined, defAccessory:undefined,
    // character currnet data
    defFULLHP:undefined, defHP:undefined, defATK:undefined, defINT:undefined,
    defDEF:undefined, defMDEF:undefined, defDEX:undefined, defHITS:undefined,
    defHEAL:undefined, defHEALED:undefined,
    // character arena plus
    defAATK:undefined,defAINT:undefined,defADEF:undefined,defAMDEF:undefined,defADEX:undefined,
    defACRITDMG:undefined, defAPCRITDMG:undefined,
    defACRITRATE:undefined, defAPCRITRATE:undefined,
    // equipment selected
    defWeaSel:false, defArmSel:false, defHelSel:false, defAccSel:false,
    // current JobNo
    defJobNo:1,

        /* reset numbers */
    baseCRITRATE:0, baseCRITDMG:1.3, baseHITS:20, baseRATE:1, baseCombatNEG:0
};

function resetAllRATE(){
    /* offense accumulative rates */
    combat.offATKRATE = combat.baseRATE;
    combat.offINTRATE = combat.baseRATE;
    combat.offDEFRATE = combat.baseRATE;
    combat.offMDEFRATE = combat.baseRATE;
    combat.offDEXRATE = combat.baseRATE;
    combat.offCRITDMG = combat.baseCRITDMG;
    combat.offCRITRATE = combat.baseCRITRATE;
    /* defense accumulative rates */
    combat.defATKRATE = combat.baseRATE;
    combat.defINTRATE = combat.baseRATE;
    combat.defDEFRATE = combat.baseRATE;
    combat.defMDEFRATE = combat.baseRATE;
    combat.defDEXRATE = combat.baseRATE;
    combat.defCRITDMG = combat.baseCRITDMG;
    combat.defCRITRATE = combat.baseCRITRATE;
    /* other rates */
    combat.offHITS = combat.baseHITS;
    combat.defHITS = combat.baseHITS;
    combat.offHEAL = combat.baseRATE;
    combat.defHEAL = combat.baseRATE;
    combat.offHEALED = combat.baseRATE;
    combat.defHEALED = combat.baseRATE;
    combat.dmgRATE = combat.baseRATE;
    combat.skillRATE = combat.baseRATE;
    combat.combatNEG = combat.baseCombatNEG;
    combat.counterRATE = combat.baseRATE;
    combat.terrainRATE = combat.baseRATE;
};

function getCharData(side){
    if(side == 'offense'){
        /* 白字 */
        combat.offFULLHP = Number(document.getElementById('offHP').value.split('/')[1]);
        combat.offHP = Number(document.getElementById('offHP').value.split('/')[0]);
        combat.offATK = Number(document.getElementById('offATK').value);
        combat.offINT = Number(document.getElementById('offINT').value);
        combat.offDEF = Number(document.getElementById('offDEF').value);
        combat.offMDEF = Number(document.getElementById('offMDEF').value);
        combat.offDEX = Number(document.getElementById('offDEX').value);
        /* 競技精通 */
        combat.offAATK = Number(document.getElementById('offAATK').value);
        combat.offAINT = Number(document.getElementById('offAINT').value);
        combat.offADEF = Number(document.getElementById('offADEF').value);
        combat.offAMDEF = Number(document.getElementById('offAMDEF').value);
        combat.offADEX = Number(document.getElementById('offADEX').value);
    }
    else if(side == 'defense'){
        /* 白字 */
        combat.defFULLHP = Number(document.getElementById('defHP').value.split('/')[1]);
        combat.defHP = Number(document.getElementById('defHP').value.split('/')[0]);
        combat.defATK = Number(document.getElementById('defATK').value);
        combat.defINT = Number(document.getElementById('defINT').value);
        combat.defDEF = Number(document.getElementById('defDEF').value);
        combat.defMDEF = Number(document.getElementById('defMDEF').value);
        combat.defDEX = Number(document.getElementById('defDEX').value);
    }
};

/* get side->otherside counter */
function getCounterRATE(side){
    var sideA, sideB;
    if(side == 'offense') sideA = 'offense', sideB = 'defense';
    else if(side == 'defense') sideA = 'defense', sideB = 'offense';
    combat.counterRATE += cal_counter(getArmy(sideA), getArmy(sideB));
    combat.counterRATE += cal_skillCounter(combat.offSkill.COUNTER, getArmy(sideB));
};

function getTerrainRATE(side){
    if(side == 'offense')
        combat.terrainRATE += cal_terrain(combat.offTerrain);
    else if(side == 'defense')
        combat.terrainRATE += cal_terrain(combat.defTerrain);
};

function displayHEALS(side){
    if(side == 'offense'){
        var HEAL = document.getElementById('offHEAL');
        var HEALED = document.getElementById('offHEALED');
        if(HEAL != undefined) HEAL.innerHTML = "治療效果:" + Math.round(combat.offHEAL*100) + "%";
        if(HEALED != undefined) HEALED.innerHTML = "遭受治療效果:" + Math.round(combat.offHEALED*100) + "%";
    }
    else if(side == 'defense'){
        var HEAL = document.getElementById('defHEAL');
        var HEALED = document.getElementById('defHEALED');
        if(HEAL != undefined) HEAL.innerHTML = "治療效果:" + Math.round(combat.defHEAL*100) + "%";
        if(HEALED != undefined) HEALED.innerHTML = "遭受治療效果:" + Math.round(combat.defHEALED*100) + "%";
    }

};

/* ATK*(1+EQUIP+TALENT+BUFF+DEBUFF+COMMAND+ENCHANT:MOON) */
function displayPRENUMS(side){
    var PREATK, PREINT, PREDEF, PREMDEF;
    var weapon, armor, helmet, accessory, enchant, talent;
    var weaponNUM, armorNUM, helmetNUM, accessoryNUM, talentNUM, moon = 0;
    var base, arena, rate, NUMS, text;

    if(side == 'offense'){
        PREATK = document.getElementById('PREATK');
        PREINT = document.getElementById('PREINT');
        PREDEF = document.getElementById('PREDEF');
        PREMDEF = document.getElementById('PREMDEF');
        weapon = combat.offWeapon;
        armor = combat.offArmor;
        helmet = combat.offHelmet;
        accessory = combat.offAccessory;
        enchant = combat.offEnchant;
        talent = combat.offTalent;
        perHP = combat.offHP/combat.offFULLHP;
        base = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF];
        arena = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF];
        rate = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE];
    }
    else if(side == 'defense'){
        PREATK = document.getElementById('PREATKd');
        PREINT = document.getElementById('PREINTd');
        PREDEF = document.getElementById('PREDEFd');
        PREMDEF = document.getElementById('PREMDEFd');
        weapon = combat.defWeapon;
        armor = combat.defArmor;
        helmet = combat.defHelmet;
        accessory = combat.defAccessory;
        enchant = combat.defEnchant;
        talent = combat.defTalent;
        perHP = combat.defHP/combat.defFULLHP;
        base = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF];
        arena = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF];
        rate = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE];
    }

    NUMS = [PREATK, PREINT, PREDEF, PREMDEF];
    text = ["戰前攻擊", "戰前智力", "戰前防禦", "戰前魔防"];
    weaponNUM = [weapon.ATK, weapon.INT, weapon.DEF, weapon.MDEF];
    armorNUM = [armor.ATK, armor.INT, armor.DEF, armor.MDEF];
    helmetNUM = [helmet.ATK, helmet.INT, helmet.DEF, helmet.MDEF];
    accessoryNUM = [accessory.ATK, accessory.INT, accessory.DEF, accessory.MDEF];
    talentNUM = [talent.ATK, talent.INT, talent.DEF, talent.MDEF];

    if(enchant.NAME == "滿月" && perHP > 0.8){
        moon = 0.1;
    }

    for(let i=0; i<NUMS.length; i++){
        let number = base[i]*rate[i]+arena[i];
        NUMS[i].innerHTML = text[i] + ":" + Math.round(number) + "=" + base[i] + "×(1";
        if(talentNUM[i] != undefined) NUMS[i].innerHTML += "+" + talentNUM[i];
        if(weaponNUM[i] != undefined) NUMS[i].innerHTML += "+" + weaponNUM[i];
        if(armorNUM[i] != undefined) NUMS[i].innerHTML += "+" + armorNUM[i];
        if(helmetNUM[i] != undefined) NUMS[i].innerHTML += "+" + helmetNUM[i];
        if(accessoryNUM[i] != undefined) NUMS[i].innerHTML += "+" + accessoryNUM[i];
        if(moon != 0) NUMS[i].innerHTML += "+" + moon;
        NUMS[i].innerHTML += ")+" + arena[i];
    }
};

/* ATK*(1+EQUIP+OEQUIP+TALENT+BUFF+DEBUFF+COMMAND+ENCHANT:MOON+ENCHENT:WAVE) */
function displayMIDATK(side){
};

/* all additional functions are here
 *  Skill Talent Equipments
*/
function getAllSkill(stage, side){
    /* PRE STAGE */
    if(stage == 'PRE'){
        getPRETalentSkill(side);
        getPREWeaponSkill(side);
        getPREArmorSkill(side);
        getPREHelmetSkill(side);
        getPREAccessorySkill(side);
        displayHEALS(side);
        displayPRENUMS(side);
    }
    /* MID STAGE */
    /*
    getSkillSkill(side);
    getTalentSkill(side);
    getWeaponSkill(side);
    getArmorSkill(side);
    getHelmetSkill(side);
    getAccessorySkill(side);
    displayMIDATK(side);
    displayMIDDEF(side);
    */
};

function wholeCombat(){
    /* get all data/functions */
    resetAllRATE();
    getCharData('offense');
    getCharData('defense');
    getCounterRATE('offense');
    getTerrainRATE('defense');
    getAllSkill('PRE', 'offense');
    getAllSkill('PRE', 'defense');
};

function displayCharInfo(side){
    if(side == 'offense'){
        document.getElementById('partydata').innerHTML = "陣營:" + combat.offParty;//.NAME;
        document.getElementById('chardata').innerHTML = "角色:" + combat.offChar.NAME;
        document.getElementById('skilldata').innerHTML = "技能:" + combat.offSkill.NAME;
        document.getElementById('soldierdata').innerHTML = "士兵:" + combat.offSoldier;//.NAME;
        document.getElementById('terraindata').innerHTML = "地形:" + combat.offTerrain;//.NAME;
        document.getElementById('enchantdata').innerHTML = "附魔:" + combat.offEnchant.NAME;
    }
    else if(side == 'defense'){
        document.getElementById('partydatad').innerHTML = "陣營:" + combat.defParty;//.NAME;
        document.getElementById('chardatad').innerHTML = "角色:" + combat.defChar.NAME;
        document.getElementById('soldierdatad').innerHTML = "士兵:"+combat.defSoldier;//.NAME;
        document.getElementById('terraindatad').innerHTML = "地形:"+combat.defTerrain;//.NAME;
        document.getElementById('enchantdatad').innerHTML = "附魔:"+combat.defEnchant.NAME;
    }
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
            combat.offTalent = talent.find(x => x.NAME === combat.offChar.TALENTNAME);
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
    displayCharInfo('offense');

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
            combat.defTalent = talent.find(x => x.NAME === combat.defChar.TALENTNAME);
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
    displayCharInfo('defense');

    /* combat */
    wholeCombat();
});

