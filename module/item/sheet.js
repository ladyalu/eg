/**
 * Overide and extend the core ItemSheet implementation to handle specific item types
 * @extends {ItemSheet}
 */

export default class ItemSheetEG extends ItemSheet {
  constructor(...args) {
    super(...args);

    //Expand the default size of the class sheet
    if (this.object.data.type === "class" ) {
      this.options.width = this.position.width = 600;
      this.options.height = this.position.height = 680;
    }
  }

    /* -------------------------------------------- */

  /**@overide */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 560,
      height: 400,
      classes: ["eg", "sheet","item"],
      resizable: true,
      scrollY: [".tab.details"],
      tabs: [{navSelector: ".tabs", contentSelector: ".sheet-body", initial: "description"}]
    });
  }

  /* --------------------------------------------- */

    /* getTemplate */
    /**@override */
    get template() {
        const path = "systems/eg/templates/items/";
        return `${path}/${this.item.data.type}.html`;
      }

    /* ---------------------------------------------- */

  /** @override */
  async _onSubmit(...args) {
    if ( this._tabs[0].active === "details" ) this.position.height = "auto";
    await super._onSubmit(...args);
  }
}