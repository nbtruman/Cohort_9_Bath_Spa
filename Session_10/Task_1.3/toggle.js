const toggle = document.getElementById("toggle");
const bulb = document.getElementById("bulb");
const on = "./pic_bulbon.gif"
const off = "./pic_bulboff.gif";
let counter = 0

toggle.onclick = function() {
    counter += 1;
    console.log(counter)
    if(Number.isInteger(counter/2)){
        bulb.src = off;
        toggle.src = "./light_switch_off.png";
    }else{
        bulb.src = on;
        toggle.src= "./light_switch_on.png";
    }
}