const input = document.querySelector("#input");
const form = document.querySelector(".js-create");
const list = document.querySelector("#list");
const buttonAscText = document.querySelector(".js-ascending-text");
const buttonDescText = document.querySelector(".js-descending-text");
const buttonAscDate = document.querySelector(".js-ascending--date");
const buttonDescDate = document.querySelector(".js-descending-date");

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
      const toText = elem.querySelector(".task");
      const toCheckbox = elem.querySelector(".done-checkbox");

      if (toText.classList.contains("cross-out")) {
        toCheckbox.setAttribute("checked", true);
      }

      const toEl = elem.innerHTML;
      const fromEl = document.querySelector(
        `#${event.dataTransfer.getData("id")}`
      );

      const fromText = fromEl.querySelector(".task");
      const fromCheckbox = fromEl.querySelector(".done-checkbox");

      if (fromText.classList.contains("cross-out")) {
        fromCheckbox.setAttribute("checked", true);
      }

      elem.innerHTML = fromEl.innerHTML;
      fromEl.innerHTML = toEl;
    };
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const value = Object.fromEntries(formData)["todo"];
  if (value) {
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
    paragraph.textContent = value;
    dateTime.textContent = "Date: " + date.toLocaleString();

    li.appendChild(dateTime);
    li.appendChild(checkboxInput);
    li.appendChild(paragraph);
    li.appendChild(buttonDelete);

    const lists = document.getElementsByTagName("li");

    addDragFunctions(lists);

    this.reset();
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
  const parent = e.target.parentElement;

  if (e.target && e.target.classList.value === "task") {
    const task = parent.querySelector(".task");

    const text = task.textContent;
    task.textContent = "";

    const edit = document.createElement("textarea");
    edit.setAttribute("rows", "2");
    edit.classList.add("edit-textarea");
    edit.value = text;
    task.appendChild(edit);

    edit.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        if (!this.value) {
          parent.parentNode.removeChild(parent);
        }
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

const addActiveFilterBtn = (selector) => {
  const allButton = document.querySelectorAll("button");
  allButton.forEach((el) => el.classList.remove("active"));
  selector.classList.add("active");
};

buttonAscText.addEventListener("click", () => {
  addActiveFilterBtn(buttonAscText);
  onFilter(".task", "asc");
});

buttonDescText.addEventListener("click", () => {
  addActiveFilterBtn(buttonDescText);
  onFilter(".task", "desc");
});

buttonAscDate.addEventListener("click", () => {
  addActiveFilterBtn(buttonAscDate);
  onFilter(".date-time", "asc");
});

buttonDescDate.addEventListener("click", function () {
  addActiveFilterBtn(buttonDescDate);
  onFilter(".date-time", "desc");
});
