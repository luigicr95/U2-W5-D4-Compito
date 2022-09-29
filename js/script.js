let toDoChores = document.getElementById("chores-list");
let choreInput;
function addChores(pressEnter) {
  if (pressEnter.key !== "Enter") {
    return;
  }
  choreInput = document.getElementById("chore-input");

  if (choreInput.value !== "") {
    toDoChores.innerHTML += `<li>${choreInput.value}</li>`;
    choreInput.value = "";
  } else {
    document.getElementById("chore-input").placeholder =
      "Insert a chore to add";
  }
}

function boldText() {
  toDoChores.classList.toggle("boldtext");
}

function redText() {
  toDoChores.classList.toggle("redtext");
}
