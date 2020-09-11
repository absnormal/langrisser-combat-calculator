var training = [{
    NAME: '對槍特訓',
    ARMY: ['步兵'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = combat.defSoldier.ARMY;
        if(side == 'defense') oppArmy = combat.offSoldier.ARMY;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppArmy == '槍兵') return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有步兵，對槍兵戰鬥時，攻防提升[DATA]%。'
},{
    NAME: '應急處理',
    ARMY: ['步兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(soldPerHP > 0.8) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[LV]];
        else return false;
    },
    DESC: '所有步兵，當生命值百分比高於80%時，遭受傷害降低[DATA]%。'
},{
    NAME: '壓制戰法',
    ARMY: ['步兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        offPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        defPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(side == 'offense') perHP = offPerHP, oppPerHP = defPerHP;
        if(side == 'defense') perHP = defPerHP, oppPerHP = offPerHP;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppPerHP <= perHP) return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有步兵，在與生命值百分比等於和低於本部隊的敵軍交戰時，攻防提升[DATA]%。'
},{
    NAME: '孤軍奮戰',
    ARMY: ['步兵'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') friend = combat.off1BFriend;
        if(side == 'defense') friend = combat.def1BFriend;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(friend == 0) return [0, 0, 0, 0, 0, 0, 0, this.DATA[LV], 0, 0, 0];
        else return false;
    },
    DESC: '所有步兵，在周圍1格沒有其他友軍部隊時，傷害提升[DATA]%。'
},{
    NAME: '防空重甲',
    ARMY: ['步兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        range = combat.range;
        LV = getTrainingLV(this.NAME+'d')-1;
        if(range > 1) return [0, 0, this.DATA[LV], this.DATA[LV], 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有步兵，被遠端攻擊進入戰鬥時，雙防提升[DATA]%。'
},{
    NAME: '對騎特訓',
    ARMY: ['槍兵'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = combat.defSoldier.ARMY;
        if(side == 'defense') oppArmy = combat.offSoldier.ARMY;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppArmy == '騎兵') return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有槍兵，對騎兵戰鬥時，攻防提升[DATA]%。'
},{
    NAME: '作戰續行',
    ARMY: ['槍兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(soldPerHP < 0.7) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[LV]];
        else return false;
    },
    DESC: '所有槍兵，當生命值低於70%時，遭受傷害降低[DATA]%。'
},{
    NAME: '反擊方陣',
    ARMY: ['槍兵'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        LV = getTrainingLV(this.NAME+'d')-1;
        return [this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    },
    DESC: '所有槍兵被攻擊時，攻擊提升[DATA]%。'
},{
    NAME: '鞏固防線',
    ARMY: ['槍兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') terrainRate = combat.offTerrainRate;
        if(side == 'defense') terrainRate = combat.defTerrainRate;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(terrainRate == 1) return [0, 0, this.DATA[LV], this.DATA[LV], 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有槍兵，在沒有「防禦增強」效果的地形上戰鬥時，雙防提升[DATA]%。'
},{
    NAME: '浴血奮戰',
    ARMY: ['槍兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        offPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        defPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(side == 'offense') perHP = offPerHP, oppPerHP = defPerHP;
        if(side == 'defense') perHP = defPerHP, oppPerHP = offPerHP;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppPerHP => perHP) return [this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有槍兵，在與生命值百分比等於和高於本部隊的敵人交戰時，攻擊提升[DATA]%。'
},{
    NAME: '對步特訓',
    ARMY: ['騎兵'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = combat.defSoldier.ARMY;
        if(side == 'defense') oppArmy = combat.offSoldier.ARMY;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppArmy == '步兵') return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有騎兵，對步兵戰鬥時，攻防提升[DATA]%。'
},{
    NAME: '集團衝鋒',
    ARMY: ['騎兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        if(side == 'defense') friend = combat.def2BFriend;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(friend != 0) return [this.DATA[LV], 0, this.DATA[LV], 0, 0];
        else return false;
    },
    DESC: '所有騎兵，在周圍2格有其他友軍時，攻防提升[DATA]%。'
},{
    NAME: '高速移動',
    ARMY: ['騎兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        LV = getTrainingLV(this.NAME)-1;
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[LV]];
    },
    DESC: '所有騎兵，主動攻擊進入戰鬥時遭受傷害降低[DATA]%。'
},{
    NAME: '奔襲破陣',
    ARMY: ['騎兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        LV = getTrainingLV(this.NAME)-1;
        if(combat.offGUARDED)
            return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有騎兵，在攻擊被「護衛」時，攻防提升[DATA]%。'
},{
    NAME: '精鋼鐵蹄',
    ARMY: ['騎兵'],
    DATA: [0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.06, 0.07, 0.08],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        run = combat.run;
        LV = getTrainingLV(this.NAME)-1;
        return [0, 0, 0, 0, 0, 0, 0, this.DATA[LV]*run, 0, 0, 0];
    },
    DESC: '所有騎兵，攻擊前每移動1格，傷害提升[DATA]%。(最高5格)'
},{
    NAME: '先制打擊',
    ARMY: ['飛兵', '水兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(soldPerHP > 0.8) return [this.DATA[LV], 0, this.DATA[LV], 0, 0];
        else return false;
    },
    DESC: '所有飛兵和水兵，生命大於80%時，攻防提升[DATA]%。'
},{
    NAME: '空海奇襲',
    ARMY: ['飛兵', '水兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        LV = getTrainingLV(this.NAME)-1;
        if(oppPerHP == 1) return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有飛兵和水兵，在攻擊100%生命值的部隊時，攻防提升[DATA]%。'
},{
    NAME: '特技飛行',
    ARMY: ['飛兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') terrainRate = combat.offTerrainRate;
        if(side == 'defense') terrainRate = combat.defTerrainRate;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(terrainRate > 1) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[LV]];
        else return false;
    },
    DESC: '所有飛兵，在擁有「防禦增強」效果的地形上戰鬥時，遭受傷害降低[DATA]%。'
},{
    NAME: '地空協同',
    ARMY: ['飛兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') army = getNewArmy(side), soldArmy = combat.offSoldier.ARMY;
        if(side == 'defense') army = getNewArmy(side), soldArmy = combat.defSoldier.ARMY;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(army != soldArmy) return [0, 0, this.DATA[LV], this.DATA[LV], 0];
        else return false;
    },
    DESC: '所有飛兵，身處於「混合部隊」中時，雙防提升[DATA]%。'
},{
    NAME: '水戰強化',
    ARMY: ['水兵'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        terrainName = combat.offTerrain;
        LV = getTrainingLV(this.NAME)-1;
        if(terrainName == '水') return [0, 0, 0, 0, 0, 0, 0, this.DATA[LV], 0, 0, 0];
        else return false;
    },
    DESC: '所有水兵，在水中攻擊敵軍時，造成傷害提升[DATA]%。'
},{
    NAME: '水靈加護',
    ARMY: ['水兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        terrainName = combat.defTerrain;
        LV = getTrainingLV(this.NAME+'d')-1;
        if(terrainName=='水') return [this.DATA[LV], 0, 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有水兵，在水中被攻擊時，攻擊、魔防提升[DATA]%。'
},{
    NAME: '野戰特訓',
    ARMY: ['弓兵', '刺客'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') terrainRate = combat.offTerrainRate;
        if(side == 'defense') terrainRate = combat.defTerrainRate;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(terrainRate > 1) return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有弓兵和刺客，在擁有「防禦增強」效果的地形上戰鬥時，攻防提升[DATA]%。'
},{
    NAME: '暗影打擊',
    ARMY: ['弓兵', '刺客'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        LV = getTrainingLV(this.NAME)-1;
        if(oppPerHP == 1) return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有弓兵和刺客，在攻擊100%生命值的部隊，攻防提升[DATA]%。'
},{
    NAME: '密林遊俠',
    ARMY: ['弓兵'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        ATK=0, DEF=2, DMGINC=7;
        if(side == 'offense') oppArmy=combat.defSoldier.ARMY, terrainRate=combat.offTerrainRate;
        if(side == 'defense') oppArmy=combat.offSoldier.ARMY, terrainRate=combat.defTerrainRate;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(oppArmy == '飛兵') midrate[ATK] += this.DATA[LV], midrate[DEF] += this.DATA[LV];
        if(terrainRate > 1) midrate[DMGINC] += this.DATA[LV];
        return midrate;
    },
    DESC: '所有弓兵，對飛兵戰鬥時，攻防+[DATA]%。同時在擁有「防禦增強」效果的地形上戰鬥時，傷害提升[DATA]%。'
},{
    NAME: '閃轉騰挪',
    ARMY: ['弓兵'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        range = combat.range;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(range == 1) return [0, 0, this.DATA[LV], this.DATA[LV], 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有弓兵，被近戰攻擊進入戰鬥時，雙防提升[DATA]%。'
},{
    NAME: '殺戮氣息',
    ARMY: ['刺客'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense') return false;
        oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        LV = getTrainingLV(this.NAME)-1;
        if(oppPerHP == 1) return [0, 0, 0, 0, 0, 0, 0, this.DATA[LV], 0, 0, 0];
        else return false;
    },
    DESC: '所有刺客，在攻擊100%生命值的敵軍時，造成傷害提升[DATA]%。'
},{
    NAME: '對法特訓',
    ARMY: ['刺客'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = combat.defSoldier.ARMY;
        if(side == 'defense') oppArmy = combat.offSoldier.ARMY;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppArmy == '法師' || oppArmy == '僧侶')
            return [0, 0, this.DATA[LV], this.DATA[LV], 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有刺客，在與「法師」、「僧侶」部隊交戰時，雙防提升[DATA]%。'
},{
    NAME: '對魔特訓',
    ARMY: ['僧侶'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy = combat.defSoldier.ARMY;
        if(side == 'defense') oppArmy = combat.offSoldier.ARMY;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppArmy == '魔物') return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有僧侶，在對魔物戰鬥時，攻防提升[DATA]%。'
},{
    NAME: '虔誠信仰',
    ARMY: ['僧侶'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(soldPerHP > 0.8) return [0, 0, 0, 0, 0, 0, 0, this.DATA[LV], 0, 0, 0];
        else return false;
    },
    DESC: '所有僧侶，生命大於80%時，造成傷害提升[DATA]%。'
},{
    NAME: '聖光護佑',
    ARMY: ['僧侶', '法師'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(soldPerHP == 1) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[LV]];
        else return false;
    },
    DESC: '所有僧侶、法師，生命100%時，遭受傷害降低[DATA]%。'
},{
    NAME: '污穢鎧甲',
    ARMY: ['魔物'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') return false;
        oppArmy = combat.offSoldier.ARMY;
        LV = getTrainingLV(this.NAME+'d')-1;
        if(oppArmy == '魔物' || oppArmy == '僧侶')
            return [0, 0, this.DATA[LV], this.DATA[LV], 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有魔物，在被「魔物」和「僧侶」之外的部隊攻擊時，雙防提升[DATA]%。'
},{
    NAME: '自我暗示',
    ARMY: ['魔物', '法師'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppbuffNUM = combat.defBUFFLIST.length;
        if(side == 'defense') oppbuffNUM = combat.offBUFFLIST.length;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppbuffNUM != 0) return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有魔物、法師，在對擁有「強化效果」的部隊進行戰鬥時，攻防提升[DATA]%。'
},{
    NAME: '法力虛空',
    ARMY: ['魔物', '法師'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppdebuffNUM = combat.defDEBUFFLIST.length;
        if(side == 'defense') oppdebuffNUM = combat.offDEBUFFLIST.length;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppdebuffNUM != 0) return [this.DATA[LV], 0, this.DATA[LV], 0, 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有魔物、法師，在對遭受「弱化效果」的部隊進行戰鬥時，攻防提升[DATA]%。'
},{
    NAME: '暗黑力量',
    ARMY: ['魔物'],
    DATA: [0.05, 0.07, 0.09, 0.11, 0.13, 0.16, 0.19, 0.22, 0.25, 0.3],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') debuffNUM = combat.offDEBUFFLIST.length;
        if(side == 'defense') debuffNUM = combat.defDEBUFFLIST.length;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(debuffNUM != 0) return [0, 0, 0, 0, 0, 0, 0, this.DATA[LV], 0, 0, 0];
        else return false;
    },
    DESC: '所有魔物，在自身具有「弱化效果」時，傷害提升[DATA]%。'
},{
    NAME: '聚精會神',
    ARMY: ['法師'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') soldPerHP = combat.offsoldHP/combat.offsoldFULLHP;
        if(side == 'defense') soldPerHP = combat.defsoldHP/combat.defsoldFULLHP;
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(soldPerHP < 0.9) return [0, 0, 0, 0, 0, 0, 0, this.DATA[LV], 0, 0, 0];
        else return false;
    },
    DESC: '所有法師，生命小於90%，傷害提升[DATA]%。'
},{
    NAME: '祛除不純',
    ARMY: ['僧侶'],
    DATA: [0.05, 0.06, 0.07, 0.08, 0.09, 0.11, 0.13, 0.15, 0.17, 0.2],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppArmy=getNewArmy('defense'), oppSoldArmy=getSoldArmy('defense');
        if(side == 'defense') oppArmy=getNewArmy('offense'), oppSoldArmy=getSoldArmy('offense');
        if(side == 'offense') LV = getTrainingLV(this.NAME)-1;
        if(side == 'defense') LV = getTrainingLV(this.NAME+'d')-1;
        if(oppArmy != oppSoldArmy)
            return [0, 0, this.DATA[LV], this.DATA[LV], 0, 0, 0, 0, 0, 0, 0];
        else return false;
    },
    DESC: '所有僧侶，與「混合部隊」交戰時，攻防+[DATA]%。'
}];
