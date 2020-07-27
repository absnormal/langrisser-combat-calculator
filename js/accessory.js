/* 飾品 特殊飾品 */
var accessory = [{
    NAME: '沒有飾品', TYPE: 'NO',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '沒有裝備的可撥仔，或著被燦晶禁掉了QQ'
},{
    NAME: '神聖指環', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0.08, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+8%，免疫：“無法使用技能”。'
},{
    NAME: '德羅普尼爾', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0.08, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+8%，被遠程攻擊進入戰鬥時，可以反彈本次遭受傷害的30%。'
},{
    NAME: '恐懼魔眼', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0.08, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+8%，主動進入戰鬥時，戰後有50%概率使敵軍“造成傷害”降低15%，持續1回合'
},{
    NAME: '次元寶珠', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0.08, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+8%，使用主動技能造成傷害時，30%的概率使得該技能冷卻時間-1。'
},{
    NAME: '蘭德維蒂玫瑰', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0.08, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+8%，主動攻擊造成傷害時，有50%的概率，使敵軍損失1個強化效果'
},{
    NAME: '星之耳墜', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0.08, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+8%，和“刺客”、“弓手”戰鬥時，防禦提升+30%。'
},{
    NAME: 'Q巨拉', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '治療效果+15%。當使用單體支援技能時，使得增益效果持續回合數+1。'
},{
    NAME: '天使之羽', TYPE: '飾品',
    HP: 0.1, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '生命+10%，治療效果+10% ，免疫：“眩暈”。'
},{
    NAME: '真十字架', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '治療效果+15%，和魔族、法師戰鬥時，智力、魔防、防禦提升20%。'
},{
    NAME: '女神之淚', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '治療效果+15%，行動結束時，為周圍2格的3個其他友軍驅散1個弱化效果。'
},{
    NAME: '霸者徽章', TYPE: '飾品',
    HP: 0.05, ATK: 0.05, INT: 0.05, DEF: 0.05, MDEF: 0.05, DEX: 0.05, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '全屬性+5%，免疫：“防禦、魔防降低”、“攻擊、智力降低”、“移動力降低”。'
},{
    NAME: '審判魔符', TYPE: '飾品',
    HP: 0, ATK: 0.08, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '攻擊+8%，和“僧侶”戰鬥時，攻擊額外提升12%'
},{
    NAME: '索爾的項鍊', TYPE: '飾品',
    HP: 0, ATK: 0.05, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '攻擊+5%，主動進入戰鬥時，戰後50%概率對敵軍造成一次固定傷害，傷害值為英雄攻擊的1倍'
},{
    NAME: '神翼護脛', TYPE: '飾品',
    HP: 0, ATK: 0.08, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0.1, DMDEF: 0, DCRIT: 0,
    DESC: '攻擊+8%，被攻擊時，防禦提升10%。'
},{
    NAME: '屠龍勳章', TYPE: '飾品',
    HP: 0, ATK: 0.08, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '攻擊+8%，與“飛兵”戰鬥時，攻擊額外提升12%。'
},{
    NAME: '精靈石之戒', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0.08, OINT: 0, ODEF: 0.08, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '主動進入戰鬥時，攻擊、防禦提升8%。'
},{
    NAME: '孤星腕輪', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '周圍2格沒有友軍時，戰鬥中攻擊、防禦提升10%'
},{
    NAME: '紅色小棉襪', TYPE: '尊爵不凡的鞋子',
    HP: 0, ATK: 0.05, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '攻擊+5%。移動力+1'
},{
    NAME: '暗謀墜飾', TYPE: '飾品',
    HP: 0.05, ATK: 0.05, INT: 0.05, DEF: 0.05, MDEF: 0.05, DEX: 0.05, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '全屬性+5%。進入戰鬥時，暴擊率+5%。'
},{
    NAME: '晨昏之星', TYPE: '飾品',
    HP: 0, ATK: 0.05, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '攻擊、智力+5%。主動攻擊進入戰鬥前，對敵軍造成1次[固定傷害]，傷害值為英雄攻擊和智力中較低一項屬性的1倍。如果敵軍為[混合部隊]，則此次傷害無法被免疫。'
},{
    NAME: '鑄劍者勳章', TYPE: '飾品',
    HP: 0.05, ATK: 0.05, INT: 0.05, DEF: 0.05, MDEF: 0.05, DEX: 0.05, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '全屬性+5%，免疫“固定傷害”、“無法使用主動技能”'
},{
    NAME: '光之面紗', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0.08, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '魔防+8%，免疫：“防禦、魔防降低”。'
},{
    NAME: '聖骨', TYPE: '飾品',
    HP: 0.08, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '生命+8%，被近戰攻擊時，反彈本次遭受傷害的30%。'
},{
    NAME: '血之盟約', TYPE: '飾品',
    HP: 0.15, ATK: 0, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '生命+15%，免疫：“無法被治療”、“無法遭受強化效果”。'
},{
    NAME: '妖精的步伐', TYPE: '妖步',
    HP: 0, ATK: 0, INT: 0, DEF: 0.08, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '防禦+8%，攻擊後可以自由的移動2格'
},{
    NAME: '聖王護符', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '當周圍2格有我方友軍時，戰鬥中，防禦、魔防提升10%。'
},{
    NAME: '神行靴', TYPE: '鞋子',
    HP: 0, ATK: 0, INT: 0, DEF: 0.08, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '防禦+8%。移動力+1'
},{
    NAME: '精靈腰帶', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '被遠程攻擊時，戰鬥中防禦、魔防提升10%'
},{
    NAME: '巨人腰帶', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '被近戰攻擊時，戰鬥中防禦、魔防提升10%'
},{
    NAME: '聖杯', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+5%，本回合如果造成過傷害，行動結束時為周圍1格的其他友軍回复15%的生命。'
},{
    NAME: '海洋之心', TYPE: '飾品',
    HP: 0, ATK: 0.08, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '攻擊+8%。進入戰鬥前，如果敵軍英雄不是「水兵」，則令其所處地形視為“水中”，持續1回合：如果自身部隊生命值為100%，則令自身所處地形視為“水中”，持續1回合。[觸發冷卻]自身獲得“水中”效果需要間隔2回合才可以再次觸發。'
},{
    NAME: '妖精之翼', TYPE: '莉法妮',
    HP: 0, ATK: 0, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+5%。攻擊後，可以再次移動2格。'
},{
    NAME: '世界樹的繁花', TYPE: '拉姆達',
    HP: 0, ATK: 0, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+5%。使用技能時，每對1個目標造成傷害則有10%概率使技能冷卻時間-5 (概率最高可以提升至50% )'
},{
    NAME: '團結', TYPE: '馬修',
    HP: 0, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '當周圍2格有我方友軍時，攻擊、防禦、魔防提升10%。'
},{
    NAME: '增速靴', TYPE: '鞋子',
    HP: 0.05, ATK: 0, INT: 0, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '生命+5%。移動力+1。'
},{
    NAME: '冥想指環', TYPE: '飾品',
    HP: 0, ATK: 0, INT: 0.05, DEF: 0, MDEF: 0, DEX: 0, CRIT: 0,
    OATK: 0, OINT: 0, ODEF: 0, OMDEF: 0, OCRIT: 0,
    DATK: 0, DINT: 0, DDEF: 0, DMDEF: 0, DCRIT: 0,
    DESC: '智力+5%，免疫：“固定傷害”。'
}]

