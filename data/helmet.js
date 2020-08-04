/* 重盔 皮盔 法帽 */
var helmet = [{
    NAME: '沒有頭盔', TYPE: 'NO',
    DESC: '沒有裝備的可撥仔，或著被璨晶禁掉了QQ'
},{
    NAME: '埃尼亞斯之盔', TYPE: '重盔',
    HP: 0.1, DEF: 0.05,
    DESC: '生命+10%，防禦+5%。'
},{
    NAME: '提爾之怒', TYPE: '重盔',
    DEF: 0.1,
    DESC: '防禦+10%。行動結束時，如果未造成過傷害，則獲得效果「技能傷害提升10%」、「反擊傷害提升10%」，持續1回合。'
},{
    NAME: '大地之盔', TYPE: '重盔',
    DMDEF: 0.15,
    DESC: '被攻擊時，魔防提升15%，部隊生命80%以上時，遭受物理傷害降低10%。'
},{
    NAME: '原質頭盔', TYPE: '重盔',
    SKILLTYPE: 'RATE',
    SKILL: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP >= 0.5) return [0, 0, 0.08, 0.08, 0];
        else return [0.08, 0, 0, 0, 0.08];
    },
    DESC: '部隊生命50%以上時，防禦、魔防提升8%，部隊生命50%以下時，攻擊、技巧提升8%'
},{
    NAME: '死神的呼吸', TYPE: '重盔',
    HP: 0.1,
    DESC: '生命+10%，如果本回合消滅過敵軍，則在完成行動後，使自身2格範圍內的敵軍在下回合結束時，損失生命上限的20%。'
},{
    NAME: '領袖之盔', TYPE: '重盔',
    HP: 0.1,
    DESC: '生命+10%，行動結束時，使相鄰的1名其他友軍「防禦」提升20%，且免疫「防禦、魔防降低」，「無法遭受治療」，持續1回合'
},{
    NAME: '吸血鬼假面', TYPE: '重盔',
    DEF: 0.1,
    DESC: '防禦+10%，行動結束時，50%概率使自身2格範圍內的1個敵軍「防禦」降低20%，持續1回合'
},{
    NAME: '暮色頭盔', TYPE: '皮盔',
    DEF: 0.08, MDEF: 0.08,
    DESC: '魔防+8%，防禦+8%。'
},{
    NAME: '鮮花禮帽', TYPE: '皮盔',
    HP: 0.1,
    DESC: '生命+10%。行動結束時， 如果部隊生命低於50%，則恢復20%生命'
},{
    NAME: '突擊頭飾', TYPE: '皮盔',
    HP: 0.05,
    ODEF: 0.1, OMDEF: 0.1,
    DESC: '生命+5%，主動攻擊時，防禦和魔防提升10%。'
},{
    NAME: '王者之冠', TYPE: '皮盔',
    HP: 0.05, MDEF: 0.05,
    DESC: '生命，魔防+5%、行動結束時、使相鄰的1名其他友軍「造成傷害」提升20%，持續1回合 '
},{
    NAME: '尼約德的羽冠', TYPE: '皮盔',
    HP: 0.1,
    SKILLTYPE: 'MIDRATE',
    SKILL: function(side){
        if(side == 'offense') HP = combat.offHP, oppHP = combat.defHP;
        else if(side == 'defense') HP = combat.defHP, oppHP = combat.offHP;
        if(HP > oppHP) return [0, 0, 0.15, 0.15, 0];
        else return false;
    },
    DESC: '生命+10%，和生命數值低於自己的部隊戰鬥時，防禦和魔防提升15% '
},{
    NAME: '耶夢加得之眼', TYPE: '皮盔',
    HP: 0.05, DEF: 0.05,
    DESC: '生命、防禦+5%，行動結束時，有50%的概率使自身2格範圍內的1個敵軍「造成傷害」降低15%，持續1回合。'
},{
    NAME: '洛基的假面', TYPE: '皮盔',
    HP: 0.05,
    SKILLTYPE: 'MIDRATE',
    SKILL: function(side){
        if(side == 'offense') return false;
        range = combat.range;
        if(range == 1) return [0, 0, 0.15, 0, 0];
        else return false;
    },
    DESC: '生命+5%，被近身戰鬥時，防禦提升15% '
},{
    NAME: '攝魂法帽', TYPE: '法帽',
    MDEF: 0.1,
    DESC: '魔防+10%，行動結束時，50%的概率使自身3格範圍內的1個敵軍「無法使用主動技能」，持續1回合 '
},{
    NAME: '光輝頭飾', TYPE: '法帽',
    SKILLTYPE: 'RATE',
    SKILL: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP == 1) return [0, 0, 0.15, 0.15, 0];
        else return false;
    },
    DESC: '部隊生命100%時，魔防和防禦提升15% '
},{
    NAME: '天女頭飾', TYPE: '法帽',
    HP: 0.1,
    DESC: '生命+10%，行動結束時，100%的概率對自身2格範圍內的1名其他友軍施加1個隨機的強化效果。'
},{
    NAME: '馴鹿禮帽', TYPE: '法帽',
    HP: 0.1,
    DESC: '生命+10%，行動結束時，使相鄰的1個友軍「魔防」提升20%，且免疫「暈眩」、「無法遭受強化效果」，「移動力降低」，持續1回合'
},{
    NAME: '霜火之冠', TYPE: '法帽',
    MDEF: 0.1, ODMGDEC: 0.1,
    DESC: '魔防+10%。主動攻擊進入戰鬥時，遭受傷害降低10%。'
},{
    NAME: '奧丁的寬簷帽', TYPE: '法帽',
    MDEF: 0.1,
    DESC: '魔防+10%，如果本回合擊殺過敵軍，行動結束時，使自身3格範圍內的1個敵軍損失5個強化效果'
},{
    NAME: '冥府渡神', TYPE: '法帽',
    DEF: 0.1,
    DESC: '防禦+10%，行動結束時，有50%的概率使自身3格範圍內的1個敵軍「遭受所有傷害」提升15%，持續1回合 '
},{
    NAME: '魔女的追想', TYPE: '法帽',
    HP: 0.1,
    DESC: '生命+10%。行動結束時，使相鄰的1個友軍「技巧」+20%，      並免疫「治療反轉（施加的治療轉化為傷害）」、「無法再行動」，持續1回合。 '
},{
    NAME: '暗之法冠', TYPE: '法帽',
    HP: 0.05, MDEF: 0.1,
    DESC: '魔防+10% 生命+5% '
},{
    NAME: '勇者的手工課', TYPE: '奧利佛',
    HP: 0.05, MDEF: 0.05,
    DESC: '生命、魔防+5%。部隊造成暴擊後對敵軍施加1個強力弱化效果並偷取1個強化效果。'
},{
    NAME: '風中之花', TYPE: '安潔麗娜',
    DEF: 0.1,
    DESC: '防禦+10%。觸發再行動時，身上攜帶的強化狀態回合數不會減少。(該效果需要間隔3回合才能再次觸發) '
},{
    NAME: '逐夢之冠', TYPE: '格尼爾',
    MDEF: 0.05,
    DESC: '魔防+5%。當自身強化狀態數量大於或等於7個時，反擊傷害提高50%。'
},{
    NAME: '卡爾薩斯之冠', TYPE: '蘭斯',
    DESC: '生命+5%。自身為[混合部隊]時，傷害額外提升+20%。'
},{
    NAME: '銳目透鏡', TYPE: '西格瑪',
    HP: 0.05,
    DESC: '生命+5%。行動結束時，有25%概率使得自己獲得「攻擊+20%」持續4回合。'
},{
    NAME: '溫暖的回憶', TYPE: '澤瑞達',
    HP: 0.05,
    DESC: '生命+5%。在行動結束時，如果周圍2格沒有友軍，則恢復20%生命，並驅散1個弱化狀態。'
},{
    NAME: '荊棘皇冠', TYPE: '芙蕾雅',
    MDEF: 0.1,
    DESC: '魔防+10%。被攻擊進入戰鬥前，對敵軍造成固定傷害，傷害值為英雄魔防的2倍。'
},{
    NAME: '義賊的假面', TYPE: '銀狼',
    MDEF: 0.05,
    DESC: '魔防+5%。主動攻擊進入戰鬥時，如果自身強化狀態數量大於等於敵軍強化狀態數量的2倍，會先於敵軍進行攻擊。'
},{
    NAME: '風之翎羽', TYPE: '艾拉斯卓',
    MDEF: 0.1,
    DESC: '魔防+10%。自身處於「樹林」「山地」和「草地」 上時，攻擊可以無視護衛，並在戰後恢復傷害數值20%的生命。'
},{
    NAME: '卡昆西斯之冠', TYPE: '雪露法妮爾',
    MDEF: 0.1,
    DESC: '魔防+10%。行動結束時，有30%概率使得自己獲得「技能射程+1，範圍+1」，持續1回合。'
},{
    NAME: '風襲翼盔', TYPE: '法娜',
    MDEF: 0.1,
    DESC: '魔防+10%。使用範圍傷害技能時，生效範圍+1。[觸發冷卻]使用範圍技能造成傷害時則該效果進入觸發冷卻，間隔4回合才可以再次觸發。'
},{
    NAME: '黃金獅子', TYPE: '迪哈爾特',
    MDEF: 0.1,
    DESC: '魔防+10%，如果本回合擊殺過敵軍，行動結束時，使自身3格範圍內的1個敵軍「眩暈」1回合。'
},{
    NAME: '夢魘的面容', TYPE: '弗拉基亞',
    HP: 0.05,
    SKILLTYPE: 'MIDRATE',
    SKILL: function(side){
        if(side == 'offense') army = getArmy('offense'), oppArmy = getArmy('defense');
        else if(side == 'defense') army = getArmy('defense'), oppArmy = getArmy('offense');
        if(cal_counter(army, oppArmy) > 0) return [0.2, 0, 0, 0, 0];
        else return false;
    },
    DESC: '生命+5%。與克制的部隊交戰時，攻擊額外提升20%。'
},{
    NAME: '笠', TYPE: '霧風',
    DEF: 0.05, MDEF: 0.05,
    SKILLTYPE: 'RATE',
    SKILL: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP == 1) return [0, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '防禦、魔防+5%。部隊生命值100%時，技巧+30%。'
},{
    NAME: '我我我公主', TYPE: '海恩',
    HP: 0.05,
    DESC: '生命+5%。英雄天賦可以累積的增益效果個數+1：可以享受[公主聯盟]超絕效果。'
},{
    NAME: '蘭芳特的次選', TYPE: '蘭芳特',
    DEF: 0.1,
    DESC: '防禦+10%，英雄天賦範圍+1'
},{
    NAME: '斬男色', TYPE: '伊梅爾達',
    MDEF: 0.1,
    DESC: '魔防+10%，行動結束時，使相鄰2格的4個其他友軍免疫「固定傷害」，持續1回合。'
},{
    NAME: '古巨美的餽贈', TYPE: '古巨拉',
    HP: 0.05,
    DESC: '生命+5%。戰鬥後，恢復自身部隊10%的生命。攜帶技能無視COST限制。'
},{
    NAME: '燎星之隕', TYPE: '貝蒂',
    HP: 0.1,
    DESC: '部隊血量越低時，造成的固定傷害越高，最多提升30%。'
},{
    NAME: '神諭者', TYPE: '女神化身',
    HP: 0.05,
    DESC: '生命+5%。在行動結束時，如果本回合未造成過傷害且沒有移動，則可再次行動。[觸發冷卻]再行動效果需要間隔4回合才可以再次觸發。'
},{
    NAME: '女武神燦星', TYPE: '娜姆',
    MDEF: 0.1,
    DESC: '魔防+10%。英雄天賦的[觸發冷卻]減少1回合。'
},{
    NAME: '遠見', TYPE: '艾馬林克',
    HP: 0.1,
    DESC: '生命+10%。行動結束時，使得周圍2格以內所有敵軍隨機獲得一個弱化效果。'
},{
    NAME: '利古里亞之冠', TYPE: '亞魯特繆拉',
    DEF: 0.05, MDEF: 0.05,
    DESC: '防禦、魔防+5%。對自己施加的強化效果持續回合+1。'
},{
    NAME: '萬能工具帽', TYPE: '安傑麗卡',
    MDEF: 0.1,
    DESC: '魔防+10%。行動結束時，為全場生命最低的一個友軍召喚物恢復30%生命。'
}];



