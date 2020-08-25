/* create debuff html */
function createDEBUFFList(side, listID){
    eDEBUFFList = document.getElementById(listID);
    ul = document.createElement('ul');
    eDEBUFFList.appendChild(ul);

    for(let i=0; i<debuff.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' debuff';
        if(side == 'offense'){
            li.id = debuff[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadDEBUFFDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = debuff[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadDEBUFFDesc('defense', this.id);
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
        img.src = 'image/debuffs/' + debuff[i].NAME + '.png';
        img.style = 'width: 25px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectDEBUFF('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectDEBUFF('defense', this.id.split('IMG')[0]);
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

function holdDEBUFF(side){
    var holds = ['一般'];
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first debuff found */
function displayDEBUFF(side){
    var char;
    if(side == 'offense') char = combat.offChar;
    else if(side == 'defense') char = combat.defChar;
    var holds = holdDEBUFF(side);

    var debuffList = [];
    // get all usable debuffList
    for(var i=0; i<holds.length; i++){
        // filter objects by holds
        var debufffilter = [];
        for(var j=0; j<debuff.length; j++){
            if(debuff[j].TYPE.includes(holds[i]))
                debufffilter.push(debuff[j]);
        }
        for(var j=0; j<debufffilter.length; j++)
            // get NAMES only
            debuffList.push(debufffilter[j].NAME);
    }
    // display debuff by NAMES
    for(var i=0; i<debuffList.length; i++){
        if(side == 'defense')
            document.getElementById(debuffList[i]+'d').style = '';
        else if(side == 'offense')
            document.getElementById(debuffList[i]).style = '';
    }
};

function hideDEBUFF(side){
    if(side == 'offense') combat.offDEBUFFLIST = [];
    else if(side == 'defense') combat.defDEBUFFLIST = [];
    var debuffList = document.getElementsByClassName('debuff ' + side);
    for(let i=0; i<debuffList.length; i++){
        debuffList[i].style = 'display: none;';
        edebuffINDEX = document.getElementById(debuffList[i].id+'INDEX');
        edebuffINDEX.innerHTML = 0;
        if(debuffList[i].classList.contains('selected'))
            debuffList[i].classList.remove('selected');
    }
    for(let i=0; i<debuff.length; i++)
        if(debuff[i].INDEX != undefined) debuff[i].INDEX = 1;
};

function selectDEBUFF(side, debuffID){
    // defense remove 'd'
    if(side == 'defense'){
        debuffNAME = debuffID.slice(0, -1);
        debuffList = combat.defDEBUFFLIST;
    }
    else if(side == 'offense'){
        debuffNAME = debuffID;
        debuffList = combat.offDEBUFFLIST;
    }

    debuffOBJ = debuff.find(x => x.NAME === debuffNAME);
    eDEBUFF = document.getElementById(debuffID);
    debuffINDEX = getDEBUFFINDEX(debuffID);
    edebuffINDEX = document.getElementById(debuffID+'INDEX');
    // select debuff if not selected
    if(!eDEBUFF.classList.contains('selected')){
        eDEBUFF.classList.add('selected');
        edebuffINDEX.innerHTML = Number(edebuffINDEX.innerHTML)+1;
        debuffList.push(debuffOBJ);
    }
    // if that debuff have DATA
    else if(debuffOBJ.DATA != undefined){
        // de-select debuff when max number/data achieved
        if(debuffINDEX == debuffOBJ.MAX){
            eDEBUFF.classList.remove('selected');
            edebuffINDEX.innerHTML = 0;
            if(debuffOBJ.INDEX != undefined) debuffOBJ.INDEX = 1;
            while(debuffList.indexOf(debuffOBJ) != -1){
                index = debuffList.indexOf(debuffOBJ);
                debuffList.splice(index, 1);
            }
        }
        // add index if debuff selected but not max number/data
        else{
            edebuffINDEX.innerHTML = Number(edebuffINDEX.innerHTML)+1;
            if(debuffOBJ.ACC) debuffList.push(debuffOBJ);
            if(debuffOBJ.INDEX != undefined) debuffOBJ.INDEX += 1;
        }
    }
    // de-select if debuff have no DATA
    else{
        eDEBUFF.classList.remove('selected');
        index = debuffList.indexOf(debuffOBJ);
        if(index > -1) debuffList.splice(index, 1);
    }
    // reload debuff desc
    loadDEBUFFDesc(side, debuffID);

    if(side == 'defense') combat.defDEBUFFLIST = debuffList;
    else if(side == 'offense') combat.offDEBUFFLIST = debuffList;
};

function getDEBUFFINDEX(debuffID){
    edebuffINDEX = document.getElementById(debuffID+'INDEX');
    return Number(edebuffINDEX.innerHTML);
};

function getDEBUFFDesc(debuffOBJ, debuffID){
    debuffDESC = debuffOBJ.DESC;
    debuffINDEX = getDEBUFFINDEX(debuffID);
    // ex. 12.66% -> 0.1266*10000 = 1266 -> 1266/100 = 12.66%
    debuffPERC = Math.round(debuffOBJ.DATA[debuffINDEX] * 10000) / 100;
    return debuffDESC.replace('[DATA]', debuffPERC);
};

function loadDEBUFFDesc(side, debuffID){
    if(side == "offense") debuffNAME = debuffID;
    else if(side == 'defense') debuffNAME = debuffID.slice(0, -1);

    debuffOBJ = debuff.find(x => x.NAME === debuffNAME);
    eDEBUFF = document.getElementById(debuffID);
    eDEBUFFbox = document.getElementById(debuffID+"TABLE");
    eDEBUFFname = document.getElementById(debuffID+"NAME");
    eDEBUFFdesc = document.getElementById(debuffID+"DESC");

    // down shift 30px
    y = eDEBUFF.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eDEBUFF.getBoundingClientRect().left + 30;

    eDEBUFFname.innerHTML = debuffOBJ.NAME;
    if(debuffOBJ.DATA != undefined)
        eDEBUFFdesc.innerHTML = getDEBUFFDesc(debuffOBJ, debuffID);
    else
        eDEBUFFdesc.innerHTML = debuffOBJ.DESC;
    eDEBUFFbox.style.top = y + 'px';
    eDEBUFFbox.style.left = x + 'px';
};

