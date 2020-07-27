/* 劍 匕首 弓 法杖 錘 槍 斧 */
var weapon = [{
    NAME: '沒有武器', TYPE: 'NO',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '沒有裝備的可撥仔，或著被燦晶禁掉了QQ'
},{
    NAME: '屠龍劍格拉姆', TYPE: '劍',
    HP: 0.08, ATK: 0.08, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊、生命+8%，與「龍」戰鬥時，攻擊、防禦、魔防額外提升10%'
},{
    NAME: '嗜血劍赫倫汀', TYPE: '劍',
    HP: 0, ATK: 0.05, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+5%，主動造成傷害後，50%機率追加一次固定傷害，傷害值為英雄攻擊的1倍'
},{
    NAME: '斬魔刀', TYPE: '劍',
    HP: 0, ATK: 0.08, INT: 0, DEF: 0, MDEF: 0, DEX: 0.08,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊、技巧+8%，主動攻擊發生暴擊後，驅散敵軍1個強化效果，並施加1個弱化效果'
},{
    NAME: '冰霜之刃', TYPE: '劍',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，主動進入戰鬥時，戰後有50%機率使敵軍移動力降低2格，持續1回合'
},{
    NAME: '封印守護者', TYPE: '劍',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0.05, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，防禦+5%'
},{
    NAME: '均衡之刃', TYPE: '劍',
    HP: 0, ATK: 0, INT: 0, DEF: 0.05, MDEF: 0.05, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦、魔防+5%，使用範圍技能時，生效範圍+                                             2    1(對範圍為1的技能無效，對於直線範圍技能僅增加射程)'
},{
    NAME: '夜鷹', TYPE: '匕首',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0.05, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，魔防+5%'
},{
    NAME: '妖精之嘆', TYPE: '匕首',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0.15,
    DESC: '主動攻擊時，暴擊率提升15%，同時遭受傷害降低30%'
},{
    NAME: '風斬刀', TYPE: '匕首',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，主動攻擊進入戰鬥時，戰後有50%機率使敵軍「防禦」降低20%，持續1回合'
},{
    NAME: '莎拉維爾', TYPE: '匕首',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0.1,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '暴擊率提升10%，暴擊時戰鬥後，對敵軍造成一次固定傷害，傷害值為自身攻擊的1倍'
},{
    NAME: '海德拉之弓', TYPE: '弓',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，主動進入戰鬥前，有50%的機率使敵軍「造成傷害」降低20%，持續1回合'
},{
    NAME: '血之三弦琴', TYPE: '弓',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0.05, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，防禦+5%'
},{
    NAME: '極限魔弓', TYPE: '弓',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，部隊不會受到近戰攻擊減免效果影響'
},{
    NAME: '烏勒爾之弓', TYPE: '弓',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '物理傷害降低10%，部隊的射程+1'
},{
    NAME: '亞斯塔祿', TYPE: '法杖',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '和有弱化效果的敵軍進入戰鬥時，智力提升15%，主動進入戰鬥時，戰後有30%機率使敵軍「暈眩」，持續1回合'
},{
    NAME: '蒼白之杖', TYPE: '法杖',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '使用單體技能時，傷害提升15%，主動進入戰鬥時，有50%的機率使得敵軍遭受1個弱化狀態'
},{
    NAME: '逸才權杖', TYPE: '法杖',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命+5%，自身處於「非防禦地形」，使用需進入戰鬥的遠程技能時部隊射程+1。(該效果對不會受到近戰傷害減免的技能無效)'
},{
    NAME: '煉獄', TYPE: '法杖',
    HP: 0, ATK: 0, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '智力+5%，主動進入戰鬥時，戰後使敵軍下個回合結束時遭受一次固定傷害，傷害數值為英雄智力的2倍'
},{
    NAME: '藍色之月', TYPE: '法杖',
    HP: 0, ATK: 0, INT: 0.1, DEF: 0, MDEF: 0.05, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '智力+10%，魔防+5%'
},{
    NAME: '紅色之月', TYPE: '法杖',
    HP: 0.05, ATK: 0, INT: 0.1, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '智力+10%，生命+5%'
},{
    NAME: '奇蹟之杖', TYPE: '法杖',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '範圍技能傷害提升15%，主動造成傷害時，有30%機率使敵軍遭受1個強力弱化狀態'
},{
    NAME: '女神的左手', TYPE: '法杖',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '治療效果+15%，主動進入戰鬥時，戰後有100%的機率，使敵軍「移動力」降低2格，持續1回合'
},{
    NAME: '寄生樹', TYPE: '法杖',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '治療效果+15%，主動進入戰鬥時，戰後使敵軍「造成傷害」降低20%，持續1回合'
},{
    NAME: '奧瓦的手杖', TYPE: '法杖',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '治療效果+15%，主動進入戰鬥時，戰後有50%機率使敵軍「遭受傷害」增加20%，持續1回合'
},{
    NAME: '永生者的饋贈', TYPE: '錘',
    HP: 0, ATK: 0, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '智力+5%，主動攻擊進入戰鬥時，戰後為生命最低的友軍部隊恢復生命，恢復量為師法者智力的3倍'
},{
    NAME: '風暴卡路里', TYPE: '錘',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '部隊生命80%以上時，智力提升15%'
},{
    NAME: '真理的門扉', TYPE: '錘',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0.15, CDEF: 0.15, CMDEF: 0.15, CCRIT: 0,
    DESC: '主動攻擊時，智力、防禦、魔防提升15%'
},{
    NAME: '米約爾尼爾', TYPE: '錘',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，主動攻擊進入戰鬥前，50%概率，驅散敵軍身上1個強化效果'
},{
    NAME: '彌米爾的戰錘', TYPE: '錘',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%。主動擊殺敵軍或友方死亡時，驅散自身1個異常狀態並回覆20%生命，同時獲得「英雄傷害提升20%」，持續1回合'
},{
    NAME: '碎星', TYPE: '錘',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0.05, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，防禦+5%'
},{
    NAME: '正義誓言', TYPE: '錘',
    HP: 0, ATK: 0, INT: 0, DEF: 0.08, MDEF: 0.08, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+8%，魔防+8%'
},{
    NAME: '最後的騎士', TYPE: '槍',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，主動進入戰鬥前，有50%的機率使得敵軍「攻擊、智力」降低20%，持續1回合'
},{
    NAME: '藍色惑星', TYPE: '槍',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '進入戰鬥前，每移動1格，攻擊、防禦、魔防各提升5%(最多提升15%)'
},{
    NAME: '世界樹的嫩枝', TYPE: '槍',
    HP: 0, ATK: 0, INT: 0, DEF: 0.1, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦+10%，戰鬥時無視敵軍防禦15%'
},{
    NAME: '雞毛撢子', TYPE: '槍',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '造成的所有傷害降低10%，英雄的普通攻擊射程+1'
},{
    NAME: '詛咒之槍', TYPE: '槍',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '主動進入戰鬥時，防禦、魔防提升15%，戰鬥後，有50%機率使敵軍無法使用主動技能，無法遭受治療，持續1回合'
},{
    NAME: '真紅死神', TYPE: '斧',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，若敵軍生命低於100%，則此次傷害提升5%，並在傷害後追加1次[固定傷害]，傷害值為英雄攻擊的0.5倍'
},{
    NAME: '拉格納羅克', TYPE: '斧',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，主動進入戰鬥前，有100%對敵軍造成一次固定傷害，傷害值為英雄攻擊的1倍'
},{
    NAME: '惡魔之吻', TYPE: '斧',
    HP: 0.05, ATK: 0.05, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '生命、攻擊+5%，主動進入戰鬥時，戰後對敵軍造成1次固定傷害，傷害值為英雄攻擊的1倍'
},{
    NAME: '王座守衛', TYPE: '斧',
    HP: 0.05, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，生命+5%'
},{
    NAME: '紛爭調停者', TYPE: '斧',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，主動進入戰鬥時，有50%的機率使敵軍的被動技能無法生效，持續2回合'
},{
    NAME: '信仰的試煉', TYPE: '雷丁',
    HP: 0, ATK: 0, INT: 0, DEF: 0.05, MDEF: 0.05, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '防禦、魔防+5%。擊殺敵軍後獲得效果「抵擋一次致命傷害，之後英雄生命值回覆到本次傷害之前的血量，該狀態持續期間最多觸發一次復活效果」，持續1回合。(該效果需要間隔2回合才能再次觸發)'
},{
    NAME: '滅創之權杖', TYPE: '基札洛夫',
    HP: 0.05, ATK: 0, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '智力、生命+5%。主動使用技能後，如果戰場上有基札洛夫召喚的「構造體」，則對「構造體」實施1次隨機的改造'
},{
    NAME: '黑色曙光', TYPE: '索妮亞',
    HP: 0, ATK: 0.1, INT: 0.1, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊、智力+10%。主動近戰攻擊進入戰鬥前，對敵軍造成一次固定傷害，傷害值為英雄智力的2倍。主動遠程攻擊進入戰鬥後，對敵軍造成一次固定傷害，傷害值為英雄攻擊的2倍'
},{
    NAME: '流浪的騎士', TYPE: '艾爾文',
    HP: 0, ATK: 0.1, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '攻擊+10%，使用技能造成傷害時，30%機率技能冷卻時間-5'
},{
    NAME: '■ ■ ■ ■ ', TYPE: '艾梅達',
    HP: 0, ATK: 0, INT: 0.1, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    CATK: 0, CINT: 0, CDEF: 0, CMDEF: 0, CCRIT: 0,
    DESC: '智力+10%。主動攻擊造成傷害後，使敵軍「移動力」降低1格，且無法進行護衛，持續1回合'
}]

