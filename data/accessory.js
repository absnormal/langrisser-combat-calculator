/* 飾品 特殊飾品 */
var accessory = [{
    NAME: '沒有飾品', TYPE: 'NO',
    DESC: '沒有裝備的可撥仔，或著被璨晶禁掉了QQ'
},{
    NAME: '神聖指環', TYPE: '飾品',
    INT: 0.08,
    DESC: '智力+8%，免疫：“無法使用技能”。'
},{
    NAME: '德羅普尼爾', TYPE: '飾品',
    INT: 0.08,
    /* DEFLECT DMG */
    DESC: '智力+8%，被遠程攻擊進入戰鬥時，可以反彈本次遭受傷害的30%。'
},{
    NAME: '恐懼魔眼', TYPE: '飾品',
    INT: 0.08,
    DESC: '智力+8%，主動進入戰鬥時，戰後有50%概率使敵軍“造成傷害”降低15%，持續1回合'
},{
    NAME: '次元寶珠', TYPE: '飾品',
    INT: 0.08,
    DESC: '智力+8%，使用主動技能造成傷害時，30%的概率使得該技能冷卻時間-1。'
},{
    NAME: '蘭德維蒂玫瑰', TYPE: '飾品',
    INT: 0.08,
    DESC: '智力+8%，主動攻擊造成傷害時，有50%的概率，使敵軍損失1個強化效果'
},{
    NAME: '星之耳墜', TYPE: '飾品',
    INT: 0.08,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = getArmy('defense');
        else oppArmy = getArmy('offense');
        armyLIST = ['刺客', '弓兵'];
        if(armyLIST.includes(oppArmy)){
            return [0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        return false;
    },
    DESC: '智力+8%，和“刺客”、“弓手”戰鬥時，防禦提升+30%。'
},{
    NAME: 'Q巨拉', TYPE: '飾品',
    HEAL: 0.15,
    DESC: '治療效果+15%。當使用單體支援技能時，使得增益效果持續回合數+1。'
},{
    NAME: '天使之羽', TYPE: '飾品',
    HP: 0.1, HEAL: 0.10,
    DESC: '生命+10%，治療效果+10% ，免疫：“眩暈”。'
},{
    NAME: '真十字架', TYPE: '飾品',
    HEAL: 0.15,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = getArmy('defense');
        else oppArmy = getArmy('offense');
        armyLIST = ['魔物', '法師'];
        if(armyLIST.includes(oppArmy)){
            return [0, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0];
        }
        return false;
    },
    DESC: '治療效果+15%，和魔族、法師戰鬥時，智力、魔防、防禦提升20%。'
},{
    NAME: '女神之淚', TYPE: '飾品',
    HEAL: 0.15,
    DESC: '治療效果+15%，行動結束時，為周圍2格的3個其他友軍驅散1個弱化效果。'
},{
    NAME: '霸者徽章', TYPE: '飾品',
    HP: 0.05, ATK: 0.05, INT: 0.05, DEF: 0.05, MDEF: 0.05, DEX: 0.05,
    DESC: '全屬性+5%，免疫：“防禦、魔防降低”、“攻擊、智力降低”、“移動力降低”。'
},{
    NAME: '審判魔符', TYPE: '飾品',
    ATK: 0.08,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = getArmy('defense');
        else oppArmy = getArmy('offense');
        if(oppArmy == '僧侶'){
            return [0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        return false;
    },
    DESC: '攻擊+8%，和“僧侶”戰鬥時，攻擊額外提升12%'
},{
    NAME: '索爾的項鍊', TYPE: '飾品',
    ATK: 0.05,
    /* PROBABILITY SKILL */
    /* TRUE DMG */
    DESC: '攻擊+5%，主動進入戰鬥時，戰後50%概率對敵軍造成一次固定傷害，傷害值為英雄攻擊的1倍'
},{
    NAME: '神翼護脛', TYPE: '飾品',
    ATK: 0.08,  DDEF: 0.1,
    DESC: '攻擊+8%，被攻擊時，防禦提升10%。'
},{
    NAME: '屠龍勳章', TYPE: '飾品',
    ATK: 0.08,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = getArmy('defense');
        else oppArmy = getArmy('offense');
        if(oppArmy == '飛兵'){
            return [0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        return false;
    },
    DESC: '攻擊+8%，與“飛兵”戰鬥時，攻擊額外提升12%。'
},{
    NAME: '精靈石之戒', TYPE: '飾品',
    OATK: 0.08,  ODEF: 0.08,
    DESC: '主動進入戰鬥時，攻擊、防禦提升8%。'
},{
    NAME: '孤星腕輪', TYPE: '飾品',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return [0.1, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '周圍2格沒有友軍時，戰鬥中攻擊、防禦提升10%'
},{
    NAME: '紅色小棉襪', TYPE: '尊爵不凡的鞋子',
    ATK: 0.05,  MOVE: 1,
    DESC: '攻擊+5%。移動力+1'
},{
    NAME: '暗謀墜飾', TYPE: '飾品',
    HP: 0.05, ATK: 0.05, INT: 0.05, DEF: 0.05, MDEF: 0.05, DEX: 0.05, OCRITRATEINC: 0.05,
    DESC: '全屬性+5%。進入戰鬥時，暴擊率+5%。'
},{
    NAME: '晨昏之星', TYPE: '飾品',
    ATK: 0.05, INT: 0.05,
    /* TRUE DMG */
    DESC: '攻擊、智力+5%。主動攻擊進入戰鬥前，對敵軍造成1次[固定傷害]，傷害值為英雄攻擊和智力中較低一項屬性的1倍。如果敵軍為[混合部隊]，則此次傷害無法被免疫。'
},{
    NAME: '鑄劍者勳章', TYPE: '飾品',
    HP: 0.05, ATK: 0.05, INT: 0.05, DEF: 0.05, MDEF: 0.05, DEX: 0.05,
    DESC: '全屬性+5%，免疫“固定傷害”、“無法使用主動技能”'
},{
    NAME: '光之面紗', TYPE: '飾品',
    MDEF: 0.08,
    DESC: '魔防+8%，免疫：“防禦、魔防降低”。'
},{
    NAME: '聖骨', TYPE: '飾品',
    /* DEFLECT DMG */
    HP: 0.08,
    DESC: '生命+8%，被近戰攻擊時，反彈本次遭受傷害的30%。'
},{
    NAME: '血之盟約', TYPE: '飾品',
    HP: 0.15,
    DESC: '生命+15%，免疫：“無法被治療”、“無法遭受強化效果”。'
},{
    NAME: '妖精的步伐', TYPE: '妖步',
    DEF: 0.08,
    DESC: '防禦+8%，攻擊後可以自由的移動2格'
},{
    NAME: '聖王護符', TYPE: '飾品',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return [0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '當周圍2格有我方友軍時，戰鬥中，防禦、魔防提升10%。'
},{
    NAME: '神行靴', TYPE: '鞋子',
    DEF: 0.08, MOVE: 1,
    DESC: '防禦+8%。移動力+1'
},{
    NAME: '精靈腰帶', TYPE: '飾品',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        range = combat.range;
        if(range > 1) return [0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '被遠程攻擊時，戰鬥中防禦、魔防提升10%'
},{
    NAME: '巨人腰帶', TYPE: '飾品',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        range = combat.range;
        if(range == 1) return [0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '被近戰攻擊時，戰鬥中防禦、魔防提升10%'
},{
    NAME: '聖杯', TYPE: '飾品',
    INT: 0.05,
    DESC: '智力+5%，本回合如果造成過傷害，行動結束時為周圍1格的其他友軍回复15%的生命。'
},{
    NAME: '海洋之心', TYPE: '阿爾弗雷德',
    ATK: 0.08,
    DESC: '攻擊+8%。進入戰鬥前，如果敵軍英雄不是「水兵」，則令其所處地形視為“水中”，持續1回合：如果自身部隊生命值為100%，則令自身所處地形視為“水中”，持續1回合。[觸發冷卻]自身獲得“水中”效果需要間隔2回合才可以再次觸發。'
},{
    NAME: '妖精之翼', TYPE: '莉法妮',
    INT: 0.05,
    DESC: '智力+5%。攻擊後，可以再次移動2格。'
},{
    NAME: '世界樹的繁花', TYPE: '拉姆達',
    INT: 0.05,
    DESC: '智力+5%。使用技能時，每對1個目標造成傷害則有10%概率使技能冷卻時間-5 (概率最高可以提升至50% )'
},{
    NAME: '團結', TYPE: '馬修',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return [0.1, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '當周圍2格有我方友軍時，攻擊、防禦、魔防提升10%。'
},{
    NAME: '增速靴', TYPE: '鞋子',
    HP: 0.05, MOVE: 1,
    DESC: '生命+5%。移動力+1。'
},{
    NAME: '冥想指環', TYPE: '飾品',
    INT: 0.05,
    DESC: '智力+5%，免疫：“固定傷害”。'
}];



