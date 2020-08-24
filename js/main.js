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
    off1BFriend:undefined, off2BFriend:undefined, off3BFriend:undefined,
    off3BEnemy:undefined, off3CEnemy:undefined,
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
    offDEFNEG:undefined, offMDEFNEG:undefined,
    defATKRATE:undefined, defINTRATE:undefined, defDEFRATE:undefined,
    defMDEFRATE:undefined, defDEXRATE:undefined, defDMGTYPE:undefined,
    defCRITDMG:undefined, defCRITRATE:undefined, defDMGRATE:undefined,
    defDEFNEG:undefined, defMDEFNEG:undefined,
    skillRATE:undefined, combatNEG:undefined,
        /* soldier accumulate rates */
    offsoldHP:undefined, offsoldFULLHP:undefined, offsoldHPRATE:undefined,
    offsoldATKRATE:undefined, offsoldDEFRATE:undefined, offsoldMDEFRATE:undefined,
    offsoldDMGRATE:undefined, offsoldCRITRATE:undefined, offsoldCRITDMG:undefined,
    offsoldHEALED:undefined,
    defsoldHP:undefined, defsoldFULLHP:undefined, defsoldHPRATE:undefined,
    defsoldATKRATE:undefined, defsoldDEFRATE:undefined, defsoldMDEFRATE:undefined,
    defsoldDMGRATE:undefined, defsoldCRITRATE:undefined, defsoldCRITDMG:undefined,
    defsoldHEALED:undefined,

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
    def1BFriend:undefined, def2BFriend:undefined, def3BFriend:undefined,
    def3BEnemy:undefined, def3CEnemy:undefined,
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
    combat.offELSECounterRate = 0;
    combat.offTerrainRate = combat.baseRATE;
    combat.offDEFNEG = combat.baseCombatNEG;
    combat.offMDEFNEG = combat.baseCombatNEG;
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
    combat.defELSECounterRate = 0;
    combat.defTerrainRate = combat.baseRATE;
    combat.defDEFNEG = combat.baseCombatNEG;
    combat.defMDEFNEG = combat.baseCombatNEG;
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
};

function createAllList(){
    createSoldierList('offense', 'offSoldierList');
    createSoldierList('defense', 'defSoldierList');
    createCommandList('offense', 'offCommandList');
    createCommandList('defense', 'defCommandList');
    createPassiveList('offense', 'offPassiveList');
    createPassiveList('defense', 'defPassiveList');
    createBUFFList('offense', 'offBUFFList');
    createBUFFList('defense', 'defBUFFList');
    createWeaponList('offense', 'offWeaponList');
    createWeaponList('defense', 'defWeaponList');
    createArmorList('offense', 'offArmorList');
    createArmorList('defense', 'defArmorList');
    createHelmetList('offense', 'offHelmetList');
    createHelmetList('defense', 'defHelmetList');
    createAccessoryList('offense', 'offAccessoryList');
    createAccessoryList('defense', 'defAccessoryList');
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
        /* 移動/射程/敵軍/友軍 */
        combat.range = Number(document.getElementById('offRange').value);
        combat.run = Number(document.getElementById('offRun').value);
        combat.off1BFriend = Number(document.getElementById('off1BFriend').value);
        combat.off2BFriend = Number(document.getElementById('off2BFriend').value);
        combat.off3BFriend = Number(document.getElementById('off3BFriend').value);
        combat.off3BEnemy = Number(document.getElementById('off3BEnemy').value);
        combat.off2CEnemy = Number(document.getElementById('off2CEnemy').value);
        combat.off3CEnemy = Number(document.getElementById('off3CEnemy').value);
    }
    else if(side == 'defense'){
        /* 白字 */
        if(!combat.defBASEKNOWN){
            combat.defATK = Number(document.getElementById('defPREATKinput').value);
            combat.defINT = Number(document.getElementById('defPREINTinput').value);
            combat.defDEF = Number(document.getElementById('defPREDEFinput').value);
            combat.defMDEF = Number(document.getElementById('defPREMDEFinput').value);
            combat.defDEX = Number(document.getElementById('defPREDEXinput').value);
        }
        /* 進場綠字 */
        else{
            combat.defBASEATK = Number(document.getElementById('defBASEATKinput').value);
            combat.defBASEINT = Number(document.getElementById('defBASEINTinput').value);
            combat.defBASEDEF = Number(document.getElementById('defBASEDEFinput').value);
            combat.defBASEMDEF = Number(document.getElementById('defBASEMDEFinput').value);
            combat.defBASEDEX = Number(document.getElementById('defBASEDEXinput').value);
        }
        /* 生命/競技精通 */
        combat.defFULLHP = Number(document.getElementById('defHP').value.split('/')[1]);
        combat.defHP = Number(document.getElementById('defHP').value.split('/')[0]);
        combat.defAATK = Number(document.getElementById('defAATK').value);
        combat.defAINT = Number(document.getElementById('defAINT').value);
        combat.defADEF = Number(document.getElementById('defADEF').value);
        combat.defAMDEF = Number(document.getElementById('defAMDEF').value);
        combat.defADEX = Number(document.getElementById('defADEX').value);
        /* 敵軍/友軍 */
        combat.def1BFriend = Number(document.getElementById('def1BFriend').value);
        combat.def2BFriend = Number(document.getElementById('def2BFriend').value);
        combat.def3BFriend = Number(document.getElementById('def3BFriend').value);
        combat.def3BEnemy = Number(document.getElementById('def3BEnemy').value);
        combat.def3CEnemy = Number(document.getElementById('def3CEnemy').value);
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
            if(sideRate[j].RATE[i] != 0)
               eBASEDESC.innerHTML+="+"+sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
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
            if(sideRate[j].RATE[i] != 0)
                ePREDESC.innerHTML+="+"+sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
        }
        ePREDESC.innerHTML += ")+" + arena[i];
    }
};

