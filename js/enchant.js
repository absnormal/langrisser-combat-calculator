/* create enchant html */
function createEnchantList(side, listID, part){
    /* part = 0, 1, 2 ,3 */
    part_text = ['weapon','armor','helmet','accessory'];
    part_ch = ['武器','防具','頭盔','飾品'];

    eEnchantList = document.getElementById(listID);
    eEnchantList.style = 'width:800px;';

    label_tr = document.createElement('tr');
    eEnchantList.appendChild(label_tr);
    enchantlabel_td = document.createElement('td');
    label_tr.appendChild(enchantlabel_td);
    enchantlabel_td.colSpan = '3';
    enchantlabel_td.style = 'text-align:center;';
    enchantlabel_td.innerHTML = '<b>'+part_ch[part]+'附魔</b>'
    masterylabel_td = document.createElement('td');
    label_tr.appendChild(masterylabel_td);
    masterylabel_td.colSpan = '3';
    masterylabel_td.style = 'text-align:center;';
    masterylabel_td.innerHTML = '<b>'+part_ch[part]+'精通</b>'

    enchant_values = ['HPADD','HPPERC','ATKADD','ATKPERC','INTADD','INTPERC','DEFADD','DEFPERC','MDEFADD','MDEFPERC','CRITPERC'];
    enchant_text = ['生命+','生命+%','攻擊+','攻擊+%','智力+','智力+%','防禦+','防禦+%','魔防+','魔防+%','暴擊+%'];
    mastery_values = ['HP','ATK','INT','DEF','MDEF','DEX'];
    mastery_text = ['生命','攻擊','智力','防禦','魔防','技巧'];

    // only accessory have CRIT+%
    if(part == 3) value_max = 11;
    else value_max = 10;

    // 3 row of enchants
    for(let i=0; i<3; i++){
        enchant_tr = document.createElement('tr');
        eEnchantList.appendChild(enchant_tr);
        // 4 block of td
        enchant_td = document.createElement('td');
        enchant_tr.appendChild(enchant_td);
        enchant_td.style = 'text-align:right';
        enchant_td.colSpan = '1';
        enchant_select = document.createElement('select');
        enchant_td.appendChild(enchant_select);
        enchant_select.id = 'off'+part_text[part]+'enchant'+(i+1);
        // enchant select options
        for(let j=0; j<value_max; j++){
            enchant_option = document.createElement('option');
            enchant_select.appendChild(enchant_option);
            enchant_option.value = enchant_values[j];
            enchant_option.innerHTML = enchant_text[j];
            enchant_option.className = enchant_select.id;
            enchant_option.onclick = function onclick(event){
                changeEnchantNUM(this.className.split('off')[1], this.className, 'MAX');
            };
        }
        enchant_select.value = enchant_values[i];

        enchantbutton_td = document.createElement('td');
        enchant_tr.appendChild(enchantbutton_td);
        enchantbutton_td.colSpan = '2';
        /* [ < ] */
        enchantmin_button = document.createElement('button');
        enchantbutton_td.appendChild(enchantmin_button);
        enchantmin_button.innerHTML = '&lt;';
        enchantmin_button.onclick = function onclick(event){
            changeEnchantNUM(this.id.split('min')[0], 'off'+this.id.split('min')[0], 'MIN');
        };
        /* [ - ] */
        enchantdec_button = document.createElement('button');
        enchantbutton_td.appendChild(enchantdec_button);
        enchantdec_button.innerHTML = '-';
        enchantdec_button.onclick = function onclick(event){
            changeEnchantNUM(this.id.split('dec')[0], 'off'+this.id.split('dec')[0], 'DEC');
        };
        /* [ NUM ] */
        enchant_input = document.createElement('input');
        enchantbutton_td.appendChild(enchant_input);
        enchant_input.style = 'width:30px;';
        enchant_input.value = getEnchantMAX(part_text[part], enchant_select.value);
        /* [ + ] */
        enchantinc_button = document.createElement('button');
        enchantbutton_td.appendChild(enchantinc_button);
        enchantinc_button.innerHTML = '+';
        enchantinc_button.onclick = function onclick(event){
            changeEnchantNUM(this.id.split('inc')[0], 'off'+this.id.split('inc')[0], 'INC');
        };
        /* [ > ] */
        enchantmax_button = document.createElement('button');
        enchantbutton_td.appendChild(enchantmax_button);
        enchantmax_button.innerHTML = '&gt;';
        enchantmax_button.onclick = function onclick(event){
            changeEnchantNUM(this.id.split('max')[0], 'off'+this.id.split('max')[0], 'MAX');
        };
        // enchant button ids
        enchant_input.id = part_text[part]+'enchant'+(i+1);
        enchantmin_button.id = enchant_input.id+'min';
        enchantdec_button.id = enchant_input.id+'dec';
        enchantinc_button.id = enchant_input.id+'inc';
        enchantmax_button.id = enchant_input.id+'max';

        enchantblank_tr = document.createElement('td');
        enchant_tr.appendChild(enchantblank_tr);
        enchantblank_tr.style = 'width:20px';

        mastery_td = document.createElement('td');
        enchant_tr.appendChild(mastery_td);
        mastery_td.style = 'text-align:right';
        mastery_td.colSpan = '1';
        mastery_select = document.createElement('select');
        mastery_td.appendChild(mastery_select);
        mastery_select.id = 'off'+part_text[part]+'mastery'+(i+1);
        // mastery select options
        for(let j=0; j<6; j++){
            mastery_option = document.createElement('option');
            mastery_select.appendChild(mastery_option);
            mastery_option.value = mastery_values[j];
            mastery_option.innerHTML = mastery_text[j];
            mastery_option.className = mastery_select.id;
            mastery_option.onclick = function onclick(event){
                changeEnchantNUM(this.className.split('off')[1], this.className, 'MAX');
            };
        }
        mastery_select.value = mastery_values[i];

        masterybutton_td = document.createElement('td');
        enchant_tr.appendChild(masterybutton_td);
        masterybutton_td.colSpan = '2';
        /* [ < ] */
        masterymin_button = document.createElement('button');
        masterybutton_td.appendChild(masterymin_button);
        masterymin_button.innerHTML = '&lt;';
        masterymin_button.onclick = function onclick(event){
            changeMasteryNUM(this.id.split('min')[0], 'off'+this.id.split('min')[0], 'MIN');
        };
        /* [ - ] */
        masterydec_button = document.createElement('button');
        masterybutton_td.appendChild(masterydec_button);
        masterydec_button.innerHTML = '-';
        masterydec_button.onclick = function onclick(event){
            changeMasteryNUM(this.id.split('dec')[0], 'off'+this.id.split('dec')[0], 'DEC');
        };
        /* [ NUM ] */
        mastery_input = document.createElement('input');
        masterybutton_td.appendChild(mastery_input);
        mastery_input.id = part_text[part]+'mastery'+(i+1);
        mastery_input.style = 'width:30px;';
        mastery_input.value = getMasteryMAX(part_text[part], mastery_select.value);
        /* [ + ] */
        masteryinc_button = document.createElement('button');
        masterybutton_td.appendChild(masteryinc_button);
        masteryinc_button.innerHTML = '+';
        masteryinc_button.onclick = function onclick(event){
            changeMasteryNUM(this.id.split('inc')[0], 'off'+this.id.split('inc')[0], 'INC');
        };
        /* [ > ] */
        masterymax_button = document.createElement('button');
        masterybutton_td.appendChild(masterymax_button);
        masterymax_button.innerHTML = '&gt;';
        masterymax_button.onclick = function onclick(event){
            changeMasteryNUM(this.id.split('max')[0], 'off'+this.id.split('max')[0], 'MAX');
        };
        // mastery button ids
        mastery_input.id = part_text[part]+'mastery'+(i+1);
        masterymin_button.id = mastery_input.id+'min';
        masterydec_button.id = mastery_input.id+'dec';
        masteryinc_button.id = mastery_input.id+'inc';
        masterymax_button.id = mastery_input.id+'max';

    }
};

