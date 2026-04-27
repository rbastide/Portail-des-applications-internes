// Calcul la date en direct et l'affiche
function updateDateTime() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = now.toLocaleDateString('fr-FR', options);
            const time = now.toLocaleTimeString('fr-FR');
            document.getElementById('datetime').innerHTML = '<p>' + date.charAt(0).toUpperCase() + date.slice(1) + '<br>' + time + '</p>';
        }

        document.addEventListener('DOMContentLoaded', function(){
            setInterval(updateDateTime, 1000);
            updateDateTime();
        })
        