/* 大心 */
/* midrate = [ATK, INT, DEF, MDEF, DEX, CRITRATEINC, CRITDMGINC, DMGINC, CRITRATEDEC, CRITDMGDEC, DMGDEC] */
var heart = [{
    NAME: '莉亞娜大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.5)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害' && range > 1)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊生命低於50%時，遭受傷害降低10%。',
    JOB1B:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到遠程攻擊時，遭受魔法傷害降低10%。',
    JOB2B:'受到物理攻擊進入戰鬥時，傷害提升10%。',
},{
    NAME: '浦飯幽助大心',
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppPerHP > perHP)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && oppPerHP > perHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2B:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '麗可麗絲大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppPerHP > perHP)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾伽爾大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.HEAL = 0.1, this.AOEDMGDEC = 0.1;
        else this.HEAL = undefined, this.AOEDMGDEC = undefined;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'部隊血量100%時，傷害提高10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'治療效果+10%。'
},{
    NAME: '蒂亞莉絲大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2B:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '古巨拉大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 3:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                /* SOLDIER RELATED */
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB3A:'部隊血量100%時，遭受傷害降低10%。',
    JOB3B:'受到攻擊時，士兵傷害提升20%。'
},{
    NAME: '尤莉婭大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > oppPerHP)
                    midrate[DMGDEC] += 0.1;
                if(perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '艾米莉亞大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 10, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(side = 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1B:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '神崎堇大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP = 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.5)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'部隊血量低於50%時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'與血量百分比高於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: '雅里安洛德大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'遭受範圍傷害降低10%。',
    JOB1B:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '蒂德莉特大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > oppPerHP)
                    midrate[DMGDEC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'治療效果+10%。'
},{
    NAME: '維拉大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'部隊血量100%時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '弗洛朗蒂婭大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 10, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'部隊血量100%時，傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'範圍傷害提升10%。'
},{
    NAME: '西格瑪大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && range > 1)
                    midrate[DMGDEC] += 0.1;
                if(range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到遠程攻擊時，進入戰鬥後，遭受傷害降低10%。',
    JOB1B:'近戰攻擊時，進入戰鬥後傷害提升10%。',
    JOB2A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '艾拉斯卓大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雷因法魯斯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITRATEINC = 5, CRITDMGINC = 6,  DMGINC = 7, CRITRATEDEC = 10,  DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && range > 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITDMGDEC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITRATEINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到遠程攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'部隊血量高於80%時，暴擊傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '維拉玖大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。'
},{
    NAME: '阿雷斯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITDMGINC = 6,  DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(side == 'defense')
                    midrate[CRITDMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，暴擊傷害提升10%。'
},{
    NAME: '黎恩大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 10, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.5)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.5)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1B:'部隊血量低於50%時，傷害提升10%。',
    JOB2A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '萊恩哈特大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 10, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > oppPerHP)
                    midrate[DMGDEC] += 0.1;
                if(perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITRATEINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '巴恩哈特大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 10, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
        if(jobNo == 2) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'遭受範圍傷害降低10%。',
    JOB1B:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'範圍傷害提升10%。'
},{
    NAME: '希琳卡大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 10, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > oppPerHP)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '艾爾文大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > oppPerHP)
                    midrate[DMGDEC] += 0.1;
                if(perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2A:'血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: 'SP艾爾文大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，傷害提升10%。',
},{
    NAME: '貝蒂大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITDMGDEC = 9, CRITRATEDEC = 10, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITDMGDEC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊傷害降低10%。',
    JOB2B:'範圍傷害提升10%。'
},{
    NAME: '真宮寺櫻大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.5)
                    midrate[DMGDEC] += 0.1;
                if(perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && range == 1)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2A:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB2B:'受到近戰攻擊時，傷害提升10%。'
},{
    NAME: '雷丁大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppBUFFNUM = combat.defBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppBUFFNUM = combat.offBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppBUFFNUM > 0)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'受到具有“強化效果”的部隊攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '約書亞大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITRATEINC = 5, DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[CRITRATEDEC] += 0.1;
                if(perHP == 1)
                    midrate[CRITRATEINC] += 0.1;
                break;
            case 2:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB1B:'部隊血量100%時，暴擊率提升10%。',
    JOB2A:'部隊血量100%時，遭受傷害降低10%。',
    JOB2B:'部隊血量100%時，傷害提升10%。'
},{
    NAME: '澤瑞達大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.5)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1B:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'部隊血量100%時，遭受傷害降低10%。',
    JOB2B:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '燕大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITDMGINC = 6, DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITDMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2B:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '歐米伽大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITDMGINC = 6, DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITDMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1B:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '戶愚呂兄弟大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            BUFFNUM = combat.offBUFFLIST.length;
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            BUFFNUM = combat.defBUFFLIST.length;
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(BUFFNUM > 10)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM > 10)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'部隊血量100%時，傷害提升10%。',
    JOB2A:'本部隊有10個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2B:'本部隊有10個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '伊露希亞大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            terrainName = combat.offTerrain;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            terrainName = combat.defTerrain;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                /* SOLDIER RELATED */
                break;
            case 2:
                if(terrainName == '水')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'主動攻擊時，士兵傷害提升20%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'在水中時，物理傷害提升10%。'
},{
    NAME: '謎之騎士大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'範圍傷害提升10%。'
},{
    NAME: '艾絲蒂爾大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'範圍傷害提升10%。'
},{
    NAME: '妮絲蒂爾大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.5)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.5)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1B:'部隊血量低於50%時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '阿卡婭大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '安潔麗娜大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            terrainName = combat.offTerrain;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            terrainName = combat.defTerrain;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(terrainName == '水' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(terrainName == '水')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'在水中時，遭受物理傷害降低10%。',
    JOB1B:'在水中時，物理傷害提升10%。',
    JOB2A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '露娜大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '迪哈爾特大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITDMGINC = 6, DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[CRITDMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[CRITDMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，暴擊傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，暴擊傷害提升10%。'
},{
    NAME: '利昂大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && perHP < oppPerHP)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2A:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '亞修拉姆大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'範圍傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '海倫娜大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense' && perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '傑利奧魯&蕾拉大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            BUFFNUM = combat.offBUFFLIST.length;
            DEBUFFNUM = combat.offDEBUFFLIST.length;
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            BUFFNUM = combat.defBUFFLIST.length;
            DEBUFFNUM = combat.defDEBUFFLIST.length;
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(BUFFNUM > 5)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(DEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1B:'主動近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'本部隊有弱化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2B:'主動遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蘭芳特大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(run <= 4)
                    midrate[DMGDEC] += 0.03*run;
                else if (run > 4)
                    midrate[DMGDEC] += 0.15;
                if(perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2A:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2B:'與血量百分比高於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: '布琳達大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(oppDEBUFFNUM > 0)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB1B:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '羅莎莉婭大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蘭迪烏斯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '諾埃米大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1B:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '波贊魯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害' && range > 1)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1B:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2B:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '拉姆達大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.5)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && perHP < oppPerHP)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1B:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2A:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'部隊血量高於80%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '拉娜大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2B:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '樹之賢者大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP > oppPerHP )
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1B:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2B:'部隊血量高於80%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '基扎洛夫大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITRATEINC = 5, DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP == 1)
                    midrate[CRITRATEDEC] += 0.1;
                if(perHP > oppPerHP)
                    midrate[CRITRATEINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2A:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB2B:'部隊血量100%時，暴擊率提升10%。'
},{
    NAME: '女神化身大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，傷害提升10%。',
    JOB2A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾恩大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                break;
            case 2:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害-10%',
    JOB1B:'範圍傷害+10%',
    JOB2A:'部隊血量低於70%時，進入戰鬥後遭受傷害-10%',
    JOB2B:'部隊血量低於70%時，進入戰鬥後傷害+10%'
},{
    NAME: '梅雅大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'部隊血量低於70%時，傷害提升10%。',
    JOB2A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雪露法妮爾大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1B:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2A:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '飛影大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITRATEINC = 5, DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITRATEINC] += 0.1;
                break;
            case 2:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1B:'部隊血量高於80%時，暴擊率提升10%。',
    JOB2A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '藏馬大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'範圍傷害提升10%。',
    JOB2A:'到近戰攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '亞魯特繆拉大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(oppDEBUFFNUM > 0)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
        if(jobNo == 1) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1A:'遭受範圍傷害降低10%。',
    JOB1B:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'範圍傷害提升10%。'
},{
    NAME: '克拉蕾特大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && range == 1 && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1B:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2A:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雪莉大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'範圍傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾娜塔大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFLIST = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFLIST = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && range > 1 && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(oppDEBUFFNUM > 0)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(side == 'offense' && perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB1B:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '安茲‧烏爾‧恭大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.5)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到具有「弱化效果」的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1B:'部隊血量低於50%時，傷害提升10%。',
    JOB2A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '夏提雅大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            run = combat.run;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense' && run >= 5)
                    midrate[DMGDEC] += 0.15;
                else if(side == 'offense' && run > 0)
                    midrate[DMGDEC] += 0.03*run;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB1B:'部隊血量100%時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雅兒貝德大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(oppDEBUFFNUM > 0)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense'&& oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1B:'與具有「弱化效果」的部隊戰鬥時，傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
/*            */
/* SSR 分界線 */
/*            */
},{
    NAME: '桑原和真大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'遭受範圍傷害降低10%。',
    JOB1B:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '愛麗絲大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP < 0.5)
                    midrate[DMGDEC] += 0.1;
                /* SOLDIER RELATED */
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1B:'主動攻擊進入戰鬥時，士兵傷害提升20%。',
    JOB2A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '梅露帕妮大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'治療效果提升10%。'
},{
    NAME: '索菲亞大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP < 0.5)
                    midrate[DMGDEC] += 0.1;
                /* SOLDIER RELATED */
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，士兵傷害提升20%。'
},{
    NAME: '弗拉基亞大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > oppPerHP)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '芙蕾雅大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                /* SOLDIER RELATED */
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                /* SOLDIER RELATED */
                break;
        }
        return midrate;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'受到攻擊時，士兵傷害提升20%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2B:'主動攻擊時，士兵傷害提升20%。'
},{
    NAME: 'SP芙蕾雅大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[DMGDEC] += 0.1;
                /* SOLDIER RELATED */
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'部隊血量高於80%時，士兵傷害提升20%。',
},{
    NAME: '巴爾加斯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2B:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '塞蕾娜大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '娜姆大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10, CRITDMGINC = 6;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITDMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && range > 1 && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' &&  range == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1B:'部隊血量高於80%時，暴擊傷害提升10%。',
    JOB2A:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2B:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '法娜大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            BUFFNUM = combat.offBUFFLIST.length;
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            BUFFNUM = combat.defBUFFLIST.length;
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM > 5)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'遭受範圍傷害降低10%。',
    JOB1B:'部隊血量100%時，傷害提高10%。',
    JOB2A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2B:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '奧利維爾大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && perHP < oppPerHP)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2B:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '克麗絲大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && range > 1 && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && range == 1 && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'受到遠程攻擊時，遭受魔法傷害降低10%。',
    JOB1B:'範圍傷害提升10%。',
    JOB2A:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '克蘿賽大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB1B:'範圍傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '帕恩大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
            run = combat.run;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(run <= 4)
                    midrate[DMGDEC] += 0.03*run ;
                else if(run > 4)
                    midrate[DMGDEC] += 0.15
                if(perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB1B:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '阿爾弗雷德大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10, CRITRATEINC = 5;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            terrainName = combat.offTerrain;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            terrainName = combat.defTerrain;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense' && perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(terrainName == '水' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(terrainName == '水')
                    midrate[CRITRATEINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'遭受範圍傷害降低10%。',
    JOB1B:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2A:'在水中時，遭受魔法傷害降低10%。',
    JOB2B:'在水中時，暴擊率提升10%。'
},{
    NAME: '霧風大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITDMGINC = 6, DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[CRITDMGINC] += 0.1;
                break;
            case 2:
                if(perHP > 0.8)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITDMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'部隊血量低於70%時，暴擊傷害提升10%。',
    JOB2A:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '奧利佛大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        CRITRATEINC = 5, DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            BUFFNUM = combat.offBUFFLIST.length;
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            BUFFNUM = combat.defBUFFLIST.length;
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[CRITRATEINC] += 0.1;
                break;
            case 2:
                if(perHP == 1 && oppDMGTYPE == '物理傷害')
                    midrate[CRITRATEDEC] += 0.1;
                if(BUFFNUM > 6)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'遭受範圍傷害降低10%。',
    JOB1B:'部隊血量100%時，暴擊率提升10%。',
    JOB2A:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB2B:'本部隊有6個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '銀狼大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITDMGINC = 6, DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[CRITDMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITDMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，暴擊傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2B:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '比蘿蒂絲大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        CRITRATEINC = 5, DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            BUFFNUM = combat.offBUFFLIST.length;
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            BUFFNUM = combat.defBUFFLIST.length;
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(BUFFNUM >= 5)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM >= 5)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[CRITRATEINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1B:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。',
    JOB2A:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '索尼婭大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            run = combat.run;
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            run = combat.run;
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense' && run >= 5){
                    midrate[DMGDEC] += 0.15;
                    midrate[DMGINC] += 0.15;
                }
                else if(side == 'offense' && run > 0){
                    midrate[DMGDEC] += 0.03*run;
                    midrate[DMGINC] += 0.03*run;
                }
                break;
        }
        return midrate;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'部隊血量高於80%時，傷害提升10%。',
    JOB2A:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2B:'攻擊前每移動1格，傷害提升3%。（上限15%）'
},{
    NAME: '艾馬林克大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP > 0.8)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB1B:'部隊血量高於80%時，傷害提升10%。',
    JOB2A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2B:'部隊血量低於70%時，傷害提升10%。'
},{
    NAME: '亞爾緹娜大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
            run = combat.run
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP > oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(run <= 4)
                    midrate[DMGDEC] += 0.03*run;
                /* SOLDIER RELATED */
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2A:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2B:'主動攻擊進入戰鬥時，士兵傷害提升20%。'
},{
    NAME: '伊梅爾達大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
        if(jobNo == 2) this.AOEDMGDEC = 0.1;
        else this.AOEDMGDEC = undefined;
    },
    JOB1A:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1B:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'遭受範圍傷害降低10%。',
    JOB2B:'範圍傷害提升10%。'
},{
    NAME: '莉法妮大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(oppDEBUFFNUM > 0)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1B:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2A:'部隊血量100%時，遭受傷害降低10%。',
    JOB2B:'部隊血量100%時，傷害提高10%。'
},{
    NAME: '安潔莉卡大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                /* SOLDIER RELATED */
        }
        return midrate;
    },
    JOB1A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1B:'受到攻擊時，士兵傷害提升20%。',

},{
    NAME: '埃格貝爾特大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            oppDEBUFFNUM = combat.defDEBUFFLIST.length;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            oppDEBUFFNUM = combat.offDEBUFFLIST.length;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDEBUFFNUM > 0)
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(perHP < 0.7)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense' && perHP < oppPerHP)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1B:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'部隊血量低於70%時，遭受傷害降低10%。',
    JOB2B:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '海恩大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            BUFFNUM = combat.offBUFFLIST.length;
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            BUFFNUM = combat.defBUFFLIST.length;
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(BUFFNUM >= 7)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM >= 7)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'部隊血量100%時，傷害提高10%。',
    JOB2A:'本部隊有7個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2B:'本部隊有7個以上的強化狀態時，進入戰鬥後傷害提升10%。'
},{
    NAME: '蘭斯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(perHP < 0.7)
                    midrate[DMGINC] += 0.1;
            case 2:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(perHP == 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'部隊血量低於70%時，傷害提升10%。',
    JOB2A:'部隊血量100%時，遭受傷害降低10%。',
    JOB2B:'部隊血量100%時，傷害提高10%。'
},{
    NAME: '蕾蒂西亞大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            run = combat.run;
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            run = combat.run;
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense' && run >= 5){
                    midrate[DMGDEC] += 0.15;
                    midrate[DMGINC] += 0.15;
                }
                else if(side == 'offense' && run > 0){
                    midrate[DMGDEC] += 0.03*run;
                    midrate[DMGINC] += 0.03*run;
                }
                break;
        }
        return midrate;
    },
    JOB1A:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB1B:'攻擊前每移動1格，傷害提升3%。（上限15%）',
},{
    NAME: '安娜大心',
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.HEAL = 0.1;
        else this.HEAL = undefined;
    },
    JOB1A:'遭受範圍傷害降低10%。',
    JOB1B:'治療效果+10%。',
},{
    NAME: '阿倫大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            range = combat.range;
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            range = combat.range;
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害'){
                    midrate[DMGDEC] += 0.10;
                }
                else if(side == 'defense' && range == 1){
                    midrate[DMGINC] += 0.10;
                }
                break;
        }
        return midrate;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
},{
    NAME: '皮耶魯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10, CRITRATEINC = 5;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            terrainName = combat.offTerrain;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            terrainName = combat.defTerrain;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(terrainName == '水' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(terrainName == '水')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'在水中時，遭受物理傷害降低10%。',
    JOB1B:'在水中時，物理傷害提升10%。',
},{
    NAME: '路因大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            BUFFNUM = combat.offBUFFLIST.length;
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            BUFFNUM = combat.defBUFFLIST.length;
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(BUFFNUM >= 5)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM >= 5)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1B:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。',
},{
    NAME: '洛加大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            BUFFNUM = combat.offBUFFLIST.length;
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            BUFFNUM = combat.defBUFFLIST.length;
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(BUFFNUM >= 5)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM >= 5)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1B:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。',
},{
    NAME: '利斯塔大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10, CRITRATEINC = 5;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            terrainName = combat.offTerrain;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            terrainName = combat.defTerrain;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(terrainName == '水' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(terrainName == '水')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'在水中時，遭受物理傷害降低10%。',
    JOB1B:'在水中時，物理傷害提升10%。',
},{
    NAME: '利亞特大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            run = combat.run;
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            run = combat.run;
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense' && run >= 5){
                    midrate[DMGDEC] += 0.15;
                    midrate[DMGINC] += 0.15;
                }
                else if(side == 'offense' && run > 0){
                    midrate[DMGDEC] += 0.03*run;
                    midrate[DMGINC] += 0.03*run;
                }
                break;
        }
        return midrate;
    },
    JOB1A:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB1B:'攻擊前每移動1格，傷害提升3%。（上限15%）',
},{
    NAME: '斯科特大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            range = combat.range;
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            range = combat.range;
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(oppPerHP < perHP){
                    midrate[DMGDEC] += 0.10;
                }
                else if(perHP > 0.8){
                    midrate[DMGINC] += 0.10;
                }
                break;
        }
        return midrate;
    },
    JOB1A:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1B:'部隊血量高於80%時，傷害提升10%。',
},{
    NAME: '迪歐斯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            range = combat.range;
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            range = combat.range;
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1){
                    midrate[DMGINC] += 0.10;
                }
                else if(perHP == 1){
                    midrate[DMGDEC] += 0.10;
                }
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'部隊血量100%時，傷害提高10%。',
},{
    NAME: '傑西卡大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            range = combat.range;
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            range = combat.range;
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP == 1){
                    midrate[DMGINC] += 0.10;
                }
                else if(perHP == 1){
                    midrate[DMGDEC] += 0.10;
                }
                break;
        }
        return midrate;
    },
    JOB1A:'部隊血量100%時，遭受傷害降低10%。',
    JOB1B:'部隊血量100%時，傷害提高10%。',
},{
    NAME: '基斯大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            range = combat.range;
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            run = combat.run;
        }
        else if(side == 'defense'){
            range = combat.range;
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense'){
                    midrate[DMGINC] += 0.10;
                }
                else if(side == 'offense'){
                    midrate[DMGDEC] += 0.10;
                }
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'主動攻擊進入戰鬥時，傷害提升10%。',
},{
    NAME: '艾梅達大心',
    SKILLTYPE: ['RATE','MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, CRITRATEDEC = 8, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(perHP > 0.8)
                    midrate[CRITRATEDEC] += 0.1;
                break;
            case 2:
                if(perHP == 1)
                    midrate[DMGDEC] += 0.1;
                if(side == 'offense')
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    RATE: function(side){
        if(side == 'offense') jobNo = combat.offJobNo;
        else if(side == 'defense') jobNo = combat.defJobNo;
        if(jobNo == 1) this.AOEDMGINC = 0.1;
        else this.AOEDMGINC = undefined;
    },
    JOB1A:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1B:'範圍傷害提升10%。',
    JOB2A:'部隊血量100%時，遭受傷害降低10%。',
    JOB2B:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '格尼爾大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'defense' && oppDMGTYPE == '魔法傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range == 1)
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(side == 'defense' && oppDMGTYPE == '物理傷害')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense' && range > 1)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1B:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2B:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '馬修-突擊騎士大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            BUFFNUM = combat.offBUFFLIST.length;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            BUFFNUM = combat.defBUFFLIST.length;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(BUFFNUM >= 5)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM >= 5)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'本部隊有5個以上增益效果時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'本部隊有5個以上增益效果時，進入戰鬥後傷害提升10%。',
},{
    NAME: '馬修-影大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            BUFFNUM = combat.offBUFFLIST.length;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            BUFFNUM = combat.defBUFFLIST.length;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(BUFFNUM >= 5)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM >= 5)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'本部隊有5個以上增益效果時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'本部隊有5個以上增益效果時，進入戰鬥後傷害提升10%。',
},{
    NAME: '馬修-遊俠大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            BUFFNUM = combat.offBUFFLIST.length;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            BUFFNUM = combat.defBUFFLIST.length;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(BUFFNUM >= 5)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM >= 5)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'本部隊有5個以上增益效果時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'本部隊有5個以上增益效果時，進入戰鬥後傷害提升10%。',
},{
    NAME: '馬修-龍騎統帥大心',
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        DMGINC = 7, DMGDEC = 10;
        if(side == 'offense'){
            jobNo = combat.offJobNo;
            BUFFNUM = combat.offBUFFLIST.length;
            perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppDMGTYPE = combat.defDMGTYPE;
            range = combat.range;
        }
        else if(side == 'defense'){
            jobNo = combat.defJobNo;
            BUFFNUM = combat.defBUFFLIST.length;
            perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
            oppPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
            oppDMGTYPE = combat.offDMGTYPE;
            range = combat.range;
        }
        midrate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch(jobNo){
            case 1:
                if(side == 'offense')
                    midrate[DMGDEC] += 0.1;
                if(side == 'defense')
                    midrate[DMGINC] += 0.1;
                break;
            case 2:
                if(BUFFNUM >= 5)
                    midrate[DMGDEC] += 0.1;
                if(BUFFNUM >= 5)
                    midrate[DMGINC] += 0.1;
                break;
        }
        return midrate;
    },
    JOB1A:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1B:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2A:'本部隊有5個以上增益效果時，進入戰鬥後遭受傷害降低10%。',
    JOB2B:'本部隊有5個以上增益效果時，進入戰鬥後傷害提升10%。',
}];

