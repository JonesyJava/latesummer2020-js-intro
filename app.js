console.log("hello world")
// DO NOT USE VAR!
// var x = 5
//PRIMATIVE DATA TYPES
// this is not hoisted and stays within the expected scope
// numbers are any real number, negative and decimal included
let y = 5
// booleans are either true or false
let alive = true
// strings allow for concatenation and interpolation
let myName = "Darryl"
let otherName = 'D$'
let anotherName = `DJ`

let something = null
let unassigned = undefined
let whatevs

const num = 5
// NOT OK
// num = 3

// let num1 = 5
// this is totally fine
// num1 = 10



//non primative DATA TYPES
let me = {
    name: "Darry",
    age: 100,
    alive: true,
    sister: {
        name: "Rhianon",
        alive: true
    }

}

let you = {
    name: "Kayden"
}

let arr = [me, you, "dog"]

let age = "age"
let propertyToAccess = age

console.log(arr[0][propertyToAccess]);
console.log(arr[1].name);
console.log(arr[2].name);



// reference(pointer) // Value
// y                       5
// me                      1AX800


// 1AX800
//Pointer   //value
// name        "Darry"



let num1 = 10
// num1 += 10 is the same as num1 = num1 + 10
num1++
console.log(++num1);
console.log(num1);





function greetMe() {
    console.log(`hello ${me.name}`);
    return 5
}


function add(a, b, c, d, e) {
    let total = 0
    if (a > 100 && a < 200) {
        total += a
    }
    if (b) {
        total += b
    }
    if (c) {
        total += c
    }
    return total

}


let item = "Apple"

switch (item) {
    case "Banana":
        console.log("this is a Banana");
        break;
    case "Orange":
        console.log("This is an Orange");
        break
    case "Apple":
        console.log("This is an Apple");
        break
    case "Pear":
        console.log("This is an Pear");
        break
    default:
        console.log("Not available a fruit");
}



item = "taco"

switch (item) {
    case "Banana":
    case "Orange":
    case "Apple":
    case "Pear":
        console.log(`This is an ${item}`);
        break;
    default:
        console.log(`A ${item} is not a fruit!`);
}

