document.addEventListener("DOMContentLoaded", function () {
  function cliquerBoutonsEtArreter() {
    const boutons = document.querySelectorAll(
      ".block-editor-warning__action > button"
    );
    if (boutons.length > 0) {
      boutons.forEach((bouton) => bouton.click());
    }
  }

  let intervalId;
  let totalTime = 0;

  function testerBoutons() {
    if (totalTime <= 3000) {
      cliquerBoutonsEtArreter();
      totalTime += 1000;
    }
  }

  intervalId = setInterval(testerBoutons, 1000);
});
