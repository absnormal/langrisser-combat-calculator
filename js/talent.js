function setTalent(side)
{
    // find talent
    page[side].charTalent = data.talent.find(x=>x.name===page[side].selectedCharacter.talent);
    // talent img
    let talentimg = document.getElementById(side+"-talent");
    talentimg.setAttribute("src", imgLocal+"talent/"+page[side].charTalent.name+jpg);
    // talent popover
    $(".btn."+side+"-talent").popover({
        trigger: "focus",
        container: "."+side+"-talent-skill-bar",
        placement: "top",
        html: true
    });
    let title = "<div class='row'>\
                    <div class='col'>\
                        <h5>"+page[side].charTalent.name+"</h5>\
                    </div>\
                 </div>\
                 <hr style='border-botton:1px;margin-top:1px;'>\
                 <div class='row'>\
                    <div class='col popoverbody'>\
                        <p>"+page[side].charTalent.description+"</p>\
                    </div>\
                </div>";
    $('.btn.'+side+'-talent').attr('data-original-title', title);
}
