///////////// Characteristics /////////////////
export class Color {
    name;
}

export class ManaType {
    name;
}

export class ManaSymbol {
    glyph;

    // hybrid mana
    isHybrid;
    subSymbols;
}

// const subtypeList;

export class CharacteristicsSubset {
    style; // split, flip, double-face, adventurer

    name;
    manaCost;
    colors;
    colorIndicator;
    superTypes;
    cardTypes;
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
