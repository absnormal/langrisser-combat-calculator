/*  */
function getTalentSkill(side){
    var talent;
    if(side == 'offense') talent = combat.offTalent;
    else if(side == 'defense') talent = combat.defTalent;

    // collect display
    var display = {
        NAME: talent.NAME,
        RATE: [0, 0, 0, 0, 0]
    };
    if(talent.SKILLTYPE != undefined && talent.SKILLTYPE.includes('RATE') && talent.RATE(side)){
        display.RATE = talent.RATE(side);
    }
    if(talent.ATK != undefined) display.RATE[0] += talent.ATK;
    if(talent.INT != undefined) display.RATE[1] += talent.INT;
    if(talent.DEF != undefined) display.RATE[2] += talent.DEF;
    if(talent.MDEF != undefined) display.RATE[3] += talent.MDEF;
    if(talent.DEX != undefined) display.RATE[4] += talent.DEX;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.RATE[0];
        combat.offINTRATE += display.RATE[1];
        combat.offDEFRATE += display.RATE[2];
        combat.offMDEFRATE += display.RATE[3];
        combat.offDEXRATE += display.RATE[4];
        if(talent.HEAL != undefined) combat.offHEAL += talent.HEAL;
        if(talent.HEALED != undefined) combat.offHEALED += talent.HEALED;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.RATE[0];
        combat.defINTRATE += display.RATE[1];
        combat.defDEFRATE += display.RATE[2];
        combat.defMDEFRATE += display.RATE[3];
        combat.defDEXRATE += display.RATE[4];
        if(talent.HEAL != undefined) combat.defHEAL += talent.HEAL;
        if(talent.HEALED != undefined) combat.defHEALED += talent.HEALED;
    }
    return display;
};

function getMIDTalentSkill(side){
    var talent;
    if(side == 'offense') talent = combat.offTalent;
    else if(side == 'defense') talent = combat.defTalent;

    // collect display
    var display = {
        NAME: talent.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    if(talent.SKILLTYPE != undefined && talent.SKILLTYPE.includes('MIDRATE') && talent.MIDRATE(side)){
        display.MIDRATE = talent.MIDRATE(side);
    }
    if(side == 'offense'){
        if(talent.OATK != undefined) display.MIDRATE[0] += talent.OATK;
        if(talent.OINT != undefined) display.MIDRATE[1] += talent.OINT;
        if(talent.ODEF != undefined) display.MIDRATE[2] += talent.ODEF;
        if(talent.OMDEF != undefined) display.MIDRATE[3] += talent.OMDEF;
        if(talent.ODEX != undefined) display.MIDRATE[4] += talent.ODEX;
        if(talent.OCRITRATEINC != undefined) display.MIDRATE[5] += talent.OCRITRATEINC;
        if(talent.OCRITDMGINC != undefined) display.MIDRATE[6] += talent.OCRITDMGINC;
        if(talent.ODMGINC != undefined) display.MIDRATE[7] += talent.ODMGINC;
        if(talent.OCRITRATEDEC != undefined) display.MIDRATE[8] += talent.OCRITRATEDEC;
        if(talent.OCRITDMGDEC != undefined) display.MIDRATE[9] += talent.OCRITDMGDEC;
        if(talent.ODMGDEC != undefined) display.MIDRATE[10] += talent.ODMGDEC;
    }
    else if(side == 'defense'){
        if(talent.DATK != undefined) display.MIDRATE[0] += talent.DATK;
        if(talent.DINT != undefined) display.MIDRATE[1] += talent.DINT;
        if(talent.DDEF != undefined) display.MIDRATE[2] += talent.DDEF;
        if(talent.DMDEF != undefined) display.MIDRATE[3] += talent.DMDEF;
        if(talent.DDEX != undefined) display.MIDRATE[4] += talent.DDEX;
        if(talent.DCRITRATEINC != undefined) display.MIDRATE[5] += talent.DCRITRATEINC;
        if(talent.DCRITDMGINC != undefined) display.MIDRATE[6] += talent.DCRITDMGINC;
        if(talent.DDMGINC != undefined) display.MIDRATE[7] += talent.DDMGINC;
        if(talent.DCRITRATEDEC != undefined) display.MIDRATE[8] += talent.DCRITRATEDEC;
        if(talent.DCRITDMGDEC != undefined) display.MIDRATE[9] += talent.DCRITDMGDEC;
        if(talent.DDMGDEC != undefined) display.MIDRATE[10] += talent.DDMGDEC;
    }
    if(talent.CRITRATEINC != undefined) display.MIDRATE[5] += talent.CRITRATEINC;
    if(talent.CRITDMGINC != undefined) display.MIDRATE[6] += talent.CRITDMGINC;
    if(talent.DMGINC != undefined) display.MIDRATE[7] += talent.DMGINC;
    if(talent.CRITRATEDEC != undefined) display.MIDRATE[8] += talent.CRITRATEDEC;
    if(talent.CRITDMGDEC != undefined) display.MIDRATE[9] += talent.CRITDMGDEC;
    if(talent.DMGDEC != undefined) display.MIDRATE[10] += talent.DMGDEC;

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

function getInteractTalentSkill(side){
    var talent;
    if(side == 'offense') talent = combat.offTalent;
    else if(side == 'defense') talent = combat.defTalent;

    // collect display
    var display = {
        NAME: talent.NAME,
        /* SUB: [ATK, INT, DEF, MDEF, DEX] */
        SUB: [0, 0, 0, 0, 0],
        SUBEXIST: false,
        /* ADD: [ATK, INT, DEF, MDEF, DEX] */
        ADD: [0, 0, 0, 0, 0],
        ADDEXIST: false
    };
    if(talent.SUB != undefined && talent.SKILLTYPE.includes('SUB') && talent.SUB(side)){
        display.SUB = talent.SUB(side);
        display.SUBEXIST = true;
    }
    if(talent.ADD != undefined && talent.SKILLTYPE.includes('ADD') && talent.ADD(side)){
        display.ADD = talent.ADD(side);
        display.ADDEXIST = true;
    }
    return display;
};

