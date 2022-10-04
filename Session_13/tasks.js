// task 1
const num1 = 10;
const num2 = 8;

console.log("task 1:", num1 + num2);

// task 2
function numbers(a, b) {
    console.log("task 2:", (a + b) * 5)
}

numbers(num1, num2);

// task 3
const string1 = "hello";
const string2 = "world";

console.log("task 3:", string1 + " " + string2);

// task 4
let text = "";
console.log("task 4:", text);
text += "hello";
console.log(text);
text += "world";
console.log(text)

// task 5
function compare (a, b) {
    if(a == b) {
        alert("It works!");
    }
}

compare(2, 1);