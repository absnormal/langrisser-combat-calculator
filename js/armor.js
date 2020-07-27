/* 重甲 輕甲 布甲 */
var armor = [{
    NAME: '沒有盔甲', TYPE: 'NO',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '沒有裝備的可撥仔，或著被燦晶禁掉了QQ'
},{
    NAME: '萬古板甲', TYPE: '重甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+10%。遭受固定傷害降低10%。'
},{
    NAME: '巨人的抗爭', TYPE: '重甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+10%。遭受暴擊率降低20%。'
},{
    NAME: '鏡面鎧甲', TYPE: '重甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0.05, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命、防禦+5%，被近戰攻擊前，對敵軍造成固定傷害，傷害值為英雄防禦的1.5倍'
},{
    NAME: '血紋魔鎧', TYPE: '重甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0.05, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命、防禦+5%，被近戰攻擊時，有30%的概率發動，本次戰鬥部隊遭受傷害降低30%'
},{
    NAME: '埃尼亞斯之甲', TYPE: '重甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+10% 遭受治療效果+10%'
},{
    NAME: '冰鋒戰甲', TYPE: '重甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0.05, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命、魔防+5%。主動進入戰鬥時，戰後對敵軍造成1次固定傷害，傷害值為英雄魔防的1.5倍。'
},{
    NAME: '大地之鎧', TYPE: '重甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0.15, CMDEF: 0, CCRIT: 0,
    DESC: '被攻擊進入戰鬥時，防禦提升15%。部隊生命80%以上時，遭受魔法傷害降低10%。'
},{
    NAME: '原質之鎧', TYPE: '重甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '部隊生命50%以上時，防禦、魔防提升8%，部隊生命50%以下時，攻擊、技巧提升8%'
},{
    NAME: '風王戰甲', TYPE: '重甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0.05, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命、防禦+5%，被遠程攻擊時，有30%的概率發動，本次戰鬥遭受傷害降低30% '
},{
    NAME: '石像鬼外套', TYPE: '輕甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0.15, CMDEF: 0, CCRIT: 0,
    DESC: '生命+5%。被攻擊時，防禦提升15%'
},{
    NAME: '暮色輕甲', TYPE: '輕甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0.08, MDEF: 0.08, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '魔防+8% 防禦+8% '
},{
    NAME: '逆矢外殼', TYPE: '輕甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0.05, MDEF: 0.05, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦、魔防+5%。被遠程攻擊進入戰鬥前，對故軍造成固定傷害，傷害值為英雄魔防的1.5倍。'
},{
    NAME: '影淵鱗衣', TYPE: '輕甲',
    HP: 0.1, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+10%。部隊生命50%以上時，防禦+10%。部隊生命50%以下時，魔防+10%。'
},{
    NAME: '最後之服', TYPE: '輕甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+10%，部隊生命值100%時，遭受所有傷害降低40% '
},{
    NAME: '魔蜥外皮', TYPE: '輕甲',
    HP: 0.1, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+10%，被攻擊進入戰鬥前，有50%的概率使敵軍遭受一個隨機的強力弱化效果'
},{
    NAME: '金剛背心', TYPE: '輕甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0.15, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0.15,
    DESC: '被攻擊時，攻擊、暴擊率提升15% '
},{
    NAME: '突擊獵裝', TYPE: '輕甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0.1, CMDEF: 0.1, CCRIT: 0,
    DESC: '生命+5%，主動攻擊時，防禦和魔防提升10%。'
},{
    NAME: '巴德爾的白袍', TYPE: '布甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0.1, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '魔防+10%，被近戰攻擊進入戰鬥前，有20%的概率使得本次戰鬥中，部隊不會受到近戰傷害減免效果的影響。'
},{
    NAME: '死神之衣', TYPE: '布甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '遭受暴擊率降低40%，被攻擊進入戰鬥前，有30%的概率，使得敵軍「遭受傷害」提升20%，持續2回合 '
},{
    NAME: '暗之法衣', TYPE: '布甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+5%。被遠程攻擊時，防禦、魔防提升15%。'
},{
    NAME: '群星斗篷', TYPE: '布甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0.1, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '魔防+10%，生命+5% '
},{
    NAME: '福金之翼', TYPE: '布甲',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+5%。被近戰攻擊時，防禦、魔防提升15%。'
},{
    NAME: '天女羽衣', TYPE: '布甲',
    HP: 0.1, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+10%，被攻擊進入戰鬥前，有30%的概率驅散敵軍1個強化效果，並隨機附加1個弱化效果。'
},{
    NAME: '女神法衣', TYPE: '布甲',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+10%，遭受治療效果+10%。'
},{
    NAME: '黑色新娘', TYPE: '拉娜',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+5%。進入戰鬥前，使敵軍遭受一個隨機的強力弱化效果。'
},{
    NAME: '1UP', TYPE: '雪莉',
    HP: 0, ATK: 0, INT: 0, DEF: 0.05, MDEF: 0.05, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦、魔防+5%。主動攻擊進入戰鬥時，如果受到致命傷害，不會死亡。(該效果需要間隔4回合才能再次觸發) '
},{
    NAME: '失落的穹光', TYPE: '索菲亞',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+5%。對友軍釋放技能時，額外附加：「攻擊、智力+15%」,「魔防+20%」，持續2回合。'
},{
    NAME: '強襲異鎧', TYPE: '維拉玖',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+10%。英雄觸發遭受致命傷害不會死亡時，自身獲得1個隨機強化效果。'
},{
    NAME: '浴火之衣', TYPE: '埃格貝爾特',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0.05, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命、魔防+5%。被攻擊受到傷害後，獲得效果「技能射程+1，範圍+1」持續1回合。'
},{
    NAME: '魔導防護服', TYPE: '蕾伽爾',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+5%。被近戰攻擊進入戰鬥前，對敵軍造成1次固定傷害，傷害值為英雄智力的1倍'
},{
    NAME: '月之回憶', TYPE: '布琳達',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0.05, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命、防禦+5%。 當觸發風華典範額外行動時，驅散自身2個弱化效果並使自己獲得造成傷害提高10%，遭受傷害降低+10%，持續1回合。'
},{
    NAME: '霸王戰甲', TYPE: '巴恩哈特',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+5%。英雄天賦範圍+1。'
},{
    NAME: '黎明守護者', TYPE: '塞蕾娜',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+10%。自身3格範圍內生命低於80%的所有友軍全部視為"失去士兵"。'
}]

