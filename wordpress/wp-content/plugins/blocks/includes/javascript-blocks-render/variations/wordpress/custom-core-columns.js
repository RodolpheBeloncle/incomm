(function () {
  const { registerBlockStyle } =
    typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("core/columns", [
        {
          label: "Margin Top & Bottom 0",
          name: "espacement-0",
        },
        {
          label: "Margin Top & Bottom 1",
          name: "espacement-1",
        },
        {
          label: "Margin Top & Bottom 2",
          name: "espacement-2",
        },
        {
          label: "Margin Top & Bottom 3",
          name: "espacement-3",
        },
        {
          label: "Margin Top & Bottom 4",
          name: "espacement-4",
        },
        {
          label: "Margin Top & Bottom 5",
          name: "espacement-5",
        },
        {
          label: "Left",
          name: "left",
        },
        {
          label: "Right",
          name: "right",
        },
        {
          label: "Center",
          name: "center",
        },
        {
          label: "Mobile Inverse Ordre",
          name: "mobile-inverse-ordre",
        },
      ]);
    }
  });
})();
