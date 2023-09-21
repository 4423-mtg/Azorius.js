// basic action object
export function Resolve(actions) {
    return {
        type: "action",
        kind: "resolve",
        actions: Array.isArray(actions) ? actions : [actions],
    };
}

// control object
// export function Serial(actions) {
//     return {
//         type: "control",
//         kind: "serial",
//         actions: Array.isArray(actions) ? actions : [actions]
//     }
// }
export function Simultaneous(actions) {
    return {
        type: "control",
        kind: "simultaneous",
        actions: Array.isArray(actions) ? actions : [actions],
    };
}
export function Repeat(times, actions) {
    return {
        type: "control",
        kind: "repeat",
        times: times,
        actions: Array.isArray(actions) ? actions : [actions],
    };
}

// info object
export function Info(kind, objective) {
    return {
        type: "info",
        kind: kind,
        objective: objective,
    };
}
// query object
export function Query(specs) {
    return {
        type: "query",
        specs: Array.isArray(specs) ? specs : [specs],
    };
}
export function Select() {}
export function Cast() {}

// other action object
export function Reveal(objective, tag = undefined) {
    return {
        type: "action",
        kind: "reveal",
        objective: objective,
        tag: tag,
    };
}
export function Move(objective, destination) {
    return {
        type: "action",
        kind: "move",
        objective: objective,
        destination: destination,
    };
}
export function LoseLife(player, number) {
    return {
        type: "action",
        kind: "loseLife",
        objective: player,
        number: number,
    };
}

// export function Sacrifice(player, query, number = 1) {
//     const ev = new MagicEvent("sacrifice");
//     [ev.player, ev.condition, ev.number] = [player, query, number];
//     return ev;
// }
