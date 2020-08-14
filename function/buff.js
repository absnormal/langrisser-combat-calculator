/*  */
function getBUFFSkill(side){
    var buffList;
    if(side == 'offense') buffList = combat.offBUFFLIST;
    else if(side == 'defense') buffList = combat.defBUFFLIST;

    // collect displayList
    var displayList = [];

    for(let i=0; i<buffList.length; i++){
        var buff = buffList[i];
        // collect display
        var display = {
            NAME: buff.NAME,
            RATE: [0, 0, 0, 0, 0]
        };
        if(buff.SKILLTYPE != undefined && buff.SKILLTYPE.includes('RATE') && buff.RATE(side)){
            display.RATE = buff.RATE(side);
        }
        if(buff.ATK != undefined) display.RATE[0] += buff.ATK;
        if(buff.INT != undefined) display.RATE[1] += buff.INT;
        if(buff.DEF != undefined) display.RATE[2] += buff.DEF;
        if(buff.MDEF != undefined) display.RATE[3] += buff.MDEF;
        if(buff.DEX != undefined) display.RATE[4] += buff.DEX;

        // add to combat
        if(side == 'offense'){
            combat.offATKRATE += display.RATE[0];
            combat.offINTRATE += display.RATE[1];
            combat.offDEFRATE += display.RATE[2];
            combat.offMDEFRATE += display.RATE[3];
            combat.offDEXRATE += display.RATE[4];
            if(buff.HEAL != undefined) combat.offHEAL += buff.HEAL;
            if(buff.HEALED != undefined) combat.offHEALED += buff.HEALED;
        }
        else if(side == 'defense'){
            combat.defATKRATE += display.RATE[0];
            combat.defINTRATE += display.RATE[1];
            combat.defDEFRATE += display.RATE[2];
            combat.defMDEFRATE += display.RATE[3];
            combat.defDEXRATE += display.RATE[4];
            if(buff.HEAL != undefined) combat.defHEAL += buff.HEAL;
            if(buff.HEALED != undefined) combat.defHEALED += buff.HEALED;
        }
        displayList.push(display);
    }
    return displayList;
};

function getMIDBUFFSkill(side){
    var buffList;
    if(side == 'offense') buffList = combat.offBUFFLIST;
    else if(side == 'defense') buffList = combat.defBUFFLIST;

    // collect displayList
    var displayList = [];
    for(let i=0; i<buffList.length; i++){
        var buff = buffList[i];
        // collect display
        var display = {
            NAME: buff.NAME,
            /* ATK, INT, DEF, MDEF, DEX,
             * CRITRATE+, CRITDMG+, DMGRATE+,
             * CRITRATE-, CRITDMG-, DMGRATE- */
            MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            SKILLDMG: 0
        };
        if(buff.SKILLTYPE != undefined && buff.SKILLTYPE.includes('MIDRATE') && buff.MIDRATE(side)){
            display.MIDRATE = buff.MIDRATE(side);
        }
        if(side == 'offense'){
            if(buff.OATK != undefined) display.MIDRATE[0] += buff.OATK;
            if(buff.OINT != undefined) display.MIDRATE[1] += buff.OINT;
            if(buff.ODEF != undefined) display.MIDRATE[2] += buff.ODEF;
            if(buff.OMDEF != undefined) display.MIDRATE[3] += buff.OMDEF;
            if(buff.ODEX != undefined) display.MIDRATE[4] += buff.ODEX;
            if(buff.OCRITRATEINC != undefined) display.MIDRATE[5] += buff.OCRITRATEINC;
            if(buff.OCRITDMGINC != undefined) display.MIDRATE[6] += buff.OCRITDMGINC;
            if(buff.ODMGINC != undefined) display.MIDRATE[7] += buff.ODMGINC;
            if(buff.OCRITRATEDEC != undefined) display.MIDRATE[8] += buff.OCRITRATEDEC;
            if(buff.OCRITDMGDEC != undefined) display.MIDRATE[9] += buff.OCRITDMGDEC;
            if(buff.ODMGDEC != undefined) display.MIDRATE[10] += buff.ODMGDEC;
            if(buff.SKILLDMG != undefined) display.SKILLDMG += buff.SKILLDMG;
        }
        else if(side == 'defense'){
            if(buff.DATK != undefined) display.MIDRATE[0] += buff.DATK;
            if(buff.DINT != undefined) display.MIDRATE[1] += buff.DINT;
            if(buff.DDEF != undefined) display.MIDRATE[2] += buff.DDEF;
            if(buff.DMDEF != undefined) display.MIDRATE[3] += buff.DMDEF;
            if(buff.DDEX != undefined) display.MIDRATE[4] += buff.DDEX;
            if(buff.DCRITRATEINC != undefined) display.MIDRATE[5] += buff.DCRITRATEINC;
            if(buff.DCRITDMGINC != undefined) display.MIDRATE[6] += buff.DCRITDMGINC;
            if(buff.DDMGINC != undefined) display.MIDRATE[7] += buff.DDMGINC;
            if(buff.DCRITRATEDEC != undefined) display.MIDRATE[8] += buff.DCRITRATEDEC;
            if(buff.DCRITDMGDEC != undefined) display.MIDRATE[9] += buff.DCRITDMGDEC;
            if(buff.DDMGDEC != undefined) display.MIDRATE[10] += buff.DDMGDEC;
        }
        if(buff.CRITRATEINC != undefined) display.MIDRATE[5] += buff.CRITRATEINC;
        if(buff.CRITDMGINC != undefined) display.MIDRATE[6] += buff.CRITDMGINC;
        if(buff.DMGINC != undefined) display.MIDRATE[7] += buff.DMGINC;
        if(buff.CRITRATEDEC != undefined) display.MIDRATE[8] += buff.CRITRATEDEC;
        if(buff.CRITDMGDEC != undefined) display.MIDRATE[9] += buff.CRITDMGDEC;
        if(buff.DMGDEC != undefined) display.MIDRATE[10] += buff.DMGDEC;

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
        displayList.push(display);
    }
    return displayList;
};

