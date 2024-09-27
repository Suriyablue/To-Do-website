var ol = document.getElementById("list");
var input = document.getElementById("input");
var clearAllBtn = document.getElementById("clearAllBtn");

function add() {
    var task = input.value.trim(); // Trim to remove any accidental spaces

    if (task === "") {
        alert("Please enter a valid task.");
    
        return;
    }

    var listitem = document.createElement("tr");

    listitem.innerHTML = "<td>" + task + "</td>" + "<td><button onclick='deleteItem(event)'>Delete</button></td>";
    ol.append(listitem);

    // Clear input field after adding item
    input.value = "";

    // Show the "Clear All" button after adding the first item
    if (ol.children.length > 0) {
        clearAllBtn.style.display = "block";
    }
}

function deleteItem(event) {
    event.target.parentElement.parentElement.remove();

    // If all tasks are deleted, hide the "Clear All" button
    if (ol.children.length === 0) {
        clearAllBtn.style.display = "none";
    }
}

function clearAll() {
    ol.innerHTML = ""; // Clears all items in the list

    // Hide the "Clear All" button after clearing the list
    clearAllBtn.style.display = "none";
}
