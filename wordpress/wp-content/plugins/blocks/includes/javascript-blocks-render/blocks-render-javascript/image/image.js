const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment, createElement } = wp.element;
const { InspectorControls} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  ColorPalette,
  RangeControl,
  Button,
  Radio,
  AnglePickerControl,
  PanelRow,
  RadioControl,
  SelectControl,
  ColorPicker,
  Notice 
} = wp.components;
const enableSidebarControlOnBlocks = ["core/image"];

/**
 * Fonction pour gérer les classes conditionnelles.
 */
const classnames = (...args) => args.filter(Boolean).join(" ");


/**
 * Composant réutilisable pour les contrôles de page
 */
const CustomRangeControl = ({ label, value, onChange, min, max }) => {
    return createElement(RangeControl, {
      label: __(label, "ocade-blocks"),
      value,
      onChange,
      min,
      max,
    });
  };
  
  /**
   * Composant pour un panel de contrôle avec texte
   */
  const CustomTextPanel = ({ label, value, onChange }) => {
    return createElement(
      PanelBody,
      { title: __(label, "ocade-blocks"), initialOpen: false },
      createElement(CustomTextControl, { label, value, onChange })
    );
  };
  
  /**
   * Composant pour un panel de contrôle avec palette de couleurs
   */
  const CustomColorPanel = ({ label, value, onChange, colors }) => {
    return createElement(
      PanelBody,
      { title: __(label, "ocade-blocks"), initialOpen: false },
      createElement(CustomColorPalette, { label, value, onChange, colors })
    );
  };
  
  /**
   * Composant pour un panel de contrôle avec plage
   */
  const CustomRangePanel = ({ label, value, onChange, min, max }) => {
    return createElement(
      PanelBody,
      { title: __(label, "ocade-blocks"), initialOpen: false },
      createElement(CustomRangeControl, { label, value, onChange, min, max })
    );
  };

  /**
 * Composant réutilisable pour les contrôles de texte
 */
const CustomTextControl = ({ label, value, onChange }) => {
    return createElement(TextControl, {
      label: __(label, "ocade-blocks"),
      value,
      onChange,
    });
  };
  
  /**
   * Composant pour choisir le type de gradient et entrer les valeurs correspondantes
   */
const GradientControl = ({ gradientType, gradientValue, setAttributes }) => {

    
    return createElement(
      PanelBody,
      { title: __("Paramètres du dégradé", "ocade-blocks"), initialOpen: false },
      createElement(
        PanelRow,
        {},
        createElement(
          Button,
         
          {
            isPrimary: gradientType === "direction",
            isSecondary: gradientType !== "direction",
            onClick: () =>
              setAttributes({
                gradientType: "direction",
                gradientValue: "to top",
              }),
          },
          __("Direction", "ocade-blocks")
        ),
        createElement(
          Button,
          {
            isPrimary: gradientType === "degree",
            isSecondary: gradientType !== "degree",
            onClick: () =>
              setAttributes({ gradientType: "degree", gradientValue: "0" }),
          },
          __("Degré", "ocade-blocks")
        )
      ),
      gradientType === "direction" &&
        createElement(
          PanelRow,
          {
            title: __("Paramètres du dégradé", "ocade-blocks"),
            initialOpen: false,
          },
          createElement(RadioControl, {
            label: __("Direction", "ocade-blocks"),
            style: {padding: "15px" }, 
            selected: gradientValue,
            options: [
              { label: __("Vers le haut", "ocade-blocks"), value: "to top" },
              { label: __("Vers le bas", "ocade-blocks"), value: "to bottom" },
              { label: __("Vers la gauche", "ocade-blocks"), value: "to left" },
              { label: __("Vers la droite", "ocade-blocks"), value: "to right" },
            ],
            onChange: (value) => setAttributes({ gradientValue: value }),
          })
        ),
      gradientType === "degree" &&
        createElement(AnglePickerControl, {
          label: __("Degré", "ocade-blocks"),
          style: { padding: "15px" }, 
          value: gradientValue,
          onChange: (value) => setAttributes({ gradientValue: value }),
        })
    );
  };
  
  /**
   * Composant réutilisable pour les contrôles de palette de couleurs
   */
  const CustomColorPalette = ({ label, value, onChange, colors }) => {
    return createElement(ColorPalette, {
      label: __(label, "ocade-blocks"),
      value,
      onChange,
      colors,
    });
  };
  
  
