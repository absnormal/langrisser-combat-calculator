function listEquipment(side)
{
    listWeapon(side);
    listArmor(side);
    listHelmet(side);
    listAccessory(side);
    listExclusive(side);
}

function listWeapon(side)
{
    // clear the select list
    createListByVar(side, "weapon", null, false, false, false, "name", "DONTEXIST");
    // add every class to list
    page[side].charClass.weaponType.forEach(function(weaponType){
        createListByVar(side, "weapon", null, false, true, false, "type", weaponType);
    });
    setWeapon(side);
}

function setWeapon(side)
{
    let selectweapon = document.getElementById(side+"-weapon");
    page[side].charWeapon = data.weapon.find(x => x.name === selectweapon.value);

    // weapon IMG
    let img = document.getElementById(side+"-weapon-IMG");
    img.setAttribute("src",
        imgLocal+"equipment/weapon_"+LANG+"/"+page[side].charWeapon.name+png);
    // exclusive IMG
    if(page[side].charWeapon.part != undefined)
        img.setAttribute("src",
            imgLocal+"equipment/exclusive_"+LANG+"/"+page[side].charWeapon.name+png);
    // weapon popover
    displayEquipment(side, "weapon", "charWeapon");
}

function listArmor(side)
{
    // clear the select list
    createListByVar(side, "armor", null, false, false, false, "name", "DONTEXIST");
    // add every class to list
    page[side].charClass.armorType.forEach(function(armorType){
        createListByVar(side, "armor", null, false, true, false, "type", armorType);
    });
    setArmor(side);
}

function setArmor(side)
{
    let selectarmor = document.getElementById(side+"-armor");
    page[side].charArmor = data.armor.find(x => x.name === selectarmor.value);

    // armor IMG
    let img = document.getElementById(side+"-armor-IMG");
    img.setAttribute("src",
        imgLocal+"equipment/armor_"+LANG+"/"+page[side].charArmor.name+png);
    // exclusive IMG
    if(page[side].charArmor.part != undefined)
        img.setAttribute("src",
            imgLocal+"equipment/exclusive_"+LANG+"/"+page[side].charArmor.name+png);
    // armor popover
    displayEquipment(side, "armor", "charArmor");
}

function listHelmet(side)
{
    // clear the select list
    createListByVar(side, "helmet", null, false, false, false, "name", "DONTEXIST");
    // add every class to list
    page[side].charClass.helmetType.forEach(function(helmetType){
        createListByVar(side, "helmet", null, false, true, false, "type", helmetType);
    });
    setHelmet(side);
}

function setHelmet(side)
{
    let selecthelmet = document.getElementById(side+"-helmet");
    page[side].charHelmet = data.helmet.find(x => x.name === selecthelmet.value);

    // helmet IMG
    let img = document.getElementById(side+"-helmet-IMG");
    img.setAttribute("src",
        imgLocal+"equipment/helmet_"+LANG+"/"+page[side].charHelmet.name+png);
    // exclusive IMG
    if(page[side].charHelmet.part != undefined)
        img.setAttribute("src",
            imgLocal+"equipment/exclusive_"+LANG+"/"+page[side].charHelmet.name+png);
    // helmet popover
    displayEquipment(side, "helmet", "charHelmet");
}

function listAccessory(side)
{
    createListByVar(side, "accessory", null, false, false, false);
    setAccessory(side);
}

function setAccessory(side)
{
    let selectaccessory = document.getElementById(side+"-accessory");
    page[side].charAccessory = data.accessory.find(x => x.name === selectaccessory.value);

    // accessory IMG
    let img = document.getElementById(side+"-accessory-IMG");
    img.setAttribute("src",
        imgLocal+"equipment/accessory_"+LANG+"/"+page[side].charAccessory.name+png);
    // exclusive IMG
    if(page[side].charAccessory.part != undefined)
        img.setAttribute("src",
            imgLocal+"equipment/exclusive_"+LANG+"/"+page[side].charAccessory.name+png);
    // accessory popover
    displayEquipment(side, "accessory", "charAccessory");
}

function listExclusive(side)
{
    let charName = page[side].selectedCharacter.name;
    let exclusiveObj = data.exclusive.find(x => x.type === charName);
    if(exclusiveObj == undefined)
        return;
    // add exclusive equipment to the belonged part of data
    data[exclusiveObj.part].push(exclusiveObj);
    createListByVar(side, exclusiveObj.part, null, false, true, false, "type", charName);
}

function displayEquipment(side, part, objName)
{
    let object = page[side][objName];
    $('.btn.'+side+"-"+part).popover({
        trigger: "focus",
        container: "."+side+"-equipment-bar",
        placement: "top",
        html: true
    });
    let title ="<div class='row'>\
                    <div class='col'>\
                        <h5>"+object.name+"</h5>\
                    </div>\
                </div>\
                <hr style='border-bottom:1px;margin-top:1px'>\
                <div class='row'>\
                    <div class='col popoverbody'>\
                        <p>"+object.description+"</p>\
                    </div>\
                </div>";
    $('.btn.'+side+"-"+part).attr('data-original-title', title);
}
