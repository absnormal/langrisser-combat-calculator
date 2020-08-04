var combat = {
        /* offense character info */
    offParty:undefined, offChar:undefined, offSkill:undefined, offSoldier:undefined,
    offTalent:undefined, offTerrain:undefined, offEnchant:undefined,
    offWeapon:undefined, offArmor:undefined, offHelmet:undefined, offAccessory:undefined,
    // character current data
    offFULLHP:undefined, offHP:undefined, offBASEKNOWN:true,
    offBASEATK:undefined, offBASEINT:undefined, offBASEDEF:undefined, offBASEMDEF:undefined, offBASEDEX:undefined,
    offATK:undefined, offINT:undefined, offDEF:undefined, offMDEF:undefined, offDEX:undefined,
    offHITS:undefined, offHEAL:undefined, offHEALED:undefined, range:undefined, run:undefined,
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
    defCRITDMG:undefined, defCRITRATE:undefined, defDMGRATE:undefined, defSKILLDMG:undefined,
    defDEFNEG:undefined, defMDEFNEG:undefined,
    counterRATE:undefined, terrainRATE:undefined,
    skillRATE:undefined, combatNEG:undefined,

        /* defense character info */
    defParty:undefined, defChar:undefined, defSkill:undefined, defSoldier:undefined,
    defTalent:undefined, defTerrain:undefined, defEnchant:undefined,
    defWeapon:undefined, defArmor:undefined, defHelmet:undefined, defAccessory:undefined,
    // character current data
    defFULLHP:undefined, defHP:undefined, defBASEKNOWN:false,
    defBASEATK:undefined, defBASEINT:undefined, defBASEDEF:undefined, defBASEMDEF:undefined, defBASEDEX:undefined,
    defATK:undefined, defINT:undefined, defDEF:undefined, defMDEF:undefined, defDEX:undefined,
    defHITS:undefined, defHEAL:undefined, defHEALED:undefined,
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
    /* defense accumulative rates */
    combat.defATKRATE = combat.baseRATE;
    combat.defINTRATE = combat.baseRATE;
    combat.defDEFRATE = combat.baseRATE;
    combat.defMDEFRATE = combat.baseRATE;
    combat.defDEXRATE = combat.baseRATE;
    combat.defDMGRATE = combat.baseRATE;
    combat.defCRITDMG = combat.baseCRITDMG;
    combat.defCRITRATE = combat.baseCRITRATE;
    /* other rates */
    combat.offHITS = combat.baseHITS;
    combat.defHITS = combat.baseHITS;
    combat.offHEAL = combat.baseRATE;
    combat.defHEAL = combat.baseRATE;
    combat.offHEALED = combat.baseRATE;
    combat.defHEALED = combat.baseRATE;
    combat.skillRATE = combat.baseRATE;
    combat.combatNEG = combat.baseCombatNEG;
    combat.counterRATE = combat.baseRATE;
    combat.terrainRATE = combat.baseRATE;
};

function createAllList(){
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
        combat.off3CEnemy = Number(document.getElementById('off3BEnemy').value);
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
        if(combat.offHP/combat.offFULLHP > 0.8) moon = 0.1;
        else moon = 0;
        combat.offBASEATK=Math.round((combat.offATK-combat.offAATK)/(combat.offATKRATE+moon));
        combat.offBASEINT=Math.round((combat.offINT-combat.offAINT)/(combat.offINTRATE+moon));
        combat.offBASEDEF=Math.round((combat.offDEF-combat.offADEF)/(combat.offDEFRATE+moon));
        combat.offBASEMDEF=Math.round((combat.offMDEF-combat.offAMDEF)/(combat.offMDEFRATE+moon));
        combat.offBASEDEX=Math.round((combat.offDEX-combat.offADEX)/(combat.offDEXRATE+moon));
    }
    else if(side == 'defense'){
        if(combat.defHP/combat.defFULLHP > 0.8) moon = 0.1;
        else moon = 0;
        combat.defBASEATK=Math.round((combat.defATK-combat.defAATK)/(combat.defATKRATE+moon));
        combat.defBASEINT=Math.round((combat.defINT-combat.defAINT)/(combat.defINTRATE+moon));
        combat.defBASEDEF=Math.round((combat.defDEF-combat.defADEF)/(combat.defDEFRATE+moon));
        combat.defBASEMDEF=Math.round((combat.defMDEF-combat.defAMDEF)/(combat.defMDEFRATE+moon));
        combat.defBASEDEX=Math.round((combat.defDEX-combat.defADEX)/(combat.defDEXRATE+moon));
    }
};

