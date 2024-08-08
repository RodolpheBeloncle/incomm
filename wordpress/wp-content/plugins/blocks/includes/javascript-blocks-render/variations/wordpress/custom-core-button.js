(function () {
  const { registerBlockStyle } =
    typeof wp.blocks !== "undefined" ? wp.blocks : {};

  wp.domReady(() => {
    if (registerBlockStyle) {
      registerBlockStyle("core/button", [
        { label: "Plein (Pri-500) (#btn1)", name: "variation-2" },
        { label: "Cont.  (Pri-500) (#btn2)", name: "contour-2" },

        { label: "Plein (Se-700) (#btn3)", name: "variation-3" },
        { label: "Cont.  (Se-700) (#btn4)", name: "contour-3" },

        { label: "Plein (Se-500) (#btn5)", name: "variation-4" },
        { label: "Cont.  (Se-500) (#btn6)", name: "contour-4" },

        { label: "Plein (Ter-700) (#btn7)", name: "variation-5" },
        { label: "Cont.  (Ter-700) (#btn8)", name: "contour-5" },

        { label: "Plein (Ter-500) (#btn9)", name: "variation-6" },
        { label: "Cont.  (Ter-500) (#btn10)", name: "contour-6" },

        { label: "Plein (Su-700) (#btn11)", name: "variation-7" },
        { label: "Cont.  (Su-700) (#btn12)", name: "contour-7" },

        { label: "Plein (Su-500) (#btn13)", name: "variation-8" },
        { label: "Cont.  (Su-500) (#btn14)", name: "contour-8" },
      ]);
    }
  });
})();
