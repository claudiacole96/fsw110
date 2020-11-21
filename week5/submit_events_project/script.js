const h2 = document.getElementsByTagName("h2");
for (i = 0; i < h2.length; i++) {
    h2[i].style.display = "inline-block";
    h2[i].style.width = "200px";
    h2[i].style.fontSize = "20px";
    h2[i].style.margin = "5px";
}

const form = document.getElementById("my-form");
const formButton = document.getElementById("submit");

function formAlertWindow() {
    let fName = form.fName.value;
    let lName = form.lName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let destination = form.destination.value;
    let diet = [];

    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            diet.push(form.diet[i].value);
        }
    }

    alert(
        `First Name: ${fName}
        Last Name: ${lName}
        Age: ${age}
        Gender: ${gender}
        Destination: ${destination}
        Dietary Restrictions: ${diet}`
    );
}

formButton.addEventListener("click", formAlertWindow);