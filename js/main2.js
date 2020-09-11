var combat = {
        /* offense character info */
    offParty:undefined, offChar:undefined, offSkill:undefined, offSoldier:undefined,
    offTalent:undefined, offTerrain:undefined, offEnchant:undefined,
    offWeapon:undefined, offArmor:undefined, offHelmet:undefined, offAccessory:undefined,
    offBUFFLIST: [], offDEBUFFLIST: [], offCommandLIST: [], offPassiveLIST: [],
    // character current data
    offFULLHP:undefined, offHP:undefined, offBASEKNOWN:true,
    offBASEATK:undefined, offBASEINT:undefined, offBASEDEF:undefined, offBASEMDEF:undefined, offBASEDEX:undefined,
    offATK:undefined, offINT:undefined, offDEF:undefined, offMDEF:undefined, offDEX:undefined,
    offHITS:undefined, offHEAL:undefined, offHEALED:undefined, range:undefined, run:undefined,
    offCounterRate: undefined, offELSECounterRate:undefined, offTerrainRate: undefined,
    offSoldCounterRate: undefined,
    off1BFriend:undefined, off2BFriend:undefined, off3BFriend:undefined,
    off3BEnemy:undefined, off3CEnemy:undefined, offMOVETYPE:undefined,
    // character arena plus
    offAATK:undefined,offAINT:undefined,offADEF:undefined,offAMDEF:undefined,offADEX:undefined,
    offACRITDMGINC:undefined, offACRITDMGDEC:undefined,
    offACRITRATEINC:undefined, offAPCRITRATEDEC:undefined,
    // equipment selected
    offWeaSel:false, offArmSel:false, offHelSel:false, offAccSel:false,
    // current JobNo
    offJobNo:1,

        /* combat accumulate rates */
    offATKRATE:undefined, offINTRATE:undefined, offDEFRATE:undefined,
    offMDEFRATE:undefined, offDEXRATE:undefined, offDMGTYPE:undefined,
    offCRITDMG:undefined, offCRITRATE:undefined, offDMGRATE:undefined, offSKILLDMG:undefined,
    offDEFNEG:undefined, offMDEFNEG:undefined, offTALENTDMGDEC:undefined,
    offCOMMANDDMGDEC:undefined,
    defATKRATE:undefined, defINTRATE:undefined, defDEFRATE:undefined,
    defMDEFRATE:undefined, defDEXRATE:undefined, defDMGTYPE:undefined,
    defCRITDMG:undefined, defCRITRATE:undefined, defDMGRATE:undefined,
    defDEFNEG:undefined, defMDEFNEG:undefined, defTALENTDMGDEC:undefined,
    defCOMMANDDMGDEC:undefined,
    skillRATE:undefined, combatNEG:undefined, GUARDED: undefined,
        /* soldier accumulate rates */
    offsoldHP:undefined, offsoldFULLHP:undefined, offsoldHPRATE:undefined,
    offsoldATKRATE:undefined, offsoldDEFRATE:undefined, offsoldMDEFRATE:undefined,
    offsoldDMGRATE:undefined, offsoldCRITRATE:undefined, offsoldCRITDMG:undefined,
    offsoldHEALED:undefined, offsoldDMGTYPE:undefined,
    defsoldHP:undefined, defsoldFULLHP:undefined, defsoldHPRATE:undefined,
    defsoldATKRATE:undefined, defsoldDEFRATE:undefined, defsoldMDEFRATE:undefined,
    defsoldDMGRATE:undefined, defsoldCRITRATE:undefined, defsoldCRITDMG:undefined,
    defsoldHEALED:undefined, defsoldDMGTYPE:undefined,

        /* defense character info */
    defParty:undefined, defChar:undefined, defSkill:undefined, defSoldier:undefined,
    defTalent:undefined, defTerrain:undefined, defEnchant:undefined,
    defWeapon:undefined, defArmor:undefined, defHelmet:undefined, defAccessory:undefined,
    defBUFFLIST: [], defDEBUFFLIST: [], defCommandLIST: [], defPassiveLIST: [],
    // character current data
    defFULLHP:undefined, defHP:undefined, defBASEKNOWN:false,
    defBASEATK:undefined, defBASEINT:undefined, defBASEDEF:undefined, defBASEMDEF:undefined, defBASEDEX:undefined,
    defATK:undefined, defINT:undefined, defDEF:undefined, defMDEF:undefined, defDEX:undefined,
    defHITS:undefined, defHEAL:undefined, defHEALED:undefined,
    defCounterRate: undefined, defELSECounterRate:undefined, defTerrainRate: undefined,
    defSoldCounterRate: undefined,
    def1BFriend:undefined, def2BFriend:undefined, def3BFriend:undefined,
    def3BEnemy:undefined, def3CEnemy:undefined, defMOVETYPE:undefined,
    // character arena plus
    defAATK:undefined,defAINT:undefined,defADEF:undefined,defAMDEF:undefined,defADEX:undefined,
    defACRITDMGINC:undefined, defACRITDMGDEC:undefined,
    defACRITRATEINC:undefined, defACRITRATEDEC:undefined,
    // equipment selected
    defWeaSel:false, defArmSel:false, defHelSel:false, defAccSel:false,
    // current JobNo
    defJobNo:1,

        /* reset numbers */
    baseCRITRATE:0, baseCRITDMG:1.3, baseHITS:20, baseRATE:1, baseCombatNEG:0, baseNUM:0,
    baseHPRATE: 1.4,
};

