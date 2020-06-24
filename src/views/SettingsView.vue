<template>
    <div>
        <h1>{{ $t("settings.title") }}</h1>
        <v-col>
            Mail: {{settings.user.mail}}
        </v-col>
        <v-col>
            Language:
            <select v-model="$i18n.locale" @change="changeLang($event)">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                    {{ lang }}
                </option>
            </select>
        </v-col>
        <v-col>
            App Theme: {{settings.theme}}
        </v-col>
    </div>

</template>

<script>
    export default {
        name: "SettingsView",
        data () {
            return {
                langs: ['en', 'de'],
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
        methods: {
            changeLang(event) {
                localStorage.setItem('lang', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
