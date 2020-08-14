/*  */
function getWeaponSkill(side){
    var weapon;
    if(side == 'offense') weapon = combat.offWeapon;
    else if(side == 'defense') weapon = combat.defWeapon;

    // collect display
    var display = {
        NAME: weapon.NAME,
        RATE: [0, 0, 0, 0, 0]
    };
    if(weapon.SKILLTYPE != undefined && weapon.SKILLTYPE.includes('RATE') && weapon.RATE(side)){
        display.RATE = weapon.RATE(side);
    }
    if(weapon.ATK != undefined) display.RATE[0] += weapon.ATK;
    if(weapon.INT != undefined) display.RATE[1] += weapon.INT;
    if(weapon.DEF != undefined) display.RATE[2] += weapon.DEF;
    if(weapon.MDEF != undefined) display.RATE[3] += weapon.MDEF;
    if(weapon.DEX != undefined) display.RATE[4] += weapon.DEX;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.RATE[0];
        combat.offINTRATE += display.RATE[1];
        combat.offDEFRATE += display.RATE[2];
        combat.offMDEFRATE += display.RATE[3];
        combat.offDEXRATE += display.RATE[4];
        if(weapon.HEAL != undefined) combat.offHEAL += weapon.HEAL;
        if(weapon.HEALED != undefined) combat.offHEALED += weapon.HEALED;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.RATE[0];
        combat.defINTRATE += display.RATE[1];
        combat.defDEFRATE += display.RATE[2];
        combat.defMDEFRATE += display.RATE[3];
        combat.defDEXRATE += display.RATE[4];
        if(weapon.HEAL != undefined) combat.defHEAL += weapon.HEAL;
        if(weapon.HEALED != undefined) combat.defHEALED += weapon.HEALED;
    }
    return display;
};

function getMIDWeaponSkill(side){
    var weapon;
    if(side == 'offense') weapon = combat.offWeapon;
    else if(side == 'defense') weapon = combat.defWeapon;

    // collect display
    var display = {
        NAME: weapon.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        SKILLDMG: 0
    };
    if(weapon.SKILLTYPE != undefined && weapon.SKILLTYPE.includes('MIDRATE') && weapon.MIDRATE(side)){
        display.MIDRATE = weapon.MIDRATE(side);
    }
    if(side == 'offense'){
        if(weapon.OATK != undefined) display.MIDRATE[0] += weapon.OATK;
        if(weapon.OINT != undefined) display.MIDRATE[1] += weapon.OINT;
        if(weapon.ODEF != undefined) display.MIDRATE[2] += weapon.ODEF;
        if(weapon.OMDEF != undefined) display.MIDRATE[3] += weapon.OMDEF;
        if(weapon.ODEX != undefined) display.MIDRATE[4] += weapon.ODEX;
        if(weapon.OCRITRATEINC != undefined) display.MIDRATE[5] += weapon.OCRITRATEINC;
        if(weapon.OCRITDMGINC != undefined) display.MIDRATE[6] += weapon.OCRITDMGINC;
        if(weapon.ODMGINC != undefined) display.MIDRATE[7] += weapon.ODMGINC;
        if(weapon.OCRITRATEDEC != undefined) display.MIDRATE[8] += weapon.OCRITRATEDEC;
        if(weapon.OCRITDMGDEC != undefined) display.MIDRATE[9] += weapon.OCRITDMGDEC;
        if(weapon.ODMGDEC != undefined) display.MIDRATE[10] += weapon.ODMGDEC;
        if(weapon.SKILLDMG != undefined) display.SKILLDMG += weapon.SKILLDMG;
    }
    else if(side == 'defense'){
        if(weapon.DATK != undefined) display.MIDRATE[0] += weapon.DATK;
        if(weapon.DINT != undefined) display.MIDRATE[1] += weapon.DINT;
        if(weapon.DDEF != undefined) display.MIDRATE[2] += weapon.DDEF;
        if(weapon.DMDEF != undefined) display.MIDRATE[3] += weapon.DMDEF;
        if(weapon.DDEX != undefined) display.MIDRATE[4] += weapon.DDEX;
        if(weapon.DCRITRATEINC != undefined) display.MIDRATE[5] += weapon.DCRITRATEINC;
        if(weapon.DCRITDMGINC != undefined) display.MIDRATE[6] += weapon.DCRITDMGINC;
        if(weapon.DDMGINC != undefined) display.MIDRATE[7] += weapon.DDMGINC;
        if(weapon.DCRITRATEDEC != undefined) display.MIDRATE[8] += weapon.DCRITRATEDEC;
        if(weapon.DCRITDMGDEC != undefined) display.MIDRATE[9] += weapon.DCRITDMGDEC;
        if(weapon.DDMGDEC != undefined) display.MIDRATE[10] += weapon.DDMGDEC;
    }
    if(weapon.CRITRATEINC != undefined) display.MIDRATE[5] += weapon.CRITRATEINC;
    if(weapon.CRITDMGINC != undefined) display.MIDRATE[6] += weapon.CRITDMGINC;
    if(weapon.DMGINC != undefined) display.MIDRATE[7] += weapon.DMGINC;
    if(weapon.CRITRATEDEC != undefined) display.MIDRATE[8] += weapon.CRITRATEDEC;
    if(weapon.CRITDMGDEC != undefined) display.MIDRATE[9] += weapon.CRITDMGDEC;
    if(weapon.DMGDEC != undefined) display.MIDRATE[10] += weapon.DMGDEC;

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
        combat.offSKILLDMG += display.SKILLDMG;
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

