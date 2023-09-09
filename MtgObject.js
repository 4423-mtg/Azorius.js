///////////// Characteristics /////////////////
export class Color {
    name;
}

export class ColorIndicator {
    colors;
}

export class ManaType {
    name;
}

export class ManaGlyph {
    manaType;
    amount;
    isPhyrexian;
    isSnow;
}

export class ManaSymbol {
    glyph;
    isHybrid;
}

export class SubType {
    name;
    cardType;
}

export class AbilityOnObject {
    text;
    abilityType; // triggered / activated / static / spell

    // isManaAbility;
    // isLoyaltyAbility;
    // isCharacteristicDefiningAbility;
}

export class CharacteristicsSubset {
    characteristicsType; // split, flip, double-face, adventurer, prototype

    name;
    manaCost;
    colors;
    colorIndicator;
    cardTypes;
    superTypes;
    subTypes;
    text;
    abilities;
    power;
    toughness;
    loyalty;
    defense;
    handModifier;
    lifeModifier;

    // referenced characteristics
    dependingCharacteristics;
}

/////////// Spell, Ability, Effect /////////////////
export class AbilityOnStack {
    source;
    abilityOnObject;
}

export class Effect {
    id;

    // source;  // duplicated source ability
    controller;
}

/////////// Fundamental Class /////////////////
export class MtgObject {
    // card, token and copy of card

    // characteristics
    printedCharacteristicsSubsets;
    currentCharacteristics;

    // statuses on battlefield
    tapped;
    fliped;
    facedDown;
    phaseOut;

    isDoubleFaced;
}

export class Zone {
    name;
    objects;
}

export class Player {
    id;
    name;
    life;
    counters;
    abilities;
}
