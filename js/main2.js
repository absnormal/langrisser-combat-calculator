var combat = {
        /* offense character info */
    offParty:undefined, offChar:undefined, offSkill:undefined, offSoldier:undefined,
    offTalent:undefined, offTerrain:undefined, offEnchant:undefined,
    offWeapon:undefined, offArmor:undefined, offHelmet:undefined, offAccessory:undefined,
    offBUFFLIST: [], offDEBUFFLIST: [], offCommandLIST: [], offPassiveLIST: [],
    // character current data
    offBASEHP:undefined, offBASEATK:undefined, offBASEINT:undefined, offBASEDEF:undefined, offBASEMDEF:undefined, offBASEDEX:undefined,
    offADDHP:undefined, offADDATK:undefined, offADDINT:undefined, offADDDEF:undefined, offADDMDEF:undefined, offADDDEX:undefined,
    offHP:undefined, offATK:undefined, offINT:undefined, offDEF:undefined, offMDEF:undefined, offDEX:undefined,
    offMOVETYPE:undefined,
    // equipment selected
    offWeaSel:false, offArmSel:false, offHelSel:false, offAccSel:false,
    // current JobNo
    offJobNo:1,

        /* enchant accumulate rates */
    offHPRATE:undefined, offATKRATE:undefined, offINTRATE:undefined, offDEFRATE:undefined, offMDEFRATE:undefined, offDEXRATE:undefined, offDMGTYPE:undefined,

        /* enchant perc/add nums */
    // [  0,   1,    2,    3,    4,    5,    6,    7,     8,     9,    10]
    // [HP+, HP%, ATK+, ATK%, INT+, INT%, DEF+, DEF%, MDEF+, MDEF%, CRIT%]
    offWeaponEnchantMAX:    [130, 10, 30, 15, 30, 15,  6,  5,  6,  5,  0],
    offArmorEnchantMAX:     [200, 15, 10,  5, 10,  5, 18, 15, 18, 15,  0],
    offHelmetEnchantMAX:    [200, 15, 10,  5, 10,  5, 18, 15, 18, 15,  0],
    offAccessoryEnchantMAX: [130, 10, 20, 10, 20, 10, 12, 10, 12, 10, 15],

        /* mastery nums */
    // [ 0,   1,   2,   3,    4,   5]
    // [HP, ATK, INT, DEF, MDEF, DEX]
    offWeaponMasteryMAX:    [100, 30, 30,  5,  5, 15],
    offArmorMasteryMAX:     [250, 10, 10, 25, 15,  5],
    offHelmetMasteryMAX:    [250, 15, 15, 20, 25,  5],
    offAccessoryMasteryMAX: [150, 25, 25, 10, 15, 25],

        /* reset numbers */
    baseCRITRATE:0, baseCRITDMG:1.3, baseHITS:20, baseRATE:1, baseCombatNEG:0, baseNUM:0,
    baseHPRATE: 1.4,
};

function resetAllRATE(){
    /* offense enchant rates */
    combat.offHPRATE = combat.baseRATE;
    combat.offATKRATE = combat.baseRATE;
    combat.offINTRATE = combat.baseRATE;
    combat.offDEFRATE = combat.baseRATE;
    combat.offMDEFRATE = combat.baseRATE;
    combat.offDEXRATE = combat.baseRATE;
    /* offense add nums */
    combat.offADDHP = combat.baseNUM;
    combat.offADDATK = combat.baseNUM;
    combat.offADDINT = combat.baseNUM;
    combat.offADDDEF = combat.baseNUM;
    combat.offADDMDEF = combat.baseNUM;
    combat.offADDDEX = combat.baseNUM;
};

