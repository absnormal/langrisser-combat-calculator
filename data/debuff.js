var buff = [{
    NAME: '攻擊、智力-N％',
    TYPE: ['一般'], INDEX: 1,
    DATA: [-0, -0.1, -0.15, -0.20, -0.30], MAX: 4,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [this.DATA[this.INDEX], this.DATA[this.INDEX], -0, -0, -0];
    },
    DESC: '攻擊、智力-[DATA]%'
},{
    NAME: '防禦-N％',
    TYPE: ['一般'], INDEX: 1,
    DATA: [-0, -0.1, -0.15, -0.20, -0.30], MAX: 4,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [-0, -0, this.DATA[this.INDEX], -0, -0];
    },
    DESC: '防禦-[DATA]%'
},{
    NAME: '魔防-N％',
    TYPE: ['一般'], INDEX: 1,
    DATA: [-0, -0.15, -0.20, -0.30], MAX: 3,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [-0, -0, -0, this.DATA[this.INDEX], -0];
    },
    DESC: '魔防-[DATA]%'
},{
    NAME: '技巧-N％',
    TYPE: ['一般'], INDEX: 1,
    DATA: [-0, -0.20, -0.30], MAX: 2,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [-0, -0, -0, -0, this.DATA[this.INDEX]];
    },
    DESC: '技巧-[DATA]%'
},{
    NAME: '造成傷害降低N％',
    TYPE: ['一般'], INDEX: 1,
    DATA: [-0, -0.15, -0.20, -0.30], MAX: 3,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [-0, -0, -0, -0, -0, -0, -0, this.DATA[this.INDEX], -0, -0, -0];
    },
    DESC: '造成傷害降低[DATA]%'
},{
    NAME: '受到傷害增加％',
    TYPE: ['一般'], INDEX: 1,
    DATA: [-0, -0.15, -0.20, -0.30], MAX: 3,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, this.DATA[this.INDEX]];
    },
    DESC: '受到傷害增加[DATA]%'
},{
    NAME: '攻擊、防禦降低-15%(光環)',
    TYPE: ['一般'], 
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [-0.15, -0.15, -0.15, -0, -0];
    },
    DESC: '攻擊、防禦降低15%(光環)'
},{
    NAME: '攻擊、防禦降低10%(光環)',
    TYPE: ['一般'],
    DESC: '攻擊、防禦降低10%(光環)'
},{
    NAME: '遭受暴擊率增加10%(光環)',
    TYPE: ['一般'],
    DESC: '遭受暴擊率增加10%(光環)'
},{
    NAME: '暴擊率降低N%',
    TYPE: ['一般'], INDEX: 1,
    DATA: [0, -0.2, -0.3], MAX: 2,
    SKILLTYPE:['MIDRATE'],
    MIDRATE: function(side){
        return [-0, -0, -0, -0, -0, this.DATA[this.INDEX], -0, -0, -0, -0, -0];
    },
    DESC: '暴擊率降低N%'
},{
/* 有這玩意兒嗎，我印象中好像有
    NAME: '暴擊傷害降低20%',
    TYPE: ['一般'],
    DESC: '暴擊傷害降低20%'
},{
*/
    NAME: '遭受暴擊率增加20%',
    TYPE: ['一般'],
    DESC: '遭受暴擊率增加20%'
},{
    /* NOT PERCENTAGE */
    /*狙足能不能疊沒有測，需要粉毛專武，應該是不行*/
    NAME: '移動力-N，且無法進行護衛',
    TYPE: ['一般'], INDEX: 1,
    DATA: [-0, -0.01, -0.02, -0.03], MAX: 3,
    MOVE: 1,
    DESC: '移動力-[DATA]，且無法進行護衛'
},{
    NAME: '移動力-2，且無法進行護衛(光環)',
    TYPE: ['一般'],
    DESC: '移動力-2，且無法進行護衛(光環)'
},{
    NAME: '移動力-3，且無法進行護衛(光環)',
    TYPE: ['一般'],
    DESC: '移動力-3，且無法進行護衛(光環)'
},{
    NAME: '無法移動，且無法進行護衛',
    TYPE: ['一般'],
    DESC: '無法移動，且無法進行護衛'
},{
    NAME: '遭受魔法傷害提升20%',
    TYPE: ['一般'],
    DESC: '遭受魔法傷害提升20%'
},{

    NAME: '無法使用主動技能',
    TYPE: ['一般'],
    DESC: '無法使用主動技能'
},{
    NAME: '暈眩',
    TYPE: ['一般'],
    DESC: '無法行動'
},{
    NAME: '無法遭受強化效果',
    TYPE: ['一般'],
    DESC: '無法遭受強化效果'
},{
    NAME: '流血',
    TYPE: ['一般'],
    DESC: '回合結束時受到攻擊者2倍攻擊的固定傷害'
},{
    NAME: '回合結束時受到最大生命值20%的傷害',
    TYPE: ['一般'],
    DESC: '回合結束時受到最大生命值20%的傷害'
},{
    NAME: '回合結束時受到最大生命值30%的傷害',
    TYPE: ['一般'],
    DESC: '回合結束時受到最大生命值30%的傷害'
},{
    NAME: '無法遭受治療',
    TYPE: ['一般'],
    DESC: '無法遭受治療'
},{
    NAME: '被動技能失效',
    TYPE: ['一般'],
    DESC: '被動技能失效'
},{
    NAME: '無法遭受強化效果',
    TYPE: ['一般'],
    DESC: '無法遭受強化效果'
},{
    NAME: '死神之觸',
    TYPE: ['一般'],
    DESC: '治療反轉（施加的治療轉化為35%傷害，不可驅散）'
},{
    NAME: '治療反轉（施加的治療轉化為30%傷害）',
    TYPE: ['一般'],
    DESC: '治療反轉（施加的治療轉化為30%傷害）'
},{
    NAME: '無法獲得再行動效果',
    TYPE: ['一般'],
    DESC: '無法獲得再行動效果'
},{
    NAME: '傷口詛咒（遭受治療轉化為10%傷害）',
    TYPE: ['一般'],
    DESC: '傷口詛咒（遭受治療轉化為10%傷害）'
},{
    NAME: '傷口詛咒（遭受治療轉化為20%傷害）',
    TYPE: ['一般'],
    DESC: '傷口詛咒（遭受治療轉化為20%傷害）'
},{
    NAME: '傷口詛咒（遭受治療轉化為50%傷害）',
    TYPE: ['一般'],
    DESC: '傷口詛咒（遭受治療轉化為50%傷害）'
},{
//情報分析
    NAME: '防禦-10％(情報分析)',
    TYPE: ['一般'],
    DEF: -0.1,
    DESC: '防禦-10%(情報分析)'
},{
    NAME: '魔防-10％(情報分析)',
    TYPE: ['一般'],
    MDEF: -0.1,
    DESC: '魔防-10%(情報分析)'
},{
    NAME: '暗物質',
    TYPE: ['一般'],
    HEAL: -1,
    DESC: '治療效果降低100%'
},{
    NAME: '無法進行護衛',
    TYPE: ['一般'],
    DESC: '無法進行護衛'
},{
    NAME: '所處地形視為“水中”',
    TYPE: ['一般'],
    DESC: '所處地形視為“水中”'
},{
    NAME: '魔法爆彈',
    TYPE: ['一般'],
    DESC: '在行動結束後，受到一次施法者智力的4倍的[固定傷害]'
},{
    NAME: '終極爆彈',
    TYPE: ['一般'],
    DESC: '狀態結束時，對自身及周圍2格範圍內的所有友軍造成一次莉法妮智力4倍的固定傷害（[終極爆彈]效果不可驅散，且其固定傷害無法被免疫）'
},{
    NAME: '技能射程-1',
    TYPE: ['一般'],
    DESC: '技能射程-1'
},{
    NAME: '內心的惡魔',
    TYPE: ['一般'],
    DESC: '自身英雄兵種與敵軍英雄兵種互換'
},{
    NAME: '龍印',
    TYPE: ['一般'],
    DESC: '受到來自蕾娜塔的攻擊時，自身無法被護衛且遭受傷害增加40%，無法觸發“再移動”類效果，以及“被動技能無法生效”'
},{
    NAME: '士氣低落',
    TYPE: ['克拉蕾特'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [-0, -0, -0, -0, -0, -0, -0, -0.5, -0, -0, -0];
    },
    DESC: '造成傷害降低50%'
},{
    NAME: '魔界種子',
    TYPE: ['一般'],
    DESC: '回合行動結束時，受到藏馬智力2倍的[固定傷害]；被魔界植物技能攻擊時，魔防額外降低50%'
},{
    NAME: '自身被攻擊時無法反擊',
    TYPE: ['藏馬'],
    DESC: '自身被攻擊時無法反擊'
},{
    /*不確定是幾個效果，推測是一個*/
    NAME: '邪火',
    TYPE: ['一般'],
    DESC: '遭受所有傷害提升15%，被施加的治療直接轉變為治療量50%的傷害。持續2回合。（該效果無法被驅散）'
},{
    NAME: '魔痕',
    TYPE: ['一般'],
    DESC: '受到來自諾埃米的傷害增加5%'
},{
    NAME: '部隊射程-1',
    TYPE: ['一般'],
    DESC: '部隊射程-1'
},{
    NAME: '武器技能失效',
    TYPE: ['一般'],
    DESC: '武器技能失效'
},{
    NAME: '防具技能失效',
    TYPE: ['一般'],
    DESC: '防具技能失效'
},{
    NAME: '頭飾技能失效',
    TYPE: ['一般'],
    DESC: '頭飾技能失效'
},{
    NAME: '飾品技能失效',
    TYPE: ['一般'],
    DESC: '飾品技能失效'
},{
/*
    NAME: '血咒',
    TYPE: ['一般'],
    DESC: '行動結束時，受到一次[固定傷害]（傷害數值為自身最大生命值的15%）並恢復所有敵方部隊等量生命'
*/
}];
