// refresh when clicked
window.addEventListener("click", refresh);
function refresh(){
    display_offense(offense);
    display_defense(defense);
    display_counter(offense, defense);
};

// display version
function display_version(){
    var ver = "0.1.3";
    document.getElementById("version").innerHTML = "version " + ver;
};