/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdAccessory(side, army, job){
    var holds = [];
    switch(army){
        case '劍兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '槍兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '騎兵':
            holds = ['NO', '飾品', '妖步'];
            break;
        case '飛兵':
            holds = ['NO', '飾品', '妖步'];
            break;
        case '弓兵':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '刺客':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '水兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '法師':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '魔物':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '僧侶':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '龍':
            holds = ['NO', '飾品', '鞋子', '妖步'];
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

/* displayEquipment depends on char JOBS, select first accessory found */
function displayAccessory(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdAccessory(side, army, job);

    var accessoryList = [];
    // get all usable accessoryList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var accessoryfilter = accessory.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<accessoryfilter.length; j++){
            // get NAMES only
            accessoryList.push(accessoryfilter[j].NAME);
        }
    }
    // display accessory by NAMES
    for(var i=0; i<accessoryList.length; i++){
        if(side == 'defense'){
            document.getElementById(accessoryList[i]+'d').style = '';
            // select first item found when no accessory selected
            if(!combat.defAccSel){
                document.getElementById(accessoryList[i]+'d').classList.add('selected');
                combat.defAccessory = accessory.find(x => x.NAME === accessoryList[i]);
                document.getElementById('defAccessory').innerHTML = "盔甲:" + accessoryList[i];
                combat.defAccSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(accessoryList[i]).style = '';
            // select first item found when no accessory selected
            if(!combat.offAccSel){
                document.getElementById(accessoryList[i]).classList.add('selected');
                combat.offAccessory = accessory.find(x => x.NAME === accessoryList[i]);
                document.getElementById('offAccessory').innerHTML = "盔甲:" + accessoryList[i];
                combat.offAccSel = true;
            }
        }
    }
    // select first item when accessory is selected
    if(side == 'defense') selectAccessory(side, accessoryList[0]+'d');
    else if(side == 'offense') selectAccessory(side, accessoryList[0]);
};
function hideAccessory(side){
    var accessoryList = document.getElementsByClassName('accessory ' + side);
    for(var i=0; i<accessoryList.length; i++){
        accessoryList[i].style = 'display: none;';
    }
};
function selectAccessory(side, accessoryName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        accessoryName = accessoryName.slice(0, -1);
        // de-select old accessory
        if(document.getElementById(combat.defAccessory.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defAccessory.NAME + 'd').classList.remove('selected')
        }
        // select new accessory
        document.getElementById(accessoryName+'d').classList.add('selected');
        combat.defAccessory = accessory.find(x => x.NAME === accessoryName);
        document.getElementById('defAccessory').innerHTML = "盔甲:" + accessoryName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old accessory
        if(document.getElementById(combat.offAccessory.NAME).classList.contains('selected')){
            document.getElementById(combat.offAccessory.NAME).classList.remove('selected')
        }
        // select new accessory
        document.getElementById(accessoryName).classList.add('selected');
        combat.offAccessory = accessory.find(x => x.NAME === accessoryName);
        document.getElementById('offAccessory').innerHTML = "盔甲:" + accessoryName;
    }
};


