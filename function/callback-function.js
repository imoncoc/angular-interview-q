// 1. CallBack function
//  A callback is a function passed as an argument to another function

function display(some) {
    console.log(some)
}

function calculator(num1, num2, callback){
    let sum = num1 + num2;
    if(callback){
        callback(sum)
    }
    else {
        return sum;
    }
}

calculator(5, 5, display);

// TODO: A callback is a function passed as an argument to another function.