/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdArmor(side, army, job){
    var holds = [];
    switch(army){
        case '劍兵':
            holds = ['NO', '重甲'];
            break;
        case '槍兵':
            holds = ['NO', '重甲'];
            break;
        case '騎兵':
            holds = ['NO', '重甲'];
            break;
        case '飛兵':
            holds = ['NO', '輕甲'];
            break;
        case '弓兵':
            holds = ['NO', '輕甲'];
            break;
        case '刺客':
            holds = ['NO', '輕甲'];
            break;
        case '水兵':
            holds = ['NO', '輕甲'];
            break;
        case '法師':
            holds = ['NO', '布甲'];
            break;
        case '魔物':
            holds = ['NO', '布甲'];
            break;
        case '僧侶':
            holds = ['NO', '布甲'];
            break;
        case '龍':
            holds = ['NO', '輕甲'];
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

/* displayEquipment depends on char JOBS, select first armor found */
function displayArmor(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdArmor(side, army, job);

    var armorList = [];
    // get all usable armorList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var armorfilter = armor.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<armorfilter.length; j++){
            // get NAMES only
            armorList.push(armorfilter[j].NAME);
        }
    }
    // display armor by NAMES
    for(var i=0; i<armorList.length; i++){
        if(side == 'defense'){
            document.getElementById(armorList[i]+'d').style = '';
            // select first item found when no armor selected
            if(!combat.defArmSel){
                document.getElementById(armorList[i]+'d').classList.add('selected');
                combat.defArmor = armor.find(x => x.NAME === armorList[i]);
                document.getElementById('defArmor').innerHTML = "盔甲:" + armorList[i];
                combat.defArmSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(armorList[i]).style = '';
            // select first item found when no armor selected
            if(!combat.offArmSel){
                document.getElementById(armorList[i]).classList.add('selected');
                combat.offArmor = armor.find(x => x.NAME === armorList[i]);
                document.getElementById('offArmor').innerHTML = "盔甲:" + armorList[i];
                combat.offArmSel = true;
            }
        }
    }
    // select first item when armor is selected
    if(side == 'defense') selectArmor(side, armorList[0]+'d');
    else if(side == 'offense') selectArmor(side, armorList[0]);
};
function hideArmor(side){
    var armorList = document.getElementsByClassName('armor ' + side);
    for(var i=0; i<armorList.length; i++){
        armorList[i].style = 'display: none;';
    }
};
function selectArmor(side, armorName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        armorName = armorName.slice(0, -1);
        // de-select old armor
        if(document.getElementById(combat.defArmor.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defArmor.NAME + 'd').classList.remove('selected')
        }
        // select new armor
        document.getElementById(armorName+'d').classList.add('selected');
        combat.defArmor = armor.find(x => x.NAME === armorName);
        document.getElementById('defArmor').innerHTML = "盔甲:" + armorName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old armor
        if(document.getElementById(combat.offArmor.NAME).classList.contains('selected')){
            document.getElementById(combat.offArmor.NAME).classList.remove('selected')
        }
        // select new armor
        document.getElementById(armorName).classList.add('selected');
        combat.offArmor = armor.find(x => x.NAME === armorName);
        document.getElementById('offArmor').innerHTML = "盔甲:" + armorName;
    }
};


function loadArmorDesc(side, equipment){
    for(let i=0; i<armor.length; i++){
        if((side == 'defense' && equipment.slice(0,-1) == armor[i].NAME) ||
            (side == 'offense' && equipment == armor[i].NAME)){
            let table = document.getElementById(equipment+"TABLE");
            let baseArmor = document.getElementById(armor[i].NAME);
            let x = baseArmor.getBoundingClientRect().top + 30;
            let y = baseArmor.getBoundingClientRect().left + 30;
            document.getElementById(equipment+"NAME").innerHTML = armor[i].NAME;
            document.getElementById(equipment+"DESC").innerHTML = armor[i].DESC;
            table.style.top = x + 'px';
            table.style.left = y + 'px';
            break;
        }
    }
};

