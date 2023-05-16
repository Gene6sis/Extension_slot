// Crée une fonction pour effectuer ton code une fois que la div "loading" est masquée
function processWhenHidden() {
    // Ton code ici une fois que la div "loading" est masquée
    var targetElement = document.querySelector(".fc-scroller.fc-time-grid-container");
    targetElement.style.removeProperty("height");
  }
  
  // Crée un observeur de mutations pour surveiller les changements dans le DOM
  var observer = new MutationObserver(function(mutationsList) {
    mutationsList.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        var loadingDiv = document.getElementById('loading');
        if (loadingDiv.style.display === 'none') {
          // La div "loading" est masquée, on peut exécuter le code
          processWhenHidden();
        }
      }
    });
  });
  
  // Sélectionne la div "loading" et configure l'observeur de mutations pour surveiller les changements du style
  var loadingDiv = document.getElementById('loading');
  observer.observe(loadingDiv, { attributes: true });
