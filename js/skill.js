function setChoosenSkills(side)
{
    page[side].choosenSkills = page[side].charSkills.slice(0, 3);
}

function displaySkills(side, skillList, pos = "", placement = "top")
{
    page[side][skillList].forEach(function(skill, index){
        // skill img
        let img = document.getElementById(side+"-skill"+pos+"-"+index);
        img.setAttribute("src", imgLocal+"skill/skill_"+LANG+"/"+skill.name+png);
        // skill popover
        $('.btn.'+side+"-skill"+pos+"-"+index).popover({
//            trigger: "focus",
            container: "."+side+"-talent-skill-bar",
            placement: placement,
            html: true
        });
        let content =  "<div class='col text-dark text-center p-1'>\
                            <button type='button' class='btn btn-primary'>Equip</button>\
                        </div>";
        let title ="<div class='row'>\
                        <div class='col'>\
                            <h5>"+skill.name+"</h5>\
                        </div>\
                    </div>\
                    <div class='row'>\
                        <div class='col'>\
                            <div class='row'>\
                                <div class='col-5'>\
                                    <p>Type:</p>\
                                </div>\
                                <div class='col-7'>\
                                    <p style='text-align:left;'>"+skill.type+"</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class='col'>\
                            <div class='row'>\
                                <div class='col-5'>\
                                    <p>CD:</p>\
                                </div>\
                                <div class='col-7'>\
                                    <p style='text-align:left;'>"+skill.CD+"</p>\
                                </div>\
                            </div>\
                        </div>\
                     </div>\
                     <div class='row'>\
                        <div class='col'>\
                            <div class='row'>\
                                <div class='col-5'>\
                                    <p>Range:</p>\
                                </div>\
                                <div class='col-7'>\
                                    <p style='text-align:left;'>"+skill.range+"</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class='col'>\
                            <div class='row'>\
                                <div class='col-5'>\
                                    <p>Span:</p>\
                                </div>\
                                <div class='col-7'>\
                                    <p style='text-align:left;'>"+skill.span+"</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class='row'>\
                        <div class='col popoverbody'>\
                            <p>"+skill.description+"</p>\
                        </div>\
                    </div>";
        $('.btn.'+side+"-skill"+pos+"-"+index).attr('data-original-title', title);
        $('.btn.'+side+"-skill"+pos+"-"+index).attr('data-content', content);
    });
}

function setSkills(side)
{
    page[side].charSkills = [];
    page[side].selectedCharacter.skill.forEach(function(skill){
        let tmpskill = data.skill.find(x => x.name === skill);
        page[side].charSkills.push(tmpskill);
    });
    setChoosenSkills(side);
    displaySkills(side, "choosenSkills");
}

function setSkillList(side)
{
    displaySkills(side, "choosenSkills", "ListChoosen");
    displaySkills(side, "charSkills", "List");
}
