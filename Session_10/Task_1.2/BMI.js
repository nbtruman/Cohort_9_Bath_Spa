const submitButton = document.getElementById("submit")



submitButton.onclick = function() {
    const userHeight = document.getElementById("height").value;
    console.log(userHeight);
    const userWeight = document.getElementById("weight").value;
    console.log(userWeight);
    const bmi = function(w, h) {
        let heightSquare = h * h;
        return w / heightSquare;
    }
    document.getElementById("output").innerHTML = bmi(userWeight, userHeight);
};

