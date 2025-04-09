const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Digite algo!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Marcar como concluído ao clicar
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Botão de remover
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.style.marginLeft = "10px";
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});

