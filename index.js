// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);
 

function writeCards(arrayOfNames, eventName) {
    const arrayOfCreatedMessages = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        let message = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`;

        arrayOfCreatedMessages.push(message);
    }
        return arrayOfCreatedMessages;
}

function countDown(positiveInt) {
    while (positiveInt >= 0) {
        console.log(positiveInt);
        positiveInt--;
    }
}


