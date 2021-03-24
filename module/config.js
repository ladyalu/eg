//Namespace Configuration Values
export const eg = {};

//ASCII Artwork
eg.ASCII = `_______________________________
__________    ___________
|   _____|   |   _______|
|   |        |   |
|   |__      |   |   ____
|    __|     |   |  |__  |
|   |        |   |    |  |
|   |_____   |   |____|  |
|________|   |___________|
__________________________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */

eg.abilities = {
    "str": "EG.AbilityStr",
    "dex": "EG.AbilityDex",
    "con": "EG.AbilityCon",
    "int": "EG.AbilityInt",
    "wis": "EG.AbilityWis",
    "cha": "EG.AbilityCha"
};

EG.abilityAbbreviations = {
    "str": "EG.AbilityStrAbbr",
    "dex": "EG.AbilityDexAbbr",
    "con": "EG.AbilityConAbbr",
    "int": "EG.AbilityIntAbbr",
    "wis": "EG.AbilityWisAbbr",
    "cha": "EG.AbilityChaAbbr"
};

/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
 EG.weaponTypes = {
    "simpleM": "EG.WeaponSimpleM",
    "simpleR": "EG.WeaponSimpleR",
    "martialM": "EG.WeaponMartialM",
    "martialR": "EG.WeaponMartialR",
    "grenade": "EG.Gernade",
    "improv": "EG.WeaponImprov"
  };