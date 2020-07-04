const d = document.querySelector("#not-logged");
if (localStorage.getItem("auth_token")) {
  d.innerHTML = "";
} else {
  d.innerHTML = "you are not logged in";
}
token = "token " + localStorage.getItem("auth_token");
class Task {
  constructor(id, title, notes, status = "Not Done", date) {
    this.id = id;
    this.title = title;
    this.notes = notes;
    this.status = status;
    this.date = date;
  }
}

class TaskUI {
  addToList(t) {
    const list = document.querySelector("#list-items");
    const li = document.createElement("li");
    li.className = "list-group-item";
    if (t.status === "Done") {
      li.innerHTML = `
        <p hidden>${t.id}</p>
          ${t.title}
          <a class="pencil">
          
            <p class="btn btn-success task-status"id="${t.id}">Done</p>
            &nbsp
            <i class="edit-item fa fa-remove fa-2x"></i>
          </a>
          `;
    } else {
      li.innerHTML = `
        <p hidden>${t.id}</p>
          ${t.title}
          <a class="pencil">
          
            <p class="btn btn-danger task-status"id="${t.id}">Not done</p>
            &nbsp
            <i class="edit-item fa fa-remove fa-2x"></i>
          </a>
          `;
    }

    list.appendChild(li);
  }
}

//fetching Tasks from the server
document.addEventListener("DOMContentLoaded", getTasks());

async function getTasks() {
  const response = await fetch("http://127.0.0.1:8000/tasks/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const resData = await response.json();
  //console.log(resData);
  resData.forEach((t) => {
    tasks = new Task(t.id, t.title, t.notes, t.status, t.date);
    ui = new TaskUI();
    ui.addToList(t);
  });
}

//fetching task by id
async function getEachTask(id) {
  const response = await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const resData = await response.json();
  // console.log(resData);
  return resData;
}

//add a new task to the server
async function createTask(data) {
  const response = await fetch("http://127.0.0.1:8000/tasks/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  //console.log(resData);
  ui = new TaskUI();
  ui.addToList(newTask);
}

//change Status of a given task
async function statusUpdate(data) {
  const res = await fetch(`http://127.0.0.1:8000/tasks/${data.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  console.log(resData);
}
