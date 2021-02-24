// parse JSON from file
//
// var lists;
var request = new XMLHttpRequest();
request.open("GET", local+"data/lists.json", false);
request.send(null);
var lists = JSON.parse(request.responseText);

// var data = {
//     character: {},
//     classs: {},
//     skill: {},
//     talent: {},
//     weapon: {},
//     armor: {},
//     helmet: {},
//     accessory: {},
//     exclusive: {},
//     map: {},
//     terrain: {}
// };
var data = {};

// character
var request = new XMLHttpRequest();
request.open("GET", local+"data/character.json", false);
request.send(null);
var character = JSON.parse(request.responseText);
data = {...data, ...character};
// class
var request = new XMLHttpRequest();
request.open("GET", local+"data/classs.json", false);
request.send(null);
var classs = JSON.parse(request.responseText);
data = {...data, ...classs};
// skill
var request = new XMLHttpRequest();
request.open("GET", local+"data/skill.json", false);
request.send(null);
var skill = JSON.parse(request.responseText);
data = {...data, ...skill};
// talent
var request = new XMLHttpRequest();
request.open("GET", local+"data/talent.json", false);
request.send(null);
var talent = JSON.parse(request.responseText);
data = {...data, ...talent};
// weapon
var request = new XMLHttpRequest();
request.open("GET", local+"data/weapon.json", false);
request.send(null);
var weapon = JSON.parse(request.responseText);
data = {...data, ...weapon};
// armor
var request = new XMLHttpRequest();
request.open("GET", local+"data/armor.json", false);
request.send(null);
var armor = JSON.parse(request.responseText);
data = {...data, ...armor};
// helmet
var request = new XMLHttpRequest();
request.open("GET", local+"data/helmet.json", false);
request.send(null);
var helmet = JSON.parse(request.responseText);
data = {...data, ...helmet};
// accessory
var request = new XMLHttpRequest();
request.open("GET", local+"data/accessory.json", false);
request.send(null);
var accessory = JSON.parse(request.responseText);
data = {...data, ...accessory};
// exclusive
var request = new XMLHttpRequest();
request.open("GET", local+"data/exclusive.json", false);
request.send(null);
var exclusive = JSON.parse(request.responseText);
data = {...data, ...exclusive};
// map
var request = new XMLHttpRequest();
request.open("GET", local+"data/map.json", false);
request.send(null);
var map = JSON.parse(request.responseText);
data = {...data, ...map};
// terrain
var request = new XMLHttpRequest();
request.open("GET", local+"data/terrain.json", false);
request.send(null);
var terrain = JSON.parse(request.responseText);
data = {...data, ...terrain};

console.log(data);
