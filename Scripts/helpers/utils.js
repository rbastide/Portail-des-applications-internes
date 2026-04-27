// Récupère le texte de la barre de recherche
function getTextSearchBar(){
    var text = document.getElementById("research").value;
    return text;
}

// Recherche sur DuckDuckGo le texte saisi par l'utilisateur
function researchOnDuckDuckGo(){
    const base_url = "https://www.duckduckgo.com/";
    const url = base_url + getTextSearchBar();
    window.open(url, "_blank");
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

// Gère la fermeture/ouverture du menu déroulant de la catégorie favoris
function toggleFavorite(event,appId){

    event.preventDefault();
    event.stopPropagation();

    const currentStructure = getStructureInURL();
    const storageKey = 'favorites_' + currentStructure;

    let favorites = JSON.parse(localStorage.getItem(storageKey)) || [];

    if(favorites.includes(appId)){
        favorites = favorites.filter(id => id !== appId);
    } else {
        favorites.push(appId);
    }
    localStorage.setItem(storageKey, JSON.stringify(favorites));
    renderFavorites();

}
