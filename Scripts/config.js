// Données des structures
// Sous la forme -> "nom de la structure" : {
// name : "Nom de la strucutre a affiché",
// applications : ["Tableau","Comportant","Les applications"],
// },

const commonTools = ["duckduckgo","qwant","google","annuaire","listmonk","assistance_informatique","intervention_technique","editeur_pdf","gestionnaire_totp","outlook","teams","forms","onenote","booking","planner"];

const allTools = ["glpi","perigeo","hawk_manager","hawk_rt","ciril_net","i_parapheur","webdelib","slow","i_milo","mad","sirtaqui","i_parapheur","webdelib","slow","i_delibre"] + commonTools;

const structures = {
    "perimouv": {
        name: "Périmouv",
        applications: ["hawk_manager","hawk_rt","ciril_net","i_parapheur","webdelib","slow"] + commonTools
    },
    "cias": {
        name: "CIAS",
        applications: ["mad","domatel","nfcTagAndPlay","free2Move","medecineCDG24","CNAS","portail_ressources","arche_MC2_assistance","my_ayvens_manager","visualAA","total_energie","carte_carburant","net_entreprise","cdg24","MNT","france_travail_accueil_pro","france_travail_employeur","france_travail_convention","URSSAF","URSSAF_mandataire","CIGAC","IRCEM","edenred","fabregue","collecteam_prevoyance","collecteam_espacerh","CNP_assurance","PEPS","CPAM","CNFPT","indeed","autorite_sante","assurance_maladie","ministere_justice","CARSAT","CNRACL"] + commonTools
    },
    "ml/mde": {
        name: "ML / MDE",
        applications: ["i_milo","veloce","dude","manatime","nouvelle_aquitaine","france_travail_accueil","CAF","impot","canva","ANTS","ameli","service_civique","AGEFIPH","CAP_metier","logement_sociale","emploi_inclusion","copilot","milona","evennements_emploi","immersion_facilite"] + commonTools
    },
    "silot": {
        name: "Silot",
        applications: ["ciril_net","i_parapheur","webdelib","slow"] + commonTools
    },
    "oti":{
        name: "Oti",
        applications : ["sirtaqui","ciril_net","i_parapheur","webdelib","slow"] + commonTools
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
