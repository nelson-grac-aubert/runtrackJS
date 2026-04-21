function show() { 
    
    // Create the article
    let myArticle = document.createElement("article"); 
    // Set its id
    myArticle.id = "article";
    // Set its text
    myArticle.innerHTML = "Lorem Ipsum";
    // Add it to the body
    document.body.appendChild(myArticle);

}

function hide() {

    // Select the article
    let myArticle = document.getElementById("article"); 
    // Delete it
    myArticle.remove(); 

}

// Return true if the article exists, false otherwise
function articleExists() {

    if (document.getElementById("article") === null) { 
        return false;
    }
    else { 
        return true;
    }
}

// Show article if it doesn't exist, delete it if it does
function showHide() { 
    
    if (articleExists()) { 
        hide();
    }
    else {
        show();
    }

}