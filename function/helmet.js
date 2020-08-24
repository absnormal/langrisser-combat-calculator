/*  */
function getHelmetSkill(side){
    var helmet;
    if(side == 'offense') helmet = combat.offHelmet;
    else if(side == 'defense') helmet = combat.defHelmet;

    // collect display
    var display = {
        NAME: helmet.NAME,
        RATE: [0, 0, 0, 0, 0],
        CHARONLY: true
    };
    if(helmet.SKILLTYPE != undefined && helmet.SKILLTYPE.includes('RATE') && helmet.RATE(side)){
        display.RATE = helmet.RATE(side);
    }
    if(helmet.ATK != undefined) display.RATE[0] += helmet.ATK;
    if(helmet.INT != undefined) display.RATE[1] += helmet.INT;
    if(helmet.DEF != undefined) display.RATE[2] += helmet.DEF;
    if(helmet.MDEF != undefined) display.RATE[3] += helmet.MDEF;
    if(helmet.DEX != undefined) display.RATE[4] += helmet.DEX;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.RATE[0];
        combat.offINTRATE += display.RATE[1];
        combat.offDEFRATE += display.RATE[2];
        combat.offMDEFRATE += display.RATE[3];
        combat.offDEXRATE += display.RATE[4];
        if(helmet.HEAL != undefined) combat.offHEAL += helmet.HEAL;
        if(helmet.HEALED != undefined) combat.offHEALED += helmet.HEALED;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.RATE[0];
        combat.defINTRATE += display.RATE[1];
        combat.defDEFRATE += display.RATE[2];
        combat.defMDEFRATE += display.RATE[3];
        combat.defDEXRATE += display.RATE[4];
        if(helmet.HEAL != undefined) combat.defHEAL += helmet.HEAL;
        if(helmet.HEALED != undefined) combat.defHEALED += helmet.HEALED;
    }
    return display;
};

function getMIDHelmetSkill(side){
    var helmet;
    if(side == 'offense') helmet = combat.offHelmet;
    else if(side == 'defense') helmet = combat.defHelmet;

    // collect display
    var display = {
        NAME: helmet.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        CHARONLY: true
    };
    if(helmet.SKILLTYPE != undefined && helmet.SKILLTYPE.includes('MIDRATE') && helmet.MIDRATE(side)){
        display.MIDRATE = helmet.MIDRATE(side);
    }
    if(side == 'offense'){
        if(helmet.OATK != undefined) display.MIDRATE[0] += helmet.OATK;
        if(helmet.OINT != undefined) display.MIDRATE[1] += helmet.OINT;
        if(helmet.ODEF != undefined) display.MIDRATE[2] += helmet.ODEF;
        if(helmet.OMDEF != undefined) display.MIDRATE[3] += helmet.OMDEF;
        if(helmet.ODEX != undefined) display.MIDRATE[4] += helmet.ODEX;
        if(helmet.OCRITRATEINC != undefined) display.MIDRATE[5] += helmet.OCRITRATEINC;
        if(helmet.OCRITDMGINC != undefined) display.MIDRATE[6] += helmet.OCRITDMGINC;
        if(helmet.ODMGINC != undefined) display.MIDRATE[7] += helmet.ODMGINC;
        if(helmet.OCRITRATEDEC != undefined) display.MIDRATE[8] += helmet.OCRITRATEDEC;
        if(helmet.OCRITDMGDEC != undefined) display.MIDRATE[9] += helmet.OCRITDMGDEC;
        if(helmet.ODMGDEC != undefined) display.MIDRATE[10] += helmet.ODMGDEC;
    }
    else if(side == 'defense'){
        if(helmet.DATK != undefined) display.MIDRATE[0] += helmet.DATK;
        if(helmet.DINT != undefined) display.MIDRATE[1] += helmet.DINT;
        if(helmet.DDEF != undefined) display.MIDRATE[2] += helmet.DDEF;
        if(helmet.DMDEF != undefined) display.MIDRATE[3] += helmet.DMDEF;
        if(helmet.DDEX != undefined) display.MIDRATE[4] += helmet.DDEX;
        if(helmet.DCRITRATEINC != undefined) display.MIDRATE[5] += helmet.DCRITRATEINC;
        if(helmet.DCRITDMGINC != undefined) display.MIDRATE[6] += helmet.DCRITDMGINC;
        if(helmet.DDMGINC != undefined) display.MIDRATE[7] += helmet.DDMGINC;
        if(helmet.DCRITRATEDEC != undefined) display.MIDRATE[8] += helmet.DCRITRATEDEC;
        if(helmet.DCRITDMGDEC != undefined) display.MIDRATE[9] += helmet.DCRITDMGDEC;
        if(helmet.DDMGDEC != undefined) display.MIDRATE[10] += helmet.DDMGDEC;
    }
    if(helmet.CRITRATEINC != undefined) display.MIDRATE[5] += helmet.CRITRATEINC;
    if(helmet.CRITDMGINC != undefined) display.MIDRATE[6] += helmet.CRITDMGINC;
    if(helmet.DMGINC != undefined) display.MIDRATE[7] += helmet.DMGINC;
    if(helmet.CRITRATEDEC != undefined) display.MIDRATE[8] += helmet.CRITRATEDEC;
    if(helmet.CRITDMGDEC != undefined) display.MIDRATE[9] += helmet.CRITDMGDEC;
    if(helmet.DMGDEC != undefined) display.MIDRATE[10] += helmet.DMGDEC;

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

