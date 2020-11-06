for ( i = 0; i < 5; i++ ) {
    var newH2 = document.createElement("h2");
    newH2.textContent = "Week 3!";
    newH2.classList.add("week3-header");
    document.body.appendChild(newH2);
}

var w3Header = document.getElementsByClassName("week3-header");

for ( i = 0; i < w3Header.length; i++ ) {
    w3Header[i].style.fontSize = "20px";
    w3Header[i].style.fontWeight = "lighter";
    w3Header[i].style.fontFamily = "sans-serif";
    w3Header[i].style.color = "cornflowerblue";
}

for ( i = 0; i < w3Header.length; i++ ) {
    w3Header[i].classList.add("border");
}