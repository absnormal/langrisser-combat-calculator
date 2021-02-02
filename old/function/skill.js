/*  */
function getMIDSkillSkill(side){
    var skill;
    if(side == 'offense') skill = combat.offSkill;
    else if(side == 'defense') skill = combat.offSkill;

    // collect display
    var display = {
        NAME: skill.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        DEFNEG: 0, MDEFNEG: 0, SKILLDMG: 0
    };
    if(skill.SKILLTYPE != undefined && skill.SKILLTYPE.includes('MIDRATE') && skill.MIDRATE(side)){
        display.MIDRATE = skill.MIDRATE(side);
    }
    if(side == 'offense'){
        if(skill.OATK != undefined) display.MIDRATE[0] += skill.OATK;
        if(skill.OINT != undefined) display.MIDRATE[1] += skill.OINT;
        if(skill.ODEF != undefined) display.MIDRATE[2] += skill.ODEF;
        if(skill.OMDEF != undefined) display.MIDRATE[3] += skill.OMDEF;
        if(skill.ODEX != undefined) display.MIDRATE[4] += skill.ODEX;
        if(skill.OCRITRATEINC != undefined) display.MIDRATE[5] += skill.OCRITRATEINC;
        if(skill.OCRITDMGINC != undefined) display.MIDRATE[6] += skill.OCRITDMGINC;
        if(skill.ODMGINC != undefined) display.MIDRATE[7] += skill.ODMGINC;
        if(skill.OCRITRATEDEC != undefined) display.MIDRATE[8] += skill.OCRITRATEDEC;
        if(skill.OCRITDMGDEC != undefined) display.MIDRATE[9] += skill.OCRITDMGDEC;
        if(skill.ODMGDEC != undefined) display.MIDRATE[10] += skill.ODMGDEC;
        if(skill.SKILLDMG != undefined) display.SKILLDMG += skill.SKILLDMG;
    }
    else if(side == 'defense'){
        if(skill.DATK != undefined) display.MIDRATE[0] += skill.DATK;
        if(skill.DINT != undefined) display.MIDRATE[1] += skill.DINT;
        if(skill.DDEF != undefined) display.MIDRATE[2] += skill.DDEF;
        if(skill.DMDEF != undefined) display.MIDRATE[3] += skill.DMDEF;
        if(skill.DDEX != undefined) display.MIDRATE[4] += skill.DDEX;
        if(skill.DCRITRATEINC != undefined) display.MIDRATE[5] += skill.DCRITRATEINC;
        if(skill.DCRITDMGINC != undefined) display.MIDRATE[6] += skill.DCRITDMGINC;
        if(skill.DDMGINC != undefined) display.MIDRATE[7] += skill.DDMGINC;
        if(skill.DCRITRATEDEC != undefined) display.MIDRATE[8] += skill.DCRITRATEDEC;
        if(skill.DCRITDMGDEC != undefined) display.MIDRATE[9] += skill.DCRITDMGDEC;
        if(skill.DDMGDEC != undefined) display.MIDRATE[10] += skill.DDMGDEC;
        if(skill.SKILLDMG != undefined) display.SKILLDMG += skill.SKILLDMG;
    }
    if(skill.CRITRATEINC != undefined) display.MIDRATE[5] += skill.CRITRATEINC;
    if(skill.CRITDMGINC != undefined) display.MIDRATE[6] += skill.CRITDMGINC;
    if(skill.DMGINC != undefined) display.MIDRATE[7] += skill.DMGINC;
    if(skill.CRITRATEDEC != undefined) display.MIDRATE[8] += skill.CRITRATEDEC;
    if(skill.CRITDMGDEC != undefined) display.MIDRATE[9] += skill.CRITDMGDEC;
    if(skill.DMGDEC != undefined) display.MIDRATE[10] += skill.DMGDEC;
    if(skill.DEFNEG != undefined) display.DEFNEG += skill.DEFNEG;
    if(skill.MDEFNEG != undefined) display.MDEFNEG += skill.MDEFNEG;

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
        combat.offDEFNEG += display.DEFNEG;
        combat.offMDEFNEG += display.MDEFNEG;
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
        combat.defDEFNEG += display.DEFNEG;
        combat.defMDEFNEG += display.MDEFNEG;
        combat.defSKILLDMG += display.SKILLDMG;
    }
    return display;
};

