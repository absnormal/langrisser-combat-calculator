/* 英雄天賦加減數值，士兵補正，最終職業&數字&大心 */
var char = [{
    NAME: '莉亞娜', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '聖潔的修女',
    JOB1:'先知', ARMY1: '僧侶',
    JOB1DISCA:'部隊生命低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'隱士', ARMY2: '法師',
    JOB2DISCA:'受到遠程攻擊時，遭受魔法傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '浦飯幽助', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '夥伴的力量',
    JOB1:'靈界偵探', ARMY1: '僧侶',
    JOB1DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'魔界王選', ARMY2: '魔物',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '麗可麗絲', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.35,
    TALENT: '魔神之力',
    JOB1:'魔王化身', ARMY1: '魔物',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'影依聖女', ARMY2: '僧侶',
    JOB2DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾伽爾', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.4,
    TALENT: '魔導容器',
    JOB1:'魔能核心', ARMY1: '法師',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'遭受範圍傷害降低10%。',
    JOB2:'神使', ARMY2: '僧侶',
    JOB2DISCA:'部隊血量100%時，傷害提高10%。',
    JOB2DISCB:'治療效果+10%。'
},{
    NAME: '蒂亞莉絲', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.4, SOLDMDEFPLUS:0.4,
    TALENT: '治癒之光',
    JOB1:'聖女騎士', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2:'獨角獸統帥', ARMY2: '法師',
    JOB2DISCA:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '古巨拉', JOBS: 3,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '聖獸領域',
    JOB1:'貝希摩斯', ARMY1: '騎兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'海德拉', ARMY2: '水兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB3:'巴哈姆特', ARMY3: '龍',
    JOB3DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB3DISCB:'受到攻擊時，士兵傷害提升20%。'
},{
    NAME: '尤莉婭', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '不朽的傳說',
    JOB1:'女神之刃', ARMY1: '僧侶',
    JOB1DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'聖劍公主', ARMY2: '步兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。'
},{
    NAME: '艾米莉亞', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.35,
    TALENT: '神力的傳承',
    JOB1:'聖槍統帥', ARMY1: '槍兵',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2:'聖騎統帥', ARMY2: '僧侶',
    JOB2DISCA:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '神崎堇', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '華麗獨舞',
    JOB1:'光武·改', ARMY1: '騎兵',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於50%時，傷害提升10%。',
    JOB2:'鳳凰之舞(職業)', ARMY2: '槍兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'與血量百分比高於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: '雅里安洛德', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.35,
    TALENT: '鋼之聖女',
    JOB1:'槍之聖女', ARMY1: '槍兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'鋼之聖女', ARMY2: '僧侶',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '蒂德莉特', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.35,
    TALENT: '不歸之森的妖精',
    JOB1:'精靈劍士', ARMY1: '步兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'高等精靈', ARMY2: '法師',
    JOB2DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'治療效果+10%。'
},{
    NAME: '維拉', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.35,
    TALENT: '天才軍師',
    JOB1:'軍師', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提升10%。',
    JOB2:'先知', ARMY2: '僧侶',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '弗洛朗蒂婭', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.2,
    TALENT: '帝國遠略',
    JOB1:'軍師', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2:'帝國宰相', ARMY2: '法師',
    JOB2DISCA:'部隊血量100%時，傷害提升10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '西格瑪', JOBS: 2,
    SOLDHPPLUS:0.3, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.2,
    TALENT: '孤高的意志',
    JOB1:'劍鬥統帥', ARMY1: '步兵',
    JOB1DISCA:'受到遠程攻擊時，進入戰鬥後，遭受傷害降低10%。',
    JOB1DISCB:'近戰攻擊時，進入戰鬥後傷害提升10%。',
    JOB2:'遊俠', ARMY2: '弓兵',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '艾拉斯卓', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '森林眷屬',
    JOB1:'狼騎統帥', ARMY1: '弓兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'遊俠', ARMY2: '弓兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雷因法魯斯', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '異星之力',
    JOB1:'劍聖', ARMY1: '步兵',
    JOB1DISCA:'受到遠程攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，暴擊傷害提升10%。',
    JOB2:'異星王子', ARMY2: '刺客',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '維拉玖', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.1,
    TALENT: '月民的執念',
    JOB1:'海鬥統帥', ARMY1: '水兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'劍士統帥', ARMY2: '步兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。'
},{
    NAME: '阿雷斯', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.15,
    TALENT: '無畏的意志',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'皇帝', ARMY2: '步兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，暴擊傷害提升10%。'
},{
    NAME: '黎恩', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.3,
    TALENT: '灰之騎士',
    JOB1:'劍聖', ARMY1: '步兵',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於50%時，傷害提升10%。',
    JOB2:'灰之英雄', ARMY2: '步兵',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '萊恩哈特', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.35,
    TALENT: '劍之修羅',
    JOB1:'劍帝', ARMY1: '步兵',
    JOB1DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'修羅', ARMY2: '步兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '巴恩哈特', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.15,
    TALENT: '霸者的意志',
    JOB1:'勇者', ARMY1: '步兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇帝', ARMY2: '步兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '希琳卡', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.15,
    TALENT: '孤芳永生',
    JOB1:'破滅之翼', ARMY1: '弓兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'劍聖', ARMY2: '步兵',
    JOB2DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10 %。'
},{
    NAME: '艾爾文', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '勇者的意志',
    JOB1:'英雄', ARMY1: '步兵',
    JOB1DISCA:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2:'大元帥', ARMY2: '槍兵',
    JOB2DISCA:'血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: '貝蒂', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.2,
    TALENT: '劍刃領域',
    JOB1:'皇后', ARMY1: '步兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'劍士統帥', ARMY2: '步兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '真宮寺櫻', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.2,
    TALENT: '居合一閃',
    JOB1:'光武·改', ARMY1: '騎兵',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'破邪劍征', ARMY2: '步兵',
    JOB2DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊時，傷害提升10%。'
},{
    NAME: '雷丁', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.2,
    TALENT: '王者的意志',
    JOB1:'聖騎統帥', ARMY1: '僧侶',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'受到具有“強化效果”的部隊攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'王者', ARMY2: '步兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '約書亞', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.3,
    TALENT: '暗之少年',
    JOB1:'漆黑之牙', ARMY1: '魔物',
    JOB1DISCA:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB1DISCB:'部隊血量100%時，暴擊率提升10%。',
    JOB2:'影', ARMY2: '刺客',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'部隊血量100%時，傷害提升10%。'
},{
    NAME: '澤瑞達', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '捉迷藏',
    JOB1:'混沌化身', ARMY1: '魔物',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'影', ARMY2: '刺客',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '燕', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '飛燕之隱',
    JOB1:'影', ARMY1: '刺客',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'遊俠', ARMY2: '弓兵',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '歐米伽', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.25,
    TALENT: '幻影彗星',
    JOB1:'大統帥', ARMY1: '刺客',
    JOB1DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'遊俠', ARMY2: '弓兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '戶愚呂兄弟', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '肉體操縱',
    JOB1:'力·100%', ARMY1: '魔物',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提升10%。',
    JOB2:'武態·劍', ARMY2: '騎兵',
    JOB2DISCA:'本部隊有10個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2DISCB:'本部隊有10個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '伊露希亞', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '夏湖之花',
    JOB1:'皇家衛士', ARMY1: '槍兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊時，士兵傷害提升20%。',
    JOB2:'海騎統帥', ARMY2: '水兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'在水中時，物理傷害提升10%。'
},{
    NAME: '謎之騎士', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.25,
    TALENT: '王國守護者',
    JOB1:'法騎統帥', ARMY1: '騎兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'獨角獸統帥', ARMY2: '法師',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '艾絲蒂爾', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '光之少女',
    JOB1:'櫻花無雙', ARMY1: '槍兵',
    JOB1DISCA:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2:'烈波無雙', ARMY2: '槍兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '妮絲蒂爾', JOBS: 2,
    SOLDHPPLUS:0.3, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.4,
    TALENT: '鮮血女王',
    JOB1:'魔神', ARMY1: '魔物',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於50%時，傷害提升10%。',
    JOB2:'血魔姬', ARMY2: '魔物',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '阿卡婭', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.25,
    TALENT: '聖靈的守護',
    JOB1:'西卡招魂師', ARMY1: '法師',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'西卡聖女', ARMY2: '騎兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '安潔麗娜', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '戰爭女神',
    JOB1:'海騎統帥', ARMY1: '水兵',
    JOB1DISCA:'在水中時，遭受物理傷害降低10%。',
    JOB1DISCB:'在水中時，物理傷害提升10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '露娜', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '風之守護',
    JOB1:'弓騎統帥', ARMY1: '弓兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'聖天馬統帥', ARMY2: '飛兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '迪哈爾特', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '自由的意志',
    JOB1:'皇家騎士', ARMY1: '騎兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2:'大統帥', ARMY2: '刺客',
    JOB2DISCA:'部隊血量低於70%時，暴擊傷害提升10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，暴擊傷害提升10%。'
},{
    NAME: '利昂', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '傳說的騎士',
    JOB1:'突擊騎士', ARMY1: '騎兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '亞修拉姆', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '黑衣的騎士',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '海倫娜', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.1,
    TALENT: '璨晶的騎士',
    JOB1:'突擊騎士', ARMY1: '騎兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '傑利奧魯&蕾拉', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '月下的誓約',
    JOB1:'黑騎士', ARMY1: '騎兵',
    JOB1DISCA:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1DISCB:'主動近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇家特使', ARMY2: '僧侶',
    JOB2DISCA:'本部隊有弱化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2DISCB:'主動遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蘭芳特', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '無懈可擊',
    JOB1:'劍聖', ARMY1: '步兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'騎士統帥', ARMY2: '騎兵',
    JOB2DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2DISCB:'與血量百分比高於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: '布琳達', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '風華典範',
    JOB1:'鬥神', ARMY1: '槍兵',
    JOB1DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。'
},{
    NAME: '羅莎莉婭', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.25,
    TALENT: '光輝的信仰',
    JOB1:'銀騎統帥', ARMY1: '僧侶',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蘭迪烏斯', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '團結的意志',
    JOB1:'大元帥', ARMY1: '槍兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '諾埃米', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.2,
    TALENT: '魔法裁縫',
    JOB1:'織魔師', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'巫師', ARMY2: '法師',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '波贊魯', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '千年的邪念',
    JOB1:'死神領主', ARMY1: '魔物',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'黑暗王子', ARMY2: '法師',
    JOB2DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '拉姆達', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.4,
    TALENT: '聖樹嘆息',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'木賢者', ARMY2: '僧侶',
    JOB2DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '拉娜', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '秘法延伸',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'黑暗公主', ARMY2: '法師',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '樹之賢者', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.3,
    TALENT: '常世之守護',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'大賢者', ARMY2: '僧侶',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '基扎洛夫', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '黑暗的意志',
    JOB1:'科學狂人', ARMY1: '法師',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'魔導元帥', ARMY2: '魔物',
    JOB2DISCA:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB2DISCB:'部隊血量100%時，暴擊率提升10%。'
},{
    NAME: '女神化身', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.3,
    TALENT: '女神的代行者',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'巫師', ARMY2: '法師',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾恩', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.25,
    TALENT: '殲滅天使',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害-10%',
    JOB1DISCB:'範圍傷害+10%',
    JOB2:'殲滅天使', ARMY2: '魔物',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害-10%',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害+10%'
},{
    NAME: '梅雅', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.25,
    TALENT: '全能女僕',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'皇家女僕', ARMY2: '法師',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雪露法妮爾', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.35,
    TALENT: '魔法眷屬',
    JOB1:'王女', ARMY1: '僧侶',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2:'巫師', ARMY2: '法師',
    JOB2DISCA:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '飛影', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.25,
    TALENT: '邪眼',
    JOB1:'邪眼師', ARMY1: '刺客',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'部隊血量高於80%時，暴擊率提升10%。',
    JOB2:'邪王炎殺', ARMY2: '魔物',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '藏馬', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.3,
    TALENT: '植物操縱',
    JOB1:'前世之力', ARMY1: '魔物',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'魔薔薇之棘', ARMY2: '法師',
    JOB2DISCA:'到近戰攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '亞魯特繆拉', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '無雙的霸主',
    JOB1:'大元帥', ARMY1: '槍兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '克拉蕾特', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.3,
    TALENT: '流浪的公主',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'劍姬', ARMY2: '步兵',
    JOB2DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雪莉', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '落跑公主',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'大統帥', ARMY2: '刺客',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾娜塔', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.35,
    TALENT: '復仇龍印',
    JOB1:'鬥神', ARMY1: '槍兵',
    JOB1DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2:'龍族統帥', ARMY2: '飛兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '桑原和真', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '愛即正義',
    JOB1:'靈劍鬥將', ARMY1: '步兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'靈槍鬥士', ARMY2: '槍兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '愛麗絲', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.3,
    TALENT: '超能靈力',
    JOB1:'夢幻之吻', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，士兵傷害提升20%。',
    JOB2:'光武·改', ARMY2: '騎兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '梅露帕妮', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '天佑公主',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'公主', ARMY2: '僧侶',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'治療效果提升10%。'
},{
    NAME: '索菲亞', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '憐憫之心',
    JOB1:'先知', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'聖者', ARMY2: '僧侶',
    JOB2DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，士兵傷害提升20%。'
},{
    NAME: '弗拉基亞', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '變化使',
    JOB1:'漆黑魅影', ARMY1: '刺客',
    JOB1DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'幻影魔姬', ARMY2: '魔物',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '芙蕾雅', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.4, SOLDMDEFPLUS:0.1,
    TALENT: '悲傷的決斷',
    JOB1:'女武神', ARMY1: '僧侶',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'受到攻擊時，士兵傷害提升20%。',
    JOB2:'皇家衛士', ARMY2: '槍兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊時，士兵傷害提升20%。'
},{
    NAME: '巴爾加斯', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '勇將的神力',
    JOB1:'勇者', ARMY1: '步兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇家衛士', ARMY2: '槍兵',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '塞蕾娜', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '挺身而出',
    JOB1:'盾劍統帥', ARMY1: '槍兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇家衛士', ARMY2: '步兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '娜姆', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '戰術牽制',
    JOB1:'遊俠', ARMY1: '弓兵',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，暴擊傷害提升10%。',
    JOB2:'聖天馬統帥', ARMY2: '飛兵',
    JOB2DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '法娜', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '強大的助力',
    JOB1:'遊俠', ARMY1: '弓兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提高10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '奧利維爾', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.30, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '琥珀之愛',
    JOB1:'帝國皇子', ARMY1: '弓兵',
    JOB1DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'吟遊詩人', ARMY2: '弓兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '克麗絲', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.4,
    TALENT: '禮物',
    JOB1:'女武神', ARMY1: '僧侶',
    JOB1DISCA:'受到遠程攻擊時，遭受魔法傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'公主', ARMY2: '僧侶',
    JOB2DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '克蘿賽', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '潔白之翼',
    JOB1:'女武神', ARMY1: '僧侶',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'利貝爾女王', ARMY2: '法師',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '帕恩', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.15,
    TALENT: '自由的騎士',
    JOB1:'英雄', ARMY1: '步兵',
    JOB1DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'突擊騎士', ARMY2: '騎兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '阿爾弗雷德', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '新晉!兩棲勇士',
    JOB1:'劍士統帥', ARMY1: '步兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'海騎統帥', ARMY2: '水兵',
    JOB2DISCA:'在水中時，遭受魔法傷害降低10%。',
    JOB2DISCB:'在水中時，暴擊率提升10%。'
},{
    NAME: '霧風', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '二刀流',
    JOB1:'影', ARMY1: '刺客',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，暴擊傷害提升10%。',
    JOB2:'劍聖', ARMY2: '劍聖',
    JOB2DISCA:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '奧利佛', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.2,
    TALENT: '獨行勇者',
    JOB1:'大統帥', ARMY1: '刺客',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，暴擊率提升10%。',
    JOB2:'閃擊統帥', ARMY2: '刺客',
    JOB2DISCA:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB2DISCB:'本部隊有6個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '銀狼', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '狼性',
    JOB1:'影', ARMY1: '刺客',
    JOB1DISCA:'動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，暴擊傷害提升10%。',
    JOB2:'遊俠', ARMY2: '遊俠',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '比蘿蒂絲', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '暗之國的黑妖精',
    JOB1:'遊俠', ARMY1: '弓兵',
    JOB1DISCA:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1DISCB:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。',
    JOB2:'黑妖刺客', ARMY2: '刺客',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '索尼婭', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '魔性之血',
    JOB1:'獨角獸統帥', ARMY1: '法師',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，傷害提升10%。',
    JOB2:'強襲統帥', ARMY2: '騎兵',
    JOB2DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2DISCB:'攻擊前每移動1格，傷害提升3%。（上限15%）'
},{
    NAME: '艾馬林克', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '智將的帷幕',
    JOB1:'大元帥', ARMY1: '槍兵',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，傷害提升10%。',
    JOB2:'騎士統帥', ARMY2: '騎兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，傷害提升10%。'
},{
    NAME: '亞爾緹娜', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.3,
    TALENT: '情報分析',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'帝國密使', ARMY2: '飛兵',
    JOB2DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2DISCB:'主動攻擊進入戰鬥時，士兵傷害提升20%。'
},{
    NAME: '伊梅爾達', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '女將軍的鐵腕',
    JOB1:'神使', ARMY1: '僧侶',
    JOB1DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'女王', ARMY2: '法師',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '莉法妮', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '魔法創造',
    JOB1:'隱士', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2:'巫師', ARMY2: '法師',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'部隊血量100%時，傷害提高10%。'
},{
    NAME: '安潔莉卡', JOBS: 1,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '解析滲透',
    JOB1:'創造家', ARMY1: '法師',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'受到攻擊時，士兵傷害提升20%。',

},{
    NAME: '埃格貝爾特', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.35,
    TALENT: '烈焰纏繞',
    JOB1:'黑暗統帥', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'隱士', ARMY2: '法師',
    JOB2DISCA:'部隊血量低於70%時，遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '海恩', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '累積的知識',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提高10%。',
    JOB2:'巫師', ARMY2: '',
    JOB2DISCA:'本部隊有7個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2DISCB:'本部隊有7個以上的強化狀態時，進入戰鬥後傷害提升10%。'
},{
    NAME: '蘭斯', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '空騎統帥',
    JOB1:'皇家騎士', ARMY1: '騎兵',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'部隊血量100%時，傷害提高10%。'
},{
/*
    NAME: '蕾蒂西亞', JOBS: 1,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    JOB1:'騎士統帥', ARMY1: '騎兵',
    JOB1DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB1DISCB:'攻擊前每移動1格，傷害提升3%。（上限15%）',
},{
    NAME: '安娜', JOBS: 1,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    JOB1:'神使', ARMY1: '僧侶',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'治療效果+10%。',
},{
    NAME: '阿倫', JOBS: 1,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    JOB1:'大元帥', ARMY1: '槍兵',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
},{
    NAME: '皮耶魯', JOBS: 1,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    JOB1:'海騎統帥', ARMY1: '水兵',
    JOB1DISCA:'在水中時，遭受物理傷害降低10%。',
    JOB1DISCB:'在水中時，物理傷害提升10%。',
},{
    NAME: '路因', JOBS: 1,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.3,
    JOB1:'劍士統帥', ARMY1: '步兵',
    JOB1DISCA:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1DISCB:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。',
},{
    NAME: '洛加', JOBS: 1,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    JOB1:'大統帥', ARMY1: '刺客',
    JOB1DISCA:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1DISCB:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。',
},{
    NAME: '利斯塔', JOBS: 1,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    JOB1:'海騎統帥', ARMY1: '水兵',
    JOB1DISCA:'在水中時，遭受物理傷害降低10%。',
    JOB1DISCB:'在水中時，物理傷害提升10%。',
},{
    NAME: '利亞特', JOBS: 1,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    JOB1:'騎士統帥', ARMY1: '騎兵',
    JOB1DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB1DISCB:'攻擊前每移動1格，傷害提升3%。（上限15%）',
},{
    NAME: '斯科特', JOBS: 1,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    JOB1:'騎士統帥', ARMY1: '騎兵',
    JOB1DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，傷害提升10%。',
},{
    NAME: '迪歐斯', JOBS: 1,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    JOB1:'弓騎統帥', ARMY1: '弓兵',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提高10%。',
},{
    NAME: '潔西卡', JOBS: 1,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.3,
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提高10%。',
},{
    NAME: '基斯', JOBS: 1,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
},{
*/
    NAME: '艾梅達', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.35,
    TALENT: '吐槽大師',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'神使', ARMY2: '僧侶',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '格尼爾', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '堅忍的反擊',
    JOB1:'大元帥', ARMY1: '槍兵',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'弓騎統帥', ARMY2: '弓兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '馬修', JOBS: 5,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.30, SOLDMDEFPLUS:0.15,
    TALENT: '友情的羈絆',
    JOB1:'英雄', ARMY1: '步兵',
    JOB1DISCA:'本部隊有5個以上增益效果時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'本部隊有5個以上增益效果時，進入戰鬥後傷害提升10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB3:'突擊騎士', ARMY3: '騎兵',
    JOB3DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB3DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB4:'影', ARMY4: '刺客',
    JOB4DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB4DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB5:'遊俠', ARMY5: '弓兵',
    JOB5DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB5DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
}];

