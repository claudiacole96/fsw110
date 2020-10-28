var newH1 = document.createElement("h1");
newH1.textContent = "Welcome to my JS site";
document.body.appendChild(newH1);

var newP = document.createElement("p");
newP.textContent = "All of this was created with Javascript";
document.body.appendChild(newP);

var ol = document.createElement("ol");
document.body.appendChild(ol);

var ul1 = document.createElement("li");
ul1.textContent = "Text 1";
ol.appendChild(ul1);
var ul2 = document.createElement("li");
ul2.textContent = "Text 2";
ol.appendChild(ul2);
var ul3 = document.createElement("li");
ul3.textContent = "Text 3";
ol.appendChild(ul3);