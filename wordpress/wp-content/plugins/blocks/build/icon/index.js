/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/icon/custom-icon.js":
/*!*********************************!*\
  !*** ./src/icon/custom-icon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SvgComponent() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 700 700"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#f06"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M528.965 470.408V79.948h-356.57v390.46L350.68 606.416z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M651.23 7.755c-8.343 0-15.697 3.95-20.524 10.005H70.646c-4.832-6.055-12.18-10.005-20.524-10.005-14.56 0-26.365 11.809-26.365 26.365 0 14.555 11.81 26.366 26.365 26.366 8.237 0 15.49-3.85 20.327-9.766h37.013v460.062l243.21 181.915 243.21-181.915V50.72h37.012c4.833 5.916 12.096 9.766 20.328 9.766 14.56 0 26.365-11.81 26.365-26.366-.005-14.55-11.8-26.354-26.36-26.354zm-90.14 479.379l-210.422 162.72-210.422-162.72V50.712h420.83z"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgComponent);

/***/ }),

/***/ "./src/icon/edit-block.js":
/*!********************************!*\
  !*** ./src/icon/edit-block.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iconSelector */ "./src/iconSelector.js");





function Block(props) {
  const {
    blockProps,
    attributes,
    setAttributes
  } = props;
  const {
    icon,
    color,
    tag,
    backgroundColor,
    borderRadius,
    tailleContour,
    tailleIcon,
    borderColor,
    borderSize,
    borderStyle
  } = attributes;
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const Tag = tag ? tag : 'div';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isOpen ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iconSelector__WEBPACK_IMPORTED_MODULE_4__.IconSelector, {
    isOpen: isOpen,
    closeModal: closeModal,
    hasColorChoice: true,
    setIcon: (icon, color) => {
      setAttributes({
        icon,
        color
      });
    }
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius + '%',
      width: tailleContour + 'rem',
      height: tailleContour + 'rem',
      borderStyle: borderStyle,
      borderWidth: borderSize + 'rem',
      borderColor: borderColor ? borderColor : 'transparent',
      '--icon-size': tailleIcon + 'rem'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    "aria-haspopup": "true",
    variant: "secondary",
    className: "is-secondary",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sélectionnez une icône", "ocade-blocks"),
    onClick: openModal
  }, icon === "" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `icon etandard ${color} blocks-icon-picker-default`
  }, "etandard") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    className: `icon ${icon} ${color}`
  }, icon))));
}

/***/ }),

/***/ "./src/icon/edit-inspecteur.js":
/*!*************************************!*\
  !*** ./src/icon/edit-inspecteur.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspecteur)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/icon/block.json");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






function Inspecteur(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    backgroundColor,
    borderRadius,
    tailleContour,
    tailleIcon,
    borderColor,
    borderSize,
    borderStyle,
    openNewTab
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Réinitialisation', 'blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isPrimary: true,
    onClick: () => {
      setAttributes((0,_utils__WEBPACK_IMPORTED_MODULE_2__.resetAttributes)(_block_json__WEBPACK_IMPORTED_MODULE_1__));
    }
  }, "Param\xE8tres par D\xE9faut (Reset)")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Tailles', 'blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Taille Contour", 'blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Choisir la taille du contour (rem)", 'blocks'),
    value: tailleContour,
    onChange: tailleContour => setAttributes({
      tailleContour
    }),
    min: 1,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Taille Icône", 'blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Choisir la taille de l'icône (rem)", 'blocks'),
    value: tailleIcon,
    onChange: tailleIcon => setAttributes({
      tailleIcon
    }),
    min: 1,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Taille de la bordure", 'blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Choisir la taille de la bordure (rem)", 'blocks'),
    value: borderSize,
    onChange: borderSize => setAttributes({
      borderSize
    }),
    min: 0,
    max: 2,
    step: 0.01
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Couleurs', 'blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Couleurs Fond', 'blocks'),
    colorSettings: [{
      value: backgroundColor,
      onChange: backgroundColor => setAttributes({
        backgroundColor: backgroundColor ? backgroundColor : ''
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Couleur de fond", 'blocks')
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Couleurs Bordures', 'blocks'),
    colorSettings: [{
      value: borderColor,
      onChange: borderColor => setAttributes({
        borderColor: borderColor ? borderColor : ''
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Couleur de la bordure", 'blocks')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Divers', 'blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Arrondie Bordure", 'blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Arrondie autour de l'icone %", 'blocks'),
    value: borderRadius,
    onChange: borderRadius => setAttributes({
      borderRadius
    }),
    min: 0,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Style de la bordure", 'blocks'),
    value: borderStyle,
    onChange: borderStyle => setAttributes({
      borderStyle
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Solide', 'blocks'),
      value: 'solid'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pointillé', 'blocks'),
      value: 'dashed'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Point', 'blocks'),
      value: 'dotted'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Double', 'blocks'),
      value: 'double'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Rainure', 'blocks'),
      value: 'groove'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Crête', 'blocks'),
      value: 'ridge'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Interne', 'blocks'),
      value: 'inset'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Externe', 'blocks'),
      value: 'outset'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Nule', 'blocks'),
      value: 'none'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Caché', 'blocks'),
      value: 'hidden'
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Lien Icone', 'blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Ouvrir dans un nouvel onglet", 'blocks'),
    checked: openNewTab,
    onChange: openNewTab => setAttributes({
      openNewTab
    })
  })));
}

/***/ }),

