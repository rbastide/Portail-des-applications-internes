// Récupère le texte de la barre de recherche
function getTextSearchBar(){
    return document.getElementById("research").value;
}

// Recherche sur DuckDuckGo le texte saisi par l'utilisateur
function researchOnDuckDuckGo(){
    const base_url = "https://www.duckduckgo.com/";
    const url = base_url + getTextSearchBar();

    if(getTextSearchBar().trim() === "un bon rouge") {
        window.open("https://fr.wikipedia.org/wiki/Vin_rouge", "_blank");
    }
    else{
      window.open(url, "_blank");
    }

    document.getElementById("research").value = "";
}

// Permet d'envoyer la requête avec la touche entrée
function handleEnter(event){
    if(event.key === "Enter"){
        event.preventDefault();
        researchOnDuckDuckGo();
    }
}

// Gère la fermeture/ouverture du menu déroulant des catégories
function toggleCategory(button) {
    const categoryHeader = button.closest('.category-header');
    const appsContainer = categoryHeader.nextElementSibling;

    button.classList.toggle('collapsed');
    appsContainer.classList.toggle('closed');
}
