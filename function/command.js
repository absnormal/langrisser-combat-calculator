/*  */
function getCommandSkill(side){
    var commandList;
    if(side == 'offense') commandList = combat.offCommandLIST;
    else if(side == 'defense') commandList = combat.defCommandLIST;

    // collect displayList
    var displayList = [];

    for(let i=0; i<commandList.length; i++){
        var command = commandList[i];
        // collect display
        var display = {
            NAME: command.NAME,
            RATE: [0, 0, 0, 0, 0]
        };
        if(command.SKILLTYPE != undefined && command.SKILLTYPE.includes('RATE') && command.RATE(side)){
            display.RATE = command.RATE(side);
        }
        if(command.ATK != undefined) display.RATE[0] += command.ATK;
        if(command.INT != undefined) display.RATE[1] += command.INT;
        if(command.DEF != undefined) display.RATE[2] += command.DEF;
        if(command.MDEF != undefined) display.RATE[3] += command.MDEF;
        if(command.DEX != undefined) display.RATE[4] += command.DEX;

        // add to combat
        if(side == 'offense'){
            /* hero */
            combat.offATKRATE += display.RATE[0];
            combat.offINTRATE += display.RATE[1];
            combat.offDEFRATE += display.RATE[2];
            combat.offMDEFRATE += display.RATE[3];
            combat.offDEXRATE += display.RATE[4];
            if(command.HEAL != undefined) combat.offHEAL += command.HEAL;
            if(command.HEALED != undefined) combat.offHEALED += command.HEALED;
            /* soldier */
            if(!command.CHARONLY){
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
            if(command.HEAL != undefined) combat.defHEAL += command.HEAL;
            if(command.HEALED != undefined) combat.defHEALED += command.HEALED;
            /* soldier */
            if(!command.CHARONLY){
                combat.defsoldATKRATE += display.RATE[0];
                combat.defsoldDEFRATE += display.RATE[2];
                combat.defsoldMDEFRATE += display.RATE[3];
            }
        }
        displayList.push(display);
    }
    return displayList;
};

function getMIDCommandSkill(side){
    var commandList;
    if(side == 'offense') commandList = combat.offCommandLIST;
    else if(side == 'defense') commandList = combat.defCommandLIST;

    // collect displayList
    var displayList = [];
    for(let i=0; i<commandList.length; i++){
        var command = commandList[i];
        // collect display
        var display = {
            NAME: command.NAME,
            /* ATK, INT, DEF, MDEF, DEX,
             * CRITRATE+, CRITDMG+, DMGRATE+,
             * CRITRATE-, CRITDMG-, DMGRATE- */
            MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        if(command.SKILLTYPE != undefined && command.SKILLTYPE.includes('MIDRATE') && command.MIDRATE(side)){
            display.MIDRATE = command.MIDRATE(side);
        }
        if(side == 'offense'){
            if(command.OATK != undefined) display.MIDRATE[0] += command.OATK;
            if(command.OINT != undefined) display.MIDRATE[1] += command.OINT;
            if(command.ODEF != undefined) display.MIDRATE[2] += command.ODEF;
            if(command.OMDEF != undefined) display.MIDRATE[3] += command.OMDEF;
            if(command.ODEX != undefined) display.MIDRATE[4] += command.ODEX;
            if(command.OCRITRATEINC != undefined) display.MIDRATE[5] += command.OCRITRATEINC;
            if(command.OCRITDMGINC != undefined) display.MIDRATE[6] += command.OCRITDMGINC;
            if(command.ODMGINC != undefined) display.MIDRATE[7] += command.ODMGINC;
            if(command.OCRITRATEDEC != undefined) display.MIDRATE[8] += command.OCRITRATEDEC;
            if(command.OCRITDMGDEC != undefined) display.MIDRATE[9] += command.OCRITDMGDEC;
            if(command.ODMGDEC != undefined) display.MIDRATE[10] += command.ODMGDEC;
        }
        else if(side == 'defense'){
            if(command.DATK != undefined) display.MIDRATE[0] += command.DATK;
            if(command.DINT != undefined) display.MIDRATE[1] += command.DINT;
            if(command.DDEF != undefined) display.MIDRATE[2] += command.DDEF;
            if(command.DMDEF != undefined) display.MIDRATE[3] += command.DMDEF;
            if(command.DDEX != undefined) display.MIDRATE[4] += command.DDEX;
            if(command.DCRITRATEINC != undefined) display.MIDRATE[5] += command.DCRITRATEINC;
            if(command.DCRITDMGINC != undefined) display.MIDRATE[6] += command.DCRITDMGINC;
            if(command.DDMGINC != undefined) display.MIDRATE[7] += command.DDMGINC;
            if(command.DCRITRATEDEC != undefined) display.MIDRATE[8] += command.DCRITRATEDEC;
            if(command.DCRITDMGDEC != undefined) display.MIDRATE[9] += command.DCRITDMGDEC;
            if(command.DDMGDEC != undefined) display.MIDRATE[10] += command.DDMGDEC;
        }
        if(command.CRITRATEINC != undefined) display.MIDRATE[5] += command.CRITRATEINC;
        if(command.CRITDMGINC != undefined) display.MIDRATE[6] += command.CRITDMGINC;
        if(command.DMGINC != undefined) display.MIDRATE[7] += command.DMGINC;
        if(command.CRITRATEDEC != undefined) display.MIDRATE[8] += command.CRITRATEDEC;
        if(command.CRITDMGDEC != undefined) display.MIDRATE[9] += command.CRITDMGDEC;
        if(command.DMGDEC != undefined) display.MIDRATE[10] += command.DMGDEC;

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