function createAllList(){
    createWeaponList('offense', 'offWeaponList');
    createArmorList('offense', 'offArmorList');
    createHelmetList('offense', 'offHelmetList');
    createAccessoryList('offense', 'offAccessoryList');
    createEnchantList('offense', 'weaponEnchantList', 0);
    createEnchantList('offense', 'armorEnchantList', 1);
    createEnchantList('offense', 'helmetEnchantList', 2);
    createEnchantList('offense', 'accessoryEnchantList', 3);
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

function getBASENUMS(side){
    if(side == 'offense'){
        combat.offBASEHP   = getNumByJob(side, 'HP');
        combat.offBASEATK  = getNumByJob(side, 'ATK');
        combat.offBASEINT  = getNumByJob(side, 'INT');
        combat.offBASEDEF  = getNumByJob(side, 'DEF');
        combat.offBASEMDEF = getNumByJob(side, 'MDEF');
        combat.offBASEDEX  = getNumByJob(side, 'DEX');
    }
};

function getTOTALNUMS(side){
    if(side == 'offense'){
        combat.offHP=combat.offBASEHP*combat.offHPRATE+combat.offADDHP;
        combat.offATK=combat.offBASEATK*combat.offATKRATE+combat.offADDATK;
        combat.offINT=combat.offBASEINT*combat.offINTRATE+combat.offADDINT;
        combat.offDEF=combat.offBASEDEF*combat.offDEFRATE+combat.offADDDEF;
        combat.offMDEF=combat.offBASEMDEF*combat.offMDEFRATE+combat.offADDMDEF;
        combat.offDEX=combat.offBASEDEX*combat.offDEXRATE+combat.offADDDEX;
    }
};

function displayBASENUMS(side, sideRate){
    BASE = 'BASE';
    NUMS = ['HP','ATK','INT','DEF','MDEF','DEX'];
    text = ["基礎生命","基礎攻擊", "基礎智力", "基礎防禦", "基礎魔防", "基礎技巧"];

    if(side == 'offense'){
        SIDE = 'off';
        number = [combat.offBASEHP, combat.offBASEATK, combat.offBASEINT, combat.offBASEDEF, combat.offBASEMDEF, combat.offBASEDEX]
    }

    for(let i=0; i<NUMS.length; i++){
        let eBASE = document.getElementById(SIDE+BASE+NUMS[i]);
        eBASE.innerHTML = text[i]+':'+number[i];
    }
};

function displayADDNUMS(side, sideRate){
    BASE = 'BASE', ADD = 'ADD', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['HP','ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    text = ["綠字生命","綠字攻擊", "綠字智力", "綠字防禦", "綠字魔防", "綠字技巧"];

    if(side == 'offense'){
        SIDE = 'off';
        base = [combat.offBASEHP, combat.offBASEATK, combat.offBASEINT, combat.offBASEDEF, combat.offBASEMDEF, combat.offBASEDEX];
        rate = [combat.offHPRATE, combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE];
        add = [combat.offADDHP, combat.offADDATK, combat.offADDINT, combat.offADDDEF, combat.offADDMDEF, combat.offADDDEX];
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+ADD+NUMS[i]+DATA);
        let eDESC = document.getElementById(SIDE+ADD+NUMS[i]+DESC);
        let number = base[i]*(rate[i]-1)+add[i];
        eDATA.innerHTML = text[i] + ":" + Math.round(number);
        eDESC.innerHTML = base[i]+"×(0";
        for(let j=0; j<sideRate.length; j++){
            if(sideRate[j].RATE != undefined && sideRate[j].RATE[i] > 0)
                eDESC.innerHTML+="+"+sideRate[j].RATE[i]+"["+sideRate[j].NAME+"]";
        }
        eDESC.innerHTML += ")";
        for(let j=0; j<sideRate.length; j++){
            if(sideRate[j].BASE != undefined && sideRate[j].BASE[i] > 0)
                eDESC.innerHTML+="+"+sideRate[j].BASE[i]+"["+sideRate[j].NAME+"]";
        }
    }
};

function displayTOTALNUMS(side, sideRate){
    BASE = 'BASE', ADD = 'ADD';
    NUMS = ['HP','ATK','INT','DEF','MDEF','DEX'], TOTAL='TOTAL';
    text = ["白字生命","白字攻擊", "白字智力", "白字防禦", "白字魔防", "白字技巧"];

    if(side == 'offense'){
        SIDE = 'off';
        number = [combat.offHP, combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX]
    }

    for(let i=0; i<NUMS.length; i++){
        let nBASE = Number(document.getElementById(SIDE+BASE+NUMS[i]).innerHTML.split(":")[1]);
        let nADD=Number(document.getElementById(SIDE+ADD+NUMS[i]+DATA).innerHTML.split(":")[1]);
        let eDATA = document.getElementById(SIDE+TOTAL+NUMS[i]+DATA);
        let eDESC = document.getElementById(SIDE+TOTAL+NUMS[i]+DESC);
        eDATA.innerHTML = text[i]+':'+Math.round(number[i]);
        eDESC.innerHTML = Math.round(number[i])+'='+nBASE+"+"+nADD;
    }
};

function displayPREHP(side){
    // [talent, weapon, armor, helmet, accessory]
    check = [false, false, false, false, false], checks = 0;
    checkOBJ = [combat.offTalent, combat.offWeapon, combat.offArmor, combat.offHelmet, combat.offAccessory];
    arenaHPRATE = 1.4;
    totalHP = Number(document.getElementById('offTOTALHPDATA').innerHTML.split(':')[1]);
    eHP = document.getElementById('offHP');
    eDATA = document.getElementById('offHPDATA');
    eDESC = document.getElementById('offHPDESC');

    for(let i=0; i<check.length; i++){
        if(checkOBJ[i].HP != undefined && checkOBJ[i].SOLDONLY != true){
            arenaHPRATE += checkOBJ[i].HP;
            check[i] = true;
            checks++;
        }
    }
    eDATA.innerHTML = '進場生命:'+Math.round(totalHP*arenaHPRATE);
    eDESC.innerHTML = Math.round(totalHP*arenaHPRATE)+"="+totalHP+"×(1.4";
    for(let i=0; i<check.length; i++){
        if(checks == 0){
            eDESC.innerHTML = Math.round(totalHP*arenaHPRATE)+"="+totalHP+"×1.4";
            break;
        }
        if(check[i]) eDESC.innerHTML += "+"+checkOBJ[i].HP+"["+checkOBJ[i].NAME+"]";
    }
    if(checks != 0) eDESC.innerHTML += ")";
};

/* collect RATES from skills */
function getAllSkill(stage, side){
    var otherside;
    if(side == 'offense'){
        sideBASE = combat.offBASEKNOWN;
        othersideBASE = combat.defBASEKNOWN;
        charNAME = combat.offChar.NAME;
    }
    /* PRE STAGE */
    if(stage == 'PRE'){
        // display NUMS
        getBASENUMS(side);
        displayBASENUMS(side, sideRate);
        var sideRate = [];
        // talent
        //sideRate.push(getTalentSkill(side));
        // enchant
        //sideRate.push(getEnchantSkill(side));
        // equipment
        sideRate.push(getWeaponBaseSkill(side));
        sideRate.push(getArmorBaseSkill(side));
        sideRate.push(getHelmetBaseSkill(side));
        sideRate.push(getAccessoryBaseSkill(side));
        sideRate.push(getEnchantBase(side));
        sideRate = [...sideRate, ...getEnchantBaseSkill(side)];
        sideRate = [...sideRate, ...getEnchantRateSkill(side)];
        sideRate = [...sideRate, ...getMasteryBaseSkill(side)];
        // display NUMS
        displayADDNUMS(side, sideRate);
        getTOTALNUMS(side);
        displayTOTALNUMS(side, sideRate);
        displayPREHP(side);
    }
    /* MID STAGE */
    if(stage == 'MID'){
        // do all true dmg stuff and check perHP related skills
        var sideRate = [];
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
    //getCharData('offense');
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