/* NUMBER INTERACTION (SUBSTITUTION AND ADDITION) */
function displayINTERACT(side, interact){
    PRE = 'PRE', DATA = 'DATA', DESC = 'DESC', NUMS = ['ATK', 'INT', 'DEF', 'MDEF'];
    TARGET = [0, 0, 0, 0], NULLED = [false, false, false, false];
    text = ["當前攻擊", "當前智力", "當前防禦", "當前魔防"];

    if(side == 'offense'){
        SIDE = 'off';
        pre = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        pre = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF, combat.defDEX];
    }

    /* SUB */
    let subs = [0, 0, 0, 0];
    for(let i=0; i<interact.length; i++){
        if(!interact[i].SUBEXIST) continue;
        var base1 = false, base2 = false, target = false;
        for(let j=0; j<NUMS.length; j++){
            // get changing target
            if(interact[i].SUB[j] != 1 && interact[i].SUB[j] != 0) target = j;
            // get changing base (up to 2 for 神衛)
            if(!base1 && interact[i].SUB[j] == 1) base1 = j;
            else if(base1 && interact[i].SUB[j] == 1) base2 = j;
        }
        eTARGETDATA = document.getElementById(SIDE+PRE+NUMS[target]+DATA);
        eTARGETDESC = document.getElementById(SIDE+PRE+NUMS[target]+DESC);
        // reset target desc
        if(subs[target] == 0){
            eTARGETDATA.innerHTML = text[target]+":";
            eTARGETDESC.innerHTML = "";
        }
        else eTARGETDESC.innerHTML += "+";
        subs[target] += 1;

        if(base2){
            base1NUM = pre[base1];
            base2NUM = pre[base2];
            // if a SUBBED number be used as a base, the base's target will be set to 0
            NULLED[base1] = true, NULLED[base2] = true;
            eTARGETDESC.innerHTML += "("+base1NUM.toFixed(2)+"×"+interact[i].SUB[base1]+"+"+base2NUM.toFixed(2)+"×"+interact[i].SUB[base2]+")["+interact[i].NAME+"]";
            TARGET[target] += base1NUM*interact[i].SUB[base1]+base2NUM*interact[i].SUB[base2];
        }
        else{
            base1NUM = pre[base1];
            // if a SUBBED number be used as a base, the base's target will be set to 0
            NULLED[base1] = true;
            eTARGETDESC.innerHTML += "("+base1NUM.toFixed(2)+"×"+interact[i].SUB[target]+")["+interact[i].NAME+"]";
            TARGET[target] += base1NUM*interact[i].SUB[target];
        }
    }
    // display the summed sub targets
    for(let i=0; i<NUMS.length; i++)
        if(TARGET[i] != 0){
            eDATA = document.getElementById(SIDE+PRE+NUMS[i]+DATA);
            eDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
            if(!NULLED[i]){
                eDATA.innerHTML += TARGET[i].toFixed(2);
                eDESC.innerHTML = TARGET[i].toFixed(2)+"="+eDESC.innerHTML;
            }
            else{
                eDATA.innerHTML += "0.00";
                eDESC.innerHTML = "0.00=0.00[代替後的數值無法被代替]";
            }
        }

    /* ADD */
    let ADDS = [0, 0, 0, 0];
    for(let i=0; i<interact.length; i++){
        if(!interact[i].ADDEXIST) continue;
        var base1 = false, base2 = false, target1 = false, target2 = false;
        for(let j=0; j<NUMS.length; j++){
            // get changing target (up to 2 for 團結的意志)
            if(!target1 && interact[i].ADD[j] == 1) target1 = j;
            else if(target1 && interact[i].ADD[j] == 1) target2 = j;
            // get changing base (up to 2 for 野獸震懾)
            if(!base1 && interact[i].ADD[j] != 1 && interact[i].ADD[j] != 0) base1 = j;
            else if(base1 && interact[i].ADD[j] != 1 && interact[i].ADD[j] != 0) base2 = j;
        }
        eTARGETDATA = document.getElementById(SIDE+PRE+NUMS[target1]+DATA);
        eTARGETDESC = document.getElementById(SIDE+PRE+NUMS[target1]+DESC);
        // append on current target desc

        if(base2){
            base1NUM = pre[base1];
            base2NUM = pre[base2];
            eTARGETDESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].ADD[base1]+"+"+base2NUM.toFixed(2)+"×"+interact[i].ADD[base2]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].ADD[base1]+base2NUM*interact[i].ADD[base2];
        }
        else if(target2){
            base1NUM = pre[base1];
            eTARGET1DESC = document.getElementById(SIDE+PRE+NUMS[target1]+DESC);
            eTARGET2DESC = document.getElementById(SIDE+PRE+NUMS[target2]+DESC);
            eTARGET1DESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].ADD[base1]+")["+interact[i].NAME+"]";
            eTARGET2DESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].ADD[base1]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].ADD[base1];
            ADDS[target2] += base1NUM*interact[i].ADD[base1];
        }
        else{
            base1NUM = pre[base1];
            eTARGETDESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].ADD[base1]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].ADD[base1];
        }
    }
    // display adds
    for(let i=0; i<NUMS.length; i++)
        if(ADDS[i] != 0){
            eDATA = document.getElementById(SIDE+PRE+NUMS[i]+DATA);
            eDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
            numAfterAdd = ADDS[i] + Number(eDATA.innerHTML.split(':')[1]);
            eDATA.innerHTML = text[i]+":"+numAfterAdd.toFixed(2);
            eDESC.innerHTML = numAfterAdd.toFixed(2)+"="+eDESC.innerHTML.split('=')[1];
        }
};

