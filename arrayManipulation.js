// Function to process an array of numbers
// Squares even numbers and triples odd numbers
function proccesArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}


//Example usage 
const inputArray = [6, 7, 8, 9, 10];
const resultArray = proccesArray(inputArray);

console.log(resultArray);