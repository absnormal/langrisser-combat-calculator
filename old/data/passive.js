var passive = [{
    NAME: '眾志',
    TYPE: ['浦飯幽助','塞蕾娜','貝蒂'],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return false;
        if(friend >= 3) return [0, 0, 0.15, 0.15, 0];
        else return [0, 0, 0.05*friend, 0.05*friend, 0];
    },
    DESC: '[被動]周圍2格以內，每有1名友軍，則防禦、魔防增加5%，最多增加15%。'
},{
    NAME: '血戰',
    TYPE: ['浦飯幽助','索尼婭','澤瑞達','真宮寺櫻','利斯塔'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        offPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        defPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(side == 'offense') perHP = offPerHP, oppPerHP = defPerHP;
        else if(side == 'defense') perHP = defPerHP, oppPerHP = offPerHP;
        if(perHP < oppPerHP) return [0.1, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '[被動]部隊生命百分比低於敵軍時，進入戰鬥時攻擊、防禦提升10%。'
},{
    NAME: '聖盾(被動)',
    TYPE: ['麗可麗絲','梅雅','謎之騎士','艾米莉亞'],
    OMDEF: 0.1, DMDEF: 0.1,
    DESC: '[被動]進入戰鬥時，魔防提升10%。'
},{
    NAME: '冥想',
    TYPE: ['蕾伽爾','莉亞娜','艾梅達','傑利奧魯&蕾拉'],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP > 0.9) return [0, 0.1, 0, 0.1, 0];
        else return false;
    },
    DESC: '[被動]當部隊生命值高於90%時，智力、魔防提升10%。'
},{
    NAME: '乘風',
    TYPE: ['克拉蕾特'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        if(run == 0) return false;
        if(run >= 5) return [0, 0, 0, 0, 0, 0, 0, 0.25, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0, 0, 0.05*run, 0, 0, 0];
    },
    DESC: '[被動]攻擊前每移動1格，物理傷害提升5%。（最多提升25%） '
},{
    NAME: '信仰',
    TYPE: ['尤莉婭', '克蘿賽', '克麗絲'],
    ODMGINC: 0.15,
    DESC: '[被動]主動攻擊進入戰鬥時，傷害增加15%，戰鬥後，為全場生命值最低的其他友軍恢復生命值，恢復量為自身智力的2倍。'
},{
    NAME: '倒刺',
    TYPE: ['艾爾文', 'SP艾爾文', '芙蕾雅', 'SP芙蕾雅', '塞蕾娜'],
    /* TRUE DMG */
    DESC: '[被動]被近戰攻擊進入戰鬥，戰後若本部隊生命大於50%觸發[倒刺]:戰鬥結束後，對敵軍造成一次[固定傷害]。（傷害數值為英雄防禦的2.5倍）'
},{
    NAME: '偷襲',
    TYPE: ['迪哈爾特', '霧風', '銀狼'],
    /* TRUE DMG */
    DESC: '[被動]進入戰鬥如果發動了暴擊，則在戰鬥後對敵軍造成1次[固定傷害]。（傷害數值為英雄攻擊的2倍）'
},{
    NAME: '先制反擊',
    TYPE: ['格尼爾'],
    /* PROBABILITY SKILL */
    /* FIRST ATTACK */
    DESC: '[被動]被攻擊進入戰鬥前，有10%的概率先於敵軍進行攻擊，若自身技巧每多10點，則此概率額外提升1%。'
},{
    NAME: '公正對決',
    TYPE: ['艾米莉亞', '雅里安洛德'],
    /* FIRST ATTACK */
    DESC: '[被動]部隊生命值高於90%時，進入戰鬥前，如果自身防禦高於敵軍，會先於敵軍進行攻擊。'
},{
    NAME: '再移動',
    TYPE: ['馬修-突擊騎士','奧利佛','蘭迪烏斯','傑利奧魯&蕾拉','迪哈爾特','露娜','艾馬林克','布琳達','蕾蒂西亞','利斯塔','斯科特'],
    ODMGINC: 0.1,
    DESC: '[被動]主動進入戰鬥時，傷害提升10%。只要有剩餘的移動力，攻擊後可以再次移動。'
},{
    NAME: '衝鋒',
    TYPE: ['艾馬林克', '蘭斯', '蕾蒂西亞','斯科特','基斯'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        if(run == 0) return false;
        if(run >= 3) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0, 0, 0.05*run, 0, 0, 0];
    },
    DESC: '[被動]在攻擊前，每移動1格，攻擊提升5%。（最多提升15%）'
},{
    NAME: '劍氣',
    TYPE: ['貝蒂','阿爾弗雷德'],
    DESC: '[被動]主動戰鬥後，對自身周圍1圈的所有敵軍造成0.1倍範圍傷害。 '
},{
    NAME: '割裂',
    TYPE: ['巴恩哈特'],
    /* TRUE DMG */
    DESC: '[被動]主動攻擊造成傷害後，對敵軍再造成一次[固定傷害]。（傷害數值為英雄攻擊的2倍）'
},{
    NAME: '壓制',
    TYPE: ['艾爾文', 'SP艾爾文','阿爾弗雷德','利昂','克拉蕾特','利亞特'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        offPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        defPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(side == 'offense') perHP = offPerHP, oppPerHP = defPerHP;
        else if(side == 'defense') perHP = defPerHP, oppPerHP = offPerHP;
        if(perHP > oppPerHP) return [0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '[被動]當部隊生命百分比高於敵軍時，進入戰鬥時攻擊提升12%。'
},{
    NAME: '反擊',
    TYPE: ['神崎堇', '貝蒂', '蘭迪烏斯'],
    DATK: 0.12,
    DESC: '[被動]替相鄰友軍承受物理攻擊。被攻擊進入戰鬥時，攻擊提升12%。'
},{
    NAME: '堅守',
    TYPE: ['帕恩','艾拉斯卓','弗洛朗蒂婭','蘭芳特','亞魯特繆拉','維拉','真宮寺櫻','法娜','羅莎莉婭','桑原和真','尤莉婭','基斯'],
    ODEF: 0.07, DDEF: 0.07,
    DESC: '[被動]進入戰鬥時，防禦提升7%。'
},{
    NAME: '增援',
    TYPE: ['弗拉基亞','亞魯特繆拉','亞修拉姆','阿雷斯','雪莉','埃格貝爾特','法娜','雪露法妮爾','亞爾緹娜'],
    /* HEAL AFTER BATTLE */
    DESC: '[被動]行動結束時，恢復自身部隊20%生命。'
},{
    NAME: '奇襲',
    TYPE: ['歐米伽'],
    /* ATTACK HERO ONLY */
    DESC: '[被動]主動攻擊進入戰鬥前，自身技巧若超過敵軍技巧2倍，則本次攻擊無視護衛；若超過敵軍技巧3倍，可以直接對英雄造成傷害。'
},{
    NAME: '孤月',
    TYPE: ['安潔麗娜'],
    /* HERO DMG DEC ONLY */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        range = combat.range;
        if(range > 1) return false;
        else return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2];
    },
    DESC: '[被動]近戰進入戰鬥時，英雄遭受傷害降低20%。行動結束時，如果自己攜帶的士兵已經全部陣亡，則可以再次行動。[觸發冷卻]該效果需要間隔3回合才可以再次觸發。'
},{
    NAME: '守護',
    TYPE: ['巴爾加斯','芙蕾雅', 'SP芙蕾雅','路因'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE;
        if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE;
        if(oppDMGTYPE == '物理傷害') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.05];
        else return false;
    },
    DESC: '[被動]遭受物理傷害降低5%，相鄰的友軍受到物理攻擊時，代替他們進入戰鬥。'
},{
    NAME: '御風',
    TYPE: ['蘭斯','蕾蒂西亞','基斯'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP > 0.5) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15];
    },
    DESC: '[被動]生命大於50%進入戰鬥時，遭受所有傷害降低15%。'
},{
    NAME: '心眼',
    TYPE: ['霧風','蘭芳特','黎恩'],
    CRITRATEINC: 0.15,
    DESC: '[被動]暴擊率提升15%。進入戰鬥時若發生暴擊，戰後使得敵軍所有被動技能無法生效，持續2回合。'
},{
    NAME: '折返',
    TYPE: ['謎之騎士'],
    ODMGINC: 0.1,
    DESC: '[被動]主動攻擊時，傷害提升10%。戰鬥後，可以獲得再次移動的機會，此次移動的格數為戰鬥前部隊移動過的格數。[觸發冷卻]再次移動的效果需要間隔2回合才可以再次觸發。'
},{
    NAME: '招架',
    TYPE: ['亞魯特繆拉','巴恩哈特','艾馬林克'],
    SKILLTYPE: ['MIDADD'],
    MIDADD: function(side){
        if(side == 'defense') return [0.07, 0, 1, 0, 0];
        else return false;
    },
    DESC: '[被動]替相鄰友軍承受物理攻擊。被攻擊時，將「攻擊」的7%增加到「防禦」上。'
},{
    NAME: '整軍',
    TYPE: ['利昂','雪莉','雷因法魯斯'],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP > 0.9) return [0.1, 0, 0.1, 0, 0];
    },
    DESC: '[被動]部隊生命值高於90%時，攻擊、防禦提升10%。'
},{
    NAME: '無情',
    TYPE: ['約書亞','雷因法魯斯','銀狼'],
    CRITDMGINC: 0.2,
    DESC: '[被動]暴擊傷害提升20%。進入戰鬥如果觸發了暴擊，則戰鬥結束後，獲得「遭受所有傷害降低30%」效果，持續1回合。'
},{
    NAME: '明鏡',
    TYPE: ['雷丁','貝蒂','黎恩'],
    HEALED: 0.15,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        range = combat.range;
        if(range == 1) return [0.1, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '[被動]遭受治療效果+15%。被近戰攻擊，進入戰鬥時部隊攻防提升10%。'
},{
    NAME: '暴突',
    TYPE: ['迪哈爾特'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        if(run == 0) return false;
        if(run >= 3) return [0, 0, 0, 0, 0, 0.15, 0.15, 0, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0.05*run, 0.05*run, 0, 0, 0, 0];
    },
    DESC: '[被動]戰鬥前每移動1格，部隊暴擊率提升5%，暴擊傷害提升5%。（最多提升15%）'
},{
    NAME: '格擋',
    TYPE: ['格尼爾','塞蕾娜','雷丁','雅兒貝德'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0, 1], MAX: 2,
    /* PROBABILITY SKILL */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE, range = combat.range;
        if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE, range = combat.range;
        if(side == 'defense' && this.defINDEX == 2 && oppDMGTYPE == '物理傷害' && range == 1)
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '[被動]被近戰攻擊，進入戰鬥時有30%概率觸發，部隊受到的物理傷害減少30%。(當前機率[DATA]%)'
},{
    NAME: '死鬥',
    TYPE: ['真宮寺櫻','桑原和真','希琳卡','馬修-遊俠','霧風','萊恩哈特','西格瑪','皮耶魯','洛加'],
    OATK: 0.12, ODEX: 0.12, ODEF: -0.7, OMDEF: -0.7,
    DATK: 0.12, DDEX: 0.12, DDEF: -0.7, DMDEF: -0.7,
    DESC: '[被動]進入戰鬥時，部隊攻擊、技巧提升12%，防禦、魔防降低7%。'
},{
    NAME: '氣浪',
    TYPE: ['羅莎莉婭','索尼婭','蘭芳特','戶愚呂兄弟','亞修拉姆','克拉蕾特','利昂','海倫娜','利亞特','路因','斯科特'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        if(perHP > 0.8) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
    },
    DESC: '[被動]主動進入戰鬥時，如果部隊生命值大於80%，戰鬥中遭受傷害降低30%。'
},{
    NAME: '烈風再起',
    TYPE: ['阿雷斯'],
    CRITRATEINC: 0.1,
    DESC: '[被動]暴擊率提升10%。造成傷害後，如果部隊具有[掠陣]效果，可以獲得再次移動4格的機會。[觸發冷卻]再次移動的效果需要間隔1回合才可以再次觸發。'
},{
    NAME: '看破',
    TYPE: ['艾爾文', 'SP艾爾文','銀狼','萊恩哈特','伊梅爾達','迪哈爾特','飛影','艾絲蒂爾','路因','阿倫','沃爾納'],
    CRITRATEINC: 0.1,
    DESC: '[被動]暴擊率提升10%。造成傷害時，50%的概率使敵軍的被動技能無法生效，持續2回合，發生暴擊時，必然成功。'
},{
    NAME: '瞬閃',
    TYPE: ['燕'],
    /* FIRST ATTACK */
    DESC: '[被動]部隊生命值高於90%時，進入戰鬥前，如果自身技巧高於敵軍，會先於敵軍進行攻擊。'
},{
    NAME: '背刺',
    TYPE: ['燕','澤瑞達','飛影'],
    /* TRUE DMG */
    DESC: '[被動]主動攻擊進入戰鬥時，如果目標部隊生命值100%，則在戰前造成1次[固定傷害]。（傷害數值為英雄攻擊的2倍）'
},{
    NAME: '背水',
    TYPE: ['阿爾弗雷德','維拉玖','蒂德莉特','藏馬','蕾娜塔','妮絲蒂爾','威拉','巴爾加斯','娜姆','愛麗絲'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP < 0.5) return [0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '[被動]部隊生命低於50%時，進入戰鬥時防禦、魔防提升10%。'
},{
    NAME: '自然的加護',
    TYPE: ['艾拉斯卓'],
    /* COMBAT NEG */
    DESC: '[被動]自身處於「樹林」、「山地」和「草地」上時，部隊不會受到近戰傷害減免影響，並且近戰進入戰鬥時，受到傷害降低20%。'
},{
    NAME: '致命',
    TYPE: ['雷因法魯斯','娜姆','霧風','歐米伽','洛加'],
    OATK: 0.12,
    DESC: '[被動]主動攻擊進入戰鬥時，攻擊提升12%。'
},{
    NAME: '警戒',
    TYPE: ['格尼爾','亞爾緹娜','神崎堇','古巨拉','歐米伽','維拉玖','戶愚呂兄弟','利亞特','沃爾納'],
    ODEF: 0.12,
    DESC: '[被動]主動攻擊進入戰鬥時，防禦提升12%。'
},{
    NAME: '詭步',
    TYPE: ['比蘿蒂絲','雷因法魯斯','弗拉基亞','澤瑞達','銀狼'],
    CRITRATEINC: 0.1,
    DESC: '[被動]暴擊率提升10%。戰鬥中消滅過部隊後，可以獲得再次移動3格的機會。'
},{
    NAME: '超養成計畫',
    TYPE: ['梅雅'],
    /* SOLDIER RELATED */
    DESC: '[被動]攜帶近戰士兵時，士兵射程+1；攜帶女僕類士兵時，額外免疫[固定傷害]。'
},{
    NAME: '迂迴',
    TYPE: ['娜姆','西格瑪','馬修-遊俠','艾拉斯卓'],
    ODMGINC: 0.1,
    DESC: '[被動]主動攻擊進入戰鬥時，傷害提升10%。戰鬥後，可以獲得再次移動2格的機會。[觸發冷卻]再次移動的效果需要間隔1回合才可以再次觸發。'
},{
    NAME: '進擊',
    TYPE: ['弗拉基亞','羅莎莉婭','奧利維爾','戶愚呂兄弟','迪歐斯','瑪麗埃爾'],
    OATK: 0.07, DATK: 0.07,
    DESC: '[被動]進入戰鬥時，自身部隊的攻擊提升7%。'
},{
    NAME: '逆境',
    TYPE: ['飛影','神崎堇','蕾娜塔','歐米伽','阿瑞安赫德','克拉蕾特'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP < 0.7) return [0.1, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '[被動]部隊生命低於70%時，攻擊、防禦提升10%。'
},{
    NAME: '逆鱗',
    TYPE: ['蕾娜塔'],
    /* REFLECT DMG */
    /* HEAL AFTER BATTLE */
    DESC: '[被動]進入戰鬥時，反彈部隊受到物理傷害的20%。並在戰鬥後，恢復最大生命百分比（此百分比為本次戰鬥反彈百分比的1倍）。'
},{
    NAME: '重盾',
    TYPE: ['桑原和真','伊露希亞','艾馬林克','艾絲蒂爾','巴恩哈特','巴爾加斯','芙蕾雅', 'SP芙蕾雅','希爾達'], offINDEX:1, defINDEX: 1,
    DATA: [0, 0, 1], MAX: 2,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE, range = combat.range;
        if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE, range = combat.range;
        if(side == 'defense' && this.defINDEX == 2 && oppDMGTYPE == '物理傷害' && range == 1)
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5];
        else return false;
    },
    /* PROBABILITY SKILL */
    DESC: '[被動]被近戰攻擊，進入戰鬥時有25%概率觸發，部隊受到的傷害降低50%。(當前[DATA]%)'
},{
    NAME: '光輝翠綠體',
    TYPE: ['安茲‧烏爾‧恭'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0, 1], MAX: 2,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense' && this.defINDEX == 2 && side == 'defense')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9];
        else return false;
    },
    /* PROBABILITY SKILL */
    DESC: '[被動]被攻擊進入戰鬥時有30%概率觸發，使敵軍傷害降低90%。（[觸發冷卻]該效果觸發後，需要間隔2回合才能再次觸發）(當前[DATA]%)'
},{
    NAME: '野戰',
    TYPE: ['燕','奧利佛','約書亞','索尼婭','馬修-影','洛加'],
    SKILLTYPE: ['RATE', 'MIDRATE'],
    RATE: function(side){
        if(side == 'offense') terrainRate = combat.offTerrainRate;
        if(side == 'defense') terrainRate = combat.defTerrainRate;
        if(terrainRate == 1) return false;
        else return [terrainRate-1, 0, 0, 0, 0];
    },
    MIDRATE: function(side){
        if(side == 'offense') combat.offMOVETYPE = '野戰';
        if(side == 'defense') combat.defMOVETYPE = '野戰';
        return false;
    },
    DESC: '[被動]移動時所有可以通過的地形都視為「平地」。所在地形如果有防禦提升效果，則可以獲得同樣的攻擊提升。'
},{
    NAME: '聖樹庇護[被動]',
    TYPE: ['拉姆達'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') combat.offMOVETYPE = '野戰';
        if(side == 'defense') combat.defMOVETYPE = '野戰';
        return false;
    },
    DESC: '[被動]移動時所有可以通過的地形都視為「樹林」。且部隊不會受到地形導致的移動力下降影響。'
},{
    NAME: '金剛',
    TYPE: ['艾絲蒂爾'],
    DMGINC: 0.1,
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [0.1, 0, 1, 0, 0];
    },
    MIDADD: function(side){
        return [0.1, 0, 1, 0, 0];
    },
    DESC: '[被動]造成的所有傷害提升10%，並將「攻擊」的10%增加到「防禦」上。'
},{
    NAME: '鐵壁',
    TYPE: ['阿卡婭','帕恩','弗洛朗蒂婭'],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP > 0.9) return [0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '[被動]部隊生命高於90%時，防禦、魔防提升10%。'
},{
    NAME: '鐵盔',
    TYPE: ['神崎堇','蘭迪烏斯','艾米莉亞','貝蒂','格尼爾'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0, 1], MAX: 2,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense' && this.defINDEX == 2 && combat.range > 1)
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5];
        else return false;
    },
    /* PROBABILITY SKILL */
    DESC: '[被動]被遠程攻擊時25%概率觸發，部隊受到所有傷害降低50%。(當前[DATA]%)'
},{
    NAME: '鏡花',
    TYPE: ['希琳卡'],
    /* HEAL BEFORE BATTLE */
    /* TRUE DMG */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense' && combat.offSoldier.RANGE == 1) combat.offMOVETYPE = '飛行';
        if(side == 'defense' && combat.defSoldier.RANGE == 1) combat.defMOVETYPE = '飛行';
        else return false;
    },
    DESC: '[被動]攜帶近戰士兵時，部隊移動方式變為「飛行」。被攻擊進入戰鬥後，敵軍對自身造成一次[固定傷害]（傷害數值為敵軍英雄「攻擊」+「智力」的1倍）並恢復希琳卡生命（恢復量為敵軍英雄「攻擊」+「智力」的1倍），若希琳卡處於[休眠]狀態下，則該效果提升為2倍。'
},{
    NAME: '閃現',
    TYPE: ['希琳卡'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense' && combat.offSoldier.RANGE > 1) combat.offMOVETYPE = '飛行';
        if(side == 'defense' && combat.defSoldier.RANGE > 1) combat.defMOVETYPE = '飛行';
        else return false;
    },
    DESC: '[被動]攜帶遠程士兵時，部隊移動方式變為「飛行」。'
},{
    NAME: '隱秘',
    TYPE: ['約書亞','奧利佛','飛影','布琳達','梅雅','西格瑪','雪莉','馬修-影'],
    OCRITRATEINC: 0.1, ODMGDEC: 0.2,
    DESC: '[被動]主動進入戰鬥時，暴擊率提升10%，遭受傷害降低20%。'
},{
    NAME: '漂移',
    TYPE: ['沃爾納'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10];
        else return false;
    },
    DESC: '主動攻擊時，遭受傷害降低10%。戰鬥後，可以獲得再次直線移動的機會，此次移動的格數為剩餘的移動力+2。'
},{
    NAME: '折戟',
    TYPE: ['希爾達'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(combat.range == 1) return [0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '近戰攻擊進入戰鬥時，攻擊提升15%，戰前使敵軍武器技能失效（最大生命值除外），當目標為非玩家英雄時，效果替換為『攻擊、智力降低25%』'
},{
    NAME: '破矢',
    TYPE: ['希爾達'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense' && combat.range > 1 && combat.offDMGTYPE == '物理傷害')
            return [0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10];
        else return false;
    },
    DESC: '被遠程物理攻擊進入戰鬥時，攻擊提升15%，遭受傷害降低10%，並可以對最遠3格距離的遠程物理攻擊進行反擊。'
},{
    NAME: '翡翠魔矢[增傷]',
    TYPE: ['艾拉斯卓'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    DMGINC: 0.1,
    DESC: '每驅散1個弱化狀態，則獲得10%的傷害加成。(當前[DATA]個)'
},{
    NAME: '翡翠破風[增傷]',
    TYPE: ['艾拉斯卓'], ACC: true,
    DATA: [0, 0.01, 0.02], MAX: 2,
    DMGINC: 0.2,
    DESC: '每轉化一個強化狀態，則獲得20%的傷害加成。(當前[DATA]個)'
},{
    NAME: '漆黑之慾[增傷]',
    TYPE: ['雅兒貝德'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    DMGINC: 0.1,
    DESC: '每轉化一個強化狀態，則獲得10%的傷害加成。(當前[DATA]個)'
},{
    NAME: '海衛(被動)',
    TYPE: ['伊露希亞', '古巨拉'],
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [1.4, 0, 1, 0, 0];
    },
    MIDSUB: function(side){
        return [1.4, 0, 1, 0, 0];
    },
    DESC: '[被動]在水中時，用防禦的1.4倍代替攻擊。'
},{
    NAME: '鮮血逆流',
    TYPE: ['妮絲蒂爾'],
    /* REFLECT DMG */
    DESC: '[被動]進入戰鬥時，反彈部隊受到的傷害的15%。如果成功反彈，則在戰鬥後為其他友軍恢復自身部隊最大生命百分比（此百分比為本次戰鬥反彈百分比的50%）。'
}];

