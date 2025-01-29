
// What is hoisting?
// TODO: Hoisting is a nice function where we can access variable and function without any error

// 'use strict'


getName()
console.log(x)
console.log(arr)
console.log(obj)
console.log(arrowFunc())

var x = 7;

function getName(){
    console.log("Js")
}

var arrowFunc =  () => {
    console.log("I am arrow func")
}

var arr = [1,2,3]
var obj = {
    name: "Imon",
    role: "Admin"
}

const name = "MD"
let name2 = "Imon"
