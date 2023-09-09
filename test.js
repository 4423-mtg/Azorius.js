// const mtgsdk = require('mtgsdk')
import mtgsdk from "mtgsdk";

main();

async function main() {
    getCard();
    getText("Murder");
}

async function getCard() {
    let cards = await mtgsdk.card.where({ multiverseid: 409741 });
    let set = new Set();

    cards.forEach((c) => console.log(Object.keys(c)));
    cards.forEach((c) =>
        set.add(
            JSON.stringify(
                {
                    name: c.name,
                    manaCost: c.manaCost,
                    text: c.text,
                    layout: c.layout,
                },
                undefined,
                "  ",
            ),
        ),
    );
    Array.from(set).forEach((e) => console.log(e));
}

async function getText(cardName) {
    let cards = await mtgsdk.card.where({ name: cardName });
    let text = cards[0].text;
    console.log(text);
    return text;
}
