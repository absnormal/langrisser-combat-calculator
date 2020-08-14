function displaySkillInfo(side){
    if(side == 'defense'){}
    else if(side == 'offense'){
        document.getElementById('offSkillNAME').innerHTML = "<b>"+combat.offSkill.NAME+"</b>";
        document.getElementById('offSkillCOST').innerHTML = "<b>COST:</b>"+combat.offSkill.COST;
        document.getElementById('offSkillTYPE').innerHTML = "<b>類別:</b>"+combat.offSkill.TYPE;
        document.getElementById('offSkillCD').innerHTML = "<b>冷卻:</b>"+combat.offSkill.CD;
        document.getElementById('offSkillRANGE').innerHTML="<b>射程:</b>"+combat.offSkill.RANGE;
        document.getElementById('offSkillAREA').innerHTML = "<b>範圍:</b>"+combat.offSkill.AREA;
        document.getElementById('offSkillDISC').innerHTML = combat.offSkill.DISC;
    }
};

