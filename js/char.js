/* 英雄天賦加減數值，士兵補正，最終職業&數字&大心 */
var char = [{
    NAME: '莉亞娜', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '行動結束時驅散2格內其他友軍2個弱化效果並治療生命值，治療量為自身智力的3倍。',
    JOB1:'先知', ARMY1: '僧侶',
    JOB1DISCA:'部隊生命低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'隱士', ARMY2: '法師',
    JOB2DISCA:'受到遠程攻擊時，遭受魔法傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '拉娜', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '進入戰鬥時，魔法傷害提升30%，使用技能時射程提升1。',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'受到具有「弱化效果」的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2:'黑暗公主', ARMY2: '法師',
    JOB2DISCA:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '芙蕾雅', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.4, SOLDMDEFPLUS:0.1,
    TALENT: '遭受暴擊率降低50%，進入戰鬥前，如果自身生命在50%以上，對敵軍造成一次傷害，傷害數值為英雄防禦的2倍。',
    JOB1:'女武神', ARMY1: '僧侶',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'受到攻擊時，士兵傷害提升20%。',
    JOB2:'皇家衛士', ARMY2: '槍兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊時，士兵傷害提升20%。'
},{
    NAME: '雪莉', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '周圍2格沒有友軍時，遭受所有傷害降低25%。擊殺敵軍後，可以額外行動1次，[觸發冷卻]該效果需要間隔2回合才可以再次觸發。',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'大統帥', ARMY2: '刺客',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '#', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '#',
    JOB1:'A', ARMY1: 'A',
    JOB1DISCA:'時，%。',
    JOB1DISCB:'時，%。',
    JOB2:'B', ARMY2: 'A',
    JOB2DISCA:'時，%。',
    JOB2DISCB:'時，%。'
}];

