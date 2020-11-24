// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

const button = document.querySelector("button");

function submitButton(e) {
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    e.preventDefault();
    alert(`Name: ${name}Age: ${age}`);
}

button.addEventListener("submit", submitButton);