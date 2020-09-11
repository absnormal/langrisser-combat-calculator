/* create armor html */
function createArmorList(side, listID){
    eArmorList = document.getElementById(listID);
    ul = document.createElement('ul');
    eArmorList.appendChild(ul);

    for(let i=0; i<armor.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' armor';
        if(side == 'offense'){
            li.id = armor[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadArmorDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = armor[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadArmorDesc('defense', this.id);
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
        td1.colSpan = '2';
        td2 = document.createElement('td');
        td2.id = li.id+'BASE1';
        td3 = document.createElement('td');
        td3.id = li.id+'BASE2';

        img = document.createElement('img');
        img.id = li.id+'IMG'
        img.src = 'image/equipment/armor/' + armor[i].NAME + '.png';
        img.style = 'width: 40px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectArmor('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectArmor('defense', this.id.split('IMG')[0]);
            };
        }

        whitespace = document.createTextNode(' ');

        /*
         *  <li>
         *      <table>
         *          <tr><th></th></tr>
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
        table.appendChild(tr3);
        table.appendChild(tr2);
        tr1.appendChild(th);
        tr2.appendChild(td1);
        tr3.appendChild(td2);
        tr3.appendChild(td3);
    }
};

/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdArmor(side, army, job){
    var holds = [];
    switch(army){
        case '步兵':
            holds = ['NO', '重甲'];
            break;
        case '槍兵':
            holds = ['NO', '重甲'];
            break;
        case '騎兵':
            holds = ['NO', '重甲'];
            break;
        case '飛兵':
            holds = ['NO', '輕甲'];
            break;
        case '弓兵':
            holds = ['NO', '輕甲'];
            break;
        case '刺客':
            holds = ['NO', '輕甲'];
            break;
        case '水兵':
            holds = ['NO', '輕甲'];
            break;
        case '法師':
            holds = ['NO', '布甲'];
            break;
        case '魔物':
            holds = ['NO', '布甲'];
            break;
        case '僧侶':
            holds = ['NO', '布甲'];
            break;
        case '龍':
            holds = ['NO', '輕甲'];
            break;
    }
    /* add new cases to new heros */
    switch(job){
        case '女武神':
            holds.push('輕甲');
            break;
        case '聖騎統帥':
            holds.push('重甲');
            break;
        case '鋼之聖女':
            holds.push('重甲');
            break;
        case '混沌化身':
            holds.push('輕甲');
            break;
        case '魔神':
            holds.push('輕甲');
            break;
        case '血魔姬':
            holds.push('輕甲');
            break;
        case '幻影魔姬':
            holds.push('輕甲');
            break;
        case '邪王炎殺':
            holds.push('輕甲');
            break;
        case '漆黑之牙':
            holds.push('輕甲');
            break;
        case '魔界王選':
            holds.push('輕甲');
            break;
        case '靈界偵探':
            holds.push('輕甲');
            break;
    }
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first armor found */
function displayArmor(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdArmor(side, army, job);

    var armorList = [];
    // get all usable armorList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var armorfilter = armor.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<armorfilter.length; j++){
            // get NAMES only
            armorList.push(armorfilter[j].NAME);
        }
    }
    // display armor by NAMES
    for(var i=0; i<armorList.length; i++){
        if(side == 'defense'){
            document.getElementById(armorList[i]+'d').style = '';
            // select first item found when no armor selected
            if(!combat.defArmSel){
                document.getElementById(armorList[i]+'d').classList.add('selected');
                combat.defArmor = armor.find(x => x.NAME === armorList[i]);
                //document.getElementById('defArmor').innerHTML = "盔甲:" + armorList[i];
                combat.defArmSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(armorList[i]).style = '';
            // select first item found when no armor selected
            if(!combat.offArmSel){
                document.getElementById(armorList[i]).classList.add('selected');
                combat.offArmor = armor.find(x => x.NAME === armorList[i]);
                //document.getElementById('offArmor').innerHTML = "盔甲:" + armorList[i];
                combat.offArmSel = true;
            }
        }
    }
    // select first item when armor is selected
    if(side == 'defense') selectArmor(side, armorList[0]+'d');
    else if(side == 'offense') selectArmor(side, armorList[0]);
};
function hideArmor(side){
    var armorList = document.getElementsByClassName('armor ' + side);
    for(var i=0; i<armorList.length; i++){
        armorList[i].style = 'display: none;';
    }
};
function selectArmor(side, armorName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        armorName = armorName.slice(0, -1);
        // de-select old armor
        if(document.getElementById(combat.defArmor.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defArmor.NAME + 'd').classList.remove('selected')
        }
        // select new armor
        document.getElementById(armorName+'d').classList.add('selected');
        combat.defArmor = armor.find(x => x.NAME === armorName);
        //document.getElementById('defArmor').innerHTML = "盔甲:" + armorName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old armor
        if(document.getElementById(combat.offArmor.NAME).classList.contains('selected')){
            document.getElementById(combat.offArmor.NAME).classList.remove('selected')
        }
        // select new armor
        document.getElementById(armorName).classList.add('selected');
        combat.offArmor = armor.find(x => x.NAME === armorName);
        //document.getElementById('offArmor').innerHTML = "盔甲:" + armorName;
    }
};

function getArmorBase(armorOBJ){
    base = ['',''], index = 0;
    nums = [0, 0, 0, 0, 0, 0];
    text = ['生命','攻擊','智力','防禦','魔防','技巧'];
    if(armorOBJ.BASEHP != undefined) base[index] = text[0]+"+"+armorOBJ.BASEHP, index++;
    if(armorOBJ.BASEATK != undefined) base[index] = text[1]+"+"+armorOBJ.BASEATK, index++;
    if(armorOBJ.BASEINT != undefined) base[index] = text[2]+"+"+armorOBJ.BASEINT, index++;
    if(armorOBJ.BASEDEF != undefined) base[index] = text[3]+"+"+armorOBJ.BASEDEF, index++;
    if(armorOBJ.BASEMDEF != undefined) base[index] = text[4]+"+"+armorOBJ.BASEMDEF, index++;
    if(armorOBJ.BASEDEX != undefined) base[index] = text[5]+"+"+armorOBJ.BASEDEX, index++;
    return base;
};

function loadArmorDesc(side, armorID){

    if(side == "offense") armorNAME = armorID;
    else if(side == 'defense') armorNAME = armorID.slice(0, -1);

    armorOBJ = armor.find(x => x.NAME === armorNAME);
    armorbase = getArmorBase(armorOBJ);
    eArmor = document.getElementById(armorID);
    eArmorbox = document.getElementById(armorID+"TABLE");
    eArmorname = document.getElementById(armorID+"NAME");
    eArmorbase1 = document.getElementById(armorID+"BASE1");
    eArmorbase2 = document.getElementById(armorID+"BASE2");
    eArmordesc = document.getElementById(armorID+"DESC");

    // down shift 30px
    y = eArmor.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eArmor.getBoundingClientRect().left + 30;

    eArmorname.innerHTML = armorOBJ.NAME;
    eArmorbase1.innerHTML = armorbase[0];
    eArmorbase2.innerHTML = armorbase[1];
    eArmordesc.innerHTML = armorOBJ.DESC;
    eArmorbox.style.top = y + 'px';
    eArmorbox.style.left = x + 'px';
};

