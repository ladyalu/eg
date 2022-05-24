/**
 * The EG game system for Foundry Virtual Tabletop
 * A system for playing the Esper Genesis RPG.
 * Author: Ladyalu
 * Software License: GNU GPLv3
*/

//Import Modules
//import {eg} from "./module/config.js";
import {preloadHandlebarsTemplates, registerHandlbarHelpers} from "./module/templates.js";

//Import Documents
import ActorEg from "./module/actor/entity.js";
import ItemEg from "./module/item/entity.js";

//Import Sheets
import ActorSheetEgCharacter from "./module/actor/sheets/character.js";
import ItemSheetEg from "./module/item/sheet.js"

/** ---------------------------------------------------------------------------------
 * Foundry VTT Initialization
 *  ------------------------------------------------------------------------------------
 */

Hooks.once ("init", function (){
    console.log(`EG  |  Initializing the EG Game System`);

    //Add utility classes to the global game object so that they're more
    //accessible in global contexts.
    game.eg = {
        ActorsEg,
        ItemEg,
    };

    //Add custom constants for configuration.
    CONFIG.EG = EG;

    /**
     * Set an inititive formula for the system
     * @type{String}
     */

    CONFIG.Combat.initiative = {
        formula: "1d20 + @abilities.dex.mod",
        decimals: 2
    };

    // Define custom Document classes
    CONFIG.Actor.documentClass = ActorEg;
    CONFIG.Item.documentClass = ItemEg;

    //Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("eg", ActorSheetEgCharacter, {
        types: ["character"],
        makeDefault: true,
        label: "EG.SheetClassCharacter"
    });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("eg", ItemSheetEg, {
        makeDefault: true,
        label: "EG.SheetClassItem"
    });

    // Preload Handlebars helpers & partials
    registerHandlebarsHelpers();
    preloadHandlebarsTemplates();

});

//* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once("ready", function() {
  // Include steps that need to happen after Foundry has fully loaded here.
});