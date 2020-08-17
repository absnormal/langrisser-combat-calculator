/* 附魔 */
var enchant = [{
    NAME: '時鐘',
    DISC: '使用技能造成傷害時，30%機率使技能冷卻時間-5。'
},{
    NAME: '怒濤',
    OATK: 0.1, ODMGDEC: 0.15,
    DISC: '主動攻擊時，增加10%攻擊，遭受傷害降低15%。'
},{
    NAME: '魔術',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') this.SKILLDMG = undefined;
        else this.SKILLDMG = 0.1;
    },
    DISC: '技能傷害提升10%，範圍技能再提升5%。'
},{
    NAME: '輕風',
    DMGINC: 0.1,
    DISC: '造成傷害增加10%，行動結束時，30%的機率移動力+2，持續1回合。'
},{
    NAME: '滿月',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP >= 0.8) return [0.1, 0.1, 0.1, 0.1, 0];
        else return false;
    },
    DISC: '生命80%以上，所有攻防屬性提升10%。'
},{
    NAME: '烈日',
    CRITRATEINC: 0.07, CRITDMGINC: 0.25,
    DISC: '暴擊率增加7%，暴擊傷害增加25%。'
},{
    NAME: '流星',
    CRITRATEINC: 0.07,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppPerHP = combat.defHP/combat.defFULLHP;
        else if(side == 'defense') oppPerHP = combat.offHP/combat.offFULLHP;
        if(oppPerHP > 0.6) return [0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0];
        else return false;
    },
    DISC: '暴擊率增加7%，攻擊生命值高於60%的部隊時，進入戰鬥後所有傷害+20%。'
},{
    NAME: '鋼鐵',
    DMGDEC: 0.1,
    DISC: '遭受傷害降低10%。'
},{
    NAME: '荊棘',
    /* PROBABILITY SKILL */
    DISC: '被攻擊時有30%反彈本次遭受傷害的50%。'
},{
    NAME: '大樹',
    DISC: '周圍2格所有英雄防禦、魔防增加5%。'
},{
    NAME: '頑石',
    /* PROBABILITY SKILL */
    /* HEAL AFTER BATTLE */
    DISC: '生命<50%時，戰鬥後50%機率回覆15%生命。'
},{
    NAME: '寒冰',
    DISC: '被攻擊進入戰鬥時，戰後有20%機率使對方1回合無法行動。'
},{
    NAME: '水晶',
    HEAL: 0.2,
    DISC: '造成治療效果提升20%。'
}];

