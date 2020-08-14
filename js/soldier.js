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

