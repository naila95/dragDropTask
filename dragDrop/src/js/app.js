let btn = document.querySelector(".btn");
let input = document.querySelector("#input");
let lists = document.querySelector(".lists");
let items = document.querySelectorAll(".list-item");
let parts = document.querySelectorAll(".part");
let selected;

btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("You must write something!");
  } else {
    let newTask = document.createElement("div");
    newTask.classList.add("list-item");
    newTask.setAttribute("id", "item");
    newTask.setAttribute("draggable", "true");
    newTask.innerHTML = `<div class="list-content">
    <h5 class="task">${input.value}</h5>
  </div>
  <div class="list-icon">
  <i class="fa-regular fa-trash-can"></i>
</div>`;
    lists.append(newTask);
    input.value = "";

    newTask.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text", e.target.id);
      setTimeout(() => {
        e.target.classList.add("hide");
      }, 0);
    });
  }
});

lists.addEventListener("click", function (e) {
  if (e.target.tagName === "H5") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
  }
});

parts.forEach((element) => {
  element.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  element.addEventListener("drop", function (e) {
    let data = e.dataTransfer.getData("text");
    const draggable = document.getElementById(data);
    e.target.appendChild(draggable);
    draggable.classList.remove("hide");
    data = null;
  });
});
