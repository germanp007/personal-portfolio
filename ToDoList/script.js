"use strict";

const container = document.querySelector(".container");
const boton = document.querySelector("#boton");
const tarea = document.querySelector("#texto");
let counterId = 0;
let html;
boton.addEventListener("click", () => {
  if (tarea.value === "") {
    swal({
      title: "INVALID",
      text: "You must add a Task",
      button: "OK",
      icon: "error",
    });
  } else {
    counterId++;
    html = `<p id="${counterId}">${
      tarea.value.slice(0, 1).toUpperCase() + tarea.value.slice(1)
    }<button id="del">X</button></p>`;
    container.insertAdjacentHTML("beforeend", html);
    tarea.value = "";
  }
});

container.addEventListener("click", (e) => {
  e.srcElement.nodeName === "BUTTON"
    ? deleteTask(e.srcElement.parentNode.id)
    : console.log("false");
});

let deleteTask = function (id) {
  let deleteId = document.getElementById(id);
  container.removeChild(deleteId);
};
