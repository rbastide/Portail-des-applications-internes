// Données importantes aux applications
// Sous la forme : 
// nom de l'application -> {
// id : "nom de l'id",
// title : "Nom de l'application qui sera afficher",
// icon : "Image de l'application",
// url : "Url qui redirige vers la page concerné",
// category : "La catégorie a laquelle il appartient"
//},
let applicationsMetadata = {};

async function initializeMetadata(urlsPath = 'Scripts/data/urls.json') {
  try {
    const response = await fetch(urlsPath);
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! statut: ${response.status}`);
    }
    const urls = await response.json();

    applicationsMetadata = {

      // Applications communes
      duckduckgo: {
        id: "duckduckgo",
        title: "DuckDuckGo",
        icon: "icons/duckduckgo.ico",
        url: "https://start.duckduckgo.com",
        category: "applicationCommunes"
      },
      qwant: {
        id: "qwant",
        title: "Qwant",
        icon: "icons/qwant.ico",
        url: "https://www.qwant.com/?l=fr",
        category: "applicationCommunes"
      },
      google: {
        id: "google",
        title: "Google",
        icon: "icons/google.png",
        url: "https://www.google.com/",
        category: "applicationCommunes"
      },
      teams: {
        id: "teams",
        title: "Teams",
        icon: "icons/teams.png",
        url: "https://teams.cloud.microsoft/",
        category: "applicationCommunes"
      },
      forms: {
        id: "forms",
        title: "Forms",
        icon: "icons/forms.png",
        url: "https://forms.cloud.microsoft",
        category: "applicationCommunes"
      },
      booking: {
        id: "booking",
        title: "Booking",
        icon: "icons/booking.ico",
        url: "https://bookings.cloud.microsoft/",
        category: "applicationCommunes"
      },
      onenote: {
        id: "onenote",
        title: "Onenote",
        icon: "icons/onenote.png",
        url: "https://onenote.cloud.microsoft/",
        category: "applicationCommunes"
      },
      planner: {
        id: "planner",
        title: "Planner",
        icon: "icons/planner.ico",
        url: "https://planner.cloud.microsoft/",
        category: "applicationCommunes"
      },
      assistance_informatique: {
        id: "assistance_informatique",
        title: "Assistance Informatique",
        icon: "icons/customer-support.png",
        url: urls.assistance_informatique,
        category: "applicationCommunes"
      },
      intervention_technique: {
        id: "intervention_technique",
        title: "Intervention Technique",
        icon: "icons/intervention.png",
        url: urls.intervention_technique,
        category: "applicationCommunes"
      },
      gestionnaire_totp: {
        id: "gestionnaire_totp",
        title: "Gestionnaire TOTP",
        icon: "icons/totp.ico",
        url: urls.gestionnaire_totp,
        category: "applicationCommunes"
      },
      annuaire: {
        id: "annuaire",
        title: "Annuaire",
        icon: "icons/annuaire.png",
        url: urls.annuaire,
        category: "applicationCommunes"
      },
      listmonk: {
        id: "listmonk",
        title: "Listmonk",
        icon: "icons/listmonk.png",
        url: urls.listmonk,
        category: "applicationCommunes"
      },
      glpi: {
        id: "glpi",
        title: "GLPI",
        icon: "icons/glpi.png",
        url: urls.glpi,
        category: "applicationCommunes"
      },
      editeur_pdf: {
        id: "editeur_pdf",
        title: "Editeur de PDF",
        icon: "icons/pdf.ico",
        url: urls.editeur_pdf,
        category: "applicationCommunes"
      },
      outlook: {
        id: "outlook",
        title: "Outlook",
        icon: "icons/outlook.ico",
        url: urls.outlook,
        category: "applicationCommunes"
      },

      // ApplicationMetier
      hawk_manager: {
        id: "hawk_manager",
        title: "Hawk Manager",
        icon: "icons/hanover.ico",
        url: urls.hawk_manager,
        category: "applicationMetier"
      },
      hawk_rt: {
        id: "hawk_rt",
        title: "Hawk RT",
        icon: "icons/hanover.ico",
        url: urls.hawk_rt,
        category: "applicationMetier"
      },
      sirtaqui: {
        id: "sirtaqui",
        title: "Sirtaqui",
        icon: "icons/sirtaqui.png",
        url: urls.sirtaqui,
        category: "applicationMetier"
      },
      mad: {
        id: "mad",
        title: "MAD",
        icon: "icons/mad.png",
        url: urls.mad,
        category: "applicationMetier"
      },
      i_milo: {
        id: "i_milo",
        title: "I-Milo",
        icon: "icons/i-milo.png",
        url: urls.i_milo,
        category: "applicationMetier"
      },
      ciril_net: {
        id: "ciril_net",
        title: "Ciril-Net",
        icon: "icons/civil.ico",
        url: urls.ciril_net,
        category: "applicationMetier"
      },
      i_delibre: {
        id: "i_delibre",
        title: "I-Delibre",
        icon: "icons/idelibre.png",
        url: urls.i_delibre,
        category: "applicationMetier"
      },
      i_parapheur: {
        id: "i_parapheur",
        title: "I-Parapheur",
        icon: "icons/iparapheur.png",
        url: urls.i_parapheur,
        category: "applicationMetier"
      },
      perigeo: {
        id: "perigeo",
        title: "Périgéo",
        icon: "icons/perigeo.ico",
        url: urls.perigeo,
        category: "applicationMetier"
      },
      slow: {
        id: "slow",
        title: "S²low",
        icon: "icons/slow.png",
        url: urls.slow,
        category: "applicationMetier"
      },
      webdelib: {
        id: "webdelib",
        title: "Webdelib",
        icon: "icons/webdelib.png",
        url: urls.webdelib,
        category: "applicationMetier"
      }
    };
  } catch (error) {
    console.error("Impossible de charger les métadonnées des applications:", error);
  }
}

// Renvoie la donnée d'une applications en particulière
function getApplicationMetadata(appId) {
  return applicationsMetadata[appId];
}
// Renvoie toutes les données des applications
function getAllApplications() {
  return Object.values(applicationsMetadata);
}
