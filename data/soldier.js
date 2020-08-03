/* HEROHEAL, HERODMGINC,
 * HEALED, ATKRATE, CRITRATE, DMGINC, DMGDEC,
 * OATKRATE, ODEFRATE, OMDEFRATE, ODMGDEC, OCRITRATE,
 * DATKRATE, DDEFRATE
 * */
var soldier = [{
    NAME: '驅魔師',
    HP: 40, ATK: 37, DEF: 22, MDEF: 23,
    ARMY: '僧侶', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '和魔物戰鬥時，攻擊提升30%。和非魔物戰鬥時，防禦提升30%。'
},{
    NAME: '森林祭司',
    HP: 40, ATK: 31, DEF: 20, MDEF: 23,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '魔法傷害',
    HEROHEAL: 0.15,
    DESC: '普通攻擊造成「魔法傷害」。英雄施加的治療效果提升15%。英雄對友軍釋放技能時，有100%幾率驅散1個弱化狀態。'
},{
    NAME: '狂熱者',
    HP: 36, ATK: 40, DEF: 20, MDEF: 20,
    ARMY: '僧侶', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命高於80%時，身上每有一個強化狀態，則士兵攻擊、防禦、魔防提升15%。（最高提升45%）'
},{
    NAME: '巫女',
    HP: 36, ATK: 31, DEF: 17, MDEF: 28,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '魔法傷害',
    DESC: '普通攻擊造成「魔法傷害」。士兵生命100%時，英雄遭受物理傷害降低75%'
},{
    NAME: '神官',
    HP: 34, ATK: 31, DEF: 20, MDEF: 28,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '魔法傷害',
    HEROHEAL: 0.15,
    DESC: '普通攻擊造成「魔法傷害」，英雄施加的治療效果+15%。士兵生命>80%時，防禦提升30%。'
},{
    NAME: '地精騎士',
    HP: 36, ATK: 43, DEF: 20, MDEF: 20,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害',
    CRITRATE: 0.3,
    DESC: '士兵暴擊率提升30%，如果發生暴擊，戰鬥後偷取敵軍1個強化效果並施加1個強力弱化效果。'
},{
    NAME: '神官騎士',
    HP: 36, ATK: 34, DEF: 22, MDEF: 26,
    ARMY: '僧侶', RANGE: 2, DMGTYPE: '魔法傷害',
    HEROHEAL: 0.15,
    DESC: '普通攻擊造成「魔法傷害」，英雄施加的治療效果提升15%。士兵生命>80時，防禦提升30%。'
},{
    NAME: '武士',
    HP: 40, ATK: 40, DEF: 22, MDEF: 22,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害',
    DESC: '部隊攻擊不受近戰傷害減免。近戰攻擊時，攻擊提升20%，遠程攻擊時，暴擊率提升20%。'
},{
    NAME: '暗殺者',
    HP: 40, ATK: 40, DEF: 20, MDEF: 20,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害',
    CRITRATE: 0.3, ATKRATE: 0.15,
    DESC: '暴擊率提升30%，攻擊提升15%。'
},{
    NAME: '緋霧女侍',
    HP: 40, ATK: 37, DEF: 22, MDEF: 26,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害',
    CRITRATE: 0.45,
    DESC: '暴擊率提升45%，暴擊後對敵軍施加1個強力弱化效果。'
},{
    NAME: '影侍',
    HP: 36, ATK: 43, DEF: 20, MDEF: 20,
    ARMY: '刺客', RANGE: 2, DMGTYPE: '物理傷害',
    CRITRATE: 0.3,
    DESC: '暴擊率提升30%，暴擊後對敵軍造成部隊生命上限20%的傷害。'
},{
    NAME: '天空射手',
    HP: 36, ATK: 40, DEF: 17, MDEF: 23,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害',
    OATKRATE: 0.3,
    DESC: '使本部隊的移動不受地形的影響。主動進入戰鬥時，攻擊提升30%。'
},{
    NAME: '旋風遊騎兵',
    HP: 40, ATK: 37, DEF: 22, MDEF: 19,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害',
    DESC: '生命大於50%時，被攻擊時進入戰鬥前有100%的概率觸發，遭受傷害降低50%。'
},{
    NAME: '突襲弩騎兵',
    HP: 36, ATK: 37, DEF: 20, MDEF: 20,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害',
    DESC: '主動進入戰鬥前，75%概率使敵軍移動力降低2，防禦降低20%，持續1回合。'
},{
    NAME: '火弩狙擊手',
    HP: 34, ATK: 40, DEF: 19, MDEF: 23,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害',
    OATKRATE: 0.3,
    DESC: '主動進入戰鬥時，攻擊提升30%，戰後額外造成對方生命上限15%的傷害。'
},{
    NAME: '大精靈',
    HP: 34, ATK: 40, DEF: 19, MDEF: 23,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害',
    DESC: '在「樹林」和「山地」時，攻防提升30%。'
},{
    NAME: '矮人冒險者',
    HP: 34, ATK: 37, DEF: 17, MDEF: 20,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害',
    HERODMGINC: 0.15, DMGINC: 0.15,
    DESC: '英雄的技能選取形式全部變為直線型。部隊傷害提升15%。'
},{
    NAME: '暗精靈射手',
    HP: 31, ATK: 40, DEF: 17, MDEF: 26,
    ARMY: '弓兵', RANGE: 2, DMGTYPE: '物理傷害',
    DESC: '攻擊100%生命值的部隊時，進入戰鬥後攻擊和防禦提升45%'
},{
    NAME: '投石車',
    HP: 31, ATK: 37, DEF: 17, MDEF: 20,
    ARMY: '弓兵', RANGE: 3, DMGTYPE: '物理傷害',
    HERODMGINC: -0.1,
    DESC: '部隊普攻射程提升1。主動進入戰鬥時，部隊傷害降低10%，20%概率造成強力弱化效果。'
},{
    NAME: '樹人守衛',
    HP: 43, ATK: 43, DEF: 23, MDEF: 17,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    HEALED: 0.3,
    DESC: '士兵遭受治療效果提升30%。士兵生命100%時，攻擊、防禦、魔防提升45%。 '
},{
    NAME: '近衛槍兵',
    HP: 43, ATK: 40, DEF: 23, MDEF: 17,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命低於70%時，攻擊提升45%。'
},{
    NAME: '姬武神',
    HP: 40, ATK: 43, DEF: 22, MDEF: 20,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    OATKRATE: 0.3,
    DESC: '主動進入戰鬥時，攻擊提升30%，75%概率使敵軍攻防降低20%，持續1回合。'
},{
    NAME: '暗影百夫長',
    HP: 48, ATK: 40, DEF: 26, MDEF: 16,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命高於10%時，被攻擊進入戰鬥時，戰後100%概率觸發英雄的[倒刺]傷害。'
},{
    NAME: '岩石巨人',
    HP: 48, ATK: 34, DEF: 28, MDEF: 18,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命低於70%時，遭受所有傷害降低30%。'
},{
    NAME: '重戟百夫長',
    HP: 48, ATK: 37, DEF: 23, MDEF: 17,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    DATKRATE: 0.3, DDEFRATE: 0.3,
    DESC: '被攻擊進入戰鬥時，攻擊和防禦提升30%'
},{
    NAME: '熔岩巨人',
    HP: 53, ATK: 34, DEF: 26, MDEF: 19,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '行動結束時，對2格內1個敵軍施加[灼燒]:行動結束損失30%的生命。'
},{
    NAME: '水晶塑型者',
    HP: 48, ATK: 34, DEF: 22, MDEF: 22,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '行動結束時，恢復土兵30%的生命，被魔法攻擊進入戰鬥時，部隊反彈受到傷害的30%。'
},{
    NAME: '重裝槍兵',
    HP: 48, ATK: 37, DEF: 26, MDEF: 16,
    ARMY: '槍兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '遭受物理傷害降低30%。'
},{
    NAME: '重裝步兵',
    HP: 43, ATK: 40, DEF: 23, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    OATKRATE: 0.3, DDEFRATE: 0.3,
    DESC: '主動進入戰鬥時，士兵攻擊提升30%。被攻擊進入戰鬥時，士兵防禦提升30%。'
},{
    NAME: '狂戰士',
    HP: 40, ATK: 43, DEF: 22, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    CRITRATE: 0.3, ATKRATE: 0.15,
    DESC: '暴擊率提升30%，攻擊提升15%。'
},{
    NAME: '近衛步兵',
    HP: 53, ATK: 37, DEF: 23, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命高於80%時，防禦提升45%。'
},{
    NAME: '假面女僕',
    HP: 36, ATK: 40, DEF: 23, MDEF: 23,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '進入戰鬥前，損失部隊當前生命的5%，使得士兵攻擊、防禦、魔防提升45%'
},{
    NAME: '高地勇士',
    HP: 43, ATK: 40, DEF: 22, MDEF: 20,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    ATKRATE: 0.15, DMGDEC: 0.15,
    DESC: '攻擊提升15%，遭受所有傷害降低15%。'
},{
    NAME: '素體改造人',
    HP: 40, ATK: 43, DEF: 22, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    DMGINC: 0.3,
    DESC: '主動攻擊時，可以隨英雄遠程攻擊一起戰鬥，並且土兵造成傷害提升30%。'
},{
    NAME: '王女親衛',
    HP: 43, ATK: 40, DEF: 22, MDEF: 23,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    DATKRATE: 0.3,
    DESC: '被攻擊時，士兵射程+1，攻擊提升30%，遭受魔法傷害降低30%。'
},{
    NAME: '食人巨魔',
    HP: 48, ATK: 43, DEF: 20, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '攻擊生命值低於本部隊的敵軍時，進入戰鬥後攻擊與防禦各提升30%。'
},{
    NAME: '暗黑衛隊',
    HP: 53, ATK: 37, DEF: 23, MDEF: 19,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '主動進入戰鬥時，戰後造成對方部隊生命上限15%傷害，本部隊生命值恢復30%。'
},{
    NAME: '狂獸人',
    HP: 43, ATK: 40, DEF: 22, MDEF: 17,
    ARMY: '步兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命高於80%時攻擊提升45%。'
},{
    NAME: '海怪',
    HP: 43, ATK: 40, DEF: 23, MDEF: 19,
    ARMY: '水兵', RANGE: 2, DMGTYPE: '物理傷害',
    DESC: '在水中時，攻擊50%生命值以上的部隊時，進入戰鬥後攻擊提升45%。'
},{
    NAME: '人魚統領',
    HP: 43, ATK: 40, DEF: 23, MDEF: 19,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '在水中時，攻擊與防禦提升30%。'
},{
    NAME: '龍蝦巨獸',
    HP: 43, ATK: 37, DEF: 26, MDEF: 16,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '在水中時，遭受所有傷害降低50%'
},{
    NAME: '潮汐精靈',
    HP: 43, ATK: 37, DEF: 23, MDEF: 22,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '魔法傷害',
    DESC: '普通攻擊造成「魔法傷害」。在水中時，士兵遭受物理傷害降低45%，攻擊提升20%。'
},{
    NAME: '蜥蜴刀客',
    HP: 40, ATK: 43, DEF: 23, MDEF: 19,
    ARMY: '水兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '在水中時，攻擊提升45%。'
},{
    NAME: '魔女',
    HP: 34, ATK: 40, DEF: 17, MDEF: 28,
    ARMY: '法師', RANGE: 2, DMGTYPE: '魔法傷害',
    DESC: '普通攻擊造成「魔法傷害」。士兵生命100%時，攻擊、魔防提升45%'
},{
    NAME: '魔晶術士',
    HP: 43, ATK: 37, DEF: 22, MDEF: 19,
    ARMY: '法師', RANGE: 2, DMGTYPE: '魔法傷害',
    DESC: '普通攻擊造成「魔法傷害」。行動結束時，恢復士兵30%的生命。被物理攻擊進入戰鬥時，部隊反彈受到傷害的30%。'
},{
    NAME: '男巫',
    HP: 34, ATK: 37, DEF: 19, MDEF: 23,
    ARMY: '法師', RANGE: 2, DMGTYPE: '魔法傷害',
    OATKRATE: 0.3, OMDEFRATE: 0.3,
    DESC: '普通攻擊造成「魔法傷害」。主動攻擊時，攻擊、魔防提升30%。'
},{
    NAME: '皇家獅鷲',
    HP: 40, ATK: 45, DEF: 20, MDEF: 23,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命大於80%時，攻擊與防禦提升30%。'
},{
    NAME: '吸血蝙蝠',
    HP: 43, ATK: 45, DEF: 22, MDEF: 22,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '主動進入戰鬥時，戰後士兵可以恢復造成傷害45%的生命。'
},{
    NAME: '鋼翼勇士',
    HP: 43, ATK: 45, DEF: 22, MDEF: 22,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害',
    OATKRATE: 0.3,
    DESC: '主動攻擊時，士兵攻擊提升30%。被遠程攻擊時，士兵防禦、魔防提升30%。'
},{
    NAME: '天使',
    HP: 43, ATK: 43, DEF: 22, MDEF: 26,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '遭受魔法傷害降低45%。士兵生命大於50%時，攻防提升20%。'
},{
    NAME: '石像鬼',
    HP: 43, ATK: 45, DEF: 22, MDEF: 22,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命大於50%時，攻擊提升30%，士兵生命小於50%時，防禦提升30%。'
},{
    NAME: '聖天馬',
    HP: 40, ATK: 43, DEF: 23, MDEF: 23,
    ARMY: '飛兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命大於50%時，主動攻擊進入戰鬥前，100%的概率遭受傷害降50%。'
},{
    NAME: '地獄犬',
    HP: 40, ATK: 45, DEF: 20, MDEF: 19,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '主動進入戰鬥時，戰後使得周圍2格範圍內的所有敵軍遭受傷害提升20%。'
},{
    NAME: '骨犀',
    HP: 36, ATK: 45, DEF: 20, MDEF: 19,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命高於80%時，攻擊提升45%。'
},{
    NAME: '重裝騎兵',
    HP: 40, ATK: 43, DEF: 22, MDEF: 17,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    ATKRATE: 0.2,
    DESC: '攻擊提升20%。'
},{
    NAME: '皇家騎兵',
    HP: 43, ATK: 43, DEF: 23, MDEF: 17,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '士兵生命高於80%時，遭受物理傷害降低45%。'
},{
    NAME: '龍騎兵',
    HP: 43, ATK: 43, DEF: 22, MDEF: 19,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    OATKRATE: 0.3, ODEFRATE: 0.3,
    DESC: '主動進入戰鬥時，攻擊與防禦提升30%。'
},{
    NAME: '近衛騎兵',
    HP: 43, ATK: 40, DEF: 23, MDEF: 17,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    ODMGDEC: 0.45,
    DESC: '主動進入戰鬥時，遭受的所有傷害降低45%。'
},{
    NAME: '獨角獸',
    HP: 43, ATK: 43, DEF: 22, MDEF: 22,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '魔法傷害',
    DESC: '普通攻擊造成「魔法傷害」。部隊移動不受地形影響，在「樹林」、「山地」和「草地」戰鬥時攻擊、魔防提升30%。'
},{
    NAME: '天琴親衛',
    HP: 36, ATK: 43, DEF: 22, MDEF: 22,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '攻擊前每移動一格，士兵攻擊提升15%。(上限45%) '
},{
    NAME: '聖殿騎士',
    HP: 40, ATK: 40, DEF: 22, MDEF: 26,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '和[魔物]戰鬥時攻防提升45%。魔防提升45%。'
},{
    NAME: '魔蠍',
    HP: 43, ATK: 43, DEF: 23, MDEF: 17,
    ARMY: '騎兵', RANGE: 1, DMGTYPE: '物理傷害',
    OATKRATE: 0.15, OCRITRATE: 0.3,
    DESC: '主動攻擊時，士兵攻擊提升15%，暴擊率提升30%。在「沙漠」、「沙丘」和「洞穴」戰鬥時遭受傷害降低30%。'
},{
    NAME: '重裝骷髏',
    HP: 43, ATK: 40, DEF: 22, MDEF: 19,
    ARMY: '魔物', RANGE: 1, DMGTYPE: '物理傷害',
    DDEFRATE: 0.3,
    DESC: '亡者蘇生：士兵生命為0%時，主動進入戰鬥時，戰後恢復45%的生命；被攻擊進入戰鬥時，防禦提升30%。(除魔物和僧侶以外) '
},{
    NAME: '火焰骷髏弓手',
    HP: 34, ATK: 40, DEF: 20, MDEF: 19,
    ARMY: '魔物', RANGE: 2, DMGTYPE: '物理傷害',
    DESC: '亡者蘇生:士兵生命為0%時，主動進入戰鬥時，戰後恢復45%的生命；戰鬥後，額外造成對方部隊生命上限15%的傷害。'
},{
    NAME: '死靈騎士',
    HP: 40, ATK: 40, DEF: 22, MDEF: 20,
    ARMY: '魔物', RANGE: 1, DMGTYPE: '物理傷害',
    DESC: '亡者蘇生：士兵生命為0%時，主動進入戰鬥時，戰後恢復15%的生命；攻擊魔物和僧侶之外的部隊時        ，攻擊提升10%。'
},{
    NAME: '蛛魔精靈',
    HP: 43, ATK: 37, DEF: 22, MDEF: 22,
    ARMY: '魔物', RANGE: 1, DMGTYPE: '魔法傷害',
    DESC: '普通攻擊造成「魔法傷害」。主動攻擊前75%概率使敵方部隊移動力-2，魔防-20%，持續1回合。'
}];
