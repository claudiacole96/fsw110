//  You will have one section (<div>) for each math operation (so 3 sections) total
//  Each section has two inputs to take the first and second numbers
//  Each section will have a button to perform the operation
//  You will inject the result into the HTML (not an alert)
//  Your website will have 3 colors
//  Your website will have proper padding/spacing to lay things out nicely.

var divs = document.querySelectorAll("div");
for (i = 0; i < divs.length; i++) {
    divs[i].style.padding = "10px";
    divs[i].style.paddingBottom = "15px";
    divs[i].style.display = "inline-block";
}
divs[0].style.backgroundColor = "green";
divs[1].style.backgroundColor = "blue";
divs[2].style.backgroundColor = "red";

var spans = document.getElementsByTagName("span");
for (i = 0; i < spans.length; i++) {
    spans[i].style.padding = "2px";
    spans[i].style.fontWeight = "bold";
    spans[i].style.backgroundColor = "white";
}

var inputs = document.getElementsByTagName("input");
for (i = 0; i < inputs.length; i++) {
    inputs[i].style.margin = "5px";
}

var buttons = document.getElementsByTagName("button");
for (i = 0; i < buttons.length; i++) {
    buttons[i].style.padding = "5px";
}

var addButton = document.getElementById("add");
addButton.addEventListener("click", addNumbers);

var addResult = document.createElement("span");
addResult.style.color = "white";
addResult.style.marginLeft = "15px";
divs[0].appendChild(addResult);

function addNumbers(a, b) {
    a = parseInt(document.getElementById("num1Add").value);
    b = parseInt(document.getElementById("num2Add").value);
    addResult.innerHTML = a + b;
}


var subButton = document.getElementById("subtract");
subButton.addEventListener("click", subNumbers);

var subResult = document.createElement("span");
subResult.style.color = "white";
subResult.style.marginLeft = "15px";
divs[1].appendChild(subResult);

function subNumbers(a, b) {
    a = parseInt(document.getElementById("num1Subtract").value);
    b = parseInt(document.getElementById("num2Subtract").value);
    subResult.innerHTML = a - b;
}


var multButton = document.getElementById("multiply");
multButton.addEventListener("click", multNumbers);

var multResult = document.createElement("span");
multResult.style.color = "white";
multResult.style.marginLeft = "15px";
divs[2].appendChild(multResult);

function multNumbers(a, b) {
    a = parseInt(document.getElementById("num1Multiply").value);
    b = parseInt(document.getElementById("num2Multiply").value);
    multResult.innerHTML = a * b;
}