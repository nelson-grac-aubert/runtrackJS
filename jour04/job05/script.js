async function loadRandomQuote() {
    try {

        const response = await fetch("https://corsproxy.io/?url=https://zenquotes.io/api/random");

        return await response.json();

    } catch (error) {

        console.error("Error accessing the API : ", error);
        // Empty array so rest of code executes instead of bug 
        return [];
    }
}

$("#get-quote").on("click", async function () {

    const quote = await loadRandomQuote(); 

    // debug print
    console.log(quote); 

    modifyDomWithQuote(quote); 
    
});

function modifyDomWithQuote(quote) {

    const content = quote[0].q;
    const author = quote[0].a;

    $("#quote").html(content); 
    $("#author").html(author); 

}