/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdWeapon(side, army, job){
    var holds = [];
    switch(army){
        case '劍兵':
            holds = ['NO', '劍', '匕首', '錘'];
            break;
        case '槍兵':
            holds = ['NO', '槍', '斧'];
            break;
        case '騎兵':
            holds = ['NO', '劍', '槍'];
            break;
        case '飛兵':
            holds = ['NO', '槍', '斧'];
            break;
        case '弓兵':
            holds = ['NO', '匕首', '弓'];
            break;
        case '刺客':
            holds = ['NO', '匕首', '弓'];
            break;
        case '水兵':
            holds = ['NO', '錘', '斧'];
            break;
        case '法師':
            holds = ['NO', '法杖'];
            break;
        case '魔物':
            holds = ['NO', '法杖'];
            break;
        case '僧侶':
            holds = ['NO', '法杖', '錘'];
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

/* displayEquipment depends on char JOBS, select first weapon found */
function displayWeapon(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdWeapon(side, army, job);

    var weaponList = [];
    // get all usable weaponList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var weaponfilter = weapon.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<weaponfilter.length; j++){
            // get NAMES only
            weaponList.push(weaponfilter[j].NAME);
        }
    }
    // display weapon by NAMES
    for(var i=0; i<weaponList.length; i++){
        if(side == 'defense'){
            document.getElementById(weaponList[i]+'d').style = '';
            // select first item found when no weapon selected
            if(!combat.defWeaSel){
                document.getElementById(weaponList[i]+'d').classList.add('selected');
                combat.defWeapon = weapon.find(x => x.NAME === weaponList[i]);
                document.getElementById('defWeapon').innerHTML = "武器:" + weaponList[i];
                combat.defWeaSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(weaponList[i]).style = '';
            // select first item found when no weapon selected
            if(!combat.offWeaSel){
                document.getElementById(weaponList[i]).classList.add('selected');
                combat.offWeapon = weapon.find(x => x.NAME === weaponList[i]);
                document.getElementById('offWeapon').innerHTML = "武器:" + weaponList[i];
                combat.offWeaSel = true;
            }
        }
    }
    // select first item when weapon is selected
    if(side == 'defense') selectWeapon(side, weaponList[0]+'d');
    else if(side == 'offense') selectWeapon(side, weaponList[0]);
};
function hideWeapon(side){
    var weaponList = document.getElementsByClassName('weapon ' + side);
    for(var i=0; i<weaponList.length; i++){
        weaponList[i].style = 'display: none;';
    }
};
function selectWeapon(side, weaponName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        weaponName = weaponName.slice(0, -1);
        // de-select old weapon
        if(document.getElementById(combat.defWeapon.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defWeapon.NAME + 'd').classList.remove('selected')
        }
        // select new weapon
        document.getElementById(weaponName+'d').classList.add('selected');
        combat.defWeapon = weapon.find(x => x.NAME === weaponName);
        document.getElementById('defWeapon').innerHTML = "武器:" + weaponName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old weapon
        if(document.getElementById(combat.offWeapon.NAME).classList.contains('selected')){
            document.getElementById(combat.offWeapon.NAME).classList.remove('selected')
        }
        // select new weapon
        document.getElementById(weaponName).classList.add('selected');
        combat.offWeapon = weapon.find(x => x.NAME === weaponName);
        document.getElementById('offWeapon').innerHTML = "武器:" + weaponName;
    }
};

function loadWeaponDesc(side, equipment){
    for(let i=0; i<weapon.length; i++){
        if((side == 'defense' && equipment.slice(0,-1) == weapon[i].NAME) ||
            (side == 'offense' && equipment == weapon[i].NAME)){
            let table = document.getElementById(equipment+"TABLE");
            let baseWeapon = document.getElementById(weapon[i].NAME);
            let x = baseWeapon.getBoundingClientRect().top + 30;
            let y = baseWeapon.getBoundingClientRect().left + 30;
            document.getElementById(equipment+"NAME").innerHTML = weapon[i].NAME;
            document.getElementById(equipment+"DESC").innerHTML = weapon[i].DESC;
            table.style.top = x + 'px';
            table.style.left = y + 'px';
            break;
        }
    }
};

