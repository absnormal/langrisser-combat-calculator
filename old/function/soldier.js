/*  */
function getSoldierSkill(side){
    var soldier;
    if(side == 'offense') soldier = combat.offSoldier;
    else if(side == 'defense') soldier = combat.defSoldier;

    // collect display
    var display = {
        NAME: soldier.NAME,
        RATE: [0, 0, 0, 0, 0],
        SOLDONLY: true
    };
    if(soldier.SKILLTYPE != undefined && soldier.SKILLTYPE.includes('RATE') && soldier.RATE(side)){
        display.RATE = soldier.RATE(side);
    }

    // add to combat
    if(side == 'offense'){
        /* soldier */
        combat.offsoldATKRATE += display.RATE[0];
        combat.offsoldDEFRATE += display.RATE[2];
        combat.offsoldMDEFRATE += display.RATE[3];
        if(soldier.HEAL != undefined) combat.offHEAL += soldier.HEAL;
        if(soldier.HEALED != undefined) combat.offsoldHEALED += soldier.HEALED;
    }
    else if(side == 'defense'){
        /* soldier */
        combat.defsoldATKRATE += display.RATE[0];
        combat.defsoldDEFRATE += display.RATE[2];
        combat.defsoldMDEFRATE += display.RATE[3];
        if(soldier.HEAL != undefined) combat.defHEAL += soldier.HEAL;
        if(soldier.HEALED != undefined) combat.defsoldHEALED += soldier.HEALED;
    }
    return display;
};

function getMIDSoldierSkill(side){
    var soldier;
    if(side == 'offense') soldier = combat.offSoldier;
    else if(side == 'defense') soldier = combat.defSoldier;

    // collect display
    var display = {
        NAME: soldier.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        SOLDONLY: true, CHARONLY: false
    };
    if(soldier.SKILLTYPE != undefined && soldier.SKILLTYPE.includes('MIDRATE') && soldier.MIDRATE(side)){
        display.MIDRATE = soldier.MIDRATE(side);
    }
    if(soldier.SOLDONLY != undefined && soldier.SOLDONLY == false){
        display.SOLDONLY = false;
    }
    if(soldier.CHARONLY != undefined && soldier.CHARONLY == true){
        display.CHARONLY = true;
        display.SOLDONLY = false;
    }
    // add to combat
    if(side == 'offense'){
        /* hero */
        if(display.SOLDONLY == false){
            combat.offDMGRATE += display.MIDRATE[7];
            combat.defDMGRATE -= display.MIDRATE[10];
        }
        /* soldier */
        if(display.CHARONLY == false){
            combat.offsoldATKRATE += display.MIDRATE[0];
            combat.offsoldDEFRATE += display.MIDRATE[2];
            combat.offsoldMDEFRATE += display.MIDRATE[3];
            combat.offsoldCRITRATE += display.MIDRATE[5];
            combat.offsoldCRITDMG += display.MIDRATE[6];
            combat.offsoldDMGRATE += display.MIDRATE[7];
            combat.defsoldCRITRATE -= display.MIDRATE[8];
            combat.defsoldCRITDMG -= display.MIDRATE[9];
            combat.defsoldDMGRATE -= display.MIDRATE[10];
        }
    }
    else if(side == 'defense'){
        /* hero */
        if(display.SOLDONLY == false){
            combat.defDMGRATE += display.MIDRATE[7];
            combat.offDMGRATE -= display.MIDRATE[10];
        }
        /* soldier */
        if(display.CHARONLY == false){
            combat.defsoldATKRATE += display.MIDRATE[0];
            combat.defsoldDEFRATE += display.MIDRATE[2];
            combat.defsoldMDEFRATE += display.MIDRATE[3];
            combat.defsoldCRITRATE += display.MIDRATE[5];
            combat.defsoldCRITDMG += display.MIDRATE[6];
            combat.defsoldDMGRATE += display.MIDRATE[7];
            combat.offsoldCRITRATE -= display.MIDRATE[8];
            combat.offsoldCRITDMG -= display.MIDRATE[9];
            combat.offsoldDMGRATE -= display.MIDRATE[10];
        }
    }
    return display;
};

