/* create buff html */
function createBUFFList(side, listID){
    eBUFFList = document.getElementById(listID);
    ul = document.createElement('ul');
    eBUFFList.appendChild(ul);

    for(let i=0; i<buff.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' buff';
        if(side == 'offense'){
            li.id = buff[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadBUFFDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = buff[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadBUFFDesc('defense', this.id);
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
        img.src = 'image/buffs/' + buff[i].NAME + '.png';
        img.style = 'width: 25px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectBUFF('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectBUFF('defense', this.id.split('IMG')[0]);
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

function holdBUFF(side){
    var holds = ['一般'];
    // add party name to type for char specials
    if(side == 'offense') holds.push(combat.offParty/*.NAME*/);
    else if(side == 'defense') holds.push(combat.defParty/*.NAME*/);
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first buff found */
function displayBUFF(side){
    var char;
    if(side == 'offense') char = combat.offChar;
    else if(side == 'defense') char = combat.defChar;
    stealList = ['雷因法魯斯', '迪哈爾特', '奧利佛', '弗拉基亞', '皮耶魯', '比羅蒂絲', '銀狼', '洛加', '燕'];
    var holds = holdBUFF(side);

    var buffList = [];
    // get all usable buffList
    for(var i=0; i<holds.length; i++){
        // filter objects by holds
        var bufffilter = [];
        for(var j=0; j<buff.length; j++){
            if(buff[j].TYPE.includes(holds[i]))
                bufffilter.push(buff[j]);
        }
        for(var j=0; j<bufffilter.length; j++)
            // get NAMES only
            buffList.push(bufffilter[j].NAME);
    }
    // steal buff chars can get all buff
    if(stealList.includes(char.NAME)){
        buffList = [];
        for(let i=0; i<buff.length; i++)
            buffList.push(buff[i].NAME);
    }
    // display buff by NAMES
    for(var i=0; i<buffList.length; i++){
        if(side == 'defense')
            document.getElementById(buffList[i]+'d').style = '';
        else if(side == 'offense')
            document.getElementById(buffList[i]).style = '';
    }
};

function hideBUFF(side){
    if(side == 'offense') combat.offBUFFLIST = [];
    else if(side == 'defense') combat.defBUFFLIST = [];
    var buffList = document.getElementsByClassName('buff ' + side);
    for(var i=0; i<buffList.length; i++){
        buffList[i].style = 'display: none;';
        if(buffList[i].classList.contains('selected'))
            buffList[i].classList.remove('selected');
    }
};

function selectBUFF(side, buffID){
    // defense remove 'd'
    if(side == 'defense'){
        buffNAME = buffID.slice(0, -1);
        buffList = combat.defBUFFLIST;
    }
    else if(side == 'offense'){
        buffNAME = buffID;
        buffList = combat.offBUFFLIST;
    }

    buffOBJ = buff.find(x => x.NAME === buffNAME);
    eBUFF = document.getElementById(buffID);
    buffINDEX = getBUFFINDEX(buffID);
    ebuffINDEX = document.getElementById(buffID+'INDEX');
    // select buff if not selected
    if(!eBUFF.classList.contains('selected')){
        eBUFF.classList.add('selected');
        ebuffINDEX.innerHTML = Number(ebuffINDEX.innerHTML)+1;
        buffList.push(buffOBJ);
    }
    // if that buff have DATA
    else if(buffOBJ.DATA != undefined){
        // de-select buff when max number/data achieved
        if(buffINDEX == buffOBJ.MAX){
            eBUFF.classList.remove('selected');
            ebuffINDEX.innerHTML = 0;
            if(buffOBJ.INDEX != undefined) buffOBJ.INDEX = 1;
            while(buffList.indexOf(buffOBJ) != -1){
                index = buffList.indexOf(buffOBJ);
                buffList.splice(index, 1);
            }
        }
        // add index if buff selected but not max number/data
        else{
            ebuffINDEX.innerHTML = Number(ebuffINDEX.innerHTML)+1;
            if(buffOBJ.ACC) buffList.push(buffOBJ);
            if(buffOBJ.INDEX != undefined) buffOBJ.INDEX += 1;
        }
    }
    // de-select if buff have no DATA
    else{
        eBUFF.classList.remove('selected');
        index = buffList.indexOf(buffOBJ);
        if(index > -1) buffList.splice(index, 1);
    }
    // reload buff desc
    loadBUFFDesc(side, buffID);

    if(side == 'defense') combat.defBUFFLIST = buffList;
    else if(side == 'offense') combat.offBUFFLIST = buffList;
};

function getBUFFINDEX(buffID){
    ebuffINDEX = document.getElementById(buffID+'INDEX');
    return Number(ebuffINDEX.innerHTML);
};

function getBUFFDesc(buffOBJ, buffID){
    buffDESC = buffOBJ.DESC;
    buffINDEX = getBUFFINDEX(buffID);
    // ex. 12.66% -> 0.1266*10000 = 1266 -> 1266/100 = 12.66%
    buffPERC = Math.round(buffOBJ.DATA[buffINDEX] * 10000) / 100;
    return buffDESC.replace('[DATA]', buffPERC);
};

function loadBUFFDesc(side, buffID){
    if(side == "offense") buffNAME = buffID;
    else if(side == 'defense') buffNAME = buffID.slice(0, -1);

    buffOBJ = buff.find(x => x.NAME === buffNAME);
    eBUFF = document.getElementById(buffID);
    eBUFFbox = document.getElementById(buffID+"TABLE");
    eBUFFname = document.getElementById(buffID+"NAME");
    eBUFFdesc = document.getElementById(buffID+"DESC");

    // down shift 30px
    y = eBUFF.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eBUFF.getBoundingClientRect().left + 30;

    eBUFFname.innerHTML = buffOBJ.NAME;
    if(buffOBJ.DATA != undefined)
        eBUFFdesc.innerHTML = getBUFFDesc(buffOBJ, buffID);
    else
        eBUFFdesc.innerHTML = buffOBJ.DESC;
    eBUFFbox.style.top = y + 'px';
    eBUFFbox.style.left = x + 'px';
};

