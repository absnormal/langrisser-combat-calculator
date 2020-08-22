/* 重甲 輕甲 布甲 */
var armor = [{
    NAME: '沒有盔甲', TYPE: 'NO',
    DESC: '沒有裝備的可撥仔，或著被璨晶禁掉了QQ'
},{
    NAME: '萬古板甲', TYPE: '重甲',
    DEF: 0.1, TRUEDMGDEC: 0.1,
    DESC: '防禦+10%。遭受固定傷害降低10%。'
},{
    NAME: '巨人的抗爭', TYPE: '重甲',
    DEF: 0.1, CRITRATEDEC: 0.2,
    DESC: '防禦+10%。遭受暴擊率降低20%。'
},{
    NAME: '鏡面鎧甲', TYPE: '重甲',
    /* TRUE DMG */
    HP: 0.05, DEF: 0.05,
    DESC: '生命、防禦+5%，被近戰攻擊前，對敵軍造成固定傷害，傷害值為英雄防禦的1.5倍'
},{
    NAME: '血紋魔鎧', TYPE: '重甲',
    /* PROBABILITY SKILLS */
    HP: 0.05, DEF: 0.05,
    DESC: '生命、防禦+5%，被近戰攻擊時，有30%的概率發動，本次戰鬥部隊遭受傷害降低30%'
},{
    NAME: '埃尼亞斯之甲', TYPE: '重甲',
    DEF: 0.1, HEALED: 0.1,
    DESC: '防禦+10% 遭受治療效果+10%'
},{
    NAME: '冰鋒戰甲', TYPE: '重甲',
    /* TRUE DMG */
    HP: 0.05, MDEF: 0.05,
    DESC: '生命、魔防+5%。主動進入戰鬥時，戰後對敵軍造成1次固定傷害，傷害值為英雄魔防的1.5倍。'
},{
    NAME: '大地之鎧', TYPE: '重甲',
    DDEF: 0.15,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense'){
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDmgtype = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDmgtype = combat.offDMGTYPE;
        }
        if(perHP >= 0.8 && oppDmgtype == '魔法傷害') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1];
        else return false;
    },
    DESC: '被攻擊進入戰鬥時，防禦提升15%。部隊生命80%以上時，遭受魔法傷害降低10%。'
},{
    NAME: '原質之鎧', TYPE: '重甲',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP >= 0.5) return [0, 0, 0.08, 0.08, 0];
        else return [0.08, 0, 0, 0, 0.08];
    },
    DESC: '部隊生命50%以上時，防禦、魔防提升8%，部隊生命50%以下時，攻擊、技巧提升8%'
},{
    NAME: '風王戰甲', TYPE: '重甲',
    HP: 0.05, DEF: 0.05,
    /* PROBABILITY SKILL */
    DESC: '生命、防禦+5%，被遠程攻擊時，有30%的概率發動，本次戰鬥遭受傷害降低30% '
},{
    NAME: '石像鬼外套', TYPE: '輕甲',
    HP: 0.05, DDEF: 0.15,
    DESC: '生命+5%。被攻擊時，防禦提升15%'
},{
    NAME: '暮色輕甲', TYPE: '輕甲',
    DEF: 0.08, MDEF: 0.08,
    DESC: '魔防+8% 防禦+8% '
},{
    NAME: '逆矢外殼', TYPE: '輕甲',
    DEF: 0.05, MDEF: 0.05,
    /* TRUE DMG */
    DESC: '防禦、魔防+5%。被遠程攻擊進入戰鬥前，對故軍造成固定傷害，傷害值為英雄魔防的1.5倍。'
},{
    NAME: '影淵鱗衣', TYPE: '輕甲',
    HP: 0.1,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP >= 0.5) return [0, 0, 0.1, 0, 0];
        else return [0, 0, 0, 0.1, 0];
    },
    DESC: '生命+10%。部隊生命50%以上時，防禦+10%。部隊生命50%以下時，魔防+10%。'
},{
    NAME: '最後之服', TYPE: '輕甲',
    DEF: 0.1,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP == 1) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4];
        else return false;
    },
    DESC: '防禦+10%，部隊生命值100%時，遭受所有傷害降低40% '
},{
    NAME: '魔蜥外皮', TYPE: '輕甲',
    HP: 0.1,
    DESC: '生命+10%，被攻擊進入戰鬥前，有50%的概率使敵軍遭受一個隨機的強力弱化效果'
},{
    NAME: '金剛背心', TYPE: '輕甲',
    DATK: 0.15, DCRITRATEINC: 0.15,
    DESC: '被攻擊時，攻擊、暴擊率提升15% '
},{
    NAME: '突擊獵裝', TYPE: '輕甲',
    HP: 0.05, ODEF: 0.1, OMDEF: 0.1,
    DESC: '生命+5%，主動攻擊時，防禦和魔防提升10%。'
},{
    NAME: '巴德爾的白袍', TYPE: '布甲',
    /* combat neg */
    MDEF: 0.1,
    DESC: '魔防+10%，被近戰攻擊進入戰鬥前，有20%的概率使得本次戰鬥中，部隊不會受到近戰傷害減免效果的影響。'
},{
    NAME: '死神之衣', TYPE: '布甲',
    CRITRATEDEC: 0.4,
    DESC: '遭受暴擊率降低40%，被攻擊進入戰鬥前，有30%的概率，使得敵軍「遭受傷害」提升20%，持續2回合 '
},{
    NAME: '暗之法衣', TYPE: '布甲',
    HP: 0.05,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        if(combat.range > 1) return [0, 0, 0.15, 0.15, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '生命+5%。被遠程攻擊時，防禦、魔防提升15%。'
},{
    NAME: '群星斗篷', TYPE: '布甲',
    HP: 0.05, MDEF: 0.1,
    DESC: '魔防+10%，生命+5% '
},{
    NAME: '福金之翼', TYPE: '布甲',
    HP: 0.05,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        if(combat.range == 1) return [0, 0, 0.15, 0.15, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '生命+5%。被近戰攻擊時，防禦、魔防提升15%。'
},{
    NAME: '天女羽衣', TYPE: '布甲',
    HP: 0.1,
    DESC: '生命+10%，被攻擊進入戰鬥前，有30%的概率驅散敵軍1個強化效果，並隨機附加1個弱化效果。'
},{
    NAME: '女神法衣', TYPE: '布甲',
    DEF: 0.1, HEALED: 0.1,
    DESC: '防禦+10%，遭受治療效果+10%。'
},{
    NAME: '黑色新娘', TYPE: '拉娜',
    HP: 0.05,
    DESC: '生命+5%。進入戰鬥前，使敵軍遭受一個隨機的強力弱化效果。'
},{
    NAME: '1UP', TYPE: '雪莉',
    DEF: 0.05, MDEF: 0.05,
    DESC: '防禦、魔防+5%。主動攻擊進入戰鬥時，如果受到致命傷害，不會死亡。(該效果需要間隔4回合才能再次觸發) '
},{
    NAME: '失落的穹光', TYPE: '索菲亞',
    HP: 0.05,
    DESC: '生命+5%。對友軍釋放技能時，額外附加：「攻擊、智力+15%」,「魔防+20%」，持續2回合。'
},{
    NAME: '強襲異鎧', TYPE: '維拉玖',
    DEF: 0.1,
    DESC: '防禦+10%。英雄觸發遭受致命傷害不會死亡時，自身獲得1個隨機強化效果。'
},{
    NAME: '浴火之衣', TYPE: '埃格貝爾特',
    HP: 0.05, MDEF: 0.05,
    DESC: '生命、魔防+5%。被攻擊受到傷害後，獲得效果「技能射程+1，範圍+1」持續1回合。'
},{
    NAME: '魔導防護服', TYPE: '蕾伽爾',
    HP: 0.05,
    /* TRUE DMG */
    DESC: '生命+5%。被近戰攻擊進入戰鬥前，對敵軍造成1次固定傷害，傷害值為英雄智力的1倍'
},{
    NAME: '月之回憶', TYPE: '布琳達',
    HP: 0.05, DEF: 0.05,
    /* ??? */
    DESC: '生命、防禦+5%。 當觸發風華典範額外行動時，驅散自身2個弱化效果並使自己獲得造成傷害提高10%，遭受傷害降低+10%，持續1回合。'
},{
    NAME: '霸王戰甲', TYPE: '巴恩哈特',
    HP: 0.05,
    DESC: '生命+5%。英雄天賦範圍+1。'
},{
    NAME: '黎明守護者', TYPE: '塞蕾娜',
    DEF: 0.1,
    DESC: '防禦+10%。自身3格範圍內生命低於80%的所有友軍全部視為"失去士兵"。'
}];

