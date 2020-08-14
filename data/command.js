var command = [{
    NAME: '攻擊指揮',
    SKILLTYPE: ['RATE'],
    ATK: 0.1, INT: 0.1,
    DESC: '[指揮]攻擊、智力+10%'
},{
    NAME: '防禦指揮',
    SKILLTYPE: ['RATE'],
    DEF: 0.1,
    DESC: '[指揮]防禦+10%'
},{
    NAME: '魔防指揮',
    SKILLTYPE: ['RATE'],
    MDEF: 0.15,
    DESC: '[指揮]魔防+15%'
},{
    NAME: '技巧指揮',
    SKILLTYPE: ['RATE'],
    DEX: 0.2,
    DESC: '[指揮]技巧+20%'
},{
    NAME: '水戰',
    DEF: 0.3,
    DESC: '[水戰]在水中戰鬥時，部隊防禦+30%(不可驅散)'
},{
    NAME: '無懈可擊(指揮)',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [0.15, 0.15, 0.15, 0.15, 0.15];
    },
    DESC: '[指揮]除生命以外全屬性+15%'
},{
    NAME: '聖樹庇護(指揮)',
    DESC: '[指揮]移動時所有可以通過的地形都視為「樹林」，且部隊不會受到地形導致的移動力下降影響。'
},{
    NAME: '天御聖境(指揮)',
    TRUEDMGDEC: 0.2,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0];
    },
    DESC: '[指揮]遭受暴擊傷害降低30%，遭受固定傷害降低20%'
},{
    NAME: '免疫「固定傷害」(指揮)',
    DESC: '[指揮]免疫「固定傷害」'
},{
    NAME: '庇護之劍(信仰<3)',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [0.1, 0.1, 0.1, 0.1, 0.1];
    },
    DESC: '[指揮]除生命以外全屬性提升10%'
},{
    NAME: '庇護之劍(信仰=3)',
    /* HEAL AFTER BATTLE */
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [0.1, 0.1, 0.1, 0.1, 0.1];
    },
    DESC: '[指揮]除生命以外全屬性提升10%。主動攻擊進入戰鬥，戰後恢復造成傷害的20%的生命值。'
},{
    NAME: '止水',
    /* RANGE DMG DEC */
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0];
    },
    DESC: '遭受暴擊率降低30%，遭受遠程傷害降低15%'
},{
    NAME: '明鏡止水',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0];
    },
    HEALED: 0.15,
    DESC: '遭受暴擊率降低30%，遭受遠程傷害降低15%，遭受治療效果提升15%'
},{
    NAME: '止水寧息',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0];
    },
    HEALED: 0.15,
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
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0, 0, 0.12, 0, 0, 0.12];
    },
    DESC: '[指揮]主動攻擊進入戰鬥時造成傷害提升12%，遭受傷害降低12%'
}];
