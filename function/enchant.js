/*  */
function getEnchantSkill(side){
    var enchant;
    if(side == 'offense') enchant = combat.offEnchant;
    else if(side == 'defense') enchant = combat.defEnchant;

    // collect display
    var display = {
        NAME: enchant.NAME,
        RATE: [0, 0, 0, 0, 0],
        CHARONLY: true
    };
    if(enchant.SKILLTYPE != undefined && enchant.SKILLTYPE.includes('RATE') && enchant.RATE(side)){
        display.RATE = enchant.RATE(side);
    }
    if(enchant.ATK != undefined) display.RATE[0] += enchant.ATK;
    if(enchant.INT != undefined) display.RATE[1] += enchant.INT;
    if(enchant.DEF != undefined) display.RATE[2] += enchant.DEF;
    if(enchant.MDEF != undefined) display.RATE[3] += enchant.MDEF;
    if(enchant.DEX != undefined) display.RATE[4] += enchant.DEX;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.RATE[0];
        combat.offINTRATE += display.RATE[1];
        combat.offDEFRATE += display.RATE[2];
        combat.offMDEFRATE += display.RATE[3];
        combat.offDEXRATE += display.RATE[4];
        if(enchant.HEAL != undefined) combat.offHEAL += enchant.HEAL;
        if(enchant.HEALED != undefined) combat.offHEALED += enchant.HEALED;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.RATE[0];
        combat.defINTRATE += display.RATE[1];
        combat.defDEFRATE += display.RATE[2];
        combat.defMDEFRATE += display.RATE[3];
        combat.defDEXRATE += display.RATE[4];
        if(enchant.HEAL != undefined) combat.defHEAL += enchant.HEAL;
        if(enchant.HEALED != undefined) combat.defHEALED += enchant.HEALED;
    }
    return display;
};