/***/ "./src/icon/edit-toolbar.js":
/*!**********************************!*\
  !*** ./src/icon/edit-toolbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toolbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function Toolbar(props) {
  const {
    blockProps,
    attributes,
    setAttributes
  } = props;
  const {
    url
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    group: "block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInputButton, {
    url: url,
    onChange: url => setAttributes({
      url
    })
  })));
}

/***/ }),

/***/ "./src/icon/edit.js":
/*!**************************!*\
  !*** ./src/icon/edit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-toolbar */ "./src/icon/edit-toolbar.js");
/* harmony import */ var _edit_inspecteur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-inspecteur */ "./src/icon/edit-inspecteur.js");
/* harmony import */ var _edit_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-block */ "./src/icon/edit-block.js");
/* harmony import */ var _preview_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview.png */ "./src/icon/preview.png");







/** import image de preview.png */

function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preview,
    type
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  blockProps.className += ` is-${type}`;

  /** Quand l'utilisateur est dans le selecteur de blocks. */
  if (preview) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _preview_png__WEBPACK_IMPORTED_MODULE_6__
  }));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blockProps,
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_inspecteur__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blockProps,
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_block__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blockProps,
    attributes,
    setAttributes
  }));
}

/***/ }),

/***/ "./src/icon/save.js":
/*!**************************!*\
  !*** ./src/icon/save.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(props) {
  const {
    attributes
  } = props;
  const {
    url,
    icon,
    color,
    tag,
    backgroundColor,
    borderRadius,
    tailleContour,
    tailleIcon,
    borderColor,
    borderSize,
    borderStyle,
    openNewTab
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  const Tag = tag ? tag : 'div';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, url?.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    ...blockProps,
    href: url,
    target: openNewTab ? '_blank' : '_self',
    style: {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius + '%',
      width: tailleContour + 'rem',
      height: tailleContour + 'rem',
      borderStyle: borderStyle,
      borderWidth: borderSize + 'rem',
      borderColor: borderColor ? borderColor : 'transparent',
      '--icon-size': tailleIcon + 'rem'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    width: tailleIcon * 16,
    height: tailleIcon * 16,
    className: `icon ${icon} ${color}`
  }, icon)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius + '%',
      width: tailleContour + 'rem',
      height: tailleContour + 'rem',
      borderStyle: borderStyle,
      borderWidth: borderSize + 'rem',
      borderColor: borderColor ? borderColor : 'transparent',
      '--icon-size': tailleIcon + 'rem'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    width: tailleIcon * 16,
    height: tailleIcon * 16,
    className: `icon ${icon} ${color}`
  }, icon)));
}

/***/ }),

/***/ "./src/iconSelector.js":
/*!*****************************!*\
  !*** ./src/iconSelector.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconSelector: () => (/* binding */ IconSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);




