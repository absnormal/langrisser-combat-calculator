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

    // remove last character's skillList
    if(page[side].selectedCharacter != undefined)
        removeSkills(side, "charSkills", "List");
    // select new character
    page[side].selectedCharacter = data.character.find(x=>x.name===selectcharacter.value);
    setCharacterIMG(side);
    setTalent(side);
    listClass(side);
    listStats(side);
    setSkills(side);
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
    });
    setClass(side);
}

function setClass(side)
{
    let selectclass = document.getElementById(side+"-classs");
    page[side].charClass = data.classs.find(x => x.name === selectclass.value);

    loadTypeIMG(side);
    listStats(side);
    listEquipment(side);
}

function loadTypeIMG(side)
{
    let type = page[side].charClass.type;

    if(page[side].charClass.SP != undefined) type = "SP-"+type;
    else type = "type-"+type;

    let img = document.getElementById(side+"-type-IMG");
    img.setAttribute("src", imgLocal+"icon/"+type+png);
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

