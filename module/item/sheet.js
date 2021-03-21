/**
 * Overide and extend the core ItemSheet implementation to handle specific item types
 * @extends {ItemSheet}
 */

export default class ItemSheetEG extends ItemSheet {

    /* -------------------------------------------- */
    /* getTemplate */
    /**@override */
    get template() {
        const path = "systems/esper-genesis-foundryvtt/templates/items/";
        return `${path}/${this.item.data.type}.html`;
      }

    /* ---------------------------------------------- */
}