/**
 * Déclare notre attribut personnalisé block.json
 */
const setSidebarControlAttribute = (settings, name) => {
  if (!enableSidebarControlOnBlocks.includes(name)) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      customBorderRadius: { type: "number", default: 0 },
      customBorderColorTop: { type: "string" },
      customBorderColorRight: { type: "string" },
      customBorderColorBottom: { type: "string" },
      customBorderColorLeft: { type: "string" },
      customBorderRadiusTopLeft: { type: "number", default: 0 },
      customBorderRadiusTopRight: { type: "number", default: 0 },
      customBorderRadiusBottomRight: { type: "number", default: 0 },
      customBorderRadiusBottomLeft: { type: "number", default: 0 },
      gradientColor1: { type: "string", default: "" },
      gradientColor2: { type: "string", default: "" },
      gradientColor3: { type: "string", default: "" },
      gradientType: { type: "string", default: "direction" },
      gradientValue: { type: "string", default: "to right" },
      customPadding: { type: "number", default: 0 }, // Attribut pour le padding
    },
  };
};


/**
 * Composant INSPECTEUR
 */

const CustomInspectorControls = ({ attributes, setAttributes }) => {
  const {
    customBorderRadius,
    gradientColor1,
    gradientColor2,
    gradientColor3,
    gradientType,
    gradientValue,
    customPadding,
  } = attributes;

  const allColorsSelected = gradientColor1 && gradientColor2 && gradientColor3;

  const resetAttributes = () => {
    setAttributes({
      customBorderRadius: 0,
      gradientColor1: "",
      gradientColor2: "",
      gradientColor3: "",
      gradientType: "direction",
      gradientValue: "to right",
      customPadding: 0,
    });
  };

  return createElement(
    InspectorControls,
    { className: "custom-inspector-controls" },
    createElement(
      "style",
      {},
      `
           .block-editor-block-inspector .components-panel__body:not(.block-editor-block-inspector__advanced) {
          background-color: #e0f3ff;; 
          padding: 15px;
        }
        `
    ),
    createElement(
      PanelBody,
      {
        title: __("Réglages personnalisés", "ocade-blocks"),
        initialOpen: false,
        style: { backgroundColor: "#f0f0f0", padding: "15px" }, // Style appliqué directement
      },
      createElement(
        Button,
        {
          isSecondary: true,
          onClick: resetAttributes,
        },
        __("Réinitialiser les paramètres", "ocade-blocks")
      ),
      createElement(
        PanelBody,
        {
          title: __("Rayon de bordure personnalisé", "ocade-blocks"),
          initialOpen: false,
        },
        createElement(RangeControl, {
          label: __("Rayon de bordure personnalisé", "ocade-blocks"),
          value: customBorderRadius,
          onChange: (value) => setAttributes({ customBorderRadius: value }),
          min: 0,
          max: 1000,
        })
      ),
      createElement(
        PanelBody,
        {
          title: __("Padding personnalisé", "ocade-blocks"),
          initialOpen: false,
        },
        createElement(RangeControl, {
          label: __("Padding personnalisé", "ocade-blocks"),
          value: customPadding,
          onChange: (value) => setAttributes({ customPadding: value }),
          min: 0,
          max: 100,
        })
      ),
      createElement(
        PanelBody,
        {
          title: __("Paramètres du dégradé", "ocade-blocks"),
          initialOpen: false,
        },
        !allColorsSelected &&
        createElement(
          Notice,
          { status: "warning", isDismissible: false },
          __(
            "Sélectionnez les 3 couleurs de gradient pour que le dégradé linéaire soit visible.",
            "ocade-blocks"
          )
        ),
        createElement(
          "div",
          { className: "color-picker-container" },
          createElement("label", {}, __("Couleur du dégradé 1", "ocade-blocks")),
          createElement(ColorPicker, {
            color: gradientColor1,
            onChangeComplete: (value) => setAttributes({ gradientColor1: value.hex }),
          })
        ),
        createElement(
          "div",
          { className: "color-picker-container" },
          createElement("label", {}, __("Couleur du dégradé 2", "ocade-blocks")),
          createElement(ColorPicker, {
            color: gradientColor2,
            onChangeComplete: (value) => setAttributes({ gradientColor2: value.hex }),
          })
        ),
        createElement(
          "div",
          { className: "color-picker-container" },
          createElement("label", {}, __("Couleur du dégradé 3", "ocade-blocks")),
          createElement(ColorPicker, {
            color: gradientColor3,
            onChangeComplete: (value) => setAttributes({ gradientColor3: value.hex }),
          })
        ),

     
        createElement(GradientControl, {
          gradientType,
          gradientValue,
          setAttributes,
        })
      )
    )
  );
};

