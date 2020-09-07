/* 劍, 槍, 騎, 飛, 水, 刺, 弓, 僧, 魔, 龍 */
function cal_counter(offenseArmy, defenseArmy){
    switch(offenseArmy){
        case "步兵":
            if(defenseArmy == "槍兵")
                return 0.4;
            else if(defenseArmy == "騎兵")
                return -0.3;
            else return 0.0; break;
        case "槍兵":
            if(defenseArmy == "步兵")
                return -0.2;
            else if(defenseArmy == "騎兵")
                return 0.3;
            else return 0.0; break;
        case "騎兵":
            if(defenseArmy == "步兵")
                return 0.2;
            else if(defenseArmy == "槍兵")
                return -0.3;
            else return 0.0; break;
        case "弓兵":
            if(defenseArmy == "飛兵")
                return 0.3;
            else return 0.0; break;
        case "僧侶":
            if(defenseArmy == "魔物")
                return 0.8;
            else return 0.0; break;
        case "魔物":
            if(defenseArmy == "僧侶")
                return -0.4;
            else return 0.0; break;
        default:
            return 0.0;
    }
};

function cal_skillCounter(skillCounter, defenseArmy){
    var counters = skillCounter.split(" ");

    if(counters.length == 1 && skillCounter == defenseArmy)
        return 0.3;
    else
        for(var i=0; i<counters.length; i++){
            if(counters[i] == defenseArmy)
                return 0.3;
        }
    return 0;
};

/* get side->otherside counter */
function getCounterRATE(side){
    if(side == 'offense'){
        combat.offCounterRate += cal_counter(getArmy('offense'), getArmy('defense'));
        combat.offCounterRate += cal_skillCounter(combat.offSkill.COUNTER, getArmy('defense'));
        combat.offCounterRate += combat.offELSECounterRate;
    }
    else if(side == 'defense'){
        combat.defCounterRate += cal_counter(getArmy('defense'), getArmy('offense'));
        combat.defCounterRate += cal_skillCounter(combat.defSkill.COUNTER, getArmy('offense'));
        combat.defCounterRate += combat.defELSECounterRate;
    }
};

/* get side->otherside counter */
function getSoldCounterRATE(side){
    if(side == 'offense'){
        combat.offSoldCounterRate += cal_counter(combat.offSoldier.ARMY, combat.defSoldier.ARMY);
        combat.offSoldCounterRate += cal_skillCounter(combat.offSkill.COUNTER, combat.defSoldier.ARMY);
        combat.offSoldCounterRate += combat.offELSECounterRate;
    }
    else if(side == 'defense'){
        combat.defSoldCounterRate += cal_counter(combat.defSoldier.ARMY, combat.offSoldier.ARMY);
        combat.defSoldCounterRate += cal_skillCounter(combat.defSkill.COUNTER, combat.offSoldier.ARMY);
        combat.defSoldCounterRate += combat.defELSECounterRate;
    }
};

/* 飛行>野戰>步行>水行>騎行 */
function cal_MOVETYPE(side){
    charMOVETYPE = getMOVETYPE(side);
    soldMOVETYPE = getSoldMOVETYPE(side);
    ORDER = ['飛行', '野戰', '步行', '水行', '騎行'];
    charNUM = ORDER.indexOf(charMOVETYPE);
    soldNUM = ORDER.indexOf(soldMOVETYPE);
    if(charNUM >= soldNUM) movetype = ORDER[charNUM];
    else movetype = ORDER[soldNUM];

    if(side == 'offense') combat.offMOVETYPE = movetype;
    if(side == 'defense') combat.defMOVETYPE = movetype;
};

