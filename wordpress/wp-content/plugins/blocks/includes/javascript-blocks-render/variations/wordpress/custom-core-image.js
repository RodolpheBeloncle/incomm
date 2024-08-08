(function () {
  const { registerBlockStyle } =
    typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("core/image", [
        { label: "Description Affichée", name: "description-affichee" },
        { label: "Description Survol", name: "description-survol" },
      ]);
    }
  });
})();
