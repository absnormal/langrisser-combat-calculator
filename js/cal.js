/* 劍, 槍, 騎, 飛, 水, 刺, 弓, 僧, 魔, 龍 */

function display_offense(offense){
    document.getElementById("offense").innerHTML = offense;
}

function display_defense(defense){
    document.getElementById("defense").innerHTML = defense;
}

function cal_counter(offense, defense){
    switch(offense){
        case "劍":
            if(defense == "槍")
                return 0.4;
            else if(defense == "騎")
                return -0.3;
            else return 0.0; break;
        case "槍":
            if(defense == "劍")
                return -0.2;
            else if(defense == "騎")
                return 0.3;
            else return 0.0; break;
        case "騎":
            if(defense == "劍")
                return 0.2;
            else if(defense == "槍")
                return -0.3;
            else return 0.0; break;
        case "弓":
            if(defense == "飛")
                return 0.3;
            else return 0.0; break;
        case "僧":
            if(defnese == "魔")
                return 0.8;
            else return 0.0; break;
        case "魔":
            if(defense == "僧")
                return -0.4;
            else return 0.0; break;
        default:
            return 0.0;
}
