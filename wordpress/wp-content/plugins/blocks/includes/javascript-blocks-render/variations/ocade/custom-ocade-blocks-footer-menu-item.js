(function () {
  const { registerBlockVariation } = typeof wp.blocks !== "undefined" ? wp.blocks : {};
  const { createBlock } = wp.blocks;

  wp.domReady(() => {
    if (registerBlockVariation) {
      registerBlockVariation("ocade-blocks/footer-menu-item", {
        name: "install-app",
        title: "Install App",
        keywords: ["installation", "application", "ocade"],
        category: "ocade-blocks",
        description: "Afficher un boutton d'installation de l'application",
        icon: 'star-half', 
        attributes: {
          anchor: "install-app",
          title: "Télécharger l'application",
          url: "/procedure-installation-pwa"
        },
        innerBlocks: [
          createBlock("ocade-blocks/icon", {}),
          createBlock("core/paragraph", { content: "Application" })
        ]
      });
    }
  });
})();