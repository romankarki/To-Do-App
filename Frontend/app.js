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
    newTask = new Task(task, note);
    ui = new TaskUI();
    ui.addToList(newTask);
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
