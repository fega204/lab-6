/****************** create variables ******************/
// Initial model name set to "XYZ"
let modelName = "XYZ";
// Initial duration set to 0
let duration = 0;

// Function to recalculate the total cost based on the model and duration
function recalculate() {
    // Get the cost label element from the DOM
    let costLabel = document.getElementById("calculated-cost");
    let totalCost;
    
    // Calculate cost based on the selected model
    if (modelName === "XYZ") {
        totalCost = duration * 100; // Cost per day for model XYZ
    } else if (modelName === "CPRG") {
        totalCost = duration * 213; // Cost per day for model CPRG
    }
    
    // Update the cost label with the calculated cost
    costLabel.innerHTML = totalCost.toFixed(2);
}

// Get the model button element from the DOM
let modelButton = document.getElementById("model-button");

// Function to change the model and update the UI
function changeModel() {
    // Get the model text element from the DOM
    let modelText = document.getElementById("model-text");
    
    // Toggle between models "XYZ" and "CPRG"
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG"; // Update the displayed model name
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ"; // Update the displayed model name
    }
    
    // Recalculate the cost after changing the model
    recalculate();
}

// Add a click event listener to the model button
modelButton.addEventListener("click", changeModel);

// Get the duration button element from the DOM
let durationButton = document.getElementById("duration-button");

// Function to change the duration and update the UI
function changeDuration() {
    // Get the duration text element from the DOM
    let durationText = document.getElementById("duration-text");
    
    // Prompt the user to enter a new duration
    let newDuration = prompt("Enter the duration in days:");
    
    // Validate the input and update the duration
    if (newDuration !== null && newDuration !== "") {
        duration = parseInt(newDuration); // Convert the input to an integer
        durationText.innerHTML = duration; // Update the displayed duration
        recalculate(); // Recalculate the cost after changing the duration
    }
}

// Add a click event listener to the duration button
durationButton.addEventListener("click", changeDuration);