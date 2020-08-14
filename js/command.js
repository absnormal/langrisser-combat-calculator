/* create command html */
function createCommandList(side, listID){
    eCommandList = document.getElementById(listID);
    ul = document.createElement('ul');
    eCommandList.appendChild(ul);

    for(let i=0; i<command.length; i++){
        li = document.createElement('li');
        li.className = 'equipment imgbtn ' + side + ' command';
        if(side == 'offense'){
            li.id = command[i].NAME;
            li.onmouseover = function onmouseover(event){
                loadCommandDesc('offense', this.id);
            };
        }
        else if(side == 'defense'){
            li.id = command[i].NAME+'d';
            li.onmouseover = function onmouseover(event){
                loadCommandDesc('defense', this.id);
            };
        }
        li.style = 'display: none;';

        table = document.createElement('table');
        table.className = 'equipmentDESC';
        table.id = li.id+'TABLE';

        tr1 = document.createElement('tr');
        tr2 = document.createElement('tr');
        tr3 = document.createElement('tr');
        th = document.createElement('th');
        th.id = li.id+'NAME';
        td1 = document.createElement('td');
        td1.id = li.id+'DESC';

        img = document.createElement('img');
        img.id = li.id+'IMG'
        img.src = 'image/command/' + command[i].NAME + '.png';
        img.style = 'width: 25px;';
        if(side == 'offense'){
            img.onclick = function onclick(event){
                selectCommand('offense', this.id.split('IMG')[0]);
            };
        }
        else if(side == 'defense'){
            img.onclick = function onclick(event){
                selectCommand('defense', this.id.split('IMG')[0]);
            };
        }

        whitespace = document.createTextNode(' ');

        /*
         *  <li>
         *      <table>
         *          <tr><th></th></tr>
         *          <tr><td></td></tr>
         *          <tr><td></td></tr>
         *      </table>
         *      <img/>
         *  </li>
         *  <whitespace>
         * */
        ul.appendChild(li);
        ul.appendChild(whitespace);
        li.appendChild(table);
        li.appendChild(img);
        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);
        tr1.appendChild(th);
        tr2.appendChild(td1);
    }
};

/* displayEquipment depends on char JOBS, select first command found */
function displayCommand(side){
    var commandList = [];
    for(let i=0; i<command.length; i++)
        commandList.push(command[i].NAME);
    // display command by NAMES
    for(var i=0; i<commandList.length; i++){
        if(side == 'defense')
            document.getElementById(commandList[i]+'d').style = '';
        else if(side == 'offense')
            document.getElementById(commandList[i]).style = '';
    }
};

function hideCommand(side){
    if(side == 'offense') combat.offCommandLIST = [];
    else if(side == 'defense') combat.defCommandLIST = [];
    var commandList = document.getElementsByClassName('command ' + side);
    for(var i=0; i<commandList.length; i++){
        commandList[i].style = 'display: none;';
        if(commandList[i].classList.contains('selected'))
            commandList[i].classList.remove('selected');
    }
};

function selectCommand(side, commandID){
    // defense remove 'd'
    if(side == 'defense'){
        commandNAME = commandID.slice(0, -1);
        commandList = combat.defCommandLIST;
    }
    else if(side == 'offense'){
        commandNAME = commandID;
        commandList = combat.offCommandLIST;
    }

    commandOBJ = command.find(x => x.NAME === commandNAME);
    eCommand = document.getElementById(commandID);
    // select command if not selected
    if(!eCommand.classList.contains('selected')){
        eCommand.classList.add('selected');
        commandList.push(commandOBJ);
    }
    // de-select if command have no DATA
    else{
        eCommand.classList.remove('selected');
        index = commandList.indexOf(commandOBJ);
        if(index > -1) commandList.splice(index, 1);
    }
    // reload command desc
    loadCommandDesc(side, commandID);

    if(side == 'defense') combat.defCommandLIST = commandList;
    else if(side == 'offense') combat.offCommandLIST = commandList;
};

function loadCommandDesc(side, commandID){
    if(side == "offense") commandNAME = commandID;
    else if(side == 'defense') commandNAME = commandID.slice(0, -1);

    commandOBJ = command.find(x => x.NAME === commandNAME);
    eCommand = document.getElementById(commandID);
    eCommandbox = document.getElementById(commandID+"TABLE");
    eCommandname = document.getElementById(commandID+"NAME");
    eCommanddesc = document.getElementById(commandID+"DESC");

    // down shift 30px
    y = eCommand.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eCommand.getBoundingClientRect().left + 30;

    eCommandname.innerHTML = commandOBJ.NAME;
    eCommanddesc.innerHTML = commandOBJ.DESC;
    eCommandbox.style.top = y + 'px';
    eCommandbox.style.left = x + 'px';
};

