/* 英雄天賦加減數值，士兵補正，最終職業&數字&大心 */
var char = [
{
    name: 'Riana',
    soldHPplus:0.4, soldATKplus:0.1, soldDEFplus:0.1, soldMDEFplus:0.4,
    job1:'先知', job1HP:3853, job1ATK:321, job1INT:408, job1DEF:275, job1MDEF:408, job1DEX:88,
    job1LV4:'部隊生命低於50%時，遭受傷害降低10%。',
    job1LV7:'主動攻擊進入戰鬥時，傷害提升10%。',
    job2:'隱士', job1HP:4026, job1ATK:295, job1INT:443, job1DEF:275, job1MDEF:374, job1DEX:103,
    job2LV4:'受到遠程攻擊時，遭受魔法傷害降低10%。',
    job2LV7:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    name: '',
    soldHPplus:0.0, soldATKplus:0.0, soldDEFplus:0.0, soldMDEFplus:0.0,
    job1:'A', job1HP:1, job1ATK:1, job1INT:1, job1DEF:1, job1MDEF:1, job1DEX:1,
    job1LV4:'時，%。',
    job1LV7:'時，%。',
    job2:'B', job1HP:1, job1ATK:1, job1INT:1, job1DEF:1, job1MDEF:1, job1DEX:1,
    job2LV4:'時，%。',
    job2LV7:'時，%。'
}];

/* calculate here */
var selectedParty, selectedChar, selectedSkill, selectedSoldier, selectedTerrain, selectedEnchant;

window.addEventListener("click", function getSelected(){
    var selected = document.getElementsByClassName('selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            selectedParty = selected[i].id;
        }
        else if(selected[i].classList.contains('character')){
            selectedChar = selected[i].id;
        }
        else if(selected[i].classList.contains('skill')){
            selectedSkill = selected[i].id;
        }
        else if(selected[i].classList.contains('soldier')){
            selectedSoldier = selected[i].id;
        }
        else if(selected[i].classList.contains('terrain')){
            selectedTerrain = selected[i].id;
        }
        else if(selected[i].classList.contains('enchant')){
            selectedEnchant = selected[i].id;
        }
    }
    document.getElementById('partydata').innerHTML = "陣營:" + selectedParty;
    document.getElementById('chardata').innerHTML = "角色:" + selectedChar;
    document.getElementById('skilldata').innerHTML = "技能:" + selectedSkill;
    document.getElementById('soldierdata').innerHTML = "士兵:" + selectedSoldier;
    document.getElementById('terraindata').innerHTML = "地形:" + selectedTerrain;
    document.getElementById('enchantdata').innerHTML = "附魔:" + selectedEnchant;
});

