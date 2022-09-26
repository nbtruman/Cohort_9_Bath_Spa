// identifies the submit button
const submitButton = document.getElementById("submit")


//establishes the click event for the button
submitButton.onclick = function() {
    // stores user height input
    const userHeight = document.getElementById("height").value;
    // stores user weight input
    const userWeight = document.getElementById("weight").value;
    // standard BMI calculation
    const bmi = function(w, h) {
        let heightSquare = h * h;
        return w / heightSquare;
    }
    // changes <p> element to display BMI based on user inputs
    document.getElementById("output").innerHTML = bmi(userWeight, userHeight);
};