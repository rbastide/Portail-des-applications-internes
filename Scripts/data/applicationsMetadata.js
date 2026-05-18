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
      },
      domatel:{
        id: "domatel",
        title: "Domatel",
        icon: "",
        url: urls.domatel,
        category: "applicationMetier"
      },
      NFC_tag_and_play:{
        id: "nfcTagAndPlay",
        title: "NFC Tag And Play",
        icon: "",
        url: "",
        category: "applicationMetier"
      },
      free2Move:{
        id: "free2Move",
        title: "Free2Move",
        icon: "",
        url: urls.free2Move,
        category: "applicationMetier"
      },
      medecineCDG24:{
        id: "medecineCDG24",
        title: "Médecine CDG 24",
        icon: "",
        url: urls.medecineCDG24,
        category: "applicationMetier"
      },
      CNAS:{
        id: "CNAS",
        title: "CNAS",
        icon: "",
        url: urls.cnas,
        category: "applicationMetier"
      },
      portail_ressources:{
        id: "portail_ressources",
        title: "Portail des ressources",
        icon: "",
        url: urls.portail_ressources,
        category: "applicationMetier"
      },
      arche_MC2_assistance :{
        id: "arche_MC2_assistance",
        title: "Arche-MC2 Assistance",
        icon: "",
        url: urls.arche_MC2_assistance,
        category: "applicationMetier"
      },
      my_ayvens_manager :{
        id: "my_ayvens_manager",
        title: "My Ayvens Manager",
        icon: "",
        url : urls.my_ayvens_manager,
        category: "applicationMetier"
      },
      visualAA :{
        id: "visualAA",
        title: "VisualAA",
        icon: "",
        url: urls.visualAA,
        category: "applicationMetier"
      },
      total_energie :{
        id: "total_energie",
        title: "Total Energie",
        icon: "",
        url: urls.total_energie,
        category: "applicationMetier"
      },
      carte_carburant :{
        id: "carte_carburant",
        title: "Carte Carburant",
        icon: "",
        url: urls.carte_carburant,
        category: "applicationMetier"
      },
      net_entreprise :{
        id: "net_entreprise",
        title: "Net-entreprises",
        icon: "",
        url: urls.net_entreprise,
        category: "applicationMetier"
      },
      cdg24 :{
        id: "cdg24",
        title: "CDG 24",
        icon: "",
        url: urls.cdg24 ,
        category: "applicationMetier"
      },
      MNT :{
        id: "MNT",
        title: "MNT",
        icon: "",
        url: urls.mnt,
        category: "applicationMetier"
      },
      france_travail_accueil_pro :{
        id: "france_travail_accueil_pro",
        title: "Accueil",
        icon: "",
        url: urls.france_travail_accueil_pro,
        category: "applicationMetier"
      },
      france_travail_employeur :{
        id: "france_travail_employeur",
        title: "Employeur",
        icon: "",
        url : urls.france_travail_employeur,
        category: "applicationMetier"
      },
      france_travail_convention :{
        id: "france_travail_convention",
        title: "Convention",
        icon: "",
        url : urls.france_travail_convention,
        category: "applicationMetier"
      },
      dude :{
        id: "dude",
        title: "Dude",
        icon: "",
        url: urls.dude,
        category: "applicationMetier"
      },
      URSSAF :{
        id: "URSSAF",
        title: "URSSAF",
        icon: "",
        url: urls.urssaf,
        category: "applicationMetier"
      },
      URSSAF_mandataire :{
        id: "URSSAF_mandataire",
        title: "URSSAF Mandataire",
        icon: "",
        url: urls.urssaf_mandataire,
        category: "applicationMetier"
      },
      CIGAC :{
        id: "CIGAC",
        title: "CIGAC",
        icon: "",
        url: urls.cigac,
        category: "applicationMetier"
      },
      IRCEM :{
        id: "IRCEM",
        title: "IRCEM",
        icon: "",
        url: urls.ircem,
        category: "applicationMetier"
      },
      edenred :{
        id: "edenred",
        title: "Edenred",
        icon: "",
        url: urls.edenred,
        category: "applicationMetier"
      },
      fabregue :{
        id: "fabregue",
        title: "Fabrègue",
        icon: "",
        url: urls.fabregue,
        category: "applicationMetier"
      },
      collecteam_prevoyance :{
        id: "collecteam_prevoyance",
        title: "Collecteam Prévoyance",
        icon: "",
        url: urls.collecteam_prevoyance,
        category: "applicationMetier"
      },
      collecteam_espacerh :{
        id: "collecteam_espacerh",
        title: "Collecteam Espace RH",
        icon: "",
        url: urls.collecteam_espacerh,
        category: "applicationMetier"
      },
      CNP_assurance :{
        id: "CNP_assurance",
        title: "CNP Assurance",
        icon: "",
        url: urls.cnp_assurance,
        category: "applicationMetier"
      },
      PEPS :{
        id: "PEPS",
        title: "PEP'S",
        icon: "",
        url: urls.peps,
        category: "applicationMetier"
      },
      CPAM :{
        id: "CPAM",
        title: "CPAM",
        icon: "",
        url: urls.cpam,
        category: "applicationMetier"
      },
      CNFPT :{
        id: "CNFPT",
        title: "CNFPT",
        icon: "",
        url: urls.cnfpt,
        category: "applicationMetier"
      },
      indeed :{
        id: "indeed",
        title: "Indeed",
        icon: "",
        url: urls.indeed,
        category: "applicationMetier"
      },
      autorite_sante :{
        id: "autorite_sante",
        title: "Haute Autorité de Santé",
        icon: "",
        url: urls.autorite_sante,
        category: "applicationMetier"
      },
      assurance_maladie :{
        id: "assurance_maladie",
        title: "Assurance Maladie",
        icon: "",
        url: urls.assurance_maladie,
        category: "applicationMetier"
      },
      ministere_justice :{
        id: "ministere_justice",
        title: "Ministère de la Justice",
        icon: "",
        url: urls.ministere_justice,
        category: "applicationMetier"
      },
      CARSAT :{
        id: "CARSAT",
        title: "CARSAT",
        icon: "",
        url: urls.carsat,
        category: "applicationMetier"
      },
      CNRACL :{
        id: "CNRACL",
        title: "CNRACL",
        icon: "",
        url: urls.cnracl,
        category: "applicationMetier"
      },
      veloce :{
        id: "veloce",
        title: "Veloce",
        icon: "",
        url: urls.veloce,
        category: "applicationMetier"
      },
      manatime :{
        id: "manatime",
        title: "Manatime",
        icon: "",
        url: urls.manatime,
        category: "applicationMetier"
      },
      nouvelle_aquitaine :{
        id: "nouvelle_aquitaine",
        title: "Région Nouvelle-Aquitaine",
        icon: "",
        url: urls.nouvelle_aquitaine,
        category: "applicationMetier"
      },
      france_travail_accueil : {
        id: "france_travail_accueil",
        title: "Accueil",
        icon: "",
        url: urls.france_travail_accueil,
        category: "applicationMetier"
      },
      CAF : {
        id: "CAF",
        title: "CAF",
        icon: "",
        url: urls.caf,
        category: "applicationMetier"
      },
      impot : {
        id: "impot",
        title: "Impot",
        icon: "",
        url: urls.impot,
        category: "applicationMetier"
      },
      canva : {
        id: "canva",
        title: "Canva",
        icon: "",
        url: urls.canva,
        category: "applicationMetier"
      },
      ANTS : {
        id: "ANTS",
        title: "ANTS",
        icon: "",
        url: urls.ANTS,
        category: "applicationMetier"
      },
      ameli : {
        id: "ameli",
        title: "Ameli",
        icon: "",
        url: urls.ameli,
        category: "applicationMetier"
      },
      service_civique : {
        id: "service_civique",
        title: "Service Civique",
        icon: "",
        url: urls.service_civique,
        category: "applicationMetier"
      },
      AGEFIPH : {
        id: "AGEFIPH",
        title: "AGEFIPH",
        icon: "",
        url: urls.agefiph,
        category: "applicationMetier"
      },
      CAP_metier : {
        id: "CAP_metier",
        title: "CAP Metier",
        icon: "",
        url: urls.cap_metier,
        category: "applicationMetier"
      },
      logement_sociale : {
        id: "logement_sociale",
        title: "Mon Logement Sociale",
        icon: "",
        url: urls.logement_sociale,
        category: "applicationMetier"
      },
      emploi_inclusion : {
        id: "emploi_inclusion",
        title: "Emploi Inclusion",
        icon: "",
        url: urls.emploi_inclusion,
        category: "applicationMetier"
      },
      copilot : {
        id: "copilot",
        title: "Microsoft 365 | Copilot",
        icon: "",
        url: urls.copilot,
        category: "applicationMetier"
      },
      milona : {
        id: "milona",
        title: "Milona",
        icon: "",
        url: urls.milona,
        category: "applicationMetier"
      },
      evennements_emploi : {
        id: "evennements_emploi",
        title: "Mes évennements Emploi",
        icon: "",
        url: urls.evennements_emploi,
        category: "applicationMetier"
      },
      immersion_facilite : {
        id: "immersion_facilite",
        title: "Immersion Facilitée",
        icon: "",
        url: urls.immersion_facilite,
        category: "applicationMetier"
      },
    };
  } catch (error) {
    console.error("Impossible de charger les métadonnées des applications:", error);
  }
}

// Renvoie toutes les données des applications
function getAllApplications() {
  return Object.values(applicationsMetadata);
}
