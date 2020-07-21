/* 劍, 槍, 騎, 飛, 水, 刺, 弓, 僧, 魔, 龍 */
function cal_counter(offense, defense){
    switch(offense){
        case "劍兵":
            if(defense == "槍兵")
                return 0.4;
            else if(defense == "騎兵")
                return -0.3;
            else return 0.0; break;
        case "槍兵":
            if(defense == "劍兵")
                return -0.2;
            else if(defense == "騎兵")
                return 0.3;
            else return 0.0; break;
        case "騎兵":
            if(defense == "劍兵")
                return 0.2;
            else if(defense == "槍兵")
                return -0.3;
            else return 0.0; break;
        case "弓兵":
            if(defense == "飛兵")
                return 0.3;
            else return 0.0; break;
        case "僧侶":
            if(defense == "魔物")
                return 0.8;
            else return 0.0; break;
        case "魔物":
            if(defense == "僧侶")
                return -0.4;
            else return 0.0; break;
        default:
            return 0.0;
    }
};
