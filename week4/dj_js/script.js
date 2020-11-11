var box = document.getElementById("box");
box.style.width = "500px";
box.style.height = "500px";
box.style.backgroundColor = "black";

//  Blue when the mouse hovers over the square

function hoverSquareBlue() {
    box.style.backgroundColor = "blue";
}
box.addEventListener("mouseover", hoverSquareBlue);


//  Red when the mouse button is held down over the square

function mousedownSquareRed() {
    box.style.backgroundColor = "red";
}
box.addEventListener("mousedown", mousedownSquareRed);


//  Yellow when the mouse button is let go over the square

function mouseupSquareYellow() {
    box.style.backgroundColor = "yellow";
}
box.addEventListener("mouseup", mouseupSquareYellow);


//  Green when the mouse is double clicked in the square

function dblclickSquareGreen() {
    box.style.backgroundColor = "green";
}
box.addEventListener("dblclick", dblclickSquareGreen);


//  Orange when the mouse scroll is used somewhere in the window 
//  (not just over the square).

function scrollWindowSquareOrange() {
    box.style.backgroundColor = "orange";
}
document.body.addEventListener("wheel", scrollWindowSquareOrange);


//  You should also be able to press the first letter of the colors 
//  (typing "r" on the keyboard for "red", for example) and have the
//  box change to that color

function keydownSquareColor(event) {
    if (event.which === 66) {
        box.style.backgroundColor = "blue";
    } else if (event.which === 82) {
        box.style.backgroundColor = "red";
    } else if (event.which === 89) {
        box.style.backgroundColor = "yellow";
    } else if (event.which === 71) {
        box.style.backgroundColor = "green";
    } else if (event.which === 79) {
        box.style.backgroundColor = "orange";
    }
}
document.body.addEventListener("keydown", keydownSquareColor);