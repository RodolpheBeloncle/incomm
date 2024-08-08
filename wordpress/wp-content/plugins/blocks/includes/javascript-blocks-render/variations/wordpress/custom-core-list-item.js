(function () {
  const { registerBlockStyle } = typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("core/list-item", [
        { label: "Circle", name: "circle" },
        { label: "Square", name: "square" },
        { label: "Star", name: "star" },
        { label: "Checked", name: "checked" },
        { label: "Disabled", name: "disabled" }
      ]);
    }
  });
})();