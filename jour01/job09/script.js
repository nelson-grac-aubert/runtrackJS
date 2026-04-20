function sort(numbers, order) {

    // Error management
    if (order !== "asc" && order !== "desc") {
        console.log("Second argument must be 'asc' or 'desc'");
        return;
    }

    if (!Array.isArray(numbers)) {
        console.log("First argument must be an array");
        return;
    }

    for (const element of numbers) {
        if (typeof element !== "number") {
            console.log("All elements of the array must be numbers");
            return;
        }
    }

    // Sorting logic
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else {
        return numbers.sort((a, b) => b - a);
    }
}

const MAH_BIG_ARRAY = [1, 4535324, 3, 89, 0, 2345, 46, 38, 99, 6]
const MAH_ERROR = ["a", 4, 5]

console.log(sort(MAH_BIG_ARRAY, "asc"))
console.log(sort(MAH_BIG_ARRAY, "desc"))
console.log(sort(MAH_BIG_ARRAY, "pouet"))
console.log(sort(MAH_ERROR, "asc"))