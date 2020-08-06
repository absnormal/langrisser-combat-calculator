/* create helmet html */
function createHelmetList(side, listID){
    eHelmetList = document.getElementById(listID);
    ul = document.createElement('ul');
    eHelmetList.appendChild(ul);

    for(let i=0; i<helmet.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' helmet';
        if(side == 'offense'){
            li.id = helmet[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadHelmetDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = helmet[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadHelmetDesc('defense', this.id);
            };
        }
        li.style = 'display: none;';

        table = document.createElement('table');
        table.className = 'equipmentDESC';
        table.id = li.id+'TABLE';

        tr1 = document.createElement('tr');
        tr2 = document.createElement('tr');
        th = document.createElement('th');
        th.id = li.id+'NAME';
        td = document.createElement('td');
        td.id = li.id+'DESC';

        img = document.createElement('img');
        img.id = li.id+'IMG'
        img.src = 'image/equipment/helmet/' + helmet[i].NAME + '.png';
        img.style = 'width: 40px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectHelmet('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectHelmet('defense', this.id.split('IMG')[0]);
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
        table.appendChild(tr2);
        tr1.appendChild(th);
        tr2.appendChild(td);
    }
};

/* side depends the char, job equipment = army equipment + job specials + char specials */
function holdHelmet(side, army, job){
    var holds = [];
    switch(army){
        case '步兵':
            holds = ['NO', '重盔'];
            break;
        case '槍兵':
            holds = ['NO', '重盔'];
            break;
        case '騎兵':
            holds = ['NO', '重盔'];
            break;
        case '飛兵':
            holds = ['NO', '皮盔'];
            break;
        case '弓兵':
            holds = ['NO', '皮盔'];
            break;
        case '刺客':
            holds = ['NO', '皮盔'];
            break;
        case '水兵':
            holds = ['NO', '皮盔'];
            break;
        case '法師':
            holds = ['NO', '法帽'];
            break;
        case '魔物':
            holds = ['NO', '法帽'];
            break;
        case '僧侶':
            holds = ['NO', '法帽'];
            break;
        case '龍':
            holds = ['NO'];
            break;
    }
    /* add new cases to new heros */
    switch(job){
        case '龍族統帥':
            holds.push('皮盔');
            break;
        case '巴哈姆特':
            holds.push('皮盔');
            break;
    }
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first helmet found */
function displayHelmet(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdHelmet(side, army, job);

    var helmetList = [];
    // get all usable helmetList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var helmetfilter = helmet.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<helmetfilter.length; j++){
            // get NAMES only
            helmetList.push(helmetfilter[j].NAME);
        }
    }
    // display helmet by NAMES
    for(var i=0; i<helmetList.length; i++){
        if(side == 'defense'){
            document.getElementById(helmetList[i]+'d').style = '';
            // select first item found when no helmet selected
            if(!combat.defHelSel){
                document.getElementById(helmetList[i]+'d').classList.add('selected');
                combat.defHelmet = helmet.find(x => x.NAME === helmetList[i]);
                //document.getElementById('defHelmet').innerHTML = "頭盔:" + helmetList[i];
                combat.defHelSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(helmetList[i]).style = '';
            // select first item found when no helmet selected
            if(!combat.offHelSel){
                document.getElementById(helmetList[i]).classList.add('selected');
                combat.offHelmet = helmet.find(x => x.NAME === helmetList[i]);
                //document.getElementById('offHelmet').innerHTML = "頭盔:" + helmetList[i];
                combat.offHelSel = true;
            }
        }
    }
    // select first item when helmet is selected
    if(side == 'defense') selectHelmet(side, helmetList[0]+'d');
    else if(side == 'offense') selectHelmet(side, helmetList[0]);
};
function hideHelmet(side){
    var helmetList = document.getElementsByClassName('helmet ' + side);
    for(var i=0; i<helmetList.length; i++){
        helmetList[i].style = 'display: none;';
    }
};
function selectHelmet(side, helmetName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        helmetName = helmetName.slice(0, -1);
        // de-select old helmet
        if(document.getElementById(combat.defHelmet.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defHelmet.NAME + 'd').classList.remove('selected')
        }
        // select new helmet
        document.getElementById(helmetName+'d').classList.add('selected');
        combat.defHelmet = helmet.find(x => x.NAME === helmetName);
        //document.getElementById('defHelmet').innerHTML = "頭盔:" + helmetName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old helmet
        if(document.getElementById(combat.offHelmet.NAME).classList.contains('selected')){
            document.getElementById(combat.offHelmet.NAME).classList.remove('selected')
        }
        // select new helmet
        document.getElementById(helmetName).classList.add('selected');
        combat.offHelmet = helmet.find(x => x.NAME === helmetName);
        //document.getElementById('offHelmet').innerHTML = "頭盔:" + helmetName;
    }
};

function loadHelmetDesc(side, helmetID){

    if(side == "offense") helmetNAME = helmetID;
    else if(side == 'defense') helmetNAME = helmetID.slice(0, -1);

    helmetOBJ = helmet.find(x => x.NAME === helmetNAME);
    eHelmet = document.getElementById(helmetID);
    eHelmetbox = document.getElementById(helmetID+"TABLE");
    eHelmetname = document.getElementById(helmetID+"NAME");
    eHelmetdesc = document.getElementById(helmetID+"DESC");

    // down shift 30px
    y = eHelmet.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eHelmet.getBoundingClientRect().left + 30;

    eHelmetname.innerHTML = helmetOBJ.NAME;
    eHelmetdesc.innerHTML = helmetOBJ.DESC;
    eHelmetbox.style.top = y + 'px';
    eHelmetbox.style.left = x + 'px';
};