function resetAllRATE(){
    /* offense accumulative rates */
    combat.offATKRATE = combat.baseRATE;
    combat.offINTRATE = combat.baseRATE;
    combat.offDEFRATE = combat.baseRATE;
    combat.offMDEFRATE = combat.baseRATE;
    combat.offDEXRATE = combat.baseRATE;
    combat.offDMGRATE = combat.baseRATE;
    combat.offCRITDMG = combat.baseCRITDMG;
    combat.offCRITRATE = combat.baseCRITRATE;
    combat.offSKILLDMG = combat.baseRATE;
    combat.offCounterRate = combat.baseRATE;
    combat.offSoldCounterRate = combat.baseRATE;
    combat.offELSECounterRate = combat.baseNUM;
    combat.offTerrainRate = combat.baseRATE;
    combat.offDEFNEG = combat.baseCombatNEG;
    combat.offMDEFNEG = combat.baseCombatNEG;
    combat.offTALENTDMGDEC = combat.baseNUM;
    combat.offCOMMANDDMGDEC = combat.baseNUM;
    /* defense accumulative rates */
    combat.defATKRATE = combat.baseRATE;
    combat.defINTRATE = combat.baseRATE;
    combat.defDEFRATE = combat.baseRATE;
    combat.defMDEFRATE = combat.baseRATE;
    combat.defDEXRATE = combat.baseRATE;
    combat.defDMGRATE = combat.baseRATE;
    combat.defCRITDMG = combat.baseCRITDMG;
    combat.defCRITRATE = combat.baseCRITRATE;
    combat.defCounterRate = combat.baseRATE;
    combat.defSoldCounterRate = combat.baseRATE;
    combat.defELSECounterRate = combat.baseNUM;
    combat.defTerrainRate = combat.baseRATE;
    combat.defDEFNEG = combat.baseCombatNEG;
    combat.defMDEFNEG = combat.baseCombatNEG;
    combat.defTALENTDMGDEC = combat.baseNUM;
    combat.defCOMMANDDMGDEC = combat.baseNUM;
    /* sold rates */
    combat.offsoldHP = 1000;
    combat.offsoldFULLHP = 1000;
    combat.offsoldHPRATE = combat.baseHPRATE;
    combat.offsoldATKRATE = combat.baseRATE;
    combat.offsoldDEFRATE = combat.baseRATE;
    combat.offsoldMDEFRATE = combat.baseRATE;
    combat.offsoldCRITRATE = combat.baseCRITRATE;
    combat.offsoldCRITDMG = combat.baseCRITDMG;
    combat.offsoldDMGRATE = combat.baseRATE;
    combat.offsoldHEALED = combat.baseRATE;
    combat.defsoldHP = 1000;
    combat.defsoldFULLHP = 1000;
    combat.defsoldHPRATE = combat.baseHPRATE;
    combat.defsoldATKRATE = combat.baseRATE;
    combat.defsoldDEFRATE = combat.baseRATE;
    combat.defsoldMDEFRATE = combat.baseRATE;
    combat.defsoldCRITRATE = combat.baseCRITRATE;
    combat.defsoldCRITDMG = combat.baseCRITDMG;
    combat.defsoldDMGRATE = combat.baseRATE;
    combat.defsoldHEALED = combat.baseRATE;
    /* other rates */
    combat.offHITS = combat.baseHITS;
    combat.defHITS = combat.baseHITS;
    combat.offHEAL = combat.baseRATE;
    combat.defHEAL = combat.baseRATE;
    combat.offHEALED = combat.baseRATE;
    combat.defHEALED = combat.baseRATE;
    combat.skillRATE = combat.baseRATE;
    combat.combatNEG = combat.baseRATE;
    combat.GUARDED = false;
};

