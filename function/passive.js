/*  */
function getPassiveSkill(side){
    var passiveList;
    if(side == 'offense') passiveList = combat.offPassiveLIST;
    else if(side == 'defense') passiveList = combat.defPassiveLIST;

    // collect displayList
    var displayList = [];

    for(let i=0; i<passiveList.length; i++){
        var passive = passiveList[i];
        // collect display
        var display = {
            NAME: passive.NAME,
            RATE: [0, 0, 0, 0, 0]
        };
        if(passive.SKILLTYPE != undefined && passive.SKILLTYPE.includes('RATE') && passive.RATE(side)){
            display.RATE = passive.RATE(side);
        }
        if(passive.ATK != undefined) display.RATE[0] += passive.ATK;
        if(passive.INT != undefined) display.RATE[1] += passive.INT;
        if(passive.DEF != undefined) display.RATE[2] += passive.DEF;
        if(passive.MDEF != undefined) display.RATE[3] += passive.MDEF;
        if(passive.DEX != undefined) display.RATE[4] += passive.DEX;

        // add to combat
        if(side == 'offense'){
            combat.offATKRATE += display.RATE[0];
            combat.offINTRATE += display.RATE[1];
            combat.offDEFRATE += display.RATE[2];
            combat.offMDEFRATE += display.RATE[3];
            combat.offDEXRATE += display.RATE[4];
            if(passive.HEAL != undefined) combat.offHEAL += passive.HEAL;
            if(passive.HEALED != undefined) combat.offHEALED += passive.HEALED;
        }
        else if(side == 'defense'){
            combat.defATKRATE += display.RATE[0];
            combat.defINTRATE += display.RATE[1];
            combat.defDEFRATE += display.RATE[2];
            combat.defMDEFRATE += display.RATE[3];
            combat.defDEXRATE += display.RATE[4];
            if(passive.HEAL != undefined) combat.defHEAL += passive.HEAL;
            if(passive.HEALED != undefined) combat.defHEALED += passive.HEALED;
        }
        displayList.push(display);
    }
    return displayList;
};

function getMIDPassiveSkill(side){
    var passiveList;
    if(side == 'offense') passiveList = combat.offPassiveLIST;
    else if(side == 'defense') passiveList = combat.defPassiveLIST;

    // collect displayList
    var displayList = [];
    for(let i=0; i<passiveList.length; i++){
        var passive = passiveList[i];
        // collect display
        var display = {
            NAME: passive.NAME,
            /* ATK, INT, DEF, MDEF, DEX,
             * CRITRATE+, CRITDMG+, DMGRATE+,
             * CRITRATE-, CRITDMG-, DMGRATE- */
            MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        if(passive.SKILLTYPE != undefined && passive.SKILLTYPE.includes('MIDRATE') && passive.MIDRATE(side)){
            display.MIDRATE = passive.MIDRATE(side);
        }
        if(side == 'offense'){
            if(passive.OATK != undefined) display.MIDRATE[0] += passive.OATK;
            if(passive.OINT != undefined) display.MIDRATE[1] += passive.OINT;
            if(passive.ODEF != undefined) display.MIDRATE[2] += passive.ODEF;
            if(passive.OMDEF != undefined) display.MIDRATE[3] += passive.OMDEF;
            if(passive.ODEX != undefined) display.MIDRATE[4] += passive.ODEX;
            if(passive.OCRITRATEINC != undefined) display.MIDRATE[5] += passive.OCRITRATEINC;
            if(passive.OCRITDMGINC != undefined) display.MIDRATE[6] += passive.OCRITDMGINC;
            if(passive.ODMGINC != undefined) display.MIDRATE[7] += passive.ODMGINC;
            if(passive.OCRITRATEDEC != undefined) display.MIDRATE[8] += passive.OCRITRATEDEC;
            if(passive.OCRITDMGDEC != undefined) display.MIDRATE[9] += passive.OCRITDMGDEC;
            if(passive.ODMGDEC != undefined) display.MIDRATE[10] += passive.ODMGDEC;
        }
        else if(side == 'defense'){
            if(passive.DATK != undefined) display.MIDRATE[0] += passive.DATK;
            if(passive.DINT != undefined) display.MIDRATE[1] += passive.DINT;
            if(passive.DDEF != undefined) display.MIDRATE[2] += passive.DDEF;
            if(passive.DMDEF != undefined) display.MIDRATE[3] += passive.DMDEF;
            if(passive.DDEX != undefined) display.MIDRATE[4] += passive.DDEX;
            if(passive.DCRITRATEINC != undefined) display.MIDRATE[5] += passive.DCRITRATEINC;
            if(passive.DCRITDMGINC != undefined) display.MIDRATE[6] += passive.DCRITDMGINC;
            if(passive.DDMGINC != undefined) display.MIDRATE[7] += passive.DDMGINC;
            if(passive.DCRITRATEDEC != undefined) display.MIDRATE[8] += passive.DCRITRATEDEC;
            if(passive.DCRITDMGDEC != undefined) display.MIDRATE[9] += passive.DCRITDMGDEC;
            if(passive.DDMGDEC != undefined) display.MIDRATE[10] += passive.DDMGDEC;
        }
        if(passive.CRITRATEINC != undefined) display.MIDRATE[5] += passive.CRITRATEINC;
        if(passive.CRITDMGINC != undefined) display.MIDRATE[6] += passive.CRITDMGINC;
        if(passive.DMGINC != undefined) display.MIDRATE[7] += passive.DMGINC;
        if(passive.CRITRATEDEC != undefined) display.MIDRATE[8] += passive.CRITRATEDEC;
        if(passive.CRITDMGDEC != undefined) display.MIDRATE[9] += passive.CRITDMGDEC;
        if(passive.DMGDEC != undefined) display.MIDRATE[10] += passive.DMGDEC;

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
        displayList.push(display);
    }
    return displayList;
};

