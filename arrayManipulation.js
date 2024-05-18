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

// Function to format an array of strings based on corresponding array of numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}


//Example usage 
const inputArray = [6, 7, 8, 9, 10];
const resultArray = proccesArray(inputArray);

const stringArray = ["good", "bad", "watch", "fun", "javascript"];
const formattedStrings = formatArrayStrings(stringArray, resultArray);

console.log(resultArray);
console.log(formattedStrings);