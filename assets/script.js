
/* code pour les boutons apropos de moi, voir plus et reduire le texte */ 
function afficherTexte() {
    document.getElementById("text").style.display = "block";
    document.getElementById("afficherBtn").style.display = "none";
    document.getElementById("reduireBtn").style.display = "block";
}

function reduireTexte() {
    document.getElementById("text").style.display = "none";
    document.getElementById("afficherBtn").style.display = "block";
    document.getElementById("reduireBtn").style.display = "none";
}

// code de navigation
function openTab(tabId) {
  // Masquer tous les contenus d'onglets
  const tabContents = document.getElementsByClassName('tab-content');
  for (const content of tabContents) {
    content.classList.remove('active');
  }

  // Afficher le contenu de l'onglet sélectionné
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');
}

// mobile version

function toggleNav() {
  var x = document.getElementById("navbarLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

