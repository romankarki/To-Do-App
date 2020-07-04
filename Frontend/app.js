//Selection for dom manipulation
const btn = document.querySelector("#btn-submit");

btn.addEventListener("click", (e) => {
  // Selecting the input fields for adding data

  task = document.querySelector("#task").value;
  note = document.querySelector("#note").value;

  if (task === "") {
    const alert = document.querySelector("#alerts");
    alert.classList = "alert alert-danger";
    alert.innerHTML = `Can't Add an Empty Task`;
    setTimeout(() => {
      alert.classList = "";
      alert.innerHTML = "";
    }, 3000);
  } else {
    newTask = new Task(null, task, note);

    createTask(newTask);

    //alerts----accordingly
    const alert = document.querySelector("#alerts");
    alert.classList = "alert alert-success";
    alert.innerHTML = `Added Successfully To The List`;
    setTimeout(() => {
      alert.classList = "";
      alert.innerHTML = "";
    }, 3000);

    //Emptying the fields
    document.querySelector("#task").value = "";
    document.querySelector("#note").value = "";
  }

  e.preventDefault();
});

//change status of the item
window.addEventListener("click", (event) => {
  if (event.target.className === "btn btn-danger task-status") {
    event.target.className = "";
    event.target.className = "btn btn-success task-status";
    event.target.innerHTML = "Done";
    const p = event.target.id;
    const tsk = getEachTask(p);
    tsk.then((res) => {
      console.log(res[0]);
      newStatus = new Task(
        res[0].id,
        res[0].title,
        res[0].notes,
        "Done",
        res[0].date
      );
      statusUpdate(newStatus);
    });
  } else if (event.target.className === "btn btn-success task-status") {
    event.target.className = "";
    event.target.className = "btn btn-danger task-status";
    event.target.innerHTML = "Not done";
  }
});
