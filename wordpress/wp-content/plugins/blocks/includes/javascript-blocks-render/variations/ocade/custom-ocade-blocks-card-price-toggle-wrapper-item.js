(function () {
  const { registerBlockStyle } = typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("ocade-blocks/card-price-toggle-wrapper-item",
        [
          { label: "Mise en Avant", name: "mise-en-avant" },
        ]
      );
    }
  });
})();