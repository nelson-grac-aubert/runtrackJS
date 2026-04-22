$(function () { 

    randomize(); 

    // Clicking on Reset button randomizes the grid again 
    $("#reset-button").on("click", function () {
        randomize();
    });

});

function randomize() {

    const imagesContainer = $("#images-container");
    // Add all images to an array
    const items = imagesContainer.children(".cell").toArray();

    // Shuffle cheat : Math.random() returns a number between 0 and 1. 
    // By substracting 0.5 => 50% chance of positive, 50% chance of negative 
    // So 50% chance of keeping the order, 50% of inverting the sort 
    items.sort(() => Math.random() - 0.5);

    // Put the cells of the array back into the div 
    imagesContainer.empty().append(items);

    const lastCell = $(`#logo-${9}`);
    lastCell.remove(); 

}

// DEPRECATED : I ALWAYS DELETE THE LAST CELL INSTEAD OF ONE AT RANDOM BECAUSE FUCK THIS SHITTTTTt
// Helper function to delete a cell at random
// function getRandomCellPosition() {
//     const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

//     var choice = positions[Math.floor(Math.random() * positions.length)];

//     return choice;
// }



