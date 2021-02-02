/* create passive html */
function createPassiveList(side, listID){
    ePassiveList = document.getElementById(listID);
    ul = document.createElement('ul');
    ePassiveList.appendChild(ul);

    for(let i=0; i<passive.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' passive';
        if(side == 'offense'){
            li.id = passive[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadPassiveDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = passive[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadPassiveDesc('defense', this.id);
            };
        }
        li.style = 'display: none;';

        table = document.createElement('table');
        table.className = 'equipmentDESC';
        table.id = li.id+'TABLE';

        tr1 = document.createElement('tr');
        tr2 = document.createElement('tr');
        tr3 = document.createElement('tr');
        th = document.createElement('th');
        th.id = li.id+'NAME';
        td1 = document.createElement('td');
        td1.id = li.id+'DESC';
        td2 = document.createElement('td');
        td2.id = li.id+'INDEX';
        td2.style = 'display: none;';
        td2.innerHTML = 0;

        img = document.createElement('img');
        img.id = li.id+'IMG'
        img.src = 'image/passive/' + passive[i].NAME + '.png';
        img.style = 'width: 25px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectPassive('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectPassive('defense', this.id.split('IMG')[0]);
            };
        }

        whitespace = document.createTextNode(' ');

        /*
         *  <li>
         *      <table>
         *          <tr><th></th></tr>
         *          <tr><td></td></tr>
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
        tr1.appendChild(th);
        tr2.appendChild(td1);
        tr3.appendChild(td2);
    }
};

function holdPassive(side){
    var holds = [];
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first passive found */
function displayPassive(side){
    var char;
    if(side == 'offense') char = combat.offChar;
    else if(side == 'defense') char = combat.defChar;
    var holds = holdPassive(side);

    var passiveList = [];
    // get all usable passiveList
    for(var i=0; i<holds.length; i++){
        // filter objects by holds
        var passivefilter = [];
        for(var j=0; j<passive.length; j++){
            if(passive[j].TYPE.includes(holds[i]))
                passivefilter.push(passive[j]);
        }
        for(var j=0; j<passivefilter.length; j++)
            // get NAMES only
            passiveList.push(passivefilter[j].NAME);
    }
    // display passive by NAMES
    for(var i=0; i<passiveList.length; i++){
        if(side == 'defense')
            document.getElementById(passiveList[i]+'d').style = '';
        else if(side == 'offense')
            document.getElementById(passiveList[i]).style = '';
    }
};

function hidePassive(side){
    if(side == 'offense') combat.offPassiveLIST = [];
    else if(side == 'defense') combat.defPassiveLIST = [];
    var passiveList = document.getElementsByClassName('passive ' + side);
    for(var i=0; i<passiveList.length; i++){
        passiveList[i].style = 'display: none;';
        epassiveINDEX = document.getElementById(passiveList[i].id+'INDEX');
        epassiveINDEX.innerHTML = 0;
        if(passiveList[i].classList.contains('selected'))
            passiveList[i].classList.remove('selected');
    }
    for(let i=0; i<passive.length; i++){
        if(side == 'offense' && passive[i].offINDEX != undefined) passive[i].offINDEX = 1;
        if(side == 'defense' && passive[i].defINDEX != undefined) passive[i].defINDEX = 1;
    }
};

function selectPassive(side, passiveID){
    // defense remove 'd'
    if(side == 'defense'){
        passiveNAME = passiveID.slice(0, -1);
        passiveList = combat.defPassiveLIST;
    }
    else if(side == 'offense'){
        passiveNAME = passiveID;
        passiveList = combat.offPassiveLIST;
    }

    passiveOBJ = passive.find(x => x.NAME === passiveNAME);
    ePassive = document.getElementById(passiveID);
    passiveINDEX = getPassiveINDEX(passiveID);
    epassiveINDEX = document.getElementById(passiveID+'INDEX');
    // select passive if not selected
    if(!ePassive.classList.contains('selected')){
        ePassive.classList.add('selected');
        epassiveINDEX.innerHTML = Number(epassiveINDEX.innerHTML)+1;
        passiveList.push(passiveOBJ);
    }
    // if that passive have DATA
    else if(passiveOBJ.DATA != undefined){
        // de-select passive when max number/data achieved
        if(passiveINDEX == passiveOBJ.MAX){
            ePassive.classList.remove('selected');
            epassiveINDEX.innerHTML = 0;
            if(side == 'offense' && passiveOBJ.offINDEX != undefined) passiveOBJ.offINDEX = 1;
            if(side == 'defense' && passiveOBJ.defINDEX != undefined) passiveOBJ.defINDEX = 1;
            while(passiveList.indexOf(passiveOBJ) != -1){
                index = passiveList.indexOf(passiveOBJ);
                passiveList.splice(index, 1);
            }
        }
        // add index if passive selected but not max number/data
        else{
            epassiveINDEX.innerHTML = Number(epassiveINDEX.innerHTML)+1;
            if(passiveOBJ.ACC) passiveList.push(passiveOBJ);
            if(side == 'offense' && passiveOBJ.offINDEX != undefined) passiveOBJ.offINDEX += 1;
            if(side == 'defense' && passiveOBJ.defINDEX != undefined) passiveOBJ.defINDEX += 1;
        }
    }
    // de-select if passive have no DATA
    else{
        ePassive.classList.remove('selected');
        index = passiveList.indexOf(passiveOBJ);
        if(index > -1) passiveList.splice(index, 1);
    }
    // reload passive desc
    loadPassiveDesc(side, passiveID);

    if(side == 'defense') combat.defPassiveLIST = passiveList;
    else if(side == 'offense') combat.offPassiveLIST = passiveList;
};

function getPassiveINDEX(passiveID){
    epassiveINDEX = document.getElementById(passiveID+'INDEX');
    return Number(epassiveINDEX.innerHTML);
};

function getPassiveDesc(passiveOBJ, passiveID){
    passiveDESC = passiveOBJ.DESC;
    passiveINDEX = getPassiveINDEX(passiveID);
    // ex. 12.66% -> 0.1266*10000 = 1266 -> 1266/100 = 12.66%
    passivePERC = Math.round(passiveOBJ.DATA[passiveINDEX] * 10000) / 100;
    return passiveDESC.replace('[DATA]', passivePERC);
};

function loadPassiveDesc(side, passiveID){
    if(side == "offense") passiveNAME = passiveID;
    else if(side == 'defense') passiveNAME = passiveID.slice(0, -1);

    passiveOBJ = passive.find(x => x.NAME === passiveNAME);
    ePassive = document.getElementById(passiveID);
    ePassivebox = document.getElementById(passiveID+"TABLE");
    ePassivename = document.getElementById(passiveID+"NAME");
    ePassivedesc = document.getElementById(passiveID+"DESC");

    // down shift 30px
    y = ePassive.getBoundingClientRect().top + 30;
    // right shift 30px
    x = ePassive.getBoundingClientRect().left + 30;

    ePassivename.innerHTML = passiveOBJ.NAME;
    if(passiveOBJ.DATA != undefined)
        ePassivedesc.innerHTML = getPassiveDesc(passiveOBJ, passiveID);
    else
        ePassivedesc.innerHTML = passiveOBJ.DESC;
    ePassivebox.style.top = y + 'px';
    ePassivebox.style.left = x + 'px';
};

