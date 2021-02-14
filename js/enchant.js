function createStatInputHTML(side, id, statList, numList, name)
{
    let root = document.getElementById(side+"-"+id);
    let row = document.createElement('div');
    row.setAttribute("class", "row p-1");
    let h5 = document.createElement('h5');
    h5.innerHTML = name;
    root.appendChild(row);
    row.appendChild(h5);

    for(let j=0; j<statList.length/2; j++){
        let row1 = document.createElement('div');
        row1.setAttribute("class", "row");
        root.appendChild(row1);
        for(let i=0; i<2; i++){
            // stats and number of it
            let stat = statList[j*2+i];
            let num = numList[j*2+i];
            // html for stats
            let col1 = document.createElement('div');
            col1.setAttribute("class", "col-1 p-1");
            let col2 = document.createElement('div');
            col2.setAttribute("class", "col-2 p-1");
            let col3 = document.createElement('div');
            col3.setAttribute("class", "col-3 p-1");
            let img = document.createElement('img');
            img.setAttribute("style", "width:100%");
            img.setAttribute("class", "rounded"+" "+side+"-"+stat+"-IMG");
            let p = document.createElement('p');
            p.innerHTML = stat+":";
            let input = document.createElement('input');
            input.setAttribute("style", "width:100%;height:70%;");
            input.setAttribute("type", "text");
            input.setAttribute("id", side+"-"+id+"-"+stat);
            input.setAttribute("value", num);
            row1.appendChild(col1);
            row1.appendChild(col2);
            row1.appendChild(col3);
            col1.appendChild(img);
            col2.appendChild(p);
            col3.appendChild(input);
        }
    }
}

function setEnchant(side)
{
    page[side].charEnchant = page[side].charEnchant = $('#'+side+'-enchant').val();
}
