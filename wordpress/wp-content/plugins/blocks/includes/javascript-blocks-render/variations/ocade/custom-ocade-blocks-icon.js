(function () {
  const { registerBlockStyle } = typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("ocade-blocks/icon", [
        { label: "Couleurs Originales", name: "couleurs-originales" },
      ]);
    }
  });
})();