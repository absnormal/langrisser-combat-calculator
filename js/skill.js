function skill(name, cost, type, cooldown, range, area, rate){
    this.name = name;
    this.cost = cost;
    this.type = type;
    this.cooldown = cooldown;
    this.range = range;
    this.area = area;
    this.rate = rate;
};

var fireball = new skill("火球", 1, "magic", 1, "遠", "單體", 1.5);
