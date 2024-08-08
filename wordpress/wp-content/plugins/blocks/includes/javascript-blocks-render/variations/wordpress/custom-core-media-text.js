(function () {
  const { registerBlockStyle } =
    typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("core/media-text", [
        {
          label: "Mobile Inverse Ordre",
          name: "mobile-inverse-ordre",
        }
      ]);
    }
  });
})();
