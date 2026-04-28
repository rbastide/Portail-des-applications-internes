// Affiche toutes les applications de toutes les catégories
function displayAll() {
    const categories = document.querySelectorAll('.favoris, .applicationCommunes, .applicationMetier');
    categories.forEach(category => {
        // On vérifie si la catégorie possède des applications avant de l'afficher
        const container = category.querySelector('.apps-container');
        if (container && container.children.length > 0) {
            category.style.display = 'flex';
        } else {
            category.style.display = 'none';
        }
    });

    // Mettre à jour le bouton actif
    const buttons = document.querySelectorAll('.button-filter');
    buttons.forEach(button => button.classList.remove('active'));
    // Trouver le bouton "Tous" par son contenu textuel et l'activer
    const allButton = Array.from(buttons).find(button => {
        const text = button.textContent.toLowerCase().trim();
        return text === 'toutes'
    });
    if (allButton) {
        allButton.classList.add('active');
    }
}


// Affiche toutes les applications appartenant à une catégorie en particulier
function displayCategory(categoryName) {
    const categories = document.querySelectorAll('.favoris, .applicationCommunes, .applicationMetier');
    categories.forEach(category => {
        if (category.classList.contains(categoryName)) {
            category.style.display = 'flex';
        } else {
            category.style.display = 'none';
        }
    });

    // Mettre à jour le bouton actif
    const buttons = document.querySelectorAll('.button-filter');
    buttons.forEach(button => button.classList.remove('active'));

    // Créer une correspondance entre le nom de la classe de catégorie et le texte attendu du bouton
    // (en minuscules et sans espaces)
    const categoryClassToButtonTextMap = {
        'favoris': 'favoris',
        'applicationCommunes': 'communes',
        'applicationMetier': 'metiers',
    };

    const expectedButtonText = categoryClassToButtonTextMap[categoryName];

    const activeButton = Array.from(buttons).find(button =>
        expectedButtonText && button.textContent.toLowerCase().trim() === expectedButtonText
    );
    if (activeButton) {
        activeButton.classList.add('active');
    }
}