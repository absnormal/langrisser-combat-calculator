/* create soldier html */
function createSoldierList(side, listID){
    eSoldierList = document.getElementById(listID);
    ul = document.createElement('ul');
    eSoldierList.appendChild(ul);

    for(let i=0; i<soldier.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' soldier';
        if(side == 'offense'){
            li.id = soldier[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadSoldierDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = soldier[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadSoldierDesc('defense', this.id);
            };
        }
        li.style = 'display: none;';

        table = document.createElement('table');
        table.className = 'equipmentDESC';
        table.id = li.id+'TABLE';
        table.style = 'width: 220px;';

        tr1 = document.createElement('tr');
        tr2 = document.createElement('tr');
        tr3 = document.createElement('tr');
        tr4 = document.createElement('tr');
        th = document.createElement('th');
        th.id = li.id+'NAME';
        td1 = document.createElement('td');
        td1.id = li.id+'HP';
        td1.style = 'width: 100px;';
        td2 = document.createElement('td');
        td2.id = li.id+'ATK';
        td2.style = 'width: 100px;';
        td3 = document.createElement('td');
        td3.id = li.id+'DEF';
        td3.style = 'width: 100px;';
        td4 = document.createElement('td');
        td4.id = li.id+'MDEF';
        td4.style = 'width: 100px;';
        td5 = document.createElement('td');
        td5.id = li.id+'DESC';
        td5.colSpan = '2';

        img = document.createElement('img');
        img.id = li.id+'IMG'
        img.src = 'image/soldier/' + soldier[i].NAME + '.png';
        img.style = 'width: 60px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectSoldier('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectSoldier('defense', this.id.split('IMG')[0]);
            };
        }

        whitespace = document.createTextNode(' ');

        /*
         *  <li>
         *      <table>
         *          <tr><th></th></tr>
         *          <tr>
         *              <td></td>
         *              <td></td>
         *          </tr>
         *          <tr>
         *              <td></td>
         *              <td></td>
         *          </tr>
         *          <tr><td></td></tr>
         *      </table>
         *      <img/>
         *  </li>
         *  <whitespace>
         * */
        ul.appendChild(li);
        ul.appendChild(whitespace);
        li.appendChild(table);
        li.appendChild(img);
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        table.appendChild(tr4);
        tr1.appendChild(th);
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr3.appendChild(td3);
        tr3.appendChild(td4);
        tr4.appendChild(td5);
    }
};

function holdSoldier(side){
    var holds = [], char;
    // add hero name to type for char specials
    if(side == 'offense') char = combat.offChar;
    else if(side == 'defense') char = combat.defChar;

    for(let i=0; i<char.SOLDIER.length; i++)
        holds.push(char.SOLDIER[i]);

    return holds;
};

/* display depends on char JOBS, select first soldier found */
function displaySoldier(side){
    var soldierList = holdSoldier(side);

    // display soldier by NAMES
    for(var i=0; i<soldierList.length; i++){
        if(side == 'defense'){
            document.getElementById(soldierList[i]+'d').style = '';
            // select first item found when no soldier selected
            if(i == 0){
                document.getElementById(soldierList[i]+'d').classList.add('selected');
                combat.defSoldier = soldier.find(x => x.NAME === soldierList[i]);
                displayTraining(side, soldierList[i]+'d');
            }
        }
        else if(side == 'offense'){
            document.getElementById(soldierList[i]).style = '';
            // select first item found when no soldier selected
            if(i == 0){
                document.getElementById(soldierList[i]).classList.add('selected');
                combat.offSoldier = soldier.find(x => x.NAME === soldierList[i]);
                displayTraining(side, soldierList[i]);
            }
        }
    }
    // select first item when soldier is selected
    if(side == 'defense') selectSoldier(side, soldierList[0]+'d');
    else if(side == 'offense') selectSoldier(side, soldierList[0]);
};

function hideSoldier(side){
    var soldierList = document.getElementsByClassName('soldier ' + side);
    for(var i=0; i<soldierList.length; i++){
        soldierList[i].style = 'display: none;';
        if(soldierList[i].classList.contains('selected'))
            soldierList[i].classList.remove('selected');
    }
};

