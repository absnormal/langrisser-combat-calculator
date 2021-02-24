function createMapHTML()
{
    let mapElement = document.getElementById("map-terrainbox");

    // drop container map blocks
    for(let b = 0; b < 3; b++){
        let block = document.createElement("div");
        block.setAttribute("class", "col no-gutters");
        for(let r = 0; r < 7; r++){
            let row = document.createElement("div");
            row.setAttribute("class", "row no-gutters");
            for(let c = 0; c < 6; c++){
                let col = document.createElement("div");
                col.setAttribute("class", "col-2 dropable");
                col.setAttribute("data-role", "drag-drop-container");
                col.setAttribute("id", "map-"+r+"-"+(b*6+c));
                row.appendChild(col);
            }
            block.appendChild(row);
        }
        mapElement.appendChild(block);
    }

    setMap();
    createDragable('ATK', 3, 3);
    createDragable('DEF', 3, 14);
    let dragSrcs = document.querySelectorAll('[draggable="true"]');
    dragSrcs.forEach(dragSrc => {
        dragSrc.addEventListener("dragstart", dragStart);
    });
    let dropSrcs = document.querySelectorAll('[data-role="drag-drop-container"]');
    dropSrcs.forEach( dropSrc => {
        dropSrc.addEventListener("drop", dropped);
        dropSrc.addEventListener("dragenter", cancelDefault);
        dropSrc.addEventListener("dragover", cancelDefault);
    });
}

function createDragable(side, r, c)
{
    let drag = document.createElement("div");
    drag.setAttribute("draggable", "true");
    drag.setAttribute("id", side+"-main");
    let button = document.createElement("button");
    button.setAttribute("id", side+"-main-btn");
    button.setAttribute("class", "btn");
    button.setAttribute("style", "background-color:Transparent");
    button.setAttribute("onclick", "startMove('"+side+"')");
    let img = document.createElement("img");
    img.setAttribute("draggable", "true");
    img.setAttribute("class", "draggable");
    img.setAttribute("id", side+"-map-img");
    img.setAttribute("style", "width:100%;height:100%");
    let div = document.createElement("div");
    div.setAttribute("style", "margin:-150% 0% 0% -70%;")
    let typeIMG = document.createElement("img");
    typeIMG.setAttribute("draggable", "false");
    typeIMG.setAttribute("id", side+"-map-typeimg");
    typeIMG.setAttribute("style", "width:25%;");
    typeIMG.setAttribute("class", "rounded-circle");

    let col = document.getElementById("map-"+r+"-"+c);
    col.appendChild(drag);
    drag.appendChild(button);
    button.appendChild(img);
    button.appendChild(div);
    div.appendChild(typeIMG);
}

function setMap()
{
    let mapname = document.getElementById("map-change").value;
    map = data.map.find(x => x.name === mapname);
    let curMap = data.map.find(x => x.name === mapname);
    let terrainList = data.terrain;
    for(let r=0; r<7; r++){
        for(let c=0; c<18; c++){
            let col = document.getElementById("map-"+r+"-"+c);
            let index = curMap.terrain[r][c];
            col.setAttribute("style", "background-image:url('"+imgLocal+"terrain/"+terrainList[index].name+png+"');"+"background-size:100% 100%;"+"height:100px;width:100px;");
        }
    }
    // change run/range blocks when change map
    changeMoving();
}

function changeMoving()
{
    if(isMoving){
        startMove(movingSide);
        startMove(movingSide);
    }
}

function setMapChar(side)
{
    let charIMG = document.getElementById(side+"-map-img");
    charIMG.setAttribute("src", imgLocal+"character/card_"+LANG+"/"+page[side].selectedCharacter.name+png);

    let type = page[side].charClass.type;

    if(page[side].charClass.SP != undefined) type = "SP-"+type;
    else type = "type-"+type;

    let typeIMG = document.getElementById(side+"-map-typeimg");
    typeIMG.setAttribute("src", imgLocal+"icon/"+type+png);
}

