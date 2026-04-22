function show() { 

    $("#paragraph").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");

}

function hide() { 

    $("#paragraph").empty();

}

$("#show-button").click(function() { 
    show();
})
$("#hide-button").click(function() { 
    hide();
})

