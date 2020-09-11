/* create accessory html */
function createAccessoryList(side, listID){
    eAccessoryList = document.getElementById(listID);
    ul = document.createElement('ul');
    eAccessoryList.appendChild(ul);

    for(let i=0; i<accessory.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' accessory';
        if(side == 'offense'){
            li.id = accessory[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadAccessoryDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = accessory[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadAccessoryDesc('defense', this.id);
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
        img.src = 'image/equipment/accessory/' + accessory[i].NAME + '.png';
        img.style = 'width: 40px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectAccessory('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectAccessory('defense', this.id.split('IMG')[0]);
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
function holdAccessory(side, army, job){
    var holds = [];
    switch(army){
        case '步兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '槍兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '騎兵':
            holds = ['NO', '飾品', '妖步'];
            break;
        case '飛兵':
            holds = ['NO', '飾品', '妖步'];
            break;
        case '弓兵':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '刺客':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '水兵':
            holds = ['NO', '飾品', '尊爵不凡的鞋子', '鞋子', '妖步'];
            break;
        case '法師':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '魔物':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '僧侶':
            holds = ['NO', '飾品', '鞋子'];
            break;
        case '龍':
            holds = ['NO', '飾品', '鞋子', '妖步'];
            break;
    }
    /* add new cases to new heros */
    /*
    switch(job){
        case '':
            holds.push('');
            break;
    }
    */
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first accessory found */
function displayAccessory(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdAccessory(side, army, job);

    var accessoryList = [];
    // get all usable accessoryList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var accessoryfilter = accessory.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<accessoryfilter.length; j++){
            // get NAMES only
            accessoryList.push(accessoryfilter[j].NAME);
        }
    }
    // display accessory by NAMES
    for(var i=0; i<accessoryList.length; i++){
        if(side == 'defense'){
            document.getElementById(accessoryList[i]+'d').style = '';
            // select first item found when no accessory selected
            if(!combat.defAccSel){
                document.getElementById(accessoryList[i]+'d').classList.add('selected');
                combat.defAccessory = accessory.find(x => x.NAME === accessoryList[i]);
                //document.getElementById('defAccessory').innerHTML = "飾品:"+accessoryList[i];
                combat.defAccSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(accessoryList[i]).style = '';
            // select first item found when no accessory selected
            if(!combat.offAccSel){
                document.getElementById(accessoryList[i]).classList.add('selected');
                combat.offAccessory = accessory.find(x => x.NAME === accessoryList[i]);
                //document.getElementById('offAccessory').innerHTML = "飾品:"+accessoryList[i];
                combat.offAccSel = true;
            }
        }
    }
    // select first item when accessory is selected
    if(side == 'defense') selectAccessory(side, accessoryList[0]+'d');
    else if(side == 'offense') selectAccessory(side, accessoryList[0]);
};
function hideAccessory(side){
    var accessoryList = document.getElementsByClassName('accessory ' + side);
    for(var i=0; i<accessoryList.length; i++){
        accessoryList[i].style = 'display: none;';
    }
};
function selectAccessory(side, accessoryName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        accessoryName = accessoryName.slice(0, -1);
        // de-select old accessory
        if(document.getElementById(combat.defAccessory.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defAccessory.NAME + 'd').classList.remove('selected')
        }
        // select new accessory
        document.getElementById(accessoryName+'d').classList.add('selected');
        combat.defAccessory = accessory.find(x => x.NAME === accessoryName);
        //document.getElementById('defAccessory').innerHTML = "盔甲:" + accessoryName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old accessory
        if(document.getElementById(combat.offAccessory.NAME).classList.contains('selected')){
            document.getElementById(combat.offAccessory.NAME).classList.remove('selected')
        }
        // select new accessory
        document.getElementById(accessoryName).classList.add('selected');
        combat.offAccessory = accessory.find(x => x.NAME === accessoryName);
        //document.getElementById('offAccessory').innerHTML = "盔甲:" + accessoryName;
    }
};

function getAccessoryBase(accessoryOBJ){
    base = ['',''], index = 0;
    nums = [0, 0, 0, 0, 0, 0];
    text = ['生命','攻擊','智力','防禦','魔防','技巧'];
    if(accessoryOBJ.BASEHP != undefined) base[index] = text[0]+"+"+accessoryOBJ.BASEHP, index++;
    if(accessoryOBJ.BASEATK != undefined) base[index] = text[1]+"+"+accessoryOBJ.BASEATK, index++;
    if(accessoryOBJ.BASEINT != undefined) base[index] = text[2]+"+"+accessoryOBJ.BASEINT, index++;
    if(accessoryOBJ.BASEDEF != undefined) base[index] = text[3]+"+"+accessoryOBJ.BASEDEF, index++;
    if(accessoryOBJ.BASEMDEF != undefined) base[index] = text[4]+"+"+accessoryOBJ.BASEMDEF, index++;
    if(accessoryOBJ.BASEDEX != undefined) base[index] = text[5]+"+"+accessoryOBJ.BASEDEX, index++;
    return base;
};

function loadAccessoryDesc(side, accessoryID){

    if(side == "offense") accessoryNAME = accessoryID;
    else if(side == 'defense') accessoryNAME = accessoryID.slice(0, -1);

    accessoryOBJ = accessory.find(x => x.NAME === accessoryNAME);
    accessorybase = getAccessoryBase(accessoryOBJ);
    eAccessory = document.getElementById(accessoryID);
    eAccessorybox = document.getElementById(accessoryID+"TABLE");
    eAccessoryname = document.getElementById(accessoryID+"NAME");
    eAccessorybase1 = document.getElementById(accessoryID+"BASE1");
    eAccessorybase2 = document.getElementById(accessoryID+"BASE2");
    eAccessorydesc = document.getElementById(accessoryID+"DESC");

    // down shift 30px
    y = eAccessory.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eAccessory.getBoundingClientRect().left + 30;

    eAccessoryname.innerHTML = accessoryOBJ.NAME;
    eAccessorybase1.innerHTML = accessorybase[0];
    eAccessorybase2.innerHTML = accessorybase[1];
    eAccessorydesc.innerHTML = accessoryOBJ.DESC;
    eAccessorybox.style.top = y + 'px';
    eAccessorybox.style.left = x + 'px';
};

