// const theOneFunc = (dd) => {
//     console.log("Helo after " + dd + " seconds");
// };

// setTimeout(theOneFunc, 4 * 1000, 4);
// setTimeout(theOneFunc, 8 * 1000, 8);

//////////////////////////

let counter = 0;
const intervalId = setInterval(() => {
    console.log("Hello world !");
    counter += 1;

    if (counter === 5) {
        console.log("Done");
        clearInterval(intervalId);
    }
}, 1000);