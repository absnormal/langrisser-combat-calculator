/*  */
function getTrainingSkill(side){
    var trainingList = [], soldArmy;
    if(side == 'offense') soldArmy = combat.offSoldier.ARMY;
    else if(side == 'defense') soldArmy = combat.defSoldier.ARMY;

    // get training list
    for(let i=0; i<training.length; i++)
        if(training[i].ARMY.includes(soldArmy))
            trainingList.push(training[i]);

    // collect displayList
    var displayList = [];

    for(let i=0; i<trainingList.length; i++){
        var train = trainingList[i];
        // collect display
        var display = {
            NAME: train.NAME,
            RATE: [0, 0, 0, 0, 0],
            SOLDONLY: true
        };
        if(train.SKILLTYPE != undefined && train.SKILLTYPE.includes('RATE') && train.RATE(side)){
            display.RATE = train.RATE(side);
        }
        // add to combat
        if(side == 'offense'){
            /* soldier */
            combat.offsoldATKRATE += display.RATE[0];
            combat.offsoldDEFRATE += display.RATE[2];
            combat.offsoldMDEFRATE += display.RATE[3];
        }
        else if(side == 'defense'){
            /* soldier */
            combat.defsoldATKRATE += display.RATE[0];
            combat.defsoldDEFRATE += display.RATE[2];
            combat.defsoldMDEFRATE += display.RATE[3];
        }
        displayList.push(display);
    }
    return displayList;
};

function getMIDTrainingSkill(side){
    var trainingList = [];
    if(side == 'offense') soldArmy = combat.offSoldier.ARMY;
    else if(side == 'defense') soldArmy = combat.defSoldier.ARMY;

    // get training list
    for(let i=0; i<training.length; i++)
        if(training[i].ARMY.includes(soldArmy))
            trainingList.push(training[i]);

    // collect displayList
    var displayList = [];

    for(let i=0; i<trainingList.length; i++){
        var train = trainingList[i];
        // collect display
        var display = {
            NAME: train.NAME,
            /* ATK, INT, DEF, MDEF, DEX,
             * CRITRATE+, CRITDMG+, DMGRATE+,
             * CRITRATE-, CRITDMG-, DMGRATE- */
            MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            SOLDONLY: true
        };
        if(train.SKILLTYPE != undefined && train.SKILLTYPE.includes('MIDRATE') && train.MIDRATE(side)){
            display.MIDRATE = train.MIDRATE(side);
        }

        // add to combat
        if(side == 'offense'){
            /* soldier */
            combat.offsoldATKRATE += display.MIDRATE[0];
            combat.offsoldDEFRATE += display.MIDRATE[2];
            combat.offsoldMDEFRATE += display.MIDRATE[3];
            combat.offsoldCRITRATE += display.MIDRATE[5];
            combat.offsoldCRITDMG += display.MIDRATE[6];
            combat.offsoldDMGRATE += display.MIDRATE[7];
            combat.defsoldCRITRATE -= display.MIDRATE[8];
            combat.defsoldCRITDMG -= display.MIDRATE[9];
            combat.defsoldDMGRATE -= display.MIDRATE[10];
        }
        else if(side == 'defense'){
            /* soldier */
            combat.defsoldATKRATE += display.MIDRATE[0];
            combat.defsoldDEFRATE += display.MIDRATE[2];
            combat.defsoldMDEFRATE += display.MIDRATE[3];
            combat.defsoldCRITRATE += display.MIDRATE[5];
            combat.defsoldCRITDMG += display.MIDRATE[6];
            combat.defsoldDMGRATE += display.MIDRATE[7];
            combat.offsoldCRITRATE -= display.MIDRATE[8];
            combat.offsoldCRITDMG -= display.MIDRATE[9];
            combat.offsoldDMGRATE -= display.MIDRATE[10];
        }
        displayList.push(display);
    }
    return displayList;
};

