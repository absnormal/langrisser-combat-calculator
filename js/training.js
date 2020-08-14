/* training not soldier */

function displayTraining(side, soldID){
    if(side == 'offense') soldNAME = soldID;
    else if(side == 'defense') soldNAME = soldID.slice(0, -1);

    soldOBJ = soldier.find(x => x.NAME === soldNAME);
    trainOBJS = training.filter(function(item, index, array){
        if(item.ARMY.includes(soldOBJ.ARMY)) return item;
    });

    armyNAME = soldOBJ.ARMY;
    eArmyNUMS = document.getElementsByClassName(armyNAME + ' ' + side + ' ' + '兵營');
    eArmyNUMS[0].style = '';

    for(let i=0; i<trainOBJS.length; i++){
        if(side == 'offense') trainID = trainOBJS[i].NAME;
        else if(side == 'defense') trainID = trainOBJS[i].NAME + 'd';
        eTraining = document.getElementById(trainID);
        eTrainButton = document.getElementById(trainID+'BUTTON');
        eTraining.style = '';
        eTrainButton.style = '';
    }
};

function hideTraining(side){
    eTrainingList = document.getElementsByClassName('training ' + side);
    for(let i=0; i<eTrainingList.length; i++)
        eTrainingList[i].style = 'display: none;';
};

function getTrainingLV(trainID){
    eTrainLV = document.getElementById(trainID+'LV');
    return Number(eTrainLV.innerHTML.split('/')[0]);
};

function changeTrainLV(trainID, operation){
    trainLV = getTrainingLV(trainID);
    if(operation == '+'){
        trainLV += 1;
        if(trainLV > 10) trainLV = 10;
    }
    else if(operation == '-'){
        trainLV -= 1;
        if(trainLV < 1) trainLV = 1;
    }
    eTrainLV = document.getElementById(trainID+'LV');
    eTrainLV.innerHTML = trainLV + "/10";
};

function getTrainingDesc(trainOBJ, trainID){
    trainDESC = trainOBJ.DESC;
    trainLV = getTrainingLV(trainID);
    trainPERC = Math.round(trainOBJ.DATA[trainLV-1] * 1000) / 10;
    return trainDESC.replaceAll('[DATA]', trainPERC);
};

function loadTrainingDesc(side, trainID){
    if(side == "offense") trainingNAME = trainID;
    else if(side == 'defense') trainingNAME = trainID.slice(0, -1);

    trainOBJ = training.find(x => x.NAME === trainingNAME);
    eTrain = document.getElementById(trainID);
    eTrainBox = document.getElementById(trainID+"TABLE");
    eTrainName = document.getElementById(trainID+"NAME");
    eTrainDESC = document.getElementById(trainID+"DESC");

    // down shift 30px
    y = eTrain.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eTrain.getBoundingClientRect().left + 30;

    eTrainName.innerHTML = trainOBJ.NAME;
    eTrainDESC.innerHTML = getTrainingDesc(trainOBJ, trainID);
    eTrainBox.style.top = y + 'px';
    eTrainBox.style.left = x + 'px';
};

