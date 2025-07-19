// //promises
// const delay=(miliseconsds) =>{
//     return new Promise(resolve => setTimeout(resolve, miliseconsds));
// }
// const asynccFuntion = async () => {
//     await delay(100);
//     console.log("1");

//     await delay(100);
//     console.log("2");

//     await delay(100);
//     console.log("3");

//     await delay(100);
//     console.log("4");

//     await delay(100);
//     console.log("5");


// };

// asynccFuntion();


//.then promise
const delay=(miliseconsds) =>{
    return new Promise(resolve => setTimeout(resolve, miliseconsds));
}
delay(100)
    .then(() => {
        console.log("1");
        return delay(100);
    })

delay(100)
    .then(() => {
        console.log("2");
        return delay(100);
    })

delay(100)
    .then(() => {
        console.log("3");
        return delay(100);
    })

delay(100)
    .then(() => {
        console.log("4");
        return delay(100);
    })

delay(100)
    .then(() => {
        console.log("5");
        return delay(100);
    })