
// function


// stack (primitive) ,  Heap (Non-Primitive)
// stack
// let myYoutubename = "rohit298"
// let anothername = myYoutubename
// anothername = "sonu383"

// console.log(myYoutubename);
// console.log(anothername);


// Heap
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dwbf@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


