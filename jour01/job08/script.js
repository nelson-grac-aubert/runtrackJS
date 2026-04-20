// Créez une fonction “sommeNombresPremiers” qui prend en paramètres
// deux variables. Si ces deux variables sont des nombres premiers, alors la
// fonction retourne leur somme. Sinon, la fonction retourne false.

// Determine if a number is prime
function isPrime(n) { 

    let divisorCounter = 0 

    for (let i = 1; i <= n; i++) { 

        if (n % i == 0) {
            divisorCounter += 1;
        }

    }

    if (divisorCounter == 2) { 
        return true;
    }
    else { 
        return false; 
    }

}

// Add numbers if both are prime, else return false
function addPrimes(x, y) { 

    if (isPrime(x) && isPrime(y)) { 
        return x + y;
    }
    else {
        return false;
    }
}

console.log(addPrimes(23, 61)) // 84
console.log(addPrimes(4, 61)) // false
console.log(addPrimes(23, 4)) // false
console.log(addPrimes(4, 4)) // false
console.log(addPrimes(3, 3)) // 6