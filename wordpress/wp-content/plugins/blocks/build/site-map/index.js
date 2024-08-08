/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/site-map/edit-block.js":
/*!************************************!*\
  !*** ./src/site-map/edit-block.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);





/**
 * Render the block in the editor.
 */
function Block({
  attributes,
  customPostTypes,
  nestedCategories
}) {
  const {
    excludedCPTItems,
    excludedCategories,
    openInNewTab,
    hasCPT,
    excludedArticles,
    showPosts
  } = attributes;
  const isCategoryExcluded = category => {
    return excludedCategories[category.id];
  };

  // Template pour catégories liées à un article
  const renderCategoryItems = categories => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "category-list"
    }, Object.values(categories).map(category => {
      if (isCategoryExcluded(category)) {
        return null;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: "category-item",
        key: category.id
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
        className: "category-title"
      }, category.name), showPosts && category.posts && category.posts.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
        className: "posts-list"
      }, category.posts.filter(post => !excludedArticles[post.id]).map(post => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: "post-item",
        key: post.id
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: post.link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, post.title.rendered)))), category.children && category.children.length > 0 && renderCategoryItems(category.children));
    }));
  };

  // Determine si l'élement contient la clé parent qui est > 0
  const getItemStyle = item => {
    return item.parent > 0 ? {
      marginLeft: '20px'
    } : {};
  };

  // Vérifie si un élément CPT est exclu
  const isItemSelected = (item, type) => {
    return !!excludedCPTItems[type]?.[item.id];
  };

  // Organise les données des CPT en structure hiérarchique
  const organizeCPTData = () => {
    const organizedData = {};
    Object.keys(customPostTypes).forEach(cptType => {
      const items = Array.isArray(customPostTypes[cptType]) ? customPostTypes[cptType] : [];
      const hierarchy = items.reduce((acc, item) => {
        if (!isItemSelected(item, cptType)) {
          acc[item.id] = {
            ...item,
            children: []
          };
        }
        return acc;
      }, {});
      items.forEach(item => {
        if (hierarchy[item.id] && item.parent && hierarchy[item.parent]) {
          hierarchy[item.parent].children.push(hierarchy[item.id]);
        }
      });
      organizedData[cptType] = Object.values(hierarchy).filter(item => !item.parent);
    });
    return organizedData;
  };
  const organizedCPTContents = organizeCPTData();

  // Rendu récursif des éléments CPT
  const renderCPTItems = (items, cptType) => items.map((item, index) => {
    if (isItemSelected(item, cptType)) return null;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: item.parent === 0 ? 'cpt-header' : 'cpt-item',
      style: getItemStyle(item)
    }, item.parent === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "cpt-title"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link,
      target: openInNewTab ? '_blank' : '_self',
      rel: openInNewTab ? 'noopener noreferrer' : ''
    }, item.title.rendered)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link,
      target: openInNewTab ? '_blank' : '_self',
      rel: openInNewTab ? 'noopener noreferrer' : ''
    }, item.title.rendered), item.children && item.children.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "children-list"
    }, renderCPTItems(item.children, cptType)));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cpt-contents"
  }, Object.keys(organizedCPTContents).map(cptType => hasCPT[cptType] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: cptType,
    className: `cpt-section cpt-section-${cptType}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "cpt-section-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(cptType.charAt(0).toUpperCase() + cptType.slice(1), 'ocade-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "cpt-items-list"
  }, cptType === 'post' ? renderCategoryItems(Object.values(nestedCategories)) : renderCPTItems(organizedCPTContents[cptType], cptType))))));
}

/***/ }),

/***/ "./src/site-map/edit-inspecteur.js":
/*!*****************************************!*\
  !*** ./src/site-map/edit-inspecteur.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspecteur)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/site-map/block.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);







function Inspecteur({
  attributes,
  setAttributes,
  customPostTypes,
  nestedCategories
}) {
  const {
    excludedCPTItems,
    excludedCategories,
    excludedArticles,
    hasCPT,
    openInNewTab,
    anchor,
    showPosts
  } = attributes;

  // Initialisation de 'hasCPT' avec 'page' et 'Categorie des articles' à true par défaut
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    let updated = false;
    let newHasCPT = {
      ...hasCPT
    };
    if (newHasCPT["page"] === undefined) {
      newHasCPT["page"] = true;
      updated = true;
    }
    if (newHasCPT["categorie"] === undefined) {
      newHasCPT["categorie"] = true;
      updated = true;
    }
    if (updated) {
      setAttributes({
        hasCPT: newHasCPT
      });
    }
  }, []);
  // ajout de la clé anchor
  const handleAnchorChange = newAnchor => {
    setAttributes({
      anchor: newAnchor
    });
  };

  // Assigne les ids par rapport aus noms d'articles
  const createArticleNameToIdMap = nestedCategories => {
    const map = {};
    const addArticlesToMap = categories => {
      categories.forEach(category => {
        category.posts.forEach(post => {
          map[post.title.rendered] = post.id;
        });
        if (category.children && category.children.length > 0) {
          addArticlesToMap(category.children);
        }
      });
    };
    addArticlesToMap(Object.values(nestedCategories));
    return map;
  };
  const articleNameToIdMap = createArticleNameToIdMap(nestedCategories);

  /**
   * Assigne les ids par rapport aus noms des customs post types ou catégories
   */
  function createNameToIdMap(categories, type) {
    const map = {};
    const addItemsToMap = categories => {
      categories.forEach(category => {
        if (type === "category") {
          map[category.name] = category.id;
        } else {
          category?.posts?.forEach(post => {
            map[post.title.rendered] = post.id;
          });
        }
        if (category.children && category.children.length > 0) {
          addItemsToMap(category.children);
        }
      });
    };
    addItemsToMap(Object.values(categories));
    return map;
  }

  // Assigne les ids par rapport aus noms des catégories
  const categoryNameToIdMap = createNameToIdMap(nestedCategories, "category");

  // Met à jours la liste des catégories à exclure
  const updateExcludedCategories = categoryNames => {
    const updatedExcludedCategories = categoryNames.reduce((acc, categoryName) => {
      const categoryId = categoryNameToIdMap[categoryName];
      if (categoryId) {
        acc[categoryId] = true;
      }
      return acc;
    }, {});
    setAttributes({
      excludedCategories: updatedExcludedCategories
    });
  };

  // Affiche isChecked/unChecked par post type
  const handleCptCheckbox = (type, isChecked) => {
    setAttributes({
      ...attributes,
      hasCPT: {
        ...hasCPT,
        [type]: isChecked
      }
    });
  };

  // Affiche les articles isChecked/unChecked
  const togglePostsDisplay = () => {
    console.log("showpost", showPosts);
    setAttributes({
      showPosts: !showPosts
    });
  };

  // Capitalise la première lettre de chaque titre
  const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  // Affichage des titres selon le type de post
  const postTypeTitleDisplay = type => {
    if (type === "post") {
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" Catégories des Articles", "ocade-blocks");
    } else if (type === "page") {
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pages", "ocade-blocks");
    } else {
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(capitalizeFirstLetter(type), "ocade-blocks");
    }
  };

  // Récupération de la liste de toutes les catégories
  const getAllCategories = categories => {
    const allCategories = [];
    const addCategories = categories => {
      categories.forEach(category => {
        allCategories.push(category.name);
        if (category.children && category.children.length > 0) {
          addCategories(category.children);
        }
      });
    };
    addCategories(Object.values(categories));
    return allCategories;
  };

  // Récupération de la liste de tout les articles
  const getAllArticles = categories => {
    const allArticles = [];
    const addArticles = categories => {
      categories.forEach(category => {
        category.posts.forEach(post => {
          allArticles.push(post.title.rendered);
        });
        if (category.children && category.children.length > 0) {
          addArticles(category.children);
        }
      });
    };
    addArticles(Object.values(categories));
    return allArticles;
  };

  // Assigne les ids par rapport aus noms des customs post types
  const createCPTTitleToIdMap = customPostTypes => {
    const titleToIdMap = {};
    Object.keys(customPostTypes).forEach(type => {
      customPostTypes[type].forEach(item => {
        titleToIdMap[item.title.rendered] = item.id;
      });
    });
    return titleToIdMap;
  };
  const cptTitleToIdMap = createCPTTitleToIdMap(customPostTypes);

  // Met à jours la liste des customs post type à exclure
  const updateExcludedCPTItems = (type, selectedTitles) => {
    const updatedExclusions = selectedTitles.reduce((acc, title) => {
      const itemId = cptTitleToIdMap[title];
      if (itemId) {
        acc[itemId] = true;
      }
      return acc;
    }, {});
    setAttributes({
      ...attributes,
      excludedCPTItems: {
        ...excludedCPTItems,
        [type]: updatedExclusions
      }
    });
  };
  const updateExcludedArticles = articleTitles => {
    const updatedExcludedArticles = articleTitles.reduce((acc, title) => {
      const articleId = articleNameToIdMap[title];
      if (articleId) {
        acc[articleId] = true;
      }
      return acc;
    }, {});
    setAttributes({
      excludedArticles: updatedExcludedArticles
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    style: {
      display: "flex",
      justifyContent: "center",
      width: "80%",
      margin: "0 auto .65rem"
    },
    title: "Remettre \xE0 z\xE9ro les param\xE8tres du bloc ?",
    onClick: () => {
      setAttributes((0,_utils__WEBPACK_IMPORTED_MODULE_4__.resetAttributes)(_block_json__WEBPACK_IMPORTED_MODULE_2__));
    }
  }, "R\xE9initialiser le bloc"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paramètres d'affichage", "ocade-blocks")
  }, Object.keys(customPostTypes).map(type => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    key: type,
    label: postTypeTitleDisplay(type),
    checked: hasCPT[type] || false,
    onChange: isChecked => handleCptCheckbox(type, isChecked)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Articles", "text-domain"),
    checked: showPosts,
    onChange: togglePostsDisplay
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ouverture des liens", "ocade-blocks"),
    checked: openInNewTab,
    onChange: () => setAttributes({
      openInNewTab: !openInNewTab
    }),
    help: openInNewTab ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Nouvel onglet", "ocade-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Même onglet", "ocade-blocks")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Exclure des Catégories", "ocade-blocks"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormTokenField, {
    value: Object.keys(excludedCategories).map(id => {
      return Object.keys(categoryNameToIdMap).find(name => categoryNameToIdMap[name] === parseInt(id));
    }),
    suggestions: getAllCategories(nestedCategories),
    onChange: updateExcludedCategories,
    __experimentalExpandOnFocus: true,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ajoutez des catégories à exclure", "ocade-blocks")
  })), Object.keys(customPostTypes).map((type, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    key: index,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Exclure des " + postTypeTitleDisplay(type), "ocade-blocks"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormTokenField, {
    value: type === "post" ? Object.keys(excludedArticles).map(id => {
      return Object.keys(articleNameToIdMap).find(title => articleNameToIdMap[title] === parseInt(id));
    }) : Object.keys(excludedCPTItems[type] || {}).map(id => {
      return Object.keys(cptTitleToIdMap).find(title => cptTitleToIdMap[title] === parseInt(id));
    }),
    suggestions: type === "post" ? getAllArticles(nestedCategories) : customPostTypes[type].map(item => item.title.rendered),
    onChange: selectedTitles => type === "post" ? updateExcludedArticles(selectedTitles) : updateExcludedCPTItems(type, selectedTitles),
    __experimentalExpandOnFocus: true,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Que voulez-vous exclure ?", "ocade-blocks")
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Paramètres Avancés", "ocade-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ID d'Ancre", "ocade-blocks"),
    value: anchor || "",
    onChange: handleAnchorChange,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ajoutez un ID unique pour cibler ce bloc avec un lien d'ancre.", "ocade-blocks")
  })));
}

/***/ }),

/***/ "./src/site-map/edit-toolbar.js":
/*!**************************************!*\
  !*** ./src/site-map/edit-toolbar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toolbar)
/* harmony export */ });
/**
 * Toolbar for the sitemap block.
 */
function Toolbar() {}

/***/ }),

/***/ "./src/site-map/edit.js":
/*!******************************!*\
  !*** ./src/site-map/edit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-toolbar */ "./src/site-map/edit-toolbar.js");
/* harmony import */ var _edit_inspecteur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-inspecteur */ "./src/site-map/edit-inspecteur.js");
/* harmony import */ var _edit_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-block */ "./src/site-map/edit-block.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _preview_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview.gif */ "./src/site-map/preview.gif");











/**
 *  @return  {React.ReactElement}
 */
function Edit({
  attributes,
  setAttributes
}) {
  // État pour stocker les types de publications personnalisées
  const [customPostTypes, setCustomPostTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({});
  const [categories, setCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({});
  const [cptDetails, setCptDetails] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({});
  const [nestedCategories, setNestedCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({});
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  if (attributes?.preview || false) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      width: 450,
      src: _preview_gif__WEBPACK_IMPORTED_MODULE_8__,
      alt: "Aper\xE7u"
    });
  }

  // Récuperation des catégories
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const categoriesData = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
          path: '/wp/v2/categories?per_page=100'
        });
        const categoriesMap = categoriesData.reduce((acc, category) => {
          acc[category.id] = {
            ...category,
            posts: [],
            children: []
          };
          return acc;
        }, {});
        setCategories(categoriesMap);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setNotice({
          status: 'error',
          content: 'Erreur lors de la récupération des catégories.'
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);
  const nestCategories = categoriesMap => {
    const nestedCategories = {};
    Object.values(categoriesMap).forEach(cat => {
      if (cat.parent === 0) {
        nestedCategories[cat.id] = cat;
      } else if (categoriesMap[cat.parent]) {
        categoriesMap[cat.parent].children.push(cat);
      }
    });
    return nestedCategories;
  };

  // Récuperation des articles par catégories
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const fetchPostsForCategories = async () => {
      if (Object.keys(categories).length === 0) return;
      setIsLoading(true);
      const categoriesCopy = {
        ...categories
      };
      try {
        const posts = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
          path: `/wp/v2/posts?per_page=100`
        });
        posts.forEach(post => {
          post.categories.forEach(catId => {
            if (categoriesCopy[catId]) {
              categoriesCopy[catId].posts.push(post);
            }
          });
        });
        setNestedCategories(nestCategories(categoriesCopy));
      } catch (error) {
        console.error('Error fetching posts:', error);
        setNotice({
          status: 'error',
          content: 'Erreur lors de la récupération des articles par catégories.'
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostsForCategories();
  }, [categories]);

  // Récupérer et filtrer les types de publications personnalisées
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const fetchCustomPostTypes = async () => {
      setIsLoading(true);
      try {
        const types = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
          path: '/wp/v2/types'
        });
        const excluded = ['attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_template', 'wp_template_part', '404', 'header', 'footer', 'kb_icon', 'wp_navigation', 'wp_template', 'wp_template_part', 'kadence_form', 'kadence_lottie', 'kb_icon', 'has_archive', 'attachment', 'product'];
        // Filtre les types de publications personnalisés Ocade ajoute dans les descriptions de ces CPT le préfixe "CPT:" ce qui permet de les identifier.
        const filteredTypes = Object.entries(types).reduce((acc, [key, value]) => {
          if (!value.description.startsWith('CPT:') && !excluded.includes(key)) {
            acc[key] = value;
          }
          return acc;
        }, {});
        setCustomPostTypes(filteredTypes);
      } catch (error) {
        console.error('Erreur lors de la récupération des CPT :', error);
        setNotice({
          status: 'error',
          content: 'Erreur lors de la récupération des types de publications personnalisées.'
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchCustomPostTypes();
  }, []);

  // Récuperer le contenu id de chaque type de publications personnalisées
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const fetchDataForTypes = async () => {
      const fetchedData = {};
      setIsLoading(true);
      for (const type in customPostTypes) {
        if (customPostTypes.hasOwnProperty(type) && customPostTypes[type].rest_base) {
          try {
            const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
              path: `/wp/v2/${customPostTypes[type].rest_base}`
            });
            fetchedData[type] = data;
          } catch (error) {
            console.error(`Erreur lors de la récupération des contenus pour ${type} : `, error);
            setNotice({
              status: 'error',
              content: 'Erreur lors du contenu des publications personnalisées.'
            });
          } finally {
            setIsLoading(false);
          }
        }
      }
      setCptDetails(fetchedData);
    };
    if (Object.keys(customPostTypes).length > 0) fetchDataForTypes();
  }, [customPostTypes]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  if (isLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Spinner, null);
  }

  // template pour retourner des erreurs
  const renderNotice = () => {
    if (notice) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Notice, {
        status: notice.status,
        onRemove: () => setNotice(null),
        isDismissible: true
      }, notice.content);
    }
    return null;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderNotice(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    customPostTypes: cptDetails,
    blockProps,
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_inspecteur__WEBPACK_IMPORTED_MODULE_3__["default"], {
    customPostTypes: cptDetails,
    nestedCategories: nestedCategories,
    blockProps,
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    customPostTypes: cptDetails,
    nestedCategories: nestedCategories,
    blockProps,
    attributes,
    setAttributes
  }));
}

/***/ }),

/***/ "./src/site-map/save.js":
/*!******************************!*\
  !*** ./src/site-map/save.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);




/**
 *
 * @return  {React.ReactElement}
 */
function save() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  });
}

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

/***/ "./src/site-map/icon.webp":
/*!********************************!*\
  !*** ./src/site-map/icon.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icon.a15afd56.webp";

/***/ }),

/***/ "./src/site-map/preview.gif":
/*!**********************************!*\
  !*** ./src/site-map/preview.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/preview.4edcee14.gif";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

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

/***/ "./src/site-map/block.json":
/*!*********************************!*\
  !*** ./src/site-map/block.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"blocks/sitemap","title":"Plan du Site","description":"Affiche un plan du site","keywords":["plan de site","sitemap"],"category":"blocks","attributes":{"preview":{"type":"boolean","default":false},"openInNewTab":{"type":"boolean","default":false},"excludedCPTItems":{"type":"object","default":{}},"excludedCategories":{"type":"object","default":{}},"excludedArticles":{"type":"object","default":{}},"hasCPT":{"type":"object","default":{}},"showPosts":{"type":"boolean","default":false},"anchor":{"type":"string","default":""}},"example":{"attributes":{"preview":true}},"editorScript":"file:./index.js","editorStyle":"file:./editor.css","style":"file:./style.css"}');

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
/*!*******************************!*\
  !*** ./src/site-map/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.webp */ "./src/site-map/icon.webp");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/site-map/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/site-map/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/site-map/save.js");








const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
  src: _icon_webp__WEBPACK_IMPORTED_MODULE_3__,
  width: 30,
  height: 30
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plan du Site', 'blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Affiche le plan du site', 'blocks'),
  icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map