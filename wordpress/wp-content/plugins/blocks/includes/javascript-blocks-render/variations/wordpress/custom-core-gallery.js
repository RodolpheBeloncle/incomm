(function () {
  const { registerBlockStyle } = typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("core/gallery", [
        { label: "Espacements 0", name: "espacements-0"},
        { label: "Espacements 1", name: "espacements-1"},
        { label: "Espacements 2", name: "espacements-2"},
        { label: "Espacements 3", name: "espacements-3"},
        { label: "Espacements 4", name: "espacements-4"},
        { label: "Espacements 5", name: "espacements-5"},
        ]
      );
    }
  });
})();