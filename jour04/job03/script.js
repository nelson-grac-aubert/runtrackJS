// Access all json data 
async function loadData() {
    try { 
        let response = await fetch("pokemon.json");
        let data = await response.json();
        return data; 
    }
    catch { 
        console.error("Error accessing the json file");
        return [];
    }
}

// FILTER BY TYPE 
// Get the type from the fat ass menu déroulant
function getTypeFromSelectForm() { 
    var selectedPokemonType = $('#type-select option:selected').text().trim();
    console.log("Selected type from menu déroulant : " + selectedPokemonType);
    return selectedPokemonType;
}

function applyTypeFilter(data) { 
    // Keep all if "All" is selected
    let type = getTypeFromSelectForm();
    if (type === "All" || type === "" || type === "--Chose type--") return data;

    // Keep Pokémon matching the selected type
    return data.filter(p => p.type.includes(type));
}

// FILTER BY NAME 
function getNameFromTextArea() { 
    var inputName = $('#pokemon-name-input-zone').val().trim().toLowerCase();
    console.log("Searched name from input zone : " + inputName);
    return inputName;
}

function applyNameFilter(data) { 
    // Keep all if no name typed
    let name = getNameFromTextArea();
    if (name === "") return data;

    // Keep Pokémon whose english name contains the input
    return data.filter(p => p.name.english.toLowerCase().includes(name));
}

// Filter by ID 
function getIdFromTextArea() { 
    var inputId = $('#pokemon-id-input-zone').val().trim();
    console.log("Searched ID from input zone : " + inputId);
    return inputId;
}

function applyIdFilter(data) { 
    // Keep all if no ID typed
    let id = getIdFromTextArea();
    if (id === "") return data;

    // Keep Pokémon with matching ID
    return data.filter(p => p.id == id);
}

function appendTheResultsIntoTheBlackBox(data) { 

    if (data.length === 0) {
        const paragraph = document.createElement('p');
        paragraph.textContent = "Aucun résultat trouvé.";
        document.querySelector("#results-container").appendChild(paragraph);
        return;
    }

    // Get a list of only the english names of the final filtered array 
    let justTheEnglishNames = data.map(p => p.name.english);

    // Append each name into the results container
    justTheEnglishNames.forEach(name => {
        const paragraph = document.createElement('p');
        paragraph.textContent = name;
        document.querySelector("#results-container").appendChild(paragraph);
    });
}

function clear() { 
    // Remove all elements from the results container
    $("#results-container").empty();
}

$("#apply-filter-button").on("click", async function () { 
    
    clear(); 

    // Load JSON
    let filteredData = await loadData(); 

    // Apply filters in order
    filteredData = applyTypeFilter(filteredData);
    filteredData = applyIdFilter(filteredData); 
    filteredData = applyNameFilter(filteredData); 

    // Display results
    appendTheResultsIntoTheBlackBox(filteredData);
});
