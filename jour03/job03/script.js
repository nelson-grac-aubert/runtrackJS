$(function () {

    randomize();

    // Move cell if empty is adjascent
    $("#images-container").on("click", ".cell:not(.empty)", function () {

        const empty = $(".empty");
        const clicked = $(this);

        if (areAdjacent(clicked, empty)) {
            swapCells(clicked, empty);
        }
    });

    $("#reset-button").on("click", function () {
        randomize();
        $("#win-message".remove()); 

    });
});


// Shuffle cells but keep one empty 
function randomize() {

    const container = $("#images-container");
    const cells = container.children(".cell").not(".empty").toArray();

    // Shuffle
    cells.sort(() => Math.random() - 0.5);

    // Reinject after shuffle
    container.empty().append(cells);

    // Add empty in the end 
    container.append(`<div class="cell empty" id="empty"></div>`);
}


// Check if two cells are adjascent 
function areAdjacent(a, b) {

    const indexA = a.index();
    const indexB = b.index();

    const rowA = Math.floor(indexA / 3);
    const colA = indexA % 3;

    const rowB = Math.floor(indexB / 3);
    const colB = indexB % 3;

    const distance = Math.abs(rowA - rowB) + Math.abs(colA - colB);

    return distance === 1; 
}


// Swap 2 cells in the DOM 
function swapCells(a, b) {

    const temp = $("<div>");
    a.before(temp);
    b.before(a);
    temp.replaceWith(b);

    checkWin(); 
}

function checkWin() {

    const cells = $("#images-container .cell");
    let correct = true;

    cells.each(function (index) {

        // Last cell must be empty
        if (index === 8) {
            if (!$(this).hasClass("empty")) {
                correct = false;
            }
            return;
        }

        // Each cell has index matching logo (+1 because 0-8 / 1-9)
        const expectedId = "logo-" + (index + 1);

        if ($(this).attr("id") !== expectedId) {
            correct = false;
        }
    });

    if (correct) {
        showWinMessage();
        blockGame();
    }
}

function showWinMessage() {
    $("<div id='win-message'>Vous avez gagné</div>")
        .css({
            color: "green",
            fontSize: "24px",
            marginTop: "20px",
            fontWeight: "bold"
        })
        .appendTo("body");
}

function blockGame() {
    $("#images-container").off("click");
}
