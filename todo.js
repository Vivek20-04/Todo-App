document.addEventListener("DOMContentLoaded", () => {

    let newTimeDate = new Date();

    let hours = newTimeDate.getHours();
    let minute = newTimeDate.getMinutes()
    let date = newTimeDate.getDate();
    let month = newTimeDate.getMonth();
    let day = newTimeDate.getDay();

    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("Time").textContent = `${hours} : ${minute}`;
    document.getElementById("date").textContent = `${dayList[day]}, ${monthList[month]} ${date}`;
});


//display input field
function displayInput() {

    let inputField = document.getElementById("inputText")
    let addButton = document.getElementById("addbutton")
    inputField.style.visibility = "visible"
    addButton.style.visibility = "visible"

}


// here i am adding task to the todo list
function addTask() {
    let inputText = document.getElementById("inputText");
    if (inputText.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    let taskId = `task-${Date.now()}`;
    let createdDiv = document.createElement("div");
    createdDiv.setAttribute("id", taskId);
    createdDiv.innerHTML = `
            <div class="innerDiv">
                <input type="radio" id="radioButton" onclick="toggleLineThrough('${taskId}')">
                <span class="spanClass">${inputText.value}</span>
                <button id="editTask" onclick="displayEditInputTask('${taskId}')">
                <i class='bx bx-edit-alt'></i>
                </button>
                <button id="remove" onclick="removeTask('${taskId}')">
        <i class='bx bx-minus-circle' style="color:red"></i>
        </button> 
            </div>
            `;
    document.getElementById("todoDiv").appendChild(createdDiv);
    inputText.value = "";
}


//applying line thorugh text decoration to the complted task or checked one 
function toggleLineThrough(taskId) {
    let taskContainer = document.getElementById(taskId);
    let taskText = taskContainer.querySelector(".spanClass");
    let radioButton = taskContainer.querySelector("#radioButton");

    if (radioButton.checked) {
        taskText.classList.add("line-through");
    } else {
        taskText.classList.remove("line-through");
    }
}


//Removing task which are completed or not neccessary to do 
function removeTask(taskId) {
    let taskContainer = document.getElementById(taskId);
    taskContainer.remove();
}

//Displaying Editing input field 
function displayEditInputTask(taskId) {
    let inputText = document.getElementById("editText");
    let editButton = document.getElementById("editbutton");
    inputText.style.visibility = "visible";
    editButton.style.visibility = "visible";

   

    section3.setAttribute("data-editing-id", taskId);
}


//Edting the task
function editedTask() {
    let section3 = document.getElementById('section3');
    let taskId = section3.getAttribute("data-editing-id");
    let inputText = document.getElementById("editText");

    if (inputText.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let container = document.getElementById(taskId);
    let taskText = container.querySelector(".spanClass");
    taskText.textContent = inputText.value;

    inputText.style.visibility = "hidden";
    document.getElementById("editbutton").style.visibility = "hidden";
    section3.removeAttribute("data-editing-id");
}

