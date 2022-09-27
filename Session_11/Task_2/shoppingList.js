const list = [];
const shoppingList = document.getElementById("shoppingList")
const input = document.getElementById("item");
const add = document.getElementById("add");
const clear = document.getElementById("clear");

add.onclick = function addItem() {
    const newItem = input.value
    if(list.includes(newItem)) {
        alert("That item has already been added");        
        input.value = "";
    }else if(newItem == ""){
        alert("Please type an item to add");        
        input.value = "";
    }else{        
        list.push(newItem);        
        input.value = "";
        console.log(list);
        
        const newLine = document.createElement("li");
        newLine.innerHTML = newItem;
        shoppingList.appendChild(newLine);
    }
    
}

clear.onclick = function clearList() {
    shoppingList.innerHTML = ""
    list.forEach(() => {
        list.pop();
        console.log(list)
    })
}