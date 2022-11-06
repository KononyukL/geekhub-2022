const input = document.querySelector("#input");
const list = document.querySelector("#list");
const buttonAscText = document.querySelector(".asc-text");
const buttonDescText = document.querySelector(".desc-text");
const buttonAscDate = document.querySelector(".asc-date");
const buttonDescDate = document.querySelector(".desc-date");

const addDragFunctions = (list) => {
  for (const elem of list) {
    elem.setAttribute("draggable", "true");

    elem.ondragstart = (event) => {
      event.dataTransfer.setData("id", event.target.id);
    };

    elem.ondragover = (event) => {
      event.preventDefault();
    };

    elem.ondrop = (event) => {
      let toEl = elem.innerHTML;
      let fromEl = document.querySelector(
        `#${event.dataTransfer.getData("id")}`
      );

      elem.innerHTML = fromEl.innerHTML;
      fromEl.innerHTML = toEl;
    };
  }
};

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    const li = document.createElement("li");
    const checkboxInput = document.createElement("input");
    const paragraph = document.createElement("p");
    const dateTime = document.createElement("p");
    const buttonDelete = document.createElement("a");
    const date = new Date();
    li.setAttribute("id", `id${date.getMilliseconds()}`);

    list.appendChild(li);
    paragraph.classList.add("task");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.classList.add("done-checkbox");
    buttonDelete.classList.add("button-delete");
    dateTime.classList.add("date-time");
    paragraph.textContent = this.value;
    dateTime.textContent = "Date: " + date.toLocaleString();

    li.appendChild(dateTime);
    li.appendChild(checkboxInput);
    li.appendChild(paragraph);
    li.appendChild(buttonDelete);
    this.value = "";

    const lists = document.getElementsByTagName("li");

    addDragFunctions(lists);
  }
});

list.addEventListener("click", (e) => {
  const parent = e.target.parentElement;

  if (e.target && e.target.classList.value === "button-delete") {
    parent.parentNode.removeChild(parent);
  }
});

list.addEventListener("change", (e) => {
  if (e.target && e.target.classList.value === "done-checkbox") {
    const task = e.target.parentElement.querySelector(".task");

    if (e.target.checked) {
      task.classList.add("cross-out");
    } else {
      task.classList.remove("cross-out");
    }
  }
});

list.addEventListener("dblclick", (e) => {
  if (e.target && e.target.classList.value === "task") {
    const task = e.target.parentElement.querySelector(".task");

    const text = task.textContent;
    task.textContent = "";

    const edit = document.createElement("textarea");
    edit.setAttribute("rows", "2");
    edit.classList.add("edit-textarea");
    edit.value = text;
    task.appendChild(edit);

    edit.addEventListener("keypress", function (event) {
      if (event.key == "Enter") {
        task.textContent = this.value;
      }
    });
  }
});

const onFilter = (selector, sortType) => {
  [...list.children]
    .sort(function (a, b) {
      const itemA = a.querySelector(selector);
      const itemB = b.querySelector(selector);

      if (sortType === "asc") {
        return itemA.textContent.localeCompare(itemB.textContent);
      }

      return itemB.textContent.localeCompare(itemA.textContent);
    })
    .forEach((child) => {
      list.appendChild(child);
    });
};

buttonAscText.addEventListener("click", () => {
  onFilter(".task", "asc");
});

buttonDescText.addEventListener("click", () => {
  onFilter(".task", "desc");
});

buttonAscDate.addEventListener("click", () => {
  onFilter(".date-time", "asc");
});

buttonDescDate.addEventListener("click", function () {
  onFilter(".date-time", "desc");
});
