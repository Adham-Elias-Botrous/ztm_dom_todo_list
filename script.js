var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.querySelectorAll('li');


function makeListItemFeatures(item){
	item.addEventListener('click',()=>item.classList.toggle("done"));
		var deleteItem=document.createElement("button");
		deleteItem.innerText="Delete";
		item.appendChild(deleteItem);
		deleteItem.addEventListener('click',()=> item.remove())
}


listItems.forEach( item=>makeListItemFeatures(item));



function inputLength() {
	return input.value.trim().length;
}

function createListElement() {
	var li = document.createElement("li");
	li.innerText=input.value;
	ul.appendChild(li);
	makeListItemFeatures(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