function createAllList(){
    createWeaponList('offense', 'offWeaponList');
    createArmorList('offense', 'offArmorList');
    createHelmetList('offense', 'offHelmetList');
    createAccessoryList('offense', 'offAccessoryList');
};

function loadNUMDesc(side, NUMID){
    if(side == 'offense') SIDE = 'off';
    else if(side == 'defense') SIDE = 'def';

    eNUM = document.getElementById(NUMID);
    eNUMbox = document.getElementById(NUMID+'TABLE');

    // down shift 30px
    y = eNUM.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eNUM.getBoundingClientRect().left + 30;

    eNUMbox.style.top = y + 'px';
    eNUMbox.style.left = x + 'px';
};

function getCharData(side){
    if(side == 'offense'){
        /* 白字 */
        if(!combat.offBASEKNOWN){
            combat.offATK = Number(document.getElementById('offPREATKinput').value);
            combat.offINT = Number(document.getElementById('offPREINTinput').value);
            combat.offDEF = Number(document.getElementById('offPREDEFinput').value);
            combat.offMDEF = Number(document.getElementById('offPREMDEFinput').value);
            combat.offDEX = Number(document.getElementById('offPREDEXinput').value);
        }
        /* 進場綠字 */
        else{
            combat.offBASEATK = Number(document.getElementById('offBASEATKinput').value);
            combat.offBASEINT = Number(document.getElementById('offBASEINTinput').value);
            combat.offBASEDEF = Number(document.getElementById('offBASEDEFinput').value);
            combat.offBASEMDEF = Number(document.getElementById('offBASEMDEFinput').value);
            combat.offBASEDEX = Number(document.getElementById('offBASEDEXinput').value);
        }
        /* 生命/競技精通 */
        combat.offFULLHP = Number(document.getElementById('offHP').value.split('/')[1]);
        combat.offHP = Number(document.getElementById('offHP').value.split('/')[0]);
        combat.offAATK = Number(document.getElementById('offAATK').value);
        combat.offAINT = Number(document.getElementById('offAINT').value);
        combat.offADEF = Number(document.getElementById('offADEF').value);
        combat.offAMDEF = Number(document.getElementById('offAMDEF').value);
        combat.offADEX = Number(document.getElementById('offADEX').value);
    }
};

function getBASENUMS(side){
    if(side == 'offense'){
        combat.offBASEATK=(combat.offATK-combat.offAATK)/combat.offATKRATE;
        combat.offBASEINT=(combat.offINT-combat.offAINT)/combat.offINTRATE;
        combat.offBASEDEF=(combat.offDEF-combat.offADEF)/combat.offDEFRATE;
        combat.offBASEMDEF=(combat.offMDEF-combat.offAMDEF)/combat.offMDEFRATE;
        combat.offBASEDEX=(combat.offDEX-combat.offADEX)/combat.offDEXRATE;
    }
    else if(side == 'defense'){
        combat.defBASEATK=(combat.defATK-combat.defAATK)/combat.defATKRATE;
        combat.defBASEINT=(combat.defINT-combat.defAINT)/combat.defINTRATE;
        combat.defBASEDEF=(combat.defDEF-combat.defADEF)/combat.defDEFRATE;
        combat.defBASEMDEF=(combat.defMDEF-combat.defAMDEF)/combat.defMDEFRATE;
        combat.defBASEDEX=(combat.defDEX-combat.defADEX)/combat.defDEXRATE;
    }
};

