// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let message =
        document.getElementById("message").value;

    let error =
        document.getElementById("error");

    if(name === "" ||
       email === "" ||
       message === ""){

        error.innerText =
            "Please fill all fields";
        return;
    }

    if(!email.includes("@")){
        error.innerText =
            "Enter valid email";
        return;
    }

    error.innerText =
        "Form submitted successfully!";
});


// To Do List

function addTask(){

    let taskInput =
        document.getElementById("taskInput");

    let task =
        taskInput.value;

    if(task === ""){
        return;
    }

    let li =
        document.createElement("li");

    li.innerHTML =
        `${task}
        <button onclick="this.parentElement.remove()">
        Delete
        </button>`;

    document.getElementById("taskList")
        .appendChild(li);

    taskInput.value = "";
}