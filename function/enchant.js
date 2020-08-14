/*  */
function getEnchantSkill(side){
    var enchant;
    if(side == 'offense') enchant = combat.offEnchant;
    else if(side == 'defense') enchant = combat.defEnchant;

    // collect display
    var display = {
        NAME: enchant.NAME,
        RATE: [0, 0, 0, 0, 0]
    };
    if(enchant.SKILLTYPE != undefined && enchant.SKILLTYPE.includes('RATE') && enchant.RATE(side)){
        display.RATE = enchant.RATE(side);
    }
    if(enchant.ATK != undefined) display.RATE[0] += enchant.ATK;
    if(enchant.INT != undefined) display.RATE[1] += enchant.INT;
    if(enchant.DEF != undefined) display.RATE[2] += enchant.DEF;
    if(enchant.MDEF != undefined) display.RATE[3] += enchant.MDEF;
    if(enchant.DEX != undefined) display.RATE[4] += enchant.DEX;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.RATE[0];
        combat.offINTRATE += display.RATE[1];
        combat.offDEFRATE += display.RATE[2];
        combat.offMDEFRATE += display.RATE[3];
        combat.offDEXRATE += display.RATE[4];
        if(enchant.HEAL != undefined) combat.offHEAL += enchant.HEAL;
        if(enchant.HEALED != undefined) combat.offHEALED += enchant.HEALED;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.RATE[0];
        combat.defINTRATE += display.RATE[1];
        combat.defDEFRATE += display.RATE[2];
        combat.defMDEFRATE += display.RATE[3];
        combat.defDEXRATE += display.RATE[4];
        if(enchant.HEAL != undefined) combat.defHEAL += enchant.HEAL;
        if(enchant.HEALED != undefined) combat.defHEALED += enchant.HEALED;
    }
    return display;
};

function getMIDEnchantSkill(side){
    var enchant;
    if(side == 'offense') enchant = combat.offEnchant;
    else if(side == 'defense') enchant = combat.defEnchant;

    // collect display
    var display = {
        NAME: enchant.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    if(enchant.SKILLTYPE != undefined && enchant.SKILLTYPE.includes('MIDRATE') && enchant.MIDRATE(side)){
        display.MIDRATE = enchant.MIDRATE(side);
    }
    if(side == 'offense'){
        if(enchant.OATK != undefined) display.MIDRATE[0] += enchant.OATK;
        if(enchant.OINT != undefined) display.MIDRATE[1] += enchant.OINT;
        if(enchant.ODEF != undefined) display.MIDRATE[2] += enchant.ODEF;
        if(enchant.OMDEF != undefined) display.MIDRATE[3] += enchant.OMDEF;
        if(enchant.ODEX != undefined) display.MIDRATE[4] += enchant.ODEX;
        if(enchant.OCRITRATEINC != undefined) display.MIDRATE[5] += enchant.OCRITRATEINC;
        if(enchant.OCRITDMGINC != undefined) display.MIDRATE[6] += enchant.OCRITDMGINC;
        if(enchant.ODMGINC != undefined) display.MIDRATE[7] += enchant.ODMGINC;
        if(enchant.OCRITRATEDEC != undefined) display.MIDRATE[8] += enchant.OCRITRATEDEC;
        if(enchant.OCRITDMGDEC != undefined) display.MIDRATE[9] += enchant.OCRITDMGDEC;
        if(enchant.ODMGDEC != undefined) display.MIDRATE[10] += enchant.ODMGDEC;
    }
    else if(side == 'defense'){
        if(enchant.DATK != undefined) display.MIDRATE[0] += enchant.DATK;
        if(enchant.DINT != undefined) display.MIDRATE[1] += enchant.DINT;
        if(enchant.DDEF != undefined) display.MIDRATE[2] += enchant.DDEF;
        if(enchant.DMDEF != undefined) display.MIDRATE[3] += enchant.DMDEF;
        if(enchant.DDEX != undefined) display.MIDRATE[4] += enchant.DDEX;
        if(enchant.DCRITRATEINC != undefined) display.MIDRATE[5] += enchant.DCRITRATEINC;
        if(enchant.DCRITDMGINC != undefined) display.MIDRATE[6] += enchant.DCRITDMGINC;
        if(enchant.DDMGINC != undefined) display.MIDRATE[7] += enchant.DDMGINC;
        if(enchant.DCRITRATEDEC != undefined) display.MIDRATE[8] += enchant.DCRITRATEDEC;
        if(enchant.DCRITDMGDEC != undefined) display.MIDRATE[9] += enchant.DCRITDMGDEC;
        if(enchant.DDMGDEC != undefined) display.MIDRATE[10] += enchant.DDMGDEC;
    }
    if(enchant.CRITRATEINC != undefined) display.MIDRATE[5] += enchant.CRITRATEINC;
    if(enchant.CRITDMGINC != undefined) display.MIDRATE[6] += enchant.CRITDMGINC;
    if(enchant.DMGINC != undefined) display.MIDRATE[7] += enchant.DMGINC;
    if(enchant.CRITRATEDEC != undefined) display.MIDRATE[8] += enchant.CRITRATEDEC;
    if(enchant.CRITDMGDEC != undefined) display.MIDRATE[9] += enchant.CRITDMGDEC;
    if(enchant.DMGDEC != undefined) display.MIDRATE[10] += enchant.DMGDEC;

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