function selectSoldier(side, soldierName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        soldierName = soldierName.slice(0, -1);
        // de-select old soldier
        if(document.getElementById(combat.defSoldier.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defSoldier.NAME + 'd').classList.remove('selected')
        }
        // select new soldier
        document.getElementById(soldierName+'d').classList.add('selected');
        combat.defSoldier = soldier.find(x => x.NAME === soldierName);
        hideTraining(side);
        displayTraining(side, combat.defSoldier.NAME+'d');
    }
    // offense
    else if(side == 'offense'){
        // de-select old soldier
        if(document.getElementById(combat.offSoldier.NAME).classList.contains('selected')){
            document.getElementById(combat.offSoldier.NAME).classList.remove('selected')
        }
        // select new soldier
        document.getElementById(soldierName).classList.add('selected');
        combat.offSoldier = soldier.find(x => x.NAME === soldierName);
        hideTraining(side);
        displayTraining(side, combat.offSoldier.NAME);
    }
    displaySoldArmy(side);
};

function loadSoldierDesc(side, soldierID){

    if(side == "offense") soldierNAME = soldierID;
    else if(side == 'defense') soldierNAME = soldierID.slice(0, -1);

    soldierOBJ = soldier.find(x => x.NAME === soldierNAME);
    eSoldier = document.getElementById(soldierID);
    eSoldierbox = document.getElementById(soldierID+"TABLE");
    eSoldiername = document.getElementById(soldierID+"NAME");
    eSoldierHP = document.getElementById(soldierID+"HP");
    eSoldierATK = document.getElementById(soldierID+"ATK");
    eSoldierDEF = document.getElementById(soldierID+"DEF");
    eSoldierMDEF = document.getElementById(soldierID+"MDEF");
    eSoldierdesc = document.getElementById(soldierID+"DESC");

    // down shift 30px
    y = eSoldier.getBoundingClientRect().top + 50;
    // right shift 30px
    x = eSoldier.getBoundingClientRect().left + 50;

    eSoldiername.innerHTML = soldierOBJ.NAME;
    eSoldierHP.innerHTML = '生命:'+soldierOBJ.HP;
    eSoldierATK.innerHTML = '攻擊:'+soldierOBJ.ATK;
    eSoldierDEF.innerHTML = '防禦:'+soldierOBJ.DEF;
    eSoldierMDEF.innerHTML = '魔防:'+soldierOBJ.MDEF;
    eSoldierdesc.innerHTML = soldierOBJ.DESC;
    eSoldierbox.style.top = y + 'px';
    eSoldierbox.style.left = x + 'px';
};

function getSoldTrain(army){
    if(army=='步兵') return '步兵';
    if(army=='槍兵') return '槍兵';
    if(army=='騎兵') return '騎兵';
    if(army=='飛兵'||army=='水兵') return '飛水';
    if(army=='弓兵'||army=='刺客') return '弓刺';
    if(army=='僧侶'||army=='魔物'||army=='法師') return '僧魔法';
};

function getSoldMOVETYPE(side){
    if(side == 'offense') return combat.offSoldier.MOVETYPE;
    if(side == 'defense') return combat.defSoldier.MOVETYPE;
};

