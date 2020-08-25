/*  */
function getDEBUFFSkill(side){
    var debuffList;
    if(side == 'offense') debuffList = combat.offDEBUFFLIST;
    else if(side == 'defense') debuffList = combat.defDEBUFFLIST;

    // collect displayList
    var displayList = [];

    for(let i=0; i<debuffList.length; i++){
        var debuff = debuffList[i];
        // collect display
        var display = {
            NAME: debuff.NAME,
            RATE: [0, 0, 0, 0, 0]
        };
        if(debuff.SKILLTYPE != undefined && debuff.SKILLTYPE.includes('RATE') && debuff.RATE(side)){
            display.RATE = debuff.RATE(side);
        }
        /* debuff counter rate ex.蘭迪皇帝 */
        if(debuff.COUNTER != undefined){
            if(side == 'offense') combat.offELSECounterRate += debuff.COUNTER;
            if(side == 'defense') combat.defELSECounterRate += debuff.COUNTER;
        }

        if(debuff.ATK != undefined) display.RATE[0] += debuff.ATK;
        if(debuff.INT != undefined) display.RATE[1] += debuff.INT;
        if(debuff.DEF != undefined) display.RATE[2] += debuff.DEF;
        if(debuff.MDEF != undefined) display.RATE[3] += debuff.MDEF;
        if(debuff.DEX != undefined) display.RATE[4] += debuff.DEX;

        // add to combat
        if(side == 'offense'){
            /* hero */
            combat.offATKRATE += display.RATE[0];
            combat.offINTRATE += display.RATE[1];
            combat.offDEFRATE += display.RATE[2];
            combat.offMDEFRATE += display.RATE[3];
            combat.offDEXRATE += display.RATE[4];
            if(debuff.HEAL != undefined) combat.offHEAL += debuff.HEAL;
            if(debuff.HEALED != undefined) combat.offHEALED += debuff.HEALED;
            /* soldier */
            if(!debuff.CHARONLY){
                combat.offsoldATKRATE += display.RATE[0];
                combat.offsoldDEFRATE += display.RATE[2];
                combat.offsoldMDEFRATE += display.RATE[3];
            }
        }
        else if(side == 'defense'){
            /* hero */
            combat.defATKRATE += display.RATE[0];
            combat.defINTRATE += display.RATE[1];
            combat.defDEFRATE += display.RATE[2];
            combat.defMDEFRATE += display.RATE[3];
            combat.defDEXRATE += display.RATE[4];
            if(debuff.HEAL != undefined) combat.defHEAL += debuff.HEAL;
            if(debuff.HEALED != undefined) combat.defHEALED += debuff.HEALED;
            /* soldier */
            if(!debuff.CHARONLY){
                combat.defsoldATKRATE += display.RATE[0];
                combat.defsoldDEFRATE += display.RATE[2];
                combat.defsoldMDEFRATE += display.RATE[3];
            }
        }
        displayList.push(display);
    }
    return displayList;
};

