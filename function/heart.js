/*  */
function getHeartSkill(side){
    var heart;
    if(side == 'offense') heart = combat.offHeart;
    else if(side == 'defense') heart = combat.defHeart;

    // collect display
    var display = {
        NAME: heart.NAME,
        RATE: [0, 0, 0, 0, 0]
    };
    if(heart.SKILLTYPE != undefined && heart.SKILLTYPE.includes('RATE') && heart.RATE(side)){
        display.RATE = heart.RATE(side);
    }
    if(heart.ATK != undefined) display.RATE[0] += heart.ATK;
    if(heart.INT != undefined) display.RATE[1] += heart.INT;
    if(heart.DEF != undefined) display.RATE[2] += heart.DEF;
    if(heart.MDEF != undefined) display.RATE[3] += heart.MDEF;
    if(heart.DEX != undefined) display.RATE[4] += heart.DEX;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.RATE[0];
        combat.offINTRATE += display.RATE[1];
        combat.offDEFRATE += display.RATE[2];
        combat.offMDEFRATE += display.RATE[3];
        combat.offDEXRATE += display.RATE[4];
        if(heart.HEAL != undefined) combat.offHEAL += heart.HEAL;
        if(heart.HEALED != undefined) combat.offHEALED += heart.HEALED;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.RATE[0];
        combat.defINTRATE += display.RATE[1];
        combat.defDEFRATE += display.RATE[2];
        combat.defMDEFRATE += display.RATE[3];
        combat.defDEXRATE += display.RATE[4];
        if(heart.HEAL != undefined) combat.defHEAL += heart.HEAL;
        if(heart.HEALED != undefined) combat.defHEALED += heart.HEALED;
    }
    return display;
};

function getMIDHeartSkill(side){
    var heart;
    if(side == 'offense') heart = combat.offHeart;
    else if(side == 'defense') heart = combat.defHeart;

    // collect display
    var display = {
        NAME: heart.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    if(heart.SKILLTYPE != undefined && heart.SKILLTYPE.includes('MIDRATE') && heart.MIDRATE(side)){
        display.MIDRATE = heart.MIDRATE(side);
    }
    if(side == 'offense'){
        if(heart.OATK != undefined) display.MIDRATE[0] += heart.OATK;
        if(heart.OINT != undefined) display.MIDRATE[1] += heart.OINT;
        if(heart.ODEF != undefined) display.MIDRATE[2] += heart.ODEF;
        if(heart.OMDEF != undefined) display.MIDRATE[3] += heart.OMDEF;
        if(heart.ODEX != undefined) display.MIDRATE[4] += heart.ODEX;
        if(heart.OCRITRATEINC != undefined) display.MIDRATE[5] += heart.OCRITRATEINC;
        if(heart.OCRITDMGINC != undefined) display.MIDRATE[6] += heart.OCRITDMGINC;
        if(heart.ODMGINC != undefined) display.MIDRATE[7] += heart.ODMGINC;
        if(heart.OCRITRATEDEC != undefined) display.MIDRATE[8] += heart.OCRITRATEDEC;
        if(heart.OCRITDMGDEC != undefined) display.MIDRATE[9] += heart.OCRITDMGDEC;
        if(heart.ODMGDEC != undefined) display.MIDRATE[10] += heart.ODMGDEC;
    }
    else if(side == 'defense'){
        if(heart.DATK != undefined) display.MIDRATE[0] += heart.DATK;
        if(heart.DINT != undefined) display.MIDRATE[1] += heart.DINT;
        if(heart.DDEF != undefined) display.MIDRATE[2] += heart.DDEF;
        if(heart.DMDEF != undefined) display.MIDRATE[3] += heart.DMDEF;
        if(heart.DDEX != undefined) display.MIDRATE[4] += heart.DDEX;
        if(heart.DCRITRATEINC != undefined) display.MIDRATE[5] += heart.DCRITRATEINC;
        if(heart.DCRITDMGINC != undefined) display.MIDRATE[6] += heart.DCRITDMGINC;
        if(heart.DDMGINC != undefined) display.MIDRATE[7] += heart.DDMGINC;
        if(heart.DCRITRATEDEC != undefined) display.MIDRATE[8] += heart.DCRITRATEDEC;
        if(heart.DCRITDMGDEC != undefined) display.MIDRATE[9] += heart.DCRITDMGDEC;
        if(heart.DDMGDEC != undefined) display.MIDRATE[10] += heart.DDMGDEC;
    }
    if(heart.CRITRATEINC != undefined) display.MIDRATE[5] += heart.CRITRATEINC;
    if(heart.CRITDMGINC != undefined) display.MIDRATE[6] += heart.CRITDMGINC;
    if(heart.DMGINC != undefined) display.MIDRATE[7] += heart.DMGINC;
    if(heart.CRITRATEDEC != undefined) display.MIDRATE[8] += heart.CRITRATEDEC;
    if(heart.CRITDMGDEC != undefined) display.MIDRATE[9] += heart.CRITDMGDEC;
    if(heart.DMGDEC != undefined) display.MIDRATE[10] += heart.DMGDEC;

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

