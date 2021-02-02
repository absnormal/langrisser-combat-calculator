/* create skill html */
function createSkillList(side, listID){
    eSkillList = document.getElementById(listID);
    ul = document.createElement('ul');
    eSkillList.appendChild(ul);

    for(let i=0; i<skill.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' skill';
        if(side == 'offense') li.id = skill[i].NAME;
        else if(side == 'defense') li.id = skill[i].NAME+'d';
        li.style = 'display: none;';

        img = document.createElement('img');
        img.id = li.id+'IMG'
        img.src = 'image/skill/' + skill[i].NAME + '.png';
        img.style = 'width: 60px;';
        img.onclick = function onclick(event){
            selectSkill(this.id.split('IMG')[0]);
        };

        whitespace = document.createTextNode(' ');

        /*
         *  <li>
         *      <img/>
         *  </li>
         *  <whitespace>
         * */
        ul.appendChild(li);
        ul.appendChild(whitespace);
        li.appendChild(img);
    }

    if(side == 'offense') SIDE = 'off';
    if(side == 'defense') SIDE = 'def';

    /* skillinfo table */
    table = document.createElement('table');
    tbody = document.createElement('tbody');
    tbody.className = 'skillinfo';
    tr1 = document.createElement('tr');
    tr2 = document.createElement('tr');
    tr3 = document.createElement('tr');
    td1 = document.createElement('td');
    td1.id = SIDE+'SkillNAME';
    td1.style = 'width:300px';
    td2 = document.createElement('td');
    td2.id = SIDE+'SkillCOST';
    td1.style = 'width:300px';
    td3 = document.createElement('td');
    td3.id = SIDE+'SkillTYPE';
    td3.style = 'width:300px';
    td4 = document.createElement('td');
    td4.id = SIDE+'SkillCD';
    td4.style = 'width:300px';
    td5 = document.createElement('td');
    td5.id = SIDE+'SkillRANGE';
    td5.style = 'width:300px';
    td6 = document.createElement('td');
    td6.id = SIDE+'SkillAREA';
    td6.style = 'width:300px';
    td7 = document.createElement('td');
    td7.id = SIDE+'SkillDISC';
    td7.colSpan = '2';

    /*
     * <table>
     *   <tbody>
     *     <tr1>
     *       <td1 id='SKILLNAME'>
     *       <td2 id='SKILLCOST'>
     *     <tr2>
     *       <td3 id='SKILLTYPE'>
     *       <td4 id='SKILLCD'>
     *     <tr3>
     *       <td5 id='SKILLRANGE'>
     *       <td6 id='SKILLAREA'>
     *     <td7 id='SKILLDISC'>
     * */
    eSkillList.appendChild(table);
    table.appendChild(tbody);
    tbody.appendChild(tr1);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tbody.appendChild(tr2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tbody.appendChild(tr3);
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tbody.appendChild(td7);
};

// skills depend on character
function displaySkill(P_charName, side){
    document.getElementById('普攻(法)').style = '';
    document.getElementById('普攻(物)').style = '';
    let SKILLS = char.find(x => x.NAME === P_charName).SKILLS;
    for(let i=0; i<SKILLS.length; i++){
        document.getElementById(SKILLS[i]).style = '';
    }
};
function hideSkill(side){
    let skills = document.getElementsByClassName('skill ' + side);
    for(let i=0; i<skills.length; i++){
        skills[i].style = 'display: none;';
    }
};
function selectSkill(skillName){
    // defense
    if(skillName.charAt(skillName.length - 1) == 'd'){
        // de-select old skill
        if(document.getElementById(defenseSkill).classList.contains('selected')){
            document.getElementById(defenseSkill).classList.remove('selected');
        }
        // select new skill
        document.getElementById(skillName).classList.add('selected');
        defenseSkill = skillName;
    }
    // offense
    else{
        // de-select old skill
        if(document.getElementById(offenseSkill).classList.contains('selected')){
            document.getElementById(offenseSkill).classList.remove('selected');
        }
        // select new skill
        document.getElementById(skillName).classList.add('selected');
        offenseSkill = skillName;
    }
};

function displaySkillInfo(side){
    if(side == 'defense'){}
    else if(side == 'offense'){
        document.getElementById('offSkillNAME').innerHTML = "<b>"+combat.offSkill.NAME+"</b>";
        document.getElementById('offSkillCOST').innerHTML = "<b>COST:</b>"+combat.offSkill.COST;
        document.getElementById('offSkillTYPE').innerHTML = "<b>類別:</b>"+combat.offSkill.TYPE;
        document.getElementById('offSkillCD').innerHTML = "<b>冷卻:</b>"+combat.offSkill.CD;
        document.getElementById('offSkillRANGE').innerHTML="<b>射程:</b>"+combat.offSkill.RANGE;
        document.getElementById('offSkillAREA').innerHTML = "<b>範圍:</b>"+combat.offSkill.AREA;
        document.getElementById('offSkillDISC').innerHTML = combat.offSkill.DISC;
    }
};

