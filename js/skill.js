/* 技能/基本資訊/倍率/克制/增傷/強弱化/無視防禦/戰前後固傷/敘述 */
var skill = [{
    NAME: '普攻(物)', COST: 0,
    TYPE: '物理傷害', CD: 0, RANGE: '?', AREA: '單體',
    RATE: 1, COUNTER: '無',
    INCDMG: 0, STREFF: '無', WEAKEFF: '無',
    NEGDEF: 0, NEGMDEF: 0, PRETDMG: 0, POSTDMG: 0, DISPERSE: 0,
    DISC: '用攻擊普攻。'
},{
    NAME: '普攻(法)', COST: 0,
    TYPE: '魔法傷害', CD: 0, RANGE: '?', AREA: '單體',
    RATE: 1, COUNTER: '無',
    INCDMG: 0, STREFF: '無', WEAKEFF: '無',
    NEGDEF: 0, NEGMDEF: 0, PRETDMG: 0, POSTDMG: 0, DISPERSE: 0,
    DISC: '用智力普攻。'
},{
    NAME: '火球', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '劍兵',
    INCDMG: 0, STREFF: '無', WEAKEFF: '無',
    NEGDEF: 0, NEGMDEF: 0, PRETDMG: 0, POSTDMG: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「步兵」有特效。'
},{
    NAME: '雷擊', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '騎兵',
    INCDMG: 0, STREFF: '無', WEAKEFF: '無',
    NEGDEF: 0, NEGMDEF: 0, PRETDMG: 0, POSTDMG: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「騎兵」有特效。'
},{
    NAME: '冰凍', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '槍兵',
    INCDMG: 0, STREFF: '無', WEAKEFF: '無',
    NEGDEF: 0, NEGMDEF: 0, PRETDMG: 0, POSTDMG: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「槍兵」有特效。'
},{
    NAME: '風刃', COST: 1,
    TYPE: '魔法傷害', CD: 1, RANGE: '2格', AREA: '單體',
    RATE: 1.5, COUNTER: '飛兵',
    INCDMG: 0, STREFF: '無', WEAKEFF: '無',
    NEGDEF: 0, NEGMDEF: 0, PRETDMG: 0, POSTDMG: 0, DISPERSE: 0,
    DISC: '[魔法傷害]攻擊單個敵軍，造成1.5倍傷害，對「飛兵」有特效。'
}];

