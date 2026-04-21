function addOne() { 

    // Select the article
    let myParagraph = document.getElementById("counter");

    // Select the content of the article
    let counterValue = myParagraph.textContent;

    // Add 1 to the counter
    let newCounterValue = parseInt(counterValue) + 1; 

    // Update the article content
    myParagraph.textContent = newCounterValue;

}

// Event listener for the button 
// Assign the addOne function to the button click event
document.getElementById("button").addEventListener("click", addOne);