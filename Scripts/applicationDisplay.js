// Affiche les applications d'une catégorie filtrées par la catégrorie
function displayApplications(category) {
  const config = getStructureConfig();
  const container = document.querySelector(`.apps-container[aria-placeholder="${category}-placeholder"]`);

  if (!container) return;

  // Vider le conteneur
  container.innerHTML = '';

  // Récupérer toutes les apps visibles de cette catégorie
  const visibleApps = getAllApplications().filter(app => {
    return app.category === category && config.applications.includes(app.id);
  });

  // Créer les éléments pour chaque app
  visibleApps.forEach(app => {
    const appElement = createApplicationElement(app);
    container.appendChild(appElement);
  });
}

// Génère l'élément HTML d'une application
function createApplicationElement(app) {
  if (app.isGroup) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'app app-group';
    groupDiv.setAttribute('data-id', app.id);

    const img = document.createElement('img');
    img.src = `images/${app.icon}`;
    img.alt = app.title;

    const title = document.createElement('div');
    title.className = 'app-title';
    title.textContent = app.title;

    const subMenu = document.createElement('div');
    subMenu.className = 'sub-menu-container';

    app.subApps.forEach(subAppId => {
      const subAppData = getAllApplications().find(a => a.id === subAppId);
      if (subAppData) {
        const subLink = document.createElement('a');
        subLink.href = subAppData.url;
        subLink.target = '_blank';
        subLink.className = 'sub-app';
        subLink.setAttribute('data-id', subAppData.id);

        const subImg = document.createElement('img');
        subImg.src = `images/${subAppData.icon}`;
        subImg.alt = subAppData.title;

        const subTitle = document.createElement('span');
        subTitle.textContent = subAppData.title;

        const subStar = document.createElement('i');
        subStar.className = 'fa fa-star star-btn sub-star-btn';
        subStar.setAttribute('onclick', `toggleFavorite(event,'${subAppData.id}')`);

        subLink.appendChild(subImg);
        subLink.appendChild(subTitle);
        subLink.appendChild(subStar);
        subMenu.appendChild(subLink);
      }
    });

    groupDiv.appendChild(img);
    groupDiv.appendChild(title);
    groupDiv.appendChild(subMenu);

    return groupDiv;
  }

  const link = document.createElement('a');
  link.href = app.url;
  link.target = '_blank';
  link.className = 'app';
  link.setAttribute('data-id', app.id);

  // Image
  const img = document.createElement('img');
  img.src = `images/${app.icon}`;
  img.alt = app.title;

  // Titre
  const title = document.createElement('div');
  title.className = 'app-title';
  title.textContent = app.title;

  // Bouton favori
  const star = document.createElement('i');
  star.className = 'fa fa-star star-btn';
  star.setAttribute('onclick', `toggleFavorite(event,'${app.id}')`);

  // Assembler
  link.appendChild(img);
  link.appendChild(title);
  link.appendChild(star);

  return link;
}

// Charge les applications visibles selon la structure
function loadApplicationsByStructure() {
  const categories = ['favoris', 'applicationCommunes','applicationMetier'];

  categories.forEach(category => {
    displayApplications(category);
    // Masquer les catégories vides
    const container = document.querySelector(`.apps-container[aria-placeholder="${category}-placeholder"]`);
    const categoryDiv = document.querySelector(`.${category}`);

    // Recherche des boutons et options de filtrage liés à cette catégorie
    const filterButton = Array.from(document.querySelectorAll('.button-filter')).find(btn => btn.textContent.toLowerCase().trim() === category);
    const filterOption = Array.from(document.querySelectorAll('.filter-choice option')).find(opt => opt.textContent.toLowerCase().trim() === category || opt.value === category);

    if (container && categoryDiv) {
      if (container.children.length === 0) {
        categoryDiv.style.display = 'none';
        if (filterButton) filterButton.style.display = 'none';
        if (filterOption) filterOption.style.display = 'none';
      } else {
        categoryDiv.style.display = 'flex';
        if (filterButton) filterButton.style.display = '';
        if (filterOption) filterOption.style.display = '';
      }
    }
  });
}


// S'éxécute au chargement de la page -> affiche les applications selon la structure 
function initializeApplications() {
  loadApplicationsByStructure();
  
  // On s'assure que les favoris sont générés une fois les applications injectées dans le DOM
  if (typeof renderFavorites === 'function') {
    renderFavorites();
  }
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', async function() {
  // On attend que les métadonnées (y compris les URLs depuis le JSON) soient chargées
  await initializeMetadata();
  initializeApplications();
});