function getPRENUMS(side){
    if(side == 'offense'){
        if(combat.offHP/combat.offFULLHP > 0.8) moon = 0.1;
        else moon = 0;
        combat.offATK=Math.round(combat.BASEATK*(combat.offATKRATE+moon)+combat.offAATK);
        combat.offINT=Math.round(combat.BASEINT*(combat.offATKRATE+moon)+combat.offAINT);
        combat.offDEF=Math.round(combat.BASEDEF*(combat.offATKRATE+moon)+combat.offADEF);
        combat.offMDEF=Math.round(combat.BASEMDEF*(combat.offATKRATE+moon)+combat.offAMDEF);
        combat.offDEX=Math.round(combat.BASEDEX*(combat.offATKRATE+moon)+combat.offADEX);
    }
    else if(side == 'defense'){
        if(combat.defHP/combat.defFULLHP > 0.8) moon = 0.1;
        else moon = 0;
        combat.defATK=Math.round(combat.BASEATK*(combat.defATKRATE+moon)+combat.defAATK);
        combat.defINT=Math.round(combat.BASEINT*(combat.defATKRATE+moon)+combat.defAINT);
        combat.defDEF=Math.round(combat.BASEDEF*(combat.defATKRATE+moon)+combat.defADEF);
        combat.defMDEF=Math.round(combat.BASEMDEF*(combat.defATKRATE+moon)+combat.defAMDEF);
        combat.defDEX=Math.round(combat.BASEDEX*(combat.defATKRATE+moon)+combat.defADEX);
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
function displayBASENUMS(side){
    BASE = 'BASE', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    text = ["進場前攻擊", "進場前智力", "進場前防禦", "進場前魔防", "進場前技巧"];
    var weapon, armor, helmet, accessory, enchant, talent;
    var weaponNUM, armorNUM, helmetNUM, accessoryNUM, talentNUM, moon = 0;
    var base, arena, rate, NUMS, text;

    if(side == 'offense'){
        SIDE = 'off'
        weapon = combat.offWeapon;
        armor = combat.offArmor;
        helmet = combat.offHelmet;
        accessory = combat.offAccessory;
        enchant = combat.offEnchant;
        perHP = combat.offHP/combat.offFULLHP;
        talent = combat.offTalent;
        pre = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX];
        arena = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF, combat.offADEX];
        rate = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        weapon = combat.defWeapon;
        armor = combat.defArmor;
        helmet = combat.defHelmet;
        accessory = combat.defAccessory;
        enchant = combat.defEnchant;
        perHP = combat.defHP/combat.defFULLHP;
        talent = combat.defTalent;
        pre = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF, combat.defDEX];
        arena = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF, combat.defADEX];
        rate = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE, combat.defDEXRATE];
    }

    weaponNUM = [weapon.ATK, weapon.INT, weapon.DEF, weapon.MDEF, weapon.DEX];
    armorNUM = [armor.ATK, armor.INT, armor.DEF, armor.MDEF, armor.DEX];
    helmetNUM = [helmet.ATK, helmet.INT, helmet.DEF, helmet.MDEF, helmet.DEX];
    accessoryNUM = [accessory.ATK, accessory.INT, accessory.DEF, accessory.MDEF, accessory.DEX];
    talentNUM = [talent.ATK, talent.INT, talent.DEF, talent.MDEF, talent.DEX];
    if(talent.SKILLTYPE == 'RATE' && talent.SKILL(side)) talentSKILL = talent.SKILL(side);
    else talentSKILL = [0, 0, 0, 0, 0];
    if(weapon.SKILLTYPE == 'RATE' && weapon.SKILL(side)) weaponSKILL = weapon.SKILL(side);
    else weaponSKILL = [0, 0, 0, 0, 0];
    if(armor.SKILLTYPE == 'RATE' && armor.SKILL(side)) armorSKILL = armor.SKILL(side);
    else armorSKILL = [0, 0, 0, 0, 0];
    if(helmet.SKILLTYPE == 'RATE' && helmet.SKILL(side)) helmetSKILL = helmet.SKILL(side);
    else helmetSKILL = [0, 0, 0, 0, 0];
    if(accessory.SKILLTYPE == 'RATE' && accessory.SKILL(side)) accessorySKILL = accessory.SKILL(side);
    else accessorySKILL = [0, 0, 0, 0, 0];

    if(enchant.NAME == "滿月" && perHP >= 0.8){
        moon = 0.1;
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+BASE+NUMS[i]+DATA);
        let ePREDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
        let eBASEDESC = document.getElementById(SIDE+BASE+NUMS[i]+DESC);
        let number = (pre[i]-arena[i])/(rate[i]+talentSKILL[i]+weaponSKILL[i]+armorSKILL[i]+helmetSKILL[i]+accessorySKILL[i]+moon);
        eDATA.innerHTML = text[i] + ":" + Math.round(number);
        ePREDESC.innerHTML = pre[i];
        eBASEDESC.innerHTML = Math.round(number) + "=(" + pre[i] + "-" + arena[i] + ")÷(1";
        if(talentNUM[i] != undefined)
            eBASEDESC.innerHTML += "+" + talentNUM[i] + "[" + talent.NAME + "]";
        if(talentSKILL[i] != 0)
            eBASEDESC.innerHTML += "+" + talentSKILL[i].toFixed(2) + "[" + talent.NAME + "]";
        if(weaponNUM[i] != undefined)
            eBASEDESC.innerHTML += "+" + weaponNUM[i] + "[" + weapon.NAME + "]";
        if(weaponSKILL[i] != 0)
            eBASEDESC.innerHTML += "+" + weaponSKILL[i].toFixed(2) + "[" + weapon.NAME + "]";
        if(armorNUM[i] != undefined)
            eBASEDESC.innerHTML += "+" + armorNUM[i] + "[" + armor.NAME + "]";
        if(armorSKILL[i] != 0)
            eBASEDESC.innerHTML += "+" + armorSKILL[i].toFixed(2) + "[" + armor.NAME + "]";
        if(helmetNUM[i] != undefined)
            eBASEDESC.innerHTML += "+" + armorNUM[i] + "[" + armor.NAME + "]";
        if(helmetSKILL[i] != 0)
            eBASEDESC.innerHTML += "+" + helmetSKILL[i].toFixed(2) + "[" + helmet.NAME + "]";
        if(accessoryNUM[i] != undefined)
            eBASEDESC.innerHTML += "+" + accessoryNUM[i] + "[" + accessory.NAME + "]";
        if(accessorySKILL[i] != 0)
            eBASEDESC.innerHTML += "+" + accessorySKILL[i].toFixed(2) + "[" + accessory.NAME + "]";
        if(moon != 0)
            eBASEDESC.innerHTML += "+" + moon + "[" + enchant.NAME + "]";
        eBASEDESC.innerHTML += ")";
    }
};

