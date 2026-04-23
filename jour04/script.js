// Button behavior
// Re-use async here or the async in the fetchTheExpression won't work :( sad 
$("#button").on("click", async function() { 

    try {

        // Get the expression from the .txt
        const paragraphContent = await fetchTheExpression();

        // Create and append the paragraph 
        writeTheParagraph(paragraphContent);

    } 
    catch (error) {

        console.error("Error while writing paragraph:", error);

    }
});

async function fetchTheExpression() { 
    
    // fetch returns a Promise
    const response = await fetch("expression.txt");

    // If the promise doesn't resolve 
    if (!response.ok) { 

        throw new Error("Couldn't access the file");

    }

    // Parse the resolved promise into a string that is the file's content 
    return await response.text(); 

}

function writeTheParagraph(content) { 

    // Create the html paragraph 
    const paragraph = document.createElement('p');

    // Add the text content
    paragraph.textContent = content;

    // Append it to the body 
    document.body.appendChild(paragraph);

}
