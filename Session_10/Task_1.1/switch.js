const switchOff = document.getElementById("turnOff");
const switchOn = document.getElementById("turnOn");
const lightSwtich = document.getElementById("toggle");

switchOn.onclick = function() {
    document.getElementById("bulb").src = "./pic_bulbon.gif";
}

switchOff.onclick = function() {
    document.getElementById("bulb").src = "./pic_bulboff.gif";
}