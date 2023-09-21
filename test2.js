import { adNauseam } from "./CardSample.js";
console.log("test2.js");

// console.log(JSON.stringify(adNauseam, undefined, 4));

function f1(array) {
    console.log(JSON.stringify(array));
    array = [array];
    console.log(JSON.stringify(array));
}

f1(["a"]);
