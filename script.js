// Get references to the input field and the list container
var ul = document.getElementById("list-container");
var input = document.getElementById("input");

// Function to add a new item to the list
function add() {
    var task = input.value.trim(); // Get the input value and remove extra spaces

    // Check if the input is empty
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new <li> element for the task
    var listitem = document.createElement("li");
    listitem.innerHTML = `${task} <button onclick="deleteItem(event)">Delete</button>`;

    // Append the new <li> to the list
    ul.append(listitem);

    // Clear the input field
    input.value = "";
}

// Function to delete an item from the list
function deleteItem(event) {
    // Remove the parent <li> of the clicked delete button
    event.target.parentElement.remove();
}
