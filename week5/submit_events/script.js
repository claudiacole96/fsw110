const formButton = document.getElementById("form-button");

function inputAlertWindow(name, age, favColor) {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    favColor = document.getElementById("fav-color").value;
    alert(`name: ${name} age: ${age} favorite color: ${favColor}`);
}
formButton.addEventListener("click", inputAlertWindow);