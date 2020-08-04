/* create weapon html */
function createWeaponList(side, listID){
    eWeaponList = document.getElementById(listID);
    ul = document.createElement('ul');
    eWeaponList.appendChild(ul);

    for(let i=0; i<weapon.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' weapon';
        if(side == 'offense'){
            li.id = weapon[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadWeaponDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = weapon[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadWeaponDesc('defense', this.id);
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
        img.src = 'image/equipment/weapon/' + weapon[i].NAME + '.png';
        img.style = 'width: 40px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectWeapon('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectWeapon('defense', this.id.split('IMG')[0]);
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

function holdWeapon(side, army, job){
    var holds = [];
    switch(army){
        case '步兵':
            holds = ['NO', '劍', '匕首', '錘'];
            break;
        case '槍兵':
            holds = ['NO', '槍', '斧'];
            break;
        case '騎兵':
            holds = ['NO', '劍', '槍'];
            break;
        case '飛兵':
            holds = ['NO', '槍', '斧'];
            break;
        case '弓兵':
            holds = ['NO', '匕首', '弓'];
            break;
        case '刺客':
            holds = ['NO', '匕首', '弓'];
            break;
        case '水兵':
            holds = ['NO', '錘', '斧'];
            break;
        case '法師':
            holds = ['NO', '法杖'];
            break;
        case '魔物':
            holds = ['NO', '法杖'];
            break;
        case '僧侶':
            holds = ['NO', '法杖', '錘'];
            break;
        case '龍':
            holds = ['NO'];
            break;
    }
    /* add new cases to new heros */
    switch(job){
        case '龍族統帥':
            holds.push('錘');
            break;
    }
    // add hero name to type for char specials
    if(side == 'offense') holds.push(combat.offChar.NAME);
    else if(side == 'defense') holds.push(combat.defChar.NAME);

    return holds;
};

/* displayEquipment depends on char JOBS, select first weapon found */
function displayWeapon(side){
    var army = getArmy(side)
    var job = getJob(side);
    var holds = holdWeapon(side, army, job);

    var weaponList = [];
    // get all usable weaponList
    for(var i=0; i<holds.length; i++){
        // filter objects
        var weaponfilter = weapon.filter(x => x.TYPE === holds[i]);
        for(var j=0; j<weaponfilter.length; j++){
            // get NAMES only
            weaponList.push(weaponfilter[j].NAME);
        }
    }
    // display weapon by NAMES
    for(var i=0; i<weaponList.length; i++){
        if(side == 'defense'){
            document.getElementById(weaponList[i]+'d').style = '';
            // select first item found when no weapon selected
            if(!combat.defWeaSel){
                document.getElementById(weaponList[i]+'d').classList.add('selected');
                combat.defWeapon = weapon.find(x => x.NAME === weaponList[i]);
                // document.getElementById('defWeapon').innerHTML = "武器:" + weaponList[i];
                combat.defWeaSel = true;
            }
        }
        else if(side == 'offense'){
            document.getElementById(weaponList[i]).style = '';
            // select first item found when no weapon selected
            if(!combat.offWeaSel){
                document.getElementById(weaponList[i]).classList.add('selected');
                combat.offWeapon = weapon.find(x => x.NAME === weaponList[i]);
                // document.getElementById('offWeapon').innerHTML = "武器:" + weaponList[i];
                combat.offWeaSel = true;
            }
        }
    }
    // select first item when weapon is selected
    if(side == 'defense') selectWeapon(side, weaponList[0]+'d');
    else if(side == 'offense') selectWeapon(side, weaponList[0]);
};

function hideWeapon(side){
    var weaponList = document.getElementsByClassName('weapon ' + side);
    for(var i=0; i<weaponList.length; i++){
        weaponList[i].style = 'display: none;';
    }
};

function selectWeapon(side, weaponName){
    // defense
    if(side == 'defense'){
        // remove d for defense
        weaponName = weaponName.slice(0, -1);
        // de-select old weapon
        if(document.getElementById(combat.defWeapon.NAME + 'd').classList.contains('selected')){
            document.getElementById(combat.defWeapon.NAME + 'd').classList.remove('selected')
        }
        // select new weapon
        document.getElementById(weaponName+'d').classList.add('selected');
        combat.defWeapon = weapon.find(x => x.NAME === weaponName);
        //document.getElementById('defWeapon').innerHTML = "武器:" + weaponName;
    }
    // offense
    else if(side == 'offense'){
        // de-select old weapon
        if(document.getElementById(combat.offWeapon.NAME).classList.contains('selected')){
            document.getElementById(combat.offWeapon.NAME).classList.remove('selected')
        }
        // select new weapon
        document.getElementById(weaponName).classList.add('selected');
        combat.offWeapon = weapon.find(x => x.NAME === weaponName);
        //document.getElementById('offWeapon').innerHTML = "武器:" + weaponName;
    }
};

function loadWeaponDesc(side, weaponID){

    if(side == "offense") weaponNAME = weaponID;
    else if(side == 'defense') weaponNAME = weaponID.slice(0, -1);

    weaponOBJ = weapon.find(x => x.NAME === weaponNAME);
    eWeapon = document.getElementById(weaponID);
    eWeaponbox = document.getElementById(weaponID+"TABLE");
    eWeaponname = document.getElementById(weaponID+"NAME");
    eWeapondesc = document.getElementById(weaponID+"DESC");

    // down shift 30px
    y = eWeapon.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eWeapon.getBoundingClientRect().left + 30;

    eWeaponname.innerHTML = weaponOBJ.NAME;
    eWeapondesc.innerHTML = weaponOBJ.DESC;
    eWeaponbox.style.top = y + 'px';
    eWeaponbox.style.left = x + 'px';
};