/**
 * HOC pour ajouter les contrôles personnalisés à l'éditeur de blocs.
 */
const withSidebarControl = createHigherOrderComponent(
  (BlockEdit) => (props) => {
    if (!enableSidebarControlOnBlocks.includes(props.name)) {
      return createElement(BlockEdit, props);
    }

    return createElement(
      Fragment,
      {},
      createElement(BlockEdit, props),
      createElement(CustomInspectorControls, {
        attributes: props.attributes,
        setAttributes: props.setAttributes,
      })
    );
  },
  "withSidebarControl"
);

/**
 * Ajoute une classe et un style personnalisés Coté editeur
 */

const withSidebarControlProp = createHigherOrderComponent(
    (BlockListBlock) => (props) => {
      if (!enableSidebarControlOnBlocks.includes(props.name)) {
        return createElement(BlockListBlock, props);
      }
  
      const { attributes } = props;
      const {
        customBorderRadius,
        gradientColor1,
        gradientColor2,
        gradientColor3,
        gradientType,
        gradientValue,
        customPadding,
      } = attributes;
  
      const gradient =
        gradientType === "direction" ? gradientValue : `${gradientValue}deg`;
  
      const customStyles = {
        borderRadius: `${customBorderRadius}px`,
        background: `linear-gradient(${gradient}, ${gradientColor1}, ${gradientColor2}, ${gradientColor3})`,
        padding: `${customPadding}px`,
      };
  
      return createElement(
        Fragment,
        {},
        createElement(BlockListBlock, {
          ...props,
          className: classnames(props.className),
          style: null, // Remet à zéro les styles appliqués à la figure
        }),
        createElement(
          "style",
          {},
          `

              #block-${props.clientId} img {
                  border-radius: ${customStyles.borderRadius};
                  background: ${customStyles.background};
                  padding: ${customStyles.padding};
              }
          `
        )
      );
    },
    "withSidebarControlProp"
  );
  

/**
 * Sauvegarde les attributs personnalisés sauvegardés dans le bloc.
 */
const saveSidebarControlAttribute = (extraProps, blockType, attributes) => {
  if (enableSidebarControlOnBlocks.includes(blockType.name)) {
    const {
      customBorderRadius,
      gradientColor1,
      gradientColor2,
      gradientColor3,
      gradientType,
      gradientValue,
      customPadding,
    } = attributes;
    const gradient =
      gradientType === "direction" ? gradientValue : `${gradientValue}deg`;

    extraProps.className = classnames(extraProps.className);

    const customStyles = {
        padding: `0px`,
    };

    if (customPadding > 0) customStyles.padding = `${customPadding}px`;
    if (customBorderRadius > 0)
      customStyles.borderRadius = `${customBorderRadius}px`;
    if (gradientColor1 && gradientColor2 && gradientColor3)
      customStyles.background = `linear-gradient(${gradient}, ${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;
    extraProps.style = {
      ...extraProps.style,
      ...customStyles,
    };

  }
  return extraProps;
};


  
/**
 * Regroupe tous les appels addFilter dans une seule fonction pour étendre le core block
 */
const registerFilters = () => {
  addFilter(
    "blocks.registerBlockType",
    "coreblockimage/set-sidebar-control-attribute",
    setSidebarControlAttribute
  );

  addFilter(
    "editor.BlockEdit",
    "coreblockimage/with-sidebar-control",
    withSidebarControl
  );

  addFilter(
    "editor.BlockListBlock",
    "coreblockimage/with-sidebar-control-prop",
    withSidebarControlProp
  );

  addFilter(
    "blocks.getSaveContent.extraProps",
    "coreblockimage/save-sidebar-control-attribute",
    saveSidebarControlAttribute
  );
};

// Appel de la fonction pour enregistrer les filtres
registerFilters();
