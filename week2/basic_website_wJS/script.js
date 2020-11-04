var nav = document.createElement("nav");
document.body.appendChild(nav);

var navLink = document.createElement("a");
var navLink2 = document.createElement("a");
var navLink3 = document.createElement("a");
navLink.href = "./index.html";
navLink.textContent = " Home ";
navLink.style.padding = "5px";
navLink2.textContent = " About ";
navLink2.style.padding = "5px";
navLink3.textContent = " Contact ";
navLink3.style.padding = "5px";
nav.appendChild(navLink);
nav.appendChild(navLink2);
nav.appendChild(navLink3);

var main = document.createElement("main");
document.body.appendChild(main);
var h1 = document.createElement("h1");
h1.textContent = "This is my first JS website";
main.appendChild(h1);
var p = document.createElement("p");
p.textContent = "It wasn't as bad as I expected!!!";
main.appendChild(p);
var ul = document.createElement("ul");
main.appendChild(ul);
var li = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
li.textContent = "First the HTML";
li2.textContent = "Then the Javascript";
li3.textContent = "Finally put it all together!!";
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);

var footer = document.createElement("footer");
footer.textContent = "2020 Web Dev Student"
document.body.appendChild(footer);