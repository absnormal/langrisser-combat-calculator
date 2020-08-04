/*  */
function getAccessorySkill(side){
    if(side == 'offense'){
        var accessory = combat.offAccessory;
        if(accessory.ATK != undefined) combat.offATKRATE += accessory.ATK;
        if(accessory.INT != undefined) combat.offINTRATE += accessory.INT;
        if(accessory.DEF != undefined) combat.offDEFRATE += accessory.DEF;
        if(accessory.MDEF != undefined) combat.offMDEFRATE += accessory.MDEF;
        if(accessory.DEX != undefined) combat.offDEXRATE += accessory.DEX;
        if(accessory.DMGINC != undefined) combat.offDMGRATE += accessory.DMGINC;
        if(accessory.DMGDEC != undefined) combat.defDMGRATE -= accessory.DMGDEC;
        if(accessory.CRITDMGINC != undefined) combat.offCRITDMG += accessory.CRITDMGINC;
        if(accessory.CRITDMGDEC != undefined) combat.defCRITDMG -= accessory.CRITDMGDEC;
        if(accessory.CRITRATEINC != undefined) combat.offCRITRATE += accessory.CRITRATEINC;
        if(accessory.CRITRATEDEC != undefined) combat.defCRITRATE -= accessory.CRITRATEDEC;
        if(accessory.HEAL != undefined) combat.offHEAL += accessory.HEAL;
        if(accessory.HEALED != undefined) combat.offHEALED += accessory.HEALED;
    }
    else if(side == 'defense'){
        var accessory = combat.defAccessory;
        if(accessory.ATK != undefined) combat.defATKRATE += accessory.ATK;
        if(accessory.INT != undefined) combat.defINTRATE += accessory.INT;
        if(accessory.DEF != undefined) combat.defDEFRATE += accessory.DEF;
        if(accessory.MDEF != undefined) combat.defMDEFRATE += accessory.MDEF;
        if(accessory.DEX != undefined) combat.defDEXRATE += accessory.DEX;
        if(accessory.DMGINC != undefined) combat.defDMGRATE += accessory.DMGINC;
        if(accessory.DMGDEC != undefined) combat.offDMGRATE -= accessory.DMGDEC;
        if(accessory.CRITDMGINC != undefined) combat.defCRITDMG += accessory.CRITDMGINC;
        if(accessory.CRITDMGDEC != undefined) combat.offCRITDMG -= accessory.CRITDMGDEC;
        if(accessory.CRITRATEINC != undefined) combat.defCRITRATE += accessory.CRITRATEINC;
        if(accessory.CRITRATEDEC != undefined) combat.offCRITRATE -= accessory.CRITRATEDEC;
        if(accessory.HEAL != undefined) combat.defHEAL += accessory.HEAL;
        if(accessory.HEALED != undefined) combat.defHEALED += accessory.HEALED;
    }
};

function getMIDAccessorySkill(side){
    if(side == 'offense'){
        var accessory = combat.offAccessory;
        if(accessory.OATK != undefined) combat.offATKRATE += accessory.OATK;
        if(accessory.OINT != undefined) combat.offINTRATE += accessory.OINT;
        if(accessory.ODEF != undefined) combat.offDEFRATE += accessory.ODEF;
        if(accessory.OMDEF != undefined) combat.offMDEFRATE += accessory.OMDEF;
        if(accessory.ODEX != undefined) combat.offDEXRATE += accessory.ODEX;
        if(accessory.ODMGINC != undefined) combat.offDMGRATE += accessory.ODMGINC;
        if(accessory.ODMGDEC != undefined) combat.defDMGRATE -= accessory.ODMGDEC;
        if(accessory.OCRITDMGINC != undefined) combat.offCRITDMG += accessory.OCRITDMGINC;
        if(accessory.OCRITDMGDEC != undefined) combat.defCRITDMG -= accessory.OCRITDMGDEC;
        if(accessory.OCRITRATEINC != undefined) combat.offCRITRATE += accessory.OCRITRATEINC;
        if(accessory.OCRITRATEDEC != undefined) combat.defCRITRATE -= accessory.OCRITRATEDEC;
    }
    else if(side == 'defense'){
        var accessory = combat.defAccessory;
        if(accessory.DATK != undefined) combat.defATKRATE += accessory.DATK;
        if(accessory.DINT != undefined) combat.defINTRATE += accessory.DINT;
        if(accessory.DDEF != undefined) combat.defDEFRATE += accessory.DDEF;
        if(accessory.DMDEF != undefined) combat.defMDEFRATE += accessory.DMDEF;
        if(accessory.DDEX != undefined) combat.defDEXRATE += accessory.DDEX;
        if(accessory.DDMGINC != undefined) combat.defDMGRATE += accessory.DDMGINC;
        if(accessory.DDMGDEC != undefined) combat.offDMGRATE -= accessory.DDMGDEC;
        if(accessory.DCRITDMGINC != undefined) combat.defCRITDMG += accessory.DCRITDMGINC;
        if(accessory.DCRITDMGDEC != undefined) combat.offCRITDMG -= accessory.DCRITDMGDEC;
        if(accessory.DCRITRATEINC != undefined) combat.defCRITRATE += accessory.DCRITRATEINC;
        if(accessory.DCRITRATEDEC != undefined) combat.offCRITRATE -= accessory.DCRITRATEDEC;
    }
};