/* MIDNUM = PRENUM+BASENUM*(0+EQUIP+TALENT+ENCHANT) */
function displayMIDNUMS(side, sideRate, oppRate){
    BASE = 'BASE', PRE = 'PRE', MID = 'MID', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX', 'CRITRATE', 'CRITDMG'];
    text = ["戰中攻擊", "戰中智力", "戰中防禦", "戰中魔防", "戰中技巧", "暴擊率", "暴擊傷害"];

    offBASE = [combat.offBASEATK, combat.offBASEINT, combat.offBASEDEF, combat.offBASEMDEF, combat.offBASEDEX];
    offPRE = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX];
    offRATE = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE, combat.offCRITRATE, combat.offCRITDMG];
    offARENA = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF, combat.offADEX];
    defBASE = [combat.defBASEATK, combat.defBASEINT, combat.defBASEDEF, combat.defBASEMDEF, combat.defBASEDEX];
    defPRE = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF, combat.defDEX];
    defRATE = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE, combat.defDEXRATE, combat.defCRITRATE, combat.defCRITDMG];
    defARENA = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF, combat.defADEX];

    if(side == 'offense'){
        SIDE = 'off';
        base = offBASE, oppbase = defBASE;
        pre = offPRE, opppre = defPRE;
        rate = offRATE, arena = offARENA;
    }
    else if(side == 'defense'){
        SIDE = 'def';
        base = defBASE, oppbase = offBASE;
        pre = defPRE, opppre = offPRE;
        rate = defRATE, arena = defARENA;
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+MID+NUMS[i]+DATA);
        let eMIDDESC = document.getElementById(SIDE+MID+NUMS[i]+DESC);

        if(i < 5){
            /* MIDNUM FORMULA */
            let number = base[i]*rate[i]+arena[i];

            eDATA.innerHTML = text[i] + ":" + number.toFixed(2);
            eMIDDESC.innerHTML = number.toFixed(2)+"="+pre[i].toFixed(2)+"+"+base[i].toFixed(2)+"×(0";
            for(let j=0; j<sideRate.length; j++){
                if(sideRate[j].SOLDONLY) continue;
                if(sideRate[j].MIDRATE[i] != 0)
                    eMIDDESC.innerHTML+="+"+sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            }
            eMIDDESC.innerHTML += ")";
        }
        else{
            /* CRITRATE FORMULA */
            let number = rate[i];

            eDATA.innerHTML = text[i] + ":" + number.toFixed(2);
            eMIDDESC.innerHTML = number.toFixed(2);
            if(i == 5){
                ePREDEXDATA = document.getElementById(SIDE+MID+'DEX'+DATA);
                PREDEX = Number(ePREDEXDATA.innerHTML.split(":")[1]).toFixed(0);
                baseCRIT = PREDEX/1000;
                eDATA.innerHTML = text[i] + ":" + (baseCRIT+number).toFixed(2);
                eMIDDESC.innerHTML = (baseCRIT+number).toFixed(2)+"="+baseCRIT.toFixed(2)+"[技巧]";
            }
            if(i == 6) eMIDDESC.innerHTML = number.toFixed(2)+"="+combat.baseCRITDMG;
            for(let j=0; j<sideRate.length; j++){
                if(sideRate[j].SOLDONLY) continue;
                if(sideRate[j].MIDRATE[i] > 0)
                    eMIDDESC.innerHTML+="+"+sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
                if(sideRate[j].MIDRATE[i] < 0)
                    eMIDDESC.innerHTML+=sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            }
            for(let j=0; j<oppRate.length; j++){
                if(oppRate[j].SOLDONLY) continue;
                if(oppRate[j].MIDRATE[i+3] > 0)
                    eMIDDESC.innerHTML+="-"+oppRate[j].MIDRATE[i+3].toFixed(2)+"["+oppRate[j].NAME+"]";
                if(oppRate[j].MIDRATE[i+3] < 0)
                    eMIDDESC.innerHTML+="+"+oppRate[j].MIDRATE[i+3].toFixed(2)+"["+oppRate[j].NAME+"]";
            }
        }
    }
};

