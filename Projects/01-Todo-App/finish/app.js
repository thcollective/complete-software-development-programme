let todoListItems = document.getElementsByTagName('li');
let close = document.getElementsByClassName('close');

for (let i = 0; i < todoListItems.length; i++) {
	let span = document.createElement('span');
	let text = document.createTextNode('\u00D7');

	span.className = 'close';
	span.appendChild(text);

	todoListItems[i].appendChild(span);
}

// Click on a close button to hide the current list item
for (let i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		let div = this.parentElement;
		div.style.display = 'none';
	};
}

// Add a "checked" symbol when clicking on a list item
let todoList = document.querySelector('#todoList');
todoList.addEventListener(
	'click',
	function (ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	},
	false
);

// Create a new list item when clicking on the "Add" button
function addNewTodo() {
	let li = document.createElement('li');
	let inputValue = document.getElementById('todoInput').value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert('You must write something!');
	} else {
		document.getElementById('todoList').appendChild(li);
	}
	document.getElementById('todoInput').value = '';

	let span = document.createElement('SPAN');
	let txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			let div = this.parentElement;
			div.style.display = 'none';
		};
	}
}
