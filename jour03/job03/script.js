$(function () { 

    randomize(); 

    removeOneCellAtRandom(); 

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

}

// Remove one of the 9 cells at random to get an empty space to play on 
function removeOneCellAtRandom() { 


}