function displaySoldHP(side, sideRate){
    SOLD='sold', PRE='PRE', PERC='PERC', PLUS='PLUS', DATA='DATA', DESC='DESC';
    HP='HP', FULLHP='FULLHP', text='生命';
    offsoldRATE = combat.offsoldHPRATE;
    offcharPLUS = combat.offChar.SOLDHPPLUS;
    defsoldRATE = combat.defsoldHPRATE;
    defcharPLUS = combat.defChar.SOLDHPPLUS;

    var soldier;
    if(side == 'offense')
        SIDE = 'off', soldier = combat.offSoldier, charPLUS = offcharPLUS, rate = offsoldRATE;
    else
        SIDE = 'def', soldier = combat.defSoldier, charPLUS = defcharPLUS, rate = defsoldRATE;
    // 基本屬性
    soldBASE = soldier.HP;
    // 全屬性
    if(soldier.ARMY == '魔物') soldALLRATE = 0.4;
    else soldALLRATE = 0.3;
    // 兵營
    trainTEXT = getSoldTrain(soldier.ARMY);

    eDATA = document.getElementById(SIDE+SOLD+PRE+HP+DATA);
    eDESC = document.getElementById(SIDE+SOLD+PRE+HP+DESC);
    // 兵營百分比
    trainPERC = Number(document.getElementById(trainTEXT+SIDE+HP+PERC).value)/100;
    // 兵營加值
    trainPLUS = Number(document.getElementById(trainTEXT+SIDE+HP+PLUS).value);
    /* 大算式 */
    let number=(soldBASE*7.4*(1+trainPERC+soldALLRATE)+trainPLUS)*rate;
    eDATA.innerHTML = text+":"+number.toFixed(0)+" + "+(number*charPLUS).toFixed(0);
    eDESC.innerHTML = (number*(1+charPLUS)).toFixed(2)+"=("+soldBASE+"×7.4×(1+"+trainPERC+"+"+soldALLRATE+")+"+trainPLUS+")×(1.4";

    for(let j=0; j<sideRate.length; j++){
        if(sideRate[j].HP != 0)
            eDESC.innerHTML += "+"+sideRate[j].HP.toFixed(2)+"["+sideRate[j].NAME+"]";
    }
    eDESC.innerHTML += ")×"+(1+charPLUS);

    // display HP/FULLHP
    eHP = document.getElementById(SIDE+SOLD+HP);
    eFULLHP = document.getElementById(SIDE+SOLD+FULLHP);
    if(eHP.value > 10*(number*(1+charPLUS))) eHP.value = 10*(number*(1+charPLUS)).toFixed(0);
    eFULLHP.innerHTML = "/"+10*(number*(1+charPLUS)).toFixed(0);
    // combat sold HP
    if(side == 'offense'){
        combat.offsoldHP = Number(eHP.value);
        combat.offsoldFULLHP = 10*(number*(1+charPLUS)).toFixed(0);
    }
    else if(side == 'defense'){
        combat.defsoldHP = Number(eHP.value);
        combat.defsoldFULLHP = 10*(number*(1+charPLUS)).toFixed(0);
    }
};

function displaySoldNUMS(side, sideRate){
    SOLD='sold', PRE='PRE', PERC='PERC', PLUS='PLUS', DATA='DATA', DESC='DESC';
    NUMS=['ATK','INT','DEF','MDEF'];
    text=['攻擊','智力','防禦','魔防'];
    offsoldRATE = [
        combat.offsoldATKRATE,
        0,
        combat.offsoldDEFRATE,
        combat.offsoldMDEFRATE
    ];
    defsoldRATE = [
        combat.defsoldATKRATE,
        0,
        combat.defsoldDEFRATE,
        combat.defsoldMDEFRATE
    ];
    offcharPLUS = [
        combat.offChar.SOLDATKPLUS,
        0,
        combat.offChar.SOLDDEFPLUS,
        combat.offChar.SOLDMDEFPLUS
    ];
    defcharPLUS = [
        combat.defChar.SOLDATKPLUS,
        0,
        combat.defChar.SOLDDEFPLUS,
        combat.defChar.SOLDMDEFPLUS
    ];

    var soldier;
    if(side == 'offense')
        SIDE = 'off', soldier = combat.offSoldier, charPLUS = offcharPLUS, rate = offsoldRATE;
    else
        SIDE = 'def', soldier = combat.defSoldier, charPLUS = defcharPLUS, rate = defsoldRATE;
    // 基本屬性
    soldBASE = [soldier.ATK, 0, soldier.DEF, soldier.MDEF];
    // 全屬性
    if(soldier.ARMY == '魔物') soldALLRATE = 0.4;
    else soldALLRATE = 0.3;
    // 兵營
    trainTEXT = getSoldTrain(soldier.ARMY);

    for(let i=0; i<NUMS.length; i++){
        if(NUMS[i] == 'INT') continue;
        eDATA = document.getElementById(SIDE+SOLD+PRE+NUMS[i]+DATA);
        eDESC = document.getElementById(SIDE+SOLD+PRE+NUMS[i]+DESC);
        // 兵營百分比
        trainPERC = Number(document.getElementById(trainTEXT+SIDE+NUMS[i]+PERC).value)/100;
        // 兵營加值
        trainPLUS = Number(document.getElementById(trainTEXT+SIDE+NUMS[i]+PLUS).value);
        /* 大算式 */
        let number=(soldBASE[i]*7.4*(1+trainPERC+soldALLRATE)+trainPLUS)*rate[i];
        eDATA.innerHTML = text[i]+":"+number.toFixed(0)+" + "+(number*charPLUS[i]).toFixed(0);
        eDESC.innerHTML = (number*(1+charPLUS[i])).toFixed(2)+"=("+soldBASE[i]+"×7.4×(1+"+trainPERC+"+"+soldALLRATE+")+"+trainPLUS+")×(1";

        for(let j=0; j<sideRate.length; j++){
            if(sideRate[j].CHARONLY) continue;
            if(sideRate[j].RATE[i] != 0)
                eDESC.innerHTML += "+"+sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
        }
        eDESC.innerHTML += ")×"+(1+charPLUS[i]);
    }
};

