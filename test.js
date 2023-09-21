"use strict";
import mtgsdk from "mtgsdk";
import fetch from "node-fetch";
import fs from "fs";

main();

async function main() {
    saveCard("Ad Nauseam");
    // recordCard([
    //     "Murder",
    //     "Innocent Blood",
    //     "Rampant Growth",
    //     "Divination",
    //     "Mystical Tutor",
    //     "Ad Nauseam",
    // ]);
}

async function fetchCardObj(name) {
    // get card object
    const url = `https://api.scryfall.com/cards/named?fuzzy=${name}`;
    console.log("Fetching ...");
    const response = await fetch(url, { method: "GET" });
    // console.log(response);
    const obj = await response.json();

    // extract info
    // console.log(JSON.stringify([obj.name, obj.oracle_text], undefined, '  '));
    // console.log(JSON.stringify(obj, undefined, '  '));
    return obj;
}

async function saveCard(cardName) {
    // get card object
    const cardobj = await fetchCardObj(cardName);
    fs.writeFileSync(
        `./data/${cardName}.json`,
        JSON.stringify(cardobj, undefined, "  "),
    );
    console.log("Saved.");
}

async function recordCard(names) {
    let cards = [];
    for (const name of names) {
        const obj = await fetchCardObj(name);
        const obj2 = {
            name: obj.name,
            type_line: obj.type_line,
            text: obj.oracle_text,
        };
        console.log(obj2);
        cards.push(obj2);
    }

    // output the object into a file
    fs.writeFileSync(
        "./data/cards.json",
        JSON.stringify(cards, undefined, 2) + "\n",
    );
}