function getMIDEnchantSkill(side){
    var enchant;
    if(side == 'offense') enchant = combat.offEnchant;
    else if(side == 'defense') enchant = combat.defEnchant;

    // collect display
    var display = {
        NAME: enchant.NAME,
        /* ATK, INT, DEF, MDEF, DEX,
         * CRITRATE+, CRITDMG+, DMGRATE+,
         * CRITRATE-, CRITDMG-, DMGRATE- */
        MIDRATE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        SKILLDMG: 0, CHARONLY: true,
    };
    if(enchant.SKILLTYPE != undefined && enchant.SKILLTYPE.includes('MIDRATE') && enchant.MIDRATE(side)){
        display.MIDRATE = enchant.MIDRATE(side);
    }
    if(side == 'offense'){
        if(enchant.OATK != undefined) display.MIDRATE[0] += enchant.OATK;
        if(enchant.OINT != undefined) display.MIDRATE[1] += enchant.OINT;
        if(enchant.ODEF != undefined) display.MIDRATE[2] += enchant.ODEF;
        if(enchant.OMDEF != undefined) display.MIDRATE[3] += enchant.OMDEF;
        if(enchant.ODEX != undefined) display.MIDRATE[4] += enchant.ODEX;
        if(enchant.OCRITRATEINC != undefined) display.MIDRATE[5] += enchant.OCRITRATEINC;
        if(enchant.OCRITDMGINC != undefined) display.MIDRATE[6] += enchant.OCRITDMGINC;
        if(enchant.ODMGINC != undefined) display.MIDRATE[7] += enchant.ODMGINC;
        if(enchant.OCRITRATEDEC != undefined) display.MIDRATE[8] += enchant.OCRITRATEDEC;
        if(enchant.OCRITDMGDEC != undefined) display.MIDRATE[9] += enchant.OCRITDMGDEC;
        if(enchant.ODMGDEC != undefined) display.MIDRATE[10] += enchant.ODMGDEC;
        if(enchant.SKILLDMG != undefined) display.SKILLDMG += enchant.SKILLDMG;
    }
    else if(side == 'defense'){
        if(enchant.DATK != undefined) display.MIDRATE[0] += enchant.DATK;
        if(enchant.DINT != undefined) display.MIDRATE[1] += enchant.DINT;
        if(enchant.DDEF != undefined) display.MIDRATE[2] += enchant.DDEF;
        if(enchant.DMDEF != undefined) display.MIDRATE[3] += enchant.DMDEF;
        if(enchant.DDEX != undefined) display.MIDRATE[4] += enchant.DDEX;
        if(enchant.DCRITRATEINC != undefined) display.MIDRATE[5] += enchant.DCRITRATEINC;
        if(enchant.DCRITDMGINC != undefined) display.MIDRATE[6] += enchant.DCRITDMGINC;
        if(enchant.DDMGINC != undefined) display.MIDRATE[7] += enchant.DDMGINC;
        if(enchant.DCRITRATEDEC != undefined) display.MIDRATE[8] += enchant.DCRITRATEDEC;
        if(enchant.DCRITDMGDEC != undefined) display.MIDRATE[9] += enchant.DCRITDMGDEC;
        if(enchant.DDMGDEC != undefined) display.MIDRATE[10] += enchant.DDMGDEC;
    }
    if(enchant.CRITRATEINC != undefined) display.MIDRATE[5] += enchant.CRITRATEINC;
    if(enchant.CRITDMGINC != undefined) display.MIDRATE[6] += enchant.CRITDMGINC;
    if(enchant.DMGINC != undefined) display.MIDRATE[7] += enchant.DMGINC;
    if(enchant.CRITRATEDEC != undefined) display.MIDRATE[8] += enchant.CRITRATEDEC;
    if(enchant.CRITDMGDEC != undefined) display.MIDRATE[9] += enchant.CRITDMGDEC;
    if(enchant.DMGDEC != undefined) display.MIDRATE[10] += enchant.DMGDEC;

    // add to combat
    if(side == 'offense'){
        combat.offATKRATE += display.MIDRATE[0];
        combat.offINTRATE += display.MIDRATE[1];
        combat.offDEFRATE += display.MIDRATE[2];
        combat.offMDEFRATE += display.MIDRATE[3];
        combat.offDEXRATE += display.MIDRATE[4];
        combat.offCRITRATE += display.MIDRATE[5];
        combat.offCRITDMG += display.MIDRATE[6];
        combat.offDMGRATE += display.MIDRATE[7];
        combat.defCRITRATE -= display.MIDRATE[8];
        combat.defCRITDMG -= display.MIDRATE[9];
        combat.defDMGRATE -= display.MIDRATE[10];
        combat.offSKILLDMG += display.SKILLDMG;
    }
    else if(side == 'defense'){
        combat.defATKRATE += display.MIDRATE[0];
        combat.defINTRATE += display.MIDRATE[1];
        combat.defDEFRATE += display.MIDRATE[2];
        combat.defMDEFRATE += display.MIDRATE[3];
        combat.defDEXRATE += display.MIDRATE[4];
        combat.defCRITRATE += display.MIDRATE[5];
        combat.defCRITDMG += display.MIDRATE[6];
        combat.defDMGRATE += display.MIDRATE[7];
        combat.offCRITRATE -= display.MIDRATE[8];
        combat.offCRITDMG -= display.MIDRATE[9];
        combat.offDMGRATE -= display.MIDRATE[10];
    }
    return display;
};

function getEnchantBase(side){
    var enchant;
    if(side == 'offense') enchant = combat.offEnchant;

    // collect display
    var display = {
        NAME: enchant.NAME,
        RATE: enchant.BASE
    };

    // add to combat
    combat.offHPRATE += display.RATE[0];
    combat.offATKRATE += display.RATE[1];
    combat.offINTRATE += display.RATE[2];
    combat.offDEFRATE += display.RATE[3];
    combat.offMDEFRATE += display.RATE[4];

    return display;
};

