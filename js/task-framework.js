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

function taskListFramework(taskListTagIDs) {
	// Validate function arguments and set default values
	taskListTagIDs = typeof taskListTagIDs !== 'undefined' ? taskListTagIDs : {};
	taskListTagIDs.newTaskName = typeof taskListTagIDs.newTaskName !== 'undefined' ? taskListTagIDs.newTaskName : "new-task-name";
	taskListTagIDs.taskList = typeof taskListTagIDs.taskList !== 'undefined' ? taskListTagIDs.taskList : "task-list";
	
	var newTaskNameElement = document.getElementById(taskListTagIDs.newTaskName);
	var taskListElement = document.getElementById(taskListTagIDs.taskList);
	
	newTaskNameElement.addEventListener('keydown', keyEventNewTask, false);
	
	// Replace message that app requires JScript
	var tlFooter = document.querySelectorAll('footer.tasklist')[0];
	tlFooter.innerHTML = "Let's Do This";
	
	function addListItem () {
		
		var newTaskName = newTaskNameElement.value;
		if (newTaskName.trim() !== '') {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(newTaskName));
	//		li.setAttribute("id",liOrderNumber);
			taskListElement.appendChild(li);
		}
	}

	function keyEventNewTask (e) {

		// add the new task to the list if the enter key is pressed
		var key = e.which || e.keycode || e.key;
		if (key === 13) {
			addListItem();
		}
	}
}
taskListFramework(); 

