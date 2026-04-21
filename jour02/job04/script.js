function keyListener() { 

    const keyLogger = document.getElementById("keylogger");

    // chaine regex, ^ début, $ fin, i case insensitive, .test méthode
    // d'un objet regex qui renvoie true si l'argument correspond à l'expression
    if (/^[a-z]$/i.test(event.key)) {

        keyLogger.value += event.key

    }

}

// écoute toujours, donc rajoute 1 caractère au comportement normal de la textarea
// 0+1 = 1, 1+1 = 2 
document.addEventListener("keydown", keyListener);