function setMapRun(row, col)
{
    let blue = document.createElement("img");
    blue.setAttribute("class", "moveblock");
    blue.setAttribute("style", "background-color:#33ccff;opacity:0.6;height:85px;width:85px;border-radius:10px;margin-left:7px;margin-top:5px;");
    let mapblock = document.getElementById("map-"+row+"-"+col);
    mapblock.appendChild(blue);
    runable.push(row+"-"+col);
}

function setMapRange(row, col)
{
    let red = document.createElement("img");
    red.setAttribute("class", "moveblock");
    red.setAttribute("style", "background-color:#ff99cc;opacity:0.6;height:85px;width:85px;border-radius:10px;margin-left:7px;margin-top:5px;");
    let mapblock = document.getElementById("map-"+row+"-"+col);
    mapblock.appendChild(red);
    rangeable.push(row+"-"+col);
}

function resetMapBlock(row, col)
{
    let mapblock = document.getElementById("map-"+row+"-"+col);
    if(mapblock.hasChildNodes()){
        let child = mapblock.childNodes;
        child.forEach(function(element){
            if(element.className.includes("moveblock")) element.remove();
        })
    }
}

function resetAllMapBlock()
{
    runable.forEach(function(coord){
        resetMapBlock(coord.split("-")[0], coord.split("-")[1]);
    });
    rangeable.forEach(function(coord){
        resetMapBlock(coord.split("-")[0], coord.split("-")[1]);
    });
}

var isMoving = false;
var runable, rangeable, movetypeIndex, range, movingSide;
var adjacent = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function startMove(side)
{
    if(isMoving){
        resetAllMapBlock();
        isMoving = false;
        return;
    }

    runable = [];
    rangeable = [];
    isMoving = true;
    movingSide = side;
    movetypeIndex = lists.moveType.findIndex(x => x === page[side].charClass.moveType);
    range = page[side].charClass.range;
    let movement = page[side].charClass.move;
    let drag = document.getElementById(side+"-main");
    let row = parseInt(drag.parentNode.id.split("-")[1]);
    let col = parseInt(drag.parentNode.id.split("-")[2]);
    move(side, movement+range, row, col);
    resetMapBlock(row, col);
}

function move(side, movement, row, col)
{
    if(movement < range){
        if(runable.includes(row+"-"+col) || rangeable.includes(row+"-"+col));
        else{
            setMapRange(row, col);
            if(movement <= 0) return;
            adjacent.forEach(function(coord){
                let i = coord[0], j = coord[1];
                if(notInMap(row+i, col+j)) return;
                move(side, movement-1, row+i, col+j);
            });
        }
    }
    else{
        resetMapBlock(row, col);
        setMapRun(row, col);
        adjacent.forEach(function(coord){
            let i = coord[0], j = coord[1];
            if(notInMap(row+i, col+j)) return;
            let targetTerrain = data.terrain[map.terrain[row+i][col+j]];
            let targetCost = targetTerrain.cost[movetypeIndex];
            if(targetCost == null) targetCost = 99;
            move(side, movement-targetCost, row+i, col+j);
        });
    }
}

function notInMap(row, col)
{
    if(0 <= row && row < 7 && 0 <= col && col < 18) return false;
    else return true;
}

// EVENT LISTENERS

function dragStart(e)
{
    if(e.target.getAttribute("class") == "draggable")
        e.dataTransfer.setData("text/plain", e.target.parentNode.parentNode.id);
    else
        e.dataTransfer.setData("text/plain", e.target.id);
}

function dropped(e)
{
    cancelDefault(e);
    let id = e.dataTransfer.getData("text/plain");
    e.target.appendChild(document.querySelector("#"+id));
}

function cancelDefault(e)
{
    e.preventDefault();
    e.stopPropagation();
    return false;
}
