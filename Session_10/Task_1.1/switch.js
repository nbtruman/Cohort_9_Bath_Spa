const switchOff = document.getElementById("turnOff");
const switchOn = document.getElementById("turnOn");
const bulb = document.getElementById("bulb");
const on = "./pic_bulbon.gif"
const off = "./pic_bulboff.gif";

switchOn.onclick = function() {
    bulb.src = on;
}

switchOff.onclick = function() {
    bulb.src = off;
}