/* PRENUM = BASENUM*(1+EQUIP+TALENT+BUFF+DEBUFF+COMMAND+ENCHANT:MOON)+ARENA */
function displayPRENUMS(side){
    BASE = 'BASE', PRE = 'PRE', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    text = ["戰前攻擊", "戰前智力", "戰前防禦", "戰前魔防", "戰前技巧"];
    var weapon, armor, helmet, accessory, enchant, talent;
    var weaponNUM, armorNUM, helmetNUM, accessoryNUM, talentNUM, moon = 0;
    var base, arena, rate, NUMS, text;

    if(side == 'offense'){
        SIDE = 'off'
        weapon = combat.offWeapon;
        armor = combat.offArmor;
        helmet = combat.offHelmet;
        accessory = combat.offAccessory;
        enchant = combat.offEnchant;
        perHP = combat.offHP/combat.offFULLHP;
        talent = combat.offTalent;
        base = [combat.offBASEATK, combat.offBASEINT, combat.offBASEDEF, combat.offBASEMDEF, combat.offBASEDEX];
        arena = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF, combat.offADEX];
        rate = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        weapon = combat.defWeapon;
        armor = combat.defArmor;
        helmet = combat.defHelmet;
        accessory = combat.defAccessory;
        enchant = combat.defEnchant;
        perHP = combat.defHP/combat.defFULLHP;
        talent = combat.defTalent;
        base = [combat.defBASEATK, combat.defBASEINT, combat.defBASEDEF, combat.defBASEMDEF, combat.defBASEDEX];
        arena = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF, combat.defADEX];
        rate = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE, combat.defDEXRATE];
    }

    weaponNUM = [weapon.ATK, weapon.INT, weapon.DEF, weapon.MDEF, weapon.DEX];
    armorNUM = [armor.ATK, armor.INT, armor.DEF, armor.MDEF, armor.DEX];
    helmetNUM = [helmet.ATK, helmet.INT, helmet.DEF, helmet.MDEF, helmet.DEX];
    accessoryNUM = [accessory.ATK, accessory.INT, accessory.DEF, accessory.MDEF, accessory.DEX];
    talentNUM = [talent.ATK, talent.INT, talent.DEF, talent.MDEF, talent.DEX];
    if(talent.SKILLTYPE == 'RATE' && talent.SKILL(side)) talentSKILL = talent.SKILL(side);
    else talentSKILL = [0, 0, 0, 0, 0];
    if(weapon.SKILLTYPE == 'RATE' && weapon.SKILL(side)) weaponSKILL = weapon.SKILL(side);
    else weaponSKILL = [0, 0, 0, 0, 0];
    if(armor.SKILLTYPE == 'RATE' && armor.SKILL(side)) armorSKILL = armor.SKILL(side);
    else armorSKILL = [0, 0, 0, 0, 0];
    if(helmet.SKILLTYPE == 'RATE' && helmet.SKILL(side)) helmetSKILL = helmet.SKILL(side);
    else helmetSKILL = [0, 0, 0, 0, 0];
    if(accessory.SKILLTYPE == 'RATE' && accessory.SKILL(side)) accessorySKILL = accessory.SKILL(side);
    else accessorySKILL = [0, 0, 0, 0, 0];

    if(enchant.NAME == "滿月" && perHP >= 0.8){
        moon = 0.1;
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+PRE+NUMS[i]+DATA);
        let ePREDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
        let eBASEDESC = document.getElementById(SIDE+BASE+NUMS[i]+DESC);
        let number = base[i]*(rate[i]+talentSKILL[i]+weaponSKILL[i]+armorSKILL[i]+helmetSKILL[i]+accessorySKILL[i]+moon)+arena[i];
        eDATA.innerHTML = text[i] + ":" + Math.round(number);
        eBASEDESC.innerHTML = base[i];
        ePREDESC.innerHTML = Math.round(number) + "=" + base[i] + "×(1";
        if(talentNUM[i] != undefined)
            ePREDESC.innerHTML += "+" + talentNUM[i] + "[" + talent.NAME + "]";
        if(talentSKILL[i] != 0)
            ePREDESC.innerHTML += "+" + talentSKILL[i].toFixed(2) + "[" + talent.NAME + "]";
        if(weaponNUM[i] != undefined)
            ePREDESC.innerHTML += "+" + weaponNUM[i] + "[" + weapon.NAME + "]";
        if(weaponSKILL[i] != 0)
            ePREDESC.innerHTML += "+" + weaponSKILL[i].toFixed(2) + "[" + weapon.NAME + "]";
        if(armorNUM[i] != undefined)
            ePREDESC.innerHTML += "+" + armorNUM[i] + "[" + armor.NAME + "]";
        if(armorSKILL[i] != 0)
            ePREDESC.innerHTML += "+" + armorSKILL[i].toFixed(2) + "[" + armor.NAME + "]";
        if(helmetNUM[i] != undefined)
            ePREDESC.innerHTML += "+" + helmetNUM[i] + "[" + helmet.NAME + "]";
        if(helmetSKILL[i] != 0)
            ePREDESC.innerHTML += "+" + helmetSKILL[i].toFixed(2) + "[" + helmet.NAME + "]";
        if(accessoryNUM[i] != undefined)
            ePREDESC.innerHTML += "+" + accessoryNUM[i] + "[" + accessory.NAME + "]";
        if(accessorySKILL[i] != 0)
            ePREDESC.innerHTML += "+" + accessorySKILL[i].toFixed(2) + "[" + accessory.NAME + "]";
        if(moon != 0)
            ePREDESC.innerHTML += "+" + moon + "[" + enchant.NAME + "]";
        ePREDESC.innerHTML += ")+" + arena[i];
    }
};