/* NUMBER INTERACTION (SUBSTITUTION AND ADDITION) */
function displayMIDINTERACT(side, interact){
    MID = 'MID', DATA = 'DATA', DESC = 'DESC', NUMS = ['ATK', 'INT', 'DEF', 'MDEF'];
    TARGET = [0, 0, 0, 0], NULLED = [false, false, false, false];
    text = ["戰中攻擊", "戰中智力", "戰中防禦", "戰中魔防"];

    if(side == 'offense'){
        SIDE = 'off';
        mid = [combat.offBASEATK * combat.offATKRATE + combat.offAATK,
               combat.offBASEINT * combat.offINTRATE + combat.offAINT,
               combat.offBASEDEF * combat.offDEFRATE + combat.offADEF,
               combat.offBASEMDEF* combat.offMDEFRATE+ combat.offAMDEF,
               combat.offBASEDEX * combat.offDEXRATE + combat.offADEX];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        mid = [combat.defBASEATK * combat.defATKRATE + combat.defAATK,
               combat.defBASEINT * combat.defINTRATE + combat.defAINT,
               combat.defBASEDEF * combat.defDEFRATE + combat.defADEF,
               combat.defBASEMDEF* combat.defMDEFRATE+ combat.defAMDEF,
               combat.defBASEDEX * combat.defDEXRATE + combat.defADEX];
    }

    /* SUB */
    let subs = [0, 0, 0, 0];
    for(let i=0; i<interact.length; i++){
        if(!interact[i].MIDSUBEXIST) continue;
        var base1 = false, base2 = false, target = false;
        for(let j=0; j<NUMS.length; j++){
            // get changing target
            if(interact[i].MIDSUB[j] != 1 && interact[i].MIDSUB[j] != 0) target = j;
            // get changing base (up to 2 for 神衛)
            if(!base1 && interact[i].MIDSUB[j] == 1) base1 = j;
            else if(base1 && interact[i].MIDSUB[j] == 1) base2 = j;
        }
        eTARGETDATA = document.getElementById(SIDE+MID+NUMS[target]+DATA);
        eTARGETDESC = document.getElementById(SIDE+MID+NUMS[target]+DESC);
        // reset target desc
        if(subs[target] == 0){
            eTARGETDATA.innerHTML = text[target]+":";
            eTARGETDESC.innerHTML = "";
        }
        else eTARGETDESC.innerHTML += "+";
        subs[target] += 1;

        if(base2){
            base1NUM = mid[base1];
            base2NUM = mid[base2];
            // if a SUBBED number be used as a base, the base's target will be set to 0
            NULLED[base1] = true, NULLED[base2] = true;
            eTARGETDESC.innerHTML += "("+base1NUM.toFixed(2)+"×"+interact[i].MIDSUB[base1]+"+"+base2NUM.toFixed(2)+"×"+interact[i].MIDSUB[base2]+")["+interact[i].NAME+"]";
            TARGET[target] += base1NUM*interact[i].MIDSUB[base1]+base2NUM*interact[i].MIDSUB[base2];
        }
        else{
            base1NUM = mid[base1];
            // if a SUBBED number be used as a base, the base's target will be set to 0
            NULLED[base1] = true;
            eTARGETDESC.innerHTML += "("+base1NUM.toFixed(2)+"×"+interact[i].MIDSUB[target]+")["+interact[i].NAME+"]";
            TARGET[target] += base1NUM*interact[i].MIDSUB[target];
        }
    }
    // display the summed sub targets
    for(let i=0; i<NUMS.length; i++)
        if(TARGET[i] != 0){
            eDATA = document.getElementById(SIDE+MID+NUMS[i]+DATA);
            eDESC = document.getElementById(SIDE+MID+NUMS[i]+DESC);
            if(!NULLED[i]){
                eDATA.innerHTML += TARGET[i].toFixed(2);
                eDESC.innerHTML = TARGET[i].toFixed(2)+"="+eDESC.innerHTML;
            }
            else{
                eDATA.innerHTML += "0.00";
                eDESC.innerHTML = "0.00=0.00[代替後的數值無法被代替]";
            }
        }

    /* ADD */
    let ADDS = [0, 0, 0, 0];
    for(let i=0; i<interact.length; i++){
        if(!interact[i].MIDADDEXIST) continue;
        var base1 = false, base2 = false, target1 = false, target2 = false;
        for(let j=0; j<NUMS.length; j++){
            // get changing target (up to 2 for 團結的意志)
            if(!target1 && interact[i].MIDADD[j] == 1) target1 = j;
            else if(target1 && interact[i].MIDADD[j] == 1) target2 = j;
            // get changing base (up to 2 for 野獸震懾)
            if(!base1 && interact[i].MIDADD[j] != 1 && interact[i].MIDADD[j] != 0) base1 = j;
            else if(base1 && interact[i].MIDADD[j] != 1 && interact[i].MIDADD[j] != 0) base2 = j;
        }
        eTARGETDATA = document.getElementById(SIDE+MID+NUMS[target1]+DATA);
        eTARGETDESC = document.getElementById(SIDE+MID+NUMS[target1]+DESC);
        // append on current target desc

        if(base2){
            base1NUM = mid[base1];
            base2NUM = mid[base2];
            eTARGETDESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].MIDADD[base1]+"+"+base2NUM.toFixed(2)+"×"+interact[i].MIDADD[base2]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].MIDADD[base1]+base2NUM*interact[i].MIDADD[base2];
        }
        else if(target2){
            base1NUM = mid[base1];
            eTARGET1DESC = document.getElementById(SIDE+MID+NUMS[target1]+DESC);
            eTARGET2DESC = document.getElementById(SIDE+MID+NUMS[target2]+DESC);
            eTARGET1DESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].MIDADD[base1]+")["+interact[i].NAME+"]";
            eTARGET2DESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].MIDADD[base1]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].MIDADD[base1];
            ADDS[target2] += base1NUM*interact[i].MIDADD[base1];
        }
        else{
            base1NUM = mid[base1];
            eTARGETDESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].MIDADD[base1]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].MIDADD[base1];
        }
    }
    // display adds
    for(let i=0; i<NUMS.length; i++)
        if(ADDS[i] != 0){
            eDATA = document.getElementById(SIDE+MID+NUMS[i]+DATA);
            eDESC = document.getElementById(SIDE+MID+NUMS[i]+DESC);
            numAfterAdd = ADDS[i] + Number(eDATA.innerHTML.split(':')[1]);
            eDATA.innerHTML = text[i]+":"+numAfterAdd.toFixed(2);
            eDESC.innerHTML = numAfterAdd.toFixed(2)+"="+eDESC.innerHTML.split('=')[1];
        }
};

