/** 
 * Code javascript exécuté dans le navigateur.
 * 
 * Code permettant de calculer la hauteur du header dans la page afin de permettre le rendu sticky du block ocade-blocks-table.
 */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header-principale');

  function checkCollisionAndApplySticky() {
    const tablesInPage = document.querySelectorAll('.wp-block-ocade-blocks-table');
    
    tablesInPage.forEach(table => {
      // Si la classe is-sticky est présente sur le block ocade-blocks-table, on ne fait rien
      if (table.classList.contains('is-sticky')) {

        // Récupère le dernier enfant du header et sa taille et sa position (sous forme de rectangle)
        const lastHeaderChildRect = header.lastElementChild.getBoundingClientRect();

        // Récupère la position et la taille du tableau (sous forme de rectangle)
        const tableRect = table.getBoundingClientRect();

        // Récupère le premier enfant du tableau
        const firstChild = table.firstElementChild;

        // Calculer le bas de l'en-tête en tenant compte de la hauteur du dernier enfant
        const headerBottomWithLastChild = lastHeaderChildRect.top + lastHeaderChildRect.height;

        // Le header possède il la classe sticky ?
        const isStickyHeader = header.classList.contains('is-header-sticky') || header.classList.contains('is-breadcrumb-sticky');

        // Vérifier si le tableau et l'en-tête sont en collision
        const isColliding = isStickyHeader ? (tableRect.top < headerBottomWithLastChild) : (tableRect.top <= 0);

        if (isColliding) {
          if (isStickyHeader) {
            // Appliquer l'effet sticky
            firstChild.style.position = 'sticky';
            // Définir la position sticky top en fonction du (point bas du header) - (la hauteur du point haut du tableau) - (décalage de la bordure du table de 1px)
            firstChild.style.top = `${headerBottomWithLastChild - tableRect.top - 1}px`;
          } else {
            // Le premier enfant du tableau est en position sticky + on indique la valeur pour la proriété top
            firstChild.style.position = "sticky";
            firstChild.style.top = `${tableRect.top * -1}px`;
          }
        } else {   
          // Remove sticky effect
          firstChild.style.position = 'flex';
          firstChild.style.top = 0;
          if (!isStickyHeader) firstChild.style.position = 'relative';
        }
      }
    });
  }

  // Vérifier la collision et appliquer l'effet sticky au chargement de la page
  checkCollisionAndApplySticky();

  // Vérifier la collision et appliquer l'effet sticky au scroll de la page
  window.addEventListener('scroll', checkCollisionAndApplySticky);
});