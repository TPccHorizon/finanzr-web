<template>
    <div>
        <h1>Settings</h1>
        <v-col>
            Mail: {{settings.user.mail}}
        </v-col>
        <v-col>
            Language: {{settings.language}}
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
        }
    }
</script>

<style scoped>

</style>
