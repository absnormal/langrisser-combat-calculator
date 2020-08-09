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
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first buff found */
function displayBUFF(side){
    var holds = holdBUFF(side);

    var buffList = [];
    // get all usable buffList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var bufffilter = buff.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<bufffilter.length; j++){
            // get NAMES only
            buffList.push(bufffilter[j].NAME);
        }
    }
    // display buff by NAMES
    for(var i=0; i<buffList.length; i++){
        if(side == 'defense'){
            document.getElementById(buffList[i]+'d').style = '';
        }
        else if(side == 'offense'){
            document.getElementById(buffList[i]).style = '';
        }
    }
};

function hideBUFF(side){
    var buffList = document.getElementsByClassName('buff ' + side);
    for(var i=0; i<buffList.length; i++){
        buffList[i].style = 'display: none;';
    }
};

function selectBUFF(side, buffID){
    // defense remove 'd'
    if(side == 'defense') buffNAME = buffID.slice(0, -1);
    else if(side == 'offense') buffNAME = buffID;

    buffOBJ = buff.find(x => x.NAME === buffNAME);
    eBUFF = document.getElementById(buffID);
    buffINDEX = getBUFFINDEX(buffID);
    ebuffINDEX = document.getElementById(buffID+'INDEX');
    // select buff if not selected
    if(!eBUFF.classList.contains('selected')){
        eBUFF.classList.add('selected');
        ebuffINDEX.innerHTML = Number(ebuffINDEX.innerHTML)+1;
    }
    // if that buff have data
    else if(buffOBJ.DATA != undefined){
        // de-select buff when max number/data achieved
        if(buffINDEX == buffOBJ.MAX){
            eBUFF.classList.remove('selected');
            ebuffINDEX.innerHTML = 0;
        }
        // add index if buff selected but not max number/data
        else ebuffINDEX.innerHTML = Number(ebuffINDEX.innerHTML)+1;
    }
    // reload buff desc
    loadBUFFDesc(side, buffID);
    //combat.defBUFF = buff.find(x => x.NAME === buffNAME);
};

function getBUFFINDEX(buffID){
    ebuffINDEX = document.getElementById(buffID+'INDEX');
    return Number(ebuffINDEX.innerHTML);
};

function getBUFFDesc(buffOBJ, buffID){
    buffDESC = buffOBJ.DESC;
    buffINDEX = getBUFFINDEX(buffID);
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

