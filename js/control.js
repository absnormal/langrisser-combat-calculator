// refresh when clicked
window.addEventListener("click", refresh);
function refresh(){
    display_offense(offense);
    display_defense(defense);
    display_counter(offense, defense);
};

// display version
function display_version(){
    var ver = "0.2.1";
    document.getElementById("version").innerHTML = "version " + ver;
};

// display local path
function display_path(path){
    var local='file:///home/absnormal/';
    var rep = 'langrisser-combat-calculator/';
    var functs = ['overall', 'testing', 'baseatk', 'preatk', 'fixatk', 'counter', 'predef', 'fixdef', 'terrain', 'rate'];

    var i;
    for(i = 0; i<functs.length; i++){
        if(path == 'local'){
            document.getElementById(functs[i]).href = local + rep + functs[i] + '.html';
        }
        else{
            document.getElementById(functs[i]).href = rep + functs[i];
        }
    }
};
