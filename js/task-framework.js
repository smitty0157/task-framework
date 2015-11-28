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

function addListItem () {
	var liOrderNumber = 0;
	var newTaskTitle = document.getElementById("add-task");
	var ul = document.getElementById("task-list");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(newItem));
	li.setAttribute("id",liOrderNumber);
	liOrderNumber++;
	ul.appendChild(li);
	alert(li.id);
}

function testFunction (e) {
	var key = e.which || e.keycode || e.key;
	if ( key == 13) {
		window.alert("Enter key pressed");
	}
}

function loadTaskFramework() {

	// add the footer and confirm JScript is running
    var feet = document.getElementsByTagName('footer');
    feet[0].innerHTML = "Let's Do This";

    // register an event handler for the new task input element
	var objNewTask = document.getElementById("in-task-name");
	objNewTask.addEventListener('keydown', testFunction, false);
}
onload = loadTaskFramework;
