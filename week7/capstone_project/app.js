const form = document.getElementById("to-do-form");
const formButton = document.getElementById("submit-button");
const todoDiv = document.getElementById("output-box");

formButton.addEventListener("click", e => {
    e.preventDefault();
    let todo = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let todoBox = document.createElement("div");
    let titleBox = document.createElement("div");
        titleBox.classList.add("to-do-box");
        let todoItem = document.createElement("span");
            todoItem.classList.add("to-do-title");
        let plusIcon = document.createElement("i");
            plusIcon.classList.add("fas")
            plusIcon.classList.add("fa-plus")
            plusIcon.classList.add("open-context");
        let deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fas")
            deleteIcon.classList.add("fa-trash")
            deleteIcon.classList.add("delete-to-do");
    let contextBox = document.createElement("div");
        contextBox.classList.add("context-box");
        let todoContext = document.createElement("p");
            todoContext.classList.add("to-do-context")
    todoDiv.appendChild(todoBox);
        todoBox.appendChild(titleBox);
            titleBox.appendChild(todoItem);
            titleBox.appendChild(plusIcon);
            titleBox.appendChild(deleteIcon);
        todoBox.appendChild(contextBox);
            contextBox.appendChild(todoContext);
    todoItem.innerHTML = todo;
    todoContext.innerHTML = description;
    todoItem.addEventListener("click", () => {
        if (todoItem.style.textDecoration == "line-through") {
            todoItem.style.textDecoration = "none";
        } else {
            todoItem.style.textDecoration = "line-through";
        }
    })
    plusIcon.addEventListener("click", () => {
        if (contextBox.style.display == "none") {
            contextBox.style.display = "flex";
            plusIcon.style.color = "lightgray";
        } else {
            contextBox.style.display = "none";
            plusIcon.style.color = "white";
        } 
    })
    deleteIcon.addEventListener("click", () => todoBox.remove());
    form.reset();
});