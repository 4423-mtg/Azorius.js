import {
    Resolve,
    Simultaneous,
    Repeat,
    Info,
    Query,
    Reveal,
    Move,
    LoseLife,
} from "./Action.js";

export const murder = Resolve([]);

export const adNauseam = Resolve([
    Repeat("any", [
        Reveal(Query({ zone: "library", number: 1 }), "revealedCard"),
        Move(
            Query({ tag: "revealedCard", order: "latest" }),
            Query({ zone: "hand" }),
        ),
        LoseLife(
            Query({ player: "you" }),
            Info("manaValue", Query({ tag: "revealedCard", order: "latest" })),
        ),
    ]),
]);

// const innocentBlood = Resolve(Sacrifice(Players.all, CardType.Creature, 1));
