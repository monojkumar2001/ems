function toggleCheckbox(source) {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== source) {
      checkboxes[i].checked = source.checked;
    }
  }
}

// textarea counter -1

$("textarea").keyup(function () {
  var characterCount = $(this).val().length,
    current = $("#current"),
    maximum = $("#maximum"),
    theCount = $("#the-count");

  current.text(characterCount);

  /*This isn't entirely necessary, just playin around*/
  if (characterCount < 70) {
    current.css("color", "#666");
  }
  if (characterCount > 70 && characterCount < 90) {
    current.css("color", "#6d5555");
  }
  if (characterCount > 90 && characterCount < 100) {
    current.css("color", "#793535");
  }
  if (characterCount > 100 && characterCount < 120) {
    current.css("color", "#841c1c");
  }
  if (characterCount > 120 && characterCount < 139) {
    current.css("color", "#8f0001");
  }

  if (characterCount >= 140) {
    maximum.css("color", "#8f0001");
    current.css("color", "#8f0001");
    theCount.css("font-weight", "bold");
  } else {
    maximum.css("color", "#666");
    theCount.css("font-weight", "normal");
  }
});

// textarea counter 2

$("textarea").keyup(function () {
  var characterCount = $(this).val().length,
    current = $("#currents"),
    maximum = $("#maximums"),
    theCounts = $("#the-count-2");

  current.text(characterCount);
  /*This isn't entirely necessary, just playin around*/
  if (characterCount < 70) {
    current.css("color", "#666");
  }
  if (characterCount > 70 && characterCount < 90) {
    current.css("color", "#6d5555");
  }
  if (characterCount > 90 && characterCount < 100) {
    current.css("color", "#793535");
  }
  if (characterCount > 100 && characterCount < 120) {
    current.css("color", "#841c1c");
  }
  if (characterCount > 120 && characterCount < 139) {
    current.css("color", "#8f0001");
  }

  if (characterCount >= 140) {
    maximum.css("color", "#8f0001");
    current.css("color", "#8f0001");
    theCounts.css("font-weight", "bold");
  } else {
    maximum.css("color", "#666");
    theCounts.css("font-weight", "normal");
  }
});

// textarea counter 3

$("textarea").keyup(function () {
  var characterCount = $(this).val().length,
    current = $("#current3"),
    maximum = $("#maximum3"),
    theCounts = $("#the-count-3");

  current.text(characterCount);
  /*This isn't entirely necessary, just playin around*/
  if (characterCount < 70) {
    current.css("color", "#666");
  }
  if (characterCount > 70 && characterCount < 90) {
    current.css("color", "#6d5555");
  }
  if (characterCount > 90 && characterCount < 100) {
    current.css("color", "#793535");
  }
  if (characterCount > 100 && characterCount < 120) {
    current.css("color", "#841c1c");
  }
  if (characterCount > 120 && characterCount < 139) {
    current.css("color", "#8f0001");
  }

  if (characterCount >= 140) {
    maximum.css("color", "#8f0001");
    current.css("color", "#8f0001");
    theCounts.css("font-weight", "bold");
  } else {
    maximum.css("color", "#666");
    theCounts.css("font-weight", "normal");
  }
});
// textarea counter 4 message Chat box

$("textarea").keyup(function () {
  var characterCount = $(this).val().length,
    current = $("#current3"),
    maximum = $("#maximum3"),
    theCounts = $("#the-count-4");

  current.text(characterCount);
  /*This isn't entirely necessary, just playin around*/
  if (characterCount < 70) {
    current.css("color", "#666");
  }
  if (characterCount > 500 && characterCount < 600) {
    current.css("color", "#6d5555");
  }
  if (characterCount > 600 && characterCount < 700) {
    current.css("color", "#793535");
  }
  if (characterCount > 800 && characterCount < 820) {
    current.css("color", "#841c1c");
  }
  // if (characterCount > 800 && characterCount < 1000) {
  //   current.css('color', '#8f0001');
  // }

  if (characterCount >= 500) {
    maximum.css("color", "#8f0001");
    current.css("color", "#8f0001");
    theCounts.css("font-weight", "bold");
  } else {
    maximum.css("color", "#666");
    theCounts.css("font-weight", "normal");
  }
});

//  Add Private Note

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addList() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();

//  New input field Add
function toggleInputFields() {
  const selectElement = document.querySelector(".input-groups select");
  const multiple = document.getElementById("multiple");

  if (selectElement.value === "two") {
    multiple.style.display = "block";
  } else {
    multiple.style.display = "none";
  }
}
function toggleInputField2() {
  const selectElement = document.querySelector(".input-groups select");
  const multiple = document.getElementById("attachment");

  if (selectElement.value === "three") {
    attachment.style.display = "block";
  } else {
    multiple.style.display = "none";
  }
}

// ================== Multiple Input added ===========
function addFormField() {
  var container = document.getElementById("formFieldsContainer");

  // Create a new input element
  var input = document.createElement("input");
  input.type = "text";
  input.name = "dynamicField";
  input.setAttribute("class", "input-fuild-item");
  input.setAttribute("id", "input-fuild-added");
  input.setAttribute("placeholder", "Add Option");

  // Add the new input element to the container
  container.appendChild(input);
}

function removeFormField() {
  var container = document.getElementById("formFieldsContainer");
  var inputs = container.getElementsByTagName("input");

  // Check if there are any input fields to remove
  if (inputs.length > 2) {
    // Remove the last input field
    container.removeChild(inputs[inputs.length - 1]);
  }
}

//  Add multiple add option 1

const inputBox1 = document.getElementById("input-box1");
const listNewQuestion = document.getElementById("list-new-question");

function addList2() {
  if (inputBox1.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox1.value;
    listNewQuestion.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
  }
  inputBox1.value = "";
  saveDatas();
}

listNewQuestion.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDatas();
    }
  },
  false
);

function saveDatas() {
  localStorage.setItem("data", listNewQuestion.innerHTML);
}

function showLists() {
  listNewQuestion.innerHTML = localStorage.getItem("data");
}
showLists();

//  Add multiple add option 2
const inputBox2 = document.getElementById("input-box2");
const listNewQuestion2 = document.getElementById("list-new-question2");

function addList2() {
  if (inputBox2.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox2.value;
    listNewQuestion2.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
  }
  inputBox2.value = "";
  saveData2();
}

listNewQuestion2.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData2();
    }
  },
  false
);

function saveData2() {
  localStorage.setItem("data", listNewQuestion2.innerHTML);
}

function showList2() {
  listNewQuestion2.innerHTML = localStorage.getItem("data");
}
showList2();

// =========== Count Down Date ==============

const countDownDate = new Date("oct 14, 2023 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML= days
  document.getElementById('hours').innerHTML= hours
  document.getElementById('minutes').innerHTML= minutes
  document.getElementById('seconds').innerHTML= seconds
}, 1000);
