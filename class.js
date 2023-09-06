class Color {
    name;
}

class colorIndicator {
    colors;
}

class ManaType{
    name;
}

class ManaGlyph {
    manaType;
    amount;
    isPhyrexian;
    isSnow;
}

class ManaSymbol {
    glyph;
    isHybrid;
}

class SubType {
    name;
    cardType;
}

class Ability {
    text;
    abilityType; // triggered / activated / static / spell

    // isManaAbility;
    // isLoyaltyAbility;
    // isCharacteristicDefiningAbility;
}

class CharacteristicsSubset {
    characteristicsType;

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

class Mtgobject {
    printedCharacteristicsSubsets;
    currentCharacteristics;

    // statuses on battlefield
    tapped;
    fliped;
    facedDown;
    phaseOut;

    isDoubleFaced;
}


