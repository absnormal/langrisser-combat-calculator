/* 劍, 槍, 騎, 飛, 水, 刺, 弓, 僧, 魔, 龍 */
// INFANTRY, SPEARMAN, CAVALRY, FLYERS, SAILOR, ASSASSIN, ARCHER, MAGE, MONK, MONSTER, DRAGON;
var offense = "MONK", defense = "MONSTER";

function cal_counter(offense, defense){
    switch(offense){
        case "INFANTRY":
            if(defense == "SPEARMAN")
                return 0.4;
            else if(defense == "CAVALRY")
                return -0.3;
            else return 0.0; break;
        case "SPEARMAN":
            if(defense == "INFANTRY")
                return -0.2;
            else if(defense == "CAVALRY")
                return 0.3;
            else return 0.0; break;
        case "CAVALRY":
            if(defense == "INFANTRY")
                return 0.2;
            else if(defense == "SPEARMAN")
                return -0.3;
            else return 0.0; break;
        case "ARCHER":
            if(defense == "FLYERS")
                return 0.3;
            else return 0.0; break;
        case "MONK":
            if(defnese == "MONSTER")
                return 0.8;
            else return 0.0; break;
        case "MONSTER":
            if(defense == "MONK")
                return -0.4;
            else return 0.0; break;
        default:
            return 0.0;
}