function getMIDDEBUFFSkill(side){
    var debuffList;
    if(side == 'offense') debuffList = combat.offDEBUFFLIST;
    else if(side == 'defense') debuffList = combat.defDEBUFFLIST;

    // collect displayList
    var displayList = [];
    for(let i=0; i<debuffList.length; i++){
        var debuff = debuffList[i];
        // collect display
        var display = {
            NAME: debuff.NAME,
            /* ATK, INT, DEF, MDEF, DEX,
             * CRITRATE+, CRITDMG+, DMGRATE+,
             * CRITRATE-, CRITDMG-, DMGRATE- */
            MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            SKILLDMG: 0, CHARONLY: false,
        };
        if(debuff.SKILLTYPE != undefined && debuff.SKILLTYPE.includes('MIDRATE') && debuff.MIDRATE(side)){
            display.MIDRATE = debuff.MIDRATE(side);
        }
        if(debuff.CHARONLY != undefined && debuff.CHARONLY == true)
            display.CHARONLY = true;

        if(side == 'offense'){
            if(debuff.OATK != undefined) display.MIDRATE[0] += debuff.OATK;
            if(debuff.OINT != undefined) display.MIDRATE[1] += debuff.OINT;
            if(debuff.ODEF != undefined) display.MIDRATE[2] += debuff.ODEF;
            if(debuff.OMDEF != undefined) display.MIDRATE[3] += debuff.OMDEF;
            if(debuff.ODEX != undefined) display.MIDRATE[4] += debuff.ODEX;
            if(debuff.OCRITRATEINC != undefined) display.MIDRATE[5] += debuff.OCRITRATEINC;
            if(debuff.OCRITDMGINC != undefined) display.MIDRATE[6] += debuff.OCRITDMGINC;
            if(debuff.ODMGINC != undefined) display.MIDRATE[7] += debuff.ODMGINC;
            if(debuff.OCRITRATEDEC != undefined) display.MIDRATE[8] += debuff.OCRITRATEDEC;
            if(debuff.OCRITDMGDEC != undefined) display.MIDRATE[9] += debuff.OCRITDMGDEC;
            if(debuff.ODMGDEC != undefined) display.MIDRATE[10] += debuff.ODMGDEC;
            if(debuff.SKILLDMG != undefined) display.SKILLDMG += debuff.SKILLDMG;
        }
        else if(side == 'defense'){
            if(debuff.DATK != undefined) display.MIDRATE[0] += debuff.DATK;
            if(debuff.DINT != undefined) display.MIDRATE[1] += debuff.DINT;
            if(debuff.DDEF != undefined) display.MIDRATE[2] += debuff.DDEF;
            if(debuff.DMDEF != undefined) display.MIDRATE[3] += debuff.DMDEF;
            if(debuff.DDEX != undefined) display.MIDRATE[4] += debuff.DDEX;
            if(debuff.DCRITRATEINC != undefined) display.MIDRATE[5] += debuff.DCRITRATEINC;
            if(debuff.DCRITDMGINC != undefined) display.MIDRATE[6] += debuff.DCRITDMGINC;
            if(debuff.DDMGINC != undefined) display.MIDRATE[7] += debuff.DDMGINC;
            if(debuff.DCRITRATEDEC != undefined) display.MIDRATE[8] += debuff.DCRITRATEDEC;
            if(debuff.DCRITDMGDEC != undefined) display.MIDRATE[9] += debuff.DCRITDMGDEC;
            if(debuff.DDMGDEC != undefined) display.MIDRATE[10] += debuff.DDMGDEC;
        }
        if(debuff.CRITRATEINC != undefined) display.MIDRATE[5] += debuff.CRITRATEINC;
        if(debuff.CRITDMGINC != undefined) display.MIDRATE[6] += debuff.CRITDMGINC;
        if(debuff.DMGINC != undefined) display.MIDRATE[7] += debuff.DMGINC;
        if(debuff.CRITRATEDEC != undefined) display.MIDRATE[8] += debuff.CRITRATEDEC;
        if(debuff.CRITDMGDEC != undefined) display.MIDRATE[9] += debuff.CRITDMGDEC;
        if(debuff.DMGDEC != undefined) display.MIDRATE[10] += debuff.DMGDEC;

        // add to combat
        if(side == 'offense'){
            /* hero */
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
            /* soldier */
            if(!display.CHARONLY){
                combat.offsoldATKRATE += display.MIDRATE[0];
                combat.offsoldINTRATE += display.MIDRATE[1];
                combat.offsoldDEFRATE += display.MIDRATE[2];
                combat.offsoldMDEFRATE += display.MIDRATE[3];
                combat.offsoldDEXRATE += display.MIDRATE[4];
                combat.offsoldCRITRATE += display.MIDRATE[5];
                combat.offsoldCRITDMG += display.MIDRATE[6];
                combat.offsoldDMGRATE += display.MIDRATE[7];
                combat.defsoldCRITRATE -= display.MIDRATE[8];
                combat.defsoldCRITDMG -= display.MIDRATE[9];
                combat.defsoldDMGRATE -= display.MIDRATE[10];
            }
        }
        else if(side == 'defense'){
            /* hero */
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
            /* soldier */
            if(!display.CHARONLY){
                combat.defsoldATKRATE += display.MIDRATE[0];
                combat.defsoldINTRATE += display.MIDRATE[1];
                combat.defsoldDEFRATE += display.MIDRATE[2];
                combat.defsoldMDEFRATE += display.MIDRATE[3];
                combat.defsoldDEXRATE += display.MIDRATE[4];
                combat.defsoldCRITRATE += display.MIDRATE[5];
                combat.defsoldCRITDMG += display.MIDRATE[6];
                combat.defsoldDMGRATE += display.MIDRATE[7];
                combat.offsoldCRITRATE -= display.MIDRATE[8];
                combat.offsoldCRITDMG -= display.MIDRATE[9];
                combat.offsoldDMGRATE -= display.MIDRATE[10];
            }
        }
        displayList.push(display);
    }
    return displayList;
};

