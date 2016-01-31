// Copyright 2015 Christopher W. Smith (theupstairs@hotmail.com)

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

    // http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

function addListItem() {
  var taskNameElem = document.getElementById("input-task-name");
  var taskName = taskNameElem.value.trim();
  var ul = document.getElementById("task-list");
  var li = document.createElement("li");

	// if there is text in the task title input element add it to the task list
  if (taskName !== "") {
    li.appendChild(document.createTextNode(taskNameElem.value));
    // li.setAttribute("id",liOrderNumber);
    ul.appendChild(li);
    // add item to local storage
    localStorage.setItem(taskName, taskName);

    // Clear the new task input
    taskNameElem.value = "";
  }
}

function keyEventNewTask(e) {
  var key = e.which || e.keycode || e.key;

  // add the new task to the list if the enter key is pressed
  if (key === 13) {
    addListItem();
  }
}

// local storage function
// function to encapsulate local storage functions and objects
// function storageTaskFramework() {
// test for local storage support
// if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
// } else {
    // Sorry! No Web Storage support..
// }
// }

function storeTask() {}

function loadTaskFramework() {
  var footer = document.getElementsByTagName("footer");
  var taskNameElem = document.getElementById("input-task-name");

  // add the footer and confirm JScript is running
  footer[0].innerHTML = "Let's Do This";

  // register an event handler for the new task input element
  taskNameElem.addEventListener("keydown", keyEventNewTask, false);

  // Clear the new task input on a page refresh
  taskNameElem.value = "";
}
onload = loadTaskFramework;
