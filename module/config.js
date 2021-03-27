//Namespace Configuration Values
export const EG = {};

//ASCII Artwork
EG.ASCII = `_______________________________
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

EG.abilities = {
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

/* --------------------------------------------- */

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
EG.attunements = {
    0: "EG.AttunementNone",
    1: "EG.AttunementRequired",
    2: "EG.AttunementAttuned"
};

/* -------------------------------------------- */

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

/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */

EG.weaponProperties = {
    "ada": "EG.WeapongPropertiesAda",
    "amm": "EG.WeaponPropertiesAmm",
    "bur": "EG.WeaponPropertiesBur",
    "egy": "EG.WeaponPropertiesEgy",
    "exp": "EG.WeaponPropertiesExp",
    "fin": "EG.WeaponPropertiesFin",
    "hvy": "EG.WeaponPropertiesHvy",
    "hiv": "EG.WeaponPropertiesHiv",
    "lgt": "EG.WeaponPropertiesLgt",
    "rch": "EG.WeaponPropertiesRch",
    "rcl": "EG.WeaponPropertiesRcl",
    "rel": "EG.WeaponPropertiesRel",
    "spc": "EG.WeaponPropertiesSpc",
    "thr": "EG.WeaponPropertiesThr",
    "two": "EG.WeaponPropertiesTwo",
    "ver": "EG.WeaponPropertiesVer"
};