const IconSelector = props => {
  const {
    isOpen,
    closeModal,
    setIcon,
    hasColorChoice
  } = props;
  const [icons, setIcons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const colors = wp.data.select("core/editor").getEditorSettings().colors;
  const getColor = value => wp.blockEditor.getColorObjectByColorValue(colors, value);
  const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(colors[0] || 'primary-7OO');
  const [inputValue, setInputValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [iconsFiltered, setIconsFiltered] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(icons);
  const handleInputChange = event => setInputValue(event.target.value);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setIconsFiltered(icons.filter(icon => icon.toLowerCase().includes(inputValue.toLowerCase())));
  }, [inputValue]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const iconRules = [...[...document.styleSheets].find(s => [...s.rules].find(r => r.selectorText && r.selectorText.includes(".icon."))).rules].filter(e => e.selectorText && e.selectorText.includes(".icon.")).map(e => e.selectorText.split(".icon.")[1].split(",")[0]);
    setIcons(iconRules);
    setIconsFiltered(iconRules);
  }, []);
  const getContrastColor = bgColor => {
    if (!bgColor) {
      return '';
    }
    bgColor = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(bgColor.substring(0, 2), 16); // Red
    const g = parseInt(bgColor.substring(2, 4), 16); // Green
    const b = parseInt(bgColor.substring(4, 6), 16); // Blue
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155 ? 'black' : 'white';
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "🚀 Liste des icones",
    onRequestClose: closeModal
  }, hasColorChoice ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icons-color-palette"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    disableCustomColors: true,
    value: color?.color || '#OOOOOO',
    onChange: value => {
      setColor(getColor(value));
    },
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: inputValue,
    onChange: handleInputChange,
    placeholder: "Rechercher une icone...",
    style: {
      width: "100%",
      marginTop: 16,
      padding: 8
    }
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icons editor-styles-wrapper",
    style: {
      "display": "flex",
      "flexWrap": "wrap",
      "overflow": "scroll",
      "padding": ".75rem",
      "border": "1px solid gray",
      background: getContrastColor(color?.color || "000000")
    }
  }, iconsFiltered.filter((_, index) => index % 2 === 0).map((name, index) => /** On éviter les doubles d'icones car l'ajout de is-style-couleurs-originales ajouter un doublon dans ce tableau */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    name: name,
    title: name,
    type: "button",
    key: name,
    onClick: () => {
      closeModal();
      setIcon(name, wp.editor.getColorClassName("background-color", color?.slug || 'primary-700'));
    },
    style: {
      "width": "2.35rem",
      "height": "2.35rem"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `icon ${name} ${wp.editor.getColorClassName("background-color", color?.slug || 'primary-700')}`,
    "aria-hidden": "true"
  }, name))))));
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetAttributes: () => (/* binding */ resetAttributes)
/* harmony export */ });
const resetAttributes = settings => {
  const newAttributes = {};
  const attributes = settings.attributes;
  Object.keys(attributes).map(key => {
    if (attributes[key].default !== undefined) newAttributes[key] = attributes[key].default;
  });
  return newAttributes;
};

/***/ }),

/***/ "./src/icon/preview.png":
/*!******************************!*\
  !*** ./src/icon/preview.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/preview.4557cff4.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/icon/block.json":
/*!*****************************!*\
  !*** ./src/icon/block.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"blocks/icon","version":"1.0.0","category":"blocks","keywords":["icon","image","selecteur"],"textdomain":"blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"anchor":true,"align":["left","right","center"]},"attributes":{"preview":{"type":"boolean","default":false},"icon":{"type":"string","default":""},"color":{"type":"string","default":""},"backgroundColor":{"type":"string","default":"#ffffff"},"borderRadius":{"type":"number","default":100},"tag":{"type":"string","default":"i"},"url":{"type":"string","default":""},"tailleContour":{"type":"number","default":3},"tailleIcon":{"type":"number","default":1.25},"borderColor":{"type":"string","default":"var(--wp--preset--color--primary-700)"},"borderSize":{"type":"number","default":0.3},"borderStyle":{"type":"string","default":"outset"},"openNewTab":{"type":"boolean","default":false}},"example":{"attributes":{"preview":true}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/icon/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/icon/block.json");
/* harmony import */ var _custom_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-icon */ "./src/icon/custom-icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/icon/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/icon/save.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icône', 'blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Insérer une icône ", 'blocks'),
  icon: _custom_icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map