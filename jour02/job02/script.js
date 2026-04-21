function show() { 
   
    let myArticle = document.createElement("article"); 
    myArticle.id = "article";
    myArticle.innerHTML = "Lorem Ipsum";
    document.body.appendChild(myArticle);

}

function hide() {

    let myArticle = document.getElementById("article"); 
    myArticle.remove(); 

}

function articleExists() {

    if (document.getElementById("article") === null) { 
        return false;
    }
    else { 
        return true;
    }
}

function showHide() { 
    
    if (articleExists()) { 
        hide();
    }
    else {
        show();
    }

}