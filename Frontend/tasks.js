class Task {
  constructor(task, note, status = "Not Done") {
    // this.id = id;
    this.task = task;
    this.note = note;
    this.status = status;
  }
}

class TaskUI {
  addToList(t) {
    const list = document.querySelector("#list-items");
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      ${t.task}
      <a class="pencil">
        <p class="btn btn-danger">Not done</p>
        &nbsp
        <i class="edit-item fa fa-pencil"></i>
      </a>
      `;
    list.appendChild(li);
  }
}