function getPRENUMS(side){
    if(side == 'offense'){
        combat.offATK=combat.offBASEATK*combat.offATKRATE+combat.offAATK;
        combat.offINT=combat.offBASEINT*combat.offINTRATE+combat.offAINT;
        combat.offDEF=combat.offBASEDEF*combat.offDEFRATE+combat.offADEF;
        combat.offMDEF=combat.offBASEMDEF*combat.offMDEFRATE+combat.offAMDEF;
        combat.offDEX=combat.offBASEDEX*combat.offDEXRATE+combat.offADEX;
    }
    else if(side == 'defense'){
        combat.defATK=combat.defBASEATK*combat.defATKRATE+combat.defAATK;
        combat.defINT=combat.defBASEINT*combat.defINTRATE+combat.defAINT;
        combat.defDEF=combat.defBASEDEF*combat.defDEFRATE+combat.defADEF;
        combat.defMDEF=combat.defBASEMDEF*combat.defMDEFRATE+combat.defAMDEF;
        combat.defDEX=combat.defBASEDEX*combat.defDEXRATE+combat.defADEX;
    }
};

function displayHEALS(side){
    if(side == 'offense'){
        var HEAL = document.getElementById('offHEAL');
        var HEALED = document.getElementById('offHEALED');
        HEAL.innerHTML = "治療效果:" + Math.round(combat.offHEAL*100) + "%";
        HEALED.innerHTML = "遭受治療效果:" + Math.round(combat.offHEALED*100) + "%";
    }
    else if(side == 'defense'){
        var HEAL = document.getElementById('defHEAL');
        var HEALED = document.getElementById('defHEALED');
        HEAL.innerHTML = "治療效果:" + Math.round(combat.defHEAL*100) + "%";
        HEALED.innerHTML = "遭受治療效果:" + Math.round(combat.defHEALED*100) + "%";
    }
};

/* BASENUM = (PRENUM-ARENA)/(1+EQUIP+TALENT+BUFF+DEBUFF+COMMAND+ENCHANT:MOON) */
function displayBASENUMS(side, sideRate){
    BASE = 'BASE', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    text = ["白字攻擊", "白字智力", "白字防禦", "白字魔防", "白字技巧"];

    if(side == 'offense'){
        SIDE = 'off'
        pre = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX];
        arena = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF, combat.offADEX];
        rate = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        pre = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF, combat.defDEX];
        arena = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF, combat.defADEX];
        rate = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE, combat.defDEXRATE];
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+BASE+NUMS[i]+DATA);
        let ePREDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
        let eBASEDESC = document.getElementById(SIDE+BASE+NUMS[i]+DESC);
        let number = (pre[i]-arena[i])/rate[i];
        eDATA.innerHTML = text[i] + ":" + number.toFixed(2);
        ePREDESC.innerHTML = pre[i].toFixed(2);
        eBASEDESC.innerHTML = number.toFixed(2) + "=(" + pre[i] + "-" + arena[i] + ")÷(1";
        for(let j=0; j<sideRate.length; j++){
            if(sideRate[j].SOLDONLY) continue;
            if(sideRate[j].RATE[i] > 0)
               eBASEDESC.innerHTML+="+"+sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            if(sideRate[j].RATE[i] < 0)
               eBASEDESC.innerHTML+=sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
        }
        eBASEDESC.innerHTML += ")";
    }
};

