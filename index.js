// Code your solutions in this file
//for loop

// for (let age = 30;age < 40; age++){ 
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// //for loop with arrays
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//assignment


const names = ["Nicole", "Allan", "Miles"];
const messages=[];

function writeCards(names, event){
    for(let i = 0; i < names.length; i++) {
        const card = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(card);
        
    }
    return messages;
}

function countDown(i){
    while (i >= 0) {
        console.log(i);
        i--
    }
}
