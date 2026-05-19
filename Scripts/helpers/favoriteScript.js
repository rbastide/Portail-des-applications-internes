// Affiche les favoris dans la section prévus a cet effect
function renderFavorites() {
    // Cherche la section favoris de la page
    const favoritesSection = document.querySelector('.favoris');
    if (!favoritesSection) return; 
    
    let favoritesContainer = favoritesSection.querySelector('.apps-container');
    if (!favoritesContainer) {
        favoritesContainer = document.createElement('div');
        favoritesContainer.className = 'apps-container open';
        favoritesSection.appendChild(favoritesContainer);
    }

    // Vide le conteneur
    favoritesContainer.innerHTML = '';

    // Recherche les éléments déjà favoris dans le localStorage
    // Si aucun éléments trouvés, on créer une liste vide
    const currentStructure = getStructureInURL();
    let favorites = JSON.parse(localStorage.getItem('favorites_' + currentStructure)) || [];

    // Recherche du bouton et de l'option de filtre pour "Favoris"
    const filterButton = Array.from(document.querySelectorAll('.button-filter')).find(btn => btn.textContent.toLowerCase().trim() === 'favoris');
    const filterOption = Array.from(document.querySelectorAll('.filter-choice option')).find(opt => opt.textContent.toLowerCase().trim() === 'favoris' || opt.value === 'favoris');

    // Si la liste des favoris est vide on ne l'affiche pas
    if (favorites.length === 0) {
        favoritesSection.style.display = 'none';
        if (filterButton) filterButton.style.display = 'none';
        if (filterOption) filterOption.style.display = 'none';
    } else {
        // On n'affiche la section que si le filtre "Tous" ou "Favoris" est actif
        const activeButton = document.querySelector('.button-filter.active');
        const activeFilterText = activeButton ? activeButton.textContent.toLowerCase().trim() : 'tous';
        
        if (activeFilterText === 'toutes' || activeFilterText === 'favoris') {
            favoritesSection.style.display = 'flex'; 
        }
        // On réaffiche les filtres dans tous les cas puisqu'il y a des favoris
        if (filterButton) filterButton.style.display = '';
        if (filterOption) filterOption.style.display = '';
    }

    // Parcours toutes les icônes d'étoiles et si l'application correspondante est dans la liste
    // Il l'affiche en doré
    const allStars = document.querySelectorAll('.star-btn');
    allStars.forEach(star => {
        const appLink = star.closest('.app, .sub-app');
        if (appLink) {
            const appId = appLink.getAttribute('data-id');
            if (favorites.includes(appId)) {
                star.style.color = 'gold';
            } else {
                star.style.color = 'gray';
            }
        }
    });

    // Génère les favoris à l'aide des métadonnées
    favorites.forEach(appId => {
        const appData = getAllApplications().find(a => a.id === appId);
        if (appData) {
            // Utilise la fonction de création existante, ce qui permet à une "sous-application" 
            // d'apparaître comme une application normale dans la grille des favoris
            const appElement = createApplicationElement(appData);
            
            const star = appElement.querySelector('.star-btn');
            if (star) star.style.color = 'gold';

            favoritesContainer.appendChild(appElement);
        }
    });
}