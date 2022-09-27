const calcButton = document.getElementById("calculate")
const output = document.getElementById("output")

calcButton.onclick = function () {
    const inputOne = parseInt(document.getElementById("inputOne").value);
    console.log(inputOne)
    const inputTwo = parseInt(document.getElementById("inputTwo").value);
    console.log(inputTwo)
    const operator = document.getElementById("operator").value;
    console.log(operator)
    const operation = function(a, b) {
        switch(operator) {
            case "+":
                return a + b;
                break;
            case "-":
                return a - b;
                break;
            case "%":
                return a / b;
                break;
            case "x":
                return a * b;
                break;
        }
         
    }
    output.innerHTML = operation(inputOne, inputTwo)
}