/*  */
function getHelmetSkill(side){
    if(side == 'offense'){
        var helmet = combat.offHelmet;
        if(helmet.ATK != undefined) combat.offATKRATE += helmet.ATK;
        if(helmet.INT != undefined) combat.offINTRATE += helmet.INT;
        if(helmet.DEF != undefined) combat.offDEFRATE += helmet.DEF;
        if(helmet.MDEF != undefined) combat.offMDEFRATE += helmet.MDEF;
        if(helmet.DEX != undefined) combat.offDEXRATE += helmet.DEX;
        if(helmet.DMGINC != undefined) combat.offDMGRATE += helmet.DMGINC;
        if(helmet.DMGDEC != undefined) combat.defDMGRATE -= helmet.DMGDEC;
        if(helmet.CRITDMGINC != undefined) combat.offCRITDMG += helmet.CRITDMGINC;
        if(helmet.CRITDMGDEC != undefined) combat.defCRITDMG -= helmet.CRITDMGDEC;
        if(helmet.CRITRATEINC != undefined) combat.offCRITRATE += helmet.CRITRATEINC;
        if(helmet.CRITRATEDEC != undefined) combat.defCRITRATE -= helmet.CRITRATEDEC;
        if(helmet.HEAL != undefined) combat.offHEAL += helmet.HEAL;
        if(helmet.HEALED != undefined) combat.offHEALED += helmet.HEALED;
    }
    else if(side == 'defense'){
        var helmet = combat.defHelmet;
        if(helmet.ATK != undefined) combat.defATKRATE += helmet.ATK;
        if(helmet.INT != undefined) combat.defINTRATE += helmet.INT;
        if(helmet.DEF != undefined) combat.defDEFRATE += helmet.DEF;
        if(helmet.MDEF != undefined) combat.defMDEFRATE += helmet.MDEF;
        if(helmet.DEX != undefined) combat.defDEXRATE += helmet.DEX;
        if(helmet.DMGINC != undefined) combat.defDMGRATE += helmet.DMGINC;
        if(helmet.DMGDEC != undefined) combat.offDMGRATE -= helmet.DMGDEC;
        if(helmet.CRITDMGINC != undefined) combat.defCRITDMG += helmet.CRITDMGINC;
        if(helmet.CRITDMGDEC != undefined) combat.offCRITDMG -= helmet.CRITDMGDEC;
        if(helmet.CRITRATEINC != undefined) combat.defCRITRATE += helmet.CRITRATEINC;
        if(helmet.CRITRATEDEC != undefined) combat.offCRITRATE -= helmet.CRITRATEDEC;
        if(helmet.HEAL != undefined) combat.defHEAL += helmet.HEAL;
        if(helmet.HEALED != undefined) combat.defHEALED += helmet.HEALED;
    }
};

function getMIDHelmetSkill(side){
    if(side == 'offense'){
        var helmet = combat.offHelmet;
        if(helmet.OATK != undefined) combat.offATKRATE += helmet.OATK;
        if(helmet.OINT != undefined) combat.offINTRATE += helmet.OINT;
        if(helmet.ODEF != undefined) combat.offDEFRATE += helmet.ODEF;
        if(helmet.OMDEF != undefined) combat.offMDEFRATE += helmet.OMDEF;
        if(helmet.ODEX != undefined) combat.offDEXRATE += helmet.ODEX;
        if(helmet.ODMGINC != undefined) combat.offDMGRATE += helmet.ODMGINC;
        if(helmet.ODMGDEC != undefined) combat.defDMGRATE -= helmet.ODMGDEC;
        if(helmet.OCRITDMGINC != undefined) combat.offCRITDMG += helmet.OCRITDMGINC;
        if(helmet.OCRITDMGDEC != undefined) combat.defCRITDMG -= helmet.OCRITDMGDEC;
        if(helmet.OCRITRATEINC != undefined) combat.offCRITRATE += helmet.OCRITRATEINC;
        if(helmet.OCRITRATEDEC != undefined) combat.defCRITRATE -= helmet.OCRITRATEDEC;
    }
    else if(side == 'defense'){
        var helmet = combat.defHelmet;
        if(helmet.DATK != undefined) combat.defATKRATE += helmet.DATK;
        if(helmet.DINT != undefined) combat.defINTRATE += helmet.DINT;
        if(helmet.DDEF != undefined) combat.defDEFRATE += helmet.DDEF;
        if(helmet.DMDEF != undefined) combat.defMDEFRATE += helmet.DMDEF;
        if(helmet.DDEX != undefined) combat.defDEXRATE += helmet.DDEX;
        if(helmet.DDMGINC != undefined) combat.defDMGRATE += helmet.DDMGINC;
        if(helmet.DDMGDEC != undefined) combat.offDMGRATE -= helmet.DDMGDEC;
        if(helmet.DCRITDMGINC != undefined) combat.defCRITDMG += helmet.DCRITDMGINC;
        if(helmet.DCRITDMGDEC != undefined) combat.offCRITDMG -= helmet.DCRITDMGDEC;
        if(helmet.DCRITRATEINC != undefined) combat.defCRITRATE += helmet.DCRITRATEINC;
        if(helmet.DCRITRATEDEC != undefined) combat.offCRITRATE -= helmet.DCRITRATEDEC;
    }
};

