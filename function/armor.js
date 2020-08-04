/*  */
function getArmorSkill(side){
    if(side == 'offense'){
        var armor = combat.offArmor;
        if(armor.ATK != undefined) combat.offATKRATE += armor.ATK;
        if(armor.INT != undefined) combat.offINTRATE += armor.INT;
        if(armor.DEF != undefined) combat.offDEFRATE += armor.DEF;
        if(armor.MDEF != undefined) combat.offMDEFRATE += armor.MDEF;
        if(armor.DEX != undefined) combat.offDEXRATE += armor.DEX;
        if(armor.DMGINC != undefined) combat.offDMGRATE += armor.DMGINC;
        if(armor.DMGDEC != undefined) combat.defDMGRATE -= armor.DMGDEC;
        if(armor.CRITDMGINC != undefined) combat.offCRITDMG += armor.CRITDMGINC;
        if(armor.CRITDMGDEC != undefined) combat.defCRITDMG -= armor.CRITDMGDEC;
        if(armor.CRITRATEINC != undefined) combat.offCRITRATE += armor.CRITRATEINC;
        if(armor.CRITRATEDEC != undefined) combat.defCRITRATE -= armor.CRITRATEDEC;
        if(armor.HEAL != undefined) combat.offHEAL += armor.HEAL;
        if(armor.HEALED != undefined) combat.offHEALED += armor.HEALED;
    }
    else if(side == 'defense'){
        var armor = combat.defArmor;
        if(armor.ATK != undefined) combat.defATKRATE += armor.ATK;
        if(armor.INT != undefined) combat.defINTRATE += armor.INT;
        if(armor.DEF != undefined) combat.defDEFRATE += armor.DEF;
        if(armor.MDEF != undefined) combat.defMDEFRATE += armor.MDEF;
        if(armor.DEX != undefined) combat.defDEXRATE += armor.DEX;
        if(armor.DMGINC != undefined) combat.defDMGRATE += armor.DMGINC;
        if(armor.DMGDEC != undefined) combat.offDMGRATE -= armor.DMGDEC;
        if(armor.CRITDMGINC != undefined) combat.defCRITDMG += armor.CRITDMGINC;
        if(armor.CRITDMGDEC != undefined) combat.offCRITDMG -= armor.CRITDMGDEC;
        if(armor.CRITRATEINC != undefined) combat.defCRITRATE += armor.CRITRATEINC;
        if(armor.CRITRATEDEC != undefined) combat.offCRITRATE -= armor.CRITRATEDEC;
        if(armor.HEAL != undefined) combat.defHEAL += armor.HEAL;
        if(armor.HEALED != undefined) combat.defHEALED += armor.HEALED;
    }
};

function getMIDArmorSkill(side){
    if(side == 'offense'){
        var armor = combat.offArmor;
        if(armor.OATK != undefined) combat.offATKRATE += armor.OATK;
        if(armor.OINT != undefined) combat.offINTRATE += armor.OINT;
        if(armor.ODEF != undefined) combat.offDEFRATE += armor.ODEF;
        if(armor.OMDEF != undefined) combat.offMDEFRATE += armor.OMDEF;
        if(armor.ODEX != undefined) combat.offDEXRATE += armor.ODEX;
        if(armor.ODMGINC != undefined) combat.offDMGRATE += armor.ODMGINC;
        if(armor.ODMGDEC != undefined) combat.defDMGRATE -= armor.ODMGDEC;
        if(armor.OCRITDMGINC != undefined) combat.offCRITDMG += armor.OCRITDMGINC;
        if(armor.OCRITDMGDEC != undefined) combat.defCRITDMG -= armor.OCRITDMGDEC;
        if(armor.OCRITRATEINC != undefined) combat.offCRITRATE += armor.OCRITRATEINC;
        if(armor.OCRITRATEDEC != undefined) combat.defCRITRATE -= armor.OCRITRATEDEC;
    }
    else if(side == 'defense'){
        var armor = combat.defArmor;
        if(armor.DATK != undefined) combat.defATKRATE += armor.DATK;
        if(armor.DINT != undefined) combat.defINTRATE += armor.DINT;
        if(armor.DDEF != undefined) combat.defDEFRATE += armor.DDEF;
        if(armor.DMDEF != undefined) combat.defMDEFRATE += armor.DMDEF;
        if(armor.DDEX != undefined) combat.defDEXRATE += armor.DDEX;
        if(armor.DDMGINC != undefined) combat.defDMGRATE += armor.DDMGINC;
        if(armor.DDMGDEC != undefined) combat.offDMGRATE -= armor.DDMGDEC;
        if(armor.DCRITDMGINC != undefined) combat.defCRITDMG += armor.DCRITDMGINC;
        if(armor.DCRITDMGDEC != undefined) combat.offCRITDMG -= armor.DCRITDMGDEC;
        if(armor.DCRITRATEINC != undefined) combat.defCRITRATE += armor.DCRITRATEINC;
        if(armor.DCRITRATEDEC != undefined) combat.offCRITRATE -= armor.DCRITRATEDEC;
    }
};

