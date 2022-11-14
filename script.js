const btnAdd = document.getElementById("btnAdd");
const getListValue = document.getElementById("create-todo");
const addListValue = document.querySelector(".addList");

btnAdd.addEventListener("click", function () {
  const createList = getListValue.value;
  addListValue.innerHTML += `
  <div class="task">
      <span id="taskname">
          ${createList}
      </span>
      <button type="submit" id="btnDelete" class="delete">Delete</button>
  </div>
`;

  let current_tasks = document.querySelectorAll(".delete");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
});
