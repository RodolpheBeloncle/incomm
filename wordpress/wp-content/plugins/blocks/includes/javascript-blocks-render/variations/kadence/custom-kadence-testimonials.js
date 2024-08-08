(function () {
  const { registerBlockStyle } = typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("kadence/testimonials",
        [
          { label: "Image 100 x 100", name: "image-100-100" },
          { label: "Image 200 x 200", name: "image-200-200" },
          { label: "Image 300 x 300", name: "image-300-300" },
        ]
      );
    }
  });
})();