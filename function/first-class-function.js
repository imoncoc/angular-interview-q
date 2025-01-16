// 1. Assigning Functions to Variables
const greet = function() {
    console.log("Hello!");
};
greet();

// 2. Passing Functions as Arguments
function executeFunction(fn) {
    fn();
}
executeFunction(function() {
    console.log("Function passed as an argument!");
});


// 3. Returning Functions
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Outputs: 10


// 4. Storing Functions in Data Structures
const operations = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; },
    function(a, b) { return a * b; }
];

console.log(operations[0](5, 3)); // Outputs: 8 (addition)

// TODO: The ability of use function as value or pass a function or return a function