/* ATK*(1+EQUIP+OEQUIP+TALENT+HEART+BUFF+DEBUFF+COMMAND+ENCHANT:MOON+ENCHENT:WAVE) */
function displayMIDNUMS(side){
};

/* all additional functions are here
 *  Skill Talent Equipments
*/
function getAllSkill(stage, side){
    var otherside;
    if(side == 'offense'){
        otherside = 'defense';
        sideBASE = combat.offBASEKNOWN;
        othersideBASE = combat.defBASEKNOWN;
    }
    else if(side == 'defense'){
        otherside = 'offense';
        sideBASE = combat.defBASEKNOWN;
        othersideBASE = combat.offBASEKNOWN;
    }
    /* PRE STAGE */
    if(stage == 'PRE'){
        // talent
        getTalentSkill(side);
        getTalentSkill(otherside);
        // equipment
        getWeaponSkill(side);
        getWeaponSkill(otherside);
        getArmorSkill(side);
        getArmorSkill(otherside);
        getHelmetSkill(side);
        getHelmetSkill(otherside);
        getAccessorySkill(side);
        getAccessorySkill(otherside);
        // display HEAL & HEALED
        displayHEALS(side);
        displayHEALS(otherside);
        // display NUMS
        if(sideBASE) displayPRENUMS(side),  getPRENUMS(side);
        else         displayBASENUMS(side), getBASENUMS(side);
        if(othersideBASE) displayPRENUMS(otherside),  getPRENUMS(otherside);
        else              displayBASENUMS(otherside), getBASENUMS(otherside);
    }
    /* MID STAGE */
    if(stage == 'MID'){
        // do all true dmg stuff and check enchant:moon
        // talent
        getMIDTalentSkill(side);
        getMIDTalentSkill(otherside);
        // equipment
        getMIDWeaponSkill(side);
        getMIDWeaponSkill(otherside);
        getMIDArmorSkill(side);
        getMIDArmorSkill(otherside);
        getMIDHelmetSkill(side);
        getMIDHelmetSkill(otherside);
        getMIDAccessorySkill(side);
        getMIDAccessorySkill(otherside);
        // display NUMS
        //displayMIDNUMS(side);
        //displayMIDNUMS(otherside);
        //displayONEHIT(side);
    }
};

function wholeCombat(){
    /* get all data/functions */
    resetAllRATE();
    getCharData('offense');
    getCharData('defense');
    getCounterRATE('offense');
    getTerrainRATE('defense');
    getAllSkill('PRE', 'offense');
    //getAllSkill('MID', 'offense');
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
    }

    /* combat */
    wholeCombat();
});

