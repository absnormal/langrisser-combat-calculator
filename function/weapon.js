/*  */
function getWeaponSkill(side){
    if(side == 'offense'){
        var weapon = combat.offWeapon;
        if(weapon.ATK != undefined) combat.offATKRATE += weapon.ATK;
        if(weapon.INT != undefined) combat.offINTRATE += weapon.INT;
        if(weapon.DEF != undefined) combat.offDEFRATE += weapon.DEF;
        if(weapon.MDEF != undefined) combat.offMDEFRATE += weapon.MDEF;
        if(weapon.DEX != undefined) combat.offDEXRATE += weapon.DEX;
        if(weapon.DMGINC != undefined) combat.offDMGRATE += weapon.DMGINC;
        if(weapon.DMGDEC != undefined) combat.defDMGRATE -= weapon.DMGDEC;
        if(weapon.CRITDMGINC != undefined) combat.offCRITDMG += weapon.CRITDMGINC;
        if(weapon.CRITDMGDEC != undefined) combat.defCRITDMG -= weapon.CRITDMGDEC;
        if(weapon.CRITRATEINC != undefined) combat.offCRITRATE += weapon.CRITRATEINC;
        if(weapon.CRITRATEDEC != undefined) combat.defCRITRATE -= weapon.CRITRATEDEC;
        if(weapon.HEAL != undefined) combat.offHEAL += weapon.HEAL;
        if(weapon.HEALED != undefined) combat.offHEALED += weapon.HEALED;
    }
    else if(side == 'defense'){
        var weapon = combat.defWeapon;
        if(weapon.ATK != undefined) combat.defATKRATE += weapon.ATK;
        if(weapon.INT != undefined) combat.defINTRATE += weapon.INT;
        if(weapon.DEF != undefined) combat.defDEFRATE += weapon.DEF;
        if(weapon.MDEF != undefined) combat.defMDEFRATE += weapon.MDEF;
        if(weapon.DEX != undefined) combat.defDEXRATE += weapon.DEX;
        if(weapon.DMGINC != undefined) combat.defDMGRATE += weapon.DMGINC;
        if(weapon.DMGDEC != undefined) combat.offDMGRATE -= weapon.DMGDEC;
        if(weapon.CRITDMGINC != undefined) combat.defCRITDMG += weapon.CRITDMGINC;
        if(weapon.CRITDMGDEC != undefined) combat.offCRITDMG -= weapon.CRITDMGDEC;
        if(weapon.CRITRATEINC != undefined) combat.defCRITRATE += weapon.CRITRATEINC;
        if(weapon.CRITRATEDEC != undefined) combat.offCRITRATE -= weapon.CRITRATEDEC;
        if(weapon.HEAL != undefined) combat.defHEAL += weapon.HEAL;
        if(weapon.HEALED != undefined) combat.defHEALED += weapon.HEALED;
    }
};

function getMIDWeaponSkill(side){
    if(side == 'offense'){
        var weapon = combat.offWeapon;
        if(weapon.OATK != undefined) combat.offATKRATE += weapon.OATK;
        if(weapon.OINT != undefined) combat.offINTRATE += weapon.OINT;
        if(weapon.ODEF != undefined) combat.offDEFRATE += weapon.ODEF;
        if(weapon.OMDEF != undefined) combat.offMDEFRATE += weapon.OMDEF;
        if(weapon.ODEX != undefined) combat.offDEXRATE += weapon.ODEX;
        if(weapon.ODMGINC != undefined) combat.offDMGRATE += weapon.ODMGINC;
        if(weapon.ODMGDEC != undefined) combat.defDMGRATE -= weapon.ODMGDEC;
        if(weapon.OCRITDMGINC != undefined) combat.offCRITDMG += weapon.OCRITDMGINC;
        if(weapon.OCRITDMGDEC != undefined) combat.defCRITDMG -= weapon.OCRITDMGDEC;
        if(weapon.OCRITRATEINC != undefined) combat.offCRITRATE += weapon.OCRITRATEINC;
        if(weapon.OCRITRATEDEC != undefined) combat.defCRITRATE -= weapon.OCRITRATEDEC;
    }
    else if(side == 'defense'){
        var weapon = combat.defWeapon;
        if(weapon.DATK != undefined) combat.defATKRATE += weapon.DATK;
        if(weapon.DINT != undefined) combat.defINTRATE += weapon.DINT;
        if(weapon.DDEF != undefined) combat.defDEFRATE += weapon.DDEF;
        if(weapon.DMDEF != undefined) combat.defMDEFRATE += weapon.DMDEF;
        if(weapon.DDEX != undefined) combat.defDEXRATE += weapon.DDEX;
        if(weapon.DDMGINC != undefined) combat.defDMGRATE += weapon.DDMGINC;
        if(weapon.DDMGDEC != undefined) combat.offDMGRATE -= weapon.DDMGDEC;
        if(weapon.DCRITDMGINC != undefined) combat.defCRITDMG += weapon.DCRITDMGINC;
        if(weapon.DCRITDMGDEC != undefined) combat.offCRITDMG -= weapon.DCRITDMGDEC;
        if(weapon.DCRITRATEINC != undefined) combat.defCRITRATE += weapon.DCRITRATEINC;
        if(weapon.DCRITRATEDEC != undefined) combat.offCRITRATE -= weapon.DCRITRATEDEC;
    }
};

