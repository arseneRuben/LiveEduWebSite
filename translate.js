function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',  // Langue d'origine (français)
        includedLanguages: 'fr,es',  // Langues de destination (anglais, espagnol)
        autoDisplay: false  // Désactiver l'affichage automatique du widget de traduction
    }, 'google_translate_element');
}

document.getElementById('translateButton').addEventListener('click', function () {
    // Afficher le widget de traduction
    new google.translate.TranslateElement({
        pageLanguage: 'en',         // Langue d'origine (anglais)
        includedLanguages: 'fr,es', // Langues de destination (français, espagnol)
        autoDisplay: false           // Activer l'affichage automatique du widget de traduction
    }, 'google_translate_element');
});

