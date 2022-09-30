let toDoChores = document.getElementById("chores-list");

function addChores(pressEnter) {
  if (pressEnter.key !== "Enter") {
    return;
  }
  let choreInput = document.getElementById("chore-input");

  if (choreInput.value !== "") {
    toDoChores.innerHTML += `<li>${choreInput.value}</li>`;
    choreInput.value = "";
  } else {
    document.getElementById("chore-input").placeholder =
      "Insert a chore to add";
  }
}

function boldText() {
  toDoChores.classList.toggle("bold");
}

function redText() {
  toDoChores.classList.toggle("redtext");
}
