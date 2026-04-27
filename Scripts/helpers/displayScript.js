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
    if (buttons.length > 0) {
        buttons[0].classList.add('active');
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

    const activeButton = Array.from(buttons).find(button =>
        button.textContent.toLowerCase() === categoryName
    );
    if (activeButton) {
        activeButton.classList.add('active');
    }
}