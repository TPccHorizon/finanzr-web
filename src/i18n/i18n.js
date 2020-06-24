import Vue from 'vue'
import VueI18n from 'vue-i18n';
import translationsEn from "@/i18n/translations/en";
import translationsDe from "@/i18n/translations/de";

Vue.use(VueI18n);

const translations = {
    en: translationsEn,
    de: translationsDe,
};

const DEFAULT_LANG = 'en';
let lang = localStorage.getItem('lang');
if (!lang) {
    lang = DEFAULT_LANG;
}

const i18n = new VueI18n({
    locale: lang,
    messages: translations
});

export default i18n;
