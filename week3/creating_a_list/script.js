//1 Link JS to HTML

//2
var h1 = document.createElement("h1");
h1.textContent = "Hello World";
document.body.appendChild(h1);

//3
for ( i = 0; i < 10; i++ ) {
    var newH1 = document.createElement("h1");
    newH1.textContent = "Hello World";
    newH1.classList.add("header");
    document.body.appendChild(newH1);
}

//4
var headerClass = document.getElementsByClassName("header");
for ( i = 0; i < headerClass.length; i++ ) {
    headerClass[i].style.color = "blue";
}

//5
var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

//6
for ( i = 0; i < names.length; i++ ) {
    var newLi = document.createElement("li");
    newLi.textContent = names[i];
    document.body.appendChild(newLi);
}