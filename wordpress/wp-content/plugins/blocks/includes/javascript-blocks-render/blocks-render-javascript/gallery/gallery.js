document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".wp-block-gallery");

  if (galleries.length) {
    /** Variables */
    let wrapperModal;
    let arrowLeft;
    let arrowRight;
    let imagePrincipale;
    let wrapperGallery;
    let imagesGallery;
    let areArrowsBound = false;
    let mouseStartX = 0;
    let mouseEndX = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleSwipe = () => {
      const threshold = 50; // Définissez ici la sensibilité du swipe en pixels

      if (touchEndX < touchStartX - threshold) {
        nextImage();
      } else if (touchEndX > touchStartX + threshold) {
        previousImage();
      }
    };

    /** Fonction de création de la modal */
    const createModal = () => {
      /**************** WRAPPER MODAL ****************** */
      const modal = document.createElement("span");
      modal.id = "modal-gallery";
      modal.style.display = "none";
      wrapperModal = modal;

      /**************** WRAPPER FLECHES + IMAGE ****************** */
      /** Wrapper */
      const wrapper = document.createElement("div");
      wrapper.id = "modal-gallery-wrapper";
      wrapperPrincipal = wrapper;
      modal.appendChild(wrapper);

      /** Flèche Gauche */
      const arrowL = document.createElement("span");
      arrowL.id = "modal-gallery-arrow-left";
      arrowL.title = "Précédent";
      arrowLeft = arrowL;

      /** Flèche Droite */
      const arrowR = document.createElement("span");
      arrowR.id = "modal-gallery-arrow-right";
      arrowR.title = "Suivant";
      arrowRight = arrowR;

      /** Croix Fermeture */
      const close = document.createElement("span");
      close.id = "modal-gallery-close";
      close.innerHTML = "&times;";
      close.title = "Fermer";
      close.addEventListener("click", () => closeModal());

      /** Création de l'image */
      // Créer un span pour l'image
      const imageWrapper = document.createElement("span");
      imageWrapper.id = "modal-gallery-image-wrapper";
      const image = document.createElement("img");
      image.id = "modal-gallery-image";
      imagePrincipale = image;
      imageWrapper.appendChild(image);

      /** Ajout des flèches + image + btn close dans la modal */
      wrapper.appendChild(arrowL);
      wrapper.appendChild(arrowR);
      wrapper.appendChild(close);
      wrapper.appendChild(imageWrapper);

      /**************** WRAPPER IMAGES GALLERY ****************** */
      const wrapperGal = document.createElement("div");
      wrapperGal.id = "modal-gallery-wrapper-gallery";
      wrapperGallery = wrapperGal;
      modal.appendChild(wrapperGal);

      /**************** Modal dans Body ****************** */
      const html = document.querySelector("html");
      html.appendChild(modal);
    };

    const handleMouseSwipe = () => {
      if (mouseEndX < mouseStartX) nextImage();
      if (mouseEndX > mouseStartX) previousImage();
    };

    const chargerImagePrincipale = (src) => {
      // Tentative de chargement de l'image originale
      fetch(src)
        .then(response => {
          if (!response.ok) throw new Error('Échec de chargement');
          // Si l'image se charge correctement, on l'utilise telle quelle
          imagePrincipale.src = src;
        })
        .catch(error => {
          // En cas d'échec, on modifie l'URL pour ajouter "-scaled"
          console.error("Image originale non chargée, tentative avec '-scaled': ", error);
          const nouvelleSrc = src.replace(".webp", "-scaled.webp");
		  console.log(nouvelleSrc);
          imagePrincipale.src = nouvelleSrc;
        });
    }

    const switchImage = (img) => {
      src = (img.src.match(/-\d+x\d+\.\w+$/)) ? (img.src.replace(/(.*)(-\d+x\d+)(\.\w+)$/, (match, p1, p2, p3) => p1 + "" + p3 )) : (img.src);
      chargerImagePrincipale(src);
      // imagePrincipale.src = (img.src.match(/-\d+x\d+\.\w+$/)) ? (img.src.replace(/(.*)(-\d+x\d+)(\.\w+)$/, (match, p1, p2, p3) => p1 + "" + p3 )) : (img.src);
      const idWrapperImagePrincipal = document.getElementById("modal-gallery-image-wrapper");
      if (idWrapperImagePrincipal) idWrapperImagePrincipal.style.setProperty('--legende', `'${img.legende}'`);
      (img.legende) ? ( idWrapperImagePrincipal.classList.add('has-legende') )  : ( idWrapperImagePrincipal.classList.remove('has-legende') );
      wrapperGallery.querySelector(".active").className = "";
      img.className = "active";
    };

    /** Fonction d'ouverture de la modal */
    const openModal = (images, index) => {
      wrapperModal.style.display = "flex";
      isModalOpen = true;
      document.body.style.overflow = "hidden"; // Empêche le scroll de la page

      /** Remplir le wrapperGallery avec les images et mettre une classe active sur l'image correspondant à index */
      images.forEach((image, i) => {
        const img = document.createElement("img");
        img.src = (image.src.match(/-\d+x\d+\.\w+$/)) ? (image.src.replace(/(.*)(-\d+x\d+)(\.\w+)$/, (match, p1, p2, p3) => p1 + "-150x150" + p3 )) : (image.src);
        // img.src = image.src.replace(/-\d+x\d+/, "-150x150"); // On prend l'image full
        img.className = i === index ? "active" : "";
        img.title = image.title || "Voir l'image en grand";
        img.legende = image.legende;
        /** ajout un event click qui change la src de imagePrincipale */
        img.addEventListener("click", () => switchImage(img));
        wrapperGallery.appendChild(img);
      });
      imagesGallery = Array.from(wrapperGallery.querySelectorAll("img"));

      /** Ajout des events */
      if (!areArrowsBound) {
        arrowLeft.addEventListener("click", () => previousImage());
        arrowRight.addEventListener("click", () => nextImage());
        imagePrincipale.addEventListener("dragstart", function (event) {
          event.preventDefault();
        });

        // Pour les navigateurs mobiles
        imagePrincipale.addEventListener(
          "touchstart",
          (e) => (touchStartX = e.changedTouches[0].screenX)
        );
        imagePrincipale.addEventListener("touchend", (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
        });

        // Pour les navigateurs de bureau
        imagePrincipale.addEventListener(
          "mousedown",
          (e) => (mouseStartX = e.screenX)
        );
        imagePrincipale.addEventListener("mouseup", (e) => {
          mouseEndX = e.screenX;
          handleMouseSwipe();
        });

        areArrowsBound = true;
      }
    };

    /** Fonction de fermeture de la modal */
    const closeModal = () => {
      wrapperModal.style.display = "none";
      isModalOpen = false;
      document.body.style.overflow = "auto"; // Réactive le scroll de la page
      wrapperGallery.innerHTML = "";
    };

    /** Recherche index actif */
    const findIndexActive = () => {
      const index = imagesGallery.findIndex(
        (image) => image.className === "active"
      );
      return index;
    };

    /** Render Modal */
    const renderModal = () => {
      imagePrincipale.src = imagesGallery[findIndexActive()].src.replace(
        /-\d+x\d+/,
        ""
      ); // On prend l'image full
      const idWrapperImagePrincipal = document.getElementById("modal-gallery-image-wrapper");
      if (idWrapperImagePrincipal) idWrapperImagePrincipal.style.setProperty('--legende', `'${imagesGallery[findIndexActive()].legende}'`);
      (imagesGallery[findIndexActive()].legende) ? ( idWrapperImagePrincipal.classList.add('has-legende') )  : ( idWrapperImagePrincipal.classList.remove('has-legende') );
    };

    /** Next */
    const nextImage = () => {
      const index = findIndexActive();
      if (index < imagesGallery.length - 1) {
        switchImage(imagesGallery[index + 1]);
        imagesGallery.forEach(
          (image, i) => (image.className = i === index + 1 ? "active" : "")
        );
      } else {
        switchImage(imagesGallery[0]);
        imagesGallery.forEach(
          (image, i) => (image.className = i === 0 ? "active" : "")
        );
      }
    };

    /** Previous */
    const previousImage = () => {
      const index = findIndexActive();
      if (index > 0) {
        switchImage(imagesGallery[index - 1]);
        imagesGallery.forEach(
          (image, i) => (image.className = i === index - 1 ? "active" : "")
        );
      } else {
        switchImage(imagesGallery[imagesGallery.length - 1]);
        imagesGallery.forEach(
          (image, i) =>
            (image.className = i === imagesGallery.length - 1 ? "active" : "")
        );
      }
    };

    /************************** RUN SCRIPT ************************ */
    createModal(); // Création de la modal
    let isModalOpen = false; // Variable pour savoir si la modal est ouverte ou non
    wrapperModal.addEventListener("click", (e) =>
      e.target === wrapperModal ? closeModal() : null
    ); // Ferme la modal si on clique en dehors de l'image

    /** Pour chaque galleries */
    galleries.forEach((gallery) => {
      const images = gallery.querySelectorAll("img");
      if (images.length) {
        images.forEach((image, index) => {
          const figcaption = image.nextElementSibling;
          (figcaption && figcaption.tagName === "FIGCAPTION") ? image.legende = figcaption.textContent : image.legende = "";
          
          image.addEventListener("click", () => {
            /** Ouvre la modal */
            if (!isModalOpen) openModal(images, index);
            renderModal(index);
          });
        });
      }
    });

    /** Event pour intéragir avec les touches du clavier */
    document.addEventListener("keydown", (e) => {
      if (isModalOpen) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") previousImage();
        if (e.key === "ArrowRight") nextImage();
      }
    });
  }
});
