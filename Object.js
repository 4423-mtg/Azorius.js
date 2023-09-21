// Classes of in-game objects and pre-game objects

/////////// Card-Like Object ///////////
// Card, Token, Copy, or Emblem
export class MtgObject {
    id;
    kind; // card, token, copy, emblem
    owner;

    // characteristics
    printedCharacteristicsSubsets; // faces, splited/fliped halves, or adventure (multiple)
    characteristicsSubset; // current subset (single)

    // statuses on the battlefield
    tapped;
    fliped;
    facedDown;
    phasedOut;

    // physical quality
    isDoubleFaced;
    isTransformingDoubleFaced;
    isModalDoubleFaced;

    // quality when casted as spell
    spellInfo;
}

// additional info when casted as spell
export class SpellInfo {
    targets;
}

/////////// Non-Card Objects ///////////
// Ability on the stack
export class StackedAbility {
    id;
    kind; // activated or triggered

    sourceObject;
    sourceAbility;
}

// Ability on object, or Delayed-Triggered Ability
export class Ability {
    id;
    kind; // triggered / activated / static / spell
    text;

    // isManaAbility;
    // isLoyaltyAbility;
    // isCharacteristicDefiningAbility;
}

// Special Action
export class SpecialAction {}

// created effect
export class Effect {
    id;
    type; // one-shot, continuous, replacement, prevent

    // source;  // duplicated source ability
    controller;
}

/////////// static in-game object ///////////
export class Player {
    id;
    name;
    life;
    counters;
    abilities;
}

export class Zone {
    name; // library, hand, battlefield, graveyard, exile, command, stack
    objects;
    isZone;
    subzones;
}

export class Turn {
    id;
    activePlayer;
}

/////////// metadata of game ///////////
export class GameState {
    turn;
    phase;
    step;

    players;
    zones;
    mtgObjects;
    effects;
}

export class DeckItem {
    name;
    oracle_id;
    number;
    constructor(name, oracle_id, number) {
        this.name = name;
        this.oracle_id = oracle_id;
        this.number = number;
    }
}

export class Deck {
    mainBoard;
    sideBoard;
    constructor(mainBoard, sideBoard = undefined) {
        this.mainBoard = mainBoard;
        this.sideBoard = sideBoard;
    }
}
