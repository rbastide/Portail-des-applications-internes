// Données des structures
// Sous la forme -> "nom de la structure" : {
// name : "Nom de la strucutre a affiché",
// applications : ["Tableau","Comportant","Les applications"],
// },

const commonTools = ["navigateurs","annuaire","listmonk","assistance_info","editeur_pdf","gestionnaire_totp","microsoft_suite"];

const allTools = ["glpi","perigeo","hawk_manager","hawk_rt","ciril_net","i_parapheur","webdelib","slow","i_milo","mad","sirtaqui","i_parapheur","webdelib","slow","i_delibre"].concat(commonTools);

const structures = {
    "perimouv": {
        name: "Périmouv",
        applications: ["hawk_manager","hawk_rt","ciril_net","i_parapheur","webdelib","slow"].concat(commonTools)
    },
    "cias": {
        name: "CIAS",
        applications: ["mad","domatel","nfcTagAndPlay","free2Move","sante","portail_ressources","arche_MC2_assistance","my_ayvens_manager","visualAA","total_energie","carte_carburant","net_entreprise","MNT","france_travail","urssaf_groupe","assurance","IRCEM","edenred","fabregue","collecteam","PEPS","CNFPT","indeed","ministere_justice","CNRACL"].concat(commonTools)
    },
    "ml/mde": {
        name: "ML / MDE",
        applications: ["gouvernements","i_milo","veloce","dude","manatime","nouvelle_aquitaine","france_travail_accueil","CAF","canva","ameli","AGEFIPH","CAP_metier","copilot","milona"].concat(commonTools)
    },
    "silot": {
        name: "Silot",
        applications: ["ciril_net","i_parapheur","webdelib","slow"].concat(commonTools)
    },
    "oti":{
        name: "Oti",
        applications : ["sirtaqui","ciril_net","i_parapheur","webdelib","slow"].concat(commonTools)
    },
    "common":{
        name:"Communs",
        applications : commonTools
    },
    "all":{
        name:"Tout",
        applications : allTools
    },

};

// Définir la structure par défaut
const defaultStructure = "common";

// Récupération de la structure dans la barre d'adresse
// renvoie la structure complète
// Si aucune structure n'a été trouvé elle renvoie la structure par défaut défini plus haut
function getStructureInURL() {
  const params = new URLSearchParams(window.location.search);
  const structure = params.get("structure") || defaultStructure;
  return structure;
}

// Renvoie les données de la structure concerné
// Si aucune structure n'a été trouvé elle renvoie la structure par défaut défini plus haut
function getStructureConfig() {
  const structureId = getStructureInURL();
  return structures[structureId] || structures[defaultStructure];
}

// Vérifie si l'application doit être affichée
function isApplicationInStructure(appId) {
  const config = getStructureConfig();
  return config.applications.includes(appId);
}

// Cette fonction s'exécute immédiatement au chargement du script.
(function() {
  const params = new URLSearchParams(window.location.search);
  
  // Si le paramètre 'structure' n'est PAS présent dans l'URL
  if (!params.has('structure')) {
    // On redirige l'utilisateur vers la même page, mais en ajoutant
    // le paramètre de la structure par défaut.
    window.location.href = window.location.pathname + '?structure=' + defaultStructure;
  }
})();
