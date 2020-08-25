var command = [{
    NAME: '攻擊指揮',
    ATK: 0.1, INT: 0.1,
    DESC: '[指揮]攻擊、智力+10%'
},{
    NAME: '防禦指揮',
    DEF: 0.1,
    DESC: '[指揮]防禦+10%'
},{
    NAME: '魔防指揮',
    MDEF: 0.15,
    DESC: '[指揮]魔防+15%'
},{
    NAME: '技巧指揮',
    DEX: 0.2,
    DESC: '[指揮]技巧+20%'
},{
    NAME: '水戰',
    DEF: 0.3,
    DESC: '[水戰]在水中戰鬥時，部隊防禦+30%(不可驅散)'
},{
    NAME: '風之守護(指揮)',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE;
        else if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE;
        if(oppDMGTYPE == '魔法傷害') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '遭受魔法傷害降低30%'
},{
    NAME: '無懈可擊(指揮)',
    ATK: 0.15, INT: 0.15, DEF: 0.15, MDEF: 0.15, DEX: 0.15,
    DESC: '[指揮]除生命以外全屬性+15%'
},{
    NAME: '聖樹庇護(指揮)',
    DESC: '[指揮]移動時所有可以通過的地形都視為「樹林」，且部隊不會受到地形導致的移動力下降影響。'
},{
    NAME: '天御聖境(指揮)',
    CRITDMGDEC: 0.15, TRUEDMGDEC: 0.2,
    DESC: '[指揮]遭受暴擊傷害降低30%，遭受固定傷害降低20%'
},{
    NAME: '免疫「固定傷害」(指揮)',
    DESC: '[指揮]免疫「固定傷害」'
},{
    NAME: '庇護之劍(信仰小於3)',
    ATK: 0.1, INT: 0.1, DEF: 0.1, MDEF: 0.1, DEX: 0.1,
    DESC: '[指揮]除生命以外全屬性提升10%'
},{
    NAME: '庇護之劍(信仰等於3)',
    /* HEAL AFTER BATTLE */
    ATK: 0.1, INT: 0.1, DEF: 0.1, MDEF: 0.1, DEX: 0.1,
    DESC: '[指揮]除生命以外全屬性提升10%。主動攻擊進入戰鬥，戰後恢復造成傷害的20%的生命值。'
},{
    /* 止水系列 乘算 */
    NAME: '止水',
    /* RANGE DMG DEC */
    CRITRATEDEC: 0.3,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(combat.range > 1) this.COMMANDDMGDEC = 0.15;
        else this.COMMANDDMGDEC = undefined;
    },
    DESC: '遭受暴擊率降低30%，遭受遠程傷害降低15%'
},{
    NAME: '明鏡止水',
    /* RANGE DMG DEC */
    CRITRATEDEC: 0.3,
    HEALED: 0.15,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(combat.range > 1) this.COMMANDDMGDEC = 0.15;
        else this.COMMANDDMGDEC = undefined;
    },
    DESC: '遭受暴擊率降低30%，遭受遠程傷害降低15%，遭受治療效果提升15%'
},{
    NAME: '止水寧息',
    /* RANGE DMG DEC */
    CRITRATEDEC: 0.3,
    HEALED: 0.15,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(combat.range > 1) this.COMMANDDMGDEC = 0.15;
        else this.COMMANDDMGDEC = undefined;
    },
    DESC: '遭受暴擊率降低30%，遭受遠程傷害降低15%，遭受治療效果提升15%'
},{
    NAME: '精靈之森(指揮)',
    DESC: '[指揮]移動時所有可以通過的地形都視為「樹林」，且部隊不會受到地形導致的移動力下降影響。'
},{
    NAME: '增援(指揮)',
    /* HEAL AFTER BATTLE */
    DESC: '[指揮]行動結束時恢復30%生命'
},{
    NAME: '歷戰之憶',
    ODMGINC: 0.12, ODMGDEC: 0.12,
    DESC: '[指揮]主動攻擊進入戰鬥時造成傷害提升12%，遭受傷害降低12%'
}];