function getEnchantMAX(part, value){
    if(part == 'weapon'){
        switch(value){
            case 'HPADD': return combat.offWeaponEnchantMAX[0];
            case 'HPPERC': return combat.offWeaponEnchantMAX[1];
            case 'ATKADD': return combat.offWeaponEnchantMAX[2];
            case 'ATKPERC': return combat.offWeaponEnchantMAX[3];
            case 'INTADD': return combat.offWeaponEnchantMAX[4];
            case 'INTPERC': return combat.offWeaponEnchantMAX[5];
            case 'DEFADD': return combat.offWeaponEnchantMAX[6];
            case 'DEFPERC': return combat.offWeaponEnchantMAX[7];
            case 'MDEFADD': return combat.offWeaponEnchantMAX[8];
            case 'MDEFPERC': return combat.offWeaponEnchantMAX[9];
            case 'CRITPERC': return combat.offWeaponEnchantMAX[10];
        }
    }
    if(part == 'armor'){
        switch(value){
            case 'HPADD': return combat.offArmorEnchantMAX[0];
            case 'HPPERC': return combat.offArmorEnchantMAX[1];
            case 'ATKADD': return combat.offArmorEnchantMAX[2];
            case 'ATKPERC': return combat.offArmorEnchantMAX[3];
            case 'INTADD': return combat.offArmorEnchantMAX[4];
            case 'INTPERC': return combat.offArmorEnchantMAX[5];
            case 'DEFADD': return combat.offArmorEnchantMAX[6];
            case 'DEFPERC': return combat.offArmorEnchantMAX[7];
            case 'MDEFADD': return combat.offArmorEnchantMAX[8];
            case 'MDEFPERC': return combat.offArmorEnchantMAX[9];
            case 'CRITPERC': return combat.offArmorEnchantMAX[10];
        }
    }
    if(part == 'helmet'){
        switch(value){
            case 'HPADD': return combat.offHelmetEnchantMAX[0];
            case 'HPPERC': return combat.offHelmetEnchantMAX[1];
            case 'ATKADD': return combat.offHelmetEnchantMAX[2];
            case 'ATKPERC': return combat.offHelmetEnchantMAX[3];
            case 'INTADD': return combat.offHelmetEnchantMAX[4];
            case 'INTPERC': return combat.offHelmetEnchantMAX[5];
            case 'DEFADD': return combat.offHelmetEnchantMAX[6];
            case 'DEFPERC': return combat.offHelmetEnchantMAX[7];
            case 'MDEFADD': return combat.offHelmetEnchantMAX[8];
            case 'MDEFPERC': return combat.offHelmetEnchantMAX[9];
            case 'CRITPERC': return combat.offHelmetEnchantMAX[10];
        }
    }
    if(part == 'accessory'){
        switch(value){
            case 'HPADD': return combat.offAccessoryEnchantMAX[0];
            case 'HPPERC': return combat.offAccessoryEnchantMAX[1];
            case 'ATKADD': return combat.offAccessoryEnchantMAX[2];
            case 'ATKPERC': return combat.offAccessoryEnchantMAX[3];
            case 'INTADD': return combat.offAccessoryEnchantMAX[4];
            case 'INTPERC': return combat.offAccessoryEnchantMAX[5];
            case 'DEFADD': return combat.offAccessoryEnchantMAX[6];
            case 'DEFPERC': return combat.offAccessoryEnchantMAX[7];
            case 'MDEFADD': return combat.offAccessoryEnchantMAX[8];
            case 'MDEFPERC': return combat.offAccessoryEnchantMAX[9];
            case 'CRITPERC': return combat.offAccessoryEnchantMAX[10];
        }
    }
};

