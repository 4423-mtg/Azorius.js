import { GameState } from "./Object";

// export const turnDef = {
//     beginning: ["untap", "upkeep", "draw"],
//     precombatMain: [],
//     combat: ["beginning", "attack", "block", "damage", "end"],
//     postcombatMain: [],
//     ending: ["end", "cleanup"],
// };

class StateHistoryEntry {
    action;
    gameState;

    constructor(action = undefined, gameState = undefined) {
        this.action = action;
        this.gameState = gameState;
    }
}
export class StateHistory {
    entries = [];
    constructor(state = undefined) {
        this.entries = [state];
    }

    // functions
    // TODO
}

// export class Engine {
//     decks;
//     initialLife = 20;
//     turnDef = turnDef;

//     gameHistory;
//     gameState;

//     constructor() {
//         console.log("<This is Engine.constructor().>");
//     }

//     StartGame() {
//         console.log("<This is Engine.StartGame().>");

//         // init
//         this.gameState = new GameState();

//         // go
//     }

//     GetAction(action) {}
//     ExecAction(action) {}
//     RunStateBasedAction() {}
// }

export class ActionInterpreter {
    interpret(actions) {
        if (!Array.isArray(actions)) actions = [actions];
        while (actions.length > 0) {
            const action = this.actions[0];
            if (Array.isArray(action)) {
                // 同時にやる行動って例えば何？
                // - カードを戦場に出す
                // - というか領域移動全般
                // - ダメージを与える
                if (
                    action
                        .map((a) => existApplicableReplacementEffect(a))
                        .reduce((/* */) => {
                            /* */
                        })
                ) {
                } else if (1) {
                }
            } else {
                if (existApplicableReplacementEffect(action)) {
                    applyReplacementEffect();
                    continue;
                } else if (action.decomposable) {
                    decompose();
                    continue;
                } else {
                }
            }
        }
    }
}
