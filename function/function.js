
// 1. Function Statement and it's also known function declaration
function a(){
    console.log("a called")
}
a()

// 2. Function Expression
// act like value
 var b = function (){
    console.log("b called")
} 
b()

// TODO: Hoisting possible on function statement and not possible on expression
// Anonymous Allowed not allowed on function statement and  allowed on expression

// 3. Anonymous Function
// Act like value
var c = function (){
    console.log("c called")
} 
c()


// 4. Named Function
// When a function have a name it is called named function statement
var d = function xyz(){
    console.log("d called")
} 
d()


// 5. Different between Parameters and Arguments ?

function add(a, b) { // 'a' and 'b' are parameters
    return a + b;
}

add(5, 10); // '5' and '10' are arguments