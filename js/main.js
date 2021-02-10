var png = ".png";
var LANG = "en";
/* local
var imgLocal = "file:///home/absnormal/langrisser-combat-calculator/image/";
var local = "file:///home/absnormal/langrisser-combat-calculator/";
 */
/* github
 */
var imgLocal = "https://raw.githubusercontent.com/absnormal/langrisser-combat-calculator/assets/image/";
var local = "/langrisser-combat-calculator/";
var page = {
    ATK: {
        selectedFaction: undefined,
        selectedRarity: undefined,
        selectedCharacter: undefined,
        charTalent: undefined,
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
        charEnchant: undefined,
        charWeapon: undefined,
        charArmor: undefined,
        charHelmet: undefined,
        charAccessory: undefined,
        choosenSkills: undefined
    },
    DEF: {
        selectedFaction: undefined,
        selectedRarity: undefined,
        selectedCharacter: undefined,
        charTalent: undefined,
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
        charEnchant: undefined,
        charWeapon: undefined,
        charArmor: undefined,
        charHelmet: undefined,
        charAccessory: undefined,
        choosenSkills: undefined
    }
};

var base = ["HP", "ATK", "INT", "DEF", "MDEF", "SKILL"];

function createAllList(side)
{
    loadIconIMG(side);
    createList(side, "faction", "party/");
    createList(side, "rarity", "icon/");
    createList(side, "enchant", "icon/", "40%");
    createListByVar(side, "character", "character/card_"+LANG+"/", true, false, true);
    setCharacter(side);
}

// lists based on JSON files
function createList(side, name, picDirName, width = "100%")
{
    if(lists[name] == null){
        console.log("'"+name+"' not found in lists");
        return;
    }

    let list = document.getElementById(side+"-"+name);

    lists[name].forEach(function(string){
        let option = document.createElement('option');
        option.setAttribute("data-content",
            "<img src='"+imgLocal+picDirName+string+png+"' style='width:"+width+"'>");
        option.setAttribute("value", string);
        list.appendChild(option);
    });

    $('.selectpicker').selectpicker('refresh');
}

// lists determined by vars
function createListByVar(side, name, picDirName, listAll, appendList, image, filterKey1 = undefined, filterData1 = undefined, filterKey2 = undefined, filterData2 = undefined)
{
    if(data[name] == null){
        console.log("'"+name+"' not found in lists");
        return;
    }

    let list = document.getElementById(side+"-"+name);
    let first = data[name][0].name;

    if(!appendList)
        list.options.length = 0;

    let useFilter1 = !listAll && filterKey1!=undefined && filterData1!=undefined ? true : false;
    let useFilter2 = !listAll && filterKey2!=undefined && filterData2!=undefined ? true : false;

    data[name].forEach(function(object){

        // filter
        if(useFilter1)
            if(!object[filterKey1].includes(filterData1)) return;
        if(useFilter2)
            if(!object[filterKey2].includes(filterData2)) return;

        // add option
        let option = document.createElement('option');
        if(image) option.setAttribute("data-content",
            "<img src='" + imgLocal + picDirName + object.name + png + "'>");
        option.innerHTML = object.name;

        option.setAttribute("value", object.name);
        option.setAttribute("data-tokens", object.name);
        list.appendChild(option);
    });

    $('.selectpicker').selectpicker('refresh');
    $('#'+side+'-'+name).selectpicker('var', first);
    $('.selectpicker').selectpicker('refresh');
}

function loadIconIMG(side)
{
    let iconList = ["HP","ATK","INT","DEF","MDEF","SKILL","mastery", "changeSkill"];
    iconList.forEach(function(string){
        let imgList = document.getElementsByClassName(side+"-"+string+"-IMG");
        for(let i=0; i<imgList.length; i++)
            imgList[i].setAttribute("src", imgLocal+"icon/"+string+png);
    });
}
