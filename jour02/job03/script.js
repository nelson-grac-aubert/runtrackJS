function addOne() { 

    let myParagraph = document.getElementById("counter");

    let counterValue = myParagraph.textContent;

    let newCounterValue = parseInt(counterValue) + 1; 

    myParagraph.textContent = newCounterValue;

}

document.getElementById("button").addEventListener("click", addOne);