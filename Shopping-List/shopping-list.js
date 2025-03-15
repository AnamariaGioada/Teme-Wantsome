const addForm = document.getElementById("shoppingList");
const txt = document.getElementById("addedText");
const submitButton = document.getElementById("submitButton");
let ul = document.getElementById("ul");

addForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (txt.value === "") {
    alert("Please add item");
    return;
  }

  let list = document.createElement("li");

  const item = document.createElement("span");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", function (e) {
    if (checkbox.checked) {
      item.style.textDecoration = "line-through";
      list.style.backgroundColor = "lightyellow";
    } else if (!checkbox.checked) {
      item.style.textDecoration = "none";
      list.style.backgroundColor = "unset";
    }
  });

  const spanText = document.createElement("span");
  spanText.innerText = txt.value;

  item.appendChild(checkbox);

  item.appendChild(spanText);
  list.appendChild(item);

  let deleteButton = document.createElement("button");
  deleteButton.className = "fa fa-trash delete";
  deleteButton.type = "button";

  deleteButton.addEventListener("click", function (e) {
    ul.removeChild(list);
    submitButton.disabled = false;
    txt.disabled = false;
  });
  list.appendChild(deleteButton);

  ul.appendChild(list);

  txt.value = "";
  txt.focus();
  if (ul.children.length > 9) {
    submitButton.disabled = true;
    txt.disabled = true;
    return;
  }
});
