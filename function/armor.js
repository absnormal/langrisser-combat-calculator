/*  */
function getArmorSkill(side){
    var armor;
    if(side == 'offense') armor = combat.offArmor;
    else if(side == 'defense') armor = combat.defArmor;

    // collect display
    var display = {
        NAME: armor.NAME,
        RATE: [0, 0, 0, 0, 0],
        CHARONLY: true
    };
    if(armor.SKILLTYPE != undefined && armor.SKILLTYPE.includes('RATE') && armor.RATE(side)){
        display.RATE = armor.RATE(side);
    }
    if(armor.ATK != undefined) display.RATE[0] += armor.ATK;
    if(armor.INT != undefined) display.RATE[1] += armor.INT;
    if(armor.DEF != undefined) display.RATE[2] += armor.DEF;
    if(armor.MDEF != undefined) display.RATE[3] += armor.MDEF;
    if(armor.DEX != undefined) display.RATE[4] += armor.DEX;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.RATE[0];
        combat.offINTRATE += display.RATE[1];
        combat.offDEFRATE += display.RATE[2];
        combat.offMDEFRATE += display.RATE[3];
        combat.offDEXRATE += display.RATE[4];
        if(armor.HEAL != undefined) combat.offHEAL += armor.HEAL;
        if(armor.HEALED != undefined) combat.offHEALED += armor.HEALED;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.RATE[0];
        combat.defINTRATE += display.RATE[1];
        combat.defDEFRATE += display.RATE[2];
        combat.defMDEFRATE += display.RATE[3];
        combat.defDEXRATE += display.RATE[4];
        if(armor.HEAL != undefined) combat.defHEAL += armor.HEAL;
        if(armor.HEALED != undefined) combat.defHEALED += armor.HEALED;
    }
    return display;
};

function getMIDArmorSkill(side){
    var armor;
    if(side == 'offense') armor = combat.offArmor;
    else if(side == 'defense') armor = combat.defArmor;

    // collect display
    var display = {
        NAME: armor.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        CHARONLY: true
    };
    if(armor.SKILLTYPE != undefined && armor.SKILLTYPE.includes('MIDRATE') && armor.MIDRATE(side)){
        display.MIDRATE = armor.MIDRATE(side);
    }
    if(armor.CHARONLY != undefined && armor.CHARONLY == false){
        display.CHARONLY = false;
    }
    if(side == 'offense'){
        if(armor.OATK != undefined) display.MIDRATE[0] += armor.OATK;
        if(armor.OINT != undefined) display.MIDRATE[1] += armor.OINT;
        if(armor.ODEF != undefined) display.MIDRATE[2] += armor.ODEF;
        if(armor.OMDEF != undefined) display.MIDRATE[3] += armor.OMDEF;
        if(armor.ODEX != undefined) display.MIDRATE[4] += armor.ODEX;
        if(armor.OCRITRATEINC != undefined) display.MIDRATE[5] += armor.OCRITRATEINC;
        if(armor.OCRITDMGINC != undefined) display.MIDRATE[6] += armor.OCRITDMGINC;
        if(armor.ODMGINC != undefined) display.MIDRATE[7] += armor.ODMGINC;
        if(armor.OCRITRATEDEC != undefined) display.MIDRATE[8] += armor.OCRITRATEDEC;
        if(armor.OCRITDMGDEC != undefined) display.MIDRATE[9] += armor.OCRITDMGDEC;
        if(armor.ODMGDEC != undefined) display.MIDRATE[10] += armor.ODMGDEC;
    }
    else if(side == 'defense'){
        if(armor.DATK != undefined) display.MIDRATE[0] += armor.DATK;
        if(armor.DINT != undefined) display.MIDRATE[1] += armor.DINT;
        if(armor.DDEF != undefined) display.MIDRATE[2] += armor.DDEF;
        if(armor.DMDEF != undefined) display.MIDRATE[3] += armor.DMDEF;
        if(armor.DDEX != undefined) display.MIDRATE[4] += armor.DDEX;
        if(armor.DCRITRATEINC != undefined) display.MIDRATE[5] += armor.DCRITRATEINC;
        if(armor.DCRITDMGINC != undefined) display.MIDRATE[6] += armor.DCRITDMGINC;
        if(armor.DDMGINC != undefined) display.MIDRATE[7] += armor.DDMGINC;
        if(armor.DCRITRATEDEC != undefined) display.MIDRATE[8] += armor.DCRITRATEDEC;
        if(armor.DCRITDMGDEC != undefined) display.MIDRATE[9] += armor.DCRITDMGDEC;
        if(armor.DDMGDEC != undefined) display.MIDRATE[10] += armor.DDMGDEC;
    }
    if(armor.CRITRATEINC != undefined) display.MIDRATE[5] += armor.CRITRATEINC;
    if(armor.CRITDMGINC != undefined) display.MIDRATE[6] += armor.CRITDMGINC;
    if(armor.DMGINC != undefined) display.MIDRATE[7] += armor.DMGINC;
    if(armor.CRITRATEDEC != undefined) display.MIDRATE[8] += armor.CRITRATEDEC;
    if(armor.CRITDMGDEC != undefined) display.MIDRATE[9] += armor.CRITDMGDEC;
    if(armor.DMGDEC != undefined) display.MIDRATE[10] += armor.DMGDEC;

    // add to combat
    if(side == 'offense'){
        // char
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
        // soldier
        if(display.CHARONLY == false){
            combat.offsoldDMGRATE += display.MIDRATE[7];
            combat.defsoldDMGRATE -= display.MIDRATE[10];
        }
    }

    else if(side == 'defense'){
        // char
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
        // soldier
        if(display.CHARONLY == false){
            combat.defsoldDMGRATE += display.MIDRATE[7];
            combat.offsoldDMGRATE -= display.MIDRATE[10];
        }
    }
    return display;
};

function getArmorBaseSkill(side){
    var armor;
    if(side == 'offense') armor = combat.offArmor;

    // collect display
    var display = {
        NAME: armor.NAME,
        BASE: [0, 0, 0, 0, 0, 0]
    };
    if(armor.BASEHP != undefined) display.BASE[1] += armor.BASEHP;
    if(armor.BASEATK != undefined) display.BASE[2] += armor.BASEATK;
    if(armor.BASEINT != undefined) display.BASE[3] += armor.BASEINT;
    if(armor.BASEDEF != undefined) display.BASE[4] += armor.BASEDEF;
    if(armor.BASEMDEF != undefined) display.BASE[5] += armor.BASEMDEF;
    if(armor.BASEDEX != undefined) display.BASE[6] += armor.BASEDEX;

    // add to combat
    if(side == 'offense'){
        combat.offADDHP += display.BASE[0];
        combat.offADDATK += display.BASE[1];
        combat.offADDINT += display.BASE[2];
        combat.offADDDEF += display.BASE[3];
        combat.offADDMDEF += display.BASE[4];
        combat.offADDDEX += display.BASE[5];
    }
    return display;
};
