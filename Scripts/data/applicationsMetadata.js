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
        url: "https://mobile.domatel.fr",
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
        url: "https://free2move-connectfleet.com",
        category: "applicationMetier"
      },
      medecineCDG24:{
        id: "medecineCDG24",
        title: "Médecine CDG 24",
        icon: "",
        url: "https://pst-cdg24.medtra.fr/accueil.html",
        category: "applicationMetier"
      },
      CNAS:{
        id: "CNAS",
        title: "CNAS",
        icon: "",
        url: "https://le.cnas.fr/s/login/?ec=302&startURL=%2Fliste-des-beneficiairesr",
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
        url: "https://assistance.arche-mc2.fr/hc/fr",
        category: "applicationMetier"
      },
      my_ayvens_manager :{
        id: "my_ayvens_manager",
        title: "My Ayvens Manager",
        icon: "",
        url: "https://login.aldautomotive.fr/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dmanager_ayvens_client%26response_type%3Dcode%2520id_token%2520token%26scope%3Dopenid%2520profile%2520email%2520offline_access%26state%3DOpenIdConnect.AuthenticationProperties%253DWFfxsm5AGiEavyayF-HhU7LwEW0sESbwX9zwRWFeCjUQUqutbVF3PhcW76X4iWkV8bdD3GarZ6ZoKP0K6ZSRjH9RrLnTmpVySA67X0bCwRAwaFIf9u_p115Obctn0ufvpr0GrpGxUT7IUI_9OnGc3I15cwwb-LpOj8op8hosu6yhPzFcp4i58VoaVQSxd1odTnCJDYm-WrZsvlxkJWi66Lb_uv4%26response_mode%3Dform_post%26nonce%3D639131399663669074.NmU5ZjNiOTMtMWI1Ny00NDMxLWEzYmItZjM0OGU5OWE0ZTllYjg5YmM1OTAtZjk1ZS00MjE3LWE4NjEtZjA1MDg1Mjk0M2Q5%26redirect_uri%3Dhttps%253A%252F%252Fmanager.ayvens.fr%252Fsignin-oidc%26post_logout_redirect_uri%3Dhttps%253A%252F%252Fmanager.ayvens.fr%26x-client-SKU%3DID_NET461%26x-client-ver%3D5.3.0.0",
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
        url: "https://client.mobilitybusiness.totalenergies.com/signIn",
        category: "applicationMetier"
      },
      carte_carburant :{
        id: "carte_carburant",
        title: "Carte Carburant",
        icon: "",
        url: "https://www.lacartecarburant.com/",
        category: "applicationMetier"
      },
      net_entreprise :{
        id: "net_entreprise",
        title: "Net-entreprises",
        icon: "",
        url: "https://www.net-entreprises.fr/",
        category: "applicationMetier"
      },
      cdg24 :{
        id: "cdg24",
        title: "CDG 24",
        icon: "",
        url: "https://cdg-portal.arketeam.fr/CDG24/Accueil.aspx",
        category: "applicationMetier"
      },
      MNT :{
        id: "MNT",
        title: "MNT",
        icon: "",
        url: "https://employeur.mnt.fr/connexion",
        category: "applicationMetier"
      },
      france_travail_accueil :{
        id: "france_travail_accueil",
        title: "Accueil",
        icon: "",
        url: "https://pro.francetravail.fr/accueil/choixauthentification",
        category: "applicationMetier"
      },
      france_travail_employeur :{
        id: "france_travail_employeur",
        title: "Employeur",
        icon: "",
        url: "https://authentification-pro.francetravail.fr/connexion/XUI/?realm=/employeur&goto=https://authentification-pro.francetravail.fr/connexion/oauth2/realms/root/realms/employeur/authorize?realm%3Demployeur%26response_type%3Did_token%2520token%26scope%3DlectureProfil%2520lecturePromotionProfil%2520projetrecrut%2520mescvselectionnes%2520mescvselectionnesW%2520ami%2520amiW%2520mecRecruteurSurOffreEcriture%2520offre%2520offreW%2520nomenclature%2520openid%2520profile%2520email%2520phone%2520peconnect%2520habilitation%2520idIdentite%2520espaceEntreprise%2520infosentreprises%2520audienceProfilW%2520application_ENT-PN024-recrutement-5B4E77A95770B3DC1998BAD5912B718DAF678E1142DADBCB8D18A72661C16314%2520rechercheOu%26client_id%3DENT-PN024-recrutement-5B4E77A95770B3DC1998BAD5912B718DAF678E1142DADBCB8D18A72661C16314%26state%3D__redir_auth__%26nonce%3Ddf9d665a25782fd0f1f1542574e5f268321fdc42bc5fac92b4d823040f3f48fc%26redirect_uri%3Dhttps://entreprise.francetravail.fr/vos-recrutements/auth/connect/#login/",
        category: "applicationMetier"
      },
      france_travail_convention :{
        id: "france_travail_convention",
        title: "Convention",
        icon: "",
        url: "https://immersion-facile.beta.gouv.fr/demande-immersion?email=&firstName=&lastName=&phone=&financiaryHelp=&led=&schoolName=&schoolPostcode=&emergencyContact=&emergencyContactPhone=&emergencyContactEmail=&isRqth=false&birthdate=&agencyDepartment=&agencyKind=&siret=&businessName=&businessAdvantages=&etFirstName=&etLastName=&etJob=&etPhone=&etEmail=&erFirstName=&erLastName=&erPhone=&erEmail=&immersionAddress=&agencyId=&agencyReferentFirstName=&agencyReferentLastName=&immersionActivities=&immersionSkills=&sanitaryPreventionDescription=&workConditions=&individualProtectionDescription=&dateStart=2026-05-01&dateEnd=2026-05-02&schedule=%7B%22totalHours%22%3A0%2C%22workedDays%22%3A0%2C%22isSimple%22%3Atrue%2C%22complexSchedule%22%3A%5B%7B%22date%22%3A%222026-05-01T00%3A00%3A00.000Z%22%2C%22timePeriods%22%3A%5B%5D%7D%2C%7B%22date%22%3A%222026-05-02T00%3A00%3A00.000Z%22%2C%22timePeriods%22%3A%5B%5D%7D%5D%7D",
        category: "applicationMetier"
      },
      URSSAF :{
        id: "URSSAF",
        title: "URSSAF",
        icon: "",
        url: "https://www.due.urssaf.fr/declarant/index.jsf",
        category: "applicationMetier"
      },
      URSSAF_mandataire :{
        id: "URSSAF_mandataire",
        title: "URSSAF Mandataire",
        icon: "",
        url: "https://calcul.urssaf.fr/asap/lstcompte?ShowCfEmail=0",
        category: "applicationMetier"
      },
      CIGAC :{
        id: "CIGAC",
        title: "CIGAC",
        icon: "",
        url: "https://secure.cigac.fr/",
        category: "applicationMetier"
      },
      IRCEM :{
        id: "IRCEM",
        title: "IRCEM",
        icon: "",
        url: "https://espacestructure.ircem.com/",
        category: "applicationMetier"
      },
      edenred :{
        id: "edenred",
        title: "Edenred",
        icon: "",
        url: "https://client.edenred.fr/login",
        category: "applicationMetier"
      },
      fabregue :{
        id: "fabregue",
        title: "Fabrègue",
        icon: "",
        url: "https://fabregueweb.fr/default/",
        category: "applicationMetier"
      },
      collecteam_prevoyance :{
        id: "collecteam_prevoyance",
        title: "Collecteam Prévoyance",
        icon: "",
        url: "https://prevoyance-assures.collecteam.fr/",
        category: "applicationMetier"
      },
      collecteam_espacerh :{
        id: "collecteam_espacerh",
        title: "Collecteam Espace RH",
        icon: "",
        url: "https://espacerh.collecteam.fr/login",
        category: "applicationMetier"
      },
      CNP_assurance :{
        id: "CNP_assurance",
        title: "CNP Assurance",
        icon: "",
        url: "https://www.cnp.fr/partenaires/associations-et-collectivites-locales/collectivite-locale",
        category: "applicationMetier"
      },
      PEPS :{
        id: "PEPS",
        title: "PEP'S",
        icon: "",
        url: "https://plateforme-employeurs.caissedesdepots.fr/espace-prive/plateforme/#/public/accueil",
        category: "applicationMetier"
      },
      CPAM :{
        id: "CPAM",
        title: "CPAM",
        icon: "",
        url: "https://user.clicrdv.com/cpam-de-charente",
        category: "applicationMetier"
      },
      CNFPT :{
        id: "CNFPT",
        title: "CNFPT",
        icon: "",
        url: "https://inscription.cnfpt.fr/?gl=NjliOGJkMzI",
        category: "applicationMetier"
      },
      indeed :{
        id: "indeed",
        title: "Indeed",
        icon: "",
        url: "https://secure.indeed.com/auth?continue=https%3A%2F%2Femployers.indeed.com%2Fo%2Fjobs&hl=fr&userType=employer",
        category: "applicationMetier"
      },
      autorite_sante :{
        id: "autorite_sante",
        title: "Haute Autorité de Santé",
        icon: "",
        url: "https://has-cespi-prod1.pegacloud.net/prweb/PRWebLDAP1/app/bce/-sPDjli2JlECD84cvMNZ8wxIe7urqtp8*/!STANDARD",
        category: "applicationMetier"
      },
      assurance_maladie :{
        id: "assurance_maladie",
        title: "Assurance Maladie",
        icon: "",
        url: "https://questionnaires-risquepro.ameli.fr/",
        category: "applicationMetier"
      },
      ministere_justice :{
        id: "ministere_justice",
        title: "Ministère de la Justice",
        icon: "",
        url: "https://www.public.cjnb2plus.justice.gouv.fr/?target_link_uri=http%3A%2F%2Fwww.cjnb2plus.justice.gouv.fr%3A80%2Fpersonne-physique%2Fdemandes%2F&method=get&oidc_callback=https%3A%2F%2Fwww.cjnb2plus.justice.gouv.fr%2Fredirect_uri&x_csrf=M5KiPi3Ipww",
        category: "applicationMetier"
      },
      CARSAT :{
        id: "CARSAT",
        title: "CARSAT",
        icon: "",
        url: "https://www.partenairesactionsociale.fr/sites/ppas/home.html",
        category: "applicationMetier"
      },
      CNRACL :{
        id: "CNRACL",
        title: "CNRACL",
        icon: "",
        url: "https://www.cnracl.retraites.fr/employeur/ma-plateforme-peps",
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
