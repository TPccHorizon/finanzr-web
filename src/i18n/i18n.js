import Vue from 'vue'
import VueI18n from 'vue-i18n';
import translationsEn from "@/i18n/translations/en";
import translationsDe from "@/i18n/translations/de";

Vue.use(VueI18n);

const messages = {
    en: translationsEn,
    de: translationsDe,
};

const i18n = new VueI18n({
    locale: 'en',
    messages
});

export default i18n;
