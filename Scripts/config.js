// Données des structures
// Sous la forme → "nom de la structure" : {
// name : "Nom de la structure a affiché",
// applications : ["Tableau","Comportant","Les applications"],
// },

const commonTools = ["slow","annuaire","navigateurs","listmonk","assistance_info","editeur_pdf","gestionnaire_totp","microsoft_suite"];

const allTools = ["vehicule","hawk","ciril_net","i_parapheur","webdelib","modalis","wanreport","mobi_iti","kubapay_web","amazon_quick","observatoire_akka","lumiplan_help_center","google_transit","lumiplay","suivi_dechet_gouvernemental","suivi_borne_recharge_bus_elec","glpi_kuba","bca_suivi_sinistre","vetement_travail","domatel","free2Move","sante","portail_ressources","arche_MC2_assistance","my_ayvens_manager","visualAA","carburant","net_entreprise","MNT","france_travail","urssaf_groupe","assurance","IRCEM","edenred","fabregue","collecteam","PEPS","CNFPT","indeed","gouvernement_cias","CNRACL","ppas","geoclip","pdf24","cnsa","gouvernements","i_milo","veloce","dude","manatime","nouvelle_aquitaine","france_travail_accueil","CAF","canva","ameli","AGEFIPH","CAP_metier","copilot","milona","isigeo","sirtaqui"].concat(commonTools)

const structures = {
    "perimouv": {
        name: "Périmouv",
        applications: ["vehicule","hawk","ciril_net","i_parapheur","webdelib","modalis","wanreport","mobi_iti","kubapay_web","amazon_quick","observatoire_akka","lumiplan_help_center","google_transit","lumiplay","suivi_dechet_gouvernemental","suivi_borne_recharge_bus_elec","glpi_kuba","bca_suivi_sinistre","vetement_travail"].concat(commonTools)
    },
    "cias": {
        name: "CIAS",
        applications: ["domatel","free2Move","sante","portail_ressources","arche_MC2_assistance","my_ayvens_manager","visualAA","carburant","net_entreprise","MNT","france_travail","urssaf_groupe","assurance","IRCEM","edenred","fabregue","collecteam","PEPS","CNFPT","indeed","gouvernement_cias","CNRACL","ppas","geoclip","pdf24","cnsa"].concat(commonTools)
    },
    "ml/mde": {
        name: "ML / MDE",
        applications: ["gouvernements","i_milo","veloce","dude","manatime","nouvelle_aquitaine","france_travail_accueil","CAF","canva","ameli","AGEFIPH","CAP_metier","copilot","milona"].concat(commonTools)
    },
    "silot": {
        name: "Silot",
        applications: ["ciril_net","i_parapheur","webdelib","isigeo"].concat(commonTools)
    },
    "oti":{
        name: "Oti",
        applications : ["sirtaqui","ciril_net","i_parapheur","webdelib"].concat(commonTools)
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
// Si aucune structure n'a été trouvé, elle renvoie la structure par défaut défini plus haut
function getStructureInURL() {
  const params = new URLSearchParams(window.location.search);
    return params.get("structure") || defaultStructure;
}

// Renvoie les données de la structure concernée
// Si aucune structure n'a été trouvé, elle renvoie la structure par défaut défini plus haut
function getStructureConfig() {
  const structureId = getStructureInURL();
  return structures[structureId] || structures[defaultStructure];
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
