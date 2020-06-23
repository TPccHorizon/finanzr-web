import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

const opts = {
    theme: {
        // dark: false,
        themes: {
            light: {
                primary: '#58C2CC',
                secondary: '#008C96',
                accent: '#F3EADA',
                error: '#FF8B42',
            },
        },
    }
};

export default new Vuetify(opts)