/* ATK*(1+EQUIP+OEQUIP+TALENT+HEART+BUFF+DEBUFF+COMMAND+ENCHANT:MOON+ENCHENT:WAVE) */
function displayONEHIT(side, sideRate, oppRate){
    ONEHIT='ONEHIT', MID='MID', DATA='DATA', DESC='DESC', DMGTYPE='DMGTYPE', text=['一段傷害'];
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'/*, 'CRITRATE', 'CRITDMG'*/];
    ATK = 0, INT = 1, DEF = 2, MDEF = 3, DEX = 4, CRITRATE = 0, CRITDMG = 1, DMGRATE = 2;
    CRITRATEINC = 5, CRITDMGINC = 6, DMGRATEINC = 7;
    CRITRATEDEC = 8, CRITDMGDEC = 9, DMGRATEDEC = 10;
    offMID = [], defMID = [],
    offOTHER = [combat.offCRITRATE, combat.offCRITDMG, combat.offDMGRATE];
    defOTHER = [combat.defCRITRATE, combat.defCRITDMG, combat.defDMGRATE];

    for(let i=0; i<NUMS.length; i++){
        eoffDATA = document.getElementById('off'+MID+NUMS[i]+DATA);
        edefDATA = document.getElementById('def'+MID+NUMS[i]+DATA);
        offMID[i] = Number(eoffDATA.innerHTML.split(':')[1]);
        defMID[i] = Number(edefDATA.innerHTML.split(':')[1]);
    }

    if(side == 'offense'){
        SIDE = 'off';
        skilltype = combat.offSkill.TYPE;
        skillrate = combat.offSkill.RATE;
        skilldmg = combat.offSKILLDMG;
        DEFNEG = combat.offDEFNEG;
        MDEFNEG = combat.offMDEFNEG;
        otherside = 'defense';
        mid = offMID, oppmid = defMID;
        rate = offRATE, opprate = defRATE;
        other = offOTHER, oppother = defOTHER;
        counterRate = combat.offCounterRate;
        terrainRate = combat.defTerrainRate;
    }
    else if(side == 'defense'){
        SIDE = 'def';
        skilltype = combat.defSkill.TYPE;
        skillrate = combat.defSkill.RATE;
        skilldmg = 1;
        DEFNEG = combat.defDEFNEG;
        MDEFNEG = combat.defMDEFNEG;
        otherside = 'offense';
        mid = defMID, oppmid = offMID;
        other = defOTHER, oppother = offOTHER;
        counterRate = combat.defCounterRate;
        terrainRate = combat.offTerrainRate;
    }

    if(skilltype == '物理傷害'){
        offNUM = mid[ATK]*counterRate;
        defNUM = oppmid[DEF]*terrainRate;
        negNUM = DEFNEG;
    }
    else if(skilltype == '魔法傷害'){
        offNUM = mid[INT]*counterRate;
        defNUM = oppmid[MDEF]*terrainRate;
        negNUM = MDEFNEG;
    }

    /* ONEHIT MAIN FORMULA */
    number = (offNUM-defNUM*(1-negNUM))/2*skillrate*other[DMGRATE]*skilldmg;
    if(number <= 0) number = 1;

    eTYPE = document.getElementById(SIDE+DMGTYPE);
    eDATA = document.getElementById(SIDE+ONEHIT+DATA);
    eDESC = document.getElementById(SIDE+ONEHIT+DESC);
    eTYPE.innerHTML = "["+skilltype+"]";
    eDATA.innerHTML = text[0] + ":" + number.toFixed(2);
    eDESC.innerHTML = number.toFixed(2) + "=";

    /* display skilltype */
    if(skilltype == '物理傷害') offNUM = ATK, defNUM = DEF;
    else if(skilltype == '魔法傷害') offNUM = INT, defNUM = MDEF;


    /* offNUM*counterRate */
    eDESC.innerHTML += "("+mid[offNUM].toFixed(2)+"×"+counterRate.toFixed(2);
    /* defNUM*(1-negNUM)*terrainRate */
    if(!negNUM) eDESC.innerHTML += " - "+oppmid[defNUM].toFixed(2)+"×"+terrainRate+")";
    else eDESC.innerHTML += " - "+oppmid[defNUM].toFixed(2)+"×(1-"+negNUM+")×"+terrainRate+")";
    /* skillrate */
    eDESC.innerHTML += "÷2×"+skillrate;
    /* off DMGRATEINC */
    eDESC.innerHTML += "×(1";
    for(let j=0; j<sideRate.length; j++){
      if(sideRate[j].SOLDONLY != undefined && sideRate[j].SOLDONLY == true) continue;
      if(sideRate[j].MIDRATE[DMGRATEINC] > 0)
       eDESC.innerHTML+="+"+sideRate[j].MIDRATE[DMGRATEINC].toFixed(2)+"["+sideRate[j].NAME+"]";
      if(sideRate[j].MIDRATE[DMGRATEINC] < 0)
       eDESC.innerHTML+=sideRate[j].MIDRATE[DMGRATEINC].toFixed(2)+"["+sideRate[j].NAME+"]";
    }
    /* def DMGRATEDEC */
    for(let j=0; j<oppRate.length; j++){
      if(oppRate[j].SOLDONLY != undefined && oppRate[j].SOLDONLY == true) continue;
      if(oppRate[j].MIDRATE[DMGRATEDEC] > 0)
       eDESC.innerHTML+="-"+oppRate[j].MIDRATE[DMGRATEDEC].toFixed(2)+"["+oppRate[j].NAME+"]";
      if(oppRate[j].MIDRATE[DMGRATEDEC] < 0)
       eDESC.innerHTML+=oppRate[j].MIDRATE[DMGRATEDEC].toFixed(2)+"["+oppRate[j].NAME+"]";
    }
    eDESC.innerHTML += ")";

    /* skill dmg rate */
    if(side == 'offense'){
        eDESC.innerHTML += "×(1";
        for(let j=0; j<sideRate.length; j++)
            if(sideRate[j].SKILLDMG != undefined && sideRate[j].SKILLDMG != 0)
                eDESC.innerHTML+="+"+sideRate[j].SKILLDMG.toFixed(2)+"["+sideRate[j].NAME+"]";
        eDESC.innerHTML += ")";
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
            othersideRate.push(getTalentSkill(otherside));
        }
        // display sold FULLHP
        displaySoldHP(side, sideRate);
        displaySoldHP(otherside, othersideRate);
        // talent
        if(charNAME == '神崎堇'){
            sideRate.push(getTalentSkill(side));
            othersideRate.push(getTalentSkill(otherside));
        }
        // training
        sideRate = [...sideRate, ...getTrainingSkill(side)];
        othersideRate = [...othersideRate, ...getTrainingSkill(otherside)];
        // soldier
        sideRate.push(getSoldierSkill(side));
        othersideRate.push(getSoldierSkill(otherside));
        // heart & enchant
        sideRate.push(getHeartSkill(side));
        othersideRate.push(getHeartSkill(otherside));
        sideRate.push(getEnchantSkill(side));
        othersideRate.push(getEnchantSkill(otherside));
        interact.push(getInteractTalentSkill(side));
        oppinteract.push(getInteractTalentSkill(otherside));
        // command & passive & buff & debuff
        sideRate = [...sideRate, ...getBUFFSkill(side)];
        othersideRate = [...othersideRate, ...getBUFFSkill(otherside)];
        sideRate = [...sideRate, ...getCommandSkill(side)];
        othersideRate = [...othersideRate, ...getCommandSkill(otherside)];
        sideRate = [...sideRate, ...getPassiveSkill(side)];
        othersideRate = [...othersideRate, ...getPassiveSkill(otherside)];
        interact = [...interact, ...getInteractBUFFSkill(side)];
        oppinteract = [...oppinteract, ...getInteractBUFFSkill(otherside)];
        interact = [...interact, ...getInteractPassiveSkill(side)];
        oppinteract = [...oppinteract, ...getInteractPassiveSkill(otherside)];
        // equipment
        sideRate.push(getWeaponSkill(side));
        othersideRate.push(getWeaponSkill(otherside));
        sideRate.push(getArmorSkill(side));
        othersideRate.push(getArmorSkill(otherside));
        sideRate.push(getHelmetSkill(side));
        othersideRate.push(getHelmetSkill(otherside));
        sideRate.push(getAccessorySkill(side));
        othersideRate.push(getAccessorySkill(otherside));
        // display HEAL & HEALED
        displayHEALS(side);
        displayHEALS(otherside);
        // display NUMS
        if(sideBASE){
            displayPRENUMS(side, sideRate);
            getPRENUMS(side);
            displayINTERACT(side, interact);
        }
        else{
            displayBASENUMS(side, sideRate);
            getBASENUMS(side);
        }
        if(othersideBASE){
            displayPRENUMS(otherside, othersideRate);
            getPRENUMS(otherside);
            displayINTERACT(otherside, oppinteract);
        }
        else{
            displayBASENUMS(otherside, othersideRate);
            getBASENUMS(otherside);
        }
        // display soldNUMS
        displaySoldNUMS(side, sideRate);
        displaySoldNUMS(otherside, othersideRate);
    }
    /* MID STAGE */
    if(stage == 'MID'){
        // do all true dmg stuff and check perHP related skills
        var sideRate = [], othersideRate = [];
        var interact = [], oppinteract = [];
        // talent & heart & enchant
        sideRate.push(getMIDTalentSkill(side));
        othersideRate.push(getMIDTalentSkill(otherside));
        sideRate.push(getMIDHeartSkill(side));
        othersideRate.push(getMIDHeartSkill(otherside));
        sideRate.push(getMIDEnchantSkill(side));
        othersideRate.push(getMIDEnchantSkill(otherside));
        interact.push(getMIDInteractTalentSkill(side));
        oppinteract.push(getMIDInteractTalentSkill(otherside));
        // command & passive & buff & debuff
        sideRate = [...sideRate, ...getMIDBUFFSkill(side)];
        othersideRate = [...othersideRate, ...getMIDBUFFSkill(otherside)];
        sideRate = [...sideRate, ...getMIDCommandSkill(side)];
        othersideRate = [...othersideRate, ...getMIDCommandSkill(otherside)];
        sideRate = [...sideRate, ...getMIDPassiveSkill(side)];
        othersideRate = [...othersideRate, ...getMIDPassiveSkill(otherside)];
        interact = [...interact, ...getMIDInteractBUFFSkill(side)];
        oppinteract = [...oppinteract, ...getMIDInteractBUFFSkill(otherside)];
        interact = [...interact, ...getMIDInteractPassiveSkill(side)];
        oppinteract = [...oppinteract, ...getMIDInteractPassiveSkill(otherside)];
        // equipment
        sideRate.push(getMIDWeaponSkill(side));
        othersideRate.push(getMIDWeaponSkill(otherside));
        sideRate.push(getMIDArmorSkill(side));
        othersideRate.push(getMIDArmorSkill(otherside));
        sideRate.push(getMIDHelmetSkill(side));
        othersideRate.push(getMIDHelmetSkill(otherside));
        sideRate.push(getMIDAccessorySkill(side));
        othersideRate.push(getMIDAccessorySkill(otherside));
        // training
        sideRate = [...sideRate, ...getMIDTrainingSkill(side)];
        othersideRate = [...othersideRate, ...getMIDTrainingSkill(otherside)];
        // soldier
        sideRate.push(getMIDSoldierSkill(side));
        othersideRate.push(getMIDSoldierSkill(otherside));
        // skill
        sideRate.push(getMIDSkillSkill(side));
        othersideRate.push(getMIDSkillSkill(otherside));
        // display MIDNUMS
        displayMIDNUMS(side, sideRate, othersideRate);
        displayMIDNUMS(otherside, othersideRate, sideRate);
        // display MIDINTERACT
        displayMIDINTERACT(side, interact);
        displayMIDINTERACT(otherside, oppinteract);
        // display MID soldNUMS
        displayMIDSoldNUMS(side, sideRate, othersideRate);
        displayMIDSoldNUMS(otherside, othersideRate, sideRate);
        // display ONEHIT
        displayONEHIT(side, sideRate, othersideRate);
        displayONEHIT(otherside, othersideRate, sideRate);
        // display soldier ONEHIT
        displaySoldONEHIT(side, sideRate, othersideRate);
        displaySoldONEHIT(otherside, othersideRate, sideRate);
    }
};

