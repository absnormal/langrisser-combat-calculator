/*
    RATE: [ATK, INT, DEF, MDEF, DEX];
    MIDRATE: [ATK, INT, DEF, MDEF, DEX,
              CRITRATEINC, CRITDMGINC, DMGINC,
              CRITRATEDEC, CRITDMGDEC, DMGDEC]
*/
var talent = [{
    NAME: '聖潔的修女',
    DESC: '行動結束時驅散2格內其他友軍2個弱化效果並治療生命值，治療量為自身智力的3倍。',
},{
    NAME: '夥伴的力量',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else friend = combat.def2BFriend;
        if(friend == 0) return false;
        else return [0.15, 0, 0.15, 0, 0];
    },
    DESC: '自身2格範圍有友軍部隊時，攻防提升15%。當友軍死亡時，恢復30%生命，並獲得效果[憤怒]：除生命以外全屬性提升10%，移動力+1，部隊射程+1，持續3回合。（該效果不可驅散）',
},{
    NAME: '魔神之力',
    HEAL: 0.2,
    DESC: '治療量增加20%。<br>範圍技能會令命中的所有格子獲得2回合的特殊效果[生命之息]：“當友軍單位移動至其上，在行動結束時驅散自身1個弱化效果，並治療生命值，治療量為麗可麗絲智力的1倍。',
},{
    NAME: '魔導容器',
    DMGINC: 0.3,
    DESC: '造成傷害提升30%。<br>主動造成傷害以後，在回合結束時驅散3格內其他友軍部隊2個弱化效果，並治療生命值，治療量為蕾伽爾智力的3倍。',
},{
    NAME: '治癒之光',
    DESC: '行動結束時，使周圍2格的友軍獲得[治愈]：戰後100%回復蒂亞莉絲智力3倍的生命。',
},{
    NAME: '聖獸領域',
    /* SOLDIER RELATED */
    DESC: '部隊移動時所有可通過地形都視為“平地”。每損失一個士兵，則英雄獲得遭受傷害降低3%的效果。被攻擊受到傷害後，恢復其他友軍生命。（恢復量為古巨拉當前部隊生命的30%）',
},{
    NAME: '不朽的傳說',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP >= 0.7) return [0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0, 0];
        else return false;
    },
    DESC: '當部隊生命高於和等於70%時獲得效果：傷害提升30%，且無法被一擊致命（每場戰鬥最多觸發3次），並在每次進入戰鬥後，有100%的概率恢復生命，恢復量為部隊造成傷害的30%。',
},{
    NAME: '神力的傳承',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense'){
            perHP = combat.offHP/combat.offFULLHP;
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            perHP = combat.defHP/combat.defFULLHP;
            oppDMGTYPE = combat.offDMGTYPE;
        }
        if(oppDMGTYPE == '物理傷害') return false;
        switch(perHP){
            case 1:
                return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
            /*
             DATA?
             */
            default:
                return false;
        }
    },
    DESC: '部隊血量越高時，減少遭受魔法傷害越多，最多減少30%。並且在遭受致命傷害時不會死亡，之後生命值恢復30%。該效果每場戰鬥最多觸發1次。',
},{
    NAME: '華麗獨舞',
    /* SOLDIER RELATED */
    DESC: '普通攻擊時，英雄的射程增加1。<br>每損失一個士兵，則獲得攻擊、技巧提升4%的效果。',
},{
    NAME: '鋼之聖女',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP >= 0.7) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15];
        else return false;
    },
    DESC: '部隊生命高於70%時，遭受傷害降低15%。受到傷害後或回合結束時處於[危險範圍]內，獲得效果：攻擊提升5%，傷害提升5%，遭受傷害降低5%，移動力+1。可累積，最高可以累積3個。行動結束時，當部隊生命值低於70%，可以額外行動1次。（[觸發冷卻]再行動效果需要間隔2回合才可以再次觸發。）',
},{
    NAME: '不歸之森的妖精',
    DESC: '本次行動每移動1格，則在行動結束時為自身附加智力、防禦提升8%（最高24%），持續1回合。在行動結束時，如果處於[危險範圍]內，且未造成過傷害，則可再次行動。（再行動效果需要間隔2回合才可以再次觸發。）',
},{
    NAME: '天才軍師',
    /* SOLDIER RELATED */
    DESC: '使用輔助技能時射程增加2。<br>士兵全屬性提升20%。<br>英雄死亡時，驅散5格以內所有友軍2個弱化效果，並獲得“死守”：戰前恢復威拉智力5倍的生命，持續3回合。',
},{
    NAME: '帝國遠略',
    /* SOLDIER RELATED */
    DESC: '部隊生命100%時，士兵除生命以外全屬性提升25%，每場戰鬥開始時自身獲得5個[戰謀]。在行動結束時，自身如果擁有“超絕強化”的特殊效果則獲得2個[戰謀]，最高可以累積10個。在行動結束前，可額外釋放一次戰謀技能（[急行]提升目標部隊移動力、[突襲]使目標部隊再次行動、[援軍]恢復目標部隊士兵生命。）',
},{
    NAME: '孤高的意志',
    OATK: 0.15,
    DESC: '主動攻擊時，攻擊提升15%。如果本回合沒有進行攻擊，且自身處於防禦增加的地形上，則可以額外行動1次，同時獲得狀態“狙擊”：部隊射程+2，且無法移動，持續1回合。（[觸發冷卻]該效果無法驅散，且需要間隔2回合才可以再次觸發。）',
},{
    NAME: '森林眷屬',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        switch(run){
            case 0:
                return false;
            case 1:
                return [0, 0, 0, 0, 0, 0.04, 0, 0.04, 0, 0, 0];
            case 2:
                return [0, 0, 0, 0, 0, 0.08, 0, 0.08, 0, 0, 0];
            case 3:
                return [0, 0, 0, 0, 0, 0.12, 0, 0.12, 0, 0, 0];
            case 4:
                return [0, 0, 0, 0, 0, 0.16, 0, 0.16, 0, 0, 0];
            default:
                return [0, 0, 0, 0, 0, 0.20, 0, 0.20, 0, 0, 0];
        }
    },
    DESC: '每移動1格，造成傷害、暴擊率提升4%。（最高20%）<br>通過防禦地形時，可以獲得4格免除移動力降低的機會。',
},{
    NAME: '異星之力',
    DESC: '每對一名敵軍造成傷害後，可以獲得一個“異星之力”:除生命以外全屬性提升4%，可累積，最高可以累積7個。<br>行動結束時，若擁有7個“異星之力”，可以額外行動1次，並在此次行動結束時，將自己傳送至距離最近的友軍身邊，並將身上所有“異星之力”效果清除。',
},{
    NAME: '月民的執念',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        switch(perHP){
            /*
             DATA?
             */
            default:
                return false;
        }
    },
    DESC: '部隊血量越低時，物理傷害越高，最多增加50%。在遭受致命傷害時不會死亡，並獲得效果“不死者”：該狀態生效期間，英雄受到致命傷害時不會死亡，一旦該狀態消失，則英雄在回合結束時直接死亡，持續3回合。不屈效果每場戰鬥最多觸發6次。（該效果無法被免疫和驅散）',
},{
    NAME: '無畏的意志',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') enemy = combat.off3CEnemy;
        else enemy = combat.def3CEnemy;
        switch(enemy){
            case 0:
                return false;
            case 1:
                return [0.05, 0.05, 0.05, 0.05, 0.05];
            case 2:
                return [0.10, 0.10, 0.10, 0.10, 0.10];
            case 3:
                return [0.15, 0.15, 0.15, 0.15, 0.15];
            default:
                return [0.20, 0.20, 0.20, 0.20, 0.20];
        }
    },
    DESC: '周圍3圈內每有1個敵軍，除生命以外全屬性提升5%（最高20%）。移動時無視敵軍單位阻擋。在造成傷害前以及行動結束時，本回合每穿過1個敵軍單位，可以獲得1個[掠陣]效果：“暴擊率提升8%，可累積（最高累積5個）。”；若本回合觸發暴擊，會在行動結束時清空之前獲得的所有[掠陣]效果。',
},{
    NAME: '灰之騎士',
    DESC: '使用技能後，恢復20%生命，並且除生命以外全屬性提升4%，可以累積，最高可以累積5個。<br>當友軍死亡時，所有技能冷卻時間減少1回合。並進入[鬼人]狀態：“傷害提升30%，遭受傷害降低30%，移動力+1，並在對敵方部隊造成傷害後，對其施加1個隨機的弱化效果”，持續2回合。若已經處於[鬼人]狀態下，則此效果替換為延長[鬼人]狀態時間2回合。[鬼人]狀態結束後，獲得“無法使用主動技能”，持續2回合。（若已經死亡超過2名以上友軍時，[鬼人]狀態變為永久持續）（該效果不可免疫和驅散）',
},{
    NAME: '劍之修羅',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off1BFriend;
        else if(side == 'defense') friend = combat.def1BFriend;
        if(friend == 0) return [0.2, 0.2, 0.2, 0.2, 0.2];
        else return false;
    },
    DESC: '周圍1格沒有友軍時，除生命以外全屬性提升20%。若一次攻擊對2名及以上的敵軍造成傷害，則可以恢復50%生命，並額外行動1次。（[觸發冷卻]再行動效果需要間隔2回合才可以再次觸發。）',
},{
    NAME: '霸者的意志',
    DMGINC: 0.2,
    /* COMMAND DEBUFF */
    DESC: '進入戰鬥時，造成傷害提升20%。周圍2格內所有敵軍攻防降低15%。',
},{
    NAME: '孤芳永生',
    DESC:'行動結束時，如果自身2格範圍內沒有友軍部隊，則傷害提升20%，遭受傷害降低20%，持續1回合。若沒有處於[休眠]的狀態時，在遭受致命傷害時不會死亡，之後生命值恢復90%，並進入[休眠]：“無法行動，在效果結束時，恢復50%的生命”，持續1回合。（該效果無法免疫和驅散，每場戰鬥最多觸發1次）',
},{
    NAME: '勇者的意志',
    /* HEAL AFTER BATTLE */
    ODMGINC: 0.3,
    DESC: '主動攻擊進入戰鬥時，傷害提升30%。戰鬥後，有100%概率恢復生命，恢復量為英雄造成傷害的30%。',
},{
    NAME: '劍刃領域',
    DESC: '遭受範圍傷害降低30%。當周圍3格內的一名友軍被攻擊後，對攻擊者造成貝蒂攻擊1倍的[固定傷害]（該效果無法免疫），並有30%的概率對其施加1個隨機的弱化效果。之後提升自身20%攻擊和魔防，持續2回合。',
},{
    NAME: '居合一閃',
    /* FIRST ATTACK */
    DESC: '擊殺敵軍後，除生命以外全屬性提升10%，可以累積，最高可以累積4層。（該效果不可驅散）進入戰鬥前，如果自身技巧高於敵軍，會先於敵軍進行攻擊。',
},{
    /* 乘算 */
    NAME: '王者的意志',
    DMGDEC: 0.15,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        perHP = combat.defHP/combat.defFULLHP;
        if(perHP > 0.5) combat.defHITS *= 2;
        else return false;
    },
    DESC: '遭受所有傷害降低15%。英雄生命50%以上被近戰攻擊進入戰鬥時，可以攻擊2次。',
},{
    NAME: '暗之少年',
    /* TRUE DMG */
    CRITRATE: 0.2,
    DESC: '暴擊率提升20%。造成暴擊後，對敵軍再造成一次[固定傷害]。（數值為英雄攻擊的2倍）。',
},{
    NAME: '捉迷藏',
    CRITRATE: 0.2,
    DESC: '暴擊率提升20%。在行動結束時，如果處於[危險範圍]外，則進入“潛行”狀態：“暴擊率、暴擊傷害提升30%，遭受傷害降低30%，移動力提升4，持續1回合”。',
},{
    NAME: '飛燕之隱',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') enemy = combat.off3BEnemy;
        else if(side == 'defense') enemy = combat.def3BEnemy;
        switch(enemy){
            case 0:
                return false;
            case 1:
                return [0.08, 0, 0, 0, 0.08];
            case 2:
                return [0.16, 0, 0, 0, 0.16];
            default:
                return [0.24, 0, 0, 0, 0.24];
        }
    },
    DESC: '周圍3格內每有1個敵軍，攻擊、技巧提升8%（最高24%）。行動結束時，沒有造成和受到過傷害，且自身周圍2圈沒有敵軍，則獲得[隱匿]：“無法被敵軍普通攻擊及技能鎖定為目標（不可驅散，遭受傷害或造成傷害後，或相鄰1格範圍內有敵軍時，該效果失效）”天賦獲得的[隱匿]失效後需要間隔2回合才可以再次觸發。”',
},{
    NAME: '幻影彗星',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppPerHP  = combat.defHP/combat.defFULLHP;
        else if(side == 'defense') oppPerHP  = combat.offHP/combat.offFULLHP;
        if(oppPerHP >= 0.7) return [0.2, 0, 0, 0, 0, 0.2, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '與生命高於和等於70%的部隊戰鬥時，攻擊和暴擊率提升20%。擊殺敵方部隊後，傳送回攻擊之前所在位置，並可以再次移動3格。',
},{
    NAME: '肉體操縱',
    DESC: '行動結束時，獲得[肉體強化]：攻擊、技巧提升2%，可以累積，最多可以累積15個。主動攻擊進入戰鬥前和擊殺敵軍後，也可獲得以上效果。',
},{
    NAME: '夏湖之花',
    /* NO DIE */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense'){
            oppDMGTYPE = combat.defDMGTYPE;
            terrain = combat.offTerrain;
        }
        else if(side == 'defense'){
            oppDMGTYPE = combat.offDMGTYPE;
            terrain = combat.defTerrain;
        }
        if(terrain == '水' && oppDMGTYPE == '物理傷害')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2];
        else return false;
    },
    DESC: '在水中時，部隊移動方式視作[水行]，同時受到物理傷害降低20%，且在遭受致命傷害時不會死亡，之後生命值恢復20%。該效果每場戰鬥最多觸發1次。被攻擊進入戰鬥後，令敵軍所處地形視為“水中”，持續2回合；若敵軍已經處於“水中”則有50%概率令敵方無法行動，持續1回合。',
},{
    NAME: '王國守護者',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        switch(run){
            case 0:
                return false;
            case 1:
                return [0, 0, 0, 0.2, 0, 0, 0, 0.04, 0, 0, 0];
            case 2:
                return [0, 0, 0, 0.4, 0, 0, 0, 0.08, 0, 0, 0];
            case 3:
                return [0, 0, 0, 0.6, 0, 0, 0, 0.12, 0, 0, 0];
            case 4:
                return [0, 0, 0, 0.8, 0, 0, 0, 0.16, 0, 0, 0];
            default:
                return [0, 0, 0, 1.0, 0, 0, 0, 0.20, 0, 0, 0];
        }
    },
    DESC: '每移動1格，傷害提升4%（最高20%），魔防提升20%（最高100%）。當移動累積20格後，在回合結束時，將自身所有技能冷卻時間清零。',
},{
    NAME: '光之少女',
    DESC: '替相鄰友軍承受物理攻擊。主動攻擊造成傷害後，獲得效果：攻擊、防禦提升15%，護衛範圍提升至2格，持續2回合。行動結束時，令周圍3格的4名其他友軍部隊“造成傷害”提升10%，持續2回合。',
},{
    NAME: '鮮血女王',
    /* NUMBER INTERACTIONS */
    DESC: '將自身魔防的1.5倍代替智力。部隊無視兵種克制。對敵方部隊造成傷害後，施加“傷口詛咒”：被施加的治療直接轉變為治療量50%的傷害，持續1回合。',
},{
    NAME: '聖靈的守護',
    DESC: '當戰場上有部隊陣亡時，則在自己身邊召喚一個[狼魂]，此狼魂的屬性繼承自此部隊將領的屬性，但是不能超過阿卡婭對應屬性的150%。（該效果需要間隔1回合才可以再次觸發，狼魂同時只能存在一隻，且狼魂陣亡同時無法觸發召喚）當狼魂陣亡後，會將其除生命以外全部屬性的20%附加於阿卡婭身上，並恢復阿卡婭的生命，恢復量為狼魂最高生命值的20%。',
},{
    NAME: '戰爭女神',
    SKILLTYPE: ['RATE', 'MIDRATE'],
    RATE: function(side){
        if(side == 'offense') terrain = combat.offTerrain;
        else if(side == 'defense') terrain = combat.defTerrain;
        if(cal_terrain(terrain) == 0) return [0.2, 0, 0, 0, 0];
        else return false;
    },
    MIDRATE: function(side){
        if(side == 'offense') terrain = combat.offTerrain;
        else if(side == 'defense') terrain = combat.defTerrain;
        if(cal_terrain(terrain) == 0) return false;
        else return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2];
    },
    DESC: '在有防禦增加效果的地形上，遭受所有傷害降低20%。反之，攻擊力提升20%。',
},{
    /* 加算 */
    NAME: '風之守護',
    MDEF: 0.2,
    DESC: '魔防提升20%。周圍2格友軍遭受魔法傷害降低30%。',
},{
    NAME: '自由的意志',
    CRITRATEINC: 0.3,
    DESC: '暴擊率提升30%。擊殺敵軍後，觸發[煙霧]:遭受所有傷害降低30%，持續1回合，[觸發冷卻]該效果需要間隔1回合才可以再次觸發。',
},{
    NAME: '傳說的騎士',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        switch(run){
            case 0:
                return false;
            case 1:
                return [0, 0, 0.2, 0, 0, 0, 0, 0.04, 0, 0, 0];
            case 2:
                return [0, 0, 0.4, 0, 0, 0, 0, 0.08, 0, 0, 0];
            case 3:
                return [0, 0, 0.6, 0, 0, 0, 0, 0.12, 0, 0, 0];
            case 4:
                return [0, 0, 0.8, 0, 0, 0, 0, 0.16, 0, 0, 0];
            default:
                return [0, 0, 1.0, 0, 0, 0, 0, 0.20, 0, 0, 0];
        }
    },
    DESC: '每移動1格，傷害提升4%，防禦提升20%，攻擊後，可以再次移動3格。',
},{
    NAME: '黑衣的騎士',
    /* FIRST ATTACK! */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        switch(run){
            case 0:
                return false;
            case 1:
                return [0.04, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0];
            case 2:
                return [0.08, 0, 0.4, 0, 0, 0, 0, 0, 0, 0, 0];
            case 3:
                return [0.12, 0, 0.6, 0, 0, 0, 0, 0, 0, 0, 0];
            case 4:
                return [0.16, 0, 0.8, 0, 0, 0, 0, 0, 0, 0, 0];
            default:
                return [0.20, 0, 1.0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
    },
    DESC: '每移動1格，攻擊提升4%（最高20%），防禦提升20%（最高100%）。進入戰鬥前，如果自身攻擊力高於敵軍，會先於敵軍進行攻擊。',
},{
    NAME: '璨晶的騎士',
    SKILLTYPE: ['RATE', 'MIDRATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return [0, 0, 0.25, 0, 0];
        else return false;
    },
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        switch(run){
            case 0:
                return false;
            case 1:
                return [0, 0, 0, 0, 0, 0, 0, 0.04, 0, 0, 0];
            case 2:
                return [0, 0, 0, 0, 0, 0, 0, 0.08, 0, 0, 0];
            case 3:
                return [0, 0, 0, 0, 0, 0, 0, 0.12, 0, 0, 0];
            case 4:
                return [0, 0, 0, 0, 0, 0, 0, 0.16, 0, 0, 0];
            default:
                return [0, 0, 0, 0, 0, 0, 0, 0.20, 0, 0, 0];
        }
    },
    DESC: '每移動1格，傷害提升4%（最高20%），周圍2格沒有友軍時，防禦提升25%。在行動結束時，使自身本回合經過的所有格子獲得1回合的特殊效果[璨晶]：“當敵軍玩家英雄移動至其上，在行動結束時100%概率獲得「隨機裝備技能失效（最大生命值除外）」，持續2回合。當目標為非玩家英雄時，效果替換為「隨機屬性降低25% 」，持續1回合。”通過具有友方[璨晶]效果的地形時，不消耗移動力（再移動時無效），移動時無視敵軍單位阻擋。',
},{
    NAME: '月下的誓約',
    /* combat neg */
    /* HEAL AFTER BATTLE */
    DESC: '攻擊不受近戰傷害減免影響。主動遠程攻擊後，為其他友軍恢復傑利奧魯&蕾拉攻擊與智力之和的1.5倍生命，並驅散1個弱化狀態。主動近戰攻擊後，為自身部隊恢復造成傷害30%的生命，並令自身“免疫”，持續1回合。',
},{
    NAME: '無懈可擊',
    /* COMMAND */
    DESC: '周圍2格所有友軍除生命以外全屬性提升15%。（該效果與指揮技能不能同生效）',
},{
    NAME: '風華典範',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        offPerHP = combat.offHP/combat.offFULLHP;
        defPerHP = combat.defHP/combat.defFULLHP;
        if(side == 'offense') perHP = offPerHP, oppPerHP = defPerHP;
        else if(side == 'defense') perHP = defPerHP, oppPerHP = offPerHP;
        if(oppPerHP <= perHP) return [0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0, 0];
        else return false;
    },
    DESC: '與生命百分比低於和等於自己的部隊戰鬥時，傷害提升30%。當主動攻擊和被攻擊進入戰鬥的次數累積3次後，在行動結束時，可以額外行動一次。',
},{
    NAME: '光輝的信仰',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP >= 0.5) return [0, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '當生命50%以上進入戰鬥時攻擊、防禦提升20%。進入戰鬥前或行動結束自身2圈範圍內有敵軍時，獲得[信仰]：造成傷害提升5%，遭受傷害降低5%可以累積，最多可以累積3個。（該效果無法被驅散）',
},{
    NAME: '團結的意志',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        range = combat.range;
        if(range > 1) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2];
        else return false;
    },
    DESC: '行動結束時，如果自身3格範圍內有友軍部隊，則攻擊提升20%，並將攻擊的15%增加到防禦和魔防上，持續1回合。被遠程攻擊時，遭受傷害降低20%，並可以對2格距離的遠程攻擊進行反擊。',
},{
    NAME: '魔法裁縫',
    /*
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        DEBUFF RELATED
    },
    */
    DESC: '本部隊有3個以下的弱化狀態時，智力提升15%。第1次行動結束時和英雄死亡時，為所有友軍部隊施加[魔法新衣]：“如果部隊生命值低於80%時，遭受的下一次傷害降低50% ”（該效果無法驅散）',
},{
    NAME: '千年的邪念',
    /* NUMBER INTERACTIONS */
    DESC: '將自身魔防的1.5倍代替智力。對敵軍造成傷害後，100%概率對其施加1個隨機的弱化效果。',
},{
    NAME: '聖樹嘆息',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return false;
        else return [0, 0.15, 0, 0, 0];
    },
    DESC: '如果自身2格範圍有友軍部隊，智力提升15%。釋放範圍技能時，技能範圍+1；釋放直線技能時，技能射程+1；並且範圍技能傷害提升15%。',
},{
    NAME: '秘法延伸',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') dmgtype = combat.offDMGTYPE;
        else if(side == 'defense') dmgtype = combat.defDMGTYPE;
        if(dmgtype == '魔法傷害') return [0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0, 0];
        else return false;
    },
    DESC: '進入戰鬥時，魔法傷害提升30%，使用技能時射程提升1。',
},{
    NAME: '常世之守護',
    /* combat neg */
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off3BFriend;
        else if(side == 'defense') friend = combat.def3BFriend;
        if(friend == 0) return false;
        else return [0, 0.2, 0, 0, 0];
    },
    DESC: '自身3格範圍內有友軍部隊，則智力提升20%。部隊不會受到近戰攻擊減免效果影響。英雄死亡時，驅散自身為中心5格範圍內友軍所有弱化效果。並令命中的所有格子獲得4回合的特殊效果[炫光]：“所有移動方式為[飛行]、[騎行]以及移動時所有可以通過的地形都視為“平地”的敵軍部隊移動至其上時，額外消耗1點移動力。所有移動方式為[步行]、[水行]的友軍部隊移動至其上時，攻擊後可再移動2格。”',
},{
    NAME: '黑暗的意志',
    HP: 0.2,
    DESC: '生命提升20%。主動對敵軍造成傷害後，如果戰場上有基扎洛夫召喚的“構造體”，則對“構造體”實施1次隨機的“改造”。英雄死亡時，召喚一個“構造體”，並對其實施5次隨機的“改造”。',
},{
    NAME: '女神的代行者',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        range = combat.range;
        return [0, 0, 0, 0, 0, 0, 0, 0.08*range, 0, 0, 0];
    },
    DESC: '距離目標越遠，則傷害越高，每相隔多1格距離傷害提高8%。若本回合原地待機，則在行動結束時，獲得「移動力+2 」，持續1回合。',
},{
    NAME: '殲滅天使',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') buffNUM = combat.defDEBUFFLIST.length;
        else if(side == 'defense') buffNUM = combat.offDEBUFFLIST.length;
        if(buffNUM > 0) return [0, 0.15, 0.15, 0.15, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '與帶有“弱化效果”的敵軍交戰時，智力、防禦、魔防提升15%。對敵方部隊造成傷害後，為敵軍施加2個隨機的弱化效果。',
},{
    NAME: '全能女僕',
    SKILLRATE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') enemy = combat.off3BEnemy;
        else if(side == 'defense') enemy = combat.def3BEnemy;
        if(enemy == 0) return false;
        else return [0, 0.15, 0, 0, 0];
    },
    DESC: '周圍3格內有敵軍時，智力提升15%。對敵方部隊主動造成傷害前，有100%概率驅散敵軍1個強化效果並使其遭受傷害提升20%，持續1回合。在行動結束時驅散3格內其他友軍部隊1個弱化效果。',
},{
    NAME: '魔法眷屬',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        switch(perHP){
            case 1:
                return [0, 0.2, 0, 0, 0];
            /*
             DATA?
             */
            default:
                return false;
        }
    },
    DESC: '部隊血量越高時，智力越高，最高提升20%。每當使用技能造成傷害後，該技能的冷卻時間減少3。',
},{
    NAME: '邪眼',
    OATK: 0.15, OCRITRATEINC: 0.15,
    DESC: '主動攻擊進入戰鬥時，攻擊和暴擊率提升15%。進入戰鬥前使敵軍的一項隨機屬性降低30%，持續1回合。被範圍技能攻擊時，如果處於範圍技能的邊緣，則可以免除此次傷害。（該效果，每場戰鬥最多觸發2次）',
},{
    NAME: '植物操縱',
    SKILLRATE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') terrain = combat.offTerrain;
        else if(side == 'defense') terrain = combat.defTerrain;
        terrainLIST = ['樹林', '山地', '草地', '洞穴', '沼澤', '水'];
        if(terrainLIST.includes(terrain)) return [0, 0.2, 0, 0.2, 0];
        else return false;
    },
    DESC: '若自身處於“樹林”“山地”“草地”“洞穴”“沼澤”和“水中”時，智力、魔防提升20%，且在行動結束時，有100%的概率所有技能冷卻減少1。',
},{
    NAME: '無雙的霸主',
    DESC: '每次進入戰鬥前，攻擊提升10%，遭受物理傷害降低5%，持續4回合，最高可以累積4層。',
},{
    NAME: '流浪的公主',
    ODMGINC: 0.2, ODMGDEC: 0.2,
    DESC: '主動攻擊進入戰鬥時，傷害提升20%，遭受傷害降低20%。行動結束時，會將剩餘的初始移動力附加於自身，最高不超過5格。',
},{
    /* 乘算 */
    NAME: '落跑公主',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25];
        else return false;
    },
    DESC: '周圍2格沒有友軍時，遭受所有傷害降低25%。擊殺敵軍後，可以額外行動1次，[觸發冷卻]該效果需要間隔2回合才可以再次觸發。',
},{
    NAME: '復仇龍印',
    DESC: '若周圍1圈有任意友軍被攻擊受到傷害，則自身獲得“移動力”+ 2，持續1回合。並對造成傷害的敵方目標施加[龍印]：“受到來自蕾娜塔的攻擊時，自身無法被護衛且遭受傷害增加40% ”，無法觸發“再移動”類效果，以及“被動技能無法生效”，持續1回合。',
},{
    NAME: '愛即正義',
    /* HEAL AFTER BATTLE */
    DESC: '行動結束時，如果自身3格範圍內存在“女性”友軍或名為“浦飯幽助”的友軍時，遭受物理傷害降低30%，持續1回合。戰鬥結束時如果生命低於40%，可以恢復30%的生命。',
},{
    NAME: '超能靈力',
    DESC: '行動結束時，使周圍2格的其他友軍部隊獲得[夢幻之吻]：行動結束時恢復愛麗絲智力3倍的生命，持續2回合。',
},{
    NAME: '天佑公主',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return false;
        else return [0, 0.2, 0, 0.2, 0];
    },
    DESC: '如果自身周圍2格有友軍部隊，智力、魔防提升20%。當其他英雄護衛梅露帕妮時，戰鬥前可以恢復梅露帕妮智力3倍的生命。',
},{
    NAME: '憐憫之心',
    DESC: '對友軍釋放技能時附加效果:接受治療效果+30%，防禦提升30%。持續2回合。',
},{
    NAME: '變化使',
    DESC: '主動攻擊進入戰鬥後，英雄自身兵種將會變成敵軍英雄的兵種，若本回合進行過兵種的變換，就可以額外行動1次，並且獲得攻擊提升25%效果，持續1回合。[觸發冷卻]該效果需要間隔2回合才可以再次觸發。',
},{
    NAME: '悲傷的決斷',
    /* TRUE DMG */
    CRITRATEDEC: 0.5,
    DESC: '遭受暴擊率降低50%，進入戰鬥前，如果自身生命在50%以上，對敵軍造成一次傷害，傷害數值為英雄防禦的2倍。',
},{
    /* 乘算 */
    NAME: '勇將的神力',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense'){
            perHP = combat.offHP/combat.offFULLHP;
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            perHP = combat.defHP/combat.defFULLHP;
            oppDMGTYPE = combat.offDMGTYPE;
        }
        if(oppDMGTYPE == '魔法傷害') return false;
        if(perHP > 0.8) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
    },
    DESC: '部隊血量越高時，減少遭受物理傷害越多，最多減少30%，並且在遭受致命傷害時不會死亡，之後生命值恢復30%，該效果每場戰鬥最多觸發1次。',
},{
    /* 乘算 */
    NAME: '挺身而出',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP >= 0.6) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '部隊生命60%及以上時，遭受所有傷害降低30%。替3格以內失去士兵的友軍承受所有攻擊。',
},{
    NAME: '戰術牽制',
    OATK: 0.15,
    DESC: '主動攻擊進入戰鬥時，攻擊提升15%，並使得對方的移動力降低3，且無法進行護衛，持續1回合。（[觸發冷卻]該效果需要間隔1回合才可以再次觸發。）',
},{
    NAME: '強大的助力',
    DESC: '行動結束時，為周圍2格所有友軍附加效果:範圍技能傷害提升20%，持續1回合。',
},{
    NAME: '琥珀之愛',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP == 1) return [0.3, 0, 0, 0, 0];
        else return false;
    },
    DESC: '部隊生命100%時，攻擊提升30%。行動結束時，令周圍3格的5名其他友軍“遭受傷害”降低10%，持續2回合。',
},{
    NAME: '禮物',
    DMGINC: 0.2,
    DESC: '造成傷害提升20%。行動結束時，為周圍2格的4名其他友軍，驅散1個弱化狀態，並隨機附加1個強化狀態。',
},{
    NAME: '潔白之翼',
    HEAL: 0.3,
    DESC: '治療效果提升30%。行動結束時，令周圍2格的4名其他友軍隨機附加1個額外的免疫效果，持續2回合',
},{
    NAME: '自由的騎士',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') buffList = combat.offBUFFLIST;
        else if(side == 'defense') buffList = combat.defBUFFLIST;
        for(let i=0; i<buffList.length; i++)
            if(buffList[i].MOVE != undefined)
                return [0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0];
        return false
    },
    DESC: '受到傷害後，獲得效果[猛進]：攻擊、技巧+3%，移動力+1，持續2回合，可累積，最高可以累積3個。當自身擁有移動力提升的強化效果時造成的傷害提升20%。',
},{
    NAME: '新晉!兩棲勇士',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        switch(run){
            case 0:
                return false;
            case 1:
                return [0.05, 0.05, 0.05, 0.05, 0.05, 0, 0, 0, 0, 0, 0];
            case 2:
                return [0.10, 0.10, 0.10, 0.10, 0.10, 0, 0, 0, 0, 0, 0];
            case 3:
                return [0.15, 0.15, 0.15, 0.15, 0.15, 0, 0, 0, 0, 0, 0];
            case 4:
                return [0.20, 0.20, 0.20, 0.20, 0.20, 0, 0, 0, 0, 0, 0];
            default:
                return [0.25, 0.25, 0.25, 0.25, 0.25, 0, 0, 0, 0, 0, 0];
        }
    },
    DESC: '每移動1格，除生命以外全屬性提升5%。（最高25%）通過“水”、“沼澤”、“激流”時，可以獲得5格免除移動力降低的機會。',
},{
    NAME: '二刀流',
    /* HEAL AFTER BATTLE */
    CRITRATEINC: 0.15,
    DESC: '暴擊率提升15%。進入戰鬥時如果觸發暴擊，戰後恢復傷害30%的生命。同時100%概率使技能冷卻時間減少1回合。',
},{
    NAME: '獨行勇者',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        switch(friend){
            case 0:
                return [0.25, 0.25, 0.25, 0.25, 0.25];
            case 1:
                return [0.20, 0.20, 0.20, 0.20, 0.20];
            case 2:
                return [0.15, 0.15, 0.15, 0.15, 0.15];
            case 3:
                return [0.10, 0.10, 0.10, 0.10, 0.10];
            case 4:
                return [0.05, 0.05, 0.05, 0.05, 0.05];
            default:
                return false;
        }
    },
    DESC: '除生命以外全屬性提升25%，自身周圍2格每有1名友軍，全屬性降低5%（最多降低25%）。進入戰鬥前，如果自身技巧高於敵軍，會偷取1個強化狀態。',
},{
    NAME: '狼性',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') buffList = combat.offBUFFLIST;
        else if(side == 'defense') buffList = combat.defBUFFLIST;
        switch(buffList.length){
            case 0:
                return false;
            case 1:
                return [0.07, 0, 0.07, 0, 0];
            case 2:
                return [0.14, 0, 0.14, 0, 0];
            default:
                return [0.21, 0, 0.21, 0, 0];
        }
    },
    DESC: '身上每有一個強化狀態，則攻防提升7%，最高可以提升21%。如果發生了暴擊，戰鬥後偷取對方身上的2個強化狀態。',
},{
    NAME: '暗之國的黑妖精',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combat.offFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combat.defFULLHP;
        if(perHP < 1) return [0.3, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '部隊生命低於100%時，攻擊、技巧提升30%。進入戰鬥前，如果自身技巧高於敵軍，會給敵軍附加1個強力弱化狀態。',
},{
    NAME: '魔性之血',
    DESC: '每次擊殺一個敵軍，可以再次移動3格。同時自身攻擊、智力、防禦、魔防提升20%，持續3回合，最高可以累積2層。',
},{
    /* 加算 */
    NAME: '智將的帷幕',
    OATK: 0.2, DDMGDEC: 0.2,
    DESC: '主動攻擊時，攻擊提升20%，被攻擊時，遭受傷害降低20%。周圍2格內所有敵軍移動力降低2，且無法進行護衛。',
},{
    NAME: '情報分析',
    DESC: '行動結束時，令周圍4格內的3名敵軍部隊的防禦和魔防中數值較高的一項屬性降低10%，持續1回合。並令周圍3格內的4名其他友軍部隊的防禦和魔防中數值較低的一項屬性提升10%，持續1回合。<b>看「當前值」決定高低</b>',
},{
    NAME: '女將軍的鐵腕',
    DMGINC: 0.2,
    DESC: '本部隊造成傷害提升20%。行動結束時，使周圍2格4個友軍獲得[鐵腕]:主動攻擊進入戰鬥時，英雄傷害提升20%，戰後損失10%生命。',
},{
    NAME: '魔法創造',
    DESC: '行動結束時，為自身3格範圍內2個敵軍附加“魔法爆彈”:在行動結束後，受到一次施法者智力的4倍的[固定傷害]。',
},{
    NAME: '解析滲透',
    /* SOLDIER RELATED */
    DESC: '進入戰鬥前，自身攜帶的士兵兵種將會變成敵軍士兵的兵種。行動結束時，恢復自身士兵100%的生命。',

},{
    NAME: '烈焰纏繞',
    /* TRUE DMG */
    DESC: '主動對敵軍造成傷害後，額外造成一次[固定傷害]，傷害值為智力的2倍。',
},{
    NAME: '累積的知識',
    DESC: '每次行動結束時，智力提升6%，持續5回合，最高可以累積4層。',
},{
    NAME: '空騎統帥',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppARMY = getArmy('defense');
        else if(side == 'defense') oppARMY = getArmy('offense');
        armyLIST = ['飛兵', '騎兵'];
        if(armyLIST.includes(oppARMY)) return [0.3, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '對戰“飛兵”與“騎兵”部隊時，攻擊和防禦提升30%。',
},{
/*
    DESC: '如果自身2格範圍有友軍部隊，攻擊、防禦提升15%。行動結束時，使周圍2格以內4個其他友軍「移動力」提升1，持續1回合。',
},{
    DESC: '自身部隊生命提升20%。對友軍釋放技能時都會附加1個額外的隨機強化效果。',
},{
    DESC: '部隊血量越低時，減少遭受物理傷害越多，最多減少40%。',
},{
    DESC: '在水中戰鬥時，攻擊、防禦提升15%。行動結束時，如果部隊在水中，恢復自身部隊40%生命。',
},{
    DESC: '主動攻擊進入戰鬥前，部隊攻擊、防禦提升15%，持續1回合，且戰後100%概率恢復部隊30%生命值。',
},{
    DESC: '暴擊率提升20%，暴擊傷害提升20%。',
},{
    DESC: '本部隊在水中戰鬥時攻擊提升30%。',
},{
    DESC: '當生命80%以上主動進入戰鬥時本部隊攻擊和防禦各提升30%。',
},{
    DESC: '生命值50%以上時進入戰鬥，遭受傷害降低30%。',
},{
    DESC: '主動攻擊進入戰鬥前，100%概率使得敵軍的防禦力降低30%，持續1回合。',
},{
    DESC: '部隊生命100%時，智力提升15%。自身智力的40%會額外附加到魔防上。',
},{
    DESC: '被攻擊時，遭受物理傷害降低30%。',
},{
*/
    NAME: '吐槽大師',
    DESC: '行動結束時，對4格以內的4個敵軍施加1個隨機的弱化效果。並為生命最低的其他友軍部隊恢復生命，恢復量為艾梅達智力的2.5倍。',
},{
    NAME: '堅忍的反擊',
    DESC: '被攻擊進入戰鬥時，戰後100%的概率觸發，自身攻防提升10%，持續2回合，最高可以累積3層。',
},{
    NAME: '友情的羈絆',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') friend = combat.off3BFriend;
        else if(side == 'defense') friend = combat.def3BFriend;
        if(friend == 0) return false;
        else return [0.2, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '進入戰鬥時，如果自身3格範圍有友軍，100%概率觸發攻防提升20%。',
}];

