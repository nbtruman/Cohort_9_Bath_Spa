const calcButton = document.getElementById("calculate")
const output = document.getElementById("output")

calcButton.onclick = function () {
    const inputOne = parseFloat(document.getElementById("inputOne").value);
    console.log(inputOne)
    const inputTwo = parseFloat(document.getElementById("inputTwo").value);
    console.log(inputTwo)
    const operator = document.getElementById("operator").value;
    console.log(operator)
    const n = document.getElementById("decimals").value;
    console.log(n)
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
    output.innerHTML = operation(inputOne, inputTwo).toFixed(n);
}