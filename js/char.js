function loadTalent(side, character){
    for(let i=0; i<char.length; i++){
        if((side == 'defense' && character.slice(0,-1) == char[i].NAME) ||
            (side == 'offense' && character == char[i].NAME)){
            let talent = document.getElementById(character+"TALENT");
            let baseChar = document.getElementById(character);
            let y = baseChar.getBoundingClientRect().top + 50;
            let x = baseChar.getBoundingClientRect().left + 50;
            document.getElementById(character+"TALENTNAME").innerHTML = char[i].TALENTNAME;
            document.getElementById(character+"DESC").innerHTML = char[i].TALENT;
            talent.style.top = y + 'px';
            talent.style.left = x + 'px';
            break;
        }
    }
};

function getArmy(side){
    var eJobNo, eChar;
    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(eJobNo == 1)      return eChar.ARMY1;
    else if(eJobNo == 2) return eChar.ARMY2;
    else if(eJobNo == 3) return eChar.ARMY3;
    else if(eJobNo == 4) return eChar.ARMY4;
    else if(eJobNo == 5) return eChar.ARMY5;
};

function getPRETalentSkill(side){
    if(side == 'offense'){
        var talent = combat.offTalent;
        if(talent.ATK != undefined) combat.offATKRATE += talent.ATK;
        if(talent.INT != undefined) combat.offINTRATE += talent.INT;
        if(talent.DEF != undefined) combat.offDEFRATE += talent.DEF;
        if(talent.MDEF != undefined) combat.offMDEFRATE += talent.MDEF;
        if(talent.DEX != undefined) combat.offDEXRATE += talent.DEX;
        if(talent.HEAL != undefined) combat.offHEAL += talent.HEAL;
        if(talent.HEALED != undefined) combat.offHEALED += talent.HEALED;
    }
    else if(side == 'defefnse'){
        var talent = combat.defTalent;
        if(talent.ATK != undefined) combat.defATKRATE += talent.ATK;
        if(talent.INT != undefined) combat.defINTRATE += talent.INT;
        if(talent.DEF != undefined) combat.defDEFRATE += talent.DEF;
        if(talent.MDEF != undefined) combat.defMDEFRATE += talent.MDEF;
        if(talent.DEX != undefined) combat.defDEXRATE += talent.DEX;
        if(talent.HEAL != undefined) combat.defHEAL += talent.HEAL;
        if(talent.HEALED != undefined) combat.defHEALED += talent.HEALED;
    }
};

function displayArmy(side){
    if(side == 'defense'){
        document.getElementById('defcharARMY').innerHTML = '兵種:' + getArmy(side);
    }
    else if(side == 'offense'){
        document.getElementById('offcharARMY').innerHTML = '兵種:' + getArmy(side);
    }
};

function getJob(side){
    var eJobNo, eChar;
    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(eJobNo == 1)      return eChar.JOB1;
    else if(eJobNo == 2) return eChar.JOB2;
    else if(eJobNo == 3) return eChar.JOB3;
    else if(eJobNo == 4) return eChar.JOB4;
    else if(eJobNo == 5) return eChar.JOB5;
};

function displayJob(side){
    if(side == 'defense'){
        document.getElementById('defcharJOB').innerHTML = '職業:' + getJob(side);
    }
    else if(side == 'offense'){
        document.getElementById('offcharJOB').innerHTML = '職業:' + getJob(side);
    }
};

// change JOB and change equipments depends on JOB
function changeJob(side){
    var eJobNo;
    if(side == 'defense'){
        eJobNo = combat.defJobNo + 1;
        if(eJobNo > combat.defChar.JOBS) eJobNo = 1;
        combat.defJobNo = eJobNo;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo + 1;
        if(eJobNo > combat.offChar.JOBS) eJobNo = 1;
        combat.offJobNo = eJobNo;
    }
    // display job when changed
    displayArmy(side);
    displayJob(side);
    hideWeapon(side);
    displayWeapon(side);
    hideArmor(side);
    displayArmor(side);
    hideHelmet(side);
    displayHelmet(side);
    hideAccessory(side);
    displayAccessory(side);
};

