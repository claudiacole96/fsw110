const box = document.querySelector(".red-box");

const h2 = document.createElement("h2");
document.body.append(h2);
h2.style.textAlign = "center";

const mouseCoordinates = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    h2.innerHTML = `( ${x} , ${y} )`;
}

box.addEventListener("mousemove", mouseCoordinates);

box.addEventListener("mouseout", () => h2.innerHTML = "");