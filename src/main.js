// Criar um Sistema de Controle de Tarefas (To-Do List), podendo ser:
// um projeto em HTML/CSS/JS, Python, ou até um projeto apenas textual/documentado.
// O foco não é a complexidade do código, mas a forma como o projeto é
//   organizado, versionado e gerenciado.

let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    console.log("Tarefa adicionada:", taskInput);
    if (taskInput == null || taskInput == "") {
        alert("Por favor, insira uma tarefa válida.");
        return;
    }
    tasks.push(taskInput);
    console.log("Tarefas atuais:", tasks)

    showTasks();
}

function showTasks() {
    let tasksList = document.getElementById("tasks-list");

    tasksList.innerHTML = tasks.map((task, index) => `<li id='${index}'>${task}</li>`).join("");

}