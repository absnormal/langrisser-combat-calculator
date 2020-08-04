/*  */
function getTalentSkill(side){
    if(side == 'offense'){
        var talent = combat.offTalent;
        if(talent.ATK != undefined) combat.offATKRATE += talent.ATK;
        if(talent.INT != undefined) combat.offINTRATE += talent.INT;
        if(talent.DEF != undefined) combat.offDEFRATE += talent.DEF;
        if(talent.MDEF != undefined) combat.offMDEFRATE += talent.MDEF;
        if(talent.DEX != undefined) combat.offDEXRATE += talent.DEX;
        if(talent.DMGINC != undefined) combat.offDMGRATE += talent.DMGINC;
        if(talent.DMGDEC != undefined) combat.defDMGRATE -= talent.DMGDEC;
        if(talent.CRITDMGINC != undefined) combat.offCRITDMG += talent.CRITDMGINC;
        if(talent.CRITDMGDEC != undefined) combat.defCRITDMG -= talent.CRITDMGDEC;
        if(talent.CRITRATEINC != undefined) combat.offCRITRATE += talent.CRITRATEINC;
        if(talent.CRITRATEDEC != undefined) combat.defCRITRATE -= talent.CRITRATEDEC;
        if(talent.HEAL != undefined) combat.offHEAL += talent.HEAL;
        if(talent.HEALED != undefined) combat.offHEALED += talent.HEALED;
    }
    else if(side == 'defense'){
        var talent = combat.defTalent;
        if(talent.ATK != undefined) combat.defATKRATE += talent.ATK;
        if(talent.INT != undefined) combat.defINTRATE += talent.INT;
        if(talent.DEF != undefined) combat.defDEFRATE += talent.DEF;
        if(talent.MDEF != undefined) combat.defMDEFRATE += talent.MDEF;
        if(talent.DEX != undefined) combat.defDEXRATE += talent.DEX;
        if(talent.DMGINC != undefined) combat.defDMGRATE += talent.DMGINC;
        if(talent.DMGDEC != undefined) combat.offDMGRATE -= talent.DMGDEC;
        if(talent.CRITDMGINC != undefined) combat.defCRITDMG += talent.CRITDMGINC;
        if(talent.CRITDMGDEC != undefined) combat.offCRITDMG -= talent.CRITDMGDEC;
        if(talent.CRITRATEINC != undefined) combat.defCRITRATE += talent.CRITRATEINC;
        if(talent.CRITRATEDEC != undefined) combat.offCRITRATE -= talent.CRITRATEDEC;
        if(talent.HEAL != undefined) combat.defHEAL += talent.HEAL;
        if(talent.HEALED != undefined) combat.defHEALED += talent.HEALED;
    }
};

function getMIDTalentSkill(side){
    if(side == 'offense'){
        var talent = combat.offTalent;
        if(talent.OATK != undefined) combat.offATKRATE += talent.OATK;
        if(talent.OINT != undefined) combat.offINTRATE += talent.OINT;
        if(talent.ODEF != undefined) combat.offDEFRATE += talent.ODEF;
        if(talent.OMDEF != undefined) combat.offMDEFRATE += talent.OMDEF;
        if(talent.ODEX != undefined) combat.offDEXRATE += talent.ODEX;
        if(talent.ODMGINC != undefined) combat.offDMGRATE += talent.ODMGINC;
        if(talent.ODMGDEC != undefined) combat.defDMGRATE -= talent.ODMGDEC;
        if(talent.OCRITDMGINC != undefined) combat.offCRITDMG += talent.OCRITDMGINC;
        if(talent.OCRITDMGDEC != undefined) combat.defCRITDMG -= talent.OCRITDMGDEC;
        if(talent.OCRITRATEINC != undefined) combat.offCRITRATE += talent.OCRITRATEINC;
        if(talent.OCRITRATEDEC != undefined) combat.defCRITRATE -= talent.OCRITRATEDEC;
    }
    else if(side == 'defense'){
        var talent = combat.defTalent;
        if(talent.DATK != undefined) combat.defATKRATE += talent.DATK;
        if(talent.DINT != undefined) combat.defINTRATE += talent.DINT;
        if(talent.DDEF != undefined) combat.defDEFRATE += talent.DDEF;
        if(talent.DMDEF != undefined) combat.defMDEFRATE += talent.DMDEF;
        if(talent.DDEX != undefined) combat.defDEXRATE += talent.DDEX;
        if(talent.DDMGINC != undefined) combat.defDMGRATE += talent.DDMGINC;
        if(talent.DDMGDEC != undefined) combat.offDMGRATE -= talent.DDMGDEC;
        if(talent.DCRITDMGINC != undefined) combat.defCRITDMG += talent.DCRITDMGINC;
        if(talent.DCRITDMGDEC != undefined) combat.offCRITDMG -= talent.DCRITDMGDEC;
        if(talent.DCRITRATEINC != undefined) combat.defCRITRATE += talent.DCRITRATEINC;
        if(talent.DCRITRATEDEC != undefined) combat.offCRITRATE -= talent.DCRITRATEDEC;
    }
};

