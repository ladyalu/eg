/**
 * The Esper Genesis game system for Foundry Virtual Tabletop
 * A system for playing Esper Genesis based of DND5e
 * Author: ladyalu
 * Software License: GNU GPLv3
 */

//Import Modules
import { EG } from "./module/config.js";
import {preloadHandlebarsTemplates } from "./module/templates.js";

// Import Applications
import ItemSheetEG from "./module/item/sheet.js";


/* --------------------------------------------- */
/* Foundry VTT Initialization                    */
/* --------------------------------------------- */

Hooks.once("init", function() {
    console.log(`EG | Initializing Esper Genesis Game System\n${EG.ASCII}`);

    //Register sheet application classes
    //---ActorSensesConfig.unregisterSheet("core", ActorSheet);

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("eg", ItemSheetEG, {
        makeDefault: true,
        label: "EG.SheetClassItem"
    });

});