function displayMIDSoldNUMS(side, sideRate, oppRate){
    SOLD='sold', MID='MID', PERC='PERC', PLUS='PLUS', DATA='DATA', DESC='DESC';
    NUMS=['ATK','INT','DEF','MDEF','DEX','CRITRATE','CRITDMG'];
    text=['攻擊','智力','防禦','魔防','技巧','暴擊率','暴擊傷害'];
    offsoldRATE = [
        combat.offsoldATKRATE,
        0,
        combat.offsoldDEFRATE,
        combat.offsoldMDEFRATE,
        0,
        combat.offsoldCRITRATE,
        combat.offsoldCRITDMG
    ];
    defsoldRATE = [
        combat.defsoldATKRATE,
        0,
        combat.defsoldDEFRATE,
        combat.defsoldMDEFRATE,
        0,
        combat.defsoldCRITRATE,
        combat.defsoldCRITDMG
    ];
    offcharPLUS = [
        combat.offChar.SOLDATKPLUS,
        0,
        combat.offChar.SOLDDEFPLUS,
        combat.offChar.SOLDMDEFPLUS
    ];
    defcharPLUS = [
        combat.defChar.SOLDATKPLUS,
        0,
        combat.defChar.SOLDDEFPLUS,
        combat.defChar.SOLDMDEFPLUS
    ];

    var soldier;
    if(side == 'offense')
        SIDE = 'off', soldier = combat.offSoldier, charPLUS = offcharPLUS, rate = offsoldRATE;
    else
        SIDE = 'def', soldier = combat.defSoldier, charPLUS = defcharPLUS, rate = defsoldRATE;
    // 基本屬性
    soldBASE = [soldier.ATK, 0, soldier.DEF, soldier.MDEF];
    // 全屬性
    if(soldier.ARMY == '魔物') soldALLRATE = 0.4;
    else soldALLRATE = 0.3;
    // 兵營
    trainTEXT = getSoldTrain(soldier.ARMY);

    for(let i=0; i<NUMS.length; i++){
        if(NUMS[i] == 'INT' || NUMS[i] == 'DEX') continue;

        eDATA = document.getElementById(SIDE+SOLD+MID+NUMS[i]+DATA);
        eDESC = document.getElementById(SIDE+SOLD+MID+NUMS[i]+DESC);

        // CRITRATE, CRITDMG
        if(NUMS[i] == 'CRITRATE' || NUMS[i] == 'CRITDMG'){
            let number = rate[i];
            eDATA.innerHTML = text[i]+":"+number.toFixed(2);
            if(NUMS[i] == 'CRITRATE') eDESC.innerHTML=number.toFixed(2)+"="+combat.baseCRITRATE;
            if(NUMS[i] == 'CRITDMG') eDESC.innerHTML = number.toFixed(2)+"="+combat.baseCRITDMG;
            // side CRITRATE/DMG INC
            for(let j=0; j<sideRate.length; j++){
                if(sideRate[j].CHARONLY) continue;
                if(sideRate[j].MIDRATE[i] > 0)
                    eDESC.innerHTML += "+"+sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
                if(sideRate[j].MIDRATE[i] < 0)
                    eDESC.innerHTML += sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            }
            // oppside CRITRATE/DMG DEC
            for(let j=0; j<oppRate.length; j++){
                if(oppRate[j].CHARONLY) continue;
                if(oppRate[j].MIDRATE[i] > 0)
                    eDESC.innerHTML +="-"+oppRate[j].MIDRATE[i].toFixed(2)+"["+oppRate[j].NAME+"]";
                if(oppRate[j].MIDRATE[i] < 0)
                    eDESC.innerHTML +="+"+(oppRate[j].MIDRATE[i].toFixed(2)*-1)+"["+oppRate[j].NAME+"]";
            }
        }
        // ATK, DEF, MDEF
        else{
            // 兵營百分比
            trainPERC = Number(document.getElementById(trainTEXT+SIDE+NUMS[i]+PERC).value)/100;
            // 兵營加值
            trainPLUS = Number(document.getElementById(trainTEXT+SIDE+NUMS[i]+PLUS).value);
            /* 大算式 */
            let number=(soldBASE[i]*7.4*(1+trainPERC+soldALLRATE)+trainPLUS)*rate[i];
            // display: "number + number*charPLUS"
            eDATA.innerHTML = text[i]+":"+(number*(1+charPLUS[i])).toFixed(0);
            eDESC.innerHTML = (number*(1+charPLUS[i])).toFixed(2)+"=("+soldBASE[i]+"×7.4×(1+"+trainPERC+"+"+soldALLRATE+")+"+trainPLUS+")×(1+...";

            for(let j=0; j<sideRate.length; j++){
                if(sideRate[j].CHARONLY) continue;
                if(sideRate[j].MIDRATE[i] != 0)
                    eDESC.innerHTML += "+"+sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            }
            eDESC.innerHTML += ")×"+(1+charPLUS[i]);
        }
    }
};

