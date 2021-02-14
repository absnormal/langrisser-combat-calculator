function getGreenStat(side)
{
    let stats = page[side].charBase;
    let targetEffect = ["GHP+","GATK+","GINT+","GDEF+","GMDEF+","GSKILL+"];
    let num = [0, 0, 0, 0, 0, 0];
    // weapon/armor/helmet/accessory
    let effectList = ["charWeapon","charArmor","charHelmet","charAccessory"];
    for(let i=0; i<effectList.length; i++){
        page[side][effectList[i]].condition.forEach(function(cond){
            let index = targetEffect.indexOf(cond.effect);
            if(index == -1) return;
            num[index] += cond.eNumber;
        });
    }
    // enchant/mastery
    for(let i=0; i<base.length; i++){
        let white = stats[base[i]];
        let indexE = enchantList.indexOf(base[i]);
        let indexM = masteryList.indexOf(base[i]);
        if(indexE != -1){
            let per = parseInt(page[side].charEnchantNum[indexE].split('%')[0]);
            let add = 0;
            if(page[side].charEnchantNum[indexE].includes('+'))
                add = parseInt(page[side].charEnchantNum[indexE].split('+')[1]);
            num[i] += Math.round(white*per/100) + add;
        }
        num[i] += parseInt(page[side].charMasteryNum[indexM]);
    }
    let charGreen = {
        HP: num[0],
        ATK: num[1],
        INT: num[2],
        DEF: num[3],
        MDEF: num[4],
        SKILL: num[5]
    };
    page[side].charGreen = charGreen;
}

function setGreenStat(side)
{
    for(let i=0; i<base.length; i++)
        document.getElementById(side+"-G"+base[i]).innerHTML="+"+page[side].charGreen[base[i]];
}

function listStats(side)
{
    let tmpclass = page[side].selectedCharacter["class"].find(x => x.name === page[side].charClass.name);
    base.forEach(function(stat){
        page[side].charBase[stat] = tmpclass[stat];
        statElement = document.getElementById(side+"-BASE"+stat);
        statElement.innerHTML = tmpclass[stat];
    });
}

function getAllStat(side)
{
    // ENCHANT
    let charEnchantNum = [];
    for(let i=0; i<enchantList.length; i++){
        let value = document.getElementById(side+"-ENCHANT-"+enchantList[i]).value;
        charEnchantNum.push(value);
    }
    page[side].charEnchantNum = charEnchantNum;
    // MASTERY
    let charMasteryNum = [];
    for(let i=0; i<masteryList.length; i++){
        let value = document.getElementById(side+"-MASTERY-"+masteryList[i]).value;
        charMasteryNum.push(value);
    }
    page[side].charMasteryNum = charMasteryNum;
    // ARENA
    let charArenaNum = [];
    for(let i=0; i<arenaList.length; i++){
        let value = document.getElementById(side+"-ARENA-"+arenaList[i]).value;
        charArenaNum.push(value);
    }
    page[side].charArenaNum = charArenaNum;
}

function setPower(side, power)
{
    // ENCHANT
    for(let i=0; i<enchantList.length; i++)
        document.getElementById(side+"-ENCHANT-"+enchantList[i]).value = powerList[power][0][i];
    // MASTERY
    for(let i=0; i<masteryList.length; i++)
        document.getElementById(side+"-MASTERY-"+masteryList[i]).value = powerList[power][1][i];
    // ARENA
    for(let i=0; i<arenaList.length; i++)
        document.getElementById(side+"-ARENA-"+arenaList[i]).value = powerList[power][2][i];
}

var powerList = {
    MID: [enchantMidList, masteryMidList, arenaMidList],
    HIGH: [enchantHighList, masteryHighList, arenaHighList],
    TOP: [enchantTopList, masteryTopList, arenaTopList],
    FULL: [enchantNumList, masteryNumList, arenaNumList]
};
