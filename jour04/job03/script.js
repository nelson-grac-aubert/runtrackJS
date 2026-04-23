// FILTER BY TYPE 

// Get the type from the fat ass menu déroulant
function getTypeFromSelectForm() { 

    var selectedPokemonType = $('#type-select option:selected').text();
    // Debug print
    console.log("Selected type from menu déroulant : " + selectedPokemonType);

    return selectedPokemonType;

}

function applyTypeFilter() { 

}

// FILTER BY NAME 
function getNameFromTextArea() { 

    var inputName = $('#pokemon-name-input-zone').val();
    // Debug print
    console.log("Searched name from input zone : " + inputName);

    return inputName;

}

function applyNameFilter() { 


}

// Filter by ID 
function getIdFromTextArea() { 

    var inputId = $('#pokemon-id-input-zone').val();
    // Debug print
    console.log("Searched ID from input zone : " + inputId);

    return inputId;

}

function applyIdFilter() { 

    
}

// Apply Filters to parse the Json 
function applyAllFilters() { 

    // Return a list of strings that are the pokemon names 

}

function appendTheResultsIntoTheBlackBox(listOfPokemonNames) { 

    // Manipulate the DOM to add <spans> with the pokemon names matching the search 
}

function clear() { 

    // Remove all elements from the results container, call this function before all else in the button behavior 

}

$("#apply-filter-button").on("click", function () { 
    
    // DEBUG 
    getTypeFromSelectForm();
    getNameFromTextArea();
    getIdFromTextArea();

});

