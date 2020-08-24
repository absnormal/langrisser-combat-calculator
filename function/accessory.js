/*  */
function getAccessorySkill(side){
    var accessory;
    if(side == 'offense') accessory = combat.offAccessory;
    else if(side == 'defense') accessory = combat.defAccessory;

    // collect display
    var display = {
        NAME: accessory.NAME,
        RATE: [0, 0, 0, 0, 0],
        CHARONLY: true
    };
    if(accessory.SKILLTYPE != undefined && accessory.SKILLTYPE.includes('RATE') && accessory.RATE(side)){
        display.RATE = accessory.RATE(side);
    }
    /* Counter Rate */
    if(accessory.COUNTER != undefined){
        if(side == 'offense') combat.offELSECounterRate += accessory.COUNTER;
        if(side == 'defense') combat.defELSECounterRate += accessory.COUNTER;
    }

    if(accessory.ATK != undefined) display.RATE[0] += accessory.ATK;
    if(accessory.INT != undefined) display.RATE[1] += accessory.INT;
    if(accessory.DEF != undefined) display.RATE[2] += accessory.DEF;
    if(accessory.MDEF != undefined) display.RATE[3] += accessory.MDEF;
    if(accessory.DEX != undefined) display.RATE[4] += accessory.DEX;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.RATE[0];
        combat.offINTRATE += display.RATE[1];
        combat.offDEFRATE += display.RATE[2];
        combat.offMDEFRATE += display.RATE[3];
        combat.offDEXRATE += display.RATE[4];
        if(accessory.HEAL != undefined) combat.offHEAL += accessory.HEAL;
        if(accessory.HEALED != undefined) combat.offHEALED += accessory.HEALED;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.RATE[0];
        combat.defINTRATE += display.RATE[1];
        combat.defDEFRATE += display.RATE[2];
        combat.defMDEFRATE += display.RATE[3];
        combat.defDEXRATE += display.RATE[4];
        if(accessory.HEAL != undefined) combat.defHEAL += accessory.HEAL;
        if(accessory.HEALED != undefined) combat.defHEALED += accessory.HEALED;
    }
    return display;
};

function getMIDAccessorySkill(side){
    var accessory;
    if(side == 'offense') accessory = combat.offAccessory;
    else if(side == 'defense') accessory = combat.defAccessory;

    // collect display
    var display = {
        NAME: accessory.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        CHARONLY: true
    };
    if(accessory.SKILLTYPE != undefined && accessory.SKILLTYPE.includes('MIDRATE') && accessory.MIDRATE(side)){
        display.MIDRATE = accessory.MIDRATE(side);
    }
    if(side == 'offense'){
        if(accessory.OATK != undefined) display.MIDRATE[0] += accessory.OATK;
        if(accessory.OINT != undefined) display.MIDRATE[1] += accessory.OINT;
        if(accessory.ODEF != undefined) display.MIDRATE[2] += accessory.ODEF;
        if(accessory.OMDEF != undefined) display.MIDRATE[3] += accessory.OMDEF;
        if(accessory.ODEX != undefined) display.MIDRATE[4] += accessory.ODEX;
        if(accessory.OCRITRATEINC != undefined) display.MIDRATE[5] += accessory.OCRITRATEINC;
        if(accessory.OCRITDMGINC != undefined) display.MIDRATE[6] += accessory.OCRITDMGINC;
        if(accessory.ODMGINC != undefined) display.MIDRATE[7] += accessory.ODMGINC;
        if(accessory.OCRITRATEDEC != undefined) display.MIDRATE[8] += accessory.OCRITRATEDEC;
        if(accessory.OCRITDMGDEC != undefined) display.MIDRATE[9] += accessory.OCRITDMGDEC;
        if(accessory.ODMGDEC != undefined) display.MIDRATE[10] += accessory.ODMGDEC;
    }
    else if(side == 'defense'){
        if(accessory.DATK != undefined) display.MIDRATE[0] += accessory.DATK;
        if(accessory.DINT != undefined) display.MIDRATE[1] += accessory.DINT;
        if(accessory.DDEF != undefined) display.MIDRATE[2] += accessory.DDEF;
        if(accessory.DMDEF != undefined) display.MIDRATE[3] += accessory.DMDEF;
        if(accessory.DDEX != undefined) display.MIDRATE[4] += accessory.DDEX;
        if(accessory.DCRITRATEINC != undefined) display.MIDRATE[5] += accessory.DCRITRATEINC;
        if(accessory.DCRITDMGINC != undefined) display.MIDRATE[6] += accessory.DCRITDMGINC;
        if(accessory.DDMGINC != undefined) display.MIDRATE[7] += accessory.DDMGINC;
        if(accessory.DCRITRATEDEC != undefined) display.MIDRATE[8] += accessory.DCRITRATEDEC;
        if(accessory.DCRITDMGDEC != undefined) display.MIDRATE[9] += accessory.DCRITDMGDEC;
        if(accessory.DDMGDEC != undefined) display.MIDRATE[10] += accessory.DDMGDEC;
    }
    if(accessory.CRITRATEINC != undefined) display.MIDRATE[5] += accessory.CRITRATEINC;
    if(accessory.CRITDMGINC != undefined) display.MIDRATE[6] += accessory.CRITDMGINC;
    if(accessory.DMGINC != undefined) display.MIDRATE[7] += accessory.DMGINC;
    if(accessory.CRITRATEDEC != undefined) display.MIDRATE[8] += accessory.CRITRATEDEC;
    if(accessory.CRITDMGDEC != undefined) display.MIDRATE[9] += accessory.CRITDMGDEC;
    if(accessory.DMGDEC != undefined) display.MIDRATE[10] += accessory.DMGDEC;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.MIDRATE[0];
        combat.offINTRATE += display.MIDRATE[1];
        combat.offDEFRATE += display.MIDRATE[2];
        combat.offMDEFRATE += display.MIDRATE[3];
        combat.offDEXRATE += display.MIDRATE[4];
        combat.offCRITRATE += display.MIDRATE[5];
        combat.offCRITDMG += display.MIDRATE[6];
        combat.offDMGRATE += display.MIDRATE[7];
        combat.defCRITRATE -= display.MIDRATE[8];
        combat.defCRITDMG -= display.MIDRATE[9];
        combat.defDMGRATE -= display.MIDRATE[10];
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.MIDRATE[0];
        combat.defINTRATE += display.MIDRATE[1];
        combat.defDEFRATE += display.MIDRATE[2];
        combat.defMDEFRATE += display.MIDRATE[3];
        combat.defDEXRATE += display.MIDRATE[4];
        combat.defCRITRATE += display.MIDRATE[5];
        combat.defCRITDMG += display.MIDRATE[6];
        combat.defDMGRATE += display.MIDRATE[7];
        combat.offCRITRATE -= display.MIDRATE[8];
        combat.offCRITDMG -= display.MIDRATE[9];
        combat.offDMGRATE -= display.MIDRATE[10];
    }
    return display;
};