/* PRENUM = BASENUM*(1+EQUIP+TALENT+BUFF+DEBUFF+COMMAND+ENCHANT:MOON)+ARENA */
function displayPRENUMS(side, sideRate){
    BASE = 'BASE', PRE = 'PRE', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    text = ["當前攻擊", "當前智力", "當前防禦", "當前魔防", "當前技巧"];

    if(side == 'offense'){
        SIDE = 'off';
        base = [combat.offBASEATK, combat.offBASEINT, combat.offBASEDEF, combat.offBASEMDEF, combat.offBASEDEX];
        arena = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF, combat.offADEX];
        rate = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        base = [combat.defBASEATK, combat.defBASEINT, combat.defBASEDEF, combat.defBASEMDEF, combat.defBASEDEX];
        arena = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF, combat.defADEX];
        rate = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE, combat.defDEXRATE];
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+PRE+NUMS[i]+DATA);
        let ePREDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
        let eBASEDESC = document.getElementById(SIDE+BASE+NUMS[i]+DESC);
        let number = base[i]*rate[i]+arena[i];
        eDATA.innerHTML = text[i] + ":" + number.toFixed(2);
        eBASEDESC.innerHTML = base[i].toFixed(2);
        ePREDESC.innerHTML = number.toFixed(2) + "=" + base[i] + "×(1";
        for(let j=0; j<sideRate.length; j++){
            if(sideRate[j].SOLDONLY) continue;
            if(sideRate[j].RATE[i] > 0)
                ePREDESC.innerHTML+="+"+sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            if(sideRate[j].RATE[i] < 0)
                ePREDESC.innerHTML+=sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
        }
        ePREDESC.innerHTML += ")+" + arena[i];
    }
};

/* collect RATES from skills */
function getAllSkill(stage, side){
    var otherside;
    if(side == 'offense'){
        otherside = 'defense';
        sideBASE = combat.offBASEKNOWN;
        othersideBASE = combat.defBASEKNOWN;
        charNAME = combat.offChar.NAME;
    }
    else if(side == 'defense'){
        otherside = 'offense';
        sideBASE = combat.defBASEKNOWN;
        othersideBASE = combat.offBASEKNOWN;
        charNAME = combat.defChar.NAME;
    }
    /* PRE STAGE */
    if(stage == 'PRE'){
        var sideRate = [], othersideRate = [];
        var interact = [], oppinteract = [];
        // talent
        if(charNAME != '神崎堇'){
            sideRate.push(getTalentSkill(side));
        }
        // talent
        if(charNAME == '神崎堇'){
            sideRate.push(getTalentSkill(side));
        }
        // enchant
        sideRate.push(getEnchantSkill(side));
        // equipment
        sideRate.push(getWeaponSkill(side));
        sideRate.push(getArmorSkill(side));
        sideRate.push(getHelmetSkill(side));
        sideRate.push(getAccessorySkill(side));
        // display NUMS
        if(sideBASE){
            displayPRENUMS(side, sideRate);
            getPRENUMS(side);
        }
        else{
            displayBASENUMS(side, sideRate);
            getBASENUMS(side);
        }
    }
    /* MID STAGE */
    if(stage == 'MID'){
        // do all true dmg stuff and check perHP related skills
        var sideRate = [], othersideRate = [];
        var interact = [], oppinteract = [];
        // talent & enchant
        sideRate.push(getMIDTalentSkill(side));
        sideRate.push(getMIDEnchantSkill(side));
        // equipment
        sideRate.push(getMIDWeaponSkill(side));
        sideRate.push(getMIDArmorSkill(side));
        sideRate.push(getMIDHelmetSkill(side));
        sideRate.push(getMIDAccessorySkill(side));
    }
};

function wholeCombat(){
    /* get all data/functions */
    resetAllRATE();
    getCharData('offense');
    getAllSkill('PRE', 'offense');
    getAllSkill('MID', 'offense');
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
            combat.offTalent = talent.find(x => x.NAME === combat.offChar.TALENT);
        }
        else if(selected[i].classList.contains('skill')){
            combat.offSkill = selected[i].id;
            combat.offSkill = skill.find(x => x.NAME === combat.offSkill);
            combat.offDMGTYPE = combat.offSkill.TYPE;
            displaySkillInfo('offense');
        }
        else if(selected[i].classList.contains('soldier')){
            combat.offSoldier = selected[i].id;
            combat.offSoldier = soldier.find(x => x.NAME === combat.offSoldier);
            combat.offsoldDMGTYPE = combat.offSoldier.DMGTYPE;
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

    /* combat */
    wholeCombat();
});

