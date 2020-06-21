import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

const opts = {
    theme: {
        // dark: false,
        themes: {
            light: {
                primary: '#00BBA4',
                secondary: '#005B44',
                accent: '#F3EADA',
                error: '#FFA17A',
            },
        },
    }
};

export default new Vuetify(opts)
