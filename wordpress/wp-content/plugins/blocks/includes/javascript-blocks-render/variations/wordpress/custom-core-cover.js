(function () {
  const { registerBlockStyle } = typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("core/cover", [
          { label: "Margins 0", name: "margins-0"},
          { label: "Paddings 0", name: "paddings-0"},
          { label: "Margins 1", name: "margins-1"},
          { label: "Paddings 1", name: "paddings-1"},
          { label: "Margins 2", name: "margins-2"},
          { label: "Paddings 2", name: "paddings-2"},
          { label: "Margins 3", name: "margins-3"},
          { label: "Paddings 3", name: "paddings-3"},
          { label: "Margins 4", name: "margins-4"},
          { label: "Paddings 4", name: "paddings-4"},
          { label: "Margins 5", name: "margins-5"},
          { label: "Paddings 5", name: "paddings-5"},
        ]
      );
    }
  });
})();