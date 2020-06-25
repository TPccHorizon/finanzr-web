<template>
    <div>
        <h1>{{ $t("settings.title") }}</h1>
        <v-col>
            {{ $t("settings.mail") }}: {{settings.user.mail}}
        </v-col>
        <v-col>
            {{ $t("settings.lang") }}:
            <v-select :items="getAvailableLangs"
                      v-model="$i18n.locale"
                      @change="changeLang($event)"

            ></v-select>
        </v-col>
        <v-col>
            {{ $t("settings.theme") }}: {{settings.theme}}
        </v-col>
    </div>

</template>

<script>
    export default {
        name: "SettingsView",
        data () {
            return {
                settings: {
                    user: {
                        mail: null
                    },
                    language: null,
                    theme: null
                }
            }
        },
        mounted () {
            this.axios
                .get('https://my-json-server.typicode.com/TPccHorizon/APIMock/user-settings')
                .then(response => (this.settings = response.data))
        },
        computed: {
            getAvailableLangs: function() {
                let langKeys = Object.keys(this.$i18n.messages);
                // let languages =
                // for (let i=0; i<langKeys.length; i++) {
                //
                // }
                console.log(langKeys);
                return langKeys;
            }
        },
        methods: {
            changeLang(event) {
                localStorage.setItem('lang', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
