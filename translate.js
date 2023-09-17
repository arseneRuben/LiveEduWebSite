function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',  // Langue d'origine (français)
        includedLanguages: 'fr,es,en,de,am,sw,ar,ha,ig,so,mg,sn,sw,tn,yo',  // Langues de destination (anglais, espagnol, allemand, amharique, swahili, arabe, haoussa, igbo, somali, malgache, shona, suédois, tswana, yoruba)
        autoDisplay: false  // Désactiver l'affichage automatique du widget de traduction
    }, 'google_translate_element');
}

document.getElementById('translateButton').addEventListener('click', function () {
    // Afficher le widget de traduction
    const translateWidget = new google.translate.TranslateElement({
        pageLanguage: 'en',         // Langue d'origine (anglais)
        includedLanguages: 'en,fr,es,de,am,sw,ar,ha,ig,so,mg,sn,sw,tn,yo', // Langues de destination (français, espagnol, allemand, amharique, swahili, arabe, haoussa, igbo, somali, malgache, shona, suédois, tswana, yoruba)
        autoDisplay: false           // Activer l'affichage automatique du widget de traduction
    }, 'google_translate_element');

    // Personnalisation du contenu du widget
    translateWidget.showBanner(false); // Cacher la bannière du widget
    translateWidget.showPoweredBy(false); // Cacher le texte "Propulsé par Google Translate"
    translateWidget.disableAutoTranslation(); // Désactiver la traduction automatique
});
