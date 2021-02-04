function listEquipment(side)
{
    listWeapon(side);
    listArmor(side);
    listHelmet(side);
    listAccessory(side);
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
}

