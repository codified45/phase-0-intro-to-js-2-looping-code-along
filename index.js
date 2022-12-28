
// const 

 const arrayOfStringNames  = ["Jack", "Charles", "David"];
 let eventName = "Halloween";

function writeCards(arrayOfStringNames, eventName) {
    const arrayOfCardsWritten = [];
    for (let i = 0; i < arrayOfStringNames.length; i++) {
            arrayOfCardsWritten.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`);
         // console.log(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`);
       // debugger;
    }
    //return arrayOfStringNames;\
    return arrayOfCardsWritten;
}

writeCards(arrayOfStringNames, eventName);

function countDown(positiveInt) {
    let count = positiveInt 
    while (count > -1) {
    console.log(count);
    count--;
    }
}

countDown(10);




// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }



// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

