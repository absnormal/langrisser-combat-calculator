var debuff = [{
    NAME: '攻擊、智力-N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.1, -0.15, -0.20, -0.30], MAX: 4,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [this.DATA[this.offINDEX], this.DATA[this.offINDEX], 0, 0, 0];
        if(side == 'defense')
            return [this.DATA[this.defINDEX], this.DATA[this.defINDEX], 0, 0, 0];
    },
    DESC: '攻擊、智力[DATA]％'
},{
    NAME: '防禦-N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.1, -0.15, -0.20, -0.30], MAX: 4,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [0, 0, this.DATA[this.offINDEX], 0, 0];
        if(side == 'defense')
            return [0, 0, this.DATA[this.defINDEX], 0, 0];
    },
    DESC: '防禦[DATA]％'
},{
    NAME: '魔防-N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.15, -0.20, -0.30], MAX: 3,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, this.DATA[this.offINDEX], 0];
        if(side == 'defense')
            return [0, 0, 0, this.DATA[this.defINDEX], 0];
    },
    DESC: '魔防[DATA]％'
},{
    NAME: '技巧-N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.20, -0.30], MAX: 2,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, 0, this.DATA[this.offINDEX]];
        if(side == 'defense')
            return [0, 0, 0, 0, this.DATA[this.defINDEX]];
    },
    DESC: '技巧[DATA]％'
},{
    NAME: '造成傷害降低N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.15, -0.20, -0.30], MAX: 3,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, 0, 0, 0, 0, this.DATA[this.offINDEX], 0, 0, 0];
        if(side == 'defense')
            return [0, 0, 0, 0, 0, 0, 0, this.DATA[this.defINDEX], 0, 0, 0];
    },
    DESC: '造成傷害降低[DATA]％'
},{
    NAME: '受到傷害增加N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.15, -0.20, -0.30], MAX: 3,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[this.offINDEX]];
        if(side == 'defense')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[this.defINDEX]];
    },
    DESC: '受到傷害增加[DATA]％'
},{
    NAME: '暴擊率降低N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.2, -0.3], MAX: 2,
    SKILLTYPE:['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, 0, 0, this.DATA[this.offINDEX], 0, 0, 0, 0, 0];
        if(side == 'defense')
            return [0, 0, 0, 0, 0, this.DATA[this.defINDEX], 0, 0, 0, 0, 0];
    },
    DESC: '暴擊率降低[DATA]％'
},{
    NAME: '暴擊傷害降低20％',
    TYPE: ['一般'],
    CRITDMGINC: -0.2,
    DESC: '暴擊傷害降低20％'
},{
    /* NOT PERCENTAGE */
    /*狙足能不能疊沒有測，需要粉毛專武，應該是不行*/
    NAME: '移動力-N，且無法進行護衛',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.01, -0.02, -0.03], MAX: 3,
    DESC: '移動力[DATA]，且無法進行護衛'
},{
    /* NOT PERCENTAGE */
    NAME: '移動力-N，且無法進行護衛(光環)',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.02, -0.03], MAX: 2,
    DESC: '移動力-2，且無法進行護衛(光環)'
},{
    NAME: '無法移動，且無法進行護衛',
    TYPE: ['一般'],
    DESC: '無法移動，且無法進行護衛'
},{
    NAME: '所處地形視為“水中”',
    TYPE: ['一般'],
    DESC: '所處地形視為“水中”'
},{
    NAME: '遭受暴擊率增加20％',
    TYPE: ['一般'],
    CRITRATEDEC: -0.2,
    DESC: '遭受暴擊率增加20％'
},{
    NAME: '遭受魔法傷害提升20％',
    TYPE: ['一般'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE;
        if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE;
        if(oppDMGTYPE == '魔法傷害')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.20];
        else return false;
    },
    DESC: '遭受魔法傷害提升20％'
},{
    NAME: '無法使用主動技能',
    TYPE: ['一般'],
    DESC: '無法使用主動技能'
},{
    NAME: '被動技能失效',
    TYPE: ['一般'],
    DESC: '被動技能失效'
},{
    NAME: '無法進行護衛',
    TYPE: ['一般'],
    DESC: '無法進行護衛'
},{
    NAME: '無法獲得再行動效果',
    TYPE: ['一般'],
    DESC: '無法獲得再行動效果'
},{
    NAME: '暈眩',
    TYPE: ['一般'],
    DESC: '無法行動'
},{
    NAME: '無法遭受強化效果',
    TYPE: ['一般'],
    DESC: '無法遭受強化效果'
},{
    NAME: '無法遭受治療',
    TYPE: ['一般'],
    DESC: '無法遭受治療'
},{
    NAME: '傷口詛咒（遭受治療轉化為N％傷害）',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.10, -0.20, -0.50], MAX: 3,
    DESC: '傷口詛咒（遭受治療轉化為[DATA]％傷害）'
},{
    NAME: '無法遭受強化效果',
    TYPE: ['一般'],
    DESC: '無法遭受強化效果'
},{
    NAME: '技能射程-1',
    TYPE: ['一般'],
    DESC: '技能射程-1'
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
    NAME: '死神之觸',
    TYPE: ['一般'],
    DESC: '治療反轉（施加的治療轉化為35％傷害，不可驅散）'
},{
    NAME: '治療反轉（施加的治療轉化為30％傷害）',
    TYPE: ['一般'],
    DESC: '治療反轉（施加的治療轉化為30％傷害）'
},{
//情報分析
    NAME: '防禦-10％(情報分析)',
    TYPE: ['一般'],
    DEF: -0.1,
    DESC: '防禦-10％(情報分析)'
},{
    NAME: '魔防-10％(情報分析)',
    TYPE: ['一般'],
    MDEF: -0.1,
    DESC: '魔防-10％(情報分析)'
},{
    NAME: '[暗物質]',
    TYPE: ['一般'],
    HEAL: -1,
    DESC: '治療效果降低100％'
},{
    NAME: '魔法爆彈',
    TYPE: ['一般'],
    DESC: '在行動結束後，受到一次施法者智力的4倍的[固定傷害]'
},{
    NAME: '終極爆彈',
    TYPE: ['一般'],
    DESC: '狀態結束時，對自身及周圍2格範圍內的所有友軍造成一次莉法妮智力4倍的固定傷害（[終極爆彈]效果不可驅散，且其固定傷害無法被免疫）'
},{
    NAME: '霸者的意志',
    TYPE: ['一般'],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [-0.15, -0.15, -0.15, 0, 0];
    },
    DESC: '攻擊、防禦降低15％(光環)'
},{
    NAME: '攻擊、防禦降低10％(光環)',
    TYPE: ['一般'],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [-0.1, 0, -0.1, 0, 0];
    },
    DESC: '攻擊、防禦降低10％(光環)'
},{
    NAME: '遭受暴擊率增加10％(光環)',
    TYPE: ['一般'],
    CRITRATEDEC: -0.1,
    DESC: '遭受暴擊率增加10％(光環)'
},{
    NAME: '魔界種子',
    TYPE: ['一般'],
    DESC: '回合行動結束時，受到藏馬智力2倍的[固定傷害]；被魔界植物技能攻擊時，魔防額外降低50％'
},{
    /*不確定是幾個效果，推測是一個*/
    NAME: '邪火',
    TYPE: ['一般'],
    DMGDEC: -0.15,
    DESC: '遭受所有傷害提升15％，被施加的治療直接轉變為治療量50％的傷害。持續2回合。（該效果無法被驅散）'
},{
    NAME: '龍印',
    TYPE: ['一般'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense' && combat.offChar.NAME == '蕾娜塔')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.40];
        else return false;
    },
    DESC: '受到來自蕾娜塔的攻擊時，自身無法被護衛且遭受傷害增加40％'
},{
    NAME: '遊俠之眼',
    TYPE: ['一般'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense' && combat.offChar.NAME == '西格瑪')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.15];
        else if(side == 'offense' && combat.defChar.NAME == '西格瑪')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.15];
        else return false;
    },
    DESC: '受到來自西格瑪的傷害增加15％(無法驅散和免疫)'
},{
    NAME: '破滅的炎紋',
    TYPE: ['一般'],
    CRITRATEDEC: -0.2,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense' && combat.offChar.NAME == '克洛泰爾')
            return [0, 0, -0.2, -0.2, 0, 0, 0, 0, 0, 0, 0];
        else if(side == 'offense' && combat.defChar.NAME == '克洛泰爾')
            return [0, 0, -0.2, -0.2, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '受到來自克洛泰爾的傷害時，防禦和魔防降低20%，受到暴擊率提升20%；並且無法觸發[抵擋致命傷害]的效果'
},{
    NAME: '魔痕',
    TYPE: ['一般'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense' && combat.offChar.NAME == '諾埃米')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.05];
        else if(side == 'offense' && combat.defChar.NAME == '諾埃米')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.05];
        else return false;
    },
    DESC: '受到來自諾埃米的傷害增加5％，最高可累積3層(當前[DATA]層)'
},{
    NAME: '內心的惡魔',
    TYPE: ['一般'],
    DESC: '自身英雄兵種與敵軍英雄兵種互換'
},{
    NAME: '流血',
    TYPE: ['一般'],
    DESC: '回合結束時受到攻擊者1倍攻擊的固定傷害'
},{
    NAME: '回合結束時受到最大生命值N％的傷害',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, -0.20, -0.30], MAX: 2,
    DESC: '回合結束時受到最大生命值[DATA]％的傷害'
},{
    NAME: '魔力餘波',
    TYPE: ['一般'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10], MAX: 10,
    DESC: '行動結束時，受到蕾伽爾智力0.5倍的[固定傷害](當前[DATA]個)'
},{
    NAME: '灼燒(日輪)',
    TYPE: ['一般'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06], MAX: 6,
    DESC: '行動結束時，受到雷因法魯斯攻擊力1倍的[固定傷害](當前[DATA]個)'
},{
    NAME: '灼燒(蒼炎之太刀)',
    TYPE: ['一般'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04], MAX: 4,
    DESC: '行動結束時，受到黎恩攻擊力1倍的[固定傷害](當前[DATA]個)'
},{
    NAME: '灼燒(終之太刀‧曉)',
    TYPE: ['一般'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04], MAX: 4,
    DESC: '行動結束時，受到黎恩攻擊力1倍的[固定傷害](該傷害無法免疫)(當前[DATA]個)'
},{
    NAME: '炎灼',
    TYPE: ['一般'],
    DESC: '下回合行動結束時，受到克洛泰爾"攻擊"+"智力"1倍的[固定傷害]'
/*
},{
    NAME: '血咒',
    TYPE: ['一般'],
    DESC: '行動結束時，受到一次[固定傷害]（傷害數值為自身最大生命值的15％）並恢復所有敵方部隊等量生命'
*/
},{
    NAME: '血咒',
    TYPE: ['一般'],
    DESC: '行動結束時，損失15%最大生命值，並恢復所有敵方部隊等量生命(不可驅散)'
},{
    NAME: '狂亂',
    TYPE: ['夏提雅'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.15];
    },
    DESC: '[狂亂]遭受所有傷害提升15%(不可驅散)'
},{
    NAME: '士氣低落',
    TYPE: ['克拉蕾特'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, -0.5, 0, 0, 0];
    },
    DESC: '造成傷害降低50％'
},{
    NAME: '自身被攻擊時無法反擊',
    TYPE: ['藏馬'],
    DESC: '自身被攻擊時無法反擊'
}];