function getEnchantBaseSkill(side){
    part_text = ['weapon','armor','helmet','accessory'];
    part_ch = ['武器+X','防具+X','頭盔+X','飾品+X'];
    value_text = ['HPADD','ATKADD','INTADD','DEFADD','MDEFADD'];

    // 4 parts, collect displayList
    var displayList = [];
    for(let i=0; i<4; i++){
        // 3 enchant slot per. part
        for(let j=0; j<3; j++){

            // check value is XXADD
            selectID = 'off'+part_text[i]+'enchant'+(j+1);
            eSelect = document.getElementById(selectID);
            if(value_text.indexOf(eSelect.value) == -1) continue;

            // collect display
            var display = {
                NAME: part_ch[i],
                BASE: [0, 0, 0, 0, 0, 0]
            };
            inputID = part_text[i]+'enchant'+(j+1);
            eInput = document.getElementById(inputID);
            display.BASE[value_text.indexOf(eSelect.value)] = Number(eInput.value);

            // add to combat
            combat.offADDHP += display.BASE[0];
            combat.offADDATK += display.BASE[1];
            combat.offADDINT += display.BASE[2];
            combat.offADDDEF += display.BASE[3];
            combat.offADDMDEF += display.BASE[4];

            displayList.push(display);
        }
    }
    return displayList;
};

function getEnchantRateSkill(side){
    part_text = ['weapon','armor','helmet','accessory'];
    part_ch = ['武器+%','防具+%','頭盔+%','飾品+%'];
    value_text = ['HPPERC','ATKPERC','INTPERC','DEFPERC','MDEFPERC'];

    // 4 parts, collect displayList
    var displayList = [];
    for(let i=0; i<4; i++){
        // 3 enchant slot per. part
        for(let j=0; j<3; j++){

            // check value is XXADD
            selectID = 'off'+part_text[i]+'enchant'+(j+1);
            eSelect = document.getElementById(selectID);
            if(value_text.indexOf(eSelect.value) == -1) continue;

            // collect display
            var display = {
                NAME: part_ch[i],
                RATE: [0, 0, 0, 0, 0]
            };
            inputID = part_text[i]+'enchant'+(j+1);
            eInput = document.getElementById(inputID);
            display.RATE[value_text.indexOf(eSelect.value)] = Number(eInput.value)/100;

            // add to combat
            combat.offHPRATE += display.RATE[0];
            combat.offATKRATE += display.RATE[1];
            combat.offINTRATE += display.RATE[2];
            combat.offDEFRATE += display.RATE[3];
            combat.offMDEFRATE += display.RATE[4];

            displayList.push(display);
        }
    }
    return displayList;
};

function getMasteryBaseSkill(side){
    part_text = ['weapon','armor','helmet','accessory'];
    part_ch = ['武器精通','防具精通','頭盔精通','飾品精通'];
    value_text = ['HP','ATK','INT','DEF','MDEF','DEX'];

    // 4 parts, collect displayList
    var displayList = [];
    for(let i=0; i<4; i++){
        // 3 enchant slot per. part
        for(let j=0; j<3; j++){

            // check value is XXADD
            selectID = 'off'+part_text[i]+'mastery'+(j+1);
            eSelect = document.getElementById(selectID);
            if(value_text.indexOf(eSelect.value) == -1) continue;

            // collect display
            var display = {
                NAME: part_ch[i],
                BASE: [0, 0, 0, 0, 0, 0]
            };
            inputID = part_text[i]+'mastery'+(j+1);
            eInput = document.getElementById(inputID);
            display.BASE[value_text.indexOf(eSelect.value)] = Number(eInput.value);

            // add to combat
            combat.offADDHP += display.BASE[0];
            combat.offADDATK += display.BASE[1];
            combat.offADDINT += display.BASE[2];
            combat.offADDDEF += display.BASE[3];
            combat.offADDMDEF += display.BASE[4];
            combat.offADDDEX += display.BASE[5];

            displayList.push(display);
        }
    }
    return displayList;
};

