function Resize(tag){
    a = document.getElementById(tag).style;
    var current_size = a.width;
    console.log(current_size);
    if (current_size == "90vw"){
        a.width = "fit-content";
        a.zIndex = "0";
    } else {
        a.width = "90vw"
        a.zIndex = "2";
        a.display = "flex";
        a.justifyContent = "centre";

    }
}