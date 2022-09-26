// stores elements as variables
const toggle = document.getElementById("toggle");
const bulb = document.getElementById("bulb");
const bulbOn = "./pic_bulbon.gif"
const bulbOff = "./pic_bulboff.gif";
const switchOff = "./light_switch_off.png";
const switchOn = "./light_switch_on.png";

let counter = 0
// very ugly way to make it switch based on a binary choice. i couldn't make the ternary operator work.
toggle.onclick = function() {
    counter += 1;
    console.log(counter)
    if(Number.isInteger(counter/2)){
        bulb.src = bulbOff;
        toggle.src = switchOff;
    }else{
        bulb.src = bulbOn;
        toggle.src = switchOn;
    }
}
