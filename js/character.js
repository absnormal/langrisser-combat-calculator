var offParty, offChar, offSkill, offSoldier, offTerrain, offEnchant;
var offJobNo = 1, offbaseATK;

var defParty, defChar, defSkill, defSoldier, defTerrain, defEnchant;
var defJobNo = 1, defbaseATK;

function displayJob(side, jobNo){
    if(side == 'defense'){
        if(defJobNo == 1)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB1;
        else if(defJobNo == 2)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB2;
        else if(defJobNo == 3)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB3;
        else if(defJobNo == 4)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB4;
        else if(defJobNo == 5)
            document.getElementById('defcharJOB').innerHTML = '職業:' + defChar.JOB5;
    }
    else if(side == 'offense'){
        if(offJobNo == 1)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB1;
        else if(offJobNo == 2)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB2;
        else if(offJobNo == 3)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB3;
        else if(offJobNo == 4)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB4;
        else if(offJobNo == 5)
            document.getElementById('offcharJOB').innerHTML = '職業:' + offChar.JOB5;
    }
};

function changeJob(side){
    var jobNo;
    if(side == 'defense') jobNo = defJobNo;
    else if(side == 'offense') jobNo = offJobNo;
    jobNo += 1;
    if(side == 'defense'){
        if(jobNo > defChar.JOBS) jobNo = 1;
        defJobNo = jobNo;
    }
    else if(side == 'offense'){
        if(jobNo > offChar.JOBS) jobNo = 1;
        offJobNo = jobNo;
    }
};

function displayPREATK(side, char, skill, enchant){
    var job, ATK, equipEFF = 0, BUFFEFF = 0, enchantEFF = 0, PREATK;

    if(skill.TYPE == '魔法傷害'){
        ATK = document.getElementById('offINT').value;
    }
    else if(skill.TYPE == '物理傷害'){
        ATK = document.getElementById('offATK').value;
    }
    /* 滿月全屬性+10% */
    if(enchant.NAME == '滿月') enchantEFF = 0.1;

    /* calculate */
    PREATK = ATK * (1 + equipEFF + BUFFEFF + enchantEFF);
    PREATK = Math.round(PREATK);
    // display job when calculate
    if(side == 'offense') displayJob(side, offJobNo);
    else if(side == 'defense') displayJob(side, defJobNo);
    // display PREATK formula
    document.getElementById('PREATK').innerHTML = PREATK + "=" + ATK + "×" + "[1+" + equipEFF + "+" + BUFFEFF + "+" + enchantEFF + "]";
};

function bigFormula(offParty, offChar, offSkill, offSoldier, offTerrain, offEnchant, defParty, defChar, defSoldier, defTerrain, defEnchant){
    var PREATK = displayPREATK('offense', offChar, offSkill, offEnchant);
};

window.addEventListener("click", function getSelected(){
    // offense
    var selected = document.getElementsByClassName('offense selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            offParty = selected[i].id;
            //offParty = party.find(x => x.NAME === offParty);
        }
        else if(selected[i].classList.contains('character')){
            offChar = selected[i].id;
            offChar = char.find(x => x.NAME === offChar);
        }
        else if(selected[i].classList.contains('skill')){
            offSkill = selected[i].id;
            offSkill = skill.find(x => x.NAME === offSkill);
        }
        else if(selected[i].classList.contains('soldier')){
            offSoldier = selected[i].id;
            //offSoldier = soldier.find(x => x.NAME === offSoldier);
        }
        else if(selected[i].classList.contains('terrain')){
            offTerrain = selected[i].id;
            //offTerrain = terrain.find(x => x.NAME === offTerrain);
        }
        else if(selected[i].classList.contains('enchant')){
            offEnchant = selected[i].id;
            offEnchant = enchant.find(x => x.NAME === offEnchant);
        }
    }
    document.getElementById('partydata').innerHTML = "陣營:" + offParty;//.NAME;
    document.getElementById('chardata').innerHTML = "角色:" + offChar.NAME;
    document.getElementById('skilldata').innerHTML = "技能:" + offSkill.NAME;
    document.getElementById('soldierdata').innerHTML = "士兵:" + offSoldier;//.NAME;
    document.getElementById('terraindata').innerHTML = "地形:" + offTerrain;//.NAME;
    document.getElementById('enchantdata').innerHTML = "附魔:" + offEnchant.NAME;

    bigFormula(offParty, offChar, offSkill, offSoldier, offTerrain, offEnchant, defParty, defChar, defSoldier, defTerrain, defEnchant);

    // defense
    var selected = document.getElementsByClassName('defense selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            defParty = selected[i].id;
        }
        else if(selected[i].classList.contains('character')){
            defChar = selected[i].id;
        }
        else if(selected[i].classList.contains('soldier')){
            defSoldier = selected[i].id;
        }
        else if(selected[i].classList.contains('terrain')){
            defTerrain = selected[i].id;
        }
        else if(selected[i].classList.contains('enchant')){
            defEnchant = selected[i].id;
        }
    }
    document.getElementById('partydatad').innerHTML = "陣營:" + defParty.slice(0, -1);
    document.getElementById('chardatad').innerHTML = "角色:" + defChar.slice(0, -1);
    document.getElementById('soldierdatad').innerHTML = "士兵:" + defSoldier.slice(0, -1);
    document.getElementById('terraindatad').innerHTML = "地形:" + defTerrain.slice(0, -1);
    document.getElementById('enchantdatad').innerHTML = "附魔:" + defEnchant.slice(0, -1);
});