function wholeCombat(){
    /* get all data/functions */
    resetAllRATE();
    getCharData('offense');
    getCharData('defense');
    getTerrainRATE('offense');
    getTerrainRATE('defense');
    getAllSkill('PRE', 'offense');
    getCounterRATE('offense');
    getCounterRATE('defense');
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
            combat.offHeart = heart.find(x => x.NAME === combat.offChar.NAME+'大心');
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
            combat.defTalent = talent.find(x => x.NAME === combat.defChar.TALENT);
            combat.defHeart = heart.find(x => x.NAME === combat.defChar.NAME+'大心');
        }
        else if(selected[i].classList.contains('soldier')){
            combat.defSoldier = selected[i].id.slice(0, -1);
            combat.defSoldier = soldier.find(x => x.NAME === combat.defSoldier);
        }
        else if(selected[i].classList.contains('terrain')){
            combat.defTerrain = selected[i].id.slice(0, -1);
            //combat.defTerrain = terrain.find(x => x.NAME === combat.defTerrain);
        }
        else if(selected[i].classList.contains('enchant')){
            combat.defEnchant = selected[i].id.slice(0, -1);
            combat.defEnchant = enchant.find(x => x.NAME === combat.defEnchant);
        }
        // combat.defSkill depends on char
        if(getDmgtype('defense') == '物理傷害')
            combat.defSkill = skill.find(x => x.NAME === "普攻(物)");
        else if(getDmgtype('defense') == '魔法傷害')
            combat.defSkill = skill.find(x => x.NAME === "普攻(法)");
        // DMGTYPE depend on char
        combat.defDMGTYPE = getDmgtype('defense');
    }
    /* combat */
    wholeCombat();
});

