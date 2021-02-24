var png = ".png";
var LANG = "en";
var map;
/* local
var imgLocal = "file:///home/absnormal/langrisser-combat-calculator/image/";
var local = "file:///home/absnormal/langrisser-combat-calculator/";
 */
/* github
 */
var imgLocal = "/langrisser-combat-calculator/image/";
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
        charEnchantNum: undefined,
        charMasteryNum: undefined,
        charArenaNum: undefined,
        charWeapon: undefined,
        charArmor: undefined,
        charHelmet: undefined,
        charAccessory: undefined,
        charGreen: undefined,
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
        charEnchantNum: undefined,
        charMasteryNum: undefined,
        charArenaNum: undefined,
        charWeapon: undefined,
        charWeapon: undefined,
        charArmor: undefined,
        charHelmet: undefined,
        charAccessory: undefined,
        charGreen: undefined,
        choosenSkills: undefined
    }
};

var base = ["HP", "ATK", "INT", "DEF", "MDEF", "SKILL"];

var enchantList = ["HP","ATK","INT","DEF","MDEF","CRIT+"];
var masteryList = ["HP","ATK","INT","DEF","MDEF","SKILL"];
var arenaList = ["HP","ATK","INT","DEF","MDEF","SKILL","CRIT+","CRITD+","CRIT-","CRITD-"];
var enchantNumList = ["50%+660", "35%+70", "35%+70", "40%+54", "40%+54", "15%"];
var masteryNumList = ["750", "80", "80", "60", "60", "50"];
var arenaNumList = ["500", "60", "60", "45", "45", "80", "11%", "21%", "-21%", "-31%"];

function createAllList()
{
    createHeroHTML("ATK");
    createHeroHTML("DEF");
    createMapHTML();
}

function createHeroHTML(side)
{
    createStatInputHTML(side, "ENCHANT", enchantList, enchantNumList, "Enchantment");
    createStatInputHTML(side, "MASTERY", masteryList, masteryNumList, "Mastery");
    createStatInputHTML(side, "ARENA", arenaList, arenaNumList, "Arena Mastery");
    loadIconIMG(side);
    createList(side, "faction", "party/");
    createList(side, "rarity", "icon/");
    createList(side, "enchant", "icon/", "40%");
    createListByVar(side, "character", "character/card_"+LANG+"/", true, false, false);
    setCharacter(side);
}

window.addEventListener("click", function whenClick(){
    refresh('ATK');
    refresh('DEF');
});

function refresh(side)
{
    getAllStat(side);
    getGreenStat(side);
    setGreenStat(side);
    setMapChar(side);
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
    let iconList = ["HP","ATK","INT","DEF","MDEF","SKILL", "CRIT+", "CRITD+", "CRIT-", "CRITD-", "changeSkill"];
    iconList.forEach(function(string){
        let imgList = document.getElementsByClassName(side+"-"+string+"-IMG");
        for(let i=0; i<imgList.length; i++)
            imgList[i].setAttribute("src", imgLocal+"icon/"+string+png);
    });
}

var enchantMidList = ["34%", "25%", "25%", "24%", "24%", "0%"];
var masteryMidList = ["750", "80", "80", "60", "60", "50"];
var arenaMidList = ["500", "60", "60", "45", "45", "80", "11%", "21%", "-21%", "-31%"];

var enchantHighList = ["40%", "30%", "30%", "30%", "30%", "10%"];
var masteryHighList = ["750", "80", "80", "60", "60", "50"];
var arenaHighList = ["500", "60", "60", "45", "45", "80", "11%", "21%", "-21%", "-31%"];

var enchantTopList = ["50%", "35%", "35%", "40%", "40%", "15%"];
var masteryTopList = ["750", "80", "80", "60", "60", "50"];
var arenaTopList = ["500", "60", "60", "45", "45", "80", "11%", "21%", "-21%", "-31%"];
