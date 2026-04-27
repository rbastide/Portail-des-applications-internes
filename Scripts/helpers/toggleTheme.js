document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('switchTheme');
    const logoHeader = document.getElementById('logo-header');
    let clickCount = 0;


    // Fonction pour mettre à jour l'image du logo en fonction du thème
    function updateLogoImage() {
        if (logoHeader) {
            if (document.body.classList.contains('dark-mode')) {
                logoHeader.src = 'images/Logo_blanc.png';
            } else {
                logoHeader.src = 'images/Logo_noir.png';
            }
        }
    }

    themeBtn.addEventListener('click', () => {
        clickCount++;

        // Déclencher l'animation tous les 10 clicks
        if (clickCount % 10 === 0) {
            themeBtn.classList.add('xyz-in');

            // Enlever la classe après l'animation
            setTimeout(() => {
                themeBtn.classList.remove('xyz-in');
            }, 2500);
        }
    });

    if (themeBtn) {
        // Au clic sur le bouton, on alterne la classe 'dark-mode'
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            updateLogoImage();

            // On mémorise la préférence de l'utilisateur
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Appliquer le thème mémorisé au chargement initial de la page
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Mettre à jour l'image du logo au chargement
    updateLogoImage();
});
