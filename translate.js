function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',  // Langue d'origine (français)
        includedLanguages: 'fr,es,en,de,am,ig,so,mg,sn,sw',  // Langues de destination (anglais, espagnol, allemand, amharique, swahili, arabe, haoussa, igbo, somali, malgache, shona, suédois, tswana, yoruba)
        autoDisplay: true  // Désactiver l'affichage automatique du widget de traduction
    }, 'google_translate_element');
}

document.getElementById('translateButton').addEventListener('click', function (e) {
    // Afficher le widget de traduction
    e.preventDefault();
    const translateWidget = new google.translate.TranslateElement({
        pageLanguage: 'en',         // Langue d'origine (anglais)
        includedLanguages: 'en,fr,es,de,am,ig,so,mg,sn,sw', // Langues de destination (français, espagnol, allemand, amharique, swahili, arabe, haoussa, igbo, somali, malgache, shona, suédois, tswana, yoruba)
        autoDisplay: true           // Activer l'affichage automatique du widget de traduction
    }, 'google_translate_element');

    // Personnalisation du contenu du widget
    translateWidget.showBanner(true); // Cacher la bannière du widget
    translateWidget.showPoweredBy(true); // Cacher le texte "Propulsé par Google Translate"
    translateWidget.disableAutoTranslation(); // Désactiver la traduction automatique
});