function changeEnchantNUM(enchantID, selectID, operation){
    num = Number(document.getElementById(enchantID).value);
    part = enchantID.split('enchant')[0];
    value = document.getElementById(selectID).value;
    if(operation == 'MIN'){
        num = 0;
    }
    if(operation == 'DEC'){
        num -= 1;
        if(num < 0) num = 0;
    }
    if(operation == 'INC'){
        num += 1;
        if(num > getEnchantMAX(part, value)) num = getEnchantMAX(part, value);
    }
    if(operation == 'MAX'){
        num = getEnchantMAX(part, value);
    }
    document.getElementById(enchantID).value = num
};

function getMasteryMAX(part, value){
    if(part == 'weapon'){
        switch(value){
            case 'HP': return combat.offWeaponMasteryMAX[0];
            case 'ATK': return combat.offWeaponMasteryMAX[1];
            case 'INT': return combat.offWeaponMasteryMAX[2];
            case 'DEF': return combat.offWeaponMasteryMAX[3];
            case 'MDEF': return combat.offWeaponMasteryMAX[4];
            case 'DEX': return combat.offWeaponMasteryMAX[5];
        }
    }
    if(part == 'armor'){
        switch(value){
            case 'HP': return combat.offArmorMasteryMAX[0];
            case 'ATK': return combat.offArmorMasteryMAX[1];
            case 'INT': return combat.offArmorMasteryMAX[2];
            case 'DEF': return combat.offArmorMasteryMAX[3];
            case 'MDEF': return combat.offArmorMasteryMAX[4];
            case 'DEX': return combat.offArmorMasteryMAX[5];
        }
    }
    if(part == 'helmet'){
        switch(value){
            case 'HP': return combat.offHelmetMasteryMAX[0];
            case 'ATK': return combat.offHelmetMasteryMAX[1];
            case 'INT': return combat.offHelmetMasteryMAX[2];
            case 'DEF': return combat.offHelmetMasteryMAX[3];
            case 'MDEF': return combat.offHelmetMasteryMAX[4];
            case 'DEX': return combat.offHelmetMasteryMAX[5];
        }
    }
    if(part == 'accessory'){
        switch(value){
            case 'HP': return combat.offAccessoryMasteryMAX[0];
            case 'ATK': return combat.offAccessoryMasteryMAX[1];
            case 'INT': return combat.offAccessoryMasteryMAX[2];
            case 'DEF': return combat.offAccessoryMasteryMAX[3];
            case 'MDEF': return combat.offAccessoryMasteryMAX[4];
            case 'DEX': return combat.offAccessoryMasteryMAX[5];
        }
    }
};

function changeMasteryNUM(masteryID, selectID, operation){
    num = Number(document.getElementById(masteryID).value);
    part = masteryID.split('mastery')[0];
    value = document.getElementById(selectID).value;
    if(operation == 'MIN'){
        num = 0;
    }
    if(operation == 'DEC'){
        num -= 1;
        if(num < 0) num = 0;
    }
    if(operation == 'INC'){
        num += 1;
        if(num > getMasteryMAX(part, value)) num = getMasteryMAX(part, value);
    }
    if(operation == 'MAX'){
        num = getMasteryMAX(part, value);
    }
    document.getElementById(masteryID).value = num
};
