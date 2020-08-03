/*  */
function getWeaponSkill(side){
    if(side == 'offense'){
        var weapon = combat.offWeapon;
        if(weapon.ATK != undefined) combat.offATKRATE += weapon.ATK;
        if(weapon.INT != undefined) combat.offINTRATE += weapon.INT;
        if(weapon.DEF != undefined) combat.offDEFRATE += weapon.DEF;
        if(weapon.MDEF != undefined) combat.offMDEFRATE += weapon.MDEF;
        if(weapon.DEX != undefined) combat.offDEXRATE += weapon.DEX;
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
        if(weapon.HEAL != undefined) combat.defHEAL += weapon.HEAL;
        if(weapon.HEALED != undefined) combat.defHEALED += weapon.HEALED;
    }

    switch(weapon.NAME){
        case '0w0':
            break;
    }
};

