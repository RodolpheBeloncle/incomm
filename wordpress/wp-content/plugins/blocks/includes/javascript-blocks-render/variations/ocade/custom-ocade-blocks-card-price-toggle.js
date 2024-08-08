(function () {
  const { registerBlockStyle } = typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("ocade-blocks/card-price-toggle",
        [
          { label: "Cards Top", name: "card-top" },
          { label: "Cards Centrées", name: "card-center" },
          { label: "Cards Bottom", name: "card-bottom" },
        ]
      );
    }
  });
})();