function displaySoldONEHIT(side, sideRate, oppRate){
    ONEHIT='ONEHIT', MID='MID', DATA='DATA', DESC='DESC', DMGTYPE='DMGTYPE', SOLD='sold'
    text=['一段傷害'], NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'/*, 'CRITRATE', 'CRITDMG'*/];
    ATK = 0, INT = 1, DEF = 2, MDEF = 3, DEX = 4, CRITRATE = 0, CRITDMG = 1, DMGRATE = 2;
    CRITRATEINC = 5, CRITDMGINC = 6, DMGRATEINC = 7;
    CRITRATEDEC = 8, CRITDMGDEC = 9, DMGRATEDEC = 10;
    offMID = [], defMID = [],
    offOTHER = [combat.offsoldCRITRATE, combat.offsoldCRITDMG, combat.offsoldDMGRATE];
    defOTHER = [combat.defsoldCRITRATE, combat.defsoldCRITDMG, combat.defsoldDMGRATE];

    for(let i=0; i<NUMS.length; i++){
        if(NUMS[i] == 'INT' || NUMS[i] == 'DEX') continue;
        eoffDATA = document.getElementById('off'+SOLD+MID+NUMS[i]+DATA);
        edefDATA = document.getElementById('def'+SOLD+MID+NUMS[i]+DATA);
        offMID[i] = Number(eoffDATA.innerHTML.split(':')[1]);
        defMID[i] = Number(edefDATA.innerHTML.split(':')[1]);
    }

    if(side == 'offense'){
        SIDE = 'off';
        skilltype = combat.offsoldDMGTYPE;
        skillrate = 1;
        DEFNEG = combat.offDEFNEG;
        MDEFNEG = combat.offMDEFNEG;
        otherside = 'defense';
        mid = offMID, oppmid = defMID;
        rate = offRATE, opprate = defRATE;
        other = offOTHER, oppother = defOTHER;
        counterRate = combat.offSoldCounterRate;
        terrainRate = combat.defTerrainRate;
        commandDMGDEC = combat.defCOMMANDDMGDEC;
    }
    else if(side == 'defense'){
        SIDE = 'def';
        skilltype = combat.defsoldDMGTYPE;
        skillrate = 1;
        DEFNEG = combat.defDEFNEG;
        MDEFNEG = combat.defMDEFNEG;
        otherside = 'offense';
        mid = defMID, oppmid = offMID;
        other = defOTHER, oppother = offOTHER;
        counterRate = combat.defSoldCounterRate;
        terrainRate = combat.offTerrainRate;
        commandDMGDEC = combat.offCOMMANDDMGDEC;
    }

    if(skilltype == '物理傷害'){
        offNUM = mid[ATK]*counterRate;
        defNUM = oppmid[DEF]*terrainRate;
        negNUM = DEFNEG;
    }
    else if(skilltype == '魔法傷害'){
        /* soldier don't have INT */
        offNUM = mid[ATK]*counterRate;
        defNUM = oppmid[MDEF]*terrainRate;
        negNUM = MDEFNEG;
    }

    /* ONEHIT MAIN FORMULA */
    number = (offNUM-defNUM*(1-negNUM))/2*skillrate*other[DMGRATE]*(1-commandDMGDEC);
    if(number <= 0) number = 1;

    eTYPE = document.getElementById(SIDE+SOLD+DMGTYPE);
    eDATA = document.getElementById(SIDE+SOLD+ONEHIT+DATA);
    eDESC = document.getElementById(SIDE+SOLD+ONEHIT+DESC);
    eTYPE.innerHTML = "["+skilltype+"]";
    eDATA.innerHTML = text[0] + ":" + number.toFixed(2);
    eDESC.innerHTML = number.toFixed(2) + "=";

    /* display skilltype */
    if(skilltype == '物理傷害') offNUM = ATK, defNUM = DEF;
    else if(skilltype == '魔法傷害') offNUM = ATK, defNUM = MDEF;


    /* offNUM*counterRate */
    eDESC.innerHTML += "("+mid[offNUM].toFixed(2)+"×"+counterRate.toFixed(2);
    /* defNUM*(1-negNUM)*terrainRate */
    if(!negNUM) eDESC.innerHTML += " - "+oppmid[defNUM].toFixed(2)+"×"+terrainRate+")";
    else eDESC.innerHTML += " - "+oppmid[defNUM].toFixed(2)+"×(1-"+negNUM+")×"+terrainRate+")";
    /* skillrate */
    eDESC.innerHTML += "÷2×"+skillrate;
    /* off DMGRATEINC */
    eDESC.innerHTML += "×(1";
    for(let j=0; j<sideRate.length; j++){
      if(sideRate[j].CHARONLY != undefined && sideRate[j].CHARONLY == true) continue;
      if(sideRate[j].MIDRATE[DMGRATEINC] > 0)
       eDESC.innerHTML+="+"+sideRate[j].MIDRATE[DMGRATEINC].toFixed(2)+"["+sideRate[j].NAME+"]";
      if(sideRate[j].MIDRATE[DMGRATEINC] < 0)
       eDESC.innerHTML+=sideRate[j].MIDRATE[DMGRATEINC].toFixed(2)+"["+sideRate[j].NAME+"]";
    }
    /* def DMGRATEDEC */
    for(let j=0; j<oppRate.length; j++){
      if(oppRate[j].CHARONLY != undefined && oppRate[j].CHARONLY == true) continue;
      if(oppRate[j].MIDRATE[DMGRATEDEC] > 0)
       eDESC.innerHTML+="-"+oppRate[j].MIDRATE[DMGRATEDEC].toFixed(2)+"["+oppRate[j].NAME+"]";
      if(oppRate[j].MIDRATE[DMGRATEDEC] < 0)
       eDESC.innerHTML+="+"+(oppRate[j].MIDRATE[DMGRATEDEC].toFixed(2)*-1)+"["+oppRate[j].NAME+"]";
    }
    eDESC.innerHTML += ")";
    /* multiply command DMGDEC */
    if(commandDMGDEC != 0){
        eDESC.innerHTML += "×(1";
        for(let j=0; j<oppRate.length; j++)
            if(oppRate[j].COMMANDDMGDEC != undefined && oppRate[j].COMMANDDMGDEC != 0)
                eDESC.innerHTML+="-"+oppRate[j].COMMANDDMGDEC.toFixed(2)+"["+oppRate[j].NAME+"]";
        eDESC.innerHTML += ")";
    }
};

