var page = {
    ATK: {
        selectedFaction: undefined,
        selectedRarity: undefined,
        selectedCharacter: undefined,
        charClass: undefined,
        charBase: {
            HP: undefined,
            ATK: undefined,
            INT: undefined,
            DEF: undefined,
            MDEF: undefined,
            SKILL: undefined
        },
        charSkills: undefined,
        choosenSkills: undefined
    },
    DEF: {
    }
};

var base = ["HP", "ATK", "INT", "DEF", "MDEF", "SKILL"];

function setFaction(side)
{
    let ignore = "All Faction";
    let selectfaction = document.getElementById(side+"-faction");

    if(selectfaction.value == ignore)
        page[side].selectedFaction = undefined;
    else
        page[side].selectedFaction = selectfaction.value;

    createListByVar(side, "character", "character/card_"+LANG+"/", false, false, true, "faction", page[side].selectedFaction, "rarity", page[side].selectedRarity);
    setCharacter(side);
}

function setRarity(side)
{
    let ignore = "All Rarity";
    let selectrarity = document.getElementById(side+"-rarity");

    if(selectrarity.value == ignore)
        page[side].selectedRarity = undefined;
    else
        page[side].selectedRarity = selectrarity.value;

    createListByVar(side, "character", "character/card_"+LANG+"/", false, false, true, "faction", page[side].selectedFaction, "rarity", page[side].selectedRarity);
    setCharacter(side);
}

function setCharacter(side)
{
    let ignore = "Not Selected";
    let selectcharacter = document.getElementById(side+"-character");

    if(selectcharacter.value == ignore)
        page[side].selectedCharacter = undefined;
    else{
        page[side].selectedCharacter = data.character.find(x=>x.name===selectcharacter.value);
        setCharacterIMG(side);
        listClass(side);
        listStats(side);
        setSkills(side);
    }

    setTalent(side);
}

function setCharacterIMG(side)
{
    let characterIMG = document.getElementById(side+"-characterFULL");
    characterIMG.setAttribute("src", imgLocal+"character/full/"+page[side].selectedCharacter.name+".png");
}

function listClass(side)
{
    // clear the select list
    createListByVar(side, "classs", null, false, false, false, "name", "DONTEXIST");
    // add every class to list
    page[side].selectedCharacter["class"].forEach(function(classs){
        createListByVar(side, "classs", null, false, true, false, "name", classs.name);
        page[side].charClass = classs;
    });
}

function setClass(side)
{
    let selectclass = document.getElementById(side+"-classs");
    page[side].charClass = data.classs.find(x => x.name === selectclass.value);
    listStats(side);
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

function setTalent(side)
{
    let talentimg = document.getElementById(side+"-talent");
    talentimg.setAttribute("src", imgLocal+"talent/"+page[side].selectedCharacter.talent+png);
}
