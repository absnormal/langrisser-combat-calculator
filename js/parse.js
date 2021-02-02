// parse JSON from file
//
// var lists;
var request = new XMLHttpRequest();
request.open("GET", "file:///home/absnormal/langrisser-combat-calculator/data/lists.json", false);
request.send(null);
var lists = JSON.parse(request.responseText);

// var data = {
//     character: {},
//     classs: {},
//     skill: {}
// };
var data = {};

var request = new XMLHttpRequest();
request.open("GET", "file:///home/absnormal/langrisser-combat-calculator/data/character.json", false);
request.send(null);
var character = JSON.parse(request.responseText);
data = {...data, ...character};

var request = new XMLHttpRequest();
request.open("GET", "file:///home/absnormal/langrisser-combat-calculator/data/classs.json", false);
request.send(null);
var classs = JSON.parse(request.responseText);
data = {...data, ...classs};

var request = new XMLHttpRequest();
request.open("GET", "file:///home/absnormal/langrisser-combat-calculator/data/skill.json", false);
request.send(null);
var skill = JSON.parse(request.responseText);
data = {...data, ...skill};

console.log(data);
